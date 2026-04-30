import { ArrowBigRight, ArrowRight, BookOpenCheck, ChevronRight, MenuIcon, Search } from "lucide-react"
import { Hero } from "./hero"
import { PantrySearch } from "./pantrySearch"
import { RecipeSection } from "./recipeSection"
import { CommunitySection } from "./communitySection"
import { Newsletter } from "./newsletterSection"
import { RecipeBase } from "@/types/recipe"
import prisma from "@/lib/prisma"


export const HomePageComponent = async ({ user, allRecipes }: { user: UserProps | null, allRecipes: RecipeBase[] | undefined | null }) => {
    const isAuthentified = user !== undefined
    const latestRecipe = await prisma.recipe.findFirst({
        orderBy: {
            createdAt: 'desc',
        },
        include: {
            author: {
                select: {
                    id: true,
                    username: true,
                    name: true,
                    email: true,
                    image: true,
                    createdAt: true,
                    updatedAt: true,
                    emailVerified: true,
                    isAdmin: true
                }
            },
            cover: true
        }
    });
    return (
        <>
            <Hero isAuthentified={isAuthentified} />
            <PantrySearch />
            <RecipeSection allRecipes={allRecipes} latestRecipe={latestRecipe} />
            <CommunitySection />
            <Newsletter />
        </>
    )
}