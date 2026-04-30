import { getAllRecipesByUserName } from "@/actions/recipe/recipe-action"
import { getUserFromDB } from "@/actions/user/user-action"
import MyRecipesComponent from "@/components/myRecipes/myRecipesComponent"
import { getSession, getUser } from "@/lib/auth-server"

import { notFound } from "next/navigation"

export default async function CommunityUsernamePage({ params }: { params: Promise<{ username: string }> }) {

    const { username } = await params
    const user = await getUserFromDB(username)

    if (!user) notFound()

    const currentUser = await getUser()

    // const session = await getSession()
    //TODO CONDITIONNER L'ACCÈS aux personnes connectées

    const recipes = await getAllRecipesByUserName(username)
    const isOwner = currentUser?.username === username
    return (
        <div className="w-full">

            <MyRecipesComponent allRecipes={recipes} userPage={user} isOwner={isOwner} />
            {/* {allRecipes && <RecipesList recipes={allRecipes} currentUser={user} categoryProps={""} />} */}
        </div>
    )

}