
import { getIngredients } from "@/actions/recipe/ingredients-action";

import { CreateOrEditRecipeForm } from "@/components/recipe/createOrEditRecipeForm";
import { HeadLineComponent } from "@/components/recipe/headLineComponent";
import { getUser } from "@/lib/auth-server";
import { unauthorized } from "next/navigation";


export default async function NewRecipePage() {

    const user = await getUser()

    if (!user) return unauthorized()
    const ingredients = await getIngredients()
    console.log("ingredients in page")

    return (
        <div className="grow pt-10 pb-24 px-6 max-w-5xl mx-auto w-full">
            <HeadLineComponent isEditMode={false} />

            <div className="m-auto">

                <CreateOrEditRecipeForm dataIngredients={ingredients} />
            </div>
        </div>
    )
}