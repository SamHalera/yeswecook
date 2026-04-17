// "use client"

// import React, { SetStateAction } from "react"
// import { Button } from "../ui/button"
// import { SubmitHandler, useFieldArray, useForm } from "react-hook-form"
// import z from "zod"
// import { MediaRecipeFormType, MediaRecipeSchema } from "@/lib/zod/recipeSchema"
// import { zodResolver } from "@hookform/resolvers/zod"
// import { RecipeProps } from "@/types/recipe"
// import { CldUploadWidget } from "next-cloudinary"
// import { UploadMediaRow } from "./uploadMediaRow"
// import { PlusIcon } from "lucide-react"
// import { useRouter } from "next/navigation"
// import { persistRecipeMediaGallery } from "@/actions/recipe/recipe-action"

// export const UploadMediaGallery = ({ recipe, isMediaGalleryUI, setIsMediaGalleryUI }: { recipe: RecipeProps, isMediaGalleryUI: boolean, setIsMediaGalleryUI: React.Dispatch<SetStateAction<boolean>> }) => {

//     const router = useRouter()
//     const dataMedia = recipe?.media.filter(elt => !elt.isRecipeCover)
//     const { control, handleSubmit, register } = useForm<MediaRecipeFormType>({
//         resolver: zodResolver(MediaRecipeSchema),
//         defaultValues: {
//             media: dataMedia ?? []
//         }
//     })

//     const { fields, append, remove } = useFieldArray({
//         name: "media",
//         control: control
//     })

//     const onSubmit: SubmitHandler<MediaRecipeFormType> = async (values) => {
//         try {
//             const { media } = values
//             await persistRecipeMediaGallery(media, recipe.id)
//         } catch (error) {

//         }
//     }
//     console.log('My fields ==>', fields)
//     return (
//         <div className="flex flex-col gap-8">
//             <Button onClick={() => {
//                 setIsMediaGalleryUI(!isMediaGalleryUI)
//             }} className="self-end">Retour à la recette</Button>
//             <h1>Media Gallery</h1>

//             <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
//                 <div className="flex gap-3 flex-wrap">
//                     {fields
//                         .map((field, index) => {
//                             return <UploadMediaRow key={field.id} field={field} register={register} remove={remove} index={index} />
//                         })}
//                 </div>
//                 <div className="self-start">

//                     <CldUploadWidget
//                         uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_RECIP_PRESET}
//                         onSuccessAction={(result: any) => {
//                             console.log("result onsuccess upload=+>", result)

//                             const fieldInit = {
//                                 source: result?.info?.secure_url ?? "",
//                                 publicId: result?.info.public_id ?? "",
//                                 isRecipeCover: false,
//                                 caption: result?.info?.caption ?? ""
//                             }
//                             append(fieldInit)
//                         }}
//                     >

//                         {({ open }) => {
//                             return (
//                                 <Button className=" cursor-pointer" type="button" onClick={() => open()}>
//                                     Charger une image
//                                 </Button>
//                             );
//                         }}
//                     </CldUploadWidget>
//                 </div>
//                 <Button className="self-end" type="submit">Envoyer</Button>
//             </form>
//         </div>
//     )
// }