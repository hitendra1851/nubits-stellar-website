
import { Brain } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
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
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy-policy" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-of-service" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/cookie-policy" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link to="/gdpr" className="text-gray-400 hover:text-white transition-colors duration-200">
                  GDPR
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Industries Section */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <h3 className="text-lg font-semibold mb-4">Industries</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <span className="text-gray-400">Healthcare</span>
            <span className="text-gray-400">Finance</span>
            <span className="text-gray-400">Legal</span>
            <span className="text-gray-400">Manufacturing</span>
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
