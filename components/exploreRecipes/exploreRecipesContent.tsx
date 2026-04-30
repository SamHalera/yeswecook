"use client"
import { Hero } from "@/components/exploreRecipes/hero";
import { RecipeSection } from "@/components/exploreRecipes/recipeSection";
import { RecipesList } from "@/components/publicRecipe/recipesList";
import { RecipeBase, RecipeProps } from "@/types/recipe";
import React from "react";
export const ExploreRecipesContent = ({ recipes }: { recipes: RecipeBase[] | undefined | null, }) => {
    const [activeCategory, setActiveCategory] = React.useState('All Recipes');
    const [searcchValue, setSearchValue] = React.useState<string>("")
    const categories = ['All Recipes', 'Entrées', 'Plats', 'Desserts', 'Apéritifs'];
    const entrees = recipes?.filter(recipe => recipe.category === "ENTREES").filter(recipe => searcchValue ? recipe.name.includes(searcchValue) : recipe)
    const plats = recipes?.filter(recipe => recipe.category === "PLATS").filter(recipe => searcchValue ? recipe.name.includes(searcchValue) : recipe)
    const desserts = recipes?.filter(recipe => recipe.category === "DESSERTS").filter(recipe => searcchValue ? recipe.name.includes(searcchValue) : recipe)
    const aperos = recipes?.filter(recipe => recipe.category === "APERO").filter(recipe => searcchValue ? recipe.name.includes(searcchValue) : recipe)
    return (<>

        <Hero categories={categories} activeCategory={activeCategory} setActiveCategory={setActiveCategory} setSearchValue={setSearchValue} />

        <div className="max-w-7xl mx-auto px-8 space-y-12 pb-24">
            {(activeCategory === "All Recipes" || activeCategory === "Entrées") &&

                <RecipeSection
                    chapter="Chapter I"
                    title="Les Entrées"
                    recipes={entrees}
                />
            }

            {(activeCategory === "All Recipes" || activeCategory === "Plats") &&

                <RecipeSection
                    chapter="Chapter II"
                    title="Les Plats"
                    recipes={plats}
                />
            }
            {(activeCategory === "All Recipes" || activeCategory === "Desserts") &&

                <RecipeSection
                    chapter="Chapter III"
                    title="Les Desserts"
                    recipes={desserts}
                />
            }

            {(activeCategory === "All Recipes" || activeCategory === "Apéros") &&

                <RecipeSection
                    chapter="Chapter IV"
                    title="Les Apéritifs"
                    recipes={aperos}
                    gridCols={4}
                />
            }

        </div>
    </>
    )
}