import { useState, useEffect } from "react";
import axios from "axios";
import Section from "./Section";

const API_KEY = "ad409a5f75574ea38cb418fb049d7231";
const API_URL = `https://newsapi.org/v2/everything?q=cyber+attack&apiKey=${API_KEY}`;

const CyberAttackNews = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(API_URL);
        setNews(response.data.articles);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) {
    return <div className="text-center text-gray-600 py-5">Loading...</div>;
  }

  if (error) {
    return (
      <div className="text-center text-red-500 py-5">
        Error fetching news: {error.message}
      </div>
    );
  }

  return (
    <Section crosses>
      <div className="p-5 max-w-3xl mx-auto bg-n-8 font-sans bg-gray-100 rounded-lg shadow-lg">
        <h2 className="text-2xl text-center text-gray-800 mb-6">
          Latest Cyber Attack News
        </h2>
        <ul className="space-y-6">
          {news.map((article, index) => (
            <li key={index} className="border-b border-gray-300 pb-6">
              <h3 className="text-xl text-blue-600 hover:text-blue-800">
                {article.title}
              </h3>
              <p className="text-gray-700 mt-2">{article.description}</p>
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline mt-2 block"
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
    </Section>
  );
};

export default CyberAttackNews;
