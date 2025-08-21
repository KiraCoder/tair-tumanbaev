import React from 'react'

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      business: "Home & Garden Products",
      image: "👩‍💼",
      quote: "Tairbek transformed my struggling Amazon business completely. In just 3 months, my revenue increased from $2,000 to $15,000 monthly. His strategies are game-changing!",
      results: "Revenue: +650% in 3 months",
      rating: 5
    },
    {
      name: "Michael Chen",
      business: "Electronics Accessories",
      image: "👨‍💻",
      quote: "I was skeptical at first, but Tairbek's expertise is unmatched. He helped me optimize my listings and PPC campaigns, resulting in a 400% increase in sales.",
      results: "Sales: +400% in 4 months",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      business: "Fashion & Apparel",
      image: "👩‍🎨",
      quote: "Working with Tairbek was the best investment I've made in my business. His attention to detail and personalized approach helped me scale from $5K to $50K monthly.",
      results: "Revenue: +900% in 6 months",
      rating: 5
    },
    {
      name: "David Thompson",
      business: "Sports Equipment",
      image: "👨‍🏃",
      quote: "Tairbek's strategies are pure gold. He helped me identify untapped opportunities and optimize my entire Amazon presence. My business has never been stronger.",
      results: "Profit: +350% in 5 months",
      rating: 5
    },
    {
      name: "Lisa Wang",
      business: "Beauty & Personal Care",
      image: "👩‍🔬",
      quote: "The results speak for themselves. Tairbek helped me launch new products successfully and optimize my existing listings. My conversion rate improved by 200%.",
      results: "Conversion: +200% in 2 months",
      rating: 5
    },
    {
      name: "Robert Martinez",
      business: "Automotive Parts",
      image: "👨‍🔧",
      quote: "Tairbek's expertise in Amazon optimization is incredible. He helped me navigate complex algorithms and competition. My business is now generating $30K+ monthly.",
      results: "Revenue: +500% in 8 months",
      rating: 5
    }
  ]

  const renderStars = (rating: number) => {
    return Array.from({ length: rating }, (_, i) => (
      <span key={i} className="text-yellow-400">⭐</span>
    ))
  }

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What My Clients{' '}
            <span className="text-amazon-orange">Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take my word for it. Here's what Amazon sellers are saying about 
            their experience working with me and the results they've achieved.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="flex items-center mb-6">
                <div className="text-4xl mr-4">{testimonial.image}</div>
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.business}</p>
                </div>
              </div>

              <div className="mb-4">
                {renderStars(testimonial.rating)}
              </div>

              <blockquote className="text-gray-700 mb-6 italic">
                "{testimonial.quote}"
              </blockquote>

              <div className="bg-amazon-orange/10 text-amazon-orange px-4 py-2 rounded-lg text-sm font-semibold">
                {testimonial.results}
              </div>
            </div>
          ))}
        </div>

        {/* Overall Rating */}
        <div className="mt-16 bg-gradient-to-r from-amazon-orange to-orange-600 rounded-2xl p-8 md:p-12 text-center text-white">
          <div className="mb-6">
            <div className="text-4xl mb-4">
              {renderStars(5)}
            </div>
            <h3 className="text-3xl font-bold mb-2">4.9/5 Average Rating</h3>
            <p className="text-xl opacity-90">Based on 500+ client reviews</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl font-bold mb-2">98%</div>
              <div className="text-sm opacity-90">Satisfaction Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">95%</div>
              <div className="text-sm opacity-90">Success Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">24h</div>
              <div className="text-sm opacity-90">Response Time</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">500+</div>
              <div className="text-sm opacity-90">Happy Clients</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Join These Success Stories?
          </h3>
          <p className="text-xl text-gray-600 mb-8">
            Let's work together to transform your Amazon business and achieve similar results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary text-lg px-8 py-4">
              Start Your Success Journey
            </button>
            <button className="btn-secondary text-lg px-8 py-4">
              Schedule Free Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
