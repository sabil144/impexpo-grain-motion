
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Wheat, Scale, BadgeCheck, Shield, DollarSign, ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';

const Grains = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const grainTypes = [
    {
      name: 'Wheat',
      image: 'https://images.unsplash.com/photo-1531945086322-64e2ffae14a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Specializing in hard and soft wheat varieties with diverse protein content for various end-uses.'
    },
    {
      name: 'Barley',
      image: 'https://images.unsplash.com/photo-1528712306091-ed0763094c98?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Trading malting and feed barley to breweries and livestock industries worldwide.'
    },
    {
      name: 'Corn',
      image: 'https://images.unsplash.com/photo-1584353781226-116aeaeb1a9a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Supplying high-quality corn for food processing, animal feed, and ethanol production.'
    },
    {
      name: 'Soybeans',
      image: 'https://images.unsplash.com/photo-1586201690183-9cb3616c7db7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Trading food-grade and industrial soybeans to meet diverse market demands.'
    }
  ];

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <Hero 
          title="Grain Trading Solutions" 
          subtitle="Global grain sourcing, trading, and distribution to meet the needs of diverse markets."
          backgroundImage="https://images.unsplash.com/photo-1530507629858-e3759358fe99?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
          size="md"
        />

        {/* Grain Overview */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="animate-fade-in">
                <h2 className="text-3xl font-bold mb-6">Global Grain Trading Expertise</h2>
                <p className="text-gray-700 mb-6">
                  Impexpo Group offers comprehensive grain trading solutions backed by deep industry knowledge and extensive global networks. We connect grain producers with processors and end-users worldwide, ensuring reliable supply chains and competitive pricing.
                </p>
                <p className="text-gray-700 mb-8">
                  Our team specializes in sourcing, trading, and distributing a wide variety of grains to meet the specific requirements of our diverse client base, from food manufacturers to animal feed producers.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center">
                    <Wheat className="h-5 w-5 text-impexpo-gold mr-2" />
                    <span>Premium Quality</span>
                  </div>
                  <div className="flex items-center">
                    <Scale className="h-5 w-5 text-impexpo-gold mr-2" />
                    <span>Competitive Pricing</span>
                  </div>
                  <div className="flex items-center">
                    <BadgeCheck className="h-5 w-5 text-impexpo-gold mr-2" />
                    <span>Quality Assured</span>
                  </div>
                  <div className="flex items-center">
                    <Shield className="h-5 w-5 text-impexpo-gold mr-2" />
                    <span>Secure Transactions</span>
                  </div>
                </div>
                <Link to="/contact" className="btn-primary inline-flex items-center">
                  Discuss Your Grain Needs <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>

              <div className="grid grid-cols-2 gap-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
                <img 
                  src="https://images.unsplash.com/photo-1626353530246-b9a2d1541e52?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Grain Storage" 
                  className="rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                />
                <img 
                  src="https://images.unsplash.com/photo-1505662695181-d4b60363d2a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Grain Harvest" 
                  className="rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                />
                <img 
                  src="https://images.unsplash.com/photo-1445116572660-236099ec97a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Grain Transport" 
                  className="rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                />
                <img 
                  src="https://images.unsplash.com/photo-1444858291040-58f756a3bdd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Grain Field" 
                  className="rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Grain Types */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
              <h2 className="text-3xl font-bold mb-4">Our Grain Portfolio</h2>
              <p className="text-gray-700">
                We trade a diverse range of grains to meet various industry requirements, each carefully sourced and quality-assured.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {grainTypes.map((grain, index) => (
                <div 
                  key={grain.name}
                  className="bg-white rounded-lg shadow-md overflow-hidden group animate-fade-in hover:-translate-y-1 transition-all duration-300" 
                  style={{ animationDelay: `${0.1 * (index + 1)}s` }}
                >
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={grain.image} 
                      alt={grain.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <Wheat className="h-5 w-5 text-impexpo-gold mr-2" />
                      <h3 className="text-xl font-bold">{grain.name}</h3>
                    </div>
                    <p className="text-gray-700 mb-4">{grain.description}</p>
                    <Link 
                      to="/contact" 
                      className="text-impexpo-darkblue font-medium hover:text-impexpo-gold transition-colors flex items-center"
                    >
                      Trade Inquiry <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Trading Process */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
              <h2 className="text-3xl font-bold mb-4">Our Trading Process</h2>
              <p className="text-gray-700">
                We've streamlined our grain trading process to ensure efficiency, transparency, and satisfaction for all parties involved.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4">
              <div className="relative animate-fade-in" style={{ animationDelay: '0.1s' }}>
                <div className="bg-white p-8 rounded-lg shadow-md relative z-10">
                  <div className="bg-impexpo-gold/10 w-12 h-12 rounded-full flex items-center justify-center mb-6">
                    <span className="text-impexpo-gold text-xl font-bold">1</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4">Consultation</h3>
                  <p className="text-gray-700">
                    We begin by understanding your specific grain requirements, including quantity, quality specifications, and delivery timeline.
                  </p>
                </div>
                <div className="hidden md:block absolute top-1/2 left-full -translate-y-1/2 w-12 h-2 bg-impexpo-gold/20 z-0"></div>
              </div>

              <div className="relative animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <div className="bg-white p-8 rounded-lg shadow-md relative z-10">
                  <div className="bg-impexpo-gold/10 w-12 h-12 rounded-full flex items-center justify-center mb-6">
                    <span className="text-impexpo-gold text-xl font-bold">2</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4">Trading Solution</h3>
                  <p className="text-gray-700">
                    Our experts develop a customized trading solution, sourcing the right grain products from our extensive network of suppliers.
                  </p>
                </div>
                <div className="hidden md:block absolute top-1/2 left-full -translate-y-1/2 w-12 h-2 bg-impexpo-gold/20 z-0"></div>
              </div>

              <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
                <div className="bg-white p-8 rounded-lg shadow-md">
                  <div className="bg-impexpo-gold/10 w-12 h-12 rounded-full flex items-center justify-center mb-6">
                    <span className="text-impexpo-gold text-xl font-bold">3</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4">Execution & Delivery</h3>
                  <p className="text-gray-700">
                    We manage the entire process from contract to delivery, handling logistics, quality control, and documentation.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <Link to="/contact" className="btn-primary inline-flex items-center">
                Start Your Trading Journey <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Pricing & Services */}
        <section className="py-16 bg-impexpo-darkblue text-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-1 animate-fade-in">
                <h2 className="text-3xl font-bold mb-6">Transparent Pricing & Services</h2>
                <p className="text-gray-200 mb-8">
                  We believe in competitive and transparent pricing for all our grain trading services, with flexible options to meet your business needs.
                </p>
                <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm animate-fade-in" style={{ animationDelay: '0.2s' }}>
                  <div className="flex items-center mb-4">
                    <DollarSign className="h-6 w-6 text-impexpo-gold mr-2" />
                    <h3 className="text-xl font-semibold">Pricing Advantages</h3>
                  </div>
                  <ul className="space-y-3 text-gray-200">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-impexpo-gold rounded-full mr-3"></span>
                      Competitive market rates
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-impexpo-gold rounded-full mr-3"></span>
                      Volume-based pricing options
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-impexpo-gold rounded-full mr-3"></span>
                      Forward contract opportunities
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-impexpo-gold rounded-full mr-3"></span>
                      Flexible payment terms
                    </li>
                  </ul>
                </div>
              </div>

              <div className="lg:col-span-2">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white/5 p-6 rounded-lg backdrop-blur-sm border border-white/10 animate-fade-in" style={{ animationDelay: '0.1s' }}>
                    <h3 className="text-xl font-bold mb-4">Contract Trading</h3>
                    <ul className="space-y-3 text-gray-200 mb-6">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-impexpo-gold rounded-full mr-3 mt-2"></span>
                        <span>Forward contracts with price flexibility</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-impexpo-gold rounded-full mr-3 mt-2"></span>
                        <span>Spot market trading for immediate needs</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-impexpo-gold rounded-full mr-3 mt-2"></span>
                        <span>Risk management strategies</span>
                      </li>
                    </ul>
                    <Link to="/contact" className="text-impexpo-gold hover:text-white transition-colors inline-flex items-center">
                      Request Pricing <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>

                  <div className="bg-white/5 p-6 rounded-lg backdrop-blur-sm border border-white/10 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                    <h3 className="text-xl font-bold mb-4">Storage Solutions</h3>
                    <ul className="space-y-3 text-gray-200 mb-6">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-impexpo-gold rounded-full mr-3 mt-2"></span>
                        <span>Short and long-term storage facilities</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-impexpo-gold rounded-full mr-3 mt-2"></span>
                        <span>Climate-controlled environment</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-impexpo-gold rounded-full mr-3 mt-2"></span>
                        <span>Quality preservation systems</span>
                      </li>
                    </ul>
                    <Link to="/contact" className="text-impexpo-gold hover:text-white transition-colors inline-flex items-center">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>

                  <div className="bg-white/5 p-6 rounded-lg backdrop-blur-sm border border-white/10 animate-fade-in" style={{ animationDelay: '0.3s' }}>
                    <h3 className="text-xl font-bold mb-4">Quality Control</h3>
                    <ul className="space-y-3 text-gray-200 mb-6">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-impexpo-gold rounded-full mr-3 mt-2"></span>
                        <span>Rigorous testing protocols</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-impexpo-gold rounded-full mr-3 mt-2"></span>
                        <span>International certification standards</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-impexpo-gold rounded-full mr-3 mt-2"></span>
                        <span>Transparent quality reporting</span>
                      </li>
                    </ul>
                    <Link to="/contact" className="text-impexpo-gold hover:text-white transition-colors inline-flex items-center">
                      Our Standards <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>

                  <div className="bg-white/5 p-6 rounded-lg backdrop-blur-sm border border-white/10 animate-fade-in" style={{ animationDelay: '0.4s' }}>
                    <h3 className="text-xl font-bold mb-4">Logistics Solutions</h3>
                    <ul className="space-y-3 text-gray-200 mb-6">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-impexpo-gold rounded-full mr-3 mt-2"></span>
                        <span>Domestic and international shipping</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-impexpo-gold rounded-full mr-3 mt-2"></span>
                        <span>Real-time shipment tracking</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-impexpo-gold rounded-full mr-3 mt-2"></span>
                        <span>Documentation management</span>
                      </li>
                    </ul>
                    <Link to="/contact" className="text-impexpo-gold hover:text-white transition-colors inline-flex items-center">
                      Logistics Details <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-4 animate-fade-in">Ready to Discuss Your Grain Trading Needs?</h2>
              <p className="text-xl text-gray-700 mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                Contact our grain trading specialists today to explore how Impexpo Group can support your business objectives.
              </p>
              <Link to="/contact" className="btn-primary inline-flex items-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
                Contact Our Team <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Grains;
