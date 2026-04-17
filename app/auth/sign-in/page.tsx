import LoginScreen from "@/components/auth/loginScreen";
import { SignInForm } from "@/components/auth/signInForm";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default async function SignInPage() {
    return (
        <div className="min-h-screen flex flex-col">
            <LoginScreen />
        </div>
        // <Card className="max-w-md mx-auto my-20">
        //     <CardHeader>
        //         <CardTitle>Sign in</CardTitle>
        //     </CardHeader>
        //     <CardContent>
        //         <SignInForm />
        //     </CardContent>
        //     <CardFooter>
        //         <p className="text-sm text-muted-foreground">
        //             You do not have an account yet? {" "}
        //             <Link className="text-blue-400 transition hover:text-blue-600" href={"/auth/sign-up"}>Sign up</Link>
        //         </p>
        //     </CardFooter>
        // </Card>
    )
}