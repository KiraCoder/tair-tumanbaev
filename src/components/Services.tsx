import React from 'react'

const Services: React.FC = () => {
  const services = [
    {
      name: "Starter Package",
      price: "$997",
      duration: "1 Month",
      description: "Perfect for new sellers looking to establish a strong foundation",
      features: [
        "Complete listing optimization",
        "SEO keyword research",
        "Competitor analysis",
        "Basic PPC setup",
        "Email support",
        "1 strategy call"
      ],
      popular: false
    },
    {
      name: "Growth Package",
      price: "$2,497",
      duration: "3 Months",
      description: "Comprehensive strategy for established sellers ready to scale",
      features: [
        "Everything in Starter Package",
        "Advanced PPC management",
        "Inventory optimization",
        "Review management",
        "Weekly check-ins",
        "3 strategy calls",
        "Priority support"
      ],
      popular: true
    },
    {
      name: "Elite Package",
      price: "$4,997",
      duration: "6 Months",
      description: "Full-service management for serious sellers targeting 7-figure revenue",
      features: [
        "Everything in Growth Package",
        "Full account management",
        "New product launches",
        "Brand building strategy",
        "Daily monitoring",
        "Unlimited calls",
        "24/7 priority support"
      ],
      popular: false
    }
  ]

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Choose Your{' '}
            <span className="text-amazon-orange">Success Path</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I offer three comprehensive packages designed to meet you where you are 
            and take you where you want to be. Each package includes proven strategies 
            and personalized support.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`relative rounded-2xl p-8 shadow-lg transition-all duration-300 hover:shadow-xl ${
                service.popular 
                  ? 'bg-gradient-to-br from-amazon-orange to-orange-600 text-white border-2 border-amazon-orange' 
                  : 'bg-white border-2 border-gray-100 hover:border-amazon-orange/20'
              }`}
            >
              {service.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-white text-amazon-orange px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className={`text-2xl font-bold mb-2 ${
                  service.popular ? 'text-white' : 'text-gray-900'
                }`}>
                  {service.name}
                </h3>
                <div className="mb-4">
                  <span className={`text-4xl font-bold ${
                    service.popular ? 'text-white' : 'text-amazon-orange'
                  }`}>
                    {service.price}
                  </span>
                  <span className={`text-lg ${
                    service.popular ? 'text-white/80' : 'text-gray-600'
                  }`}>
                    /{service.duration}
                  </span>
                </div>
                <p className={`text-sm ${
                  service.popular ? 'text-white/90' : 'text-gray-600'
                }`}>
                  {service.description}
                </p>
              </div>

              <ul className="space-y-4 mb-8">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start space-x-3">
                    <div className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${
                      service.popular 
                        ? 'bg-white/20 text-white' 
                        : 'bg-amazon-orange/10 text-amazon-orange'
                    }`}>
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className={`text-sm ${
                      service.popular ? 'text-white/90' : 'text-gray-600'
                    }`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                service.popular
                  ? 'bg-white text-amazon-orange hover:bg-gray-100'
                  : 'bg-amazon-orange text-white hover:bg-orange-600'
              }`}>
                Get Started
              </button>
            </div>
          ))}
        </div>

        {/* Additional Services */}
        <div className="mt-20 bg-gray-50 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Additional Services
            </h3>
            <p className="text-lg text-gray-600">
              Need something specific? I offer à la carte services for targeted improvements
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg p-6 text-center shadow-md">
              <div className="text-3xl mb-4">📝</div>
              <h4 className="font-bold text-gray-900 mb-2">Listing Audit</h4>
              <p className="text-sm text-gray-600 mb-4">Complete analysis and optimization recommendations</p>
              <div className="text-2xl font-bold text-amazon-orange">$297</div>
            </div>

            <div className="bg-white rounded-lg p-6 text-center shadow-md">
              <div className="text-3xl mb-4">🎯</div>
              <h4 className="font-bold text-gray-900 mb-2">PPC Setup</h4>
              <p className="text-sm text-gray-600 mb-4">Professional campaign creation and optimization</p>
              <div className="text-2xl font-bold text-amazon-orange">$497</div>
            </div>

            <div className="bg-white rounded-lg p-6 text-center shadow-md">
              <div className="text-3xl mb-4">📊</div>
              <h4 className="font-bold text-gray-900 mb-2">Strategy Session</h4>
              <p className="text-sm text-gray-600 mb-4">1-hour consultation with action plan</p>
              <div className="text-2xl font-bold text-amazon-orange">$197</div>
            </div>

            <div className="bg-white rounded-lg p-6 text-center shadow-md">
              <div className="text-3xl mb-4">🚀</div>
              <h4 className="font-bold text-gray-900 mb-2">Product Launch</h4>
              <p className="text-sm text-gray-600 mb-4">Complete new product optimization</p>
              <div className="text-2xl font-bold text-amazon-orange">$397</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
