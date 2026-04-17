// "use client"
// import { MediaRecipeFormType } from "@/lib/zod/recipeSchema";
// import { RecipeMediaProps } from "@/types/recipe";
// import { CldImage, CldUploadWidget } from "next-cloudinary"
// import { useState } from "react";
// import { FieldArrayWithId, UseFieldArrayRemove, UseFormRegister } from "react-hook-form";
// import { Button } from "../ui/button";
// import { Input } from "../ui/input";
// import { Trash } from "lucide-react";
// import { Label } from "../ui/label";
// import { Checkbox } from "../ui/checkbox";

// export const UploadMediaRow = ({ register, field, index, remove }: {
//     register: UseFormRegister<MediaRecipeFormType>,
//     field: FieldArrayWithId<MediaRecipeFormType, "media">,
//     index: number,
//     remove: UseFieldArrayRemove
// }) => {


//     return (
//         <div className="bg-gray-100 w-[300px] p-4 rounded-2xl flex flex-col gap-4 min-w-[250px] shrink-0 items-center">

//             <CldImage
//                 key={field.id}
//                 width="200"
//                 height="200"
//                 src={field.source}
//                 crop="fill"
//                 sizes="100vw"
//                 alt="Description of my image"
//             />
//             <Input disabled {...register(`media.${index}.source`)} value={field.source} />
//             <div className="flex flex-col gap-3 w-full">
//                 <Label htmlFor="caption">Caption</Label>
//                 <Input id="caption" {...register(`media.${index}.caption`)} />
//             </div>
//             <div className="flex items-center gap-3 w-full">
//                 <input type="checkbox" {...register(`media.${index}.isRecipeCover`)} id={`isCover-${index}`} className="checkbox" />
//                 <Label htmlFor={`isCover-${index}`}>Cover de la recette</Label>

//             </div>
//             <Trash onClick={() => {
//                 remove(index)
//             }} />
//         </div>

//     )
// }