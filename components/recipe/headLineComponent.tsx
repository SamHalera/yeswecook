"use client"
import { RecipeProps } from '@/types/recipe';
import { motion } from 'motion/react';
export const HeadLineComponent = ({ isEditMode, recipe }: { isEditMode: boolean; recipe?: RecipeProps | undefined }) => {
    return (
        <motion.header
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 relative"
        >
            <span className="text-sm uppercase tracking-[0.2em] text-primary font-semibold mb-2 block">
                {isEditMode ? "Modification" : "Nouvelle Création"}
            </span>
            <h1 className="text-5xl md:text-6xl font-extrabold text-on-surface tracking-tighter mb-4 font-headline">
                {isEditMode ? recipe?.name : " L'Héritage Culinaire"}
            </h1>
            <p className="text-on-surface-variant max-w-2xl text-lg leading-relaxed">
                Partagez votre savoir-faire. Transformez vos secrets de cuisine en une page d'exception pour la communauté.
            </p>
        </motion.header>
    )
}