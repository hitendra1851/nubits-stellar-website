
import Header from '../components/Header';
import Footer from '../components/Footer';

const GDPR = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="pt-24 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">GDPR Compliance</h1>
          <p className="text-gray-600 mb-8">General Data Protection Regulation Information</p>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Commitment to GDPR</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Nubits.AI Technology LLP is committed to complying with the General Data Protection Regulation (GDPR) and protecting the privacy rights of individuals in the European Union. We have implemented comprehensive data protection measures to ensure compliance with GDPR requirements.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Legal Basis for Processing</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We process personal data based on the following legal grounds:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li><strong>Consent:</strong> When you explicitly consent to our processing of your data</li>
                <li><strong>Contract:</strong> When processing is necessary for the performance of a contract</li>
                <li><strong>Legitimate Interest:</strong> When we have a legitimate business interest</li>
                <li><strong>Legal Obligation:</strong> When processing is required by law</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Rights Under GDPR</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Right to Access</h3>
                  <p className="text-gray-700">Request access to your personal data we hold</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Right to Rectification</h3>
                  <p className="text-gray-700">Request correction of inaccurate personal data</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Right to Erasure</h3>
                  <p className="text-gray-700">Request deletion of your personal data</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Right to Portability</h3>
                  <p className="text-gray-700">Request transfer of your data to another provider</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Right to Object</h3>
                  <p className="text-gray-700">Object to processing of your personal data</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Right to Restrict</h3>
                  <p className="text-gray-700">Request restriction of processing</p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Protection Measures</h2>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>End-to-end encryption of data in transit and at rest</li>
                <li>Regular security audits and penetration testing</li>
                <li>Access controls and authentication mechanisms</li>
                <li>Data minimization and purpose limitation</li>
                <li>Regular staff training on data protection</li>
                <li>Incident response and breach notification procedures</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Transfers</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                When we transfer personal data outside the EU, we ensure appropriate safeguards are in place, including Standard Contractual Clauses and adequacy decisions where applicable.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Exercising Your Rights</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                To exercise any of your GDPR rights or if you have questions about our data processing practices, please contact our Data Protection Officer at:
              </p>
              <div className="bg-blue-50 p-6 rounded-lg">
                <p className="text-gray-700">
                  <strong>Email:</strong> dpo@nubitsaitech.com<br />
                  <strong>Subject:</strong> GDPR Rights Request<br />
                  <strong>Company:</strong> Nubits.AI Technology LLP
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Complaints</h2>
              <p className="text-gray-700 leading-relaxed">
                If you believe we have not handled your personal data in accordance with GDPR, you have the right to lodge a complaint with your local supervisory authority.
              </p>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default GDPR;
