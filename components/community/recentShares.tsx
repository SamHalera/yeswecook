import { Heart, MessageCircle, Bookmark } from 'lucide-react';

const shares = [
    {
        id: 1,
        author: "Elena R.",
        time: "2 hours ago",
        avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuA9YXl8SIMKiGhmiH2_Wf_0RINqq7bGXSPeQCr3nXSgON85C4MNg1WEq6I2-mE4jbLKJ9NH3260NDruko1MqS_Dcr7-LTvkWBRbA6HJMPe2SK-VsQLjh6CqzjJW_-Z4F99PeeSdaxII1DAIGRgPTAZfz1j6B0fk3zk8ZJiAoPnbT5s1DYLSLObiPfdJA82F4cZ9N97jpaXEiDU4t158NTG1NLyyOLaxoiAeUNLOzKAaV_tqIW7NjKmViWkuyFhXuAANtj7ERf5lpw",
        title: 'The "Everything" Winter Salad',
        description: "Finally nailed the vinaigrette! This uses roasted chickpeas for crunch and a maple-tahini dressing that works on everything...",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAOf-rPR4qadULfTcpXWgdsvSKtOBiEpGaiplqOECM0qY_Y3qJbE1Qu2bHHOW1qGW8TPYiiGgLtftmEErWigAYVe3M0v3shH7ovJTLNqjtUQpwhkR38OAd0om1L9673aV8lydobKUBwXe4OlbIgX1xOZV2Sr3YJ5ujP6HriYJb4WdBOc0elmv3o0_YUe3v9NoQja1tq3ptmzgzRE5pdSaJvhf0kCR0si1jXazdXo4au6cCKd21PoS-Duu_QXXVpDb14cfvR8PZwXA",
        tags: ["VEGAN", "15 MIN"],
        likes: 243,
        comments: 56
    },
    {
        id: 2,
        author: "Marcus Chen",
        time: "5 hours ago",
        avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuD7h9z193iasPDE9qfKzlyeLvYjE5rW-Lvbyos4N6hHiDIbp-hAyHfDFmTubspg_LXlCK_SqDcpXUVGVe-SI6tc8Dpj6I7PvdJZ1djSpv3OhKr11O_WVFJOjARxJTlyjEGGrvIlxSqyBTYd0qFIzOc6tyngpNRgC924uLlGFw6l8zhFNdsBIiNb2d-u0j4mcPIOGbGsanRMmpjEMN0VJdVL62HroOTDtPpHMrrA1X1Zc14N4fdefbtC-oGNMj3I4EIKVHMZkwEPWQ",
        title: "Cast Iron Seared Salmon with Herb Butter",
        description: "My secret to crispy skin every time is patting the fish bone-dry and using a cold pan start. Trust the process!",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCKRERArmb6jYjoXkCW-Udgs5MYRZ3GG107t6zJt-IFj1i9LUFE2vY9FzQl0eYPkOwuMFfceJerLaG1sMAnuRE82HN14N5V56NdCG166DOSs_2x3qtWI0nK9t6NYIvK_I4sEf9l9036o7uxnJIJcxgzjcDXQkM71ikuShs6UpLC_d3k31NXXzBHn78FDFrqiUE_Snf7fqrO3DZyXCaJAV3IsKghHTn3mXChl4xMfzt6uVR6jm5pgol8FTm-9O4CqKw9pgjRpjwwtQ",
        tags: ["KETO", "EASY"],
        likes: "1.2k",
        comments: 182
    }
];

export default function RecentShares() {
    return (
        <div className="space-y-12">
            <div className="space-y-2">
                <h2 className="text-4xl font-black tracking-tight">Recent Shares</h2>
                <div className="h-1 w-20 bg-primary"></div>
            </div>
            <div className="space-y-8">
                {shares.map(share => (
                    <div key={share.id} className="bg-surface-container-lowest p-8 rounded-xl space-y-6 group cursor-pointer hover:shadow-xl hover:shadow-on-surface/5 transition-all">
                        <div className="flex items-center gap-4">
                            <img
                                alt={share.author}
                                className="w-12 h-12 rounded-full object-cover"
                                src={share.avatar}
                                referrerPolicy="no-referrer"
                            />
                            <div>
                                <h4 className="font-bold">{share.author}</h4>
                                <span className="text-xs text-stone-400">Shared {share.time}</span>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="md:col-span-1 rounded-lg overflow-hidden h-48">
                                <img
                                    alt={share.title}
                                    className="w-full h-full object-cover"
                                    src={share.image}
                                    referrerPolicy="no-referrer"
                                />
                            </div>
                            <div className="md:col-span-2 space-y-3">
                                <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                                    {share.title}
                                </h3>
                                <p className="text-stone-500 leading-relaxed">
                                    {share.description}
                                </p>
                                <div className="flex gap-2">
                                    {share.tags.map(tag => (
                                        <span key={tag} className="bg-secondary-fixed-dim/20 text-on-secondary-fixed px-3 py-1 rounded-full text-[10px] font-bold">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="pt-4 border-t border-stone-100 flex gap-6 text-stone-400">
                            <span className="flex items-center gap-1.5 text-sm font-semibold hover:text-primary">
                                <Heart className="w-5 h-5" /> {share.likes}
                            </span>
                            <span className="flex items-center gap-1.5 text-sm font-semibold hover:text-primary">
                                <MessageCircle className="w-5 h-5" /> {share.comments}
                            </span>
                            <span className="flex items-center gap-1.5 text-sm font-semibold hover:text-primary ml-auto">
                                <Bookmark className="w-5 h-5" /> Save
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
