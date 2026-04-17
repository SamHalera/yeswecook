"use client"
import { Alert, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, BookOpen, Flame, Home, Lock, LogIn, Utensils } from "lucide-react";
import Image from "next/image"
export default function NotFoundPageContent() {
    const IMAGES = {
        scales: "https://lh3.googleusercontent.com/aida-public/AB6AXuAi-p58LA8Ol43TXTBqx8IS9nbFfd4bgt9ianzwfOVSXspGU_5eg291xbAxjRRPyhtp9v_0VMEXJywT5R7ObUrKYgi91VGqcwmFGEFg7F9tcpC2PYlZLLKHZCV4VnO75qhUgL4XpufKWlJAjTUcO_VCFiS-zVZxJDjY0z9BH7AblqOKrCgVXK3BUpWsQpK13boWPgAtNMxk-6yyNFoQ61zLARJslTEgvm8pf681YLVLCtkZfG318slswqygV36et-T-s7R9G2Lkdw",
        herbs: "https://lh3.googleusercontent.com/aida-public/AB6AXuBahZ1RL4D3GxykapxyZP_yfpKs5xlRrK9IuXutYq_7lf56-P7M9NbUck8oOMo_r-knpOWCJ0WaBVnoEfso_pn5rVSsFr1V5yph3zgXuZH-5d4idImm9QMn7iMpRMwktaOxc3cxid4YjW0XvmRs-zOCs5a4Axlo2vM6xn24Z6guL55KrdzIKb6HZHsWZrP05oGHcUte_ohFM7yiTOdhMrQ-XJRGz1IaKJY0vaIObp_UqCGAjmBNZ3UAl8gXgZ1fjsPp8EtPx3W3fA",
        pantry: "https://lh3.googleusercontent.com/aida-public/AB6AXuBcX0vIzhDxZzIYGEeCK7o3nbX04A9VYuQ3_BqEnUX6Gg8yfpfQC34Bi6dwz1dr6geW3L1JOrt09yMHsFhatIiBpVpBQrUhg4poas2JVOUrFxAJQC3h68Bi6Q9sEguwnj9K4MVeddw6WPNREnU561zBJQOVR3vL_p7eYsWbQj_0YZUA1Lj-JEpDF23jaUDXOpxXVMSlZfq-hDUVCQZXuokNmsnQuglUsMkjRTfNQHPw49ZLZA2WC-7wDzX13OyNo0XcNgSHNhr1iw"
    };
    return (
        <main className="grow flex items-center justify-center pt-24 pb-12 px-6 relative overflow-hidden">
            {/* Decorative Background Element */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
                animate={{ opacity: 0.1, scale: 1, rotate: 12 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="absolute -right-40 top-40 pointer-events-none hidden lg:block"
            >
                <Image
                    width={500}
                    height={600}
                    alt="Artisanal ceramic bowl"
                    className="w-[800px] h-auto object-contain"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBqFHWacEQc_1T9XUbRgegJF_DL1HUDL7JUJAtba0_Zj8QQfV_iIXK2tHEShS8Z4nczxCCZmn5wGwFM3YM0j2cJAJxouFo2Lpn7Zl8Du_Ry2bQl_cSwGTfp4CKkOcF1gIdFT9VW_gmwjr7EycJNmH3F_sBi8hvZg1LA5TkaRr9kAMqkhIjV0s02ftQRv74Ib1l_VK2BZ0LHw1O5Y1GkeD6U5luZMAIHZse0gqMEN80biMLVAVVASUz9fh-5-TPNN_1YpEeU-FZIxg"
                    referrerPolicy="no-referrer"
                />
            </motion.div>

            <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                {/* Image Side (Intentional Asymmetry) */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="relative group lg:order-1"
                >
                    <div className="absolute inset-0 bg-surface-container rounded-2xl -rotate-3 scale-105 group-hover:rotate-0 transition-transform duration-700"></div>
                    <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                        <Image
                            width={600}
                            height={600}
                            alt="Empty white plate on wooden table"
                            className="w-full aspect-[4/5] object-cover transform group-hover:scale-105 transition-transform duration-1000"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB6h7KMmyOpSAm95ankQVy3g6NqR37zOz8-RYq6bCnWaTfQxHdUdtiUdd3X-e4wavFs8iq5vju1Uy-aKYcX2CaA8u3TLf5g-gh-IkbuursIQpZj3hYAodxYYAL777KhiSD_Tc6beZdVJFBsBTZONu3BTLgfHunUA_vDL0t_HaYdikkR-C9HDGOzOTm9jjTCHrarVyHAzin4VnIO41G9DTffGd5s_AURcoA_xkEds5d1RJpZizcjHCpMcpqb8j6Fmi7obUSSUW7sow"
                            referrerPolicy="no-referrer"
                        />
                        {/* Glassmorphism Overlay Label */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="absolute bottom-6 left-6 right-6 bg-white/70 backdrop-blur-md p-6 rounded-xl border border-white/40"
                        >
                            <span className="block text-xs font-bold uppercase tracking-[0.2em] text-primary mb-2">Code d'erreur : 404</span>
                            <p className="text-on-surface-variant text-sm italic font-body leading-relaxed">
                                "L'ingrédient manquant au menu d'aujourd'hui."
                            </p>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Content Side */}
                <div className="text-left space-y-10 lg:pl-12 lg:order-2">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="space-y-6"
                    >
                        <h1 className="font-headline text-8xl font-black text-on-surface leading-none tracking-tighter">
                            404
                        </h1>
                        <h2 className="font-headline text-4xl font-bold text-secondary leading-tight">
                            Oups ! Cette recette manque à l'appel.
                        </h2>
                        <p className="text-on-surface-variant text-lg leading-relaxed max-w-lg font-body">
                            Il semblerait que le plat ait débordé ou que la page ait été retirée du feu. Quoi qu'il en soit, nous ne trouvons pas ce que vous cherchez.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="flex flex-col sm:flex-row items-stretch sm:items-center gap-6"
                    >
                        <Link
                            className="bg-primary text-on-primary hover:text-white px-8 py-4 rounded-lg font-bold flex items-center justify-center gap-3 hover:opacity-90 active:scale-95 transition-all shadow-xl shadow-primary/20"
                            href="/"
                        >
                            <Utensils className="w-5 h-5" />
                            Retourner en Cuisine
                        </Link>
                        <Link
                            className="text-primary font-bold px-8 py-4 flex items-center justify-center gap-2 hover:bg-surface-container-low rounded-lg transition-all underline decoration-primary/20 underline-offset-8"
                            href="/explore-recipes"
                        >
                            Voir les recettes populaires
                        </Link>
                    </motion.div>

                    {/* Bento Style Suggestion Tiles */}
                    {/* <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="pt-12 border-t border-outline-variant/20"
                    >
                        <span className="block text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-6">RECOMMANDÉ POUR VOUS</span>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {[
                                { label: 'Tendances Actuelles', icon: Flame, desc: 'Ce qui mijote en ce moment' },
                                { label: 'Dernières Astuces', icon: BookOpen, desc: 'Pour perfectionner vos plats' }
                            ].map((item) => (
                                <motion.div
                                    key={item.label}
                                    whileHover={{ y: -4 }}
                                    className="group bg-surface-container-low p-5 rounded-2xl flex items-center gap-4 hover:bg-surface-container-high transition-all cursor-pointer border border-transparent hover:border-primary/10"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-surface-container-highest flex items-center justify-center group-hover:bg-primary transition-colors">
                                        <item.icon className="w-6 h-6 text-primary group-hover:text-on-primary transition-colors" />
                                    </div>
                                    <div>
                                        <span className="text-sm font-bold text-on-surface block">{item.label}</span>
                                        <span className="text-[10px] text-on-surface-variant uppercase tracking-wider">{item.desc}</span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div> */}
                </div>
            </div>
        </main>
    )
}