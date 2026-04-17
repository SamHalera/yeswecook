"use client"

import { Bell, ChefHat, Lock, Settings, User } from "lucide-react";
import { motion, AnimatePresence } from 'motion/react';
import { SetStateAction, useState } from "react";

export default function AccountSideBar({ active, setActive }: { active: string, setActive: React.Dispatch<SetStateAction<string>> }) {

    const items = [
        { name: 'Profile', icon: User },
        { name: 'Privacy', icon: Lock },
        { name: 'Notifications', icon: Bell },
        { name: 'Preferences', icon: Settings },
    ];

    return (
        <aside className="lg:col-span-3">
            <div className="sticky top-32 space-y-8">
                <div>
                    <h2 className="text-[10px] font-bold tracking-[0.2em] text-on-surface-variant/60 uppercase mb-6">Account Settings</h2>
                    <nav className="flex flex-col space-y-1">
                        {items.map((item) => (
                            <button
                                key={item.name}
                                onClick={() => setActive(item.name)}
                                className={`cursor-pointer group flex items-center px-4 py-3 rounded-xl transition-all duration-300 font-headline tracking-tight ${active === item.name
                                    ? 'bg-surface-container-low text-primary font-bold shadow-sm'
                                    : 'text-on-surface-variant hover:bg-surface-container-high'
                                    }`}
                            >
                                <item.icon className={`mr-3 w-5 h-5 ${active === item.name ? 'fill-primary/10' : ''}`} />
                                <span>{item.name}</span>
                            </button>
                        ))}
                    </nav>
                </div>

                {/* Upgrade Card */}
                {/* <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="p-6 bg-primary-fixed text-on-primary-fixed rounded-2xl overflow-hidden relative group cursor-pointer shadow-lg shadow-primary/5"
                >
                    <div className="relative z-10">
                        <p className="text-[10px] font-bold uppercase tracking-[0.15em] mb-2 opacity-80">Pro Member</p>
                        <h3 className="text-xl font-headline font-extrabold mb-4 leading-tight">Unlock Heritage Recipes</h3>
                        <button className="bg-primary text-on-primary px-5 py-2.5 rounded-xl text-sm font-bold hover:bg-primary-container transition-all shadow-md shadow-primary/20 active:scale-95">
                            Upgrade Now
                        </button>
                    </div>
                    <div className="absolute -right-4 -bottom-4 opacity-10 group-hover:scale-125 group-hover:opacity-20 transition-all duration-700">
                        <ChefHat className="w-32 h-32" />
                    </div>
                </motion.div> */}
            </div>
        </aside>
    );
}