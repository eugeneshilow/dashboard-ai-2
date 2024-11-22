'use client';

import { MarketChart } from './components/market-chart';
import { NewsFeed } from './components/news-feed';

export default function Home() {
  return (
    <div className="h-screen p-8 flex flex-col">
      <h1 className="text-2xl font-bold mb-4">AI Market Analysis Dashboard</h1>
      
      <div className="flex flex-1 gap-8 h-[calc(100vh-120px)]">
        {/* Left side - Chart */}
        <div className="flex-1">
          <MarketChart />
        </div>

        {/* Right side - News */}
        <div className="w-[400px] overflow-y-auto">
          <NewsFeed />
        </div>
      </div>
    </div>
  );
}
