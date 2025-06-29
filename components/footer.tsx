import Link from "next/link"
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, ArrowRight } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Main Footer */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
            {/* Company Info */}
            <div className="space-y-6">
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold text-xl">CT</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Corporate Training</h3>
                    <p className="text-sm text-gray-400">Data Analytics Excellence</p>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Empowering professionals with cutting-edge skills in data analytics and business intelligence for over
                  17 years.
                </p>
              </div>

              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-lg flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110">
                  <Facebook className="w-5 h-5" />
                </div>
                <div className="w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-lg flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110">
                  <Twitter className="w-5 h-5" />
                </div>
                <div className="w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-lg flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110">
                  <Linkedin className="w-5 h-5" />
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-white">Quick Links</h4>
              <ul className="space-y-3">
                {[
                  { name: "Home", href: "/" },
                  { name: "About Us", href: "/about" },
                  { name: "Training Modules", href: "/training-modules" },
                  { name: "Expert Trainers", href: "/trainer-team" },
                  { name: "Testimonials", href: "/testimonials" },
                  { name: "Contact", href: "/contact" },
                ].map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 flex items-center group"
                    >
                      <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Training Programs */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-white">Training Programs</h4>
              <ul className="space-y-3">
                {[
                  "Data Analytics Fundamentals",
                  "Advanced Excel Mastery",
                  "Power BI Professional",
                  "MIS Reporting Excellence",
                  "Business Intelligence Suite",
                  "Corporate Analytics Program",
                ].map((program) => (
                  <li key={program}>
                    <Link
                      href="#"
                      className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 flex items-center group text-sm"
                    >
                      <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      {program}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-white">Get In Touch</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3 group">
                  <div className="w-10 h-10 bg-blue-600/20 rounded-lg flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                    <Phone className="w-5 h-5 text-blue-400 group-hover:text-white" />
                  </div>
                  <div>
                    <p className="text-white font-medium">+91 8802000175</p>
                    <p className="text-gray-400 text-sm">Mon-Fri: 9:00 AM - 6:00 PM</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 group">
                  <div className="w-10 h-10 bg-blue-600/20 rounded-lg flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                    <Mail className="w-5 h-5 text-blue-400 group-hover:text-white" />
                  </div>
                  <div>
                    <p className="text-white font-medium">info@webjyoti.com</p>
                    <p className="text-gray-400 text-sm">Quick response guaranteed</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 group">
                  <div className="w-10 h-10 bg-blue-600/20 rounded-lg flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                    <MapPin className="w-5 h-5 text-blue-400 group-hover:text-white" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Gurugram, India</p>
                    <p className="text-gray-400 text-sm">55+ cities across India</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700 py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">&copy; 2025 Corporate Training Programs. All rights reserved.</p>
            <div className="flex items-center space-x-6 text-sm">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                Terms of Service
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
