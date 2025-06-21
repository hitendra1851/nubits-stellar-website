
import { FileText, MessageSquare, Shield, Volume2, Globe, Cog, 
         Heart, DollarSign, Scale, Factory, ShoppingCart, GraduationCap } from 'lucide-react';

const Services = () => {
  const coreServices = [
    {
      icon: <FileText size={32} />,
      title: "Text Extraction & OCR",
      description: "Advanced optical character recognition and intelligent text extraction from documents, images, and scanned files with 99%+ accuracy.",
      features: ["Multi-format document processing", "Handwriting recognition", "Table and form extraction"]
    },
    {
      icon: <MessageSquare size={32} />,
      title: "Natural Language Processing",
      description: "Sophisticated NLP capabilities for sentiment analysis, entity recognition, and intelligent content understanding across multiple languages.",
      features: ["Sentiment analysis", "Named entity recognition", "Language detection"]
    },
    {
      icon: <Shield size={32} />,
      title: "PHI & Data Protection",
      description: "HIPAA-compliant protected health information identification and secure data handling for healthcare and sensitive industries.",
      features: ["HIPAA compliance", "PII identification", "Data anonymization"]
    },
    {
      icon: <Volume2 size={32} />,
      title: "Text-to-Audio Conversion",
      description: "High-quality speech synthesis and audio generation from text content with natural-sounding voices in multiple languages.",
      features: ["Natural voice synthesis", "Multiple language support", "Custom voice training"]
    },
    {
      icon: <Globe size={32} />,
      title: "Multilingual Processing",
      description: "Comprehensive language support for global businesses with translation, localization, and cross-language content analysis.",
      features: ["50+ language support", "Real-time translation", "Cultural adaptation"]
    },
    {
      icon: <Cog size={32} />,
      title: "Custom AI Solutions",
      description: "Tailored artificial intelligence solutions designed specifically for your business needs and industry requirements.",
      features: ["Custom model development", "API integration", "Scalable architecture"]
    }
  ];

  const industries = [
    {
      icon: <Heart size={24} />,
      title: "Healthcare",
      description: "HIPAA-compliant solutions for medical records, patient data processing, and clinical documentation."
    },
    {
      icon: <DollarSign size={24} />,
      title: "Financial Services",
      description: "Secure document processing, compliance monitoring, and risk assessment for financial institutions."
    },
    {
      icon: <Scale size={24} />,
      title: "Legal",
      description: "Contract analysis, legal document processing, and compliance monitoring for law firms."
    },
    {
      icon: <Factory size={24} />,
      title: "Manufacturing",
      description: "Quality control documentation, safety compliance, and operational efficiency optimization."
    },
    {
      icon: <ShoppingCart size={24} />,
      title: "Retail & E-commerce",
      description: "Customer sentiment analysis, product optimization, and multilingual content processing."
    },
    {
      icon: <GraduationCap size={24} />,
      title: "Education",
      description: "Academic document processing, research analysis, and educational content creation."
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Core <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">Solutions</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Comprehensive AI-Powered Services - Unlock the power of artificial intelligence with our comprehensive suite of enterprise-grade solutions
          </p>
        </div>

        {/* Core Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {coreServices.map((service, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 group">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-teal-600 rounded-lg flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
              
              <div className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center text-sm text-gray-700">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full mr-3"></div>
                    {feature}
                  </div>
                ))}
              </div>
              
              <button className="w-full bg-gradient-to-r from-blue-600 to-teal-600 text-white py-2 px-4 rounded-lg font-semibold hover:from-blue-700 hover:to-teal-700 transition-all duration-200">
                Learn More
              </button>
            </div>
          ))}
        </div>

        {/* Industries Section */}
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Industries We <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">Serve</span>
          </h3>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            Specialized Solutions for Every Sector - Our AI technologies are tailored to meet the unique challenges of diverse business sectors
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6 group">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-teal-600 rounded-lg flex items-center justify-center mr-4 text-white group-hover:scale-110 transition-transform duration-300">
                  {industry.icon}
                </div>
                <h4 className="text-lg font-bold text-gray-900">{industry.title}</h4>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">{industry.description}</p>
              <button className="mt-4 text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors duration-200">
                Explore {industry.title} Solutions →
              </button>
            </div>
          ))}
        </div>

        {/* Why Choose Us Section */}
        <div className="mt-20 bg-white rounded-3xl p-8 md:p-12 shadow-lg">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">Nubits.AI</span>
            </h3>
            <p className="text-lg text-gray-600">
              Leading the Future of AI Innovation - We combine cutting-edge technology with deep industry expertise
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent mb-2">99.2%</div>
              <h4 className="font-semibold text-gray-900 mb-2">Accuracy Rate</h4>
              <p className="text-sm text-gray-600">Industry-leading accuracy for reliable results</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent mb-2">&lt; 2s</div>
              <h4 className="font-semibold text-gray-900 mb-2">Processing Speed</h4>
              <p className="text-sm text-gray-600">Lightning-fast processing for immediate results</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent mb-2">99.9%</div>
              <h4 className="font-semibold text-gray-900 mb-2">Uptime</h4>
              <p className="text-sm text-gray-600">Reliable service you can count on</p>
            </div>
          </div>

          <div className="text-center">
            <button className="bg-gradient-to-r from-blue-600 to-teal-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-teal-700 transition-all duration-200 shadow-md">
              Start Your AI Journey
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
