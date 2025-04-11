
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Wheat, Globe, Search, Users, Building2, TrendingUp, ShieldCheck } from 'lucide-react';
import Hero from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Updated products list
  const products = [
    { 
      name: "Canola Seed", 
      description: "High-quality canola seeds for premium oil production",
      image: "https://images.unsplash.com/photo-1471194402529-8e0f5a675de6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: <Wheat size={32} /> 
    },
    { 
      name: "Wheat", 
      description: "Premium milling and feed wheat varieties",
      image: "https://images.unsplash.com/photo-1530272911622-485710a2d805?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: <Wheat size={32} /> 
    },
    { 
      name: "Lentils", 
      description: "Red and green lentils for global markets",
      image: "https://images.unsplash.com/photo-1611078489935-0cb964de46d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: <Wheat size={32} /> 
    },
    { 
      name: "Barley", 
      description: "Malting and feed barley varieties",
      image: "https://images.unsplash.com/photo-1559177244-a83e9c37ebb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: <Wheat size={32} /> 
    },
    { 
      name: "Sorghum", 
      description: "High-quality sorghum for food and feed",
      image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: <Wheat size={32} /> 
    },
    { 
      name: "Mung Beans", 
      description: "Export-grade mung beans for Asian markets",
      image: "https://images.unsplash.com/photo-1611071548212-58cc5bec1c15?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: <Wheat size={32} /> 
    },
    { 
      name: "Chickpeas", 
      description: "Desi and Kabuli chickpea varieties",
      image: "https://images.unsplash.com/photo-1515543904379-3d757afe72e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: <Wheat size={32} /> 
    },
    { 
      name: "Kaspa Peas", 
      description: "Premium Kaspa field peas for export markets",
      image: "https://images.unsplash.com/photo-1563114773-84221bd62daa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: <Wheat size={32} /> 
    }
  ];

  return (
    <>
      <Header />
      <main>
        {/* Hero Section - Updated with agricultural background */}
        <Hero 
          title="Connecting Farmers to Global Markets" 
          subtitle="Impexpo Group is a leading grain trading company with decades of experience and a global presence."
          buttonText="Discover Our Services"
          buttonLink="/grains"
          size="lg"
          backgroundImage="https://images.unsplash.com/photo-1472152083436-a6eede6efad9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
        />

        {/* About Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div className="animate-fade-in">
                <h2 className="text-3xl font-bold mb-6">Trusted Grain Trading Experts Since 2005</h2>
                <p className="text-gray-700 mb-6">
                  At Impexpo Group, we understand the global grain market and have built trusted relationships with farmers, traders, and processors worldwide. Our expertise lies in connecting suppliers with buyers, ensuring quality products reach their destination efficiently.
                </p>
                <p className="text-gray-700 mb-8">
                  With our extensive network and deep industry knowledge, we provide valuable insights and reliable services to all our partners in the agricultural supply chain.
                </p>
                <Link to="/about-us" className="btn-primary inline-flex items-center">
                  About Our Company <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                  alt="Grain Silo" 
                  className="rounded-lg shadow-xl w-full h-auto animate-fade-in"
                  style={{ animationDelay: '0.2s' }} 
                />
                <div className="absolute -bottom-8 -right-8 bg-impexpo-gold p-6 rounded-lg shadow-lg hidden md:block animate-fade-in" style={{ animationDelay: '0.4s' }}>
                  <div className="text-white">
                    <p className="text-3xl font-bold mb-1">15+</p>
                    <p className="uppercase text-sm">Years of Excellence</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Products Section with Carousel */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Our Products</h2>
              <p className="text-gray-700">
                We trade a diverse range of high-quality grains and agricultural products to meet global demand.
              </p>
            </div>

            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full max-w-5xl mx-auto"
            >
              <CarouselContent>
                {products.map((product, index) => (
                  <CarouselItem key={index} className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                    <div className="p-1 h-full">
                      <div className="bg-white rounded-lg overflow-hidden shadow-md h-full flex flex-col group hover:-translate-y-1 transition-all duration-300">
                        <div className="h-40 overflow-hidden relative">
                          <img 
                            src={product.image} 
                            alt={product.name} 
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                          />
                          <div className="absolute inset-0 bg-impexpo-darkblue/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="bg-white p-3 rounded-full">
                              {product.icon}
                            </div>
                          </div>
                        </div>
                        <div className="p-4 flex-grow">
                          <h3 className="font-bold mb-2">{product.name}</h3>
                          <p className="text-sm text-gray-600">{product.description}</p>
                        </div>
                        <div className="px-4 pb-4">
                          <Link 
                            to="/grains" 
                            className="text-impexpo-darkblue hover:text-impexpo-gold transition-colors text-sm flex items-center"
                          >
                            Learn More <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center mt-6">
                <CarouselPrevious className="relative static mr-2 translate-y-0 left-0" />
                <CarouselNext className="relative static ml-2 translate-y-0 right-0" />
              </div>
            </Carousel>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Our Services</h2>
              <p className="text-gray-700">
                We offer comprehensive solutions for grain trading, international exports, and agricultural business support.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <ServiceCard 
                title="Grain Trading" 
                description="Access our comprehensive grain trading platform connecting farmers with buyers domestically and internationally."
                icon={<Wheat size={32} />}
                link="/grains"
                delay="0.1s"
                image="https://images.unsplash.com/photo-1568465212432-e1f4efa244c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              />
              <ServiceCard 
                title="International Trade" 
                description="Benefit from our global network to export and import grains efficiently across international markets."
                icon={<Globe size={32} />}
                link="/international-trade"
                delay="0.2s"
                image="https://images.unsplash.com/photo-1577018095779-430e4284c0d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              />
              <ServiceCard 
                title="Farmer Services" 
                description="Specialized support for farmers including market insights, logistics, and financial solutions."
                icon={<Users size={32} />}
                link="/farmers"
                delay="0.3s"
                image="https://images.unsplash.com/photo-1576063865433-109029707eeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              />
            </div>

            <div className="text-center mt-12">
              <Link to="/about-us" className="btn-primary inline-flex items-center">
                View All Services <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
              <h2 className="text-3xl font-bold mb-4">Why Choose Impexpo Group</h2>
              <p className="text-gray-700">
                Our commitment to excellence, quality, and reliability has made us a trusted partner in the global grain trade industry.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow animate-fade-in" style={{ animationDelay: '0.1s' }}>
                <div className="bg-impexpo-gold/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4 text-impexpo-gold">
                  <Building2 size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3">Global Presence</h3>
                <p className="text-gray-600">
                  With operations in key agricultural regions and trading hubs worldwide, we offer truly global market access.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <div className="bg-impexpo-gold/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4 text-impexpo-gold">
                  <TrendingUp size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3">Market Expertise</h3>
                <p className="text-gray-600">
                  Our team of specialists continuously monitors market trends to provide timely insights and competitive pricing.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow animate-fade-in" style={{ animationDelay: '0.3s' }}>
                <div className="bg-impexpo-gold/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4 text-impexpo-gold">
                  <ShieldCheck size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3">Quality Assurance</h3>
                <p className="text-gray-600">
                  We maintain strict quality control measures throughout the supply chain, ensuring product integrity at every step.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section - Reduced height */}
        <section className="py-10 bg-impexpo-darkblue text-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="animate-fade-in">
                <h2 className="text-2xl font-bold mb-4">Ready to Start Trading?</h2>
                <p className="text-gray-200 mb-6">
                  Connect with our experts to discover how Impexpo Group can help your business thrive in the global grain market.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link to="/contact" className="btn-secondary">
                    Contact Us
                  </Link>
                  <Link to="/farmers" className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-md transition-all duration-300 hover:bg-white hover:text-impexpo-darkblue">
                    Learn About Our Process
                  </Link>
                </div>
              </div>
              <div className="relative h-48 md:h-60 animate-fade-in" style={{ animationDelay: '0.3s' }}>
                <img 
                  src="https://images.unsplash.com/photo-1615811361523-6bd03d7748e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                  alt="Grain Field" 
                  className="rounded-lg w-full h-full object-cover animate-grain-wave"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Index;
