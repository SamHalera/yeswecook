type RecipeProps = {
    name: string;
    id: string;
    duration: string | null;
    category: Category;
    description: string;
    nbOfPersons: string;
    createdAt: Date;
    updatedAt: Date;
    slug: string;
    authorId: string,
    ingredients: {
        name?: string | undefined;
        newName?: string | undefined;
        quantity?: string | undefined;
        unit?: string | null;
    }[]
}