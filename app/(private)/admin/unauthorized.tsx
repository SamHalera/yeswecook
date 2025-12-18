import { Alert, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default async function UnAuthPage() {

    return (
        <Card>
            <CardTitle>You need to be logged to see this page</CardTitle>
            <CardContent>
                <Link href={"/auth/sign-in"}>Connectez-vous!</Link>
            </CardContent>
        </Card>
    )
}