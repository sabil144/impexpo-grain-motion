
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  title: string;
  subtitle?: string;
  buttonText?: string;
  buttonLink?: string;
  backgroundImage?: string;
  size?: 'sm' | 'md' | 'lg';
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  buttonText = 'Learn More',
  buttonLink = '/',
  backgroundImage = '/src/assets/hero-bg.jpg',
  size = 'md',
}) => {
  const getHeroHeight = () => {
    switch (size) {
      case 'sm':
        return 'min-h-[30vh]';
      case 'md':
        return 'min-h-[60vh]';
      case 'lg':
        return 'min-h-[80vh]';
      default:
        return 'min-h-[60vh]';
    }
  };

  return (
    <div
      className={`hero-section ${getHeroHeight()} flex items-center justify-center`}
      style={{
        backgroundImage: `linear-gradient(rgba(28, 62, 90, 0.7), rgba(28, 62, 90, 0.7)), url(${backgroundImage})`,
      }}
    >
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white animate-fade-in">
            {title}
          </h1>
          {subtitle && (
            <p className="text-xl md:text-2xl text-gray-200 mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              {subtitle}
            </p>
          )}
          {buttonText && (
            <Link
              to={buttonLink}
              className="inline-flex items-center btn-secondary animate-fade-in"
              style={{ animationDelay: '0.4s' }}
            >
              {buttonText} <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          )}

          <div className="absolute bottom-0 left-0 w-full">
            <svg
              viewBox="0 0 1440 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full"
            >
              <path
                d="M0 100H1440V0C1440 0 1144.06 100 720 100C295.94 100 0 0 0 0V100Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
