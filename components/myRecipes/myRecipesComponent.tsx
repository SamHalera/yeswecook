"use client"
import {
    BookOpen,
    Plus,
} from 'lucide-react';
import { useState } from 'react';
import { RecipeBase } from '@/types/recipe';
import { MyRecipeCard } from './myRecipecard';
import Link from 'next/link';
import HeaderComponent from './headerComponent';
import FiltersComponent from './filtersComponent';


export default function MyRecipesComponent({ userPage, allRecipes, isOwner }: { userPage: UserProps, allRecipes: RecipeBase[] | undefined | null, isOwner: boolean }) {

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
                <HeaderComponent userPage={userPage} isOwner={isOwner} />

                {/* Filters */}
                {isOwner &&

                    < FiltersComponent activeTab={activeTab} setActiveTab={setActiveTab} searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
                }

                {/* Grid */}
                <div className="flex gap-6">
                    {allRecipes?.length === 0 ?

                        <div className='w-full my-9'>
                            <h2 className='text-3xl text-primary text-center'>{isOwner ? "Vous n'avez pas " : `${userPage?.username.toUpperCase()} n'a pas `} encore créé des recettes</h2>
                        </div>
                        :
                        allRecipes?.map((recipe, index) => {

                            return (<MyRecipeCard key={recipe.id} recipe={recipe} index={index} />)
                        })
                    }

                </div>
                {isOwner &&


                    <Link href={"/admin/recipes/new"} className="group relative w-60 flex flex-col mx-auto my-10 items-center justify-center border-2 border-dashed border-outline-variant/30 rounded-xl aspect-[4/5] hover:border-primary/50 transition-all bg-surface-container-low/50">
                        <div className="bg-primary-fixed text-on-primary-fixed p-6 rounded-full mb-4 group-hover:scale-110 transition-transform shadow-lg">
                            <Plus size={32} />
                        </div>
                        <span className="font-headline text-xl font-bold">Create New Recipe</span>
                        <p className="text-on-surface-variant font-label text-sm mt-2">Start a new culinary journey</p>
                    </Link>
                }
            </div>


        </div>
    );
}




