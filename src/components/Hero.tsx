import React from 'react'

const Hero: React.FC = () => {
  return (
    <section id="home" className="pt-20 bg-gradient-to-br from-blue-50 to-orange-50">
      <div className="container-custom section-padding">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-amazon-orange/10 text-amazon-orange rounded-full text-sm font-medium">
                🚀 Amazon Seller Success Expert
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                Transform Your{' '}
                <span className="text-amazon-orange">Amazon Business</span>
                {' '}Into a Sales Powerhouse
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Hi, I'm <strong>Tairbek Tumanbaev</strong>. I've helped hundreds of Amazon sellers 
                increase their revenue by 300%+ through strategic optimization, listing improvements, 
                and proven growth strategies.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-primary text-lg px-8 py-4">
                Start Your Success Journey
              </button>
              <button className="btn-secondary text-lg px-8 py-4">
                Watch Success Stories
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-amazon-orange">300%+</div>
                <div className="text-sm text-gray-600">Average Revenue Increase</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amazon-orange">500+</div>
                <div className="text-sm text-gray-600">Sellers Helped</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amazon-orange">5+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image/Illustration */}
          <div className="relative">
            <div className="bg-gradient-to-br from-amazon-orange to-orange-600 rounded-2xl p-8 shadow-2xl">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="text-sm text-gray-500">Amazon Seller Central</div>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-gray-100 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <span className="font-medium">Product Sales</span>
                      <span className="text-green-600 font-bold">+247%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{width: '85%'}}></div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-100 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <span className="font-medium">Conversion Rate</span>
                      <span className="text-blue-600 font-bold">+156%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                      <div className="bg-blue-500 h-2 rounded-full" style={{width: '72%'}}></div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-100 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <span className="font-medium">Revenue Growth</span>
                      <span className="text-amazon-orange font-bold">+312%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                      <div className="bg-amazon-orange h-2 rounded-full" style={{width: '95%'}}></div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 text-center">
                  <div className="text-2xl font-bold text-gray-800">$127,450</div>
                  <div className="text-sm text-gray-600">Monthly Revenue</div>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-white rounded-lg p-4 shadow-lg">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-amazon-orange rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">⭐</span>
                </div>
                <div>
                  <div className="font-bold text-sm">4.9/5 Rating</div>
                  <div className="text-xs text-gray-500">500+ Reviews</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
