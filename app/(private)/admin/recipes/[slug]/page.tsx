

import { getIngredients } from "@/actions/recipe/ingredients-action"
import { RecipeSingleComponent } from "@/components/recipe/recipeSingleComponent"
import { getUser } from "@/lib/auth-server"
import prisma from "@/lib/prisma"
import { notFound, unauthorized } from "next/navigation"

export default async function RecipePage({ params }: { params: Promise<{ slug: string }> }) {

    const user = await getUser()

    if (!user) return unauthorized()
    const { slug } = await params
    console.log("params", slug)
    const recipe = await prisma.recipe.findUnique({
        where: {
            slug: slug
        },
        include: {
            ingredients: {
                include: {
                    ingredient: true
                }
            }
        }
    })
    const ingredients = await getIngredients()
    if (!recipe) notFound()
    return (
        <RecipeSingleComponent recipe={recipe} dataIngredients={ingredients} />
    )

}