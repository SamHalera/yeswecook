"use client"
import { motion, AnimatePresence } from 'motion/react';
import { RecipeProps } from "@/types/recipe";

export const InstructionsRecipe = ({ recipe }: { recipe: RecipeProps }) => {
    return (
        <div className="lg:col-span-8">
            <h3 className="text-4xl font-black mb-16 tracking-tight">Cooking Instructions</h3>

            <div className="space-y-24">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="flex flex-col md:flex-row gap-8 group"
                >
                    <div className='recipe-instructions' dangerouslySetInnerHTML={{ __html: recipe.instructions }} />
                </motion.div>
            </div>
        </div>
    )
}
// {STEPS.map((step, idx) => (
//     <motion.div
//         key={step.id}
//         initial={{ opacity: 0, y: 30 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true, margin: "-100px" }}
//         className="flex flex-col md:flex-row gap-8 group"
//     >
//         <span className="text-6xl font-black text-outline-variant/30 group-hover:text-primary/40 transition-colors duration-500 shrink-0 tabular-nums">
//             {step.id}
//         </span>
//         <div className="flex-1">
//             <h4 className="text-2xl font-black mb-4 tracking-tight group-hover:text-primary transition-colors">
//                 {step.title}
//             </h4>
//             <p className="text-on-surface-variant text-lg leading-relaxed mb-8 font-medium">
//                 {step.description}
//             </p>

//             {step.image && (
//                 <div className="overflow-hidden rounded-2xl editorial-shadow">
//                     <img
//                         src={step.image}
//                         alt={step.title}
//                         className="w-full h-80 object-cover hover:scale-105 transition-transform duration-700"
//                         referrerPolicy="no-referrer"
//                     />
//                 </div>
//             )}

//             {step.images && (
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                     {step.images.map((img, i) => (
//                         <div key={i} className="overflow-hidden rounded-2xl editorial-shadow">
//                             <img
//                                 src={img}
//                                 alt={`${step.title} detail ${i + 1}`}
//                                 className="w-full h-64 object-cover hover:scale-105 transition-transform duration-700"
//                                 referrerPolicy="no-referrer"
//                             />
//                         </div>
//                     ))}
//                 </div>
//             )}
//         </div>
//     </motion.div>
// ))}