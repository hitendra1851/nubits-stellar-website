
import { Brain } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-5 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-teal-400 rounded-lg flex items-center justify-center">
                <Brain className="text-white" size={20} />
              </div>
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
                Nubits.AI
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed max-w-md">
              Empowering businesses with cutting-edge AI solutions for text extraction, NLP, OCR, and multilingual processing.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors duration-200">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Solutions Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Solutions</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Text Extraction
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  NLP Services
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  OCR Technology
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Text-to-Audio
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Cookie Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  GDPR
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Industries Section */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <h3 className="text-lg font-semibold mb-4">Industries</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Healthcare</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Finance</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Legal</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Manufacturing</a>
          </div>
        </div>

        {/* Connect Section */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
          <div className="space-y-2">
            <a 
              href="mailto:contact@nubitsaitech.com" 
              className="text-gray-400 hover:text-white transition-colors duration-200 block"
            >
              contact@nubitsaitech.com
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2023 Nubits.AI Technology LLP. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
