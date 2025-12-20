"use client"
import { NewRecipeSchema } from "@/lib/zod/recipeSchema"
import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from "next/navigation"
import { useFieldArray, useForm } from "react-hook-form"
import z from "zod"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { Textarea } from "../ui/textarea"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Ingredient } from "@/src/generated/prisma/client"
import { Delete, Plus, RemoveFormattingIcon, Trash2 } from "lucide-react"
import { useState } from "react"

type NewRecipeProps = {
    dataIngredients: {
        name: string;
        id: string;
    }[] | undefined
}
export const NewRecipeForm = ({ dataIngredients }: NewRecipeProps) => {

    const [selectDisable, setSelectDisable] = useState<boolean>(false)
    const [inputDisable, setInputDisable] = useState<boolean>(false)

    console.log("INGREDIENTS==>", dataIngredients)
    const router = useRouter()
    const form = useForm<z.infer<typeof NewRecipeSchema>>({
        resolver: zodResolver(NewRecipeSchema),
        defaultValues: {
            name: "",
            duration: "",
            description: "",
            category: 'plats',
            ingredients: []
        }
    })

    const { fields, append, remove } = useFieldArray({
        name: "ingredients",
        control: form.control

    })
    const onSubmit = async (values: z.infer<typeof NewRecipeSchema>) => {
        console.log("values==>", values)
    }


    const fieldInit = {
        ingredientName: "",
        quantity: "0",
        unit: ""
    }
    return (
        <Form {...form} >
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-6 w-full">

                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Nom de la recette</FormLabel>
                            <FormControl>
                                <Input type="text" placeholder="nom de la recette" {...field} />
                            </FormControl>

                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="duration"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Durée</FormLabel>
                            <FormControl>
                                <Input type="text" placeholder="Quelle est la durée ?" {...field} />
                            </FormControl>

                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Durée</FormLabel>
                            <FormControl>
                                <Textarea placeholder="Décrivez votre recette"  {...field} />
                            </FormControl>

                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="category"
                    render={({ field }) => (
                        <Select {...field}>
                            <FormLabel>Catégories</FormLabel>
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Choisis une catégorie" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>Categories</SelectLabel>
                                    <SelectItem value="apple">Entrées</SelectItem>
                                    <SelectItem value="banana">Plats</SelectItem>
                                    <SelectItem value="blueberry">Desserts</SelectItem>
                                    <SelectItem value="grapes">Apéros</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    )}
                />
                <div className="flex flex-col gap-4 bg-gray-100 p-2.5 rounded-sm">
                    <legend>Ingredients</legend>
                    {fields.map((field, index) => {
                        return (
                            <div key={field.id} className="flex flex-col  gap-5 bg-amber-50 p-3">
                                <span>{index + 1})</span>
                                <div className="flex gap-3 w-full items-end">

                                    <FormField
                                        control={form.control}
                                        name={`ingredients.${index}.ingredientName`}
                                        render={({ field }) => (
                                            <FormItem className="flex flex-col gap-3 flex-1">

                                                <FormLabel>Nouvel ingrédient</FormLabel>
                                                <FormControl>
                                                    <Input onFocus={() => {
                                                        setSelectDisable(true)
                                                        setInputDisable(false)
                                                    }} type="text" placeholder="Quel ingrédient ?" {...field} disabled={inputDisable} />
                                                </FormControl>

                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <span>OR</span>
                                    <div className="flex flex-col gap-2 flex-1">
                                        <label htmlFor="dataIngredient">Choisi un ingrédient existant</label>
                                        <select onFocus={() => {
                                            setInputDisable(true)
                                            setSelectDisable(false)
                                        }} disabled={selectDisable} name="dataIngredient" id="dataIngredient" className="w-full border rounded-md p-1.5 text-[14px] text-muted-foreground">
                                            <option value="">-- Choisi un ingrédient --</option>
                                            {dataIngredients ? dataIngredients?.map((ingrendient) => {
                                                return <option key={ingrendient.id} value={ingrendient.name}>{ingrendient.name}</option>
                                            }) : <option value="">Aucun ingrédient</option>}
                                        </select>
                                        {/* <Select {...field}>
                                            <FormLabel>Choisi un ingrédient existant</FormLabel>
                                            <SelectTrigger className="w-full">
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectGroup>

                                                    {dataIngredients ? dataIngredients?.map((ingrendient) => {
                                                        return <SelectItem key={ingrendient.id} value={ingrendient.name}>{ingrendient.name}</SelectItem>
                                                    }) : <SelectItem value="n">Aucun ingrédient</SelectItem>}

                                                </SelectGroup>
                                            </SelectContent>
                                        </Select> */}
                                    </div>
                                </div>
                                <div className="flex gap-3 w-full">

                                    <FormField
                                        control={form.control}
                                        name={`ingredients.${index}.quantity`}
                                        render={({ field }) => (
                                            <FormItem className="flex flex-col gap-3 flex-1">
                                                <FormLabel>Quantité</FormLabel>
                                                <FormControl>
                                                    <Input {...form.register(`ingredients.${index}.quantity`, { valueAsNumber: true })} type="number" placeholder="Quelle quantité ?" {...field} name={`ingredientName.${index}.ingredientName`} />
                                                </FormControl>

                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name={`ingredients.${index}.unit`}
                                        render={({ field }) => (
                                            <FormItem className="flex flex-col gap-3 flex-1">
                                                <FormLabel>Unité</FormLabel>
                                                <FormControl>
                                                    <Input type="text" placeholder="Quelle unité ?" {...field} />
                                                </FormControl>

                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                                <Button className="self-end" type="button" onClick={() => remove(index)}><Trash2 /> Remove</Button>
                            </div>
                        )
                    })}
                    <Button className="self-start" onClick={() => append(fieldInit)} type="button"><Plus /> Ajouter</Button>
                </div>

                <Button type="submit" className="self-end w-[180px]">Créer</Button>
            </form>

        </Form>
    )

}