import { Unity } from "@/src/generated/prisma/enums";

const recipesHardCoded = [
    {
        title: "Warm Halloumi & Roasted Harvest Salad",
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDXuCE87W99uzmWJ5KEKtL47qfJoT_kL3SVCA9PC18XDU6etaRamHzs9mjiy7IFrhYB1yTvAPycKtN7eN84lgctoYEEAMNTiWfWmrFaN2cwgQfuxJ26UfoldxZNu3BDfIw4U2enlXOEU7AkwCb83DUjyS_4ZELqR10551Bh_AWXBBg524rorHOzTkS5k6unTbEKcUUyb_org9plZgwdvZj0cePtPmPo168HcEqTT9R5Q_JivHxjHuscQoeRwiyiAAiBbl_0JzqstA"
    },
    {
        title: "Citrus Cloud Lemon Tart",
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBDWQg67PLDyURDdtJuwBADXFDRqoR2r4RU_o6tnuZcmKXLD_vNF-eH9N0aus41lddyupvj08KIqN2kB8sfycGjsipmIczOt4XNfAcJ3kDXSvaV7ERoJ5P7hMxemfJdJgcJkQeD1tpxERrrhkHXmJDhtx4H-sKdxjQfAbPUm7Jy4LDwzl30PdMzXtl8kh-fYR1UI2LOk8_frGm0_LkkhcfOUyeqCCH5Lez_I-q4cT45O4NXaU6pI9-9TzYqa3aWqbuGhDj_-l1hFg"
    },
    {
        title: "Wild Mushroom Sage Ravioli",
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBEnBEtBYjNnpa-LGSy-VJsUH0ZVrLhbb0jPd-zNNsEV78f_LURS0OeaaCsv0ZENV9oRVMCFR6zBULEmebKZKcrg8DoV5exG1WvUtTkRV8vfjG-Xvwyo_2zVYjyUzKe_ajRFG7dfa3T3eVO6sXAvIo6ujEK0yo1I4Ye3v64m7tvLcnSOWQElQKJSgKrOZQOL0RBs7zAoSjSMH0HUsc8yNGJeWtBfoiVMs45dnRfYlEssYlH9ar9QRVfQMeNqDe4K0-kkIn0svvhkg"
    },
    {
        title: "Midnight Shakshuka",
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAgCvm94M8LQM5cFdMNKm_X-F7X8S8M25MAihP3dBgE3h8xP05CZoypJphHvnNL-mRbP2azMaaKFk5IMAHza2CrvKfyB-6VWDcZT9SncKcxev5OD7BKhxX19g1Qpc8FoLyYEs3CYCh2U-4W5rNkkmxNTHYPkQcq5Caja3BrlPgCg858H1GTyEGJBxBQdLI_1QM4JT2Icmi3mtVr8krb_z5C1sE_Jjx94qzRNPX6pPAQVc6sGbiikJDYuSRmVP7q2hQ6R-5eLdGruA",
    },
    {
        title: "Summer Basil Pizza",
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDo8R62WBKj5sE768RL2kjq48BTbB6NlG1-73LwPva7Ss8wEMBf3zpybhVXH7nIA140eLjMUv0Ky8hS6btieVABTDapMFKrJqn0YTIuPFsIqqDT3u00mDQdTpRbTO5m5kWfULKLSdFR41LY75T5HI8onLGv1POV04s4nx888cfaqhdJ113WS3ruKjxtOWsSraAjr1YLmH8KQ4ntztwvIC88pjRHv8YTyOx5HpPOLM_nqyDMmn5XFSBHftu-IuHwsErDDQB0BRJUxw",
    },
    {
        title: "Ultimate Zen Bowl",
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDJJnBlxq9CvY2arpZhAiMKrIXa28OtSoP4Wkajsoo_X5xpnbLn2nG8nutl7SNIvRCR8pIdbbqmo-id5OgPJ5WqzkRQ7QY0GeRXWWsjiBet7NUqB232XppeB1iyId_DuoK795OevYOIWskURRwL4J-u59dxJzijieUatx4r72Te5H5UNTE1QJOyyZADgob4YRGjIUl9K4uSxjTyECcjRfSLtZ_mRvrSknRFifAqVuB5z_SRYwYSoTW5MYSNq3GDEQ551jJBigWvUA",
    },
    {
        title: "Baked Morning Treats",
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBwVI1ABNe7Z17l9QLdewfXaA8kEXo_a_fy0x-VH-g8ODheaVJyMHHKBpbEq-v5_WdpWrRCqgbBoWs83-UbLqr85Ai95ZSqeAKe4vjlVmwXzUW4zsHI6MDFmn3cZYpPeP-WJyzNouM9SBuLIX7v1SMXPuzG0EHRG8caCYumf8UJIyQvBhmiHlEm5yFSebsxm9c9KxZ8bnUZj_BPWhgL_DWOL-RDE9b_LD4BnRQajPAvCcc9mbmrSEvKxv4gPY7AS-Lf8xfi4PmPvA",
    },
    {
        // id: 1,
        // author: "Elena R.",
        // time: "2 hours ago",
        // avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuA9YXl8SIMKiGhmiH2_Wf_0RINqq7bGXSPeQCr3nXSgON85C4MNg1WEq6I2-mE4jbLKJ9NH3260NDruko1MqS_Dcr7-LTvkWBRbA6HJMPe2SK-VsQLjh6CqzjJW_-Z4F99PeeSdaxII1DAIGRgPTAZfz1j6B0fk3zk8ZJiAoPnbT5s1DYLSLObiPfdJA82F4cZ9N97jpaXEiDU4t158NTG1NLyyOLaxoiAeUNLOzKAaV_tqIW7NjKmViWkuyFhXuAANtj7ERf5lpw",
        title: 'The "Everything" Winter Salad',
        // description: "Finally nailed the vinaigrette! This uses roasted chickpeas for crunch and a maple-tahini dressing that works on everything...",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAOf-rPR4qadULfTcpXWgdsvSKtOBiEpGaiplqOECM0qY_Y3qJbE1Qu2bHHOW1qGW8TPYiiGgLtftmEErWigAYVe3M0v3shH7ovJTLNqjtUQpwhkR38OAd0om1L9673aV8lydobKUBwXe4OlbIgX1xOZV2Sr3YJ5ujP6HriYJb4WdBOc0elmv3o0_YUe3v9NoQja1tq3ptmzgzRE5pdSaJvhf0kCR0si1jXazdXo4au6cCKd21PoS-Duu_QXXVpDb14cfvR8PZwXA",
        // tags: ["VEGAN", "15 MIN"],
        // likes: 243,
        // comments: 56
    },
    {
        // id: 2,
        // author: "Marcus Chen",
        // time: "5 hours ago",
        // avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuD7h9z193iasPDE9qfKzlyeLvYjE5rW-Lvbyos4N6hHiDIbp-hAyHfDFmTubspg_LXlCK_SqDcpXUVGVe-SI6tc8Dpj6I7PvdJZ1djSpv3OhKr11O_WVFJOjARxJTlyjEGGrvIlxSqyBTYd0qFIzOc6tyngpNRgC924uLlGFw6l8zhFNdsBIiNb2d-u0j4mcPIOGbGsanRMmpjEMN0VJdVL62HroOTDtPpHMrrA1X1Zc14N4fdefbtC-oGNMj3I4EIKVHMZkwEPWQ",
        title: "Cast Iron Seared Salmon with Herb Butter",
        // description: "My secret to crispy skin every time is patting the fish bone-dry and using a cold pan start. Trust the process!",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCKRERArmb6jYjoXkCW-Udgs5MYRZ3GG107t6zJt-IFj1i9LUFE2vY9FzQl0eYPkOwuMFfceJerLaG1sMAnuRE82HN14N5V56NdCG166DOSs_2x3qtWI0nK9t6NYIvK_I4sEf9l9036o7uxnJIJcxgzjcDXQkM71ikuShs6UpLC_d3k31NXXzBHn78FDFrqiUE_Snf7fqrO3DZyXCaJAV3IsKghHTn3mXChl4xMfzt6uVR6jm5pgol8FTm-9O4CqKw9pgjRpjwwtQ",
        // tags: ["KETO", "EASY"],
        // likes: "1.2k",
        // comments: 182
    }
]
export const unityLabels: Record<Unity, string> = {
    mg: "Milligramme",
    g: "Gramme",
    kg: "Kilogramme",
    oz: "Once",
    lb: "Livre",
    ml: "Millilitre",
    cl: "Centilitre",
    dl: "Décilitre",
    l: "Litre",
    tsp: "Cuillère à café",
    tbsp: "Cuillère à soupe",
    fl_oz: "Once liquide",
    cup: "Tasse",
    pt: "Pinte",
    qt: "Quart",
    gal: "Gallon",
    unit: "Unité (pièce)",
    dozen: "Douzaine",
    pinch: "Pincée",
    dash: "Trait",
    drop: "Goutte",
    slice: "Tranche",
    clove: "Gousse",
    bunch: "Botte",
    sprig: "Brin",
    leaf: "Feuille",
    can: "Boîte",
    packet: "Sachet",
    to_taste: "À volonté",
    as_needed: "Selon besoin",
};