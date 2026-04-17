"use client"
import { AnimatePresence, motion } from 'motion/react';

import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from "next/navigation"
import { Controller, SubmitHandler, useFieldArray, useForm } from "react-hook-form"
import z from "zod"
import { Button } from "../ui/button"
import { Camera, Flame, Globe, PlusCircle, Timer, Trash } from "lucide-react"
import { useState } from "react"
import { IngredientFieldRow } from "./ingredientFieldRow"
import { NewRecipeFormType, NewRecipeSchema } from "@/lib/zod/recipeSchema"
import { createNewRecipeAction, updateRecipe } from "@/actions/recipe/recipe-action"

import { toast } from "sonner"
import Tiptap from "../rich-text-editor/tipTap"
import { CldImage, CldUploadWidget } from 'next-cloudinary';
import { RecipeMediaProps, RecipeProps } from "@/types/recipe"
import { Checkbox } from "@/components/ui/checkbox"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { AlertDeleteComponent } from '../globals/AlertDeleteComponent';
import { Category } from '@/src/generated/prisma/enums';




export type NewRecipeProps = {
    dataIngredients: {
        name: string;
        id: string;
    }[] | undefined
}

export const CreateOrEditRecipeForm = (
    {
        recipe,
        dataIngredients,
    }:
        {
            recipe?: RecipeProps,
            dataIngredients: {
                name: string;
                id: string;
            }[] | undefined,

        }) => {


    const mediaCover = recipe?.cover
    const [inputDisable, setIsEditMode] = useState<boolean>(true)
    const [isEditMode, setInputDisable] = useState<boolean>(false)
    const [isMediaGalleryUI, setIsMediaGalleryUI] = useState<boolean>(false)
    const [dataImage, setDataImage] = useState<RecipeMediaProps | null>(mediaCover ?? null);

    const router = useRouter()
    const { register, setValue, handleSubmit, control, formState: { isDirty, errors } } = useForm<NewRecipeFormType>({
        resolver: zodResolver(NewRecipeSchema),
        defaultValues: {
            name: recipe?.name ?? "",
            durationPrep: recipe?.durationPrep ?? "",
            durationCook: recipe?.durationCook ?? "",
            description: recipe?.description ?? "",
            nbOfPersons: recipe?.nbOfPersons ?? "4",
            category: recipe?.category ?? 'PLATS',
            ingredients: recipe?.ingredients ?? [],
            isPublic: recipe?.isPublic
        }
    })


    const nameError = errors.name?.message
    const nbOfPersonsError = errors.nbOfPersons?.message
    const descriptionError = errors.description?.message
    const categoryError = errors.category?.message
    const durationPrepError = errors.durationPrep?.message
    const durationCookError = errors.durationCook?.message
    const ingredientsError = errors.ingredients?.message


    const { fields, append, remove } = useFieldArray({
        name: "ingredients",
        control: control

    })
    const onSubmit: SubmitHandler<NewRecipeFormType> = async (values: z.infer<typeof NewRecipeSchema>) => {

        try {
            console.log("onSubmit")
            if (recipe) {
                console.log("edit recipe")
                const update = await updateRecipe(values, recipe.id)
                if (update?.status === "success") {
                    setIsEditMode(!isEditMode)
                    toast.success(update.message)
                    router.push(`/admin/recipes/`)
                } else if (update?.status === "error") {
                    toast.error(update?.message)
                }
            } else {
                console.log("CRETAION==>", values)
                const creation = await createNewRecipeAction(values, dataImage)
                if (creation?.status === "success") {
                    toast.success(creation?.message)
                    router.push('/admin/recipes')
                } else {
                    toast.error(creation?.message)
                }
            }
        } catch (error) {
            console.error('error=>', error)
        }
    }


    const fieldInit = {
        ingredient: {
            name: "",
            newName: "",
        },
        quantity: "0",
        unity: "",
    }
    console.log("errors==>", errors)

    return (
        <div className="flex flex-col gap-7 w-full">
            <form onSubmit={handleSubmit(onSubmit)} className="flex gap-6 w-full my-5">
                {/* LEFT SIDE */}
                <div className='flex flex-col gap-4 flex-1'>
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 }}
                        className="bg-surface-container-lowest p-8 rounded-xl shadow-[0_20px_40px_rgba(17,29,37,0.04)]"
                    >

                        <div className="flex flex-col gap-4 w-full mb-6">
                            <div className="flex flex-col gap-2 flex-1">
                                <div>
                                    <label htmlFor="name" className="block text-[14px] font-bold uppercase tracking-widest text-on-surface-variant mb-3">Nom</label> {nameError && <span className="text-red-500 ml-2 italic text-sm">{nameError}</span>}
                                </div>
                                <input {...register("name")} type="text" id="name" placeholder="Quel nom pour votre recette?" className="w-full bg-surface-container-low/50 border-b-2 border-outline-variant/20 focus:border-primary focus:ring-0 py-5 px-3 text-2xl font-headline font-bold placeholder:text-on-surface-variant/20 transition-all outline-hidden" />
                            </div>
                        </div>
                        <div className="flex gap-4 w-full mb-2">
                            <div className="flex flex-col gap-2 flex-1">
                                <div>

                                    <label htmlFor="nbOfPersons" className="block text-[14px] font-bold uppercase tracking-widest text-on-surface-variant mb-3">Nombre de personnes</label>
                                    {nbOfPersonsError && <span className="text-red-500 ml-2 italic text-sm">{nbOfPersonsError}</span>}

                                </div>
                                <Input {...register("nbOfPersons")} type="text" id="nbOfPersons" placeholder="Pour combien de personnes ?" className="w-full rounded-none bg-surface-container-low/50 border-b-2 border-outline-variant/20 focus:border-primary focus:ring-0 py-4 px-2 font-bold font-headline outline-hidden" />
                            </div>

                            <div className="flex flex-col gap-2 flex-1 mb-6">
                                <div>
                                    <Label id="unity" htmlFor="category" className="block text-[14px] font-bold uppercase tracking-widest text-on-surface-variant mb-3">Catégorie</Label>
                                    {categoryError && <span className="text-red-500 ml-2 italic text-sm">{categoryError}</span>}
                                </div>
                                <Select
                                    defaultValue={recipe?.category ?? undefined}
                                    onValueChange={(value) => setValue("category", value as Category)}
                                >
                                    <SelectTrigger className="w-full rounded-none h-10 bg-surface-container-low border-0 border-b-2 border-outline-variant/20 py-3 px-2 focus:ring-0 focus:border-primary transition-colors">
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent >
                                        <SelectGroup>
                                            {Object.keys(categoryLabels).map((value) => {
                                                return (<SelectItem key={value} value={value}>{categoryLabels[value as Category]}</SelectItem>)
                                            })}
                                            {/* <SelectItem value={""}>-- Choisir une Catégorie --</SelectItem> */}
                                            {/* <SelectItem value={"ENTREES"}>Entrée</SelectItem>
                                            <SelectItem value={"PLATS"}>Plat</SelectItem>
                                            <SelectItem value={"DESSERTS"}>Dessert</SelectItem>
                                            <SelectItem value={"APERO"}>Apéro</SelectItem> */}
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                                {/* <select {...register("category")} id="category" className="w-full bg-surface-container-low/50 border-b-2 border-outline-variant/20 focus:border-primary focus:ring-0 py-4 px-2 text-on-surface font-bold font-headline appearance-none outline-hidden" >
                                    <option value="">-- Choisir une Catégorie --</option>
                                    <option value="ENTREES">Entrée</option>
                                    <option value="PLATS">Plat</option>
                                    <option value="DESSERTS">Dessert</option>
                                    <option value="APERO">Apéro</option>
                                </select> */}
                            </div>
                        </div>

                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="bg-surface-container-low p-8 rounded-xl"
                    >

                        <div className="flex flex-col gap-2">
                            <div>
                                <label htmlFor="description" className="block text-sm font-bold uppercase tracking-wider text-on-surface-variant mb-4">Description </label>
                                {descriptionError && <span className="text-red-500 ml-2 italic text-sm">{descriptionError}</span>}
                            </div>
                            <Controller
                                name="description"
                                control={control}
                                rules={{ required: 'Content is required' }}
                                render={({ field }) => (
                                    <Tiptap value={field.value}
                                        onChange={field.onChange} />

                                )}
                            />

                            {/* <textarea {...register("description")} id="description" placeholder="Décrivrez toutes les étapes" className="border rounded-sm px-2.5 py-2" rows={8} /> */}

                        </div>
                    </motion.div>
                    <div className="bg-surface-container-lowest p-8 rounded-xl shadow-[0_20px_40px_rgba(17,29,37,0.04)]">
                        <div className="flex justify-between items-center mb-8">
                            <h3 className="text-2xl font-headline font-bold">Ingrédients</h3>

                        </div>
                        <AnimatePresence initial={false}>
                            {ingredientsError && <span className="text-red-500 ml-2 italic text-sm">{ingredientsError}</span>}
                            {fields.map((field, index) => {
                                console.log("field==>", field)
                                const errorsIngredients = Array.isArray(errors.ingredients) ? errors.ingredients : null
                                return <motion.div
                                    key={field.id}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    className=""
                                >

                                    <IngredientFieldRow
                                        key={field.id}
                                        register={register}
                                        setValue={setValue}
                                        field={field}
                                        index={index}
                                        remove={remove}
                                        errors={errorsIngredients}
                                        dataIngredients={dataIngredients}
                                    />
                                </motion.div>


                            })}
                        </AnimatePresence>
                        <button
                            type="button"
                            onClick={() => append(fieldInit)}
                            className="flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all my-6 cursor-pointer"
                        >
                            <PlusCircle className="w-5 h-5" />
                            <span className="text-sm uppercase tracking-widest">Ajouter un ingrédient</span>
                        </button>
                    </div>
                </div>
                {/* END LEFT SIDE */}
                {/* RIGHT SIDE */}
                <aside className='flex flex-col gap-4 w-1/3'>
                    {dataImage &&
                        <div className="relative group overflow-hidden rounded-[2rem] aspect-[4/5] bg-surface-container-high border-2 border-dashed border-outline-variant/40 hover:border-primary transition-all duration-500">
                            <Trash size={1} onClick={() => {
                                setDataImage(null)
                            }} color="white" className=" cursor-pointer absolute right-4 top-4 h-12 w-12 bg-red-500 p-2 rounded-full" />
                            <CldImage
                                src={dataImage.source}
                                alt={dataImage.caption ?? ""}
                                width="450"
                                height="450"
                                crop="fill"
                                sizes="100vw"
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                        </div>
                    }

                    <CldUploadWidget
                        uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_RECIP_PRESET}
                        onSuccessAction={(result: any) => {
                            console.log("result onsuccess upload=+>", result)
                            const media = {
                                source: result?.info?.secure_url,
                                publicId: result?.info.public_id,
                            }
                            setDataImage(media)
                        }}
                    >

                        {({ open }) => {
                            return (
                                <>
                                    {/* <Button className=" cursor-pointer" type="button" onClick={() => open()}>
                                            Charger une image
                                        </Button> */}
                                    <div className="rounded-[2rem] relative z-10 flex flex-col items-center justify-center text-center p-6 cursor-pointer bg-surface-container-high border-2 border-dashed border-outline-variant/40 hover:border-primary transition-all duration-500" onClick={() => open()}>
                                        <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                                            <Camera className="w-8 h-8 text-primary" />
                                        </div>
                                        <p className="font-headline font-extrabold text-2xl text-on-surface mb-2">
                                            Ajouter une photo
                                        </p>
                                        <p className="text-[10px] text-on-surface-variant/60 font-bold uppercase tracking-widest">
                                            Format JPG ou PNG (Max 5MB)
                                        </p>
                                    </div>
                                </>
                            );
                        }}
                    </CldUploadWidget>
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 }}
                        className="bg-surface-container-lowest p-8 rounded-xl shadow-[0_20px_40px_rgba(17,29,37,0.04)]"
                    >

                        <div className="flex flex-col gap-4 w-full">
                            <div className="flex flex-col gap-2 flex-1">
                                {durationPrepError && <span className="text-red-500 ml-2 italic text-sm">{durationPrepError}</span>}
                                <div className='flex items-center gap-2'>
                                    <div className="w-12 h-12 bg-surface-container-low rounded-xl flex items-center justify-center text-on-surface-variant">
                                        <Timer className="w-6 h-6" />
                                    </div>
                                    <div className='flex-1'>
                                        <label htmlFor="durationPrep" className="block text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-1">Temps de préparation</label>
                                        <div className="flex items-center gap-3">

                                            <input {...register("durationPrep")} type="text" id="durationPrep" placeholder="20" className="w-16  border-b-2 border-outline-variant/10 focus:border-primary p-0 font-headline font-extrabold text-xl outline-hidden" />
                                            <span className="text-xs font-bold text-on-surface uppercase tracking-widest">min</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-2 flex-1 mb-3">
                                {durationCookError && <span className="text-red-500 ml-2 italic text-sm">{durationCookError}</span>}
                                <div className='flex items-center gap-2'>
                                    <div className="w-12 h-12 bg-surface-container-low rounded-xl flex items-center justify-center text-on-surface-variant">
                                        <Flame className="w-6 h-6" />
                                    </div>
                                    <div className='flex-1'>
                                        <label htmlFor="durationCook" className="block text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-1">Temps de cuisson</label>
                                        <div className="flex items-center gap-3">
                                            <input {...register("durationCook")} type="text" id="durationCook" placeholder="20" className="w-16 bg-transparent border-b-2 border-outline-variant/10 focus:border-primary p-0 font-headline font-extrabold text-xl outline-hidden" />
                                            <span className="text-xs font-bold text-on-surface uppercase tracking-widest">min</span>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-2 flex-1">
                                <div className='flex items-center gap-2'>

                                    <div className="w-12 h-12 bg-surface-container-low rounded-xl flex items-center justify-center text-on-surface-variant">
                                        <Globe className="w-6 h-6" />
                                    </div>
                                    <div className='flex-1'>
                                        <label htmlFor="isPublic" className="block text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-1">Recette publique</label>
                                        <Controller
                                            name="isPublic"
                                            control={control}
                                            render={({ field }) => (
                                                <Checkbox
                                                    id="isPublic"
                                                    checked={field.value}
                                                    onCheckedChange={field.onChange}
                                                    className="border rounded-xs h-6 w-6 align-bottom"
                                                />
                                            )}
                                        />
                                    </div>
                                    {/* <input {...register("isPublic")} type="checkbox" id="isPublic" className="border rounded-sm" /> */}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                    <div className="sticky top-32 space-y-5">
                        <Button type="submit" disabled={!isDirty} className="w-full py-6 braise-gradient text-white font-headline font-extrabold text-xl rounded-md shadow-2xl shadow-primary/30 hover:shadow-primary/40 transition-all hover:-translate-y-1 active:scale-95">Valider la recette</Button>
                        <Button type="button" disabled={!isDirty} className="w-full py-5 bg-[#c5dada] text-on-surface font-headline font-extrabold rounded-md hover:bg-surface-container-highest transition-all active:scale-95">Enregistrer comme brouillon</Button>
                        {recipe && <AlertDeleteComponent elementName="recette" recipeId={recipe.id} authorId={recipe.authorId} />}

                    </div>
                </aside>
                {/* END RIGHT SIDE */}





            </form>

        </div >
    )

}

export const categoryLabels: Record<Category, string> = {
    ENTREES: "entrées",
    PLATS: "plats",
    DESSERTS: "desserts",
    APERO: "apéros"
}