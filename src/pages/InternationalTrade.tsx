import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Globe, Ship, FileText, ShieldCheck, ArrowRight, Building, Check, CircleDollarSign, Truck } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';

const InternationalTrade = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const regions = [
    { name: 'Asia Pacific', active: true },
    { name: 'Europe', active: true },
    { name: 'North America', active: true },
    { name: 'South America', active: true },
    { name: 'Middle East', active: true },
    { name: 'Africa', active: true }
  ];

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <Hero 
          title="International Trade Solutions" 
          subtitle="Connecting global markets with reliable and efficient grain trading services across continents."
          backgroundImage="https://images.unsplash.com/photo-1494412651409-8963ce7935a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
          size="md"
        />

        {/* Global Presence */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="animate-fade-in">
                <h2 className="text-3xl font-bold mb-6">Global Trade Network</h2>
                <p className="text-gray-700 mb-6">
                  Impexpo Group has established a robust international trade network spanning six continents, enabling seamless grain trading operations worldwide. Our strategically located offices and partnerships allow us to serve diverse markets efficiently.
                </p>
                <p className="text-gray-700 mb-8">
                  With decades of experience in navigating international regulations, logistics challenges, and cultural nuances, we provide reliable trade solutions that bridge global supply and demand gaps.
                </p>

                <div className="grid grid-cols-2 gap-y-4 mb-8">
                  {regions.map((region) => (
                    <div key={region.name} className="flex items-center">
                      <div className={`w-3 h-3 rounded-full mr-3 ${region.active ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                      <span>{region.name}</span>
                    </div>
                  ))}
                </div>

                <Link to="/contact" className="btn-primary inline-flex items-center">
                  Discuss Global Opportunities <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>

              <div className="relative animate-fade-in" style={{ animationDelay: '0.3s' }}>
                <img 
                  src="https://images.unsplash.com/photo-1566931295656-374c0557f85d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                  alt="Global Trade Map" 
                  className="rounded-lg shadow-lg w-full h-auto"
                />
                <div className="absolute -bottom-8 -right-8 bg-impexpo-gold p-6 rounded-lg shadow-lg hidden md:block">
                  <div className="text-white">
                    <p className="text-3xl font-bold mb-1">30+</p>
                    <p className="uppercase text-sm">Countries Served</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trade Services */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
              <h2 className="text-3xl font-bold mb-4">Our International Trade Services</h2>
              <p className="text-gray-700">
                We offer comprehensive international trade solutions designed to navigate the complexities of global grain markets efficiently.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group animate-fade-in" style={{ animationDelay: '0.1s' }}>
                <div className="bg-impexpo-gold/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4 text-impexpo-gold group-hover:bg-impexpo-gold group-hover:text-white transition-all duration-300">
                  <Ship size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3">Import & Export</h3>
                <p className="text-gray-700 mb-6">
                  Comprehensive import and export services including sourcing, negotiation, and delivery of grain commodities across international borders.
                </p>
                <Link to="/contact" className="text-impexpo-darkblue font-medium hover:text-impexpo-gold transition-colors flex items-center">
                  Learn More <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <div className="bg-impexpo-gold/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4 text-impexpo-gold group-hover:bg-impexpo-gold group-hover:text-white transition-all duration-300">
                  <FileText size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3">Trade Documentation</h3>
                <p className="text-gray-700 mb-6">
                  Expert handling of all international trade documentation, ensuring compliance with regulations and smooth customs clearance.
                </p>
                <Link to="/contact" className="text-impexpo-darkblue font-medium hover:text-impexpo-gold transition-colors flex items-center">
                  Learn More <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group animate-fade-in" style={{ animationDelay: '0.3s' }}>
                <div className="bg-impexpo-gold/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4 text-impexpo-gold group-hover:bg-impexpo-gold group-hover:text-white transition-all duration-300">
                  <ShieldCheck size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3">Regulatory Compliance</h3>
                <p className="text-gray-700 mb-6">
                  Navigation of complex international regulations, ensuring your grain shipments meet all legal and phytosanitary requirements.
                </p>
                <Link to="/contact" className="text-impexpo-darkblue font-medium hover:text-impexpo-gold transition-colors flex items-center">
                  Learn More <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Trade Process */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
              <h2 className="text-3xl font-bold mb-4">International Trade Process</h2>
              <p className="text-gray-700">
                Our streamlined approach to international grain trading ensures efficiency and transparency at every stage.
              </p>
            </div>

            <div className="relative">
              {/* Process Timeline (Desktop) */}
              <div className="hidden md:block absolute top-24 left-0 right-0 h-1 bg-gray-200"></div>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="relative animate-fade-in" style={{ animationDelay: '0.1s' }}>
                  <div className="md:absolute md:top-16 md:left-1/2 md:-translate-x-1/2 bg-impexpo-darkblue text-white w-12 h-12 rounded-full flex items-center justify-center z-10 mb-4 md:mb-0">
                    <span className="font-bold">01</span>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md mt-8">
                    <h3 className="text-lg font-bold mb-3">Market Analysis</h3>
                    <p className="text-gray-700">
                      Assessment of market conditions, price trends, and identifying optimal trading opportunities across global markets.
                    </p>
                  </div>
                </div>

                <div className="relative animate-fade-in" style={{ animationDelay: '0.2s' }}>
                  <div className="md:absolute md:top-16 md:left-1/2 md:-translate-x-1/2 bg-impexpo-darkblue text-white w-12 h-12 rounded-full flex items-center justify-center z-10 mb-4 md:mb-0">
                    <span className="font-bold">02</span>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md mt-8">
                    <h3 className="text-lg font-bold mb-3">Contract & Negotiation</h3>
                    <p className="text-gray-700">
                      Development of comprehensive trade agreements that protect interests while ensuring mutual benefit for all parties.
                    </p>
                  </div>
                </div>

                <div className="relative animate-fade-in" style={{ animationDelay: '0.3s' }}>
                  <div className="md:absolute md:top-16 md:left-1/2 md:-translate-x-1/2 bg-impexpo-darkblue text-white w-12 h-12 rounded-full flex items-center justify-center z-10 mb-4 md:mb-0">
                    <span className="font-bold">03</span>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md mt-8">
                    <h3 className="text-lg font-bold mb-3">Documentation & Compliance</h3>
                    <p className="text-gray-700">
                      Management of all required international trade documentation and ensuring regulatory compliance across jurisdictions.
                    </p>
                  </div>
                </div>

                <div className="relative animate-fade-in" style={{ animationDelay: '0.4s' }}>
                  <div className="md:absolute md:top-16 md:left-1/2 md:-translate-x-1/2 bg-impexpo-darkblue text-white w-12 h-12 rounded-full flex items-center justify-center z-10 mb-4 md:mb-0">
                    <span className="font-bold">04</span>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md mt-8">
                    <h3 className="text-lg font-bold mb-3">Logistics & Delivery</h3>
                    <p className="text-gray-700">
                      Coordination of international shipping, customs clearance, and final delivery to ensure timely and efficient transport.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-16 animate-fade-in" style={{ animationDelay: '0.5s' }}>
              <Link to="/contact" className="btn-primary inline-flex items-center">
                Start Your International Trade <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Market Advantages */}
        <section className="py-16 bg-impexpo-darkblue text-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
              <div className="lg:col-span-2 animate-fade-in">
                <h2 className="text-3xl font-bold mb-6">Our Global Market Advantages</h2>
                <p className="text-gray-200 mb-8">
                  Impexpo Group leverages its extensive international network and deep market expertise to provide exceptional value in global grain trading.
                </p>
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                  <div className="flex items-center mb-4">
                    <Globe className="h-6 w-6 text-impexpo-gold mr-3" />
                    <Check className="h-6 w-6 text-impexpo-gold mr-3" />
                    <h3 className="text-xl font-semibold">Key Market Statistics</h3>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="p-4">
                      <p className="text-3xl font-bold text-impexpo-gold">30+</p>
                      <p className="text-sm text-gray-300">Countries</p>
                    </div>
                    <div className="p-4">
                      <p className="text-3xl font-bold text-impexpo-gold">250K+</p>
                      <p className="text-sm text-gray-300">MT Annual Volume</p>
                    </div>
                    <div className="p-4">
                      <p className="text-3xl font-bold text-impexpo-gold">15+</p>
                      <p className="text-sm text-gray-300">Years Experience</p>
                    </div>
                    <div className="p-4">
                      <p className="text-3xl font-bold text-impexpo-gold">500+</p>
                      <p className="text-sm text-gray-300">Global Partners</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white/5 p-6 rounded-lg backdrop-blur-sm border border-white/10 animate-fade-in" style={{ animationDelay: '0.1s' }}>
                  <Building className="h-10 w-10 text-impexpo-gold mb-4" />
                  <h3 className="text-xl font-bold mb-3">Strategic Locations</h3>
                  <p className="text-gray-200">
                    Our offices and partners are strategically positioned in key agricultural and trading hubs worldwide, enabling efficient market access and logistics.
                  </p>
                </div>

                <div className="bg-white/5 p-6 rounded-lg backdrop-blur-sm border border-white/10 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                  <Globe className="h-10 w-10 text-impexpo-gold mb-4" />
                  <h3 className="text-xl font-bold mb-3">Market Intelligence</h3>
                  <p className="text-gray-200">
                    Real-time market insights and analysis from our global network, allowing informed decision-making and optimal trading strategies.
                  </p>
                </div>

                <div className="bg-white/5 p-6 rounded-lg backdrop-blur-sm border border-white/10 animate-fade-in" style={{ animationDelay: '0.3s' }}>
                  <CircleDollarSign className="h-10 w-10 text-impexpo-gold mb-4" />
                  <h3 className="text-xl font-bold mb-3">Financial Solutions</h3>
                  <p className="text-gray-200">
                    Flexible payment terms, trade financing options, and risk management strategies tailored to international trade requirements.
                  </p>
                </div>

                <div className="bg-white/5 p-6 rounded-lg backdrop-blur-sm border border-white/10 animate-fade-in" style={{ animationDelay: '0.4s' }}>
                  <Truck className="h-10 w-10 text-impexpo-gold mb-4" />
                  <h3 className="text-xl font-bold mb-3">Logistics Expertise</h3>
                  <p className="text-gray-200">
                    Seamless coordination of international shipping, customs clearance, and last-mile delivery across continents and trade routes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-4 animate-fade-in">Ready to Explore Global Trade Opportunities?</h2>
              <p className="text-xl text-gray-700 mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                Contact our international trade specialists today to discover how Impexpo Group can connect you to markets worldwide.
              </p>
              <Link to="/contact" className="btn-primary inline-flex items-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
                Connect With Our Team <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default InternationalTrade;
