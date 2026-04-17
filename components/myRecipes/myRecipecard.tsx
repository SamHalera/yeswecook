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
import Link from 'next/link';
import { useRouter } from 'next/navigation';
export const MyRecipeCard = ({ recipe, index }: { recipe: RecipeBase, index: number }) => {
    const recipeCover = recipe.cover
    const pathToRecipePage = `/${recipe.category.toLowerCase()}/${recipe.slug}`
    const router = useRouter()
    return (
        <motion.div

            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className='relative overflow-hidden'
        >

            <Link href={pathToRecipePage} className="group cursor-pointer">
                <div className="relative mb-4 overflow-hidden rounded-xl bg-surface-container-low aspect-[4/5]">
                    <img
                        src={recipeCover?.source}
                        alt={recipe.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        referrerPolicy="no-referrer"
                    />
                    <div className={`${recipe.isPublic ? 'bg-white/90' : 'bg-slate-900/80'} absolute top-4 left-4 backdrop-blur px-3 py-1 rounded-full flex items-center space-x-1 shadow-sm bg-white/90`}>

                        {recipe.isPublic ? (
                            <Globe size={14} className="text-green-600" />
                        ) : (
                            <Lock size={14} className="text-white" fill="currentColor" />
                        )}
                        <span className={`text-[10px] font-bold font-label uppercase tracking-widest ${recipe.isPublic ? 'text-on-surface' : 'text-white'
                            }`}>
                            {recipe.isPublic ? 'Public' : 'Private'}
                        </span>

                    </div>

                </div>
                <div className="px-1">
                    <div className="flex justify-between items-start mb-2">
                        <h3 className="font-headline text-2xl font-bold leading-tight group-hover:text-primary transition-colors">
                            {recipe.name}
                        </h3>
                        <button className=" text-on-surface-variant hover:text-primary transition-colors">
                            <MoreHorizontal size={20} />
                        </button>
                    </div>
                    {/* <div className="flex flex-wrap gap-2">
                                        {recipe.tags.map(tag => (
                                            <span key={tag} className="ingredient-chip">{tag}</span>
                                        ))}
                                    </div> */}
                </div>
            </Link>
            <div className='flex gap-4 justify-between absolute bottom-[54px] right-0 rounded-b-xl bg-primary-container/60 w-full p-4'>

                <button onClick={() => {
                    router.push(`/admin/recipes/${recipe.slug}/edit`)

                }} className="flex gap-4 edit-target cursor-pointer bg-surface-container-low text-primary p-3 rounded-xl shadow-xl hover:bg-primary-container hover:text-white transition-colors">
                    <Edit3 size={20} /> edit
                </button>
                <button onClick={() => {
                    router.push(pathToRecipePage)
                }} className="flex gap-4 edit-target cursor-pointer bg-surface-container-low text-primary p-3 rounded-xl shadow-xl hover:bg-primary-container transition-colors hover:text-white">
                    <Globe size={20} /> public view
                </button>
            </div>


        </motion.div>
    )
}