import { getAllRecipes } from "@/actions/recipe/recipe-action"
import { RecipesListComponent } from "@/components/recipe/recipesListComponent"

export default async function AllRecipesPage() {


    const allRecipes = await getAllRecipes()

    return (
        <div>
            <h2>My Recipes</h2>

            {allRecipes && <RecipesListComponent recipes={allRecipes} />}
        </div>
    )
}