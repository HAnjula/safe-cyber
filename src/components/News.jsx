import { useState, useEffect } from "react";
import axios from "axios";
import Section from "./Section";

const API_KEY = "ad409a5f75574ea38cb418fb049d7231";
const API_URL = `https://newsapi.org/v2/everything?q=cyber+attack&apiKey=${API_KEY}`;

const CyberAttackNews = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [visibleNews, setVisibleNews] = useState(10);
  const [latest, setLatest] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(API_URL);
        setNews(response.data.articles);
        setLoading(false);

        // Identify the latest article
        const latestArticle = response.data.articles[0];
        setLatest(latestArticle);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchNews();

    // Polling for live updates every 5 minutes
    const intervalId = setInterval(fetchNews, 300000);

    return () => clearInterval(intervalId);
  }, []);

  const handleLoadMore = () => {
    setVisibleNews(visibleNews + 10);
  };

  if (loading) {
    return <div className="text-center text-gray-500 py-5">Loading...</div>;
  }

  if (error) {
    return (
      <div className="text-center text-red-500 py-5">
        Error fetching news: {error.message}
      </div>
    );
  }

  return (
    <Section>
      <style>
        {`
          .blinking-light {
            height: 12px;
            width: 12px;
            background-color: red;
            border-radius: 50%;
            display: inline-block;
            animation: blink 1s infinite;
            box-shadow: 0 0 8px rgba(255, 0, 0, 0.8);
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            right: -20px;
          }
          @keyframes blink {
            0% { opacity: 1; }
            50% { opacity: 0; }
            100% { opacity: 1; }
          }
          .news-title:hover {
            color: #4a4a4a; /* Darker gray */
          }
        `}
      </style>
      <div className="relative p-5 max-w-3xl mx-auto bg-gray-800 bg-opacity-50 font-sans rounded-lg shadow-lg">
        <div className="w-auto h-auto flex items-start justify-center">
          <h2 className="text-2xl text-center text-white mb-6 relative">
            Latest Cyber Attack News
            {latest && <span className="blinking-light"></span>}
          </h2>
        </div>
        <div className="h-96 overflow-y-scroll bg-gray-700 p-4 rounded-lg">
          <ul className="space-y-4">
            {news.slice(0, visibleNews).map((article, index) => (
              <li key={index} className="border-b border-gray-600 pb-4">
                <h3 className="text-xl text-gray-300 hover:text-gray-100 news-title">
                  {article.title}
                </h3>
                <p className="text-gray-400 mt-2">{article.description}</p>
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline mt-2 block"
                >
                  Read more
                </a>
                <time className="text-gray-500 text-sm mt-2 block">
                  Published on: {new Date(article.publishedAt).toLocaleString()}
                </time>
              </li>
            ))}
          </ul>
        </div>
        {visibleNews < news.length && (
          <div className="text-center mt-6">
            <button
              onClick={handleLoadMore}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
            >
              Load More News
            </button>
          </div>
        )}
      </div>
    </Section>
  );
};

export default CyberAttackNews;
