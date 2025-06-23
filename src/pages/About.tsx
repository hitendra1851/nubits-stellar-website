
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ArrowRight, CheckCircle, Users, Award, Globe, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                🚀 Established 2023
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Pioneering the Future of{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                AI Technology
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              We provide solutions for your creative ideas. Established in 2023, Nubits.AI Technology operates worldwide, delivering cutting-edge technology solutions to empower small businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg flex items-center justify-center"
              >
                Get In Touch
                <ArrowRight className="ml-2" size={20} />
              </Link>
              <Link
                to="/services"
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition-all duration-200"
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Mission</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Mission and Impact - Our core mission encapsulates our dedication to pushing boundaries and crafting cutting-edge solutions that cater to the evolving needs of modern businesses.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Zap className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Innovation</h3>
              <p className="text-gray-600">
                Innovation is at the heart of everything we do. We believe in challenging conventional norms and exploring new horizons in technology. Our mission drives us to stay ahead of the curve, constantly seeking novel ways to harness the power of AI, machine learning, and other emerging technologies.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Users className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Empowerment</h3>
              <p className="text-gray-600">
                We are driven by the goal of empowering businesses and individuals alike. Through our services, we provide the tools and expertise needed to enhance operational efficiency, unlock insights from data, and create seamless user experiences.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Globe className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Impact</h3>
              <p className="text-gray-600">
                Our ultimate mission is to make a positive impact that ripples through industries and communities. We understand the potential of technology to bring about transformative change, and we are dedicated to utilizing this potential responsibly and ethically.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Us</span>
            </h2>
            <p className="text-lg text-gray-600">
              Experience, Expertise, and Dedication - Our team combines knowledge, skills, and unwavering commitment to deliver exceptional results.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">2023</div>
              <h4 className="font-semibold text-gray-900 mb-2">Founded</h4>
              <p className="text-sm text-gray-600">Year of establishment</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">Global</div>
              <h4 className="font-semibold text-gray-900 mb-2">Reach</h4>
              <p className="text-sm text-gray-600">Worldwide operations</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">AI</div>
              <h4 className="font-semibold text-gray-900 mb-2">Focus</h4>
              <p className="text-sm text-gray-600">AI Solutions</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">95%</div>
              <h4 className="font-semibold text-gray-900 mb-2">Accuracy</h4>
              <p className="text-sm text-gray-600">AI processing accuracy</p>
            </div>
          </div>

          <div className="text-center">
            <Link 
              to="/contact"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-md inline-block"
            >
              Ready to Work With Us?
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
