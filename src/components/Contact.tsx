
import { Mail, Phone, MessageSquare, User, Building, ArrowRight } from 'lucide-react';

const Contact = () => {
  const testimonials = [
    {
      quote: "Nubits.AI transformed our document processing workflow. What used to take hours now takes minutes, with incredible accuracy. Their OCR technology is simply outstanding.",
      author: "Sarah Johnson",
      position: "CTO, TechCorp Solutions",
      avatar: "SJ"
    },
    {
      quote: "The multilingual NLP capabilities have revolutionized how we handle global customer communications. The accuracy and speed are remarkable.",
      author: "Michael Chen",
      position: "Director of Operations, Global Enterprises",
      avatar: "MC"
    },
    {
      quote: "Their HIPAA-compliant PHI detection has been crucial for our healthcare data processing. The security and compliance features give us complete peace of mind.",
      author: "Dr. Emily Rodriguez",
      position: "Chief Medical Officer, HealthTech Inc.",
      avatar: "ER"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Testimonials Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Client Success <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">Stories</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              What Our Clients Say - Discover how businesses across industries are transforming their operations with our AI solutions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="mb-4">
                  <MessageSquare className="text-blue-600 mb-4" size={24} />
                  <p className="text-gray-700 italic leading-relaxed">"{testimonial.quote}"</p>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.author}</div>
                    <div className="text-sm text-gray-600">{testimonial.position}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Ready to Transform Your <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">Business?</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the power of our AI solutions with a personalized demo tailored to your specific needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-blue-50 to-teal-50 p-8 rounded-2xl">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-teal-600 rounded-lg flex items-center justify-center mr-4">
                  <Mail className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Get in Touch</h3>
              </div>
              <p className="text-gray-600 mb-6">
                We're here to help you navigate your technology challenges and unlock new opportunities for growth.
              </p>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Email</h4>
                  <a 
                    href="mailto:contact@nubitsaitech.com" 
                    className="text-blue-600 hover:text-blue-800 transition-colors duration-200"
                  >
                    contact@nubitsaitech.com
                  </a>
                </div>
              </div>
            </div>

            {/* What's Included */}
            <div className="bg-white border-2 border-gray-200 rounded-2xl p-6">
              <h4 className="text-lg font-bold text-gray-900 mb-4">What's Included:</h4>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  Free 30-day trial
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  No setup fees
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  24/7 support included
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  Custom integration assistance
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  <User className="inline mr-2" size={16} />
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  <Mail className="inline mr-2" size={16} />
                  Business Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                  <Building className="inline mr-2" size={16} />
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="Your company name"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                  Area of Interest
                </label>
                <select
                  id="service"
                  name="service"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                >
                  <option value="">Select Service</option>
                  <option value="text-extraction">Text Extraction & OCR</option>
                  <option value="nlp">Natural Language Processing</option>
                  <option value="phi-protection">PHI & Data Protection</option>
                  <option value="text-to-audio">Text-to-Audio Conversion</option>
                  <option value="multilingual">Multilingual Processing</option>
                  <option value="custom">Custom AI Solutions</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                  placeholder="Tell us about your project or questions..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-teal-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-teal-700 transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center"
              >
                Request Free Demo
                <ArrowRight className="ml-2" size={20} />
              </button>

              <p className="text-xs text-gray-500 text-center">
                By submitting this form, you agree to our privacy policy and terms of service.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
