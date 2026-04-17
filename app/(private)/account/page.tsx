import ProfileContentPage from "@/components/account/profileContentPage";
import { getUser } from "@/lib/auth-server";
import { unauthorized } from "next/navigation";

export default async function AccountPage() {

    const user = await getUser()
    if (!user) unauthorized()

    return (
        <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
            <ProfileContentPage user={user} />
        </div>
    )
}