
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default async function Loading() {




    return (
        <Card>
            <CardHeader>
                <CardTitle>404</CardTitle>
                <CardDescription>{"La recette n'existe pas"}</CardDescription>
            </CardHeader>
            <CardFooter>
                <Link href={`/admin/recipes`}>Retour à la page Recettes</Link>
            </CardFooter>
        </Card>
    )

}