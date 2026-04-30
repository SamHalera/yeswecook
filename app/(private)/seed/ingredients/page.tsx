import { IngredientsSeedComponents } from "@/components/seeds/ingredientsSeed";

import { getUser } from "@/lib/auth-server";
import { unauthorized } from "next/navigation";

export default async function SeedIngredientsPage() {

    const user = await getUser()

    if (!user || !user.isAdmin) unauthorized()
    return (
        <div className="m-auto h-full max-w-2xl flex flex-col gap-5 items-center justify-center">
            <h1 className="text-5xl text-primary font-body">Seed DB</h1>

            <IngredientsSeedComponents />

        </div>
    )
}