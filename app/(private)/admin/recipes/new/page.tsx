
import { getIngredients } from "@/actions/recipe/ingredients-action";

import { CreateOrEditRecipeForm } from "@/components/recipe/createOrEditRecipeForm";
import { HeadLineComponent } from "@/components/recipe/headLineComponent";
import { getUser } from "@/lib/auth-server";
import { redirect, unauthorized } from "next/navigation";


export default async function NewRecipePage() {

    const user = await getUser()

    if (!user) redirect(`/auth/sign-in?prevURL=${"admin/recipes/new"}`)
    const ingredients = await getIngredients()

    return (
        <div className="grow pt-10 pb-24 px-6 max-w-5xl mx-auto w-full">
            <HeadLineComponent isEditMode={false} />

            <div className="m-auto">

                <CreateOrEditRecipeForm dataIngredients={ingredients} />
            </div>
        </div>
    )
}