import { Pencil } from "lucide-react";
import { EditProfileForm } from "./editProfileForm";

export default function NotificationsForm({ user }: { user: UserProps }) {

    return (
        <div className="bg-surface-container-low p-8 md:p-12 rounded-3xl border border-on-surface/5">
            <h3 className="text-2xl font-headline font-extrabold mb-10 flex items-center">
                <span className="w-10 h-[2px] bg-primary mr-5"></span>
                Notifications
            </h3>
            <div className="flex flex-col md:flex-row gap-12 items-start">
                <div className="relative group shrink-0">

                </div>

                <div className="flex-1  w-full">

                </div>
            </div>
        </div>
    );
}