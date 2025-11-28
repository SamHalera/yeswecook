"use client"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form"
import { zodResolver } from "@hookform/resolvers/zod"
import z from "zod"
import { SignInSchema, SignUpSchema } from "@/lib/zod/authSchema"
import { Input } from "../ui/input"
import { useForm } from "react-hook-form"
import { Button } from "../ui/button"
import { signIn, signUp } from "@/lib/auth-client"
import { useRouter } from "next/navigation"
import { toast } from "sonner"

export const SignUpForm = () => {

    const form = useForm<z.infer<typeof SignUpSchema>>({
        resolver: zodResolver(SignUpSchema),
        defaultValues: {
            name: "",
            email: "",
            password: ""
        }
    })

    const router = useRouter()

    const onSubmit = async (values: z.infer<typeof SignUpSchema>) => {
        console.log("values from form==>", values)
        await signUp.email(
            {
                name: values.name,
                email: values.email,
                password: values.password
            },
            {
                onSuccess: () => {
                    router.push('/auth')
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
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Username</FormLabel>
                            <FormControl>
                                <Input type="text" placeholder="email@gmail.com" {...field} />
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
                        <FormItem>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                                <Input type="password" placeholder="" {...field} />
                            </FormControl>

                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit">Valider</Button>
            </form>

        </Form>
    )

}