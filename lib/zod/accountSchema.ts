import z from "zod";

export const ProfileFormSchema = z.object({
    name: z.string({ message: "Champs obligatoire !" }),
    email: z.string({ message: "Champs obligatoire !" }),
    bio: z.string({ message: "Champs obligatoire !" }),
})

