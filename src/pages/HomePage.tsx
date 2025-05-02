import { Link } from 'react-router-dom';
import { Users, GraduationCap, BookOpen, Globe, Award, ChevronRight, Building2, Flame } from 'lucide-react';
import HeroBanner from '../components/HeroBanner';
import StatCard from '../components/StatCard';
import NewsCard from '../components/NewsCard';
import { universityInfo, universityStats } from '../data/universityData';
import { newsData } from '../data/newsData';

const HomePage = () => {
  // Featured news (most recent 3)
  const featuredNews = newsData.slice(0, 3);

  return (
    <div>
      <HeroBanner 
        title={universityInfo.nameEn}
        subtitle="Excellence in Education, Research and Innovation"
        buttonText="Explore Admissions"
        buttonLink="/admissions"
        backgroundImage="https://images.pexels.com/photos/207691/pexels-photo-207691.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />
      
      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-[#0F3460] mb-4">{universityInfo.name}</h2>
            <p className="text-xl text-gray-600 mb-8">
              {universityInfo.introduction}
            </p>
            <Link 
              to="/about" 
              className="inline-flex items-center text-[#0F3460] font-semibold hover:text-[#FFD700] transition-colors"
            >
              Learn more about our university
              <ChevronRight size={16} className="ml-1" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Key Statistics */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-[#0F3460] mb-12">University at a Glance</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard 
              value={universityStats.students}
              label="Students"
              icon={<Users size={36} />}
            />
            <StatCard 
              value={universityStats.faculty}
              label="Faculty Members"
              icon={<GraduationCap size={36} />}
            />
            <StatCard 
              value={universityStats.academicPrograms}
              label="Academic Programs"
              icon={<BookOpen size={36} />}
            />
            <StatCard 
              value={universityStats.partnerships}
              label="Global Partnerships"
              icon={<Globe size={36} />}
            />
          </div>
        </div>
      </section>
      
      {/* Featured Programs */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-[#0F3460] mb-12">Featured Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow duration-300">
              <div className="text-[#0F3460] mb-4">
                <Building2 size={36} />
              </div>
              <h3 className="text-xl font-bold text-[#0F3460] mb-2">Engineering</h3>
              <p className="text-gray-600 mb-4">
                World-class engineering education with state-of-the-art facilities and industry collaborations.
              </p>
              <a href="#" className="text-[#0F3460] font-medium hover:text-[#FFD700] transition-colors">
                Explore Programs →
              </a>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow duration-300">
              <div className="text-[#0F3460] mb-4">
                <Flame size={36} />
              </div>
              <h3 className="text-xl font-bold text-[#0F3460] mb-2">Computer Science</h3>
              <p className="text-gray-600 mb-4">
                Cutting-edge curriculum covering AI, machine learning, data science, and software engineering.
              </p>
              <a href="#" className="text-[#0F3460] font-medium hover:text-[#FFD700] transition-colors">
                Explore Programs →
              </a>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow duration-300">
              <div className="text-[#0F3460] mb-4">
                <Award size={36} />
              </div>
              <h3 className="text-xl font-bold text-[#0F3460] mb-2">Business & Economics</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive business education with focus on entrepreneurship and global economics.
              </p>
              <a href="#" className="text-[#0F3460] font-medium hover:text-[#FFD700] transition-colors">
                Explore Programs →
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* Latest News */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold text-[#0F3460]">Latest News</h2>
            <Link 
              to="/news" 
              className="inline-flex items-center text-[#0F3460] font-semibold hover:text-[#FFD700] transition-colors"
            >
              View all news
              <ChevronRight size={16} className="ml-1" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredNews.map((news) => (
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
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-12 bg-[#0F3460] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to start your journey?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join our vibrant community of scholars, innovators, and future leaders at Dongshan University.
          </p>
          <div className="space-x-4">
            <Link 
              to="/admissions" 
              className="inline-block bg-[#FFD700] text-[#0F3460] font-semibold px-6 py-3 rounded-md hover:bg-[#FFD700]/90 transition-colors"
            >
              Apply Now
            </Link>
            <Link 
              to="/about" 
              className="inline-block bg-transparent border border-white text-white font-semibold px-6 py-3 rounded-md hover:bg-white/10 transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;