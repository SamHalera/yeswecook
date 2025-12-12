import prisma from "@/lib/prisma"

export const getIngredients = async () => {
    try {
        const ingredients = await prisma.ingredient.findMany()
        console.log("ingredients from DB==>", ingredients)

        return ingredients
    } catch (error) {
        console.error('error retrieving ingredients==>', error)
    }
}