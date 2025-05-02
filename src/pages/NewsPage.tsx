import { useState } from 'react';
import HeroBanner from '../components/HeroBanner';
import NewsCard from '../components/NewsCard';
import { newsData } from '../data/newsData';

const NewsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  
  // Get unique categories from news data
  const categories = ['All', ...Array.from(new Set(newsData.map(news => news.category)))];
  
  // Filter news based on selected category
  const filteredNews = selectedCategory === 'All' 
    ? newsData 
    : newsData.filter(news => news.category === selectedCategory);

  return (
    <div>
      <HeroBanner 
        title="University News"
        subtitle="Stay updated with the latest news, events, and achievements from our university community"
        backgroundImage="https://images.pexels.com/photos/1370296/pexels-photo-1370296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />
      
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-[#0F3460] mb-6">Latest News</h2>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category 
                      ? 'bg-[#0F3460] text-white' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          
          {/* News Grid */}
          {filteredNews.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredNews.map((news) => (
                <NewsCard 
                  key={news.id}
                  title={news.title}
                  date={news.date}
                  excerpt={news.excerpt}
                  imageUrl={news.imageUrl}
                  category={news.category}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">No news articles found in this category.</p>
            </div>
          )}
          
          {/* Pagination (simplified for demo) */}
          <div className="mt-12 flex justify-center">
            <nav className="flex items-center space-x-2">
              <button className="px-3 py-1 rounded text-sm border border-gray-300 text-gray-700 hover:bg-gray-50">
                Previous
              </button>
              <button className="px-3 py-1 rounded text-sm bg-[#0F3460] text-white">
                1
              </button>
              <button className="px-3 py-1 rounded text-sm border border-gray-300 text-gray-700 hover:bg-gray-50">
                2
              </button>
              <button className="px-3 py-1 rounded text-sm border border-gray-300 text-gray-700 hover:bg-gray-50">
                3
              </button>
              <span className="text-gray-500">...</span>
              <button className="px-3 py-1 rounded text-sm border border-gray-300 text-gray-700 hover:bg-gray-50">
                Next
              </button>
            </nav>
          </div>
        </div>
      </section>
      
      {/* Newsletter Signup */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-2xl font-bold text-[#0F3460] mb-4 text-center">Subscribe to Our Newsletter</h3>
            <p className="text-gray-600 mb-6 text-center">
              Stay informed about the latest news, events, and opportunities at Dongshan University.
            </p>
            <form className="flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-grow px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0F3460]"
                required
              />
              <button 
                type="submit" 
                className="bg-[#0F3460] text-white font-semibold px-6 py-3 rounded-md hover:bg-[#0F3460]/90 transition-colors"
              >
                Subscribe
              </button>
            </form>
            <p className="text-sm text-gray-500 mt-4 text-center">
              We respect your privacy and will never share your information.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsPage;