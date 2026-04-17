import { ChefHat } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
export default function HeadingComponent() {
    return (
        <header className="relative max-w-3xl">
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                <span className="text-primary font-bold tracking-[0.3em] uppercase text-[10px]">The Digital Gourmand</span>
                <h1 className="text-6xl md:text-7xl font-headline font-extrabold text-on-surface mt-4 mb-8 tracking-tighter leading-[0.9]">
                    Your Kitchen Identity
                </h1>
                <p className="text-on-surface-variant text-xl leading-relaxed font-medium">
                    Customize your culinary profile and dietary preferences to curate a cookbook that feels like home.
                </p>
            </motion.div>

            {/* Asymmetric Illustration */}
            <div className="absolute top-0 -right-40 hidden xl:block w-72 h-72 opacity-5 pointer-events-none">
                <ChefHat className="w-full h-full text-on-surface" />
            </div>
        </header>
    )
}