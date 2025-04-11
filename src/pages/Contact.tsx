
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const offices = [
    {
      name: 'Headquarters - Melbourne',
      address: '123 Grain Avenue, Melbourne, Victoria 3000, Australia',
      phone: '+61 3 1234 5678',
      email: 'info@impexpogroup.com',
      hours: 'Monday - Friday: 9:00 AM - 5:00 PM'
    },
    {
      name: 'Sydney Office',
      address: '456 Trade Street, Sydney, NSW 2000, Australia',
      phone: '+61 2 9876 5432',
      email: 'sydney@impexpogroup.com',
      hours: 'Monday - Friday: 9:00 AM - 5:00 PM'
    },
    {
      name: 'Singapore Office',
      address: '789 International Plaza, Singapore 048619',
      phone: '+65 6543 2109',
      email: 'asia@impexpogroup.com',
      hours: 'Monday - Friday: 9:00 AM - 6:00 PM'
    }
  ];

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <div className="bg-impexpo-darkblue text-white py-32 relative">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-bold mb-6 animate-fade-in">Contact Us</h1>
              <p className="text-xl text-gray-200 mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                Have questions about our grain trading services or international trade solutions? Our team is ready to assist you.
              </p>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-full">
            <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 100H1440V0C1440 0 1144.06 100 720 100C295.94 100 0 0 0 0V100Z" fill="white" />
            </svg>
          </div>
        </div>

        {/* Main Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Contact Form */}
              <div className="lg:col-span-2 animate-fade-in">
                <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                <div className="bg-white rounded-lg shadow-lg p-8">
                  <ContactForm />
                </div>
              </div>

              {/* Contact Details */}
              <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                
                <div className="bg-gray-50 rounded-lg p-6 mb-8">
                  <div className="flex items-start mb-6">
                    <MapPin className="text-impexpo-gold mt-1 flex-shrink-0 mr-4" />
                    <div>
                      <h3 className="font-bold text-lg mb-1">Main Office</h3>
                      <p className="text-gray-700">
                        123 Grain Avenue, Melbourne<br />
                        Victoria 3000, Australia
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center mb-6">
                    <Phone className="text-impexpo-gold flex-shrink-0 mr-4" />
                    <div>
                      <h3 className="font-bold text-lg mb-1">Phone</h3>
                      <p className="text-gray-700">
                        +61 3 1234 5678
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center mb-6">
                    <Mail className="text-impexpo-gold flex-shrink-0 mr-4" />
                    <div>
                      <h3 className="font-bold text-lg mb-1">Email</h3>
                      <p className="text-gray-700">
                        info@impexpogroup.com
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <Clock className="text-impexpo-gold flex-shrink-0 mr-4" />
                    <div>
                      <h3 className="font-bold text-lg mb-1">Business Hours</h3>
                      <p className="text-gray-700">
                        Monday - Friday: 9:00 AM - 5:00 PM<br />
                        Saturday - Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-impexpo-darkblue text-white rounded-lg p-6">
                  <h3 className="font-bold text-lg mb-4">Need Immediate Assistance?</h3>
                  <p className="mb-6">
                    For urgent matters, please contact our customer support team directly.
                  </p>
                  <Link to="tel:+61312345678" className="btn-secondary w-full text-center inline-block">
                    Call Us Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Office Locations */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
              <h2 className="text-3xl font-bold mb-4">Our Global Offices</h2>
              <p className="text-gray-700">
                Impexpo Group maintains a global presence with strategic office locations to better serve our clients worldwide.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {offices.map((office, index) => (
                <div 
                  key={office.name}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${0.1 * (index + 1)}s` }}
                >
                  <div className="h-48 bg-impexpo-darkblue relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <MapPin size={48} className="text-impexpo-gold" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-4">{office.name}</h3>
                    
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <MapPin className="w-5 h-5 text-impexpo-gold mt-1 mr-3 flex-shrink-0" />
                        <p className="text-gray-700">{office.address}</p>
                      </div>
                      
                      <div className="flex items-center">
                        <Phone className="w-5 h-5 text-impexpo-gold mr-3 flex-shrink-0" />
                        <p className="text-gray-700">{office.phone}</p>
                      </div>
                      
                      <div className="flex items-center">
                        <Mail className="w-5 h-5 text-impexpo-gold mr-3 flex-shrink-0" />
                        <p className="text-gray-700">{office.email}</p>
                      </div>
                      
                      <div className="flex items-center">
                        <Clock className="w-5 h-5 text-impexpo-gold mr-3 flex-shrink-0" />
                        <p className="text-gray-700">{office.hours}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center animate-fade-in">Frequently Asked Questions</h2>
              
              <div className="space-y-6">
                <div className="bg-white rounded-lg shadow-md p-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
                  <h3 className="text-xl font-bold mb-3">How quickly can you respond to grain trading inquiries?</h3>
                  <p className="text-gray-700">
                    We typically respond to all inquiries within 24 business hours. For urgent matters, we encourage you to call our office directly.
                  </p>
                </div>
                
                <div className="bg-white rounded-lg shadow-md p-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                  <h3 className="text-xl font-bold mb-3">Do you offer grain transportation services?</h3>
                  <p className="text-gray-700">
                    Yes, we provide comprehensive logistics solutions including domestic and international transportation of grain commodities as part of our trading services.
                  </p>
                </div>
                
                <div className="bg-white rounded-lg shadow-md p-6 animate-fade-in" style={{ animationDelay: '0.3s' }}>
                  <h3 className="text-xl font-bold mb-3">What information should I prepare before contacting you?</h3>
                  <p className="text-gray-700">
                    It's helpful to have details about your grain type, quantity, preferred delivery timeline, and any specific quality requirements. This allows us to provide the most accurate information and pricing.
                  </p>
                </div>
                
                <div className="bg-white rounded-lg shadow-md p-6 animate-fade-in" style={{ animationDelay: '0.4s' }}>
                  <h3 className="text-xl font-bold mb-3">Can you handle international documentation and customs requirements?</h3>
                  <p className="text-gray-700">
                    Absolutely. Our international trade team specializes in managing all documentation, regulatory compliance, and customs clearance processes for cross-border grain trading.
                  </p>
                </div>
              </div>

              <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: '0.5s' }}>
                <Link to="/grains" className="inline-flex items-center text-impexpo-darkblue hover:text-impexpo-gold transition-colors">
                  Learn more about our grain trading services <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-impexpo-gold">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4 text-white animate-fade-in">Start Your Trading Journey Today</h2>
            <p className="text-xl text-white mb-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Connect with our team of experts and discover how Impexpo Group can help grow your grain trading business.
            </p>
            <Link 
              to="tel:+61312345678" 
              className="bg-white text-impexpo-darkblue px-6 py-3 rounded-md transition-all duration-300 hover:bg-gray-100 inline-flex items-center animate-fade-in" 
              style={{ animationDelay: '0.3s' }}
            >
              <Phone className="mr-2 h-5 w-5" /> Call Us: +61 3 1234 5678
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
