
import { ArrowRight, CheckCircle, Star, Clock, Shield, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const GetStarted = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Start Your{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                AI Journey
              </span>{' '}
              Today
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Transform your business with enterprise-grade AI solutions. Get started with a free consultation 
              and discover how our cutting-edge technology can drive your success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/demo"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg flex items-center justify-center"
              >
                Get Free Demo
                <ArrowRight className="ml-2" size={20} />
              </Link>
              <Link
                to="/contact"
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition-all duration-200"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Start with{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Nubits.AI
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Join hundreds of businesses that have already transformed their operations with our AI solutions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Implementation</h3>
              <p className="text-gray-600">
                Get up and running in days, not months. Our streamlined onboarding process ensures rapid deployment 
                with minimal disruption to your existing workflows.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Enterprise Security</h3>
              <p className="text-gray-600">
                Bank-level security with HIPAA compliance, SOC 2 certification, and end-to-end encryption. 
                Your data is protected with the highest industry standards.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">24/7 Expert Support</h3>
              <p className="text-gray-600">
                Dedicated support team available around the clock. From initial setup to ongoing optimization, 
                we're here to ensure your success every step of the way.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Trusted by{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Industry Leaders
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-md">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current" size={20} />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">
                "Nubits.AI has revolutionized our document processing workflow. The accuracy is outstanding, 
                and the implementation was seamless. Our productivity has increased by 300%."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  SJ
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Sarah Johnson</div>
                  <div className="text-sm text-gray-600">CTO, TechCorp Solutions</div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-md">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current" size={20} />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">
                "The ROI was immediate. Within the first month, we saw significant cost savings and efficiency gains. 
                The multilingual capabilities are exactly what we needed for our global operations."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  MC
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Michael Chen</div>
                  <div className="text-sm text-gray-600">Director of Operations, Global Enterprises</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Work With Us?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join the AI revolution and transform your business today. Let's discuss your project.
          </p>
          <Link
            to="/contact"
            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-200 inline-flex items-center"
          >
            Contact Us Today
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GetStarted;
