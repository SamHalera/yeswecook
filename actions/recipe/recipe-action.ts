"use server"
import prisma from "@/lib/prisma"
import { NewRecipeFormType } from "@/lib/zod/recipeSchema"
import { Category } from "@/src/generated/prisma/enums"
import { success } from "zod"

export const createNewRecipeAction = async (values: NewRecipeFormType) => {
    try {
        console.log("values from form==>", values)
        const { name, duration, nbOfPersons, category, description, ingredients } = values

        const recipe = await prisma.recipe.create({
            data: {
                name,
                duration,
                category: category as keyof typeof Category,
                description,
                nbOfPersons,
                ingregients: {
                    create: ingredients.map((item) => ({
                        quantity: parseFloat(item.quantity),
                        unit: item.unit,
                        ingredient: {
                            connectOrCreate: {
                                where: {
                                    name: item.ingredientName
                                },
                                create: {
                                    name: item.newName
                                }
                            }
                        }

                    }))
                }
            },
            include: {
                ingregients: {
                    include: {
                        ingredient: true
                    }
                }
            }
        })
        console.log("new reciper==>", recipe)
        return { success: "Success" }
        //create recipeIngredint
    } catch (error) {
        console.error('error=>', error)
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

export const deleteRecipe = async (id: string) => {
    try {

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


