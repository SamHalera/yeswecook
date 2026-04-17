import { Filter, Search } from "lucide-react";
import { SetStateAction } from "react";

export default function FiltersComponent({ activeTab, setActiveTab, searchQuery, setSearchQuery }: {
    activeTab: string;
    setActiveTab: React.Dispatch<SetStateAction<'public' | 'private'>>;
    searchQuery: string;
    setSearchQuery: React.Dispatch<SetStateAction<string>>;
}) {
    return (<div className="flex flex-col md:flex-row justify-between items-center mb-10 space-y-6 md:space-y-0">
        <div className="inline-flex bg-surface-container-low p-1.5 rounded-xl shadow-inner">
            <button
                onClick={() => setActiveTab('public')}
                className={`px-8 py-2.5 rounded-lg font-bold transition-all font-label ${activeTab === 'public'
                    ? 'text-on-primary bg-primary-container shadow-sm'
                    : 'text-on-surface-variant hover:text-primary'
                    }`}
            >
                Public Recipes
            </button>
            <button
                onClick={() => setActiveTab('private')}
                className={`px-8 py-2.5 rounded-lg font-bold transition-all font-label ${activeTab === 'private'
                    ? 'text-on-primary bg-primary-container shadow-sm'
                    : 'text-on-surface-variant hover:text-primary'
                    }`}
            >
                Private Collection
            </button>
        </div>

        <div className="flex items-center space-x-4">
            <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant" size={20} />
                <input
                    type="text"
                    placeholder="Search my books..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="bg-surface-container-low border-none rounded-lg pl-10 pr-4 py-2.5 focus:ring-2 focus:ring-primary/20 w-64 font-label outline-none"
                />
            </div>
            <button className="bg-surface-container-low p-2.5 rounded-lg text-on-surface-variant hover:text-primary transition-colors">
                <Filter size={20} />
            </button>
        </div>
    </div>)
}