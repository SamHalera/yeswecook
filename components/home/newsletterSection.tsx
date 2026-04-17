export function Newsletter() {
    return (
        <section className="max-w-7xl mx-auto px-8 py-32">
            <div className="braise-gradient rounded-3xl p-12 lg:p-20 text-center relative overflow-hidden shadow-editorial">
                <div className="relative z-10 max-w-2xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-headline font-extrabold text-white mb-6">Join the Culinary Circle</h2>
                    <p className="text-white/80 text-lg mb-10">Get weekly inspiration, curated menus, and stories from kitchens around the globe.</p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <input
                            className="flex-1 px-6 py-4 rounded-lg bg-white/20 border-white/30 text-white placeholder:text-white/60 focus:bg-white/30 focus:ring-0 transition-all border-none outline-none"
                            placeholder="Enter your email address"
                            type="email"
                        />
                        <button className="bg-white text-primary px-8 py-4 rounded-lg font-bold shadow-editorial hover:bg-surface-container-low transition-all active:scale-95">
                            Subscribe
                        </button>
                    </div>
                </div>
                <div className="absolute -bottom-10 -right-10 opacity-30 transform rotate-12 pointer-events-none">
                    <img
                        className="w-64"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCV8K7wJHK3uq4B-2-84dQral739k6cKY-yFdVJLjLRh0LgbZTBWyXmcOlZ7a46S8uTqwaEkhUAn80QJ2forM5MFkP0CDmSC6IsaPsbeRPeqc5W50DdmWcdgGYFrJkuEAb0Z-XCucurUTw89tWZCyOzKdG1HMkcksGwVkyD7z2kArYPy7ukecl6xL8iOb9vY32vj2OieYfpbriMnl79EwZF-ji-m84Q4jEeaiCLK2tIfPpapJKlzm7pocLTC0Xr1yR7MshLPHk8g"
                        alt="Herbs"
                        referrerPolicy="no-referrer"
                    />
                </div>
            </div>
        </section>
    );
}