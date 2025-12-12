
import { getIngredients } from "@/actions/recipe/ingredients-action";
import { getRecipeIngredients } from "@/actions/recipe/recipe-action";
import { NewRecipeForm } from "@/components/recipe/newRecipeForm";
import { Ingredient } from "@/src/generated/prisma/client";

export default async function NewRecipePage() {

    const ingredients = await getIngredients()
    console.log("ingredients in page")

    return (
        <div className="w-full flex flex-col gap-7">
            <h2 className="text-center">New Recipe</h2>

            <div className="w-2/3 m-auto">

                <NewRecipeForm dataIngredients={ingredients} />
            </div>
        </div>
    )
}