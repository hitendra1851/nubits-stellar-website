
const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">Us</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-8"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
              Crafting a Customer-Centric Development Approach
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              At Nubits AI, we believe in the power of innovation to transform businesses and drive meaningful growth. 
              Our team of experts combines cutting-edge technology with deep industry knowledge to deliver solutions 
              that exceed expectations.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Ignite Innovation with Flawless Execution and Transformative Solutions. We partner with organizations 
              to navigate the complex technological landscape and unlock new possibilities for growth and efficiency.
            </p>
            <div className="pt-4">
              <button className="bg-gradient-to-r from-blue-600 to-teal-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-teal-700 transition-all duration-200 shadow-md hover:shadow-lg">
                Learn More About Our Mission
              </button>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="Team collaboration" 
              className="rounded-2xl shadow-2xl w-full transform hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-teal-600/20 rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
