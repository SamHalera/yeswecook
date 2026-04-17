"use client"
import { Plus, Search, X } from "lucide-react";

export function PantrySearch() {
    return (
        <section className="bg-surface-container-low py-20 px-8">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-headline font-bold mb-4">What's in your pantry?</h2>
                    <p className="text-on-surface-variant">Search by keyword or add up to 4 ingredients to find the perfect match.</p>
                </div>
                <div className="bg-surface-container-lowest p-8 rounded-xl shadow-editorial">
                    <div className="flex flex-col md:flex-row gap-4 mb-8">
                        <div className="flex-1 relative">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-outline-variant" size={20} />
                            <input
                                className="w-full pl-12 pr-4 py-4 bg-surface-container-low border-b-2 border-transparent focus:border-primary focus:ring-0 transition-all rounded-t-lg outline-none"
                                placeholder="Search recipes, chefs, or keywords..."
                                type="text"
                            />
                        </div>
                        <button className="braise-gradient text-white px-10 py-4 rounded-lg font-bold shadow-editorial hover:scale-105 active:scale-95 transition-all">
                            Search
                        </button>
                    </div>
                    <div className="flex flex-wrap gap-3 mb-8">
                        {['Main Courses', 'Starters', 'Desserts', 'Aperitifs'].map((cat) => (
                            <button key={cat} className="px-6 py-2 rounded-full border border-outline-variant text-sm font-semibold hover:bg-primary hover:text-white transition-all">
                                {cat}
                            </button>
                        ))}
                    </div>
                    <div className="border-t border-outline-variant/20 pt-8">
                        <label className="block text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-4">Add Ingredients (Max 4)</label>
                        <div className="flex flex-wrap gap-2">
                            <span className="bg-secondary-fixed-dim text-on-secondary-fixed px-4 py-1.5 rounded-full text-sm flex items-center gap-2">
                                Tomato <X size={14} className="cursor-pointer" />
                            </span>
                            <span className="bg-secondary-fixed-dim text-on-secondary-fixed px-4 py-1.5 rounded-full text-sm flex items-center gap-2">
                                Basil <X size={14} className="cursor-pointer" />
                            </span>
                            <button className="border-2 border-dashed border-outline-variant px-4 py-1.5 rounded-full text-sm text-on-surface-variant hover:border-primary hover:text-primary transition-all flex items-center gap-1">
                                <Plus size={14} /> Add Ingredient
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}