import { getAllRecipesByUser } from "@/actions/recipe/recipe-action"
import MyRecipesComponent from "@/components/myRecipes/myRecipesComponent"
import MyRecipes from "@/components/myRecipes/myRecipesComponent"
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

            <MyRecipesComponent allRecipes={allRecipes} currentUser={user} />
            {/* {allRecipes && <RecipesList recipes={allRecipes} currentUser={user} categoryProps={""} />} */}
        </div>
    )
}