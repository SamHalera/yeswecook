import { getSession, getUser } from "@/lib/auth-server"
import Link from "next/link"

import { Button, buttonVariants } from "../ui/button"
import { DropdownMenu, DropdownMenuTrigger } from "../ui/dropdown-menu"
import { DropdownMenuContent, DropdownMenuItem } from "@radix-ui/react-dropdown-menu"
import { CookingPot, LogOut, User2 } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { headers } from "next/headers"
import { redirect } from "next/navigation"
import { auth } from "@/lib/auth"
import { Navbar } from "./navbar"
import { authClient } from "@/lib/auth-client"


export const HeaderNew = async () => {

    const user = await getUser()
    const headersList = await headers()
    const url = headersList.get('x-current-path') ?? headersList.get('next-url')

    return (
        <Navbar currentUrl={url} user={user} />
    )
}