import { Alert, AlertTitle } from "@/components/ui/alert"

export default async function UnAuthPage() {

    return (
        <Alert>
            <AlertTitle>You need to be logged to see this page</AlertTitle>
        </Alert>
    )
}