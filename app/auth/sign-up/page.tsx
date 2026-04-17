

import { SignUpForm } from "@/components/auth/signUpForm";
import SignUpScreen from "@/components/auth/signUpScreen";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function SignUpPage() {
    return (
        <div className="min-h-screen flex flex-col">

            <SignUpScreen />
        </div>
        // <Card className="max-w-md my-20 mx-auto">
        //     <CardHeader>
        //         <CardTitle>Sign up</CardTitle>
        //     </CardHeader>
        //     <CardContent>
        //         <SignUpForm />
        //     </CardContent>
        //     <CardFooter>
        //         <p className="text-sm text-muted-foreground">
        //             Already have an account? {" "}
        //             <Link className="text-blue-400 transition hover:text-blue-600" href={"/auth/sign-in"}>Sign in</Link>
        //         </p>
        //     </CardFooter>
        // </Card>
    )
}