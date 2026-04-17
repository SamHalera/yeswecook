"use client"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form"
import { zodResolver } from "@hookform/resolvers/zod"
import z from "zod"
import { Input } from "../ui/input"
import { useForm } from "react-hook-form"
import { Button } from "../ui/button"
import { authClient, signIn, signUp } from "@/lib/auth-client"
import { useRouter } from "next/navigation"
import { toast } from "sonner"

import { use, useState } from "react"
import { ProfileFormSchema } from "@/lib/zod/accountSchema"
import { Textarea } from "../ui/textarea"
import { Pencil } from "lucide-react"
import Image from "next/image"
import { CldImage, CldUploadWidget } from 'next-cloudinary';


export const EditProfileForm = ({ user }: { user: UserProps }) => {

    const userDataImage = { imagePublicId: user?.imagePublicId, imageSrc: user?.imageSrc }
    const [dataImage, setDataImage] = useState<userMediaProps | null>(userDataImage ?? null);
    const form = useForm<z.infer<typeof ProfileFormSchema>>({
        resolver: zodResolver(ProfileFormSchema),
        defaultValues: {
            name: user?.name,
            email: user?.email,
            bio: user?.bio ?? ""
        }
    })



    const onSubmit = async (values: z.infer<typeof ProfileFormSchema>) => {
        console.log("values from form==>", values)


        const { data, error } = await authClient.updateUser({
            name: values.name,
            bio: values.bio,
            ...(dataImage && {
                imagePublicId: dataImage.imagePublicId,
                imageSrc: dataImage.imageSrc,
                image: dataImage.imageSrc
            })

        })

        if (user?.email !== values.email) {

            const updateEmail = await authClient.changeEmail({
                newEmail: values.email
            })
            setTimeout(() => {

                if (updateEmail.error) {
                    toast.error(updateEmail.error.message)
                } else if (updateEmail.data.status === true) {
                    toast.success(`Hello ${user?.name} ! Ton adresse mail a bien été mis à jour`)
                }
            }, 700)
        }
        console.log("data==>", data)
        if (error) {
            toast.error(error.message)
        } else if (data.status === true) {
            toast.success(`Hello ${user?.name} ! Ton profile a bien été mis à jour`)
        }

    }
    return (
        <Form {...form} >
            <div className="flex flex-col md:flex-row gap-12 items-start">
                <div className="relative group shrink-0">
                    <div className="w-32 h-32 rounded-full overflow-hidden bg-surface-container-high border-4 border-surface-container-lowest shadow-xl ring-8 ring-on-surface/5">
                        {dataImage ? (
                            <CldImage
                                src={dataImage?.imageSrc ?? ''}
                                alt={"image de profile"}
                                width="450"
                                height="450"
                                crop="fill"
                                sizes="100vw"
                                className="absolute inset-0 w-full h-full object-cover rounded-full"
                            />
                        ) : (
                            <Image
                                width={300}
                                height={300}
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDPkhifIfhBBuHivQRe_cFl4UIkZKQIOXWlgUW2xfSKGKJc4MSCGlN_iG1sOYfOCPE8iJ5KEhUFtd7YudCInOXwkUh4wZ_K34mKuPEy_egCdjJEPD1PGxNm6ODwviXYwFuB8c_6aSTM8Cvxy8P5mTE1U5em8su8DrumbxYmka6DxF0Ej3f7DSINuYVlfwsn1-b2j2_fiaBkWCUJiWKYFcCho_QR6HnD3HxFKl_WSvFJi96JGSTq5LfDbvWNse9BXiGnD6JSKXZmaw"
                                alt="User avatar"
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                referrerPolicy="no-referrer"
                            />
                        )}
                        <CldUploadWidget
                            uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_USER_PRESET}
                            onSuccessAction={(result: any) => {
                                console.log("result onsuccess upload=+>", result)
                                const userImage = {
                                    imageSrc: result?.info?.secure_url,
                                    imagePublicId: result?.info.public_id,
                                }
                                setDataImage(userImage)
                            }}
                        >

                            {({ open }) => {
                                return (
                                    <div>
                                        <button onClick={() => open()} className="cursor-pointer absolute bottom-0 right-0 bg-primary text-on-primary p-2.5 rounded-full shadow-lg hover:scale-110 active:scale-90 transition-all border-2 border-surface-container-lowest">
                                            <Pencil className="w-4 h-4" />
                                        </button>
                                    </div>

                                );
                            }}
                        </CldUploadWidget>
                    </div>

                </div>
                <div className="flex-1  w-full">

                    <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-6">

                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="block text-xs font-bold uppercase tracking-widest text-on-surface-variant/60 ml-1">Username</FormLabel>
                                    <FormControl>
                                        <Input type="text" placeholder="email@gmail.com" {...field} className="w-full bg-surface-container-lowest border-0 border-b-2 border-outline-variant/20 focus:border-primary focus:ring-0 px-5 py-4 rounded-t-xl transition-all font-medium text-on-surface" />
                                    </FormControl>

                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="block text-xs font-bold uppercase tracking-widest text-on-surface-variant/60 ml-1">Email</FormLabel>
                                    <FormControl>
                                        <Input type="email" placeholder="email@gmail.com" {...field} className="w-full bg-surface-container-lowest border-0 border-b-2 border-outline-variant/20 focus:border-primary focus:ring-0 px-5 py-4 rounded-t-xl transition-all font-medium text-on-surface" />
                                    </FormControl>

                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="bio"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="block text-xs font-bold uppercase tracking-widest text-on-surface-variant/60 ml-1">Bio</FormLabel>
                                    <FormControl>
                                        <Textarea placeholder="Présente-toi à la community en quelques mots..." {...field} className="w-full bg-surface-container-lowest border-0 border-b-2 border-outline-variant/20 focus:border-primary focus:ring-0 px-5 py-4 rounded-t-xl transition-all font-medium text-on-surface resize-none h-24" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <Button type="submit" className="cursor-pointer flex-1 md:flex-none px-14 py-4 bg-primary font-bold rounded-xl shadow-2xl shadow-primary/30 hover:bg-primary-container text-white transition-all hover:-translate-y-1 active:scale-95">Valider</Button>
                    </form>

                </div>
            </div>
        </Form>
    )

}