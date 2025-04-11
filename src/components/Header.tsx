
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
    setSolutionsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { title: 'Home', path: '/' },
    { title: 'About Us', path: '/about-us' },
    { 
      title: 'Solutions',
      path: '#',
      dropdown: [
        { title: 'Grains', path: '/grains' },
        { title: 'International Trade', path: '/international-trade' }
      ]
    },
    { title: 'Who We Serve', path: '/farmers' },
    { title: 'Contact Us', path: '/contact' }
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'bg-impexpo-darkblue shadow-md py-2' : 'bg-transparent py-4'
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <span className="text-xl font-bold text-white">
              <span className="text-impexpo-gold">IMPEXPO</span> GROUP
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              !link.dropdown ? (
                <Link
                  key={index}
                  to={link.path}
                  className={cn(
                    'nav-link',
                    isActive(link.path) && 'text-impexpo-gold'
                  )}
                >
                  {link.title}
                </Link>
              ) : (
                <div key={index} className="relative group">
                  <button
                    className="nav-link flex items-center space-x-1"
                    onClick={(e) => {
                      e.preventDefault();
                      setSolutionsOpen(!solutionsOpen);
                    }}
                  >
                    <span>{link.title}</span>
                    <ChevronDown className="h-4 w-4" />
                  </button>
                  <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-left">
                    <div className="py-1">
                      {link.dropdown.map((dropItem, idx) => (
                        <Link
                          key={idx}
                          to={dropItem.path}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-impexpo-darkblue"
                        >
                          {dropItem.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-impexpo-gold"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-impexpo-darkblue mt-4 rounded-lg animate-fade-in">
            <nav className="flex flex-col py-4">
              {navLinks.map((link, index) => (
                !link.dropdown ? (
                  <Link
                    key={index}
                    to={link.path}
                    className={cn(
                      'px-4 py-2 text-white hover:bg-impexpo-lightblue',
                      isActive(link.path) && 'text-impexpo-gold'
                    )}
                  >
                    {link.title}
                  </Link>
                ) : (
                  <div key={index} className="flex flex-col">
                    <button
                      onClick={() => setSolutionsOpen(!solutionsOpen)}
                      className="px-4 py-2 text-white flex justify-between items-center hover:bg-impexpo-lightblue"
                    >
                      <span>{link.title}</span>
                      <ChevronDown className={`h-4 w-4 transition-transform ${solutionsOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {solutionsOpen && (
                      <div className="ml-4 border-l-2 border-impexpo-gold pl-2">
                        {link.dropdown.map((dropItem, idx) => (
                          <Link
                            key={idx}
                            to={dropItem.path}
                            className="block px-4 py-2 text-white hover:bg-impexpo-lightblue"
                          >
                            {dropItem.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                )
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
