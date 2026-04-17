"use client"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"

export const NavLinks = ({ showMyBook }: { showMyBook: boolean }) => {
    const currentUrl = usePathname()

    return (
        <div className="hidden md:flex items-center space-x-8">
            <Link className={cn({
                "font-bold border-b-2 border-primary text-primary": currentUrl === "/",
                "text-on-surface-variant": currentUrl !== "/"
            }, "pb-1 font-headline tracking-tight hover:text-primary transition-colors")} href="/">Home</Link>
            <Link className={cn({
                "font-bold border-b-2 border-primary text-primary": currentUrl === "/explore-recipes",
                "text-on-surface-variant": currentUrl !== "/explore-recipes",
            }, "hover:text-primary transition-colors pb-1 font-headline tracking-tight")} href="/explore-recipes">Explore</Link>
            {showMyBook && <Link className={cn({
                "text-on-surface-variant": currentUrl !== "/admin/recipes",
                "font-bold border-b-2 border-primary text-primary": currentUrl === "/admin/recipes",
            }, " hover:text-primary transition-colors font-headline tracking-tight")} href="/admin/recipes">My Recipes</Link>}

            <Link className={cn({
                "text-on-surface-variant": currentUrl !== "/community",
                "font-bold border-b-2 border-primary text-primary": currentUrl === "/community",
            }, " hover:text-primary transition-colors font-headline tracking-tight")} href="/community">Community</Link>
        </div>
    )

}