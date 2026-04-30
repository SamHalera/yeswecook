"use client"
import React, { SetStateAction } from 'react';
import { Search, X, Plus, Settings2 } from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';
import { SearchBarComponent } from '../publicRecipe/searchBarComponent';
import { SearchComponent } from './searchComponent';
import { useDebouncedCallback } from 'use-debounce';


export const Hero = ({ categories, activeCategory, setActiveCategory, setSearchValue }: {
    categories: string[],
    activeCategory: string,
    setActiveCategory: React.Dispatch<SetStateAction<string>>,
    setSearchValue: React.Dispatch<SetStateAction<string>>
}) => {

    const handleSearch = useDebouncedCallback((term) => {
        console.log(`Searching... ${term}`);
        setSearchValue(term)
    }, 300)
    return (
        <section className="relative px-8 py-10 max-w-7xl mx-auto overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-7 z-10">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-block px-3 py-1 bg-secondary-container text-on-secondary-container text-xs font-bold tracking-widest uppercase rounded-full mb-6 font-label"
                    >
                        Heritage Hearth
                    </motion.span>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-6xl md:text-7xl font-headline font-black text-on-surface leading-tight mb-8"
                    >
                        Discover Your Next <span className="text-primary">Masterpiece</span>
                    </motion.h1>

                    <SearchComponent handleSearch={handleSearch} activeCategory={activeCategory} setActiveCategory={setActiveCategory} categories={categories} />
                </div>

                <motion.div
                    initial={{ opacity: 0, rotate: 5, scale: 0.9 }}
                    animate={{ opacity: 1, rotate: 2, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="lg:col-span-5 relative"
                >
                    <div className="aspect-[4/5] rounded-xl overflow-hidden shadow-2xl hover:rotate-0 transition-transform duration-500">
                        <img
                            alt="Chef preparing artisanal pasta"
                            className="w-full h-full object-cover"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCHHa9v172zEvBLyKwMCOU1yshvLG_O1wOGi4xEtY3esX-xalYRmGB31fDSwXuEOg10wF36IsKFiQ89xNwRfYExvby4Er0toeMcuQArEsEbJaF6y_iOW0-wHFIU1X3S-J7vUt31f5Wr2E2PPWzGLByDEj5zEC0tq8q6qerdbGpzcL7Dv-zmVbGwTQhYveipzIdPNKhz4IS0uBGeolBaNwgH6RJHRDqas5PJ4bfW7yaJcB_N9t1VUBFOCp1s0DbmH9yhUPevXMp6hA"
                            referrerPolicy="no-referrer"
                        />
                    </div>
                    <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-secondary/10 rounded-full blur-3xl -z-10"></div>
                </motion.div>
            </div>
        </section>
    );
};
