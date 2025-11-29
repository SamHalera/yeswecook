import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { getSession } from "@/lib/auth-server"
import { Edit } from "lucide-react"
import Link from "next/link"
import { unauthorized } from "next/navigation"

export default async function AuthPage() {
    const user = await getSession()
    if (!user) return unauthorized()
    return (

        <Card className="max-w-md mx-auto flex item-center gap-2">
            <CardHeader>
                <CardTitle>User Profile</CardTitle>
                <Link className="flex-1 flex items-center gap-2 text-sm text-blue-400 transition hover:text-blue-600" href={"/auth"}>
                    <Edit className="size-3" /> Edit Profile
                </Link>
            </CardHeader>
            <CardContent>

                <div className=" grid gap-2">
                    <div className="flex flex-col">
                        <span className="test-sm text-muted-foreground">Name</span>
                        <span>{user.user.name}</span>
                    </div>
                </div>
                <div className=" grid gap-2">
                    <div className="flex flex-col">
                        <span className="test-sm text-muted-foreground">Email</span>
                        <span>{user.user.email}</span>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}