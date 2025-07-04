"use client"

import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Menu, X, ChevronDown } from "lucide-react"
import { useState } from "react"

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <div>
      {/* Top Header */}
      <div className="bg-gradient-to-r from-slate-800 to-slate-900 text-white py-3 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-8 overflow-hidden cursor-pointer">
            <div className="flex items-center space-x-2 hover:text-blue-300 transition-colors duration-300">
              <Phone className="w-4 h-4 flex-shrink-0" />
              <span className="hidden sm:inline">+91 8802000175</span>
              <span className="sm:hidden">Call Us</span>
            </div>
            <div className="hidden md:flex items-center space-x-2 hover:text-blue-300 transition-colors duration-300">
              <Mail className="w-4 h-4" />
              <span>info@webjyoti.com</span>
            </div>
            <div className="hidden lg:flex items-center space-x-2 hover:text-blue-300 transition-colors duration-300">
              <MapPin className="w-4 h-4" />
              <span>Gurugram, India</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <span className="hidden sm:inline text-xs text-gray-300">Follow Us:</span>
            <div className="flex items-center space-x-3">
              <Facebook className="w-4 h-4 hover:text-blue-400 cursor-pointer transition-all duration-300 hover:scale-110" />
              <Twitter className="w-4 h-4 hover:text-blue-400 cursor-pointer transition-all duration-300 hover:scale-110" />
              <Linkedin className="w-4 h-4 hover:text-blue-400 cursor-pointer transition-all duration-300 hover:scale-110" />
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-white shadow-xl border-b border-blue-50 sticky top-0 z-header">
        <div className="max-w-7xl mx-auto px-4 relative z-header">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-3 group">
                <div className="relative w-12 h-12 group-hover:scale-105 transition-transform duration-300">
                  <Image
                    src="/webs-jyoti-logo-correct.jpeg"
                    alt="Webs Jyoti Logo"
                    width={48}
                    height={48}
                    className="rounded-xl object-contain"
                  />
                </div>
                <div>
                  <div className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                    Corporate Training
                  </div>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              <Link
                href="/"
                className="px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-300 font-medium"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-300 font-medium"
              >
                About
              </Link>
              <div className="relative group">
                <button className="px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-300 font-medium flex items-center space-x-1">
                  <span>Training</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-2xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <div className="p-2">
                    <Link
                      href="/training-modules"
                      className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-300"
                    >
                      Training Modules
                    </Link>
                    <a
                      href="https://corporate.websjyoti.com/hr_login.php"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-300"
                    >
                      LMS Platform
                    </a>
                    <Link
                      href="/trainer-team"
                      className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-300"
                    >
                      Expert Trainers
                    </Link>
                  </div>
                </div>
              </div>
              <Link
                href="/locations"
                className="px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-300 font-medium"
              >
                Locations
              </Link>
              <Link
                href="/gallery"
                className="px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-300 font-medium"
              >
                Gallery
              </Link>
              <Link
                href="/testimonials"
                className="px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-300 font-medium"
              >
                Testimonials
              </Link>
              <Link
                href="/contact"
                className="px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-300 font-medium"
              >
                Contact
              </Link>
              <Link
                href="/careers"
                className="px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-300 font-medium"
              >
                Careers
              </Link>
              <Link
                href="/enquire"
                className="ml-4 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-full hover:from-blue-700 hover:to-indigo-800 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Enquire Now
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={toggleMobileMenu}
                className="p-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg focus:outline-none transition-all duration-300"
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          <div
            className={`lg:hidden transition-all duration-300 ease-in-out ${
              isMobileMenuOpen ? "max-h-screen opacity-100 visible" : "max-h-0 opacity-0 invisible overflow-hidden"
            }`}
          >
            <div className="py-6 space-y-2 border-t border-gray-100 bg-gray-50 rounded-b-2xl mx-4 mb-4">
              <Link
                href="/"
                onClick={closeMobileMenu}
                className="flex items-center space-x-3 px-6 py-4 text-gray-700 hover:text-blue-600 hover:bg-white transition-all duration-300 rounded-xl mx-2 font-medium"
              >
                <span className="text-xl">🏠</span>
                <span>Home</span>
              </Link>
              <Link
                href="/about"
                onClick={closeMobileMenu}
                className="flex items-center space-x-3 px-6 py-4 text-gray-700 hover:text-blue-600 hover:bg-white transition-all duration-300 rounded-xl mx-2 font-medium"
              >
                <span className="text-xl">👥</span>
                <span>About</span>
              </Link>
              <Link
                href="/training-modules"
                onClick={closeMobileMenu}
                className="flex items-center space-x-3 px-6 py-4 text-gray-700 hover:text-blue-600 hover:bg-white transition-all duration-300 rounded-xl mx-2 font-medium"
              >
                <span className="text-xl">📚</span>
                <span>Training Modules</span>
              </Link>
              <Link
                href="/trainer-team"
                onClick={closeMobileMenu}
                className="flex items-center space-x-3 px-6 py-4 text-gray-700 hover:text-blue-600 hover:bg-white transition-all duration-300 rounded-xl mx-2 font-medium"
              >
                <span className="text-xl">👨‍🏫</span>
                <span>Expert Trainers</span>
              </Link>
              <Link
                href="/locations"
                onClick={closeMobileMenu}
                className="flex items-center space-x-3 px-6 py-4 text-gray-700 hover:text-blue-600 hover:bg-white transition-all duration-300 rounded-xl mx-2 font-medium"
              >
                <span className="text-xl">📍</span>
                <span>Locations</span>
              </Link>
              <a
                href="https://corporate.websjyoti.com/hr_login.php"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMobileMenu}
                className="flex items-center space-x-3 px-6 py-4 text-gray-700 hover:text-blue-600 hover:bg-white transition-all duration-300 rounded-xl mx-2 font-medium"
              >
                <span className="text-xl">💻</span>
                <span>LMS Platform</span>
              </a>
              <Link
                href="/gallery"
                onClick={closeMobileMenu}
                className="flex items-center space-x-3 px-6 py-4 text-gray-700 hover:text-blue-600 hover:bg-white transition-all duration-300 rounded-xl mx-2 font-medium"
              >
                <span className="text-xl">🖼️</span>
                <span>Gallery</span>
              </Link>
              <Link
                href="/testimonials"
                onClick={closeMobileMenu}
                className="flex items-center space-x-3 px-6 py-4 text-gray-700 hover:text-blue-600 hover:bg-white transition-all duration-300 rounded-xl mx-2 font-medium"
              >
                <span className="text-xl">💬</span>
                <span>Testimonials</span>
              </Link>
              <Link
                href="/contact"
                onClick={closeMobileMenu}
                className="flex items-center space-x-3 px-6 py-4 text-gray-700 hover:text-blue-600 hover:bg-white transition-all duration-300 rounded-xl mx-2 font-medium"
              >
                <span className="text-xl">📧</span>
                <span>Contact</span>
              </Link>
              <Link
                href="/careers"
                onClick={closeMobileMenu}
                className="flex items-center space-x-3 px-6 py-4 text-gray-700 hover:text-blue-600 hover:bg-white transition-all duration-300 rounded-xl mx-2 font-medium"
              >
                <span className="text-xl">💼</span>
                <span>Careers</span>
              </Link>
              <Link
                href="/enquire"
                onClick={closeMobileMenu}
                className="flex items-center justify-center space-x-3 px-6 py-4 bg-gradient-to-r from-blue-600 to-indigo-700 text-white hover:from-blue-700 hover:to-indigo-800 transition-all duration-300 rounded-xl mx-2 font-semibold shadow-lg"
              >
                <span className="text-xl">❓</span>
                <span>Enquire Now</span>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}
