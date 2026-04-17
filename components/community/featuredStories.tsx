import { ArrowRight } from 'lucide-react';

const stories = [
    {
        id: 1,
        title: "The Sacred Secret to Perfect Wild Sourdough",
        description: "How a community member rediscovered her grandmother's starter in the hills of Tuscany.",
        category: "Masterclass",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBl6Vqq4PdtZBDl1H3wNnkN4XKpNrx8oWjqFi-C1thyKX9sNyV34HidhgT4yQ8HOfw-vaKO62vNF2HbcXq5n3ll3cLCVdnTiaij-cK8tIZuic6kETA6lpvhHOIfrSeCiBugFE50fJlUJ8WzlqeK1c7HEV2yfG8FpWr_0Z0DbeR0xpYrh7XzZU1ASl4NcrwmZTP8gOHQT_JPjf4lmgM-fZHRhxmhSbC_U8jeBByw85TrNIKKBoUZfZxILhkJNO9HRWnKsD-XML9qVA"
    },
    {
        id: 2,
        title: "Why We Cook Together: The Science of Connection",
        description: "Exploring the psychological benefits of shared meals and communal meal prep routines.",
        category: "Editorial",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD-RDCpoNMo_-7uPU8aTJgAzLNaEp72rBCX712IXSxXCCpGWHA-MSTSfxmfHk5ye1VkllZa5AWQe0W9X361T1veGpsEnPhJvl16OIatgMy4SZSlCnigPAjaztmg4gwHShuVKDtF-QAmcgxyqGlMaXdpOH2lDmVD4A9RzUdVaoDgqyFQ6r8_Rbl_eBhA9Wa-w6J7j4lEwQYQiZZ2XJeQncj_OU2JiA2qHZcEZuwRInNU9XrlLCmKdjyXh5Fb5pgVA35yu6NEVG6xXw"
    },
    {
        id: 3,
        title: "Ancient Spices: Modern Healing for Busy Lives",
        description: "A deep dive into the spice cabinets of our diverse community of professional and home chefs.",
        category: "Tradition",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDWofLjYl4s4fRocTxbIBPuSiXbUkz5HcyNs3w67DZGR19U7VAUeQgkZHG9baS4Fxm_yzNVaqSBvVIzZBZhAUidR5PN4gebSyyIbEtiY5loeXO5vxSZoRnLReK7Z3GLrQVv3sHRdpmeT1-Z67rOGSjkGKoioNrWNsl1xEn6cBDdKWMz9w5N4CY8cXqzVDEbh0On_UihHWpksLkh7Ocusc2OhWR1N3k1EjhsnETWYIXibuxJoMk9tOpAuqTSTmg4Orbvwun9vSuS6A"
    }
];

export default function FeaturedStories() {
    return (
        <section className="max-w-screen-2xl mx-auto px-8 py-24 space-y-12">
            <div className="flex justify-between items-end">
                <div className="space-y-2">
                    <h2 className="text-4xl font-black tracking-tight">Featured Stories</h2>
                    <div className="h-1 w-20 bg-primary"></div>
                </div>
                <a className="text-primary font-bold flex items-center gap-2 group" href="#">
                    View all stories <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {stories.map(story => (
                    <div key={story.id} className="group cursor-pointer">
                        <div className="relative aspect-[4/5] mb-6 overflow-hidden rounded-lg">
                            <img
                                alt={story.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                src={story.image}
                                referrerPolicy="no-referrer"
                            />
                            <div className="absolute bottom-6 left-6 right-6">
                                <span className="bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest text-primary">
                                    {story.category}
                                </span>
                            </div>
                        </div>
                        <h3 className="text-2xl font-bold leading-tight group-hover:text-primary transition-colors">
                            {story.title}
                        </h3>
                        <p className="mt-3 text-stone-500 line-clamp-2">
                            {story.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}
