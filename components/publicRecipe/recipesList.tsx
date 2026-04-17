"use client"

import { useState } from "react"
import { RecipeItem } from "./recipeItem"
import { usePathname } from "next/navigation"
import { SearchBarComponent } from "./searchBarComponent"
import { RecipeItemProps } from "@/types/recipe"

export const RecipesList = ({ recipes, currentUser, categoryProps }: { recipes: RecipeItemProps[] | undefined, currentUser: UserProps | null, categoryProps: string }) => {


    const [categoryState, setCategoryState] = useState<string>(categoryProps)
    const [searchValue, setSearchValue] = useState<string>("")
    return (
        <div className="w-full flex flex-col gap-8">
            {categoryProps === "" && <div className="flex flex-col gap-2 self-center">
                <label htmlFor="category">Filtre par catégorie</label>
                <select onChange={(e) => {
                    setCategoryState(e.target.value)
                }} name="category" id="categroy" className="border border-gray-300 p-3 rounded">
                    <option value="">toutes catégories</option>
                    <option value="PLATS">PLATS</option>
                    <option value="ENTREES">APEROS</option>
                    <option value="DESSERTS">DESSERTS</option>
                    <option value="APERO">APEROS</option>
                </select>
            </div>}

            <SearchBarComponent value={searchValue} setValue={setSearchValue} />


            <div className="flex gap-4 items-center flex-wrap">
                {
                    recipes
                        ?.filter((item) => {
                            if (categoryState === "") return item
                            return item.category === categoryState
                        })
                        .filter((item) => {
                            if (!searchValue) return item
                            return item.name.toLowerCase().includes(searchValue.toLowerCase())
                        })
                        .map((recipe) => {
                            const isCurrentUserAuthor: boolean = currentUser?.id === recipe.authorId

                            return <RecipeItem key={recipe.id} recipe={recipe} isCurrentUserAuthor={isCurrentUserAuthor} />
                        })
                }

            </div>
        </div>
    )
}