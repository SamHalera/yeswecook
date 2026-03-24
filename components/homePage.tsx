import { ArrowBigRight, ArrowRight, BookOpenCheck, ChevronRight, MenuIcon, Search } from "lucide-react"

export const HomePageComponent = () => {

    return (
        <>

            <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-32">
                <div className="lg:col-span-6 z-10">
                    <h1 className="font-headline text-5xl md:text-7xl font-black text-on-surface tracking-tighter mb-6 leading-[1.1]">
                        Your Personal <br />
                        <span className="text-primary italic">Recipe Sanctuary.</span>
                    </h1>
                    <p className="text-lg md:text-xl text-on-surface-variant max-w-xl mb-12 leading-relaxed">
                        A digital heirloom for your kitchen. Upload, organize, and discover recipes that turn every meal into a
                        storied tradition.
                    </p>

                    <div className="bg-white p-8 rounded-3xl editorial-shadow border border-slate-100 space-y-6">

                        <div className="flex flex-col gap-4">
                            <div className="flex-1 relative">

                                {/* <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">search</span> */}
                                <input
                                    className="w-full pl-12 pr-4 py-4 bg-slate-50 border-slate-100 rounded-2xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-body text-slate-900 placeholder:text-slate-400"
                                    placeholder="Search by name or keyword..." type="text" />
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-2">
                            <button
                                className="px-5 py-2 rounded-full bg-slate-900 text-white font-bold text-sm hover:bg-slate-800 transition-all">Starters</button>
                            <button
                                className="px-5 py-2 rounded-full bg-slate-100 text-slate-600 font-bold text-sm hover:bg-slate-200 transition-all">Main
                                Courses</button>
                            <button
                                className="px-5 py-2 rounded-full bg-slate-100 text-slate-600 font-bold text-sm hover:bg-slate-200 transition-all">Desserts</button>
                            <button
                                className="px-5 py-2 rounded-full bg-slate-100 text-slate-600 font-bold text-sm hover:bg-slate-200 transition-all">Aperitifs</button>
                        </div>

                        <div className="space-y-3">
                            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Search by Ingredients (Up to
                                4)</label>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                                <input
                                    className="px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary"
                                    placeholder="Ingredient 1" type="text" />
                                <input
                                    className="px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary"
                                    placeholder="Ingredient 2" type="text" />
                                <input
                                    className="px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary"
                                    placeholder="Ingredient 3" type="text" />
                                <input
                                    className="px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary"
                                    placeholder="Ingredient 4" type="text" />
                            </div>
                        </div>
                        <button
                            className="w-full py-4 signature-gradient text-white font-bold rounded-2xl shadow-lg shadow-green-200 hover:shadow-green-300 transition-all active:scale-[0.98]">
                            Find Recipes
                        </button>
                    </div>
                </div>
                <div className="lg:col-span-6 relative hidden lg:block">
                    <div className="relative w-full aspect-square rounded-[3rem] overflow-hidden editorial-shadow">
                        <img alt="Editorial food photography" className="w-full h-full object-cover"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAfDuxnHa71aaLw7lg6mz7PduNenyOQ8GGV6H6ydlfaWgKRHtM22pz09zqBLF8G1aSZWiyWD6TmKP7hdi8GIiS7bxNn5P9O9F2T_xSats2GK9BxJiqw8MabPbUZcatwaM4bTmHkwuJ3SS_wtaSmh-e7ShLWc3Pz9wCNi7I4Ip28V0i1R2ZJezx0YPhAgVFrsQ55U5X7IXzCzGE1g3tJikC8tdnI-zGBXNoiA9LQ1NBPEinaY7NYh27jEmtdIhfV6kyAynVdyT9Few" />
                    </div>

                    <div className="absolute -bottom-6 -left-8 bg-white p-6 rounded-2xl border border-slate-100 shadow-2xl max-w-[260px]">
                        <div className="flex items-center gap-3 mb-3">
                            <div className="w-8 h-8 rounded-full bg-primary-container flex items-center justify-center">
                                <BookOpenCheck />
                                {/* <span className="material-symbols-outlined text-primary text-base">menu_book</span> */}
                            </div>
                            <span className="font-bold text-xs text-slate-500 uppercase tracking-widest">Recipe of the Day</span>
                        </div>
                        <p className="text-sm font-bold text-slate-900 leading-snug">"Summer Heirloom Tomato Salad with Basil Infusion"
                        </p>
                    </div>
                </div>
            </section>

            <section className="mb-32">
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <h2 className="font-headline text-3xl font-bold tracking-tight text-slate-900">Popular Everyday Recipes</h2>
                        <p className="text-slate-500">Effortless meals for your daily ritual.</p>
                    </div>
                    <a className="text-primary font-bold hover:underline flex items-center gap-1 group" href="#">
                        View All <ChevronRight />
                        {/* <span className="material-symbols-outlined text-base group-hover:translate-x-0.5 transition-transform">chevron_right</span> */}
                    </a>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div
                        className="md:col-span-2 md:row-span-2 bg-slate-50 rounded-3xl overflow-hidden group border border-slate-100 flex flex-col">
                        <div className="h-[65%] overflow-hidden">
                            <img alt="Fresh salad"
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAEoHZ0y_KqriHG0aDbZWkS9hrBwNW1GoWKjYCn_WhbaVsHbjsSfUp420vsbW5kzpwVzrfOTzjJyi36be86KLarhRcqsgDe-xb8BC8_9R7vtAip-h_QSVUa-ZlBT3DNMPGipu_PAm6lZtjwuSdZ8G7hhCMF2SiI09J8l959BpSceMIQVdGXbfVtAftOQXA2RzAY3m51X2CZYjtEyPHRkPQDxItokSGK5FshENpZbzDnaeSlk16GYRpRyiSzMhYkxPHW2gPXcvFBjA" />
                        </div>
                        <div className="p-8 flex-1 flex flex-col justify-center">
                            <span className="text-primary font-black text-[10px] uppercase tracking-widest mb-3 block">Starter</span>
                            <h3 className="font-headline text-2xl font-bold mb-3 text-slate-900">15-Min Zen Garden Bowl</h3>
                            <div className="flex items-center gap-6 text-sm text-slate-500">
                                <span className="flex items-center gap-1.5"><span className="material-symbols-outlined text-lg">schedule</span>
                                    15m</span>
                                <span className="flex items-center gap-1.5"><span className="material-symbols-outlined text-lg">restaurant</span>
                                    Easy</span>
                            </div>
                        </div>
                    </div>
                    <div className="bg-slate-50 rounded-3xl overflow-hidden group border border-slate-100">
                        <div className="h-44 overflow-hidden">
                            <img alt="Pasta" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDpQ-ShP6Ak0SFwShPBr-nYkQPhFdTeifNAgaEBfmWHi9FeY7cI7sES9ooKDChKH78_2uGd67lDRl5duXT_X-vYEySUq1Z5ned7gTwczZf2FWsi5qoOWM1zC7VFmHo8J-wPRaIP_WfftYIFy-oSItEZj5AUh331v2TaT44UofGfmSfK5dY10VDWzzxA7nF_LAMVSvuMjbipigfvvlUVYlcrGJdcXDfCKzQXeuXPUCilTmyjJZRiMy8z1n5uPAQg4WRh0UA6xOMifg" />
                        </div>
                        <div className="p-6">
                            <h3 className="font-headline font-bold text-lg text-slate-900 mb-1">Pesto Gnocchi</h3>
                            <p className="text-sm text-slate-500">Italian comfort in minutes.</p>
                        </div>
                    </div>
                    <div className="bg-slate-50 rounded-3xl overflow-hidden group border border-slate-100">
                        <div className="h-44 overflow-hidden">
                            <img alt="Pizza" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBu19GetwCYBL6UyWgIydBocFkAC6wASeZ37_p87ji0Stv-fMBNd6omzBn-WYV3zgRjjVKdlMzugs_eL7ImO6VfDl6kAgYG7YbuRyKEmSggppVQJqfzvNWfEwc6ZjcPE0kkIi_QFz3eyeUaWOnZFLB80wgJnyZcfVhW3wM3WrQma7M2583bP7x7CLJJ-ApW2z6tAaTKLULaU1N-uH9TjPlWecihFFvBG6P1UQ_jm9aV5sid756CqSRtUMUj1S8ZoO4VpdqeTC9zBQ" />
                        </div>
                        <div className="p-6">
                            <h3 className="font-headline font-bold text-lg text-slate-900 mb-1">Rustic Flatbread</h3>
                            <p className="text-sm text-slate-500">Crispy, herbal delight.</p>
                        </div>
                    </div>
                    <div className="md:col-span-2 bg-slate-900 rounded-3xl p-10 flex flex-col justify-center text-white">
                        <h3 className="font-headline text-3xl font-black mb-4">Build your own cookbook</h3>
                        <p className="text-slate-400 mb-8 max-w-sm text-lg">Save your favorite everyday recipes and organize them into
                            custom collections.</p>
                        <button
                            className="bg-primary hover:bg-green-600 text-white w-max px-10 py-4 rounded-2xl font-bold active:scale-95 transition-all">Start
                            Creating</button>
                    </div>
                </div>
            </section>

            <section className="mb-32 bg-slate-50 -mx-6 px-10 py-24 rounded-[3.5rem] border border-slate-100">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-16">
                        <h2 className="font-headline text-4xl font-black tracking-tight text-slate-900">Site-Curated classNameics</h2>
                        <p className="text-slate-500 text-lg">The fundamental pillars of a great kitchen, hand-picked by our chefs.</p>
                    </div>
                    <div className="flex flex-col gap-20">

                        <div className="flex flex-col md:flex-row items-center gap-16">
                            <div
                                className="w-full md:w-5/12 aspect-square rounded-3xl overflow-hidden editorial-shadow border border-white">
                                <img alt="Steak" className="w-full h-full object-cover"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBx71DL1ytE_OFptwTO9QltDz5aKJvu4X1GBAlqJo7vK4UnF27R_uENX0QiXZVBFrLTfVYHcL-LC8PfWm9Kzd6nblvY5U7v8mJgEYlzGBbCfPCmVsIpAWuYkeoXX8ahMaNc7QVPwJPagzV53YLMwgz0hJ7wFc6m9JI-UMuxyJbVTKMbVxNZIthH-6CPlTKcvuH2VMz1SAk-H7xIOuw7AR4ouQxdZXLaLUni0UOe2idNSevfQD5jK0axpHrcSgUHDkBCRMTIe97vog" />
                            </div>
                            <div className="w-full md:w-7/12">
                                <span className="text-slate-400 font-black text-xs tracking-[0.3em] uppercase mb-6 block">Main Course</span>
                                <h3 className="font-headline text-5xl font-black text-slate-900 mb-6">The Golden Ratio Ribeye</h3>
                                <p className="text-xl text-slate-600 mb-8 leading-relaxed max-w-2xl">Discover the secret to the perfect sear.
                                    Our definitive guide to meat preparation focuses on temperature control and resting periods that
                                    guarantee perfection every time.</p>
                                <div className="flex items-center gap-8">
                                    <button className="text-primary font-black text-lg flex items-center gap-2 group">
                                        Read Technique <ArrowRight />
                                        {/* <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span> */}
                                    </button>
                                    <span className="w-1.5 h-1.5 bg-slate-200 rounded-full"></span>
                                    <span className="text-slate-400 font-bold text-sm uppercase tracking-widest">8 min read</span>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row-reverse items-center gap-16">
                            <div
                                className="w-full md:w-5/12 aspect-square rounded-3xl overflow-hidden editorial-shadow border border-white">
                                <img alt="Sourdough" className="w-full h-full object-cover"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDw1auI0IybielI2kZpT3o50B6Z4gzUnfXW_zpK2KfkRzHdu7ls2qxSLIKRpvdlRim2i3CslVSd6wbHXmcpj-MOGlqj9D09SFCLmlBIxyD7ADCTckM_-cjQo6IYJMoZgZIJsVm1I1SIqvkPACMnfF9vV8q5pBmahWwz_3op69U4kMXY_EEgU515GzuUtCrvc4I3NKVzC1sUhsudDixSv9EV1qtU-LFigVnz4Cz4pdK6h1sJaifPJOLcQWcgh5Lz9sHhWCxGds3PTg" />
                            </div>
                            <div className="w-full md:w-7/12">
                                <span className="text-slate-400 font-black text-xs tracking-[0.3em] uppercase mb-6 block">Technique</span>
                                <h3 className="font-headline text-5xl font-black text-slate-900 mb-6">Mastering the Wild Yeast</h3>
                                <p className="text-xl text-slate-600 mb-8 leading-relaxed max-w-2xl">Sourdough is more than bread—it's a
                                    relationship. We break down the science of fermentation into simple, tactile steps for the home baker.
                                </p>
                                <div className="flex items-center gap-8">
                                    <button className="text-primary font-black text-lg flex items-center gap-2 group">
                                        View MasterclassName <ArrowRight />
                                        {/* <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span> */}
                                    </button>
                                    <span className="w-1.5 h-1.5 bg-slate-200 rounded-full"></span>
                                    <span className="text-slate-400 font-bold text-sm uppercase tracking-widest">12 min read</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mb-32">
                <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6 mb-16">
                    <div>
                        <h2 className="font-headline text-3xl font-bold tracking-tight text-slate-900">Latest Community Recipes</h2>
                        <p className="text-slate-500">See what's cooking in the hearths of our community.</p>
                    </div>
                    <button
                        className="bg-slate-100 hover:bg-slate-200 text-slate-900 px-8 py-4 rounded-2xl font-bold transition-all active:scale-95">
                        Join the Discussion
                    </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

                    <div
                        className="bg-white rounded-3xl overflow-hidden group border border-slate-100 transition-all hover:shadow-xl hover:-translate-y-1">
                        <div className="relative h-64 overflow-hidden">
                            <img alt="Donuts" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCtTRsplayjqYUkLVwCDQTfOqTtg9pLpKo8f6Q_2SEsNx3v0oQWyYNp0WHkykjuPFiDtCSYLg8OdizBKr0yIE9BT_E_6HrWFzGWXqKxlny8YyMzo38nlfHBGzp1GbsPaets9rAbB9N2YnSzCdkLLrPEwfNcMwDU4iURz9Tm3LFoEUAo3SRMvHuMOnGBSSNJFKBrzWbjsplocUsDte-HFtqnkFviAlJxhbflWUkjTV0y323kSS_68FN3CU089Kbfx4JMGiVryCLnyg" />
                            <button
                                className="absolute top-5 right-5 bg-white/90 backdrop-blur-md p-2.5 rounded-full text-rose-500 shadow-sm active:scale-90 transition-all">
                                <span className="material-symbols-outlined">favorite</span>
                            </button>
                        </div>
                        <div className="p-8">
                            <div className="flex items-center gap-3 mb-5">
                                <div className="w-7 h-7 rounded-full bg-slate-100 overflow-hidden border border-slate-200">
                                    <img alt="Avatar"
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDWo_gTHLBIhG0-dtgSB1qznt6eIocI5RhS42f7vKJ1AfRt9SWhMA9V6ldZQmPwGqjXYy0a2lvJAm9d_8exn2pUs4EHhk4uj0ea-T-PUZY2PqrXpOQXLju9wStYJy6YWuUfhKhpRwOCwyYuZ5lavBHcONlfvBiK-4VRJNZCfP6Cz4Vpx3-CIYMnqQGC2wCO8y0SUKQDBaLj7cQvZGxg8H1PFFS71vI_n6uoqBWL2R8fLGWP_rGlkNAtL63ppruKS5azUvySuURmyA" />
                                </div>
                                <span className="text-xs font-bold text-slate-500">by Marco Pierre</span>
                            </div>
                            <h4 className="font-headline font-bold text-xl text-slate-900 mb-4 group-hover:text-primary transition-colors">
                                Midnight Cocoa Glazed Donuts</h4>
                            <div className="flex gap-2">
                                <span
                                    className="text-[10px] font-black uppercase tracking-widest bg-slate-900 text-white px-3 py-1.5 rounded-full">Dessert</span>
                                <span
                                    className="text-[10px] font-black uppercase tracking-widest bg-slate-100 text-slate-500 px-3 py-1.5 rounded-full">30
                                    mins</span>
                            </div>
                        </div>
                    </div>

                    <div
                        className="bg-white rounded-3xl overflow-hidden group border border-slate-100 transition-all hover:shadow-xl hover:-translate-y-1">
                        <div className="relative h-64 overflow-hidden">
                            <img alt="Soup" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAlVAReKEa-f7BDl1nH2rpMd6Ku63M-jRGS0TRmET_3y7B9zx2SiIggLWE5ifSBF_Rp3I9MAq-q3--JbTuoJYHekK9oJ4aXwTuXVQS7hVQ-1AneZQc1DfISz9KoF3S4RPSr3HuUpZ-rhv_al-M3lfVk-CjCxc244po0ylVTlAfPsJtZ73l1hXE8V2w0-OGGZLk6nT10q2arn9LsSlizX1MblbsrwtMa027wNdPlLeyfGYjLiih-L2546vjafcL4owfFRs84DHGhWw" />
                            <button
                                className="absolute top-5 right-5 bg-white/90 backdrop-blur-md p-2.5 rounded-full text-slate-400 hover:text-rose-500 shadow-sm active:scale-90 transition-all">
                                <span className="material-symbols-outlined">favorite</span>
                            </button>
                        </div>
                        <div className="p-8">
                            <div className="flex items-center gap-3 mb-5">
                                <div className="w-7 h-7 rounded-full bg-slate-100 overflow-hidden border border-slate-200">
                                    <img alt="Avatar"
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBReASjc9FuieUPpxgeHRQw6xfZ1zYbkvgcevM8JxeLSY8Fl0Z5dLn_WiDupVfB_1ipdRD54ItyQQt6fnXOBUTemANlzzKdke8GqXfH64s2VRn0OhN7BTkGSZUwTdlG5caRlPavOiVEl3XfUO15AXe2voXtsM5Edf4dK3lB_PG_a0uA_5RKhGNFOnShzmMelC9aJu0TVK6sE8mCfhBLj6toV6ETEudaq7L8C7dj5F4ZyRitKt19Opv3FMjxddL0oAbwLJTPdCZTHw" />
                                </div>
                                <span className="text-xs font-bold text-slate-500">by Elena Rostova</span>
                            </div>
                            <h4 className="font-headline font-bold text-xl text-slate-900 mb-4 group-hover:text-primary transition-colors">
                                Spiced Autumn Pumpkin Velouté</h4>
                            <div className="flex gap-2">
                                <span
                                    className="text-[10px] font-black uppercase tracking-widest bg-slate-900 text-white px-3 py-1.5 rounded-full">Aperitifs</span>
                                <span
                                    className="text-[10px] font-black uppercase tracking-widest bg-slate-100 text-slate-500 px-3 py-1.5 rounded-full">45
                                    mins</span>
                            </div>
                        </div>
                    </div>

                    <div
                        className="bg-white rounded-3xl overflow-hidden group border border-slate-100 transition-all hover:shadow-xl hover:-translate-y-1">
                        <div className="relative h-64 overflow-hidden">
                            <img alt="Chicken"
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA39bAkULQ-loWJ8wPPUiyGetzCQi2mUtDzDFOU917VLJzBdck3lJHNpkoH1LG_xB918wPdRNXux9V907jlA-C5i9fF6xXknI-ZHmHLdX3Ky88OKtGTg-18HP_GdnnmcHBQVtsUYo7Q_NsYtg19CbNyT8CY-rfu0jr7CxdkUpAvRFMcUT45bWQTM6t4ytILDD9Fr2CuTrhvMJaFyxfPHOb4exvAIY4q05rArmuwmD_mLfKtk5DMoXQQ5kpLQDSYCumzwmIx0ImKnQ" />
                            <button
                                className="absolute top-5 right-5 bg-white/90 backdrop-blur-md p-2.5 rounded-full text-slate-400 hover:text-rose-500 shadow-sm active:scale-90 transition-all">
                                <span className="material-symbols-outlined">favorite</span>
                            </button>
                        </div>
                        <div className="p-8">
                            <div className="flex items-center gap-3 mb-5">
                                <div className="w-7 h-7 rounded-full bg-slate-100 overflow-hidden border border-slate-200">
                                    <img alt="Avatar"
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDnf133U1Rtby0TX3qVJgUmBGRR-iTK1gtVtCDvtUqiHIwpFRIbcRyboHKKzqvi-0SHXIonz09Yf59e-vXo28fpGTCpiHIKvR34EISc2TZc1zRmMUOUPappzCRO305cOaomzTK0aG3molzGITFE-rldJ_27XVINyGKGb118WqtMcSKjxJrKJS_lAiT2b6y8AW-anWSNpeDHinWaru9K5Ofe9mfOzvSa3tSrzgDRtK6de3WzN62p55LREA7JiPqeMf4wUGqUU9MxCA" />
                                </div>
                                <span className="text-xs font-bold text-slate-500">by Chef Julien</span>
                            </div>
                            <h4 className="font-headline font-bold text-xl text-slate-900 mb-4 group-hover:text-primary transition-colors">
                                Lemon Thyme Sous-Vide Poultry</h4>
                            <div className="flex gap-2">
                                <span
                                    className="text-[10px] font-black uppercase tracking-widest bg-slate-900 text-white px-3 py-1.5 rounded-full">Main
                                    Course</span>
                                <span
                                    className="text-[10px] font-black uppercase tracking-widest bg-slate-100 text-slate-500 px-3 py-1.5 rounded-full">60
                                    mins</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}