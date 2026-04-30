import { Media } from "@/src/generated/prisma/client";

interface RecipeBase {
    id: string;
    name: string;
    durationPrep: string | null;
    durationCook: string | null;
    category: Category;
    instructions: string;
    comment: string | null | undefined
    nbOfPersons: string;
    createdAt: Date;
    updatedAt: Date;
    slug: string;
    authorId: string,
    cover: RecipeMediaProps | null
    isPublic: boolean
    shortDescription?: string | null
    author: UserProps
}
interface RecipeProps extends RecipeBase {
    ingredients: RecipeIngredient[]
}

interface RecipeItemProps extends RecipeBase {
    author: UserProps
}


type RecipeMediaProps = {
    source: string,
    publicId: string
    caption?: string | null
}

type RecipeIngredient = {
    ingredient: {
        name?: string | null;
        newName?: string | null;
    };
    quantity: string;
    unity: string;
}
