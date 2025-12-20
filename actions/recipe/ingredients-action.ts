import prisma from "@/lib/prisma"

export const getIngredients = async () => {
    try {
        const ingredients = await prisma.ingredient.findMany()

        if (!ingredients) return []
        return ingredients
    } catch (error) {
        console.error('error retrieving ingredients==>', error)
    }
}