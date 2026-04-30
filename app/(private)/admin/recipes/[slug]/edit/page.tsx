import { getIngredients } from "@/actions/recipe/ingredients-action"
import { CreateOrEditRecipeForm } from "@/components/recipe/createOrEditRecipeForm"
import { HeadLineComponent } from "@/components/recipe/headLineComponent"
import { getUser } from "@/lib/auth-server"
import prisma from "@/lib/prisma"
import { RecipeProps } from "@/types/recipe"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { unauthorized } from "next/navigation"

export default async function RecipeEdit({ params }: { params: Promise<{ slug: string }> }) {

    const user = await getUser()

    if (!user) return unauthorized()
    const { slug } = await params

    const recipe = await prisma.recipe.findUnique({
        where: {
            slug
        },
        include: {
            ingredients: {
                include: {
                    ingredient: true
                }
            },
            author: true,
            cover: true
        }
    })

    let mappedRecipe: RecipeProps | undefined = undefined
    if (recipe) {
        mappedRecipe = {
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
    }
    const ingredients = await getIngredients()

    return (
        <div className=" flex flex-col grow pt-10 pb-24 px-6 max-w-5xl mx-auto w-full">

            <Link href={"/admin/recipes"} className="mb-8 block flex gap-4 edit-target cursor-pointer bg-primary text-on-primary p-3 rounded-xl shadow-xl hover:bg-primary-container transition-colors text-white self-start"> <ArrowLeft /> Retour à mes recettes</Link>
            <HeadLineComponent isEditMode={true} recipe={mappedRecipe} />

            <div className="m-auto">

                <CreateOrEditRecipeForm dataIngredients={ingredients} recipe={mappedRecipe} />
            </div>
        </div>
    )

}