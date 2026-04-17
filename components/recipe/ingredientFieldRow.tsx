import { FieldArrayWithId, FieldError, SetFieldValue, UseFieldArrayRemove, UseFormRegister, UseFormSetValue } from "react-hook-form"

import { Button } from "../ui/button";
import { ListCheck, PlusCircle, Trash2 } from "lucide-react";
import { useState } from "react";
import { NewRecipeFormType } from "@/lib/zod/recipeSchema";
import { extractErrorFieldFromErrorsObject } from "@/lib/utils";
import { Unity } from "@/src/generated/prisma/enums";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Input } from "../ui/input";
import { Label } from "../ui/label";

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
    const unityFieldError = extractErrorFieldFromErrorsObject(errors, "unity")

    return (

        <div className="flex flex-col w-full gap-6 bg-gray-50 p-4 border-b">
            {!newIngredient ? (
                <>
                    <div className="flex gap-3 justify-start items-center">
                        <span className="italic text-muted-foreground">Tu trouves pas ton ingrédient ?</span>
                        <Button onClick={() => setNewIngredient(!newIngredient)} type="button" className="flex gap-2.5 self-start cursor-pointer text-xs"><PlusCircle /> Ajoutes-le ! </Button>
                    </div>
                    <div className="flex flex-col gap-2 flex-1 transition justify-end">

                        <Label htmlFor="ingredientSelect" className="block text-sm font-bold uppercase tracking-wider text-on-surface-variant mb-1">Choisir un ingrédient</Label>
                        <Select
                            defaultValue={field.ingredient?.name ?? undefined}
                            onValueChange={(value) => setValue(`ingredients.${index}.ingredient.name`, value)}
                        >
                            <SelectTrigger id="ingredientSelect" className="w-full rounded-none h-10 bg-surface-container-low border-0 border-b-2 border-outline-variant/20 py-3 px-2 focus:ring-0 focus:border-primary transition-colors">
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    {/* <option>-- Choisir un ingrédient --</option> */}
                                    {dataIngredients?.map((ingredient) => {
                                        return (
                                            <SelectItem key={ingredient.id} value={ingredient.name}>{ingredient.name}</SelectItem>
                                        )
                                    })}
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                        {/* <select {...register(`ingredients.${index}.ingredient.name`)} id="ingredientSelect" className="w-full bg-surface-container-low border-0 border-b-2 border-outline-variant/20 py-3 px-2 focus:ring-0 focus:border-primary transition-colors">
                            <option>-- Choisir un ingrédient --</option>
                            {dataIngredients?.map((ingredient) => {
                                return (
                                    <option key={ingredient.id} value={ingredient.name}>{ingredient.name}</option>
                                )
                            })}
                        </select> */}
                        <input type="hidden" value="" />
                    </div>
                </>
            ) : (
                <>
                    <div className="flex gap-3 justify-start items-center">
                        <span className="italic text-muted-foreground">Tu veux utiliser nos ingrédients ?</span>
                        <Button onClick={() => setNewIngredient(!newIngredient)} type="button" className="flex gap-2.5 self-start cursor-pointer text-xs"><ListCheck /> Regarder la liste </Button>
                    </div>
                    <div className="flex flex-col gap-2 flex-1 transition">
                        <Label htmlFor="newIngredient" className="flex gap-2 items-center text-sm font-bold uppercase tracking-wider text-on-surface-variant mb-1">
                            Nouvel ingrédient OU
                        </Label>

                        <Input {...register(`ingredients.${index}.ingredient.newName`)} onChange={(e) => {
                            setInputValue(e.target.value)
                        }} type="text" id="newIngredient" placeholder="votre nouvel ingrédient" className="w-full rounded-none bg-surface-container-low border-0 border-b-2 border-outline-variant/20 py-3 px-2 focus:ring-0 focus:border-primary transition-colors" />
                        {/* <input  {...register(`ingredients.${index}.newName`)} type="hidden" /> */}
                    </div>
                </>
            )}
            <div className="flex gap-6 relative">

                {/* {ingredientFieldError && <span className=" ml-2 italic text-red-500 text-sm">{ingredientFieldError.message}</span>} */}
                {/* <div className="h-8 w-8 rounded-full bg-gray-300 flex items-center justify-center absolute right-4 top-4">{index + 1}</div> */}
                {/* <div className="flex gap-4 items-end"> */}
                <div className="flex flex-col gap-2 flex-1">
                    <div>
                        <label htmlFor="quantity" className="block text-sm font-bold uppercase text-on-surface-variant mb-1">Quantité</label>
                        {quantityFieldError && <span className=" ml-2 italic text-red-500 text-sm">{quantityFieldError.message}</span>}
                    </div>
                    <Input {...register(`ingredients.${index}.quantity`)} type="number" id="quantity" placeholder="Quelle quantité ?" className="w-full rounded-none bg-surface-container-low border-0 border-b-2 border-outline-variant/20 py-3 px-2 focus:ring-0 focus:border-primary transition-colors" />
                </div>
                <div className="flex flex-col gap-2 flex-1 transition">
                    <div>
                        <Label htmlFor="unity" className="block text-sm font-bold uppercase text-on-surface-variant mb-1">Unité de mesure</Label>
                        {unityFieldError && <span className=" ml-2 italic text-red-500 text-sm">{unityFieldError.message}</span>}
                    </div>
                    <Select
                        defaultValue={field.unity ?? undefined}
                        onValueChange={(value) => setValue(`ingredients.${index}.unity`, value)}
                    >
                        <SelectTrigger id="unity" className="w-full rounded-none h-10 bg-surface-container-low border-0 border-b-2 border-outline-variant/20 py-3 px-2 focus:ring-0 focus:border-primary transition-colors">
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent >
                            <SelectGroup>
                                {Object.keys(unityLabels).map((value) => (
                                    <SelectItem key={value} value={value}>
                                        {unityLabels[value as Unity]}
                                    </SelectItem>
                                ))}
                            </SelectGroup>
                        </SelectContent>
                    </Select>

                </div>

                <Button onClick={() => remove(index)} type="button" className="self-end"><Trash2 /></Button>
            </div>
        </div>
    )
}

export const unityLabels: Record<Unity, string> = {
    mg: "Milligramme",
    g: "Gramme",
    kg: "Kilogramme",
    oz: "Once",
    lb: "Livre",
    ml: "Millilitre",
    cl: "Centilitre",
    dl: "Décilitre",
    l: "Litre",
    tsp: "Cuillère à café",
    tbsp: "Cuillère à soupe",
    fl_oz: "Once liquide",
    cup: "Tasse",
    pt: "Pinte",
    qt: "Quart",
    gal: "Gallon",
    unit: "Unité (pièce)",
    dozen: "Douzaine",
    pinch: "Pincée",
    dash: "Trait",
    drop: "Goutte",
    slice: "Tranche",
    clove: "Gousse",
    bunch: "Botte",
    sprig: "Brin",
    leaf: "Feuille",
    can: "Boîte",
    packet: "Sachet",
    to_taste: "À volonté",
    as_needed: "Selon besoin",
};
