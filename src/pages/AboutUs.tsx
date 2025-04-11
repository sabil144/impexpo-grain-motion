import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Clock, Users, Globe, Check, Scale, Award, ArrowRight, ChevronRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';

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

  const teamMembers = [
    { 
      name: 'Michael Chen', 
      position: 'Chief Executive Officer',
      photo: 'https://randomuser.me/api/portraits/men/32.jpg',
      bio: 'With over 25 years of experience in agricultural trade, Michael leads Impexpo Group with a vision for sustainable global growth.'
    },
    { 
      name: 'Sarah Johnson', 
      position: 'Chief Operations Officer',
      photo: 'https://randomuser.me/api/portraits/women/44.jpg',
      bio: 'Sarah oversees the day-to-day operations of Impexpo Group, ensuring efficient processes and exceptional service delivery.'
    },
    { 
      name: 'David Patel', 
      position: 'Head of International Trade',
      photo: 'https://randomuser.me/api/portraits/men/67.jpg',
      bio: 'David brings extensive knowledge of global markets and regulatory frameworks to our international trade division.'
    },
    { 
      name: 'Emma Rodriguez', 
      position: 'Finance Director',
      photo: 'https://randomuser.me/api/portraits/women/28.jpg',
      bio: 'Emma manages financial operations and develops innovative trade financing solutions for our global client base.'
    }
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

        {/* Leadership Team */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
              <h2 className="text-3xl font-bold mb-4">Our Leadership Team</h2>
              <p className="text-gray-700">
                Meet the experienced professionals who guide our global operations and strategic direction.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <div 
                  key={member.name}
                  className="bg-white rounded-lg shadow-md overflow-hidden group animate-fade-in" 
                  style={{ animationDelay: `${0.1 * (index + 1)}s` }}
                >
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={member.photo} 
                      alt={member.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                    <p className="text-impexpo-gold mb-4">{member.position}</p>
                    <p className="text-gray-700 text-sm">
                      {member.bio}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-16">
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
