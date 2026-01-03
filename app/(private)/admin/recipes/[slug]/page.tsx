

import { getIngredients } from "@/actions/recipe/ingredients-action"
import { RecipeSingleComponent } from "@/components/recipe/recipeSingleComponent"
import { getUser } from "@/lib/auth-server"
import prisma from "@/lib/prisma"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
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
        <div className="flex flex-col gap-2.5 items-center justify-center mx-auto w-full">
            <Link href={"/admin/recipes"} className="flex items-center gap-2 self-start m-4 bg-blue-400 border border-blue-400 p-2 rounded text-white transition hover:text-blue-400 hover:bg-transparent"><ArrowLeft /> retour aux recettes</Link>
            <RecipeSingleComponent recipe={recipe} dataIngredients={ingredients} />
        </div>
    )

}