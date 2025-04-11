
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-impexpo-darkblue text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <h3 className="text-xl font-bold mb-4 text-white">IMPEXPO GROUP <span className="text-impexpo-gold">PTY LTD</span></h3>
            <p className="text-gray-300 mb-4">
              A leading grain trading company with extensive global reach, committed to 
              connecting farmers and markets worldwide.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-impexpo-gold transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-impexpo-gold transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-impexpo-gold transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-impexpo-gold transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h4 className="text-lg font-bold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-impexpo-gold transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about-us" className="text-gray-300 hover:text-impexpo-gold transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/grains" className="text-gray-300 hover:text-impexpo-gold transition-colors">Grains</Link>
              </li>
              <li>
                <Link to="/international-trade" className="text-gray-300 hover:text-impexpo-gold transition-colors">International Trade</Link>
              </li>
              <li>
                <Link to="/farmers" className="text-gray-300 hover:text-impexpo-gold transition-colors">Who We Serve</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-impexpo-gold transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <h4 className="text-lg font-bold mb-4 text-white">Our Services</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/grains" className="text-gray-300 hover:text-impexpo-gold transition-colors">Grain Trading</Link>
              </li>
              <li>
                <Link to="/international-trade" className="text-gray-300 hover:text-impexpo-gold transition-colors">Export & Import</Link>
              </li>
              <li>
                <Link to="/grains" className="text-gray-300 hover:text-impexpo-gold transition-colors">Grain Storage</Link>
              </li>
              <li>
                <Link to="/grains" className="text-gray-300 hover:text-impexpo-gold transition-colors">Logistics Solutions</Link>
              </li>
              <li>
                <Link to="/farmers" className="text-gray-300 hover:text-impexpo-gold transition-colors">Agricultural Consulting</Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <h4 className="text-lg font-bold mb-4 text-white">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-3 text-impexpo-gold flex-shrink-0" size={20} />
                <span className="text-gray-300">123 Grain Avenue, Melbourne<br />Victoria 3000, Australia</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-3 text-impexpo-gold flex-shrink-0" size={20} />
                <span className="text-gray-300">+61 3 1234 5678</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-3 text-impexpo-gold flex-shrink-0" size={20} />
                <span className="text-gray-300">info@impexpogroup.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Impexpo Group Pty Ltd. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-gray-400 text-sm hover:text-impexpo-gold transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="text-gray-400 text-sm hover:text-impexpo-gold transition-colors">Terms & Conditions</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
