"use client"
import { Alert, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Home, Lock, LogIn } from "lucide-react";
import Image from "next/image"
export default function UnauthPageContent() {
    const IMAGES = {
        scales: "https://lh3.googleusercontent.com/aida-public/AB6AXuAi-p58LA8Ol43TXTBqx8IS9nbFfd4bgt9ianzwfOVSXspGU_5eg291xbAxjRRPyhtp9v_0VMEXJywT5R7ObUrKYgi91VGqcwmFGEFg7F9tcpC2PYlZLLKHZCV4VnO75qhUgL4XpufKWlJAjTUcO_VCFiS-zVZxJDjY0z9BH7AblqOKrCgVXK3BUpWsQpK13boWPgAtNMxk-6yyNFoQ61zLARJslTEgvm8pf681YLVLCtkZfG318slswqygV36et-T-s7R9G2Lkdw",
        herbs: "https://lh3.googleusercontent.com/aida-public/AB6AXuBahZ1RL4D3GxykapxyZP_yfpKs5xlRrK9IuXutYq_7lf56-P7M9NbUck8oOMo_r-knpOWCJ0WaBVnoEfso_pn5rVSsFr1V5yph3zgXuZH-5d4idImm9QMn7iMpRMwktaOxc3cxid4YjW0XvmRs-zOCs5a4Axlo2vM6xn24Z6guL55KrdzIKb6HZHsWZrP05oGHcUte_ohFM7yiTOdhMrQ-XJRGz1IaKJY0vaIObp_UqCGAjmBNZ3UAl8gXgZ1fjsPp8EtPx3W3fA",
        pantry: "https://lh3.googleusercontent.com/aida-public/AB6AXuBcX0vIzhDxZzIYGEeCK7o3nbX04A9VYuQ3_BqEnUX6Gg8yfpfQC34Bi6dwz1dr6geW3L1JOrt09yMHsFhatIiBpVpBQrUhg4poas2JVOUrFxAJQC3h68Bi6Q9sEguwnj9K4MVeddw6WPNREnU561zBJQOVR3vL_p7eYsWbQj_0YZUA1Lj-JEpDF23jaUDXOpxXVMSlZfq-hDUVCQZXuokNmsnQuglUsMkjRTfNQHPw49ZLZA2WC-7wDzX13OyNo0XcNgSHNhr1iw"
    };
    return (
        <div className="grow pt-10 pb-16 px-6 flex items-center justify-center relative overflow-hidden">
            {/* Decorative Background Elements */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                animate={{ opacity: 0.1, scale: 1, rotate: 0 }}
                transition={{ duration: 1.5 }}
                className="absolute -top-12 -right-12 w-96 h-96 pointer-events-none"
            >
                <Image
                    width={150}
                    height={150}
                    className="w-full h-full object-cover rounded-full"
                    src={IMAGES.scales}
                    alt="Vintage scale"
                    referrerPolicy="no-referrer"
                />
            </motion.div>

            <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: 10 }}
                animate={{ opacity: 0.1, scale: 1, rotate: 0 }}
                transition={{ duration: 1.5, delay: 0.2 }}
                className="absolute -bottom-12 -left-12 w-80 h-80 pointer-events-none"
            >
                <Image
                    width={150}
                    height={150}
                    className="w-full h-full object-cover rounded-full"
                    src={IMAGES.herbs}
                    alt="Fresh herbs"
                    referrerPolicy="no-referrer"
                />
            </motion.div>

            {/* Hero Content Section */}
            <div className="max-w-5xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                {/* Visual Side: The Locked Pantry */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative group"
                >
                    <div className="aspect-[4/5] bg-surface-container-low rounded-xl overflow-hidden paper-shadow transform lg:-rotate-2 group-hover:rotate-0 transition-transform duration-700">
                        <Image
                            width={500}
                            height={600}
                            className="w-full h-full object-cover grayscale-[0.2] contrast-[1.05] brightness-[0.95]"
                            src={IMAGES.pantry}
                            alt="Vintage wooden pantry door with iron latch"
                            referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-primary/5 mix-blend-overlay"></div>
                    </div>

                    {/* Overlapping Decorative Tag */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, x: 20 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        transition={{ delay: 1, duration: 0.6 }}
                        className="absolute -bottom-8 -right-8 bg-white p-6 paper-shadow rounded-xl transform rotate-3 hidden md:block border border-outline-variant/30"
                    >
                        <span className="font-headline text-primary font-bold text-lg block mb-1">Accès Refusé.</span>
                        <p className="text-[10px] font-label font-bold uppercase tracking-[0.2em] text-slate-400">
                            PROPRIÉTÉ DU CHEF DE CUISINE
                        </p>
                    </motion.div>
                </motion.div>

                {/* Message Side */}
                <div className="flex flex-col space-y-10">
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6"
                    >
                        <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-secondary-container/10 text-on-secondary-container rounded-full text-[11px] font-bold font-label tracking-widest uppercase border border-outline-variant/20">
                            <Lock className="w-3.5 h-3.5" />
                            Archives Privées
                        </span>

                        <h1 className="text-6xl lg:text-8xl font-headline font-extrabold text-on-surface leading-[0.95] tracking-tight">
                            Garde-manger <br />
                            <span className="text-primary italic">Verrouillé.</span>
                        </h1>

                        <p className="text-xl text-on-surface-variant font-body leading-relaxed max-w-md">
                            Vous n'êtes pas autorisé à accéder à cette page. Ces secrets culinaires sont actuellement réservés à notre cercle d'initiés.
                        </p>
                    </motion.div>

                    {/* Bento Action Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <motion.a
                            whileHover={{ y: -4, scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="hero-gradient p-8 rounded-2xl text-on-primary group transition-all duration-300 shadow-xl shadow-primary/10 flex flex-col justify-between h-40"
                            href="/auth/sign-in"
                        >
                            <LogIn className="w-8 h-8 self-end opacity-40 group-hover:opacity-100 group-hover:text-white transition-opacity" />
                            <div>
                                <span className="block font-headline text-xl font-bold text-white">Connexion</span>
                                <span className="text-xs opacity-80 font-label">Entrez vos identifiants</span>
                            </div>
                        </motion.a>

                        <motion.a
                            whileHover={{ y: -4, scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="bg-surface-container-highest p-8 rounded-2xl text-on-surface group transition-all duration-300 hover:bg-surface-container-high flex flex-col justify-between h-40"
                            href="/"
                        >
                            <Home className="w-8 h-8 self-end text-on-surface/40 group-hover:text-on-surface transition-colors" />
                            <div>
                                <span className="block font-headline text-xl font-bold">Accueil</span>
                                <span className="text-xs text-on-surface-variant font-label">Retour au menu principal</span>
                            </div>
                        </motion.a>
                    </div>

                    {/* Help Link */}
                    {/* <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                        className="pt-6 border-t border-outline-variant/30"
                    >
                        <a className="inline-flex items-center gap-2 text-sm text-primary font-bold hover:gap-4 transition-all duration-300" href="#">
                            Demander l'accès au chef de cuisine
                            <ArrowRight className="w-4 h-4" />
                        </a>
                    </motion.div> */}
                </div>
            </div>
        </div>
    )
}