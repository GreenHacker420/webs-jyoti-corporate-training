import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { MapPin, Phone, Clock, Users } from "lucide-react"
import { FadeIn } from "@/components/animations/fade-in"
import { FloatingCard } from "@/components/animations/floating-card"
import { StaggerContainer } from "@/components/animations/stagger-container"

export default function LocationsPage() {
  const locations = [
    {
      id: 1,
      city: "AGRA",
      trainer: "Ujjwal Garg",
      address: "Training Center, Agra, Uttar Pradesh",
      phone: "+91 8802000175",
      email: "agra@webjyoti.com",
      facilities: ["Training Rooms", "Computer Lab", "Parking"],
      timings: "Mon-Fri: 9:00 AM - 6:00 PM",
    },
    {
      id: 2,
      city: "RAIPUR",
      trainer: "Kishore Kumar",
      address: "Training Center, Raipur, Chhattisgarh",
      phone: "+91 8802000176",
      email: "raipur@webjyoti.com",
      facilities: ["Training Rooms", "Computer Lab", "Conference Hall"],
      timings: "Mon-Fri: 9:00 AM - 6:00 PM",
    },
    {
      id: 3,
      city: "BHOPAL",
      trainer: "Akshat Dubey",
      address: "Training Center, Bhopal, Madhya Pradesh",
      phone: "+91 8802000177",
      email: "bhopal@webjyoti.com",
      facilities: ["Training Rooms", "Computer Lab", "Library"],
      timings: "Mon-Fri: 9:00 AM - 6:00 PM",
    },
    {
      id: 4,
      city: "INDORE",
      trainer: "Sanskar Singh",
      address: "Training Center, Indore, Madhya Pradesh",
      phone: "+91 8802000178",
      email: "indore@webjyoti.com",
      facilities: ["Training Rooms", "Computer Lab", "Cafeteria"],
      timings: "Mon-Fri: 9:00 AM - 6:00 PM",
    },
    {
      id: 5,
      city: "JODHPUR",
      trainer: "Bhavendra Singh",
      address: "Training Center, Jodhpur, Rajasthan",
      phone: "+91 8802000179",
      email: "jodhpur@webjyoti.com",
      facilities: ["Training Rooms", "Computer Lab", "Parking"],
      timings: "Mon-Fri: 9:00 AM - 6:00 PM",
    },
    {
      id: 6,
      city: "BHATINDA",
      trainer: "Gurpreet Singh",
      address: "Training Center, Bhatinda, Punjab",
      phone: "+91 8802000180",
      email: "bhatinda@webjyoti.com",
      facilities: ["Training Rooms", "Computer Lab", "Reception"],
      timings: "Mon-Fri: 9:00 AM - 6:00 PM",
    },
    {
      id: 7,
      city: "Delhi NCR",
      trainer: "Hirdesh Bhardwaj",
      address: "M 24 Old DLF Colony, Sector 14, Gurugram, Haryana",
      phone: "+91 8802000175",
      email: "delhi@webjyoti.com",
      facilities: ["Training Rooms", "Computer Lab", "Conference Hall", "Parking"],
      timings: "Mon-Fri: 9:00 AM - 6:00 PM",
      isHeadquarters: true,
    },
    {
      id: 8,
      city: "PUNE",
      trainer: "Mahesh Gutalkar",
      address: "Training Center, Pune, Maharashtra",
      phone: "+91 8802000181",
      email: "pune@webjyoti.com",
      facilities: ["Training Rooms", "Computer Lab", "Cafeteria"],
      timings: "Mon-Fri: 9:00 AM - 6:00 PM",
    },
    {
      id: 9,
      city: "Azamgarh",
      trainer: "Brijesh Kumar Chaurasia",
      address: "Training Center, Azamgarh, Uttar Pradesh",
      phone: "+91 8802000182",
      email: "azamgarh@webjyoti.com",
      facilities: ["Training Rooms", "Computer Lab"],
      timings: "Mon-Fri: 9:00 AM - 6:00 PM",
    },
    {
      id: 10,
      city: "LUCKNOW",
      trainer: "Sangram Singh",
      address: "Training Center, Lucknow, Uttar Pradesh",
      phone: "+91 8802000183",
      email: "lucknow@webjyoti.com",
      facilities: ["Training Rooms", "Computer Lab", "Library"],
      timings: "Mon-Fri: 9:00 AM - 6:00 PM",
    },
    {
      id: 11,
      city: "PATNA",
      trainer: "Birendra Goswami",
      address: "Training Center, Patna, Bihar",
      phone: "+91 8802000184",
      email: "patna@webjyoti.com",
      facilities: ["Training Rooms", "Computer Lab", "Parking"],
      timings: "Mon-Fri: 9:00 AM - 6:00 PM",
    },
    {
      id: 12,
      city: "GHORAKPUR",
      trainer: "Manish",
      address: "Training Center, Gorakhpur, Uttar Pradesh",
      phone: "+91 8802000185",
      email: "gorakhpur@webjyoti.com",
      facilities: ["Training Rooms", "Computer Lab"],
      timings: "Mon-Fri: 9:00 AM - 6:00 PM",
    },
    {
      id: 13,
      city: "Rohtak",
      trainer: "Sushil - I-CONS COMPUTERS",
      address: "I-CONS COMPUTERS, Rohtak, Haryana (Covers Karnal & Hisar)",
      phone: "+91 8802000186",
      email: "rohtak@webjyoti.com",
      facilities: ["Training Rooms", "Computer Lab", "Technical Support"],
      timings: "Mon-Fri: 9:00 AM - 6:00 PM",
    },
    {
      id: 14,
      city: "BAREILLY",
      trainer: "Mayank Goel",
      address: "Training Center, Bareilly, Uttar Pradesh",
      phone: "+91 8802000187",
      email: "bareilly@webjyoti.com",
      facilities: ["Training Rooms", "Computer Lab"],
      timings: "Mon-Fri: 9:00 AM - 6:00 PM",
    },
    {
      id: 15,
      city: "KOTA",
      trainer: "Hirdesh Bhardwaj",
      address: "Training Center, Kota, Rajasthan",
      phone: "+91 8802000188",
      email: "kota@webjyoti.com",
      facilities: ["Training Rooms", "Computer Lab", "Study Area"],
      timings: "Mon-Fri: 9:00 AM - 6:00 PM",
    },
    {
      id: 16,
      city: "LUDHIANA",
      trainer: "Varinder - Amiras",
      address: "Amiras Training Center, Ludhiana, Punjab",
      phone: "+91 8802000189",
      email: "ludhiana@webjyoti.com",
      facilities: ["Training Rooms", "Computer Lab", "Parking"],
      timings: "Mon-Fri: 9:00 AM - 6:00 PM",
    },
    {
      id: 17,
      city: "GUWAHATI",
      trainer: "Manoj",
      address: "Training Center, Guwahati, Assam",
      phone: "+91 8802000190",
      email: "guwahati@webjyoti.com",
      facilities: ["Training Rooms", "Computer Lab"],
      timings: "Mon-Fri: 9:00 AM - 6:00 PM",
    },
    {
      id: 18,
      city: "Gandhinagar",
      trainer: "Rizwan Shaikh",
      address: "Training Center, Gandhinagar, Gujarat",
      phone: "+91 8802000191",
      email: "gandhinagar@webjyoti.com",
      facilities: ["Training Rooms", "Computer Lab", "Conference Room"],
      timings: "Mon-Fri: 9:00 AM - 6:00 PM",
    },
    {
      id: 19,
      city: "CHITTORGARH",
      trainer: "Shubham Nathani",
      address: "Training Center, Chittorgarh, Rajasthan",
      phone: "+91 8802000192",
      email: "chittorgarh@webjyoti.com",
      facilities: ["Training Rooms", "Computer Lab"],
      timings: "Mon-Fri: 9:00 AM - 6:00 PM",
    },
    {
      id: 20,
      city: "KOLKATA",
      trainer: "Parul Singh",
      address: "Training Center, Kolkata, West Bengal",
      phone: "+91 8802000193",
      email: "kolkata@webjyoti.com",
      facilities: ["Training Rooms", "Computer Lab", "Library", "Cafeteria"],
      timings: "Mon-Fri: 9:00 AM - 6:00 PM",
    },
    {
      id: 21,
      city: "Bangalore",
      trainer: "Chandrababu R",
      address: "Training Center, Bangalore, Karnataka",
      phone: "+91 8802000194",
      email: "bangalore1@webjyoti.com",
      facilities: ["Training Rooms", "Computer Lab", "Conference Hall"],
      timings: "Mon-Fri: 9:00 AM - 6:00 PM",
    },
    {
      id: 22,
      city: "Bangalore",
      trainer: "Ismail Chalil",
      address: "Training Center, Bangalore, Karnataka",
      phone: "+91 8802000195",
      email: "bangalore2@webjyoti.com",
      facilities: ["Training Rooms", "Computer Lab", "Study Area"],
      timings: "Mon-Fri: 9:00 AM - 6:00 PM",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">Our Training Centers</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Find our expert trainers and training centers across 22+ cities in India. Choose the most convenient
            location for your learning journey.
          </p>
        </div>
      </section>

      {/* Locations Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <FadeIn className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Training Centers</h2>
            <p className="text-xl text-gray-600">Find your nearest training center with expert trainers</p>
          </FadeIn>
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={100}>
            {locations.map((location, index) => (
              <FadeIn key={location.id} delay={index * 50}>
                <FloatingCard className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue-500 h-full">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-800">{location.city}</h3>
                    {location.isHeadquarters && (
                      <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold animate-pulse">
                        Headquarters
                      </span>
                    )}
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-start space-x-3 transform transition-all duration-300 hover:translate-x-1">
                      <Users className="w-5 h-5 text-blue-500 mt-1" />
                      <div>
                        <p className="font-semibold text-gray-800">Trainer: {location.trainer}</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3 transform transition-all duration-300 hover:translate-x-1">
                      <MapPin className="w-5 h-5 text-gray-500 mt-1" />
                      <div>
                        <p className="text-gray-700">{location.address}</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3 transform transition-all duration-300 hover:translate-x-1">
                      <Phone className="w-5 h-5 text-gray-500" />
                      <div>
                        <p className="text-gray-700">{location.phone}</p>
                        <p className="text-sm text-gray-500">{location.email}</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3 transform transition-all duration-300 hover:translate-x-1">
                      <Clock className="w-5 h-5 text-gray-500" />
                      <p className="text-gray-700">{location.timings}</p>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="w-5 h-5 flex items-center justify-center mt-1">
                        <span className="text-gray-500">🏢</span>
                      </div>
                      <div>
                        <p className="text-gray-700 font-medium mb-2">Facilities:</p>
                        <div className="flex flex-wrap gap-2">
                          {location.facilities.map((facility, index) => (
                            <span
                              key={index}
                              className="bg-blue-100 text-blue-800 text-sm px-2 py-1 rounded transform transition-all duration-300 hover:scale-105"
                            >
                              {facility}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-gray-200">
                    <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg mr-3 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                      Get Directions
                    </button>
                    <button className="border border-gray-300 hover:bg-gray-50 text-gray-700 px-4 py-2 rounded-lg transition-all duration-300 transform hover:scale-105">
                      Contact Trainer
                    </button>
                  </div>
                </FloatingCard>
              </FadeIn>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Coverage Stats */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Our Nationwide Presence</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">22+</div>
              <div className="text-gray-600 font-medium">Cities Covered</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">25+</div>
              <div className="text-gray-600 font-medium">Expert Trainers</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">15+</div>
              <div className="text-gray-600 font-medium">States</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">9,375+</div>
              <div className="text-gray-600 font-medium">Students Trained</div>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Map */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Training Centers Across India</h2>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 h-96 rounded-lg flex items-center justify-center">
              <div className="text-center text-gray-600">
                <MapPin className="w-16 h-16 mx-auto mb-4 text-blue-500" />
                <h3 className="text-xl font-semibold mb-2">Interactive Map</h3>
                <p>Showing all our training center locations across India</p>
                <div className="mt-4 flex justify-center space-x-4">
                  <span className="bg-blue-500 w-3 h-3 rounded-full inline-block"></span>
                  <span className="text-sm">Training Centers</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Online Training */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Can't Visit Our Centers?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Join our online training sessions from anywhere in India. Get the same quality training experience from the
            comfort of your home or office.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-3xl mb-4">💻</div>
              <h3 className="text-xl font-semibold mb-2">Live Online Sessions</h3>
              <p className="text-gray-600">Interactive live sessions with real-time Q&A</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-3xl mb-4">📱</div>
              <h3 className="text-xl font-semibold mb-2">Mobile Learning</h3>
              <p className="text-gray-600">Access training materials on any device</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-3xl mb-4">🎓</div>
              <h3 className="text-xl font-semibold mb-2">Same Certification</h3>
              <p className="text-gray-600">Get the same certificates as offline training</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
