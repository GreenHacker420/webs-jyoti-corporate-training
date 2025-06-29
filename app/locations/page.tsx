import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { MapPin, Phone, Clock, Users } from "lucide-react"
import { FadeIn } from "@/components/animations/fade-in"
import { FloatingCard } from "@/components/animations/floating-card"
import { StaggerContainer } from "@/components/animations/stagger-container"
import locations, { Location } from "../../data/locations";

export default function LocationsPage() {
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
  );
}
