"use client"
import { Heart, Star } from 'lucide-react';
import { motion } from 'motion/react';
export function CommunitySection() {
    const favorites = [
        {
            chef: "Chef Julian",
            title: "Midnight Shakshuka",
            rating: "4.9 (124)",
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAgCvm94M8LQM5cFdMNKm_X-F7X8S8M25MAihP3dBgE3h8xP05CZoypJphHvnNL-mRbP2azMaaKFk5IMAHza2CrvKfyB-6VWDcZT9SncKcxev5OD7BKhxX19g1Qpc8FoLyYEs3CYCh2U-4W5rNkkmxNTHYPkQcq5Caja3BrlPgCg858H1GTyEGJBxBQdLI_1QM4JT2Icmi3mtVr8krb_z5C1sE_Jjx94qzRNPX6pPAQVc6sGbiikJDYuSRmVP7q2hQ6R-5eLdGruA",
            color: "bg-primary-container"
        },
        {
            chef: "Maria K.",
            title: "Summer Basil Pizza",
            rating: "4.8 (89)",
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDo8R62WBKj5sE768RL2kjq48BTbB6NlG1-73LwPva7Ss8wEMBf3zpybhVXH7nIA140eLjMUv0Ky8hS6btieVABTDapMFKrJqn0YTIuPFsIqqDT3u00mDQdTpRbTO5m5kWfULKLSdFR41LY75T5HI8onLGv1POV04s4nx888cfaqhdJ113WS3ruKjxtOWsSraAjr1YLmH8KQ4ntztwvIC88pjRHv8YTyOx5HpPOLM_nqyDMmn5XFSBHftu-IuHwsErDDQB0BRJUxw",
            color: "bg-secondary-fixed-dim"
        },
        {
            chef: "Leo Green",
            title: "Ultimate Zen Bowl",
            rating: "5.0 (215)",
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDJJnBlxq9CvY2arpZhAiMKrIXa28OtSoP4Wkajsoo_X5xpnbLn2nG8nutl7SNIvRCR8pIdbbqmo-id5OgPJ5WqzkRQ7QY0GeRXWWsjiBet7NUqB232XppeB1iyId_DuoK795OevYOIWskURRwL4J-u59dxJzijieUatx4r72Te5H5UNTE1QJOyyZADgob4YRGjIUl9K4uSxjTyECcjRfSLtZ_mRvrSknRFifAqVuB5z_SRYwYSoTW5MYSNq3GDEQ551jJBigWvUA",
            color: "bg-on-surface"
        },
        {
            chef: "Sara Bake",
            title: "Baked Morning Treats",
            rating: "4.7 (56)",
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBwVI1ABNe7Z17l9QLdewfXaA8kEXo_a_fy0x-VH-g8ODheaVJyMHHKBpbEq-v5_WdpWrRCqgbBoWs83-UbLqr85Ai95ZSqeAKe4vjlVmwXzUW4zsHI6MDFmn3cZYpPeP-WJyzNouM9SBuLIX7v1SMXPuzG0EHRG8caCYumf8UJIyQvBhmiHlEm5yFSebsxm9c9KxZ8bnUZj_BPWhgL_DWOL-RDE9b_LD4BnRQajPAvCcc9mbmrSEvKxv4gPY7AS-Lf8xfi4PmPvA",
            color: "bg-primary"
        }
    ];

    return (
        <section className="bg-surface-dim py-24">
            <div className="max-w-7xl mx-auto px-8">
                <div className="text-center mb-16">
                    <span className="text-xs uppercase tracking-[0.15em] text-primary font-bold mb-2 block">Shared with Love</span>
                    <h2 className="text-4xl font-headline font-bold">Community Favourites</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {favorites.map((fav, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ y: -8 }}
                            className="bg-surface-container-lowest rounded-xl p-4 shadow-editorial"
                        >
                            <div className="aspect-square rounded-lg overflow-hidden mb-6">
                                <img className="w-full h-full object-cover" src={fav.img} alt={fav.title} referrerPolicy="no-referrer" />
                            </div>
                            <div className="flex items-center gap-2 mb-3">
                                <div className={`w-6 h-6 rounded-full ${fav.color}`}></div>
                                <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-wider">{fav.chef}</span>
                            </div>
                            <h5 className="font-headline font-bold text-lg mb-2">{fav.title}</h5>
                            <div className="flex items-center justify-between text-on-surface-variant text-sm">
                                <div className="flex items-center gap-1">
                                    <Star size={14} className="fill-primary text-primary" />
                                    {fav.rating}
                                </div>
                                <Heart size={18} className="cursor-pointer hover:text-primary transition-colors" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}