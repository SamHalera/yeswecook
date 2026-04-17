
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Challenge from '@/components/community/challenge';
import FeaturedStories from '@/components/community/featuredStories';
import Hero from '@/components/community/hero';
import RecentShares from '@/components/community/recentShares';
import TrendingSidebar from '@/components/community/trendingSidebar';
import { Newsletter } from '@/components/home/newsletterSection';

export default function App() {
    return (
        <div className="min-h-screen flex flex-col">

            <div className="flex-grow">
                <Hero />
                <FeaturedStories />
                <Challenge />

                <section className="max-w-screen-2xl mx-auto px-8 py-24 grid grid-cols-1 lg:grid-cols-12 gap-12">
                    <div className="lg:col-span-8">
                        <RecentShares />
                    </div>
                    <div className="lg:col-span-4">
                        <TrendingSidebar />
                    </div>
                </section>

                <Newsletter />
            </div>

        </div>
    );
}

