"use client"

import { createManyIngredients } from "@/actions/recipe/ingredients-action"
import { Button } from "../ui/button"
import { toast } from "sonner"

export const IngredientsSeedComponents = () => {
    return <Button onClick={async () => {
        try {
            const seedIngredientsAction = await createManyIngredients()

            if (seedIngredientsAction?.result === "succes") {
                toast.success("Les ingredients ont bien été crées!")
            } else {
                toast.error('Oups! Il y a une erreur! ')
            }
        } catch (error) {
            console.error('Error trying seed ingredient on click')
        }
    }}>Seed ingredients</Button>
}