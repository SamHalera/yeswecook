"use server"
import prisma from "@/lib/prisma"

import seed from "@/prisma/seed-data.json"



const { ingredients } = seed
export const getIngredients = async () => {
    try {
        const ingredients = await prisma.ingredient.findMany()

        if (!ingredients) return []
        return ingredients
    } catch (error) {
        console.error('error retrieving ingredients==>', error)
    }
}

export const createManyIngredients = async () => {
    try {
        const ingredientsCreation = await prisma.ingredient.createMany({
            data: ingredients
        })
        if (ingredientsCreation) {
            return { result: "success" }
        } else {
            return { result: "failure" }
        }
    } catch (error) {
        console.error('Erreur seed ingredients==>', error)
    }
}