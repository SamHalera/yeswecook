"use client"
import React, { SetStateAction } from 'react';
import { motion } from 'motion/react';
import { Book, Clock, Heart, Share2, Users, Utensils } from 'lucide-react';
import { MetaItem } from './singleRecipeContent';
import { RecipeProps } from '@/types/recipe';
import Image from 'next/image';
import Link from 'next/link';
export const HeroPublicRecipePage = ({ isSaved, setIsSaved, recipe }: { isSaved: boolean; setIsSaved: React.Dispatch<SetStateAction<boolean>>; recipe: RecipeProps }) => {

    const authorProfileImage = recipe.author?.image ? recipe.author?.image : "https://lh3.googleusercontent.com/aida-public/AB6AXuDPkhifIfhBBuHivQRe_cFl4UIkZKQIOXWlgUW2xfSKGKJc4MSCGlN_iG1sOYfOCPE8iJ5KEhUFtd7YudCInOXwkUh4wZ_K34mKuPEy_egCdjJEPD1PGxNm6ODwviXYwFuB8c_6aSTM8Cvxy8P5mTE1U5em8su8DrumbxYmka6DxF0Ej3f7DSINuYVlfwsn1-b2j2_fiaBkWCUJiWKYFcCho_QR6HnD3HxFKl_WSvFJi96JGSTq5LfDbvWNse9BXiGnD6JSKXZmaw"
    return (
        <section className="relative grid grid-cols-1 lg:grid-cols-12 gap-0 mb-24 items-center">
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="lg:col-span-7 z-10 lg:-mr-16"
            >
                <div className="bg-surface-container-lowest/80 backdrop-blur-xl p-8 md:p-16 rounded-2xl editorial-shadow border border-outline-variant/10">
                    <span className="text-primary font-bold tracking-[0.2em] text-xs uppercase mb-6 block">
                        Seasonal Heritage Selection
                    </span>
                    <h1 className="text-5xl md:text-7xl font-black text-on-surface leading-[1.05] mb-8 tracking-tight">
                        {recipe.name}
                    </h1>
                    {recipe.shortDescription &&
                        <div className="short-description text-on-surface-variant text-lg md:text-xl leading-relaxed mb-10 font-medium w-full">
                            <div dangerouslySetInnerHTML={{ __html: recipe.shortDescription }} />
                        </div>

                    }

                    {/* Meta Info Row */}
                    <div className="flex flex-col gap-4 items-center justify-center py-8 border-y border-outline-variant/20">
                        <div className='flex gap-4 items-center justify-center'>

                            <MetaItem label="Temps de préparation" value={recipe.durationPrep} icon={<Clock size={14} />} />
                            <MetaItem label="Temps de cuisson" value={recipe.durationCook} icon={<Utensils size={14} />} />
                            {/* <MetaItem label="Difficulty" value="Intermediate" icon={<ChefHat size={14} />} /> */}
                            <MetaItem label="Nb de personnes" value={recipe.nbOfPersons} icon={<Users size={14} />} />
                        </div>
                        <div className='flex flex-col items-center justify-center gap-2 cursor-pointer'>
                            <div
                                className="w-12 h-12 rounded-full overflow-hidden bg-slate-200 ml-2 border border-slate-200 cursor-pointer hover:ring-2 hover:ring-primary/20 transition-all">
                                <Image
                                    width={48}
                                    height={48}
                                    alt="User profile avatar"
                                    src={authorProfileImage} />
                            </div>

                            <Link href={`/community/${recipe.author?.username}`} className='text-primary font-semibold'>by {recipe.author?.name}</Link>
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-4 mt-10">
                        <button
                            onClick={() => setIsSaved(!isSaved)}
                            className={`px-8 py-4 rounded-xl font-bold flex items-center gap-3 transition-all duration-300 ${isSaved
                                ? 'bg-green-600 text-white shadow-lg shadow-green-200'
                                : 'bg-primary text-on-primary shadow-lg shadow-primary/20 hover:scale-[0.98]'
                                }`}
                        >
                            {isSaved ? <Heart size={20} fill="currentColor" /> : <Book size={20} />}
                            <span>{isSaved ? 'Saved to My Book' : 'Save to My Book'}</span>
                        </button>
                        <button className="bg-surface-container-high text-on-surface px-8 py-4 rounded-xl font-bold flex items-center gap-3 hover:bg-surface-container-highest transition-all active:scale-95">
                            <Share2 size={20} />
                            <span>Share</span>
                        </button>
                    </div>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="lg:col-span-5 h-[500px] lg:h-[750px] w-full"
            >
                <img
                    src={recipe.cover?.source}
                    alt="Roasted Lamb"
                    className="w-full h-full object-cover rounded-2xl editorial-shadow"
                    referrerPolicy="no-referrer"
                />
            </motion.div>
        </section>
    )
}