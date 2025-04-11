
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
  delay?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon,
  link,
  delay = '0s'
}) => {
  return (
    <div 
      className="service-card p-6 h-full flex flex-col animate-fade-in relative group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
      style={{ animationDelay: delay }}
    >
      <div className="bg-impexpo-gold/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4 text-impexpo-gold group-hover:bg-impexpo-gold group-hover:text-white transition-all duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600 mb-6 flex-grow">{description}</p>
      <Link 
        to={link} 
        className="mt-auto inline-flex items-center text-impexpo-darkblue hover:text-impexpo-gold transition-colors"
      >
        Learn More <ArrowRight className="ml-2 h-4 w-4" />
      </Link>
      
      {/* Hover Animation Element */}
      <div className="absolute -bottom-1 left-0 h-1 w-0 bg-impexpo-gold transition-all duration-300 group-hover:w-full"></div>
    </div>
  );
};

export default ServiceCard;
