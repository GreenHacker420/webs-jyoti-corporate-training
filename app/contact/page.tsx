import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Clock, CheckCircle, MessageCircle } from "lucide-react"

export default function ContactPage() {
  const trainingPrograms = [
    "Data Analytics Fundamentals",
    "Advanced Excel Mastery",
    "Power BI Professional",
    "MIS Reporting Excellence",
    "Business Intelligence Suite",
    "Corporate Analytics Program",
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">Contact Us</h1>
          <p className="text-xl text-white/90 max-w-4xl mx-auto">
            Corporate Training Excellence – Elevate Your Team's Performance with India's Leading Corporate Training
            Programs. Get in touch with our experts today!
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-stretch">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-10 border border-gray-100 flex flex-col">
              <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
                Send us a Message
              </h2>
              
              <form className="space-y-6 flex-grow">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="first-name" className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <Input
                      id="first-name"
                      name="first-name"
                      placeholder="Enter your first name"
                      required
                      className="transition-all duration-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-black"
                    />
                  </div>
                  <div>
                    <label htmlFor="last-name" className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <Input
                      id="last-name"
                      name="last-name"
                      placeholder="Enter your last name"
                      required
                      className="transition-all duration-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-black"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Enter your email"
                      required
                      className="transition-all duration-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-black"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="Enter your phone number"
                      required
                      className="transition-all duration-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-black"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Company/Organization
                    </label>
                    <Input
                      id="company"
                      name="company"
                      placeholder="Enter your company name"
                      className="transition-all duration-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-black"
                    />
                  </div>
                  <div>
                    <label htmlFor="job-title" className="block text-sm font-medium text-gray-700 mb-2">
                      Job Title
                    </label>
                    <Input
                      id="job-title"
                      name="job-title"
                      placeholder="Enter your job title"
                      className="transition-all duration-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-black"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="training-interest" className="block text-sm font-medium text-gray-700 mb-2">
                    Training Program Interest *
                  </label>
                  <select
                    id="training-interest"
                    name="training-interest"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 bg-white text-black"
                  >
                    <option value="">Select a training program</option>
                    {trainingPrograms.map((program, index) => (
                      <option key={index} value={program}>
                        {program}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="training-mode" className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Training Mode
                    </label>
                    <select
                      id="training-mode"
                      name="training-mode"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 bg-white text-black"
                    >
                      <option value="">Select training mode</option>
                      <option value="online">Online</option>
                      <option value="offline">Offline</option>
                      <option value="hybrid">Hybrid</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="participants" className="block text-sm font-medium text-gray-700 mb-2">
                      Number of Participants
                    </label>
                    <select
                      id="participants"
                      name="participants"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 bg-white text-black"
                    >
                      <option value="">Select number</option>
                      <option value="1">Individual (1)</option>
                      <option value="2-5">Small Group (2-5)</option>
                      <option value="6-15">Medium Group (6-15)</option>
                      <option value="16+">Large Group (16+)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your training requirements, timeline, or any questions you have..."
                    rows={4}
                    required
                    className="transition-all duration-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-black"
                  />
                </div>

                <div className="flex items-center space-x-2">
                  <input 
                    type="checkbox" 
                    id="newsletter" 
                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" 
                  />
                  <label htmlFor="newsletter" className="text-sm text-gray-600">
                    Subscribe to our newsletter for training updates and industry insights
                  </label>
                </div>

                <Button className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-semibold py-3 rounded-md shadow-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-10 border border-gray-100 flex flex-col">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Get in Touch</h2>
              
              <div className="space-y-4 mb-6 flex-grow">
                <div className="flex items-start space-x-4 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-300">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Phone className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Phone</h3>
                    <p className="text-blue-600 font-medium">+91 8802000175</p>
                    <p className="text-sm text-gray-500">Mon-Fri: 9:00 AM - 6:00 PM</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-300">
                  <div className="bg-indigo-100 p-3 rounded-full">
                    <Mail className="w-6 h-6 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Email</h3>
                    <p className="text-indigo-600 font-medium">info@webjyoti.com</p>
                    <p className="text-sm text-gray-500">Response within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-300">
                  <div className="bg-cyan-100 p-3 rounded-full">
                    <MapPin className="w-6 h-6 text-cyan-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Address</h3>
                    <p className="text-gray-600">
                      M 24 Old DLF Colony<br />
                      Sector 14, Gurugram<br />
                      Haryana, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-300">
                  <div className="bg-sky-100 p-3 rounded-full">
                    <Clock className="w-6 h-6 text-sky-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Business Hours</h3>
                    <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-gray-600">Saturday: 10:00 AM - 4:00 PM</p>
                    <p className="text-gray-600">Sunday: Closed</p>
                  </div>
                </div>
              </div>

              {/* Google Map */}
              <div className="mt-auto">
                <h3 className="font-semibold text-gray-800 mb-4 text-center">Find Us</h3>
                <div className="bg-gray-200 h-64 rounded-lg overflow-hidden shadow-inner">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.307125023735!2d77.04440389999999!3d28.470295999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19af785e6777%3A0x58c36e3201ba2222!2z4KSh4KWH4KS14KWH4KSy4KSq4KSu4KWH4KSC4KSfICYg4KSf4KWN4KSw4KWH4KSo4KS_4KSC4KSX!5e0!3m2!1sen!2sin!4v1751023406074!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Webs Jyoti Location"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Other Ways to Reach Us</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="bg-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Call Us</h3>
              <p className="text-gray-600 mb-4">Speak directly with our training consultants</p>
              <p className="font-semibold text-blue-600 text-lg">+91 8802000175</p>
              <p className="text-sm text-gray-500">Mon-Fri: 9:00 AM - 6:00 PM</p>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="bg-indigo-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Email Us</h3>
              <p className="text-gray-600 mb-4">Send us your detailed requirements</p>
              <p className="font-semibold text-indigo-600 text-lg">info@webjyoti.com</p>
              <p className="text-sm text-gray-500">Response within 24 hours</p>
            </div>

            <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="bg-cyan-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Live Chat</h3>
              <p className="text-gray-600 mb-4">Get instant answers to your questions</p>
              <Button className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-2 rounded-lg transition-colors duration-300">
                Start Chat
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Why Choose Our Training Programs</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
              <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2 text-gray-800">Expert Trainers</h3>
              <p className="text-gray-600 text-sm">Industry professionals with 10+ years experience</p>
            </div>
            <div className="text-center bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
              <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2 text-gray-800">Flexible Scheduling</h3>
              <p className="text-gray-600 text-sm">Weekend and weekday batches available</p>
            </div>
            <div className="text-center bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
              <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2 text-gray-800">Hands-on Learning</h3>
              <p className="text-gray-600 text-sm">Real-world projects and case studies</p>
            </div>
            <div className="text-center bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
              <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2 text-gray-800">Job Support</h3>
              <p className="text-gray-600 text-sm">Career guidance and placement assistance</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}