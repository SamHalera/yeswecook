'use client'
import { deleteRecipe } from "@/actions/recipe/recipe-action"
import { AlertDeleteComponent } from "@/components/globals/AlertDeleteComponent"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Recipe } from "@/src/generated/prisma/client"
import { AlarmClockIcon, CookingPot, PencilIcon, Users2Icon } from "lucide-react"
import { useState } from "react"
import { CreateOrEditRecipeForm } from "./createOrEditRecipeForm"
export const RecipeSingleComponent = ({ recipe, dataIngredients }: {
    recipe: RecipeProps, dataIngredients: {
        name: string;
        id: string;
    }[] | undefined
}) => {
    const [isEditMode, setIsEditMode] = useState<boolean>(false)
    console.log("isEditMode==>", isEditMode)
    console.log('recipe==>', recipe)
    return !isEditMode ? (
        <Card className="w-full max-w-lg mx-auto">
            <CardHeader>
                <CardTitle className="text-center">{recipe?.name}</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-5 items-center">
                <div className="flex flex-col gap-4">
                    <span className="flex items-center gap-2"><CookingPot />{recipe?.category}</span>
                    <span className="flex items-center gap-2"><Users2Icon />{recipe?.nbOfPersons}</span>
                    <span className="flex items-center gap-2"><AlarmClockIcon />{recipe?.duration}</span>
                </div>
                <div>
                    <p>{recipe?.description}</p>
                </div>
            </CardContent>
            <CardFooter className="flex justify-between gap-2 w-full">
                <Button onClick={() => setIsEditMode(!isEditMode)} className="bg-green-300"><PencilIcon /> Modifier</Button>
                <AlertDeleteComponent elementName="recette" deleteAction={deleteRecipe.bind(null, recipe.id, recipe.authorId)} />
            </CardFooter>
        </Card>
    ) : (
        <CreateOrEditRecipeForm dataIngredients={dataIngredients} recipe={recipe} isEditMode={isEditMode} setIsEditMode={setIsEditMode} />
    )
}