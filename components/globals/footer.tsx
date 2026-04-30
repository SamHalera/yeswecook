import { Globe, Share2 } from "lucide-react";

const year = new Date().getFullYear()
export function Footer() {
    return (
        <footer className="bg-surface-container-low w-full mt-20">
            <div className="flex flex-col md:flex-row justify-between items-center px-12 py-16 w-full max-w-7xl mx-auto">
                <div className="mb-8 md:mb-0 text-center md:text-left">
                    <div className="text-lg font-bold text-primary font-headline mb-4">YesWeCook</div>
                    <p className="text-on-surface-variant font-body text-sm">© {year} YesWeCook. The Living Cookbook.</p>
                </div>
                <div className="flex flex-wrap justify-center gap-8">
                    {['About Us', 'Privacy Policy', 'Terms of Service', 'Contact'].map((link) => (
                        <a key={link} className="text-on-surface-variant hover:text-primary transition-colors text-sm" href="#">{link}</a>
                    ))}
                </div>
                <div className="flex items-center space-x-6 mt-8 md:mt-0">
                    <Globe className="text-on-surface-variant cursor-pointer hover:text-primary transition-colors" size={20} />
                    <Share2 className="text-on-surface-variant cursor-pointer hover:text-primary transition-colors" size={20} />
                </div>
            </div>
        </footer>
    );
}