
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Wheat, GlobeSearch, Users, Building2, TrendingUp, ShieldCheck } from 'lucide-react';
import Hero from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <Hero 
          title="Connecting Farmers to Global Markets" 
          subtitle="Impexpo Group is a leading grain trading company with decades of experience and a global presence."
          buttonText="Discover Our Services"
          buttonLink="/grains"
          size="lg"
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
              />
              <ServiceCard 
                title="International Trade" 
                description="Benefit from our global network to export and import grains efficiently across international markets."
                icon={<GlobeSearch size={32} />}
                link="/international-trade"
                delay="0.2s"
              />
              <ServiceCard 
                title="Farmer Services" 
                description="Specialized support for farmers including market insights, logistics, and financial solutions."
                icon={<Users size={32} />}
                link="/farmers"
                delay="0.3s"
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

        {/* CTA Section */}
        <section className="py-16 bg-impexpo-darkblue text-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="animate-fade-in">
                <h2 className="text-3xl font-bold mb-4">Ready to Start Trading?</h2>
                <p className="text-gray-200 mb-8">
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
              <div className="relative h-64 md:h-auto animate-fade-in" style={{ animationDelay: '0.3s' }}>
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
