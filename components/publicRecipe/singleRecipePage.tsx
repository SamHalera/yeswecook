"use client"
import { RecipeProps } from "@/types/recipe"
import { AlarmClockCheckIcon, AlarmClockIcon, ArrowLeft, CookingPot, Users2Icon } from "lucide-react"
import Link from "next/link"

import { usePathname } from "next/navigation"

export const SingleRecipePage = ({ recipe }: { recipe: RecipeProps }) => {
    const pathname = usePathname()
    const path = pathname.replace(recipe.slug, "")
    return (
        <div className="flex flex-col gap-2.5  mx-auto w-full">
            <Link href={path} className="flex items-center gap-2 self-start m-4 bg-blue-400 border border-blue-400 p-2 rounded text-white transition hover:text-blue-400 hover:bg-transparent"><ArrowLeft /> retour aux recettes</Link>
            <div>
                <h1>{recipe.name}</h1>
                <div className="flex flex-col gap-4">
                    <span className="flex items-center gap-2"><CookingPot />{recipe?.category}</span>
                    <span className="flex items-center gap-2"><Users2Icon />{recipe?.nbOfPersons}</span>

                    <span className="flex items-center gap-2"><AlarmClockIcon />preparation : {recipe?.durationPrep}</span>
                    <span className="flex items-center gap-2"><AlarmClockCheckIcon />cuisson : {recipe?.durationCook}</span>
                </div>
                <div dangerouslySetInnerHTML={{ __html: recipe?.description }} />
            </div>
        </div>
    )
}