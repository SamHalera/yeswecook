import { getAllPublicRecipes, getAllRecipes } from "@/actions/recipe/recipe-action";
import { ExploreRecipesContent } from "@/components/exploreRecipes/exploreRecipesContent";
import { Hero } from "@/components/exploreRecipes/hero";
import { RecipeSection } from "@/components/exploreRecipes/recipeSection";
import { RecipesList } from "@/components/publicRecipe/recipesList";
import { getSession, getUser } from "@/lib/auth-server";
import { getURL } from "next/dist/shared/lib/utils";

export default async function ExploreRecipesPage() {

    const recipes = await getAllPublicRecipes()

    const currentUser = await getUser()





    return (
        <div className="min-h-screen parchment-bg">

            <ExploreRecipesContent recipes={recipes} />
        </div>
    )
}