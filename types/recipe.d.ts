import { Media } from "@/src/generated/prisma/client";

interface RecipeBase {
    id: string;
    name: string;
    durationPrep: string | null;
    durationCook: string | null;
    category: Category;
    description: string;
    nbOfPersons: string;
    createdAt: Date;
    updatedAt: Date;
    slug: string;
    authorId: string,
    media: RecipeMediaProps[]
}
interface RecipeProps extends RecipeBase {
    ingredients: {
        name?: string | undefined;
        newName?: string | undefined;
        quantity?: string | undefined;
        unit?: string | null;
    }[]
}
interface RecipeItemProps extends RecipeBase {
    author: {
        name: string
        email: string
        image: string | null
    }
}

type RecipeMediaProps = {
    source: string,
    publicId: string
    isRecipeCover: boolean
    caption?: string | null
}

