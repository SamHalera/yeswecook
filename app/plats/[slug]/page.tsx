import { getRecipeBySlug } from "@/actions/recipe/recipe-action"
import SingleRecipeContent from "@/components/publicRecipe/singleRecipeContent"
import { SingleRecipePage } from "@/components/publicRecipe/singleRecipePage"
import { getUser } from "@/lib/auth-server"
import prisma from "@/lib/prisma"
import { RecipeProps } from "@/types/recipe"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default async function SinglePlatPage({ params }: { params: Promise<{ slug: string }> }) {

    const { slug } = await params
    const currentUser = await getUser()
    const recipe = await getRecipeBySlug(slug)
    if (!recipe) return
    const mappedRecipe: RecipeProps = {
        ...recipe,
        cover: recipe.cover
            ? { source: recipe.cover.source, publicId: recipe.cover.publicId, caption: recipe.cover.caption }
            : null,
        ingredients: recipe.ingredients.map((ri) => ({
            ingredient: { name: ri.ingredient.name },
            quantity: String(ri.quantity),
            unity: ri.unity,
        })),
    }
    return (

        // <SingleRecipePage recipe={recipe} />
        <SingleRecipeContent currentUser={currentUser} recipe={mappedRecipe} />

    )
}