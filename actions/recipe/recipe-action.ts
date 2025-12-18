"use server"
import { getUser } from "@/lib/auth-server"
import prisma from "@/lib/prisma"
import { slugifyName } from "@/lib/utils"
import { NewRecipeFormType } from "@/lib/zod/recipeSchema"
import { Category } from "@/src/generated/prisma/enums"
import { ca } from "zod/v4/locales"




export const createNewRecipeAction = async (values: NewRecipeFormType) => {
    const user = await getUser()
    if (!user) return
    try {
        console.log("values from form==>", values)
        const { name, duration, nbOfPersons, category, description, ingredients } = values
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
        const recipe = await prisma.recipe.create({
            data: {
                name,
                duration,
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

        console.log("new reciper==>", recipe)
        return { success: "Success" }
        //create recipeIngredint
    } catch (error) {
        console.error('error=>', error)
    }
}

export const updateRecipe = async (values: NewRecipeFormType, recipeId: string) => {
    console.log("values from form==>", values)
    const user = await getUser()
    if (!user) return
    const { name, duration, nbOfPersons, category, description, ingredients } = values
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
                    ...(duration && { duration }),
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

        return { status: "success", recipeUpdated }
    } catch (error) {
        console.error("Failed to update recipe:", error);
        throw new Error("Recipe update failed. No data was modified.");
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
        const allRecipes = await prisma.recipe.findMany()

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
            }
        })

        console.log("recipes by user==>", allRecipes)
        return allRecipes

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
        await prisma.recipe.delete({
            where: {
                id
            }
        })

    } catch (error) {
        console.log("error==>", error)
    }
}





// const recipe = await prisma.recipe.update({
//     where: {
//         id: recipeId
//     },
//     data: {
//         // ...(item.ingredient.name && { name: item.ingredient.name })
//         ...(name && { name }),
//         ...(duration && { duration }),
//         ...(category && { category: category as keyof typeof Category }),
//         ...(description && { description }),
//         ...(nbOfPersons && { nbOfPersons }),
//         ...(slug && { slug }),
//         authorId: user.id,
//         ingredients: {
//             deleteMany: {}, // Supprime toutes les relations existantes
//             create: ingredients.map((item) => ({
//                 quantity: item.quantity.toString(),
//                 unit: item.unit,
//                 ingredient: {
//                     connectOrCreate: {
//                         where: {
//                             name: item.ingredient.name
//                         },
//                         create: {
//                             name: item.ingredient.newName || item.ingredient.name
//                         }
//                     }
//                 }
//             }))
//         },
//     },
//     include: {
//         ingredients: {
//             include: {
//                 ingredient: true
//             }
//         },
//         author: true
//     }
// })