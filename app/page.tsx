"use server"

import { getAllRecipes } from "@/actions/recipe/recipe-action";
import { HomePageComponent } from "@/components/home/homePage";

import { RecipeItem } from "@/components/publicRecipe/recipeItem";
import { RecipesList } from "@/components/publicRecipe/recipesList";
import { getUser } from "@/lib/auth-server";
import prisma from "@/lib/prisma";

export default async function Home() {
  const user = await getUser()
  const allRecipes = await getAllRecipes()

  return (
    <HomePageComponent user={user} allRecipes={allRecipes} />
    // <div className="main w-full">
    //   <h1>Toutes les recettes de YesWeCook</h1>

    //   {/* <RecipesList recipes={allRecipes} currentUser={user} categoryProps="" /> */}

    // </div>
  );
}
