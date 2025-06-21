
const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">Us</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            We provide solutions for your creative ideas
          </p>
        </div>

        {/* Company Introduction */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
              Empowering Small Businesses Worldwide
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Established in 2023, Nubits.AI Technology operates worldwide, delivering cutting-edge 
              technology solutions to empower small businesses. With a track record of customer 
              satisfaction and delivering top-notch software for nearly twenty years, don't hesitate 
              to reach out to us today.
            </p>
            <div className="pt-4">
              <button className="bg-gradient-to-r from-blue-600 to-teal-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-teal-700 transition-all duration-200 shadow-md hover:shadow-lg">
                Learn More About Our Journey
              </button>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="Software development and AI technology" 
              className="rounded-2xl shadow-2xl w-full transform hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-teal-600/20 rounded-2xl"></div>
          </div>
        </div>

        {/* Mission and Impact Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Mission and <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">Impact</span>
            </h3>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Our core mission encapsulates our dedication to pushing boundaries and crafting cutting-edge 
              solutions that cater to the evolving needs of modern businesses. We embark on this journey 
              with a three-fold approach:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg flex items-center justify-center mb-6 mx-auto">
                <span className="text-white text-2xl font-bold">I</span>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4 text-center">Innovation</h4>
              <p className="text-gray-600 leading-relaxed text-center">
                Innovation is at the heart of everything we do. We believe in challenging conventional 
                norms and exploring new horizons in technology. Our mission drives us to stay ahead of 
                the curve, constantly seeking novel ways to harness the power of AI, machine learning, 
                and other emerging technologies.
              </p>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-8 rounded-2xl">
              <div className="w-16 h-16 bg-gradient-to-r from-teal-600 to-teal-700 rounded-lg flex items-center justify-center mb-6 mx-auto">
                <span className="text-white text-2xl font-bold">E</span>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4 text-center">Empowerment</h4>
              <p className="text-gray-600 leading-relaxed text-center">
                We are driven by the goal of empowering businesses and individuals alike. Through our 
                services, we provide the tools and expertise needed to enhance operational efficiency, 
                unlock insights from data, and create seamless user experiences. We believe that by 
                empowering our clients, we contribute to their growth and success.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-purple-700 rounded-lg flex items-center justify-center mb-6 mx-auto">
                <span className="text-white text-2xl font-bold">I</span>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4 text-center">Impact</h4>
              <p className="text-gray-600 leading-relaxed text-center">
                Our ultimate mission is to make a positive impact that ripples through industries and 
                communities. We understand the potential of technology to bring about transformative 
                change, and we are dedicated to utilizing this potential responsibly and ethically.
              </p>
            </div>
          </div>
        </div>

        {/* Our Impact Section */}
        <div className="bg-gray-50 rounded-3xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">Impact</span>
            </h3>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              The impact of our mission is evident in the success stories of our clients and the broader 
              communities we serve. Through our innovative technology solutions, we have achieved remarkable outcomes:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h4 className="text-xl font-bold text-gray-900 mb-3">Business Growth</h4>
              <p className="text-gray-600 leading-relaxed">
                We take pride in the role we play in fostering business growth. By developing tailor-made 
                software, crafting seamless apps, and integrating AI-driven insights, we equip businesses 
                to expand their horizons, reach new markets, and achieve sustainable success.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <h4 className="text-xl font-bold text-gray-900 mb-3">Healthcare Transformation</h4>
              <p className="text-gray-600 leading-relaxed">
                In the healthcare sector, our impact is felt in the improved patient care and operational 
                efficiency our solutions bring. From streamlining patient records with AI-powered analytics 
                to enhancing diagnostics through machine learning, we contribute to healthier communities.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <h4 className="text-xl font-bold text-gray-900 mb-3">Technological Advancement</h4>
              <p className="text-gray-600 leading-relaxed">
                We contribute to the advancement of technology by constantly pushing the envelope. Our impact 
                is seen in the way we shape trends, inspire innovation in others, and lead the way in adopting 
                emerging technologies that transform industries.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <h4 className="text-xl font-bold text-gray-900 mb-3">Community Engagement</h4>
              <p className="text-gray-600 leading-relaxed">
                Our mission extends beyond corporate success. We believe in giving back to the community by 
                engaging in initiatives that utilize technology for social good. This includes partnering 
                with non-profit organizations and educational institutions to drive change in underserved areas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
