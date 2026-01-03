import { getAllRecipes } from "@/actions/recipe/recipe-action";
import { RecipesList } from "@/components/publicRecipe/recipesList";
import { getUser } from "@/lib/auth-server";

export default async function EntreesPage() {
    const user = await getUser()
    const allRecipes = await getAllRecipes()
    return (
        <div className="w-full">
            <h1>Toutes les Entrées de YesWeCook</h1>

            <RecipesList recipes={allRecipes} currentUser={user} categoryProps="ENTREES" />

        </div>
    );
}
