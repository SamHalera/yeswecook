"use client"
import { motion } from 'motion/react';
export function RecipeSection() {
    return (
        <section className="max-w-7xl mx-auto px-8 py-24">
            <div className="flex justify-between items-end mb-12">
                <div>
                    <span className="text-xs uppercase tracking-[0.15em] text-primary font-bold mb-2 block">Platform Recipes</span>
                    <h2 className="text-4xl font-headline font-bold">From the Hearth</h2>
                </div>
                <a className="text-primary font-bold border-b-2 border-primary/20 hover:border-primary pb-1 transition-all" href="/explore-recipes">View All Recipes</a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                <motion.div
                    whileHover={{ y: -5 }}
                    className="md:col-span-8 group cursor-pointer"
                >
                    <div className="relative aspect-[16/9] rounded-xl overflow-hidden mb-4 shadow-editorial">
                        <img
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDXuCE87W99uzmWJ5KEKtL47qfJoT_kL3SVCA9PC18XDU6etaRamHzs9mjiy7IFrhYB1yTvAPycKtN7eN84lgctoYEEAMNTiWfWmrFaN2cwgQfuxJ26UfoldxZNu3BDfIw4U2enlXOEU7AkwCb83DUjyS_4ZELqR10551Bh_AWXBBg524rorHOzTkS5k6unTbEKcUUyb_org9plZgwdvZj0cePtPmPo168HcEqTT9R5Q_JivHxjHuscQoeRwiyiAAiBbl_0JzqstA"
                            alt="Halloumi Salad"
                            referrerPolicy="no-referrer"
                        />
                        <div className="absolute top-4 left-4">
                            <span className="bg-white/90 backdrop-blur-md px-4 py-1 rounded-full text-xs font-bold uppercase">Must Try</span>
                        </div>
                    </div>
                    <h3 className="text-2xl font-headline font-bold mb-2 group-hover:text-primary transition-colors">Warm Halloumi & Roasted Harvest Salad</h3>
                    <p className="text-on-surface-variant line-clamp-2">The perfect balance of textures and warmth for any weeknight dinner.</p>
                </motion.div>

                <div className="md:col-span-4 flex flex-col gap-8">
                    {[
                        {
                            title: "Citrus Cloud Lemon Tart",
                            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBDWQg67PLDyURDdtJuwBADXFDRqoR2r4RU_o6tnuZcmKXLD_vNF-eH9N0aus41lddyupvj08KIqN2kB8sfycGjsipmIczOt4XNfAcJ3kDXSvaV7ERoJ5P7hMxemfJdJgcJkQeD1tpxERrrhkHXmJDhtx4H-sKdxjQfAbPUm7Jy4LDwzl30PdMzXtl8kh-fYR1UI2LOk8_frGm0_LkkhcfOUyeqCCH5Lez_I-q4cT45O4NXaU6pI9-9TzYqa3aWqbuGhDj_-l1hFg"
                        },
                        {
                            title: "Wild Mushroom Sage Ravioli",
                            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBEnBEtBYjNnpa-LGSy-VJsUH0ZVrLhbb0jPd-zNNsEV78f_LURS0OeaaCsv0ZENV9oRVMCFR6zBULEmebKZKcrg8DoV5exG1WvUtTkRV8vfjG-Xvwyo_2zVYjyUzKe_ajRFG7dfa3T3eVO6sXAvIo6ujEK0yo1I4Ye3v64m7tvLcnSOWQElQKJSgKrOZQOL0RBs7zAoSjSMH0HUsc8yNGJeWtBfoiVMs45dnRfYlEssYlH9ar9QRVfQMeNqDe4K0-kkIn0svvhkg"
                        }
                    ].map((recipe, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ y: -5 }}
                            className="group cursor-pointer"
                        >
                            <div className="aspect-[4/3] rounded-xl overflow-hidden mb-3 shadow-editorial">
                                <img
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    src={recipe.img}
                                    alt={recipe.title}
                                    referrerPolicy="no-referrer"
                                />
                            </div>
                            <h4 className="font-headline font-bold group-hover:text-primary transition-colors">{recipe.title}</h4>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}