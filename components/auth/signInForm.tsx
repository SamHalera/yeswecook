"use client"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form"
import { zodResolver } from "@hookform/resolvers/zod"
import z from "zod"
import { SignInSchema } from "@/lib/zod/authSchema"
import { Input } from "../ui/input"
import { useForm } from "react-hook-form"
import { Button } from "../ui/button"
import { signIn } from "@/lib/auth-client"
import { useRouter, useSearchParams } from "next/navigation"
import { toast } from "sonner"
import { Eye, EyeClosed } from "lucide-react"
import { useState } from "react"

export const SignInForm = () => {

    const [typeInput, setTypeInput] = useState<string>("password")
    const router = useRouter()
    const searchParams = useSearchParams()
    const prevURL = searchParams.get('prevURL')
    console.log("prevURL", prevURL)
    const redirectPath = prevURL ? `/${prevURL}` : '/admin/recipes'
    const form = useForm<z.infer<typeof SignInSchema>>({
        resolver: zodResolver(SignInSchema),
        defaultValues: {
            email: "",
            password: ""
        }
    })

    const onSubmit = async (values: z.infer<typeof SignInSchema>) => {
        console.log("values from form==>", values)
        await signIn.email(
            {
                email: values.email,
                password: values.password
            },
            {
                onSuccess: () => {
                    router.push(redirectPath)
                    router.refresh()
                },
                onError: (error) => {
                    toast.error(error.error.message)
                }
            }
        )
    }
    return (
        <Form {...form} >
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-6">

                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input type="email" placeholder="email@gmail.com" {...field} />
                            </FormControl>

                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem className="relative">
                            <FormLabel>Password</FormLabel>
                            {typeInput === "password" ? <Eye onClick={() => {
                                setTypeInput('text')
                            }} className="absolute right-1 bottom-2 cursor-pointer" /> : <EyeClosed onClick={() => {
                                setTypeInput('password')
                            }} className="absolute right-1 bottom-2 cursor-pointer" />}


                            <FormControl>
                                <Input type={typeInput} placeholder="" {...field} />
                            </FormControl>

                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit" className=" cursor-pointer mt-4 text-white bg-primary hover:bg-primary-container hover:text-on-secondary-fixed editorial-shadow w-full font-headline font-bold py-5 rounded-lg transition-all transform active:scale-[0.98]">Valider</Button>
            </form>

        </Form>
    )

}