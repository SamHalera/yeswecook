"use client"
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

// import { Recipe } from '../types';
import { RecipeItemProps } from "@/types/recipe"

import { RecipeCard } from './recipeCard';
import { cn } from '@/lib/utils';

interface RecipeSectionProps {
    chapter: string;
    title: string;
    recipes: RecipeItemProps[] | undefined;
    gridCols?: number;
    aspectRatio?: string
}

export const RecipeSection: React.FC<RecipeSectionProps> = ({ chapter, title, recipes, gridCols = 3 }) => {
    if (!recipes) return
    return (
        <section className="py-12">
            <div className="flex items-end justify-between mb-10">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <span className="text-primary font-bold uppercase tracking-[0.2em] text-xs font-label">
                        {chapter}
                    </span>
                    <h2 className="text-4xl font-headline font-extrabold text-on-surface mt-2">
                        {title}
                    </h2>
                </motion.div>
                <motion.a
                    href="#"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="text-primary font-bold flex items-center gap-1 hover:gap-2 transition-all"
                >
                    View all <ArrowRight className="w-5 h-5" />
                </motion.a>
            </div>

            <div className={cn(
                "grid gap-10",
                gridCols === 3 ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" : "grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
            )}>
                {recipes.map((recipe, i) => (
                    <motion.div
                        key={recipe.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                    >
                        <RecipeCard recipe={recipe} />
                    </motion.div>
                ))}
            </div>
        </section>
    );
};
