import { getSession, getUser } from "@/lib/auth-server"
import { Bell, User } from "lucide-react"
import Link from "next/link"

import { Button, buttonVariants } from "../ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { CookingPot, LogOut, User2 } from "lucide-react"
import { auth } from "@/lib/auth"
import { headers } from "next/headers"

import { redirect } from "next/navigation"

import { NavLinks } from "./navLinks"
import { log } from "console"
import Image from "next/image"
import { authClient } from "@/lib/auth-client"



export const Navbar = async ({ currentUrl, user }: { currentUrl: string | null, user: UserProps }) => {




    const showMyBook = user ? true : false
    return (
        <nav className="glass-nav border-b border-outline-variant/10">
            <div className="flex items-center justify-between px-8 py-4 max-w-7xl mx-auto">
                <Link href={"/"} className="text-2xl font-bold text-primary font-headline tracking-tight">YesWeCook</Link>
                <NavLinks showMyBook={showMyBook} />
                {!user ? (
                    <div className="flex gap-3">
                        <Link href={"/auth/sign-in"} className="text-on-surface-variant hover:text-primary transition-colors font-headline tracking-tight">Sign In</Link>
                        <Link href={"/auth/sign-up"} className="text-on-surface-variant hover:text-primary transition-colors font-headline tracking-tight">Sign Up</Link>
                    </div>
                ) : (
                    <div className="flex items-center space-x-6">
                        {/* <div className="flex items-center space-x-4">

                        </div> */}
                        <button className="p-2 hover:bg-primary/5 rounded-lg transition-colors text-on-surface-variant">
                            <Bell size={24} />
                        </button>
                        <Link href={'/admin/recipes/new'} className="hidden lg:block bg-primary text-white px-6 py-2 rounded-lg font-semibold transition-all hover:scale-105 active:scale-95">
                            Create Recipe
                        </Link>
                        <AuthButton />
                    </div>

                )}

            </div>
        </nav>
    )
}

export const AuthButton = async () => {
    const user = await getUser()
    if (!user) {
        return <Link href={"/auth/signin"} className={buttonVariants({ size: "sm", variant: "outline" })}>Sign in</Link>
    }
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <div className=" flex items-center gap-2">
                    <Avatar className="size-8">
                        {user.image ?
                            <AvatarImage src={user.image} />
                            :
                            <div
                                className="w-12 h-12 rounded-full overflow-hidden bg-slate-200 ml-2 border border-slate-200 cursor-pointer hover:ring-2 hover:ring-primary/20 transition-all">
                                <Image
                                    width={48}
                                    height={48}
                                    alt="User profile avatar"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDPkhifIfhBBuHivQRe_cFl4UIkZKQIOXWlgUW2xfSKGKJc4MSCGlN_iG1sOYfOCPE8iJ5KEhUFtd7YudCInOXwkUh4wZ_K34mKuPEy_egCdjJEPD1PGxNm6ODwviXYwFuB8c_6aSTM8Cvxy8P5mTE1U5em8su8DrumbxYmka6DxF0Ej3f7DSINuYVlfwsn1-b2j2_fiaBkWCUJiWKYFcCho_QR6HnD3HxFKl_WSvFJi96JGSTq5LfDbvWNse9BXiGnD6JSKXZmaw" />
                            </div>
                        }
                        {/* {user.user.image ? <AvatarImage src={user.user.image} /> : <div
                            className="w-10 h-10 rounded-full overflow-hidden bg-slate-200 ml-2 border border-slate-200 cursor-pointer hover:ring-2 hover:ring-primary/20 transition-all">
                            <img alt="User profile avatar"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDPkhifIfhBBuHivQRe_cFl4UIkZKQIOXWlgUW2xfSKGKJc4MSCGlN_iG1sOYfOCPE8iJ5KEhUFtd7YudCInOXwkUh4wZ_K34mKuPEy_egCdjJEPD1PGxNm6ODwviXYwFuB8c_6aSTM8Cvxy8P5mTE1U5em8su8DrumbxYmka6DxF0Ej3f7DSINuYVlfwsn1-b2j2_fiaBkWCUJiWKYFcCho_QR6HnD3HxFKl_WSvFJi96JGSTq5LfDbvWNse9BXiGnD6JSKXZmaw" />
                        </div>} */}

                        {/* <AvatarFallback>{user.user.email[0].toUpperCase()}</AvatarFallback> */}
                    </Avatar>
                    <p className="font-bold text-primary text-xs">{user.name}</p>

                </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="flex flex-col gap-2 bg-surface-container-low p-4 border-b-2 border-b-primary rounded text-primary font-semibold">
                <DropdownMenuItem>
                    <Link href={"/admin/recipes"} className="flex items-center gap-2">
                        <User2 className="size-5 text-primary" />
                        Mes Recettes (Admin)
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <Link href={"/admin/recipes/new"} className="flex items-center gap-2">
                        <CookingPot className="size-5 text-primary" />
                        Nouvelle Recette (Admin)
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <Link href={"/account"} className="flex items-center gap-2">
                        <User2 className="size-5 text-primary" />
                        Profile
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <form action={async () => {
                        "use server"
                        await auth.api.signOut({
                            headers: await headers()
                        });
                        redirect("/")
                    }}>
                        <button type="submit" className="flex items-center gap-2 w-full">
                            <LogOut className="size-5 text-primary" />
                            Déconnexion
                        </button>
                    </form>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}