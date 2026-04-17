import React from 'react';
import { Bookmark } from 'lucide-react';
import { motion } from 'motion/react';
// import { Recipe } from '@/types';
import { RecipeItemProps } from "@/types/recipe"
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';

interface RecipeCardProps {
    recipe: RecipeItemProps;
}

export const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => {

    const recipeCover = recipe.cover
    const path = `${recipe.category.toLowerCase()}/${recipe.slug}`
    return (
        <motion.div
            whileHover={{ y: -8 }}
            className="group cursor-pointer"
        >
            <Link href={path}>
                <div className={cn(
                    "relative rounded-lg overflow-hidden mb-5 bg-surface-container shadow-lg aspect-[4/5]",
                    // recipe.aspectRatio === '16/9' ? "aspect-[16/9]" :
                    //     recipe.aspectRatio === '4/5' ? "aspect-[4/5]" : "aspect-square"
                )}>
                    {recipeCover && <Image
                        alt={recipe.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        src={recipeCover?.source}
                        referrerPolicy="no-referrer"
                        width={400}
                        height={400}
                    />}

                    <button className="absolute top-4 right-4 bg-white/90 p-2 rounded-full shadow-md hover:bg-white transition-colors">
                        <Bookmark className="w-5 h-5 text-primary" />
                    </button>
                </div>

                <div className="flex items-center gap-4 mb-2">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-primary font-label">
                        By {recipe.author.name}
                    </span>
                    {recipe.durationCook && <span className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant bg-[#E6F3FB] px-2 py-0.5 rounded font-label">
                        {recipe.durationCook}
                    </span>}

                </div>

                <h3 className="text-xl font-headline font-bold text-on-surface leading-snug group-hover:text-primary transition-colors">
                    {recipe.name}
                </h3>
            </Link>
        </motion.div>
    );
};
