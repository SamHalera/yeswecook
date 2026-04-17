import { getAllRecipes } from "@/actions/recipe/recipe-action";
import { Hero } from "@/components/exploreRecipes/hero";
import { RecipeSection } from "@/components/exploreRecipes/recipeSection";
import { RecipesList } from "@/components/publicRecipe/recipesList";
import { getSession, getUser } from "@/lib/auth-server";
import { getURL } from "next/dist/shared/lib/utils";

export default async function ExploreRecipesPage() {

    const recipes = await getAllRecipes()

    const currentUser = await getUser()

    const entrees = recipes?.filter(recipe => recipe.category === "ENTREES")
    const plats = recipes?.filter(recipe => recipe.category === "PLATS")
    const desserts = recipes?.filter(recipe => recipe.category === "DESSERTS")
    const aperos = recipes?.filter(recipe => recipe.category === "APERO")

    return (
        <div className="min-h-screen parchment-bg">
            <Hero />

            <div className="max-w-7xl mx-auto px-8 space-y-12 pb-24">
                <RecipeSection
                    chapter="Chapter I"
                    title="Les Entrées"
                    recipes={entrees}
                />

                <RecipeSection
                    chapter="Chapter II"
                    title="Les Plats"
                    recipes={plats}
                />

                <RecipeSection
                    chapter="Chapter III"
                    title="Les Desserts"
                    recipes={desserts}
                />

                <RecipeSection
                    chapter="Chapter IV"
                    title="Les Apéritifs"
                    recipes={aperos}
                    gridCols={4}
                />
            </div>

        </div>
    )
}