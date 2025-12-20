
import { getIngredients } from "@/actions/recipe/ingredients-action";

import { CreateOrEditRecipeForm } from "@/components/recipe/createOrEditRecipeForm";
import { getUser } from "@/lib/auth-server";
import { unauthorized } from "next/navigation";


export default async function NewRecipePage() {

    const user = await getUser()

    if (!user) return unauthorized()
    const ingredients = await getIngredients()
    console.log("ingredients in page")

    return (
        <div className="w-full flex flex-col gap-7">
            <h2 className="text-center">New Recipe</h2>

            <div className="w-2/3 m-auto">

                <CreateOrEditRecipeForm dataIngredients={ingredients} />
            </div>
        </div>
    )
}