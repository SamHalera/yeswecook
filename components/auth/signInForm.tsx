"use client"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form"
import { zodResolver } from "@hookform/resolvers/zod"
import z from "zod"
import { SignInSchema } from "@/lib/zod/authSchema"
import { Input } from "../ui/input"
import { useForm } from "react-hook-form"
import { Button } from "../ui/button"
import { signIn } from "@/lib/auth-client"
import { useRouter } from "next/navigation"
import { toast } from "sonner"

export const SignInForm = () => {

    const form = useForm<z.infer<typeof SignInSchema>>({
        resolver: zodResolver(SignInSchema),
        defaultValues: {
            email: "",
            password: ""
        }
    })

    const router = useRouter()

    const onSubmit = async (values: z.infer<typeof SignInSchema>) => {
        console.log("values from form==>", values)
        await signIn.email(
            {
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