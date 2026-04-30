"use client"
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */


import React, { useState } from 'react';
import { motion, AnimatePresence, removeItem } from 'motion/react';
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
import { HeroPublicRecipePage } from './heroPublicRecipePage';
import { IngredientsSidebar } from './ingredientsSidebar';
import { InstructionsRecipe } from './instructionsRecipe';

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

export default function SingleRecipeContent({ currentUser, recipe }: { currentUser: UserProps | null, recipe: RecipeProps }) {
    const [isSaved, setIsSaved] = useState(false);

    return (
        <div className="min-h-screen selection:bg-primary/20">


            <div className="pt-24 max-w-7xl mx-auto px-6 md:px-12">
                {/* Hero Section */}
                <HeroPublicRecipePage isSaved={isSaved} setIsSaved={setIsSaved} recipe={recipe} />

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 pb-24">
                    {/* Ingredients Sidebar */}
                    <IngredientsSidebar ingredients={recipe.ingredients} comment={recipe.comment} />

                    {/* Instructions Main Column */}
                    <InstructionsRecipe recipe={recipe} />

                </div>
            </div>

            {currentUser && currentUser.id === recipe.authorId && <Link href={`/admin/recipes/${recipe.slug}/edit`} className="cursor-pointer fixed bottom-28 right-8 w-16 h-16 rounded-full braise-gradient text-white shadow-editorial flex items-center justify-center hover:scale-110 active:scale-95 transition-all z-40">
                <PenIcon size={32} />
            </Link>}
        </div>
    );
}



export function MetaItem({ label, value, icon }: { label: string, value: string | null, icon: React.ReactNode }) {
    return (
        <div className="flex flex-col items-center">
            <span className="text-[10px] uppercase tracking-widest text-on-surface-variant mb-2 font-bold flex items-center gap-1.5">
                {icon}
                {label}
            </span>
            <span className="font-black text-on-surface text-lg tracking-tight">{value}</span>
        </div>
    );
}


