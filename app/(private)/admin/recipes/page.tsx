
import { getUser } from "@/lib/auth-server"
import { unauthorized } from "next/navigation"


export default async function AllRecipesPage() {


    const user = await getUser()

    if (!user) return unauthorized()



    return (
        <div className="w-full">


        </div>
    )
}