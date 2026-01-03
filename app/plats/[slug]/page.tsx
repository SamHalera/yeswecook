import { getRecipeBySlug } from "@/actions/recipe/recipe-action"
import { SingleRecipePage } from "@/components/publicRecipe/singleRecipePage"
import prisma from "@/lib/prisma"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default async function SinglePlatPage({ params }: { params: Promise<{ slug: string }> }) {

    const { slug } = await params
    const recipe = await getRecipeBySlug(slug)
    if (!recipe) return
    return (


        <SingleRecipePage recipe={recipe} />

    )
}