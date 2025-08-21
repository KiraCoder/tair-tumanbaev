import React from 'react'

const Features: React.FC = () => {
  const features = [
    {
      icon: "📈",
      title: "Revenue Optimization",
      description: "Strategic pricing, inventory management, and sales funnel optimization to maximize your Amazon revenue."
    },
    {
      icon: "🎯",
      title: "Listing Optimization",
      description: "SEO-optimized titles, compelling descriptions, and high-converting images that boost your search rankings."
    },
    {
      icon: "📊",
      title: "Data-Driven Insights",
      description: "Advanced analytics and competitor research to make informed decisions and stay ahead of the competition."
    },
    {
      icon: "🚀",
      title: "Growth Strategies",
      description: "Proven scaling techniques, new product launches, and market expansion strategies for sustainable growth."
    },
    {
      icon: "🛡️",
      title: "Account Protection",
      description: "Best practices to maintain account health, avoid suspensions, and build a sustainable Amazon business."
    },
    {
      icon: "💡",
      title: "Expert Guidance",
      description: "One-on-one coaching and personalized strategies tailored to your specific product niche and goals."
    }
  ]

  return (
    <section id="features" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Choose{' '}
            <span className="text-amazon-orange">Tairbek Tumanbaev</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I combine years of Amazon selling experience with proven strategies to help you 
            achieve exceptional results and build a thriving e-commerce business.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-amazon-orange/20"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Success Metrics */}
        <div className="mt-20 bg-gradient-to-r from-amazon-orange to-orange-600 rounded-2xl p-8 md:p-12">
          <div className="text-center text-white mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Proven Results That Speak for Themselves
            </h3>
            <p className="text-xl opacity-90">
              Join hundreds of successful Amazon sellers who have transformed their businesses
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">$50M+</div>
              <div className="text-sm opacity-90">Total Revenue Generated</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">95%</div>
              <div className="text-sm opacity-90">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">3.2x</div>
              <div className="text-sm opacity-90">Average ROI</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">24/7</div>
              <div className="text-sm opacity-90">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
