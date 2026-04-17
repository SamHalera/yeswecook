"use client"
import { motion } from 'motion/react';
import {
    Bell,
    UserCircle,
    Edit3,
    Search,
    Filter,
    Globe,
    Lock,
    BookOpen,
    Plus,
    MoreHorizontal
} from 'lucide-react';
import { useState, ReactNode } from 'react';
import { RecipeBase, RecipeItemProps } from '@/types/recipe';
import { MyRecipeCard } from './myRecipecard';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import HeaderComponent from './headerComponent';
import FiltersComponent from './filtersComponent';


export default function MyRecipesComponent({ currentUser, allRecipes }: { currentUser: UserProps, allRecipes: RecipeBase[] | undefined }) {

    const [activeTab, setActiveTab] = useState<'public' | 'private'>('public');
    const [searchQuery, setSearchQuery] = useState('');

    // const filteredRecipes = INITIAL_RECIPES.filter(recipe => {
    //     if (recipe.type === 'create') return true;
    //     const matchesTab = activeTab === 'public' ? recipe.isPublic : !recipe.isPublic;
    //     const matchesSearch = recipe.title.toLowerCase().includes(searchQuery.toLowerCase());
    //     return matchesTab && matchesSearch;
    // });

    return (
        <div className="min-h-screen bg-surface selection:bg-primary-fixed selection:text-on-primary-fixed">
            {/* Navigation */}


            <h1 className='px-8 font-headline text-4xl font-extrabold  mb-2 tracking-tight flex justify-center gap-4 text-primary m-auto'>Mon carnet de recettes <BookOpen size={35} /></h1>
            <div className="pt-32 pb-20 px-8 max-w-7xl mx-auto">
                {/* Header */}
                <HeaderComponent currentUser={currentUser} />

                {/* Filters */}
                <FiltersComponent activeTab={activeTab} setActiveTab={setActiveTab} searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {allRecipes?.map((recipe, index) => {

                        return (<MyRecipeCard key={recipe.id} recipe={recipe} index={index} />)
                    })}
                    <Link href={"/admin/recipes/new"} className="group relative w-full flex flex-col items-center justify-center border-2 border-dashed border-outline-variant/30 rounded-xl aspect-[4/5] hover:border-primary/50 transition-all bg-surface-container-low/50">
                        <div className="bg-primary-fixed text-on-primary-fixed p-6 rounded-full mb-4 group-hover:scale-110 transition-transform shadow-lg">
                            <Plus size={32} />
                        </div>
                        <span className="font-headline text-xl font-bold">Create New Recipe</span>
                        <p className="text-on-surface-variant font-label text-sm mt-2">Start a new culinary journey</p>
                    </Link>
                </div>
            </div>


        </div>
    );
}




