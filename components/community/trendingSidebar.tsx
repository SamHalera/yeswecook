const trending = [
    {
        category: "Equipment",
        title: "Best cast iron pans for induction stoves?",
        stats: "45 new replies this hour"
    },
    {
        category: "Health",
        title: "Tips for healthy meal prep on a budget",
        stats: "128 community members active"
    },
    {
        category: "Kitchen Hack",
        title: "How to stop onions from making you cry?",
        stats: "72 votes on top answer"
    },
    {
        category: "Ingredients",
        title: "Substituting Miso in Italian cooking?",
        stats: "New discussion started"
    }
];

export default function TrendingSidebar() {
    return (
        <aside className="space-y-8">
            <div className="bg-surface-container rounded-xl p-8 space-y-8 h-fit">
                <h2 className="text-2xl font-black tracking-tight border-b border-on-surface/10 pb-4">Trending Now</h2>
                <ul className="space-y-6">
                    {trending.map((item, i) => (
                        <li key={i} className="group cursor-pointer">
                            <div className="text-[10px] font-black text-primary uppercase tracking-widest mb-1">{item.category}</div>
                            <h4 className="font-bold leading-tight group-hover:underline">{item.title}</h4>
                            <p className="text-xs text-stone-500 mt-1">{item.stats}</p>
                        </li>
                    ))}
                </ul>
                <div className="pt-4">
                    <button className="w-full py-4 border-2 border-primary text-primary font-bold rounded-lg hover:bg-primary hover:text-on-primary transition-all">
                        Start a Topic
                    </button>
                </div>
            </div>

            <div className="bg-primary p-8 rounded-xl text-on-primary space-y-4">
                <h4 className="text-xl font-black">Join 50,000+ Cooks</h4>
                <p className="text-sm opacity-80 leading-relaxed">
                    Our community is the heartbeat of YesWeCook. Connect with experts and beginners alike.
                </p>
                <div className="flex -space-x-3 overflow-hidden">
                    {[1, 2, 3].map(i => (
                        <img
                            key={i}
                            alt="User avatar"
                            className="inline-block h-8 w-8 rounded-full ring-2 ring-primary"
                            src={`https://picsum.photos/seed/user${i}/100/100`}
                            referrerPolicy="no-referrer"
                        />
                    ))}
                    <div className="flex items-center justify-center h-8 w-8 rounded-full ring-2 ring-primary bg-stone-100 text-[10px] font-bold text-stone-800">+42k</div>
                </div>
            </div>
        </aside>
    );
}
