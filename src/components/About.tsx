
import { Target, Lightbulb, Users, TrendingUp, Heart, Cpu, Globe2, Award } from 'lucide-react';

const About = () => {
  const missionItems = [
    {
      icon: <Lightbulb size={32} />,
      title: "Innovation",
      description: "Innovation is at the heart of everything we do. We believe in challenging conventional norms and exploring new horizons in technology. Our mission drives us to stay ahead of the curve, constantly seeking novel ways to harness the power of AI, machine learning, and other emerging technologies."
    },
    {
      icon: <Users size={32} />,
      title: "Empowerment",
      description: "We are driven by the goal of empowering businesses and individuals alike. Through our services, we provide the tools and expertise needed to enhance operational efficiency, unlock insights from data, and create seamless user experiences."
    },
    {
      icon: <Target size={32} />,
      title: "Impact",
      description: "Our ultimate mission is to make a positive impact that ripples through industries and communities. We understand the potential of technology to bring about transformative change, and we are dedicated to utilizing this potential responsibly and ethically."
    }
  ];

  const impactAreas = [
    {
      icon: <TrendingUp size={24} />,
      title: "Business Growth",
      description: "We take pride in the role we play in fostering business growth. By developing tailor-made software, crafting seamless apps, and integrating AI-driven insights, we equip businesses to expand their horizons."
    },
    {
      icon: <Heart size={24} />,
      title: "Healthcare Transformation",
      description: "In the healthcare sector, our impact is felt in the improved patient care and operational efficiency our solutions bring. From streamlining patient records with AI-powered analytics to enhancing diagnostics through machine learning."
    },
    {
      icon: <Cpu size={24} />,
      title: "Technological Advancement",
      description: "We contribute to the advancement of technology by constantly pushing the envelope. Our impact is seen in the way we shape trends, inspire innovation in others, and lead the way in adopting emerging technologies."
    }
  ];

  const values = [
    {
      title: "Innovation",
      description: "We constantly push the boundaries of what's possible with AI technology, never settling for the status quo. Our commitment to innovation drives us to develop solutions that are ahead of the curve."
    },
    {
      title: "Integrity",
      description: "We believe in transparent, honest relationships with our clients. Our ethical approach to AI development and data handling ensures that we always act with integrity and respect."
    },
    {
      title: "Excellence",
      description: "We strive for excellence in everything we do, from the quality of our code to the support we provide our clients. Our commitment to excellence is reflected in the results we deliver."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="bg-gradient-to-r from-blue-600 to-teal-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
              🚀 Established 2023
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Pioneering the Future of <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">AI Technology</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            We provide solutions for your creative ideas. Established in 2023, Nubits.AI Technology operates worldwide, delivering cutting-edge technology solutions to empower small businesses.
          </p>
        </div>

        {/* Company Introduction */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
              About Nubits AI
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Established in 2023, Nubits.AI Technology operates worldwide, delivering cutting-edge 
              technology solutions to empower small businesses. With a track record of customer 
              satisfaction and delivering top-notch software, we understand what it takes to exceed expectations.
            </p>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">2023</div>
                <div className="text-sm text-gray-600">Founded</div>
              </div>
              <div>
                <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">Global</div>
                <div className="text-sm text-gray-600">Reach</div>
              </div>
              <div>
                <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">AI</div>
                <div className="text-sm text-gray-600">Solutions</div>
              </div>
            </div>
            <div className="pt-4">
              <button className="bg-gradient-to-r from-blue-600 to-teal-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-teal-700 transition-all duration-200 shadow-md hover:shadow-lg">
                Get In Touch
              </button>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="AI Technology and Circuit Board" 
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
            {missionItems.map((item, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg flex items-center justify-center mb-6 mx-auto text-white">
                  {item.icon}
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4 text-center">{item.title}</h4>
                <p className="text-gray-600 leading-relaxed text-center">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Our Impact Section */}
        <div className="bg-gray-50 rounded-3xl p-8 md:p-12 mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">Impact</span>
            </h3>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Transforming Industries - The impact of our mission is evident in the success stories of our clients and the broader communities we serve.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {impactAreas.map((area, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-teal-600 rounded-lg flex items-center justify-center mb-4 text-white">
                  {area.icon}
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{area.title}</h4>
                <p className="text-gray-600 leading-relaxed">{area.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">Us</span>
            </h3>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Experience, Expertise, and Dedication - Our team combines knowledge, skills, and unwavering commitment to deliver exceptional results.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-teal-600 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Award className="text-white" size={32} />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Customer Satisfaction</h4>
              <p className="text-gray-600">With a track record of customer satisfaction and delivering top-notch software, we understand what it takes to exceed expectations.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-teal-600 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Globe2 className="text-white" size={32} />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Global Operations</h4>
              <p className="text-gray-600">Operating worldwide, we bring cutting-edge technology solutions to businesses across different markets and industries.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-teal-600 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Users className="text-white" size={32} />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Small Business Focus</h4>
              <p className="text-gray-600">We specialize in empowering small businesses with enterprise-grade AI solutions that were previously only available to large corporations.</p>
            </div>
          </div>
        </div>

        {/* Our Values */}
        <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-3xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">Values</span>
            </h3>
            <p className="text-lg text-gray-600">What Drives Us - The core values that guide our work and define our company culture</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md">
                <h4 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h4>
                <p className="text-gray-600 leading-relaxed italic">"{value.description}"</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="bg-gradient-to-r from-blue-600 to-teal-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-teal-700 transition-all duration-200 shadow-md">
              Ready to Work With Us?
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
