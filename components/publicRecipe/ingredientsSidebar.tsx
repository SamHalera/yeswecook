"use client"
import { motion, AnimatePresence } from 'motion/react';
import React, { SetStateAction, useState } from 'react';
import { RecipeIngredient } from "@/types/recipe";
import { Utensils } from 'lucide-react';
import { unityLabels } from '@/assets/recipes/recipes';
import { Unity } from '@/src/generated/prisma/enums';

export const IngredientsSidebar = ({ ingredients, comment }: { ingredients: RecipeIngredient[], comment: string | null | undefined }) => {

    return (
        <aside className="lg:col-span-4">
            <div className="bg-surface-container-low p-10 rounded-2xl sticky top-28">
                <h3 className="text-2xl font-black mb-10 flex items-center gap-4">
                    <span className="w-10 h-10 bg-secondary-container rounded-full flex items-center justify-center">
                        <Utensils className="text-on-secondary-container" size={20} />
                    </span>
                    Ingredients
                </h3>

                <ul className="space-y-6">
                    {ingredients.map((item, idx) => (
                        <motion.li
                            key={idx}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="flex items-start gap-4 group"
                        >
                            <span className="bg-secondary-fixed-dim text-on-secondary-fixed text-[10px] px-2.5 py-1 rounded-full font-bold mt-1 shrink-0 group-hover:bg-secondary-container transition-colors">
                                {item.quantity} {unityLabels[item.unity as Unity]}
                            </span>
                            <span className="text-on-surface leading-tight font-medium group-hover:text-primary transition-colors">
                                {item.ingredient.name}
                            </span>
                        </motion.li>
                    ))}
                </ul>
                {comment &&
                    <div className="mt-12 p-8 bg-surface-container-lowest rounded-xl border-l-4 border-primary shadow-sm">
                        <div className="text-sm italic text-on-surface-variant leading-relaxed font-medium" dangerouslySetInnerHTML={{ __html: comment }} />

                    </div>

                }
            </div>
        </aside>
    )
}