import { Star } from 'lucide-react';

export default function Challenge() {
    return (
        <section className="max-w-screen-2xl mx-auto px-8 py-12">
            <div className="bg-surface-dim rounded-xl p-8 lg:p-16 flex flex-col lg:flex-row gap-12 items-center">
                <div className="w-full lg:w-1/2 space-y-8">
                    <div className="inline-flex items-center gap-2 text-primary font-black uppercase tracking-[0.2em] text-sm">
                        <Star className="w-5 h-5 fill-current" />
                        Monthly Challenge
                    </div>
                    <h2 className="text-5xl lg:text-7xl font-black leading-none tracking-tighter">
                        The Seasonal Harvest Challenge
                    </h2>
                    <p className="text-xl text-on-surface-variant leading-relaxed">
                        This month, we're celebrating the late autumn bounty. Create a main course featuring root vegetables and sharing your process with the tag #Harvest24. Top three winners get featured in our upcoming ebook!
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <div className="bg-surface-container-lowest px-6 py-4 rounded-lg border border-outline-variant/20">
                            <div className="text-xs font-bold text-stone-400 uppercase tracking-widest">Time Left</div>
                            <div className="text-2xl font-black">12 Days : 14h</div>
                        </div>
                        <div className="bg-surface-container-lowest px-6 py-4 rounded-lg border border-outline-variant/20">
                            <div className="text-xs font-bold text-stone-400 uppercase tracking-widest">Participants</div>
                            <div className="text-2xl font-black">1,482 Cooked</div>
                        </div>
                    </div>
                    <button className="bg-primary text-on-primary px-10 py-5 rounded-lg font-bold hover:scale-105 transition-transform shadow-lg shadow-primary/20">
                        Join the Challenge
                    </button>
                </div>
                <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4">
                    <div className="space-y-4 pt-12">
                        <div className="rounded-lg overflow-hidden h-48">
                            <img
                                alt="Roasted root vegetables"
                                className="w-full h-full object-cover"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJtQBU16ZB9S5JIWkM_eKFcFnOYkV6JCJfqFgL2VMoHJCfmYMrwD40MJFZOckUOEeAoMZWcycUVUeBm7zhcgFcyluoNeghJhE2JJ5gf8nMlJASxaW20N2XDslD7qybrcU5avwEQgjjLO5XeIQiNUnI__SGORY0Y8ETLKP0WSZNNSilGxigSyzktE7sz5_GQuJqSR2UfwH2ju2S0u773zvMBf82qlmq238aAVBpoRbBVrMNQJ0OgNAX80H8r-nXD5Mh18XooF_sWQ"
                                referrerPolicy="no-referrer"
                            />
                        </div>
                        <div className="rounded-lg overflow-hidden h-64">
                            <img
                                alt="Roasted chicken"
                                className="w-full h-full object-cover"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAyzrsiHKH7ojKA2ybtD0mSu8sJpVtqvG-q4XpCZcUcGe5_PpmcAQOHMG7Sx-EVrBUVrSclJ-MTLMfHuHsnnwzH-VbKD8y_xGZlTlrrH59xzEJ0eI307aFctWR9LQjJoSUwc21fzH5xHfzUhAd8UhOp4FXZxUBwFH-M4c5DPtm3tHRwkuX1gJ6AJMB508F-9zPPnlgdr0Y9PeCdtqNzZwH8Dfv8s09e_ZO1t7n9P3Yjo9cd9N6W7xUcWljMlaypG1ACZjlvfmKPug"
                                referrerPolicy="no-referrer"
                            />
                        </div>
                    </div>
                    <div className="space-y-4">
                        <div className="rounded-lg overflow-hidden h-64">
                            <img
                                alt="Autumn produce"
                                className="w-full h-full object-cover"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA7ICfSBBluuCIRX1QfXnk0QPyLtpSij27xxLWsMi_GtWvNO8gFn7ZonYf1HEYBVXOFNKx3SDwGYkOwd8CbMUhjGeJqDBsC_qweqnO7J6XrAgSTIc5ZkUiU9_XhAgmq21gfncn24eTUXr9tWTHGSUl3Y03S8Fws9qtsOJ6WV_sbkV5jGPLxP0SyaO3fAzF0nCZJBsU5WQ5QONAuagray0HCKNxRejTvkPNNfEaoQ160esDMYLD9ebZLHZX5yrz587pMxXbYSF8tng"
                                referrerPolicy="no-referrer"
                            />
                        </div>
                        <div className="rounded-lg overflow-hidden h-48">
                            <img
                                alt="Community dinner"
                                className="w-full h-full object-cover"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD7g9sTrr3KXi_8GJTwfLGNjLEbCoKEjfbC-oXKUjjVU8fljJ7WGnhi2wj2dBpQD8GTeO_dDVKceqUr-5Rq3TtZTJyU4FFvGGtwtJ1Oe4l1k3taGhO8jraa5LKTVVK6bW4f44NJWXC4-4BNRsHRN9HvYyKxwHCNNPlGHpcm8421XrdgVw8-DbVMYiXBj5fUkbAI6ob7DJOht2eKOLVQdaXsRY-qo7SAYDc0XnK_SyPfaZEwZKiXw7xueaR4RleDDvAIMnf5LUYQow"
                                referrerPolicy="no-referrer"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
