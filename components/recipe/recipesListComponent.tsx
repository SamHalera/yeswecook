"use client"

import { deleteRecipe } from "@/actions/recipe/recipe-action"
import { Recipe } from "@/src/generated/prisma/client"
import { Trash, Trash2 } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"


type RecipeListProps = {
    recipes: Recipe[]
}
export const RecipesListComponent = ({ recipes }: RecipeListProps) => {

    const router = useRouter()

    return (
        <div>
            {recipes.map((recipe: Recipe) => {
                return <Link href={`/admin/recipes/${recipe.slug}`} key={recipe.id} className="flex items-center gap-2">{recipe.name} </Link>
            })}
        </div>
    )
}