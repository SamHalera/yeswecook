import { getSession } from "@/lib/auth-server"
import Link from "next/link"
import { Button, buttonVariants } from "../ui/button"
import { redirect } from "next/navigation"
import { auth } from "@/lib/auth"
import { headers } from "next/headers"
import { DropdownMenu, DropdownMenuTrigger } from "../ui/dropdown-menu"
import { DropdownMenuContent, DropdownMenuItem } from "@radix-ui/react-dropdown-menu"
import { LogOut, User2 } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"

export const Header = async () => {

    const user = await getSession()

    return (
        <header className="flex items-center justify-between h-32 px-7 py-7 bg-gray-300 text-black">
            <Link href={"/"} className="text-3xl">YesWeCook</Link>
            <nav>
                <ul className="flex gap-6 items-center">
                    <li className="text-green-600 hover:text-green-700 transition"><Link href={"/"}>Home</Link></li>
                    <li className="text-green-600 hover:text-green-700 transition"><Link href={"/entrees"}>Entrées</Link></li>
                    <li className="text-green-600 hover:text-green-700 transition"><Link href={"/plats"}>Plats</Link></li>
                    <li className="text-green-600 hover:text-green-700 transition"><Link href={"/desserts"}>Dessers</Link></li>
                    <li className="text-green-600 hover:text-green-700 transition"><Link href={"/aperos"}>Apéros</Link></li>
                    <li className="text-green-600 hover:text-green-700 transition"><Link href={"blog"}>Blog</Link></li>
                </ul>
            </nav>
            {!user ? <div className="flex gap-3">
                <Link href={"/auth/sign-in"} className="text-green-600 hover:text-green-700 transition">Sign In</Link>
                <Link href={"/auth/sign-up"} className="text-green-600 hover:text-green-700 transition">Sign Up</Link>
            </div> : <AuthButton />}

        </header>
    )
}

export const AuthButton = async () => {
    const user = await getSession()
    if (!user) {
        return <Link href={"/auth/signin"} className={buttonVariants({ size: "sm", variant: "outline" })}>Sign in</Link>
    }
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" size={"sm"}>
                    <Avatar className="size-6">
                        {user.user.image ? <AvatarImage src={user.user.image} /> : null}

                        <AvatarFallback>{user.user.email[0].toUpperCase()}</AvatarFallback>
                    </Avatar>
                    <p>{user.user.name}</p>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuItem>
                    <Link href={"/auth"} className="flex items-center gap-2">
                        <User2 className="size-3" />
                        Account
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <form action="">
                        <button className="flex items-center gap-2 w-full" formAction={async () => {
                            "use server"

                            await auth.api.signOut({
                                headers: await headers()
                            });

                            redirect("/auth/signin")

                        }}>
                            <LogOut className="size-4 mr-2" />
                            Logout
                        </button>
                    </form>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}