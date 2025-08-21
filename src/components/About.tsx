import React from 'react'

const About: React.FC = () => {
  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - Story */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-amazon-orange/10 text-amazon-orange rounded-full text-sm font-medium">
                My Story
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                From Struggling Seller to{' '}
                <span className="text-amazon-orange">Amazon Expert</span>
              </h2>
            </div>

            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                My journey began in 2018 when I started my first Amazon business. Like many sellers, 
                I faced countless challenges - poor rankings, low conversions, and frustrating losses. 
                But I refused to give up.
              </p>
              
              <p>
                Through relentless research, testing, and optimization, I discovered the winning 
                strategies that transformed my struggling business into a multi-million dollar success. 
                I went from $500 monthly sales to over $50,000 in just 18 months.
              </p>
              
              <p>
                Today, I'm passionate about sharing these proven strategies with other sellers. 
                I've helped over 500 Amazon entrepreneurs achieve similar success, with many 
                seeing 300%+ revenue increases within their first 6 months.
              </p>
            </div>

            {/* Credentials */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="text-2xl font-bold text-amazon-orange mb-2">5+ Years</div>
                <div className="text-sm text-gray-600">Amazon Selling Experience</div>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="text-2xl font-bold text-amazon-orange mb-2">$50M+</div>
                <div className="text-sm text-gray-600">Revenue Generated</div>
              </div>
            </div>
          </div>

          {/* Right Content - Timeline/Experience */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">My Journey</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-amazon-orange rounded-full flex items-center justify-center text-white font-bold">
                    2018
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Started First Amazon Business</h4>
                    <p className="text-gray-600 text-sm">Began with $500 investment, faced initial struggles</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-amazon-orange rounded-full flex items-center justify-center text-white font-bold">
                    2019
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Breakthrough Discovery</h4>
                    <p className="text-gray-600 text-sm">Developed winning optimization strategies</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-amazon-orange rounded-full flex items-center justify-center text-white font-bold">
                    2020
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">$50K Monthly Revenue</h4>
                    <p className="text-gray-600 text-sm">Achieved major milestone through optimization</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-amazon-orange rounded-full flex items-center justify-center text-white font-bold">
                    2021
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Started Consulting</h4>
                    <p className="text-gray-600 text-sm">Began helping other sellers achieve success</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-amazon-orange rounded-full flex items-center justify-center text-white font-bold">
                    2023
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">500+ Sellers Helped</h4>
                    <p className="text-gray-600 text-sm">Expanded to help hundreds of entrepreneurs</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Core Values */}
            <div className="bg-gradient-to-r from-amazon-orange to-orange-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">My Core Values</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Transparency in all business practices</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Results-driven approach</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Continuous learning and adaptation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Client success is my success</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
