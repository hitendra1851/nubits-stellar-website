
import Header from '../components/Header';
import Footer from '../components/Footer';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="pt-24 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
          <p className="text-gray-600 mb-8">Last updated: December 2023</p>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Agreement to Terms</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                By accessing and using Nubits.AI Technology LLP's services, you accept and agree to be bound by the terms and provision of this agreement. These Terms of Service govern your use of our AI-powered solutions and services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Description of Services</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Nubits.AI provides enterprise-grade AI solutions including but not limited to text extraction, natural language processing, optical character recognition, multilingual processing, and custom AI development services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">User Responsibilities</h2>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Provide accurate and complete information</li>
                <li>Maintain the confidentiality of your account credentials</li>
                <li>Use our services in compliance with applicable laws</li>
                <li>Respect intellectual property rights</li>
                <li>Not misuse or attempt to harm our systems</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Processing and Ownership</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                You retain ownership of your data. We process your data solely to provide our services and in accordance with our Privacy Policy. We implement appropriate security measures to protect your data and comply with applicable data protection regulations.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Service Availability</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We strive to maintain 99.9% uptime but cannot guarantee uninterrupted service. We may perform maintenance or updates that temporarily affect service availability with advance notice when possible.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Limitation of Liability</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Nubits.AI Technology LLP shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
              <p className="text-gray-700 leading-relaxed">
                For questions regarding these Terms of Service, contact us at:
                <br />
                Email: legal@nubitsaitech.com
                <br />
                Nubits.AI Technology LLP
              </p>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TermsOfService;
