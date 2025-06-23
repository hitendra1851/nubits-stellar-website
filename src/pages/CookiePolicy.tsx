
import Header from '../components/Header';
import Footer from '../components/Footer';

const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="pt-24 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Cookie Policy</h1>
          <p className="text-gray-600 mb-8">Last updated: December 2023</p>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">What Are Cookies</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Cookies are small text files that are stored on your device when you visit our website. They help us provide you with a better experience by remembering your preferences and enabling certain website functionality.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Cookies</h2>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Essential Cookies</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                These cookies are necessary for the website to function properly. They enable basic features like page navigation and access to secure areas of the website.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Analytics Cookies</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We use analytics cookies to understand how visitors interact with our website. This helps us improve our services and user experience.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Functional Cookies</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                These cookies enable enhanced functionality and personalization, such as remembering your preferences and settings.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Types of Cookies We Use</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-300">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-300 px-4 py-2 text-left">Cookie Type</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Purpose</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Duration</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Session Cookies</td>
                      <td className="border border-gray-300 px-4 py-2">Maintain user session</td>
                      <td className="border border-gray-300 px-4 py-2">End of session</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Preference Cookies</td>
                      <td className="border border-gray-300 px-4 py-2">Remember user preferences</td>
                      <td className="border border-gray-300 px-4 py-2">1 year</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Analytics Cookies</td>
                      <td className="border border-gray-300 px-4 py-2">Website usage analytics</td>
                      <td className="border border-gray-300 px-4 py-2">2 years</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Managing Cookies</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                You can control and manage cookies through your browser settings. Most browsers allow you to refuse cookies or delete cookies that have already been set. Please note that disabling cookies may affect the functionality of our website.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
              <p className="text-gray-700 leading-relaxed">
                If you have any questions about our Cookie Policy, please contact us at:
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

export default CookiePolicy;
