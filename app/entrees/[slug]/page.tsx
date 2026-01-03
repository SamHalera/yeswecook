import { getRecipeBySlug } from "@/actions/recipe/recipe-action"
import { SingleRecipePage } from "@/components/publicRecipe/singleRecipePage"
import prisma from "@/lib/prisma"

export default async function SinglePlatPage({ params }: { params: Promise<{ slug: string }> }) {

    const { slug } = await params
    const recipe = await getRecipeBySlug(slug)
    if (!recipe) return
    return (
        <SingleRecipePage recipe={recipe} />
    )
}