
import Header from '../components/Header';
import Footer from '../components/Footer';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="pt-24 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
          <p className="text-gray-600 mb-8">Last updated: December 2023</p>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Nubits.AI Technology LLP ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our services, or interact with our AI-powered solutions.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Information We Collect</h2>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Personal Information</h3>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Name, email address, phone number, and company information</li>
                <li>Professional details and job title</li>
                <li>Communication preferences</li>
                <li>Account credentials and authentication information</li>
              </ul>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Usage Data</h3>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Information about how you use our services</li>
                <li>Log files, IP addresses, and device information</li>
                <li>Performance metrics and analytics data</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Your Information</h2>
              <ul className="list-disc pl-6 text-gray-700">
                <li>Provide, maintain, and improve our AI services</li>
                <li>Process your requests and communicate with you</li>
                <li>Ensure security and prevent fraud</li>
                <li>Comply with legal obligations and regulatory requirements</li>
                <li>Send you marketing communications (with your consent)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Security</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We implement enterprise-grade security measures including encryption, access controls, and regular security audits. Our systems are designed to protect your data with bank-level security standards and comply with industry regulations including HIPAA and SOC 2.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Rights</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                You have the right to access, update, or delete your personal information. You may also opt-out of marketing communications and request data portability. Contact us at privacy@nubitsaitech.com to exercise these rights.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
              <p className="text-gray-700 leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us at:
                <br />
                Email: privacy@nubitsaitech.com
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

export default PrivacyPolicy;
