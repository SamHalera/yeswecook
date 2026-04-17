import { getSession } from "@/lib/auth-server"
import Link from "next/link"
import { redirect } from "next/navigation"
import { auth } from "@/lib/auth"
import { headers } from "next/headers"
import { Button, buttonVariants } from "../ui/button"
import { DropdownMenu, DropdownMenuTrigger } from "../ui/dropdown-menu"
import { DropdownMenuContent, DropdownMenuItem } from "@radix-ui/react-dropdown-menu"
import { CookingPot, LogOut, User2 } from "lucide-react"
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
                <div className=" flex items-center">
                    <Avatar className="size-6">
                        {user.user.image ? <AvatarImage src={user.user.image} /> : null}
                        {/* {user.user.image ? <AvatarImage src={user.user.image} /> : <div
                            className="w-10 h-10 rounded-full overflow-hidden bg-slate-200 ml-2 border border-slate-200 cursor-pointer hover:ring-2 hover:ring-primary/20 transition-all">
                            <img alt="User profile avatar"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDPkhifIfhBBuHivQRe_cFl4UIkZKQIOXWlgUW2xfSKGKJc4MSCGlN_iG1sOYfOCPE8iJ5KEhUFtd7YudCInOXwkUh4wZ_K34mKuPEy_egCdjJEPD1PGxNm6ODwviXYwFuB8c_6aSTM8Cvxy8P5mTE1U5em8su8DrumbxYmka6DxF0Ej3f7DSINuYVlfwsn1-b2j2_fiaBkWCUJiWKYFcCho_QR6HnD3HxFKl_WSvFJi96JGSTq5LfDbvWNse9BXiGnD6JSKXZmaw" />
                        </div>} */}

                        {/* <AvatarFallback>{user.user.email[0].toUpperCase()}</AvatarFallback> */}
                    </Avatar>
                    {/* <p>{user.user.name}</p> */}
                    <div
                        className="w-10 h-10 rounded-full overflow-hidden bg-slate-200 ml-2 border border-slate-200 cursor-pointer hover:ring-2 hover:ring-primary/20 transition-all">
                        <img alt="User profile avatar"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDPkhifIfhBBuHivQRe_cFl4UIkZKQIOXWlgUW2xfSKGKJc4MSCGlN_iG1sOYfOCPE8iJ5KEhUFtd7YudCInOXwkUh4wZ_K34mKuPEy_egCdjJEPD1PGxNm6ODwviXYwFuB8c_6aSTM8Cvxy8P5mTE1U5em8su8DrumbxYmka6DxF0Ej3f7DSINuYVlfwsn1-b2j2_fiaBkWCUJiWKYFcCho_QR6HnD3HxFKl_WSvFJi96JGSTq5LfDbvWNse9BXiGnD6JSKXZmaw" />
                    </div>
                </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="flex flex-col gap-2 bg-[#233333] p-4 border rounded text-white">
                <DropdownMenuItem>
                    <Link href={"/admin/recipes"} className="flex items-center gap-2">
                        <User2 className="size-3" />
                        Recettes (Admin)
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <Link href={"/admin/recipes/new"} className="flex items-center gap-2">
                        <CookingPot className="size-3" />
                        Nouvelle Recette (Admin)
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <Link href={"/auth"} className="flex items-center gap-2">
                        <User2 className="size-3" />
                        Account
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <form action="">
                        <button className="flex items-center gap-2 w-full" onClick={async () => {
                            "use server"

                            await auth.api.signOut({
                                headers: await headers(),
                            });

                            console.log("ReDIRECT")
                            redirect("/")

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