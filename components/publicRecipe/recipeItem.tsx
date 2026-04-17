
import { AlarmClockCheckIcon, AlarmClockIcon, CookingPot, Users2Icon } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../ui/card"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { RecipeItemProps } from "@/types/recipe"

export const RecipeItem = ({ recipe, isCurrentUserAuthor }: { recipe: RecipeItemProps, isCurrentUserAuthor: boolean }) => {
    const path = usePathname()

    const currentPath = path === "/" ? `/${recipe.category.toLowerCase()}` : path
    return (
        <Link href={`${currentPath}/${recipe.slug}`} className="min-w-[250px] block shrink-0">
            <Card>
                <CardHeader>
                    <CardTitle>{recipe.name}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col gap-5 items-center">
                    <div className="flex flex-col gap-4 items-center">
                        <span className="flex items-center gap-2"><CookingPot />{recipe?.category}</span>
                        <span className="flex items-center gap-2"><Users2Icon />{recipe?.nbOfPersons}</span>

                        <span className="flex items-center gap-2"><AlarmClockIcon />preparation : {recipe?.durationPrep}</span>
                        <span className="flex items-center gap-2"><AlarmClockCheckIcon />cuisson : {recipe?.durationCook}</span>
                    </div>
                </CardContent>
                <CardFooter>{isCurrentUserAuthor ? "Moi" : recipe.author.name}</CardFooter>
            </Card>
        </Link>
    )
}