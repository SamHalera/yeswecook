"use server"
import { getUser } from "@/lib/auth-server"
import prisma from "@/lib/prisma"
import { slugifyName } from "@/lib/utils"
import { NewRecipeFormType } from "@/lib/zod/recipeSchema"
import { Category, Unity } from "@/src/generated/prisma/enums"
import { RecipeMediaProps } from "@/types/recipe"
import { getUserFromDB } from "../user/user-action"
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
    cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
    api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    secure: true,
});


export const createNewRecipeAction = async (values: NewRecipeFormType, media: RecipeMediaProps | null) => {
    const user = await getUser()
    if (!user) return
    try {
        const { name, durationPrep, durationCook, nbOfPersons, category, instructions, comment, ingredients, isPublic, shortDescription } = values
        const slug = slugifyName(name) ?? ""


        const recipe = await prisma.recipe.create({
            data: {
                name,
                durationPrep,
                durationCook,
                category: category as keyof typeof Category,
                instructions,
                nbOfPersons,
                comment,
                slug,
                authorId: user.id,
                isPublic,
                shortDescription,
                ingredients: {
                    create: ingredients.map((item) => {
                        const ingredientName = item.ingredient.newName || item.ingredient.name;
                        if (!ingredientName) {
                            throw new Error("Ingredient name is required");
                        }
                        return {
                            quantity: parseFloat(item.quantity),
                            unity: item.unity as Unity,
                            ingredient: {
                                connectOrCreate: {
                                    where: {
                                        name: ingredientName
                                    },
                                    create: {
                                        name: ingredientName
                                    }
                                }
                            }
                        }
                    })
                }
            },
            include: {
                ingredients: {
                    include: {
                        ingredient: true
                    }
                },
                author: true
            }
        })


        if (recipe && media) {
            await prisma.media.create({
                data: {
                    source: media.source,
                    publicId: media.publicId,
                    recipeId: recipe.id,
                }
            })
        }

        return { status: "success", message: "La recette a bien été crée !", recipe }
        //create recipeIngredint
    } catch (error) {
        console.error('error=>', error)
        return { status: "error", message: "Oups ! Une erreur est survenue lors de la création de la recette !", recipe: null }
    }
}

export const updateRecipe = async (values: NewRecipeFormType, recipeId: string, media: RecipeMediaProps | null) => {

    const user = await getUser()
    if (!user) return
    const { name, durationPrep, durationCook, nbOfPersons, category, instructions, comment, ingredients, isPublic, shortDescription } = values
    const slug = slugifyName(values.name) ?? ""

    try {

        const recipeUpdated = await prisma.$transaction(async (tx) => {
            return await tx.recipe.update({
                where: {
                    id: recipeId
                },
                data: {
                    ...(name && { name }),
                    ...(durationPrep && { durationPrep }),
                    ...(durationCook && { durationCook }),
                    ...(category && { category: category as keyof typeof Category }),
                    ...(instructions && { instructions }),
                    ...(comment && { comment }),
                    ...(isPublic && { isPublic }),
                    ...(nbOfPersons && { nbOfPersons }),
                    ...(slug && { slug }),
                    ...(shortDescription && { shortDescription }),
                    authorId: user.id,
                    ingredients: {
                        deleteMany: {},
                        create: ingredients.map((item) => {
                            const ingredientName = item.ingredient.newName || item.ingredient.name
                            if (!ingredientName) {
                                throw new Error("Ingredient name is required");
                            }
                            return {
                                quantity: parseFloat(item.quantity),
                                unity: item.unity as Unity,
                                ingredient: {
                                    connectOrCreate: {
                                        where: {
                                            name: ingredientName
                                        },
                                        create: {
                                            name: ingredientName
                                        }
                                    }
                                }
                            }
                        })
                    }
                },
                include: {
                    ingredients: {
                        include: {
                            ingredient: true
                        }
                    },
                    author: true,
                    cover: true

                }
            })
        })

        if (recipeUpdated && media) {
            //SI PAS ENCORE DE MEDIA
            if (!recipeUpdated.cover) {
                await createMedia(media, recipeUpdated.id)
            }

            //SI DEJA MEDIA et NEW MEDIE is different (delete current et replace abec NEW)
            else if (recipeUpdated.cover && (media.publicId !== recipeUpdated.cover?.publicId)) {
                const deleteCurrentMedia = await prisma.media.delete({
                    where: {
                        recipeId
                    }
                })
                if (deleteCurrentMedia) {
                    const deleteMEdiaFromCloudinary = await cloudinary.api.delete_resources(
                        [deleteCurrentMedia.publicId],
                        {
                            type: "upload",
                            resource_type: "image",
                        }
                    );
                }
                await createMedia(media, recipeUpdated.id)
            }
        }
        else if (recipeUpdated.cover && !media) {
            const deleteCurrentMedia = await prisma.media.delete({
                where: {
                    recipeId
                }
            })
        }

        return { status: "success", recipe: recipeUpdated, message: `La recette "${recipeUpdated.name}" a bien été modifiée !` }
    } catch (error) {
        console.error("Failed to update recipe:", error);
        return { status: "error", message: "Oups ! Une erreur est survenue lors de la création de la recette !", recipe: null }
    }
}

const createMedia = async (media: RecipeMediaProps, recipeId: string) => {
    try {
        await prisma.media.create({
            data: {
                source: media.source,
                publicId: media.publicId,
                recipeId,
            }
        })
    } catch (error) {
        console.error("Failed to create media recipe:", error);
    }
}

export const getRecipeIngredients = async () => {
    try {
        const recipeIngredients = await prisma.recipeIngredient.findMany({

        })
    } catch (error) {
        console.error('error retrieving ingredients==>', error)
    }
}

export const getAllRecipes = async () => {
    try {
        const allRecipes = await prisma.recipe.findMany({
            include: {
                author: {
                    select: {
                        id: true,
                        username: true,
                        name: true,
                        email: true,
                        image: true,
                        createdAt: true,
                        updatedAt: true,
                        emailVerified: true,
                        isAdmin: true
                    }
                },
                cover: true
            }
        })

        return allRecipes

    } catch (error) {
        console.error("error==>", error)
    }
}
export const getAllPublicRecipes = async () => {
    try {
        const allRecipes = await prisma.recipe.findMany({
            where: { isPublic: true },
            include: {
                author: {
                    select: {
                        id: true,
                        username: true,
                        name: true,
                        email: true,
                        image: true,
                        createdAt: true,
                        updatedAt: true,
                        emailVerified: true,
                        isAdmin: true
                    }
                },
                cover: true
            }
        })

        return allRecipes

    } catch (error) {
        console.error("error==>", error)
    }
}
export const getAllRecipesByUserName = async (username: string) => {
    // const user = await getUser()

    const user = await getUserFromDB(username)

    if (!user) return


    try {
        const allRecipes = await prisma.recipe.findMany({
            where: {
                authorId: user?.id
            },
            include: {
                author: {
                    select: {
                        id: true,
                        username: true,
                        name: true,
                        email: true,
                        image: true,
                        createdAt: true,
                        updatedAt: true,
                        emailVerified: true,
                        isAdmin: true
                    }
                },
                cover: true
            }
        })
        return allRecipes

    } catch (error) {
        console.error("error==>", error)
    }

}
export const getAllRecipesByUser = async () => {
    const user = await getUser()
    if (!user) return
    try {
        const allRecipes = await prisma.recipe.findMany({
            where: {
                authorId: user?.id
            },
            include: {
                author: true,
                cover: true
            }
        })
        return allRecipes

    } catch (error) {
        console.error("error==>", error)
    }

}

export const getRecipeBySlug = async (slug: string) => {
    try {
        const recipe = await prisma.recipe.findUnique({
            where: {
                slug
            },
            include: {
                author: {
                    select: {
                        id: true,
                        username: true,
                        name: true,
                        email: true,
                        image: true,
                        createdAt: true,
                        updatedAt: true,
                        emailVerified: true,
                    }
                },
                ingredients: {
                    include: {
                        ingredient: true
                    }
                },
                cover: true
            }
        })
        return recipe
    } catch (error) {
        console.error("error==>", error)
    }
}
export const deleteRecipe = async (id: string, authorId: string) => {
    const user = await getUser()
    if (!user) return
    try {
        if (authorId !== user.id) return
        await prisma.recipeIngredient.deleteMany({
            where: {
                recipeId: id
            }
        })
        const deleteCurrentMedia = await prisma.media.delete({
            where: {
                recipeId: id
            }
        })
        if (deleteCurrentMedia) {
            const deleteMEdiaFromCloudinary = await cloudinary.api.delete_resources(
                [deleteCurrentMedia.publicId],
                {
                    type: "upload",
                    resource_type: "image",
                }
            );

        }
        const recipeDeleted = await prisma.recipe.delete({
            where: {
                id
            }
        })
        return { status: "success", message: `La recette "${recipeDeleted.name}" a bien été modifiée !` }
    } catch (error) {
        console.error("error==>", error)
        return { status: "error", message: "Oups ! Une erreur est survenue lors de la supression de la recette !" }
    }
}