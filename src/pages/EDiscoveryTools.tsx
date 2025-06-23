
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FileText, Search, Download, Shield, Database, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const EDiscoveryTools = () => {
  const tools = [
    {
      icon: <FileText size={32} />,
      title: "Bates Numbering Generator",
      subtitle: "Streamline Document Identification",
      description: "Easily generate Bates numbers in bulk with our comprehensive Bates Numbering Generator tool. Whether you're organizing legal documents, discovery materials, or compliance files, this tool helps you maintain consistency and traceability by generating a structured sequence of Bates numbers and exporting them into a CSV file for seamless integration into your workflow.",
      features: ["Bulk number generation", "CSV export functionality", "Structured sequencing", "Legal compliance ready"],
      url: "https://ediscoverymart.com/product/bates-generator/"
    },
    {
      icon: <Database size={32} />,
      title: "DAT Manipulator",
      subtitle: "Preview, Validate, and Split DAT & OPT Files",
      description: "The DAT Manipulator is an essential desktop tool for professionals working with eDiscovery load files. It allows you to preview, validate, and split DAT and OPT files with precision—before loading them into review platforms like Relativity or Concordance. Whether you're prepping files for legal production or cleaning data for re-import, the DAT Manipulator makes your workflow faster and error-free.",
      features: ["File preview capability", "Data validation", "Precise file splitting", "Platform compatibility"],
      url: "https://ediscoverymart.com/product/dat-manipulator-preview-validate-and-split-dat-opt-files-easily/"
    },
    {
      icon: <Search size={32} />,
      title: "Opticon to Searchable PDF",
      subtitle: "Convert Legal Image Files to Searchable Text",
      description: "Opticon to searchable PDF conversion is essential for legal professionals working with scanned image files in .OPT format. This process enables full-text search, highlights, and easy access to information buried within non-searchable image documents. Whether you're handling legal discovery or building a case archive, this tool makes the task faster and more efficient.",
      features: ["Full-text search enabled", "Highlight functionality", "Archive building", "Efficient processing"],
      url: "https://ediscoverymart.com/product/opticon-to-searchable-pdf/"
    },
    {
      icon: <FileText size={32} />,
      title: "Opticon to Searchable Text",
      subtitle: "Extract Readable Text from Image Files",
      description: "Easily convert Opticon image files to searchable text with our efficient and secure conversion tool. Designed for legal professionals and document specialists, this solution streamlines your document review process by extracting readable text from images referenced in .OPT files. Say goodbye to manual data entry and enjoy fast, accurate text generation.",
      features: ["Secure conversion", "Fast text extraction", "Accurate results", "Manual entry elimination"],
      url: "https://ediscoverymart.com/product/opticon-image-to-text-generator/"
    },
    {
      icon: <Download size={32} />,
      title: "Relativity Mass Downloader",
      subtitle: "Fast Bulk File Export Tool",
      description: "Streamline your legal review and eDiscovery workflows using the Relativity Mass Downloader, a secure and efficient utility for bulk downloading native documents from the Relativity platform. Whether you're dealing with internal investigations or litigation at scale, this tool ensures fast, reliable access to critical case files through a user-friendly interface.",
      features: ["Bulk download capability", "Secure file transfer", "User-friendly interface", "Litigation scale support"],
      url: "https://ediscoverymart.com/product/relativity-mass-native-downloader/"
    },
    {
      icon: <Database size={32} />,
      title: "RSMF Metadata Extractor",
      subtitle: "Simplify Short Message File Analysis",
      description: "Effortlessly extract metadata from RSMF (Relativity Short Message Format) files using our intuitive RSMF Metadata Extractor. Designed for eDiscovery teams and legal professionals, this tool provides a streamlined way to analyze communication records, identify patterns, and improve case strategy for better litigation outcomes.",
      features: ["Metadata extraction", "Pattern identification", "Case strategy improvement", "Communication analysis"],
      url: "https://ediscoverymart.com/product/rsmf-metadata-extractor/"
    },
    {
      icon: <CheckCircle size={32} />,
      title: "RSMF Validator",
      subtitle: "Pre-Validation Tool for Relativity Short Message Files",
      description: "Ensure the integrity and readiness of your RSMF (Relativity Short Message Format) files before loading them into Relativity or sharing with third parties using the RSMF Validator. This lightweight but powerful utility scans RSMF files for structural accuracy, validation status, errors, and warnings—providing a detailed report that helps avoid costly ingestion failures and rework during eDiscovery.",
      features: ["Structural accuracy check", "Error detection", "Detailed reporting", "Cost-effective validation"],
      url: "https://ediscoverymart.com/product/rsmf-validator-pre-validation-tool-for-relativity-short-message-files/"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                <Shield className="mr-2" size={16} />
                eDiscovery Solutions
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Professional{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                eDiscovery Tools
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Comprehensive suite of specialized tools designed for legal professionals, eDiscovery teams, and document specialists to streamline workflows and enhance productivity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg flex items-center justify-center"
              >
                Get Started Today
                <ArrowRight className="ml-2" size={20} />
              </Link>
              <Link
                to="/demo"
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition-all duration-200"
              >
                Request Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our eDiscovery <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Tool Suite</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Professional-grade tools designed to handle the most demanding eDiscovery challenges with precision and efficiency.
            </p>
          </div>

          <div className="grid gap-8">
            {tools.map((tool, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
                <div className="grid md:grid-cols-3 gap-8 items-start">
                  <div className="md:col-span-2">
                    <div className="flex items-start mb-4">
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mr-6 text-white flex-shrink-0">
                        {tool.icon}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{tool.title}</h3>
                        <p className="text-lg text-blue-600 font-semibold mb-4">{tool.subtitle}</p>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">{tool.description}</p>
                    
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      {tool.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm text-gray-700">
                          <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mr-3"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex flex-col justify-center">
                    <a 
                      href={tool.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 text-center mb-4 block"
                    >
                      Learn More
                    </a>
                    <Link 
                      to="/contact"
                      className="border-2 border-gray-300 text-gray-700 py-3 px-6 rounded-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition-all duration-200 text-center block"
                    >
                      Contact Us
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Streamline Your eDiscovery Process?</h2>
            <p className="text-xl mb-8 opacity-90">
              Contact our team to learn how our tools can transform your document review and legal workflow efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-200 flex items-center justify-center"
              >
                Get Started Today
                <ArrowRight className="ml-2" size={20} />
              </Link>
              <Link
                to="/demo"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200"
              >
                Request Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EDiscoveryTools;
