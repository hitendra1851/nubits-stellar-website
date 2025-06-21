
const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-teal-50 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-teal-200 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          {/* Hero Image */}
          <div className="mb-8">
            <img 
              src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
              alt="AI Technology Circuit Board" 
              className="w-full max-w-md mx-auto rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
              Nubits AI:
            </span>
            <br />
            Where Ingenuity Meets Technology
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
            Empowering Innovation, Driving Growth: Your Strategic Technology Partner for 
            Cutting-Edge Solutions in eDiscovery, Healthcare, and Beyond.
          </p>

          {/* CTA Button */}
          <div className="space-y-4">
            <button className="bg-gradient-to-r from-blue-600 to-teal-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-blue-700 hover:to-teal-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl">
              Discover Our Solutions
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
