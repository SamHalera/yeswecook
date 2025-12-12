"use client"

import { deleteRecipe } from "@/actions/recipe/recipe-action"
import { Recipe } from "@/src/generated/prisma/client"
import { Trash, Trash2 } from "lucide-react"
import { useRouter } from "next/navigation"


type RecipeListProps = {
    recipes: Recipe[]
}
export const RecipesListComponent = ({ recipes }: RecipeListProps) => {

    const router = useRouter()

    return (
        <div>
            {recipes.map((recipe: Recipe) => {
                return <h3 key={recipe.id} className="flex items-center gap-2">{recipe.name} <Trash2 onClick={async () => {

                    try {
                        await deleteRecipe(recipe.id)
                        router.refresh()
                    } catch (error) {
                        console.log('error==>', error)
                    }
                }} className="text-red-400 cursor-pointer" /></h3>
            })}
        </div>
    )
}