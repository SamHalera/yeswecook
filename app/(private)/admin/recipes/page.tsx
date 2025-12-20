import { getAllRecipesByUser } from "@/actions/recipe/recipe-action"
import { RecipesListComponent } from "@/components/recipe/recipesListComponent"
import { getUser } from "@/lib/auth-server"
import { unauthorized } from "next/navigation"

export default async function AllRecipesPage() {


    const user = await getUser()

    if (!user) return unauthorized()

    const allRecipes = await getAllRecipesByUser()

    return (
        <div>
            <h2>My Recipes</h2>

            {allRecipes && <RecipesListComponent recipes={allRecipes} />}
        </div>
    )
}