"use client"

import { Recipe } from "@/src/generated/prisma/client"
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
                return <Link href={`/admin/recipes/${recipe.slug}`} key={recipe.id} className="flex items-center gap-2 text-blue-400 transition hover:text-blue-600">{recipe.name} </Link>
            })}
        </div>
    )
}