import z from "zod";

export const RecipeIngredientInputSchema = z.object({
    ingredientId: z.string().cuid(),       // or just .string() if you don't enforce cuid on the frontend
    quantity: z
        .number({
            error: "La quantité est obligatoire",
        })
        .positive("La quantité doit être > 0"),
    unit: z
        .string()
        .optional(),
})
// Define Category as a const tuple
const Category = ["PLATS", "ENTREES", "DESSERTS", "APERO"] as const;
export const NewRecipeSchema = z.object({
    name: z
        .string({
            message: "Le nom est obligatoire",
        })
        .min(1, "Le nom ne peut pas être vide"),
    durationPrep: z.string().optional(),
    durationCook: z.string().optional(),
    shortDescription: z.string().optional().nullable(),
    comment: z.string().optional().nullable(),
    isPublic: z.boolean(),
    nbOfPersons: z.string().refine((val) => !isNaN(parseFloat(val)), { error: "La quantité doit être un nombre" }),
    category: z.enum(Category, {
        error: "La catégorie est obligatoire",
    }),
    instructions: z.string({
        error: "Description obligatoire"
    }).min(1, "La description ne peut pas être vide"),
    ingredients: z
        .array(z.object({
            ingredient: z.object({
                name: z.string().optional().nullable(),
                newName: z.string().optional().nullable(),
            }),
            quantity: z.string().refine((val) => !isNaN(parseFloat(val)), { error: "La quantité doit être un nombre" }),
            // quantity: z.number().refine((val) => !isNaN(val), { error: "La quantité doit être un nombre" }),
            unity: z.string(),
        }))
        .min(1, "Au moins un ingrédient est requis"),
})

export type NewRecipeFormType = z.infer<typeof NewRecipeSchema>;

export const MediaRecipeSchema = z.object({
    media: z.object({
        source: z.string(),
        caption: z.string().optional().nullable(),
        isRecipeCover: z.boolean(),
        publicId: z.string()
    })
})

export type MediaRecipeFormType = z.infer<typeof MediaRecipeSchema>;