import { Edit3 } from 'lucide-react';
import { motion } from 'motion/react';
const avatar = "https://lh3.googleusercontent.com/aida-public/AB6AXuBWca-3b5zO39YPa6ll7x18rQQGd5EsyzKoUhJpxt-tFBW4LJUggcE4JFLJV4wnGXGTu6PivQv-_CmicGOxJJwWRN9eEI3YIGS9Z94aXF_lNBDIyR33NCwB9e0wPuddBwZiYrH2UdkvChXOujDXs7u8enlj7ym8M4vIl96yGQ4tCZCARVQr0OYWWlxeO7fr9MjySBrSllQKgj5tW6mvgE1u_bKvtv2UX4qcKNlmCVqtI2N7ZzM4HpKnqPCRxJq7-toM9XZ-nmnKHw";
export default function HeaderComponent({ currentUser }: { currentUser: UserProps }) {
    const userStats = {
        totalRecipes: 42,
        publicCount: 18,
        privateCount: 24
    }
    return (
        <header className="relative mb-16 flex flex-col md:flex-row items-center md:items-end space-y-8 md:space-y-0 md:space-x-12">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="relative"
            >
                <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-surface-container-highest shadow-xl">
                    <img
                        src={avatar}
                        alt={currentUser?.name}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                    />
                </div>
                <button className="absolute bottom-2 right-2 bg-primary text-white p-2 rounded-full shadow-lg hover:scale-110 transition-transform">
                    <Edit3 size={16} />
                </button>
            </motion.div>

            <div className="flex-1 text-center md:text-left">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="font-headline text-5xl font-extrabold text-on-surface mb-2 tracking-tight"
                >
                    {currentUser?.name}
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-on-surface-variant font-label text-lg mb-6"
                >
                    {currentUser?.bio}
                </motion.p>

                <div className="grid grid-cols-3 gap-4 md:max-w-md">
                    <StatCard label="Total Recipes" value={userStats.totalRecipes} primary />
                    <StatCard label="Public" value={userStats.publicCount} />
                    <StatCard label="Private" value={userStats.privateCount} />
                </div>
            </div>

            <div className="flex items-center space-x-3">
                <button className="bg-surface-container-high text-on-surface px-6 py-3 rounded-lg font-bold font-label hover:bg-surface-container-highest transition-colors">
                    Edit Profile
                </button>
            </div>
        </header>
    )
}

function StatCard({ label, value, primary = false }: { label: string, value: number, primary?: boolean }) {
    return (
        <div className="bg-surface-container-low p-4 rounded-xl text-center">
            <span className={`block text-2xl font-bold font-headline ${primary ? 'text-primary' : 'text-on-surface'}`}>
                {value}
            </span>
            <span className="text-xs font-label uppercase tracking-widest text-on-surface-variant">
                {label}
            </span>
        </div>
    );
}