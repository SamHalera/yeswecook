"use client"
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */


import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
    PlusCircle,
    Book,
    Share2,
    Utensils,
    Clock,
    ChefHat,
    Users,
    ChevronRight,
    Heart,
    Plus,
    PenIcon
} from 'lucide-react';
import Link from 'next/link';
import { RecipeProps } from '@/types/recipe';

const IMAGES = {
    hero: "https://lh3.googleusercontent.com/aida-public/AB6AXuD35FS3fMAGpUthsrazIOaa0__jd8qt0qgyXG5iKUvteUE8IZxHBf-Nj-Q9QHCwFqw50oYfvwFKvnGI8Vb5vUOAg20OvRoaPT6y1Jd42gOOF0J2v9zuDgror05ov2RuCizplLAhMECfh0rglGWFTf7UL0TgaEHJa_Pm9xLEC2A4700MDPCLBU_tNaDT7ao543YCvrGoMrxT326ZVYLsN5mHEi2Sk9itOWFUFmoQ6te1BgVZ62rGwvtq2Jl5zv2-3nqWasVfNrIIrA",
    step1: "https://lh3.googleusercontent.com/aida-public/AB6AXuAdJkm3mOFsNs1z-uRZFUS-ajHOXBiOAkuchv48VPnSzBjudQ8i4blB6Y-HlREjIUh7AIxZrt50_AfPymjkG6TNbTfTw74bAz83l3hb0f1cuHtagaOHoyyh3RuxYmFCGXelOpdY8eqULjq6DtveOMrv7Wn6CBY43T0tnvTYjLt_hPIbhfDUrviAxoca4ZixH2vIBZ9xosBlbO7s7CqplizfTQ2qtEID8y8PJ1URuzrRdJjfxEbrrZttgDbJMhJRHIoKUWck94-9lQ",
    step3a: "https://lh3.googleusercontent.com/aida-public/AB6AXuAuh8jdV5r28NCOoECIZ-5VTRJhNxvPwpKlhJtftYUot3hqn3ehqGrTsT5XjjuZTWD5qU8owWI0nCyFrDxQVLoU5fDBh1PbikqFs0A6rWLEoQ_e4y9uQNU8mW6WVDUgsw8aJ2zD2OnhFTq_eZAmWmuSnp1mxgMZ1O0CQNS8GbeNJ7xsmV0fGbzmncHqB3yl0r6Mtt30LScoTxguAMVKNhI_YlkRnhKQx9JBQ12sPER5Jw_c0f2V9-T87jceG1sgC8ofhRXA-hmtlg",
    step3b: "https://lh3.googleusercontent.com/aida-public/AB6AXuDKCFAksFZEM77pcVfIVdB4kxBy4S86V6KNZaswfh_3nyeBvZb9roZEiL3wmHjCQd4_hbKX0yFgKGFCMQj2aZtNoU1oPj-6UAOAuH0HVtFkveAH_FbTBUXfpeewmuaDrr-YxsQEIqsNsP96EUrxb2Z9ack5qmU_loVGcOwa9d3w4UwvK5bjA7yaL92QQZA9t9TRvPshByTat5q4j_zMFhgRdQ-ABjAgsl6HTxTIKEByGSigqxuV4F_QnXKV4oEkom6VGIOypoYLTQ",
    profile: "https://lh3.googleusercontent.com/aida-public/AB6AXuAWESeGFgM4zDqg3VwA8y2zyeFZiFu-j4GR2r9a_850g4csfyehdkt60iq5Br-a3rQdsHiIbkeOOtitsDteVKem4iZm_iJrlvcRXrgg9jzp4UnAbx-tvm84fyWzANFOsbM7mDxffMlcbC_kGIXZEyKyF060J3hK2-HIZve0gaNWn2Q_UwX85ybcJGR2NhGQZCTuoHqFGBNYyguCCP2vnJD796VEzVFqTpNQAYBVQZaZCozQs3Q_g2-8yUxu6aMNO_-MrvM_bw1nPg"
};

const INGREDIENTS = [
    { amount: "2kg", name: "Bone-in heritage leg of lamb, room temperature" },
    { amount: "6", name: "Fresh rosemary sprigs, roughly torn" },
    { amount: "10", name: "Cloves of purple garlic, smashed" },
    { amount: "4tbsp", name: "Extra virgin olive oil (cold-pressed)" },
    { amount: "2tbsp", name: "Maldon sea salt flakes" },
    { amount: "500ml", name: "Dry red wine (Cabernet Sauvignon)" },
    { amount: "1kg", name: "Small waxy potatoes, halved" },
];

const STEPS = [
    {
        id: "01",
        title: "Preparation & Seasoning",
        description: "Preheat your oven to 160°C (320°F). Using a small sharp knife, make 20-30 shallow incisions all over the lamb. Stuff each slit with a small piece of rosemary and a sliver of garlic. Rub the entire leg with olive oil and generously coat with sea salt and cracked black pepper.",
        image: IMAGES.step1
    },
    {
        id: "02",
        title: "The First Sear",
        description: "Place a heavy-duty roasting tin on the hob over a medium-high heat. Sear the lamb for 4-5 minutes on each side until golden brown. This builds the foundational umami layer that slow roasting can't achieve alone."
    },
    {
        id: "03",
        title: "Slow Roasting",
        description: "Scatter the halved potatoes around the lamb in the tin. Pour in the red wine, avoiding the top of the meat. Cover tightly with two layers of foil to create a seal. Roast for 3.5 hours, basting the meat with its juices every hour.",
        images: [IMAGES.step3a, IMAGES.step3b]
    },
    {
        id: "04",
        title: "The Crisp Finish",
        description: "Remove the foil, increase oven temperature to 220°C (430°F), and roast for another 20-30 minutes until the fat is crispy and the potatoes are golden and crunchy. Let the meat rest for at least 20 minutes before carving to allow the juices to redistribute."
    }
];

export default function SingleRecipeContent({ currentUser, recipe }: { currentUser: UserProps | null; recipe: RecipeProps }) {
    const [isSaved, setIsSaved] = useState(false);

    return (
        <div className="min-h-screen selection:bg-primary/20">


            <div className="pt-24 max-w-7xl mx-auto px-6 md:px-12">
                {/* Hero Section */}
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
                                Slow-Roasted Heritage Lamb with Rosemary
                            </h1>
                            <p className="text-on-surface-variant text-lg md:text-xl leading-relaxed mb-10 max-w-xl font-medium">
                                A tender centerpiece prepared with pasture-raised leg of lamb, infused with wild rosemary, sea salt, and cold-pressed olive oil. A celebration of slow-cooking traditions.
                            </p>

                            {/* Meta Info Row */}
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-y border-outline-variant/20">
                                <MetaItem label="Prep Time" value="30 Mins" icon={<Clock size={14} />} />
                                <MetaItem label="Cook Time" value="4 Hours" icon={<Utensils size={14} />} />
                                <MetaItem label="Difficulty" value="Intermediate" icon={<ChefHat size={14} />} />
                                <MetaItem label="Servings" value="6-8 People" icon={<Users size={14} />} />
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
                            src={IMAGES.hero}
                            alt="Roasted Lamb"
                            className="w-full h-full object-cover rounded-2xl editorial-shadow"
                            referrerPolicy="no-referrer"
                        />
                    </motion.div>
                </section>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 pb-24">
                    {/* Ingredients Sidebar */}
                    <aside className="lg:col-span-4">
                        <div className="bg-surface-container-low p-10 rounded-2xl sticky top-28">
                            <h3 className="text-2xl font-black mb-10 flex items-center gap-4">
                                <span className="w-10 h-10 bg-secondary-container rounded-full flex items-center justify-center">
                                    <Utensils className="text-on-secondary-container" size={20} />
                                </span>
                                Ingredients
                            </h3>

                            <ul className="space-y-6">
                                {INGREDIENTS.map((item, idx) => (
                                    <motion.li
                                        key={idx}
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: idx * 0.1 }}
                                        className="flex items-start gap-4 group"
                                    >
                                        <span className="bg-secondary-fixed-dim text-on-secondary-fixed text-[10px] px-2.5 py-1 rounded-full font-bold mt-1 shrink-0 group-hover:bg-secondary-container transition-colors">
                                            {item.amount}
                                        </span>
                                        <span className="text-on-surface leading-tight font-medium group-hover:text-primary transition-colors">
                                            {item.name}
                                        </span>
                                    </motion.li>
                                ))}
                            </ul>

                            <div className="mt-12 p-8 bg-surface-container-lowest rounded-xl border-l-4 border-primary shadow-sm">
                                <p className="text-sm italic text-on-surface-variant leading-relaxed font-medium">
                                    "The secret lies in the quality of the lamb. Look for heritage breeds like Romney or Herdwick for a deeper, more complex flavor profile."
                                </p>
                            </div>
                        </div>
                    </aside>

                    {/* Instructions Main Column */}
                    <div className="lg:col-span-8">
                        <h3 className="text-4xl font-black mb-16 tracking-tight">Cooking Instructions</h3>

                        <div className="space-y-24">
                            {STEPS.map((step, idx) => (
                                <motion.div
                                    key={step.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    className="flex flex-col md:flex-row gap-8 group"
                                >
                                    <span className="text-6xl font-black text-outline-variant/30 group-hover:text-primary/40 transition-colors duration-500 shrink-0 tabular-nums">
                                        {step.id}
                                    </span>
                                    <div className="flex-1">
                                        <h4 className="text-2xl font-black mb-4 tracking-tight group-hover:text-primary transition-colors">
                                            {step.title}
                                        </h4>
                                        <p className="text-on-surface-variant text-lg leading-relaxed mb-8 font-medium">
                                            {step.description}
                                        </p>

                                        {step.image && (
                                            <div className="overflow-hidden rounded-2xl editorial-shadow">
                                                <img
                                                    src={step.image}
                                                    alt={step.title}
                                                    className="w-full h-80 object-cover hover:scale-105 transition-transform duration-700"
                                                    referrerPolicy="no-referrer"
                                                />
                                            </div>
                                        )}

                                        {step.images && (
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                {step.images.map((img, i) => (
                                                    <div key={i} className="overflow-hidden rounded-2xl editorial-shadow">
                                                        <img
                                                            src={img}
                                                            alt={`${step.title} detail ${i + 1}`}
                                                            className="w-full h-64 object-cover hover:scale-105 transition-transform duration-700"
                                                            referrerPolicy="no-referrer"
                                                        />
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {currentUser && currentUser.id === recipe.authorId && <Link href={`/admin/recipes/${recipe.slug}/edit`} className="cursor-pointer fixed bottom-28 right-8 w-16 h-16 rounded-full braise-gradient text-white shadow-editorial flex items-center justify-center hover:scale-110 active:scale-95 transition-all z-40">
                <PenIcon size={32} />
            </Link>}
        </div>
    );
}



function MetaItem({ label, value, icon }: { label: string, value: string, icon: React.ReactNode }) {
    return (
        <div className="flex flex-col">
            <span className="text-[10px] uppercase tracking-widest text-on-surface-variant mb-2 font-bold flex items-center gap-1.5">
                {icon}
                {label}
            </span>
            <span className="font-black text-on-surface text-lg tracking-tight">{value}</span>
        </div>
    );
}


