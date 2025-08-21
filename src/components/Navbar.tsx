import React, { useState } from 'react'

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="container-custom">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-amazon-dark">
              Tairbek Tumanbaev
            </h1>
            <span className="ml-2 text-sm text-amazon-orange font-medium">
              Amazon Expert
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-amazon-orange transition-colors duration-300">
              Home
            </a>
            <a href="#features" className="text-gray-700 hover:text-amazon-orange transition-colors duration-300">
              Features
            </a>
            <a href="#about" className="text-gray-700 hover:text-amazon-orange transition-colors duration-300">
              About
            </a>
            <a href="#services" className="text-gray-700 hover:text-amazon-orange transition-colors duration-300">
              Services
            </a>
            <a href="#contact" className="text-gray-700 hover:text-amazon-orange transition-colors duration-300">
              Contact
            </a>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button className="btn-primary">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-amazon-orange focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-amazon-orange transition-colors duration-300">
                Home
              </a>
              <a href="#features" className="block px-3 py-2 text-gray-700 hover:text-amazon-orange transition-colors duration-300">
                Features
              </a>
              <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-amazon-orange transition-colors duration-300">
                About
              </a>
              <a href="#services" className="block px-3 py-2 text-gray-700 hover:text-amazon-orange transition-colors duration-300">
                Services
              </a>
              <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-amazon-orange transition-colors duration-300">
                Contact
              </a>
              <div className="px-3 py-2">
                <button className="btn-primary w-full">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
