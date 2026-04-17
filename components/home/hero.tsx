"use client"
import { motion } from 'motion/react';
import Link from 'next/link';
export function Hero({ isAuthentified }: { isAuthentified: boolean }) {
    console.log("isAuthentified==>", isAuthentified)
    const pathToStart = isAuthentified ? '/admin/recipes/new' : '/auth/sign-in'
    return (
        <section className="max-w-7xl mx-auto px-8 py-16 flex flex-col lg:flex-row items-center gap-12 overflow-hidden">
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="lg:w-1/2 z-10"
            >
                <span className="text-xs uppercase tracking-[0.15em] text-primary font-bold mb-4 block">The Living Cookbook</span>
                <h1 className="text-5xl lg:text-7xl font-headline font-extrabold text-on-surface leading-tight mb-6">
                    Eat well without <br />making life <span className="text-primary italic">complicated.</span>
                </h1>
                <p className="text-lg text-on-surface-variant max-w-xl mb-10 leading-relaxed">
                    Your personal recipe book for a modern life. Curate your private collection, share gems with the community, and discover platform-tested recipes designed for real kitchens.
                </p>
                <div className="flex flex-wrap gap-4">
                    <Link href={"/admin/recipes/new"} className="braise-gradient text-white px-8 py-4 rounded-lg font-bold shadow-editorial transition-all hover:scale-105 active:scale-95">
                        Start Your Book
                    </Link>
                    <Link href={"/community"} className="bg-surface-container-low text-on-surface px-8 py-4 rounded-lg font-bold transition-all hover:bg-surface-dim active:scale-95">
                        Explore Community
                    </Link>
                </div>
            </motion.div>
            <div className="lg:w-1/2 relative">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="aspect-[4/5] rounded-xl overflow-hidden shadow-editorial transform rotate-2"
                >
                    <img
                        className="w-full h-full object-cover"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBbwdDdP3xeZqmqBkeEeae531-qx3NdWDtrhIBt8f04O6vkcmvw7pxFZMdnzW0-Ofct8HWfSIUJ7h9UZUTX_7Kb2ta7KUbcpOTA7mReNCrSez56NKWsO6o5b5Zb89dwKwsiBLfv0uO1UeKfzZK_WTbBC0LgscsBK78Dd_knkW-44jWIUYE2jMy1Wtcr6bj2BBlNVIOdUWC19j8OxEMVuUQtfujUMFtB5thDwxsvy0-gQi3ukmDyRnwwPfDnAysw_PTXGcyN7Y5UDQ"
                        alt="Fresh pasta"
                        referrerPolicy="no-referrer"
                    />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="absolute -bottom-8 -left-12 aspect-square w-64 rounded-xl overflow-hidden shadow-editorial border-8 border-white transform -rotate-3 hidden md:block"
                >
                    <img
                        className="w-full h-full object-cover"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCUZLD34m9LcH7eW40F3h48gXeNT5dtsE-hz24SAIPIuW3_DI7fH5TuC-gLRj9aUAW6gkyImd6iHUF8cvw0xS3uYbFWawy7ysM65jgfmBI6RHJ4q7DhUzGRWuOl2bBrAijfuLThHOyCCzDI5kUufb1NMJsTRUEViBxxT_toWEkjpyfmd2gzZeBbtq-rpR3lO83f1fsPoYXNOhwwSCvHJrIItCsqVrhU1rfYvJNhvbE38PTFI9fZVCiN-zihfQHvCaM90Q6zrj7Cdg"
                        alt="Seared steak"
                        referrerPolicy="no-referrer"
                    />
                </motion.div>
            </div>
        </section>
    );
}