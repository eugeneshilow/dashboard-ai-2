import { aiNews } from '../data/news-data';

export function NewsFeed() {
  return (
    <div className="latest-news">
      <h2 className="text-xl font-bold mb-4">Последние новости ИИ</h2>
      {aiNews.map((news, index) => (
        <div key={index} className="mb-6">
          <div className="flex justify-between items-start">
            <h3 className="font-semibold">{news.title}</h3>
            <span className="text-sm text-gray-500">{news.date}</span>
          </div>
          <ul className="mt-2 text-sm">
            {news.points.map((point, idx) => (
              <li key={idx} className="mb-1">• {point}</li>
            ))}
          </ul>
          <p className="text-sm text-gray-500 mt-1">Источник: {news.source}</p>
        </div>
      ))}
    </div>
  );
} 