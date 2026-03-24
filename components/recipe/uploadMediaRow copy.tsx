"use client"
import { MediaRecipeFormType } from "@/lib/zod/recipeSchema";
import { RecipeMediaProps } from "@/types/recipe";
import { CldImage, CldUploadWidget } from "next-cloudinary"
import { useState } from "react";
import { FieldArrayWithId, UseFieldArrayRemove, UseFormRegister } from "react-hook-form";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Trash } from "lucide-react";
import { Label } from "../ui/label";

export const UploadMediaRow = ({ register, field, index, remove }: {
    register: UseFormRegister<MediaRecipeFormType>,
    field: FieldArrayWithId<MediaRecipeFormType, "media">,
    index: number,
    remove: UseFieldArrayRemove
}) => {
    const [dataImage, setDataImage] = useState<RecipeMediaProps | undefined>(field);
    return (
        <div className="bg-gray-100 w-[300px] p-4 rounded-2xl flex flex-col gap-4">
            {
                dataImage &&
                <div className="flex flex-col gap-4">
                    <CldImage
                        src={dataImage.source}
                        alt={dataImage.caption ?? ""}
                        width="200"
                        height="200"
                        crop="fill"
                        sizes="100vw"
                        className="mx-auto"
                    />
                    <Input disabled {...register(`media.${index}.source`)} value={field.source} />

                    <div>
                        <Label>Caption</Label>
                        <Input {...register(`media.${index}.caption`)} />
                    </div>
                </div>
            }
            <div className="flex flex-col justify-between items-center gap-4">

                <CldUploadWidget
                    key={field.id}
                    uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_RECIP_PRESET}
                    onSuccessAction={(result: any) => {
                        console.log("result onsuccess upload=+>", result)
                        const media = {
                            source: result?.info?.secure_url ?? "",
                            publicId: result?.info.public_id ?? "",
                            isRecipeCover: false,
                            caption: result?.info?.caption ?? ""

                        }
                        setDataImage(media)
                    }}
                >

                    {({ open }) => {
                        return (
                            <Button className=" cursor-pointer" type="button" onClick={() => open()}>
                                Charger une image
                            </Button>
                        );
                    }}
                </CldUploadWidget>

                <Trash onClick={() => {
                    remove(index)
                }} className=" bg-red-400 text-white w-8 h-8 p-1.5 rounded-full cursor-pointer" />
            </div>


        </div>

    )
}