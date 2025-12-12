"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from "next/navigation"
import { SubmitHandler, useFieldArray, useForm } from "react-hook-form"
import z from "zod"
import { Button } from "../ui/button"
import { PlusIcon } from "lucide-react"
import { useState } from "react"
import { IngredientFieldRow } from "./ingredientFieldRow"
import { NewRecipeFormType, NewRecipeSchema } from "@/lib/zod/recipeSchema"
import { createNewRecipeAction } from "@/actions/recipe/recipe-action"

type NewRecipeProps = {
    dataIngredients: {
        name: string;
        id: string;
    }[] | undefined
}

// export type NewRecipeFormType = {
//     name: "",
//     duration: "" | undefined,
//     description: "",
//     category: 'plats',
//     ingredients: []
// }
export const NewRecipeForm = ({ dataIngredients }: NewRecipeProps) => {


    const [inputDisable, setInputDisable] = useState<boolean>(false)

    const router = useRouter()
    const { register, setValue, handleSubmit, control, formState: { isDirty, errors } } = useForm<NewRecipeFormType>({
        resolver: zodResolver(NewRecipeSchema),
        defaultValues: {
            name: "",
            duration: "",
            description: "",
            nbOfPersons: "4",
            category: 'PLATS',
            ingredients: []
        }
    })


    const nameError = errors.name?.message
    const nbOfPersonsError = errors.nbOfPersons?.message
    const descriptionError = errors.description?.message
    const categoryError = errors.category?.message
    const durationError = errors.duration?.message
    const ingredientsError = errors.ingredients?.message

    const { fields, append, remove } = useFieldArray({
        name: "ingredients",
        control: control

    })
    const onSubmit: SubmitHandler<NewRecipeFormType> = async (values: z.infer<typeof NewRecipeSchema>) => {

        try {
            console.log("here")
            const recipeCreation = await createNewRecipeAction(values)
            console.log("recipeCreation==>", recipeCreation)
            router.push('/admin/recipes')
        } catch (error) {
            console.error('error=>', error)
        }
    }


    const fieldInit = {
        ingredientName: "",
        newName: "",
        quantity: "0",
        unit: "",
    }
    console.log("errors==>", errors)
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
            <div className="flex gap-4 w-full">
                <div className="flex flex-col gap-2 flex-1">
                    <div>
                        <label htmlFor="name">Nom</label> {nameError && <span className="text-red-500 ml-2 italic text-sm">{nameError}</span>}
                    </div>
                    <input {...register("name")} type="text" id="name" placeholder="Quel nom pour votre recette?" className="border rounded-sm px-2.5 py-2" />
                </div>
                <div className="flex flex-col gap-2 flex-1">
                    <div>

                        <label htmlFor="nbOfPersons">Nombre de personnes</label>
                        {nbOfPersonsError && <span className="text-red-500 ml-2 italic text-sm">{nbOfPersonsError}</span>}

                    </div>
                    <input {...register("nbOfPersons")} type="text" id="nbOfPersons" placeholder="Pour combien de personnes ?" className="border rounded-sm px-2.5 py-2" />
                </div>
            </div>
            <div className="flex flex-col gap-2">
                <div>
                    <label htmlFor="description">Description </label>
                    {descriptionError && <span className="text-red-500 ml-2 italic text-sm">{descriptionError}</span>}
                </div>
                <textarea {...register("description")} id="description" placeholder="Décrivrez toutes les étapes" className="border rounded-sm px-2.5 py-2" rows={8} />

            </div>
            <div className="flex gap-4 w-full">
                <div className="flex flex-col gap-2 flex-1">
                    <div>
                        <label htmlFor="duration">Durée</label>
                        {durationError && <span className="text-red-500 ml-2 italic text-sm">{durationError}</span>}
                    </div>
                    <input {...register("duration")} type="text" id="duration" placeholder="Quel durée pour votre recette?" className="border rounded-sm px-2.5 py-2" />
                </div>
                <div className="flex flex-col gap-2 flex-1">
                    <div>
                        <label htmlFor="category">Catégorie</label>
                        {categoryError && <span className="text-red-500 ml-2 italic text-sm">{categoryError}</span>}
                    </div>
                    <select {...register("category")} id="category" className="border rounded-sm px-2.5 py-2" >
                        <option value="">-- Choisir une Catégorie --</option>
                        <option value="ENTREES">Entrée</option>
                        <option value="PLATS">Plat</option>
                        <option value="DESSERTS">Dessert</option>
                        <option value="APERO">Apéro</option>
                    </select>
                </div>
            </div>
            <div className="flex flex-col gap-4 w-full border p-3.5 rounded-sm">
                <h3 className="text-xl font-bold">Vos Ingredients</h3>
                {ingredientsError && <span className="text-red-500 ml-2 italic text-sm">{ingredientsError}</span>}
                {fields.map((field, index) => {

                    const errorsIngredients = Array.isArray(errors.ingredients) ? errors.ingredients : null
                    return <IngredientFieldRow
                        key={field.id}
                        register={register}
                        setValue={setValue}
                        field={field}
                        index={index}
                        remove={remove}
                        errors={errorsIngredients}
                        dataIngredients={dataIngredients}
                    />
                })}
                <Button onClick={() => append(fieldInit)} type="button" className="self-start"><PlusIcon /> Ajouter un ingrédient</Button>
                {/* */}
            </div>

            <Button type="submit" disabled={!isDirty} className="self-center">Valider</Button>
        </form>
    )

}