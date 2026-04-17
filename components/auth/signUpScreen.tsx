"use client"
import { motion } from 'motion/react';
import { LogIn } from 'lucide-react';
import { SignUpForm } from './signUpForm';

interface AuthScreenProps {
    onLogin: () => void;
}

export default function SignUpScreen() {
    return (
        <main className="min-h-screen flex flex-col md:flex-row overflow-hidden">
            {/* Left Section: Editorial Imagery */}
            <section className="relative hidden md:flex md:w-1/2 lg:w-3/5 bg-surface-dim overflow-hidden">
                <motion.div
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="absolute inset-0 z-0"
                >
                    <img
                        className="w-full h-full object-cover"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBuSn4c3Cydh1STw0JsrlwfmQjL49gGZsZtoZsTWL42p_k87UmMH8zTXO0WLGjf4XRpyo5ir9n7ZL2TQlysAc7BLb-1-2I0vL0W_s6mqStJ70vH9B4TG_dr0LPeLb6MMKxncTPCB2tSFrA1WjGHL02pAERSoG6BGya9F1xpMsFZqHUoaBJByuILa-BvjIN5pf0T0BLUdw_NgDqaGtz_3acsvp7mFqqigHd3r7ropJfNooUA9NCNTknZb62fTIYe4jzDJdJEbkLFqg"
                        alt="Artisan roasted vegetables"
                        referrerPolicy="no-referrer"
                    />
                </motion.div>

                {/* Brand Anchor Overlay */}
                <div className="relative z-10 flex flex-col justify-between p-12 w-full bg-gradient-to-t from-on-surface/60 to-transparent">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center space-x-2"
                    >
                        <span className="text-white font-headline text-2xl font-bold tracking-tight">YesWeCook</span>
                    </motion.div>

                    <div className="max-w-xl">
                        <motion.h1
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                            className="font-headline text-5xl lg:text-7xl text-white font-bold leading-tight mb-6"
                        >
                            The Living <span className="italic font-light">Cookbook</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="text-white/90 text-lg lg:text-xl font-light leading-relaxed mb-8 max-w-md"
                        >
                            Join our community of culinary artisans. Curate your digital library, share your heritage, and discover recipes that feel like home.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7 }}
                            className="flex space-x-6 items-center"
                        >
                            <div className="flex -space-x-4">
                                {[
                                    "https://lh3.googleusercontent.com/aida-public/AB6AXuD-vhD7hz7KF-5KZwFrFkgBayfcVSWDW3vmZo2Oq1aUk-7_gbvEzK0MAiQ8m-4ZK2STgL-Sag0qTCKG8eK8-PnoNk82AuRQisVJCaJ5ekApA2RAStcYI9qerZ_690dkx2S0o1un_7uRsPGKKeZ-nOAWbCR8KhTxtiMCpeXMo0HTUUifGpyZzgrclvu8aWa2DJ6rGONVQM6zbWRqEGsyRTdlVBfoTvpPfm8n-bY1sYIRNePAJ9J_KI31yZgZ9M3uAvyTPjp6FolClA",
                                    "https://lh3.googleusercontent.com/aida-public/AB6AXuD11JpuN2CdkilGbYBO8fx0WqK7AQlEPeC811q3x8RDB6MvUekM1z6smq7M_R4e5GvKA4xTrvnRS91tNSuUiSpOxc3R2xAVLA3DaaA1u3cCAHyPvnpiWNPX5zVZExQvmkRWFefi0zWTn37GGv4GwIrjFoJH7_FSTyY4Q7KcvM2zHD_qL1GZ93Mm5GXdWorBVBoFyza8vmNCKJ3r66EioqfNqusj1YcdALW3oQlJWBhhkL3DnV6_dhFMiGU_E-1QvMgq0bF0Ar6gkA",
                                    "https://lh3.googleusercontent.com/aida-public/AB6AXuB8VTWRdMAT2FjD7j_nE-RGCVNnEOi9MSh3kjdBv2b74FtaqbSa70dfONg_MGeucFU-hzAkwziF6wteh_dOkdbGvImcv4btrgLSxPF2I_PO5dq_PU8FlKtfs16eEbeAvYY4Fp9lLEOXb0M7r2IXiK7b9O0MMye53q8-bxIm9x_rdMHlPYnRRNmWvu6SpYZKNiDuqj4G5QZBc04pzxIwvDJ0of3xLUfylsVMOuIuK-iIrLw7KRq3lZ7WOZ-28NeJ4TWeuGMZgL9eDQ"
                                ].map((src, i) => (
                                    <div key={i} className="w-12 h-12 rounded-full border-2 border-white overflow-hidden">
                                        <img className="w-full h-full object-cover" src={src} alt="Chef" referrerPolicy="no-referrer" />
                                    </div>
                                ))}
                            </div>
                            <span className="text-white/80 font-label text-sm uppercase tracking-widest">+12k Chefs cooking today</span>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Right Section: Authentication Form */}
            <section className="flex-1 flex flex-col justify-center items-center px-6 py-12 md:px-16 lg:px-24 bg-surface">
                <div className="w-full max-w-md space-y-10">
                    {/* Mobile Header */}
                    <div className="md:hidden flex justify-center mb-8">
                        <span className="text-primary font-headline text-3xl font-bold tracking-tight">YesWeCook</span>
                    </div>

                    <div className="space-y-2">
                        <span className="font-label text-primary text-xs font-bold uppercase tracking-[0.2em]">Welcome Back</span>
                        <h2 className="font-headline text-4xl text-on-surface font-bold">Sign Up to Create</h2>
                    </div>

                    {/* Form */}
                    {/* <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); onLogin(); }}>
                        <div className="space-y-4">
                            <div className="group">
                                <label className="block font-label text-xs font-semibold text-on-surface/60 uppercase tracking-wider mb-2 ml-1" htmlFor="email">Email Address</label>
                                <input
                                    className="w-full bg-surface-container-low border-none border-b-2 border-transparent focus:border-primary focus:ring-0 rounded-lg p-4 text-on-surface transition-all placeholder:text-on-surface/30"
                                    id="email"
                                    type="email"
                                    placeholder="chef@heritagehearth.com"
                                    required
                                />
                            </div>
                            <div className="group">
                                <div className="flex justify-between items-center mb-2 px-1">
                                    <label className="block font-label text-xs font-semibold text-on-surface/60 uppercase tracking-wider" htmlFor="password">Password</label>
                                    <a className="text-primary font-label text-xs font-bold hover:text-primary-container transition-colors" href="#">Forgot Password?</a>
                                </div>
                                <input
                                    className="w-full bg-surface-container-low border-none border-b-2 border-transparent focus:border-primary focus:ring-0 rounded-lg p-4 text-on-surface transition-all placeholder:text-on-surface/30"
                                    id="password"
                                    type="password"
                                    placeholder="••••••••"
                                    required
                                />
                            </div>
                        </div>

                        <button
                            className="w-full braise-gradient text-white py-4 px-6 rounded-lg font-headline font-bold text-lg editorial-shadow transform active:scale-[0.98] transition-all cursor-pointer"
                            type="submit"
                        >
                            Begin Cooking
                        </button>

                        <div className="relative py-4">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-on-surface/10"></div>
                            </div>
                            <div className="relative flex justify-center">
                                <span className="bg-surface px-4 font-label text-xs text-on-surface/40 uppercase tracking-widest">Or continue with</span>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <button className="flex items-center justify-center space-x-3 py-3 px-4 rounded-lg bg-surface-container-lowest border border-on-surface/5 hover:bg-surface-container-high transition-colors editorial-shadow cursor-pointer" type="button">
                                <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" className="w-5 h-5" alt="Google" />
                                <span className="font-label text-sm font-semibold">Google</span>
                            </button>
                            <button className="flex items-center justify-center space-x-3 py-3 px-4 rounded-lg bg-on-surface text-white hover:bg-on-surface/90 transition-colors editorial-shadow cursor-pointer" type="button">
                                <LogIn className="w-5 h-5" />
                                <span className="font-label text-sm font-semibold">Apple</span>
                            </button>
                        </div>
                    </form> */}
                    <SignUpForm />

                    <div className="pt-8 text-center">
                        <p className="text-on-surface/60 font-body">
                            Already have an account?
                            <a className="text-primary font-bold ml-1 hover:underline underline-offset-4" href="/auth/sign-in">Sign in</a>
                        </p>
                    </div>

                    <footer className="mt-20 w-full max-w-md">
                        <div className="flex justify-between items-center text-on-surface/40 font-label text-[10px] uppercase tracking-[0.2em]">
                            <span>© 2024 YesWeCook</span>
                            <div className="flex space-x-4">
                                <a className="hover:text-primary transition-colors" href="#">Privacy</a>
                                <a className="hover:text-primary transition-colors" href="#">Terms</a>
                            </div>
                        </div>
                    </footer>
                </div>
            </section>

            {/* Floating Accent */}
            <div className="hidden md:block fixed bottom-8 right-8 z-50">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ delay: 1 }}
                    className="bg-surface-container-lowest/80 backdrop-blur-md p-4 rounded-xl editorial-shadow flex items-center space-x-4"
                >
                    <div className="w-10 h-10 braise-gradient rounded-lg flex items-center justify-center text-white">
                        <LogIn className="w-5 h-5" />
                    </div>
                    <div>
                        <p className="font-headline text-xs font-bold text-on-surface">Daily Inspiration</p>
                        <p className="font-label text-[10px] text-on-surface/60">Seasonal Saffron Risotto</p>
                    </div>
                </motion.div>
            </div>
        </main>
    );
}
