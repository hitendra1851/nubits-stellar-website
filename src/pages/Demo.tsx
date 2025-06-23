
import { useState } from 'react';
import { ArrowRight, CheckCircle, Mail, User, Building } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useToast } from "@/hooks/use-toast";

const Demo = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Create email content
      const emailContent = `
New Demo Request from Nubits.AI Website

Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company}
Service Interest: ${formData.service}
Message: ${formData.message}

Submitted at: ${new Date().toLocaleString()}
      `;

      // Create mailto link with multiple recipients
      const subject = encodeURIComponent('New Demo Request - Nubits.AI');
      const body = encodeURIComponent(emailContent);
      const mailtoLink = `mailto:contact@nubitsaitech.com,hitendra.patel2986@gmail.com?subject=${subject}&body=${body}`;

      // Open email client
      window.location.href = mailtoLink;

      toast({
        title: "Demo Request Submitted!",
        description: "Your email client has been opened with the demo request details. Please send the email to complete your request.",
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        service: '',
        message: ''
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "There was an issue processing your request. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Book Your{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Free Demo
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Experience the power of our AI solutions with a personalized demo tailored to your specific business needs. 
              See how our technology can transform your operations.
            </p>
          </div>
        </div>
      </section>

      {/* Demo Form Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Benefits */}
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-blue-50 to-teal-50 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">What You'll Get</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <CheckCircle className="text-green-500 mr-3 flex-shrink-0" size={20} />
                    <span className="text-gray-700">Personalized 30-minute demo session</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="text-green-500 mr-3 flex-shrink-0" size={20} />
                    <span className="text-gray-700">AI solution recommendations for your industry</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="text-green-500 mr-3 flex-shrink-0" size={20} />
                    <span className="text-gray-700">Custom implementation roadmap</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="text-green-500 mr-3 flex-shrink-0" size={20} />
                    <span className="text-gray-700">ROI analysis and cost estimates</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="text-green-500 mr-3 flex-shrink-0" size={20} />
                    <span className="text-gray-700">Free 30-day trial access</span>
                  </div>
                </div>
              </div>

              <div className="bg-white border-2 border-gray-200 rounded-2xl p-6">
                <h4 className="text-lg font-bold text-gray-900 mb-4">Demo Includes:</h4>
                <ul className="space-y-2">
                  <li className="text-gray-700">• Live demonstration of AI capabilities</li>
                  <li className="text-gray-700">• Q&A session with our experts</li>
                  <li className="text-gray-700">• Security and compliance overview</li>
                  <li className="text-gray-700">• Integration planning discussion</li>
                </ul>
              </div>
            </div>

            {/* Demo Form */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Request Your Demo</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    <User className="inline mr-2" size={16} />
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    <Mail className="inline mr-2" size={16} />
                    Business Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="your.email@company.com"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    <Building className="inline mr-2" size={16} />
                    Company Name *
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    required
                    value={formData.company}
                    onChange={handleInputChange}
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
                    value={formData.service}
                    onChange={handleInputChange}
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
                    Tell us about your project
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                    placeholder="Describe your current challenges and goals..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center disabled:opacity-50"
                >
                  {isSubmitting ? 'Processing...' : 'Book Your Free Demo'}
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

      <Footer />
    </div>
  );
};

export default Demo;
