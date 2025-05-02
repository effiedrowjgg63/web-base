import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0F3460] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Dongshan University</h3>
            <p className="text-gray-300 mb-4">
              Excellence in Education, Research and Innovation since 1985.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-[#FFD700] transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-[#FFD700] transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white hover:text-[#FFD700] transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-[#FFD700] transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/news" className="text-gray-300 hover:text-white transition-colors">News</Link>
              </li>
              <li>
                <Link to="/admissions" className="text-gray-300 hover:text-white transition-colors">Admissions</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Faculty Portal</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Student Portal</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Library</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Research</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Academic Calendar</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Campus Map</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Career Services</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin size={20} className="mr-2 mt-1 flex-shrink-0" />
                <p className="text-gray-300">123 University Avenue, Dongshan District, Kyrgyzstan</p>
              </div>
              <div className="flex items-center">
                <Phone size={20} className="mr-2 flex-shrink-0" />
                <p className="text-gray-300">+86 123 4567 8910</p>
              </div>
              <div className="flex items-center">
                <Mail size={20} className="mr-2 flex-shrink-0" />
                <p className="text-gray-300">info@dongshan.edu.cn</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center md:flex md:justify-between md:text-left">
          <p className="text-gray-400">© {new Date().getFullYear()} Dongshan University of Technology. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white transition-colors mx-2">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors mx-2">Terms of Use</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors mx-2">Site Map</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;