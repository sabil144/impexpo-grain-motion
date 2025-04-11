
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Wheat, TrendingUp, Truck, PiggyBank, BarChartBig, ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';

const Farmers = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <Hero 
          title="Who We Serve: Farmers" 
          subtitle="Supporting the agricultural community with innovative solutions and reliable partnerships."
          size="md"
          backgroundImage="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
        />

        {/* Farmer Benefits Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
              <h2 className="text-3xl font-bold mb-4">How We Support Farmers</h2>
              <p className="text-gray-700">
                At Impexpo Group, we understand the unique challenges faced by farmers and provide tailored solutions to help you succeed in today's competitive market.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
                <img 
                  src="https://images.unsplash.com/photo-1595914228888-d7bbba943a36?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                  alt="Farmer checking crops" 
                  className="rounded-lg shadow-lg w-full h-80 object-cover mb-8"
                />
                <h3 className="text-2xl font-bold mb-4">Fair Pricing & Market Access</h3>
                <p className="text-gray-700 mb-6">
                  We offer competitive prices for your grain and provide direct access to domestic and international markets. Our extensive network of buyers ensures you get the best value for your harvest.
                </p>
                <div className="flex flex-col space-y-4">
                  <div className="flex items-start">
                    <div className="bg-impexpo-gold/10 p-2 rounded-full flex-shrink-0 mr-4">
                      <Wheat className="h-5 w-5 text-impexpo-gold" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Multiple Grain Varieties</h4>
                      <p className="text-gray-600">We trade all major grains including wheat, barley, corn, and specialty crops</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-impexpo-gold/10 p-2 rounded-full flex-shrink-0 mr-4">
                      <TrendingUp className="h-5 w-5 text-impexpo-gold" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Market Insights</h4>
                      <p className="text-gray-600">Regular updates on market trends and pricing forecasts</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
                <img 
                  src="https://images.unsplash.com/photo-1625246333195-78d73c5207fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                  alt="Grain delivery" 
                  className="rounded-lg shadow-lg w-full h-80 object-cover mb-8"
                />
                <h3 className="text-2xl font-bold mb-4">Logistics & Support Services</h3>
                <p className="text-gray-700 mb-6">
                  We handle the complex logistics of transporting your grain from farm to market efficiently and cost-effectively. Our team manages the entire process, allowing you to focus on what you do best.
                </p>
                <div className="flex flex-col space-y-4">
                  <div className="flex items-start">
                    <div className="bg-impexpo-gold/10 p-2 rounded-full flex-shrink-0 mr-4">
                      <Truck className="h-5 w-5 text-impexpo-gold" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Transportation Solutions</h4>
                      <p className="text-gray-600">Coordinated pickup and delivery services with flexible scheduling</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-impexpo-gold/10 p-2 rounded-full flex-shrink-0 mr-4">
                      <PiggyBank className="h-5 w-5 text-impexpo-gold" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Financial Programs</h4>
                      <p className="text-gray-600">Access to flexible payment options and forward contracting</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">What Farmers Say</h2>
              <p className="text-gray-700">
                Don't take our word for it - here's what the farming community has to say about working with Impexpo Group.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 animate-fade-in" style={{ animationDelay: '0.1s' }}>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-impexpo-gold/20 rounded-full flex items-center justify-center text-impexpo-gold font-bold text-xl">
                    JD
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold">John Davidson</h4>
                    <p className="text-gray-600 text-sm">Wheat Farmer, Victoria</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">
                  "I've been selling my wheat to Impexpo Group for over 5 years now. Their prices are competitive and they always make payment promptly. The logistics support has been a game changer for my operation."
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-impexpo-gold/20 rounded-full flex items-center justify-center text-impexpo-gold font-bold text-xl">
                    SK
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold">Sarah Kim</h4>
                    <p className="text-gray-600 text-sm">Barley Producer, NSW</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">
                  "The market insights provided by Impexpo's team have helped me make better decisions about when to sell. Their agricultural experts really understand our challenges and offer practical solutions."
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 animate-fade-in" style={{ animationDelay: '0.3s' }}>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-impexpo-gold/20 rounded-full flex items-center justify-center text-impexpo-gold font-bold text-xl">
                    MT
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold">Michael Thompson</h4>
                    <p className="text-gray-600 text-sm">Corn Grower, QLD</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">
                  "What sets Impexpo apart is their commitment to building relationships. They're not just traders; they're partners in my farm's success. The flexibility in their contracts has been invaluable during challenging seasons."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Market Insights */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <h2 className="text-3xl font-bold mb-6">Stay Ahead with Market Insights</h2>
                <p className="text-gray-700 mb-8">
                  Our agricultural experts provide regular market analyses and forecasts to help you make informed decisions about planting, harvesting, and selling your crops.
                </p>
                <div className="flex items-start mb-6">
                  <div className="bg-impexpo-gold/10 p-2 rounded-full flex-shrink-0 mr-4">
                    <BarChartBig className="h-5 w-5 text-impexpo-gold" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Price Trend Analysis</h4>
                    <p className="text-gray-600">Weekly reports on domestic and international grain price movements</p>
                  </div>
                </div>
                <div className="flex items-start mb-6">
                  <div className="bg-impexpo-gold/10 p-2 rounded-full flex-shrink-0 mr-4">
                    <TrendingUp className="h-5 w-5 text-impexpo-gold" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Seasonal Forecasts</h4>
                    <p className="text-gray-600">Long-term market projections to support your planning cycle</p>
                  </div>
                </div>
                <Link to="/contact" className="btn-primary inline-flex items-center mt-4">
                  Get Market Updates <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
              <div className="relative animate-fade-in" style={{ animationDelay: '0.3s' }}>
                <img 
                  src="https://images.unsplash.com/photo-1589923188651-268a357a2d16?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                  alt="Farmer with tablet" 
                  className="rounded-lg shadow-lg w-full h-auto animate-float"
                />
                <div className="absolute -bottom-8 -left-8 bg-impexpo-gold p-6 rounded-lg shadow-lg hidden md:block">
                  <div className="text-white">
                    <p className="text-3xl font-bold mb-1">1000+</p>
                    <p className="uppercase text-sm">Farmers Served</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-impexpo-darkblue text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6 animate-fade-in">Ready to Partner with Impexpo Group?</h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Contact our team today to discuss how we can help you optimize your grain trading and access new markets.
            </p>
            <div className="flex flex-wrap justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <Link to="/contact" className="btn-secondary">
                Contact Us
              </Link>
              <Link to="/grains" className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-md transition-all duration-300 hover:bg-white hover:text-impexpo-darkblue">
                Explore Grain Services
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Farmers;
