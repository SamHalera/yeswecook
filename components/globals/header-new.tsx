import { getSession } from "@/lib/auth-server"
import Link from "next/link"

import { Button, buttonVariants } from "../ui/button"
import { DropdownMenu, DropdownMenuTrigger } from "../ui/dropdown-menu"
import { DropdownMenuContent, DropdownMenuItem } from "@radix-ui/react-dropdown-menu"
import { CookingPot, LogOut, User2 } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { headers } from "next/headers"
import { redirect } from "next/navigation"
import { auth } from "@/lib/auth"


export const HeaderNew = async () => {

    const user = await getSession()
    return (
        <nav
            className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl docked full-width top-0 sticky z-50 border-b border-slate-100 dark:border-slate-800">
            <div className="flex justify-between items-center w-full px-8 py-4 max-w-7xl mx-auto">
                <div className="flex items-center gap-10">
                    <Link href={"/"}
                        className="text-2xl font-black text-slate-800 dark:text-slate-100 tracking-tight font-headline">YesWeCook</Link>
                    <div className="hidden md:flex items-center gap-8">
                        <Link className="text-slate-500 dark:text-slate-400 font-medium hover:text-green-600 dark:hover:text-green-400 transition-colors duration-200"
                            href="/">Home</Link>
                        {user && <Link href={"/admin/recipes"} className="text-slate-500 dark:text-slate-400 font-medium hover:text-green-600 dark:hover:text-green-400 transition-colors duration-200"
                        >My Recipe Book</Link>}

                        <Link className="text-slate-900 dark:text-white border-b-2 border-green-600 font-bold pb-1" href="#">Explore Recipes</Link>
                        <Link className="text-slate-500 dark:text-slate-400 font-medium hover:text-green-600 dark:hover:text-green-400 transition-colors duration-200"
                            href="#">Community</Link>

                    </div>
                </div>
                {!user ? <div className="flex gap-3">
                    <Link href={"/auth/sign-in"} className="text-green-600 hover:text-green-700 transition">Sign In</Link>
                    <Link href={"/auth/sign-up"} className="text-green-600 hover:text-green-700 transition">Sign Up</Link>
                </div> : <div className="flex items-center gap-3">
                    <button
                        className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full text-slate-600 dark:text-slate-300 transition-all active:scale-95">
                        <span className="material-symbols-outlined">notifications</span>
                    </button>
                    <button
                        className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full text-slate-600 dark:text-slate-300 transition-all active:scale-95">
                        <span className="material-symbols-outlined">favorite</span>
                    </button>
                    <AuthButton />
                </div>}

            </div>
        </nav>
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
                                headers: await headers()
                            });

                            redirect("/auth/sign-in")

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