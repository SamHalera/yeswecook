'use client'
import { deleteRecipe } from "@/actions/recipe/recipe-action"
import { AlertDeleteComponent } from "@/components/globals/AlertDeleteComponent"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Recipe } from "@/src/generated/prisma/client"
import { AlarmClockCheckIcon, AlarmClockIcon, CookingPot, PencilIcon, Users2Icon } from "lucide-react"
import { useState } from "react"
import { CreateOrEditRecipeForm } from "./createOrEditRecipeForm"
import { useEditor } from "@tiptap/react"
import { RecipeProps } from "@/types/recipe"
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
                <div className="flex flex-col gap-4 items-center">
                    <span className="flex items-center gap-2"><CookingPot />{recipe?.category}</span>
                    <span className="flex items-center gap-2"><Users2Icon />{recipe?.nbOfPersons}</span>

                    <span className="flex items-center gap-2"><AlarmClockIcon />preparation : {recipe?.durationPrep}</span>
                    <span className="flex items-center gap-2"><AlarmClockCheckIcon />cuisson : {recipe?.durationCook}</span>

                </div>
                <div dangerouslySetInnerHTML={{ __html: recipe?.description }} />
            </CardContent>
            <CardFooter className="flex justify-between gap-2 w-full">
                <Button onClick={() => setIsEditMode(!isEditMode)} className="bg-green-300"><PencilIcon /> Modifier</Button>
                <AlertDeleteComponent elementName="recette" recipeId={recipe.id} authorId={recipe.authorId} />
            </CardFooter>
        </Card>
    ) : (
        <CreateOrEditRecipeForm dataIngredients={dataIngredients} recipe={recipe} isEditMode={isEditMode} setIsEditMode={setIsEditMode} />
    )
}