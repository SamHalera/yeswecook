import prisma from "@/lib/prisma"

export const createNewRecipeAction = async (name: string) => {
    try {
        await prisma.recipe.create({
            data: {
                name
            }
        })
    } catch (error) {
        console.error('error=>', error)
    }
}