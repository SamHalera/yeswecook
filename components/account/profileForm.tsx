import { Pencil } from "lucide-react";
import { EditProfileForm } from "./editProfileForm";

export default function ProfileForm({ user }: { user: UserProps }) {

    return (
        <div className="bg-surface-container-low p-8 md:p-12 rounded-3xl border border-on-surface/5">
            <h3 className="text-2xl font-headline font-extrabold mb-10 flex items-center">
                <span className="w-10 h-[2px] bg-primary mr-5"></span>
                Personal Details
            </h3>
            <div className="flex flex-col md:flex-row gap-12 items-start">


                <div className="flex-1  w-full">
                    <EditProfileForm user={user} />
                    {/* {fields.map((field) => (
                        <div key={field.label} className={`space-y-3 group ${field.label === 'Bio' ? 'md:col-span-2' : ''}`}>
                            <label className="block text-xs font-bold uppercase tracking-widest text-on-surface-variant/60 ml-1">
                                {field.label}
                            </label>
                            {field.label === 'Bio' ? (
                                <textarea
                                    className="w-full bg-surface-container-lowest border-0 border-b-2 border-outline-variant/20 focus:border-primary focus:ring-0 px-5 py-4 rounded-t-xl transition-all font-medium text-on-surface resize-none h-24"
                                    defaultValue={field.value}
                                />
                            ) : (
                                <input
                                    type={field.type}
                                    className="w-full bg-surface-container-lowest border-0 border-b-2 border-outline-variant/20 focus:border-primary focus:ring-0 px-5 py-4 rounded-t-xl transition-all font-medium text-on-surface"
                                    defaultValue={field.value}
                                />
                            )}
                        </div>
                    ))} */}
                </div>
            </div>
        </div>
    );
}