
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
  delay?: string;
  active?: boolean;
  image?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon,
  link,
  delay = '0s',
  active = false,
  image
}) => {
  return (
    <div 
      className={`service-card p-6 h-full flex flex-col animate-fade-in relative group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 ${active ? 'border-l-4 border-l-red-500' : ''}`}
      style={{ animationDelay: delay }}
    >
      {image && (
        <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>
      )}
      <div className={`${active ? 'bg-red-500 text-white' : 'bg-impexpo-gold/10 text-impexpo-gold group-hover:bg-impexpo-gold group-hover:text-white'} p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4 transition-all duration-300 relative z-10`}>
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 relative z-10">{title}</h3>
      <p className="text-gray-600 mb-6 flex-grow relative z-10">{description}</p>
      <Link 
        to={link} 
        className={`mt-auto inline-flex items-center ${active ? 'text-red-500 hover:text-red-700' : 'text-impexpo-darkblue hover:text-impexpo-gold'} transition-colors relative z-10 group`}
      >
        Learn More <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
      </Link>
      
      {/* Enhanced Hover Animation Elements */}
      <div className={`absolute -bottom-1 left-0 h-1 w-0 ${active ? 'bg-red-500' : 'bg-impexpo-gold'} transition-all duration-300 group-hover:w-full`}></div>
      <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
      <div className="absolute top-0 left-0 w-full h-0 bg-gradient-to-b from-impexpo-gold/5 to-transparent group-hover:h-24 transition-all duration-300"></div>
    </div>
  );
};

export default ServiceCard;
