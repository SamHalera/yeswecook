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
    cover: RecipeMediaProps | null
    isPublic: boolean
}
interface RecipeProps extends RecipeBase {
    ingredients: {
        ingredient: {
            name?: string | null;
            newName?: string | null;
        };
        quantity: string;
        unity: string;
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
    caption?: string | null
}

