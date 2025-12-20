import { FieldArrayWithId, FieldError, SetFieldValue, UseFieldArrayRemove, UseFormRegister, UseFormSetValue } from "react-hook-form"

import { Button } from "../ui/button";
import { ListCheck, PlusCircle, Trash2 } from "lucide-react";
import { useState } from "react";
import { NewRecipeFormType } from "@/lib/zod/recipeSchema";
import { extractErrorFieldFromErrorsObject } from "@/lib/utils";

export const IngredientFieldRow = ({ register, setValue, field, errors, index, remove, dataIngredients }: {
    register: UseFormRegister<NewRecipeFormType>;
    setValue: UseFormSetValue<NewRecipeFormType>
    field: FieldArrayWithId<NewRecipeFormType, "ingredients", 'id'>;
    index: number;
    remove: UseFieldArrayRemove;
    /* eslint-disable  @typescript-eslint/no-explicit-any */
    errors: any[] | null;
    dataIngredients: {
        name: string;
        id: string;
    }[] | undefined

}) => {
    const [newIngredient, setNewIngredient] = useState<boolean>(false)
    const [inputValue, setInputValue] = useState<string>("")

    const quantityFieldError = extractErrorFieldFromErrorsObject(errors, "quantity")
    // const ingredientFieldError = extractErrorFieldFromErrorsObject(errors, "ingredientName")
    const unitFieldError = extractErrorFieldFromErrorsObject(errors, "unit")

    console.log(quantityFieldError, unitFieldError)
    return (
        <div className="flex flex-col gap-6 bg-gray-50 p-4 relative">

            {/* {ingredientFieldError && <span className=" ml-2 italic text-red-500 text-sm">{ingredientFieldError.message}</span>} */}
            <div className="h-8 w-8 rounded-full bg-gray-300 flex items-center justify-center absolute right-4 top-4">{index + 1}</div>
            <div className="flex gap-4 items-end transition w-2/3 h-32">
                {!newIngredient ?
                    (
                        <div className="flex flex-col gap-2 flex-1 transition">
                            <label htmlFor="ingredientSelect">Choisir un ingrédient</label>
                            <div className="flex gap-3 items-center">
                                <span className="italic text-muted-foreground">Tu trouves pas ton ingrédient ?</span>
                                <Button onClick={() => setNewIngredient(!newIngredient)} type="button" className="flex gap-2.5 self-start cursor-pointer text-xs">Ajoutes-le ! <PlusCircle /></Button>
                            </div>
                            <select {...register(`ingredients.${index}.ingredient.name`)} id="ingredientSelect" className="border rounded-sm px-2.5 py-2">
                                <option>-- Choisir un ingrédient --</option>
                                {dataIngredients?.map((ingredient) => {
                                    return (
                                        <option key={ingredient.id} value={ingredient.name}>{ingredient.name}</option>
                                    )
                                })}
                            </select>
                            <input type="hidden" value="" />
                        </div>
                    ) :
                    (
                        <div className="flex flex-col gap-2 flex-1 transition">
                            <label htmlFor="newIngredient" className="flex gap-2.5 items-center">
                                Nouvel ingrédient OU
                                <Button onClick={() => setNewIngredient(!newIngredient)} type="button" className="flex gap-2.5 self-start cursor-pointer text-xs">Regarder la liste <ListCheck /></Button>
                            </label>

                            <input {...register(`ingredients.${index}.ingredient.newName`)} onChange={(e) => {
                                setInputValue(e.target.value)
                            }} type="text" id="newIngredient" placeholder="votre nouvel ingrédient" className="border rounded-sm px-2.5 py-2" />
                            {/* <input  {...register(`ingredients.${index}.newName`)} type="hidden" /> */}
                        </div>
                    )}

            </div>
            <div className="flex gap-4 items-end">
                <div className="flex flex-col gap-2 flex-1">
                    <div>
                        <label htmlFor="quantity">Quantité</label>
                        {quantityFieldError && <span className=" ml-2 italic text-red-500 text-sm">{quantityFieldError.message}</span>}
                    </div>
                    <input {...register(`ingredients.${index}.quantity`)} type="number" id="quantity" placeholder="Quelle quantité ?" className="border rounded-sm px-2.5 py-2" />
                </div>
                <div className="flex flex-col gap-2 flex-1">
                    <div>
                        <label htmlFor="unit">Unité de mesure</label>
                        {unitFieldError && <span className=" ml-2 italic text-red-500 text-sm">{unitFieldError.message}</span>}
                    </div>
                    <input {...register(`ingredients.${index}.unit`)} type="text" id="unit" placeholder="Quelle unité de mesure ?" className="border rounded-sm px-2.5 py-2" />

                </div>
            </div>
            <Button onClick={() => remove(index)} type="button" className="self-end"><Trash2 /> Supprimer</Button>
        </div>
    )
}