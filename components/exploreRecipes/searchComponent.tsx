import { Search, X, Plus, Settings2 } from 'lucide-react';
import { motion } from 'motion/react';
import React, { SetStateAction } from 'react';
import { cn } from '@/lib/utils';

export const SearchComponent = ({ activeCategory, setActiveCategory, categories, handleSearch }: {
    categories: string[],
    activeCategory: string,
    setActiveCategory: React.Dispatch<SetStateAction<string>>,
    handleSearch: (value: string) => void
}) => {
    const [ingredients, setIngredients] = React.useState(['Thyme', 'Sea Salt']);
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-surface-container-lowest p-8 rounded-xl shadow-lg shadow-on-surface/5 space-y-6"
        >
            <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-outline w-5 h-5" />
                <input onChange={(e) => {
                    handleSearch(e.target.value)
                }}
                    className="w-full pl-12 pr-4 py-4 bg-surface-container-low border-b-2 border-outline-variant/20 focus:border-primary outline-none transition-all font-body text-lg"
                    placeholder="Search by recipe, chef or mood..."
                    type="text"
                />
            </div>

            {/* <div className="flex flex-wrap gap-3">
                <span className="text-xs font-bold uppercase tracking-wider text-outline mb-1 block w-full font-label">
                    Ingredient-based search (Up to 4)
                </span>
                <div className="flex flex-wrap gap-2">
                    {ingredients.map((ing) => (
                        <div key={ing} className="bg-secondary-fixed-dim text-on-secondary-fixed px-4 py-1.5 rounded-full flex items-center gap-2 text-sm font-semibold">
                            {ing} <X className="w-3 h-3 cursor-pointer" onClick={() => setIngredients(prev => prev.filter(i => i !== ing))} />
                        </div>
                    ))}
                    <button className="border border-dashed border-outline-variant px-4 py-1.5 rounded-full text-sm text-outline hover:border-primary hover:text-primary transition-all flex items-center gap-1">
                        <Plus className="w-4 h-4" /> Add ingredient
                    </button>
                </div>
            </div> */}

            <div className="pt-4 flex flex-col md:flex-row gap-4">
                <button className="bg-primary text-on-primary px-10 py-4 rounded-lg font-bold text-lg hover:bg-primary-container transition-all active:scale-95">
                    Search Recipes
                </button>
                {/* <button className="bg-surface-container-high text-on-surface px-6 py-4 rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-surface-container-highest transition-all">
                    <Settings2 className="w-5 h-5" /> Advanced Filters
                </button> */}
            </div>

            <div className="pt-8 overflow-x-auto no-scrollbar">
                <div className="flex items-center gap-3 min-w-max pb-2">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={cn(
                                "px-6 py-2 rounded-full font-headline font-bold text-sm transition-all active:scale-95",
                                activeCategory === cat
                                    ? "bg-primary text-on-primary shadow-sm"
                                    : "bg-surface-container-high text-on-surface hover:bg-surface-container-highest"
                            )}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>
        </motion.div>
    )
}