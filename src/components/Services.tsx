
const Services = () => {
  const services = [
    {
      title: "eDiscovery Solutions",
      description: "Advanced electronic discovery platforms that streamline legal processes and ensure compliance with regulatory requirements.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["Data Processing", "Legal Compliance", "Advanced Analytics"]
    },
    {
      title: "Healthcare Technology",
      description: "Innovative healthcare solutions that improve patient outcomes and optimize operational efficiency across medical institutions.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["Patient Management", "Data Security", "AI Diagnostics"]
    },
    {
      title: "Custom Development",
      description: "Tailored software solutions designed to meet your unique business requirements and drive digital transformation.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["Scalable Architecture", "Modern Technologies", "Agile Methodology"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">Services</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive technology solutions designed to propel your business forward
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group">
              <div className="relative">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full mr-3"></div>
                      {feature}
                    </div>
                  ))}
                </div>
                
                <button className="w-full bg-gradient-to-r from-blue-600 to-teal-600 text-white py-2 px-4 rounded-lg font-semibold hover:from-blue-700 hover:to-teal-700 transition-all duration-200">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
