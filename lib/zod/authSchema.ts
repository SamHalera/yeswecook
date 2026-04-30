import z from "zod";

export const SignInSchema = z.object({
    email: z.string({ message: "Champs obligatoire !" }),
    password: z.string({ message: "Champs obligatoire !" })
})
export const SignUpSchema = z.object({
    name: z.string({ message: "Champs obligatoire !" }),
    username: z.string({ message: "Champs obligatoire !" }),
    email: z.string({ message: "Champs obligatoire !" }),
    password: z.string({ message: "Champs obligatoire !" })
})