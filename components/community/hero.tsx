export default function Hero() {
    return (
        <section className="max-w-screen-2xl mx-auto px-8">
            <div className="relative overflow-hidden rounded-xl bg-surface-container-low min-h-[500px] flex items-center">
                <div className="relative z-10 w-full md:w-1/2 p-12 lg:p-20 space-y-6">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-bold text-xs uppercase tracking-widest">
                        Our Home Kitchen
                    </span>
                    <h1 className="text-6xl lg:text-8xl font-black text-on-surface leading-[0.9] tracking-tighter">
                        The Culinary Circle
                    </h1>
                    <p className="text-lg text-on-surface-variant max-w-md leading-relaxed">
                        A sanctuary for sharing, learning, and growing together. Here, every recipe tells a story and every cook has a voice.
                    </p>
                    <div className="pt-4 flex gap-4">
                        <button className="bg-primary text-on-primary px-8 py-4 rounded-lg font-bold hover:scale-95 transition-transform">
                            Start Sharing
                        </button>
                        <button className="bg-surface-container-high text-on-surface px-8 py-4 rounded-lg font-bold hover:bg-surface-container-highest transition-colors">
                            Browse Discussions
                        </button>
                    </div>
                </div>
                <div className="absolute right-0 top-0 bottom-0 w-full md:w-3/5 h-full opacity-40 md:opacity-100">
                    <img
                        alt="Warm inviting overhead shot of a long wooden dinner table filled with rustic mediterranean food"
                        className="w-full h-full object-cover"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuACjSAKMtjrBo4TdFD5cwrrrvQ2acsjs93eBzE7yvCTwSce9iVcD5LdQnFC9Y7IL1WUYP23QHyJx0wsOFmh0q-yVLSNqv-qAqbNapbya9LFPemLHG3ixQgtlTTMCALwwerAKGxLDhUqtuK0I0vPS77TsaordUrsL5pyWPfVX2-qCgwGrV1FsA40axFxkhFdTC60KEvguPydcirtrzwr8Uv25S9O7M26EzllD-OiDU1C_8axzn9GI0JEBWkdgsjmsFd8aiQgOJfamw"
                        referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-surface-container-low via-transparent to-transparent"></div>
                </div>
            </div>
        </section>
    );
}
