
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Clock, Users, Globe, Check, Scale, Award, ArrowRight, ChevronRight, Wheat, Utensils, PawPrint, Ship, Truck, Calendar } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const milestones = [
    { year: 2005, title: 'Company Founded', description: 'Impexpo Group was established in Melbourne, Australia.' },
    { year: 2008, title: 'First International Office', description: 'Opened our first international office in Singapore to better serve Asian markets.' },
    { year: 2012, title: 'Expansion to Sydney', description: 'Established our second Australian office to expand domestic operations.' },
    { year: 2015, title: 'International Trade Volume Milestone', description: 'Reached 100,000 MT annual international grain trade volume.' },
    { year: 2017, title: 'Digital Trading Platform', description: 'Launched our digital grain trading platform, enhancing accessibility for clients.' },
    { year: 2020, title: 'Sustainability Initiative', description: 'Implemented comprehensive sustainability framework across all operations.' },
    { year: 2023, title: 'Global Network Milestone', description: 'Expanded our trading network to over 30 countries worldwide.' }
  ];

  const values = [
    { 
      icon: <Scale className="h-8 w-8" />, 
      title: 'Integrity', 
      description: 'We conduct all business with the highest ethical standards, building trust through transparency and honesty.' 
    },
    { 
      icon: <Award className="h-8 w-8" />, 
      title: 'Excellence', 
      description: 'We continuously strive for excellence in all aspects of our operations, from grain quality to customer service.' 
    },
    { 
      icon: <Users className="h-8 w-8" />, 
      title: 'Relationships', 
      description: 'We value long-term partnerships with farmers, processors, and clients built on mutual respect and shared success.' 
    },
    { 
      icon: <Globe className="h-8 w-8" />, 
      title: 'Sustainability', 
      description: 'We are committed to environmentally responsible practices throughout our global supply chain.' 
    }
  ];

  const solutions = [
    { icon: <Wheat className="h-6 w-6" />, title: "Grains", description: "Expert trading of wheat, corn, barley, and other grains globally.", link: "/grains", active: true },
    { icon: <Utensils className="h-6 w-6" />, title: "Food Ingredients", description: "Quality ingredients sourced directly from producers.", link: "/grains", active: false },
    { icon: <PawPrint className="h-6 w-6" />, title: "Animal Feed Ingredients", description: "Nutritional ingredients for livestock and poultry.", link: "/grains", active: false },
    { icon: <Utensils className="h-6 w-6" />, title: "Pet Food Ingredients", description: "Premium ingredients for pet food manufacturers.", link: "/grains", active: false },
    { icon: <Globe className="h-6 w-6" />, title: "International Trade", description: "Global market access and trade financing solutions.", link: "/international-trade", active: false },
    { icon: <Truck className="h-6 w-6" />, title: "Transportation", description: "Efficient logistics and transportation services.", link: "/international-trade", active: false },
  ];

  const services = [
    { 
      icon: <Check className="h-6 w-6" />, 
      title: 'Local merchants with authority', 
      description: "You'll work directly with a merchant in your area who understands your product, knows the global market and has the authority to make decisions quickly."
    },
    { 
      icon: <Check className="h-6 w-6" />, 
      title: 'Efficient payment', 
      description: "We offer streamlined technology solutions to make sure you get paid on time and according to our agreements."
    },
    { 
      icon: <Check className="h-6 w-6" />, 
      title: 'Fast dumping', 
      description: "Our facilities are designed for efficiency. No lines. No waiting around. We dump grain fast and get back on the road."
    },
    { 
      icon: <Calendar className="h-6 w-6" />, 
      title: 'Year-round markets', 
      description: "We're in the market 24/7/365. We know what buyers are looking for, and we aim to provide them a consistent supply."
    },
    { 
      icon: <Check className="h-6 w-6" />, 
      title: 'Pricing options', 
      description: "We offer flexible alternatives to pricing beyond just a straight cash price. Let us know what you're looking for, and we'll work to create a solution just for you."
    },
    { 
      icon: <Check className="h-6 w-6" />, 
      title: 'Storage capabilities', 
      description: "We invest in your local communities and facilities to ensure that we have the most secure, top-of-the-line storage solutions available to you."
    },
  ];

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <Hero 
          title="About Impexpo Group" 
          subtitle="Our story, mission, and the values that guide our global grain trading operations."
          size="md"
          backgroundImage="https://images.unsplash.com/photo-1531256456869-ce942a665e80?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
        />

        {/* Company Overview */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="animate-fade-in">
                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                <p className="text-gray-700 mb-6">
                  Founded in 2005, Impexpo Group began as a small domestic grain trading company in Melbourne, Australia. With a vision to connect local farmers to global opportunities, we steadily expanded our operations into international markets.
                </p>
                <p className="text-gray-700 mb-8">
                  Today, Impexpo Group stands as a trusted name in the global grain trading industry, with offices across Australia and Asia, serving clients in over 30 countries. Our journey has been driven by a commitment to integrity, excellence, and building lasting relationships with all our stakeholders.
                </p>
                
                <div className="flex items-center mb-6">
                  <div className="bg-impexpo-gold/10 p-2 rounded-full mr-4">
                    <Clock className="h-5 w-5 text-impexpo-gold" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Years of Excellence</h4>
                    <p className="text-gray-600">15+ years of reliable grain trading expertise</p>
                  </div>
                </div>
                
                <div className="flex items-center mb-6">
                  <div className="bg-impexpo-gold/10 p-2 rounded-full mr-4">
                    <Users className="h-5 w-5 text-impexpo-gold" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Global Team</h4>
                    <p className="text-gray-600">A diverse team of 50+ agricultural experts</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-impexpo-gold/10 p-2 rounded-full mr-4">
                    <Globe className="h-5 w-5 text-impexpo-gold" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">International Reach</h4>
                    <p className="text-gray-600">Trading operations spanning 6 continents</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
                <img 
                  src="https://images.unsplash.com/photo-1566345984367-8daab4d736ee?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Office Building" 
                  className="rounded-lg shadow-lg w-full h-auto hover:shadow-xl transition-all duration-300"
                />
                <img 
                  src="https://images.unsplash.com/photo-1604848698030-c434ba08ece1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Team Meeting" 
                  className="rounded-lg shadow-lg w-full h-auto hover:shadow-xl transition-all duration-300"
                />
                <img 
                  src="https://images.unsplash.com/photo-1611465577672-8b79c95a2853?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Grain Inspection" 
                  className="rounded-lg shadow-lg w-full h-auto hover:shadow-xl transition-all duration-300"
                />
                <img 
                  src="https://images.unsplash.com/photo-1517502474097-f9b30659dadb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="International Office" 
                  className="rounded-lg shadow-lg w-full h-auto hover:shadow-xl transition-all duration-300"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 bg-impexpo-darkblue text-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="animate-fade-in">
                <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
                <p className="text-gray-200 mb-6">
                  To connect agricultural producers with global markets through reliable, efficient, and sustainable grain trading solutions that create value for all stakeholders.
                </p>
                <p className="text-gray-200">
                  We strive to be the preferred partner in the agricultural supply chain, known for our integrity, expertise, and commitment to excellence in every transaction.
                </p>
              </div>
              
              <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
                <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
                <p className="text-gray-200 mb-6">
                  To be a global leader in agricultural trade, recognized for our contribution to sustainable food systems and for empowering agricultural communities worldwide.
                </p>
                <p className="text-gray-200">
                  We envision a future where efficient grain trading bridges supply and demand gaps, enhances food security, and supports the prosperity of farming communities across continents.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
              <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
              <p className="text-gray-700">
                These fundamental principles guide our decisions and actions in all aspects of our business.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div 
                  key={value.title}
                  className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-lg transition-all duration-300 animate-fade-in group hover:-translate-y-1" 
                  style={{ animationDelay: `${0.1 * (index + 1)}s` }}
                >
                  <div className="bg-impexpo-gold/10 p-4 rounded-full mx-auto mb-6 w-16 h-16 flex items-center justify-center text-impexpo-gold group-hover:bg-impexpo-gold group-hover:text-white transition-all duration-300">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-gray-700">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Supply Chain Solutions Section - Based on the provided screenshot */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/2 overflow-hidden rounded-full">
                <img 
                  src="public/lovable-uploads/0f7219d5-9d3d-4e55-9cda-ea9f6e935f27.png" 
                  alt="Grain pouring from truck" 
                  className="w-full h-auto object-cover"
                />
              </div>
              
              <div className="md:w-1/2">
                <h3 className="text-gray-600 font-semibold mb-2 uppercase tracking-wider">WHAT WE DO</h3>
                <h2 className="text-3xl font-bold text-impexpo-darkblue mb-6">Our agricultural supply chain solutions explore what's possible across key industries</h2>
                
                <div className="space-y-4 mb-8">
                  {solutions.map((solution, index) => (
                    <ServiceCard 
                      key={solution.title}
                      title={solution.title}
                      description={solution.description}
                      icon={solution.icon}
                      link={solution.link}
                      delay={`${0.1 * (index + 1)}s`}
                      active={solution.active}
                    />
                  ))}
                </div>
                
                <Link 
                  to="/grains" 
                  className="inline-flex items-center px-6 py-3 bg-red-500 hover:bg-red-600 text-white rounded-full transition-colors"
                >
                  SEE ALL SOLUTIONS <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Strategic Partner Section - Based on the second screenshot */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold text-impexpo-darkblue mb-6">Your strategic marketplace partner</h2>
                <p className="text-gray-700 mb-8">
                  Our local merchandisers are deeply knowledgeable about supply and demand, crop conditions and market movement—so you can always turn to us for the information you need to grow your business. Since your crops are the most essential part of the global agricultural supply chain, we do whatever we can to secure a market quickly, facilitate connections and find the answers you need. Our reputation is one of reliability and stability.
                </p>
                
                <div className="uppercase font-bold text-gray-800 mb-6">COUNT ON IMPEXPO FOR:</div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {services.map((service, index) => (
                    <div key={service.title} className="flex gap-4 animate-fade-in" style={{ animationDelay: `${0.1 * (index + 1)}s` }}>
                      <div className="bg-impexpo-gold text-white p-4 rounded-full h-16 w-16 flex items-center justify-center shrink-0">
                        {service.icon}
                      </div>
                      <div>
                        <h3 className="font-bold mb-2">{service.title}</h3>
                        <p className="text-gray-600 text-sm">{service.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="md:w-1/2">
                <img 
                  src="public/lovable-uploads/9cb75a1a-f88d-477f-8fc1-3d1d33611fff.png" 
                  alt="Farmers in field discussing crops" 
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
              <h2 className="text-3xl font-bold mb-4">Our Journey</h2>
              <p className="text-gray-700">
                Explore the key milestones that have shaped Impexpo Group's growth over the years.
              </p>
            </div>

            <div className="relative">
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200"></div>
              
              <div className="space-y-16">
                {milestones.map((milestone, index) => (
                  <div key={milestone.year} className={`relative flex items-center justify-between md:justify-normal animate-fade-in ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`} style={{ animationDelay: `${0.1 * (index + 1)}s` }}>
                    <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full bg-impexpo-gold border-4 border-white shadow"></div>
                    
                    <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right md:pr-10' : 'md:pl-10'}`}>
                      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                        <span className="text-impexpo-gold font-bold">{milestone.year}</span>
                        <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                        <p className="text-gray-700">{milestone.description}</p>
                      </div>
                    </div>
                    
                    <div className="hidden md:block w-5/12"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Join Us CTA */}
        <section className="py-16 bg-impexpo-darkblue text-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <h2 className="text-3xl font-bold mb-6">Join Our Global Network</h2>
                <p className="text-gray-200 mb-8">
                  Whether you're a farmer looking for reliable market access, a processor seeking quality grain supplies, or a potential team member, we welcome you to connect with Impexpo Group.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link to="/contact" className="btn-secondary inline-flex items-center">
                    Contact Us <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                  <Link to="/farmers" className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-md transition-all duration-300 hover:bg-white hover:text-impexpo-darkblue inline-flex items-center">
                    Our Services <ChevronRight className="ml-2 h-5 w-5" />
                  </Link>
                </div>
              </div>
              <div className="relative animate-fade-in" style={{ animationDelay: '0.3s' }}>
                <img 
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                  alt="Global Team" 
                  className="rounded-lg shadow-lg w-full h-auto animate-fade-in"
                />
                <div className="absolute -bottom-8 -right-8 bg-impexpo-gold p-6 rounded-lg shadow-lg hidden md:block animate-float">
                  <div className="text-white text-center">
                    <p className="text-3xl font-bold mb-1">15+</p>
                    <p className="uppercase text-sm">Years of Growth</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default AboutUs;
