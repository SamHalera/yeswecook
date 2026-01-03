import { getAllRecipesByUser } from "@/actions/recipe/recipe-action"
import { RecipesList } from "@/components/publicRecipe/recipesList"
import { RecipesListComponent } from "@/components/recipe/recipesListComponent"
import { getUser } from "@/lib/auth-server"
import { unauthorized } from "next/navigation"

export default async function AllRecipesPage() {


    const user = await getUser()

    if (!user) return unauthorized()

    const allRecipes = await getAllRecipesByUser()

    return (
        <div className="w-full">
            <h2>My Recipes</h2>

            {allRecipes && <RecipesList recipes={allRecipes} currentUser={user} categoryProps={""} />}
        </div>
    )
}