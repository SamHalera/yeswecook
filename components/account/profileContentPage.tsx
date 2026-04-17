"use client"
import { motion, AnimatePresence } from 'motion/react';
import AccountSideBar from './AccountSideBar';
import HeadingComponent from './headingComponent';
import ProfileForm from './profileForm';
import { useState } from 'react';
import PrivacyForm from './privacyForm';
import NotificationsForm from './notificationsForm';
import PreferencesForm from './prefercencesForm';

export default function ProfileContentPage({ user }: { user: UserProps }) {

    const [active, setActive] = useState('Profile');
    console.log("user==>", user)
    console.log("ACTIVE ", active)

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-16"
        >

            <AccountSideBar active={active} setActive={setActive} />
            <section className="lg:col-span-9 space-y-20">
                <HeadingComponent />

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="space-y-16"
                >
                    {active === "Profile" && <ProfileForm user={user} />}
                    {active === "Privacy" && <PrivacyForm user={user} />}
                    {active === "Notifications" && <NotificationsForm user={user} />}
                    {active === "Preferences" && <PreferencesForm user={user} />}


                </motion.div>
            </section>
        </motion.div>
    )

}