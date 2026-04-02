"use server"
import { getUser } from "@/lib/auth-server"
import prisma from "@/lib/prisma"
import { slugifyName } from "@/lib/utils"
import { NewRecipeFormType } from "@/lib/zod/recipeSchema"
import { Category } from "@/src/generated/prisma/enums"
import { RecipeMediaProps } from "@/types/recipe"
import { create } from "domain"
import { connect } from "http2"
import { ca, fa, tr } from "zod/v4/locales"




export const createNewRecipeAction = async (values: NewRecipeFormType, media: RecipeMediaProps | undefined) => {
    const user = await getUser()
    if (!user) return
    try {
        console.log("values from form==>", values)
        const { name, durationPrep, durationCook, nbOfPersons, category, description, ingredients } = values
        const slug = slugifyName(name) ?? ""
        /**
         * values from form==> {
            name: 'Test Nom',
            duration: 'test durée en min',
            nbOfPersons: '4',
            category: 'PLATS',
            description: 'Test Description',
            ingredients: [
                { ingredient: [Object], quantity: '2', unit: 'cas' },
                { ingredient: [Object], quantity: '1', unit: 'entière' },
                { ingredient: [Object], quantity: '100', unit: 'gr' }
            ]
            }
         */

        const mediaToAdd = [media && media]
        const recipe = await prisma.recipe.create({
            data: {
                name,
                durationPrep,
                durationCook,
                category: category as keyof typeof Category,
                description,
                nbOfPersons,
                slug,
                authorId: user.id,
                ingredients: {
                    create: ingredients.map((item) => {
                        const ingredientName = item.ingredient.newName || item.ingredient.name;
                        if (!ingredientName) {
                            throw new Error("Ingredient name is required");
                        }
                        return {
                            quantity: item.quantity.toString(),
                            unit: item.unit,
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
                    isRecipeCover: media.isRecipeCover,
                    recipeId: recipe.id,
                }
            })
        }

        console.log("new reciper==>", recipe)
        return { status: "success", message: "La recette a bien été crée !" }
        //create recipeIngredint
    } catch (error) {
        console.error('error=>', error)
        return { status: "error", message: "Oups ! Une erreur est survenue lors de la création de la recette !" }
    }
}

export const updateRecipe = async (values: NewRecipeFormType, recipeId: string) => {
    console.log("values from form==>", values)
    const user = await getUser()
    if (!user) return
    const { name, durationPrep, durationCook, nbOfPersons, category, description, ingredients } = values
    const slug = slugifyName(values.name) ?? ""

    try {
        console.log("values ==>", values)
        console.log("slug ==>", slug)
        console.log("recipeId ==>", recipeId)

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
                    ...(description && { description }),
                    ...(nbOfPersons && { nbOfPersons }),
                    ...(slug && { slug }),
                    authorId: user.id,
                    ingredients: {
                        deleteMany: {},
                        create: ingredients.map((item) => {
                            const ingredientName = item.ingredient.newName || item.ingredient.name
                            if (!ingredientName) {
                                throw new Error("Ingredient name is required");
                            }
                            return {
                                quantity: item.quantity.toString(),
                                unit: item.unit,
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
        })

        return { status: "success", slug: recipeUpdated.slug, message: `La recette "${recipeUpdated.name}" a bien été modifiée !` }
    } catch (error) {
        console.error("Failed to update recipe:", error);
        return { status: "error", message: "Oups ! Une erreur est survenue lors de la création de la recette !" }
    }

}

export const persistRecipeMediaGallery = async (media: RecipeMediaProps[], recipeId: string) => {
    try {
        console.log("media form persistRecipeMediaGallery==>", media)
        const isNewCover = media.find(elt => elt.isRecipeCover)
        console.log("isNewCover==>", isNewCover)
        const previousRecipeCover = await prisma.media.findFirst({
            where: {
                recipeId,
                isRecipeCover: true
            }
        })

        await prisma.media.createMany({
            data: media.map((elt) => {
                console.log("elt==>", elt)
                return {
                    source: elt.source,
                    publicId: elt.publicId,
                    isRecipeCover: elt.isRecipeCover,
                    recipeId
                }
            })
        })
        if (isNewCover && previousRecipeCover) {
            //update old recipe Cover
            console.log("previousRecipeCover==>", previousRecipeCover)
            await prisma.media.update({
                where: {
                    id: previousRecipeCover.id
                },
                data: {
                    isRecipeCover: false
                }
            })
        }
        return { status: "success" }
    } catch (error) {
        console.error('error creating media gallery for recipe==>', error)
    }
}
export const getRecipeIngredients = async () => {
    try {
        const recipeIngredients = await prisma.recipeIngredient.findMany({

        })
        console.log("ingredients from DB==>", recipeIngredients)
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
                        name: true,
                        email: true,
                        image: true
                    }
                }
            }
        })

        return allRecipes

    } catch (error) {
        console.log("error==>", error)
    }
}
export const getAllRecipesByUser = async () => {
    const user = await getUser()
    if (!user) return

    console.log("user=+>", user)
    try {
        const allRecipes = await prisma.recipe.findMany({
            where: {
                authorId: user?.id
            },
            include: {
                author: {
                    select: {
                        name: true,
                        email: true,
                        image: true
                    }
                }
            }
        })

        console.log("recipes by user==>", allRecipes)
        return allRecipes

    } catch (error) {
        console.log("error==>", error)
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
                        name: true,
                        email: true,
                        image: true
                    }
                },
                ingredients: {
                    include: {
                        ingredient: true
                    }
                }
            }
        })
        return recipe
    } catch (error) {
        console.log("error==>", error)
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
        const recipeDeleted = await prisma.recipe.delete({
            where: {
                id
            }
        })
        return { status: "success", message: `La recette "${recipeDeleted.name}" a bien été modifiée !` }
    } catch (error) {
        console.log("error==>", error)
        return { status: "error", message: "Oups ! Une erreur est survenue lors de la supression de la recette !" }
    }
}