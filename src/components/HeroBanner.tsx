import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface HeroBannerProps {
  title: string;
  subtitle: string;
  buttonText?: string;
  buttonLink?: string;
  backgroundImage: string;
}

const HeroBanner = ({
  title,
  subtitle,
  buttonText,
  buttonLink,
  backgroundImage,
}: HeroBannerProps) => {
  return (
    <div 
      className="relative h-[70vh] bg-cover bg-center flex items-center" 
      style={{ 
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImage})` 
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#0F3460]/70 to-transparent"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 animate-fade-in">
            {title}
          </h1>
          <p className="text-xl sm:text-2xl text-white/90 mb-8 animate-fade-in-delay">
            {subtitle}
          </p>
          {buttonText && buttonLink && (
            <Link 
              to={buttonLink} 
              className="inline-flex items-center bg-[#FFD700] text-[#0F3460] font-semibold px-6 py-3 rounded-md hover:bg-[#FFD700]/90 transition-colors animate-fade-in-delay-2"
            >
              {buttonText}
              <ArrowRight size={16} className="ml-2" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;