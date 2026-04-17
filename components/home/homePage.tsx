import { ArrowBigRight, ArrowRight, BookOpenCheck, ChevronRight, MenuIcon, Search } from "lucide-react"
import { Hero } from "./hero"
import { PantrySearch } from "./pantrySearch"
import { RecipeSection } from "./recipeSection"
import { CommunitySection } from "./communitySection"
import { Newsletter } from "./newsletterSection"

export const HomePageComponent = () => {

    return (
        <>
            <Hero />
            <PantrySearch />
            <RecipeSection />
            <CommunitySection />
            <Newsletter />
        </>
    )
}