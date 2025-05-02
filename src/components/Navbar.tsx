import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'News', href: '/news' },
    { name: 'Admissions', href: '/admissions' },
    { name: 'About', href: '/about' },
  ];

  const languages = [
    { name: 'English', code: 'en' },
    { name: '中文', code: 'zh' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-md py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <div className="text-[#0F3460] font-bold text-xl md:text-2xl">
                <span>Dongshan</span>
                <span className="text-[#FFD700]"> University</span>
              </div>
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-base font-medium transition-colors duration-200 hover:text-[#0F3460] ${
                    location.pathname === item.href
                      ? 'text-[#0F3460] font-semibold'
                      : 'text-gray-700'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              
              <div className="relative">
                <button
                  className="flex items-center text-base font-medium text-gray-700 hover:text-[#0F3460]"
                  onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                >
                  <Globe size={18} className="mr-1" />
                  <span className="mr-1">EN</span>
                  <ChevronDown size={16} />
                </button>
                
                {isLanguageOpen && (
                  <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-md shadow-lg py-1">
                    {languages.map((language) => (
                      <a
                        key={language.code}
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={(e) => {
                          e.preventDefault();
                          setIsLanguageOpen(false);
                        }}
                      >
                        {language.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              className="text-gray-700 hover:text-[#0F3460]"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  location.pathname === item.href
                    ? 'text-[#0F3460] font-semibold'
                    : 'text-gray-700 hover:text-[#0F3460] hover:bg-gray-50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="px-3 py-2">
              <button
                className="flex items-center text-base font-medium text-gray-700 hover:text-[#0F3460]"
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
              >
                <Globe size={18} className="mr-1" />
                <span className="mr-1">EN</span>
                <ChevronDown size={16} />
              </button>
              
              {isLanguageOpen && (
                <div className="pl-7 mt-1 space-y-1">
                  {languages.map((language) => (
                    <a
                      key={language.code}
                      href="#"
                      className="block py-1 text-sm text-gray-700"
                      onClick={(e) => {
                        e.preventDefault();
                        setIsLanguageOpen(false);
                      }}
                    >
                      {language.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;