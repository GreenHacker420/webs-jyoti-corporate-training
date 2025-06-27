import Image from "next/image"
import { TrainerAvatar } from "@/components/default-avatar"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Linkedin, Mail, Award, MapPin } from "lucide-react"
import { trainersData } from "@/data/trainers"

// Add these imports at the top
import { FadeIn } from "@/components/animations/fade-in"
import { FloatingCard } from "@/components/animations/floating-card"
import { StaggerContainer } from "@/components/animations/stagger-container"

export default function TrainerTeamPage() {

  
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">Our Expert Trainers</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Meet our team of 25+ industry experts with 8-15 years of experience, serving 22+ cities across India with
            specialized data analytics and business intelligence training.
          </p>
        </div>
      </section>

      {/* Trainers Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <FadeIn className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Meet Our Expert Trainers</h2>
            <p className="text-xl text-gray-600">25+ industry professionals serving 22+ cities across India</p>
          </FadeIn>
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" staggerDelay={100}>
            {trainersData.map((trainer, index) => (
              <FadeIn key={trainer.id} delay={index * 50}>
                <FloatingCard className="bg-white rounded-lg shadow-lg overflow-hidden border-t-4 border-blue-500 h-full">
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="relative">
                        <TrainerAvatar
                          name={trainer.name}
                          size="lg"
                          className="mr-4 transform transition-all duration-300 hover:scale-110"
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-800">{trainer.name}</h3>
                        <p className="text-blue-600 font-medium">{trainer.title}</p>
                        <p className="text-sm text-gray-500">{trainer.experience}</p>
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                        <MapPin className="w-4 h-4 mr-1 text-blue-500" />
                        Locations Served
                      </h4>
                      <div className="flex flex-wrap gap-1">
                        {trainer.locations.map((location, index) => (
                          <span
                            key={index}
                            className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded transform transition-all duration-300 hover:scale-105 hover:bg-blue-200"
                          >
                            {location}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-800 mb-2">Specialization</h4>
                      <p className="text-gray-600 text-sm">{trainer.specialization}</p>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                        <Award className="w-4 h-4 mr-1 text-blue-500" />
                        Certifications
                      </h4>
                      <div className="flex flex-wrap gap-1">
                        {trainer.certifications.map((cert, index) => (
                          <span
                            key={index}
                            className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded transform transition-all duration-300 hover:scale-105 hover:bg-gray-200"
                          >
                            {cert}
                          </span>
                        ))}
                      </div>
                    </div>

                    <p className="text-gray-600 text-sm mb-4">{trainer.bio}</p>

                    <div className="flex space-x-3">
                      <button className="bg-blue-100 p-2 rounded-full hover:bg-blue-200 transition-all duration-300 transform hover:scale-110 hover:rotate-12">
                        <Linkedin className="w-4 h-4 text-blue-600" />
                      </button>
                      <button className="bg-gray-100 p-2 rounded-full hover:bg-gray-200 transition-all duration-300 transform hover:scale-110 hover:rotate-12">
                        <Mail className="w-4 h-4 text-gray-600" />
                      </button>
                    </div>
                  </div>
                </FloatingCard>
              </FadeIn>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Why Our Trainers */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Why Our Trainers Stand Out</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-black">Industry Experience</h3>
              <p className="text-gray-600">All trainers have 8+ years of hands-on industry experience</p>
            </div>
            <div className="text-center">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎓</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-black">Certified Professionals</h3>
              <p className="text-gray-600">Multiple industry certifications and continuous learning</p>
            </div>
            <div className="text-center">
              <div className="bg-cyan-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">👥</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-black">Local Expertise</h3>
              <p className="text-gray-600">Regional trainers understanding local business needs</p>
            </div>
            <div className="text-center">
              <div className="bg-sky-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏆</span>
              </div>
                <h3 className="text-xl font-semibold mb-3 text-black">Training Excellence</h3>
              <p className="text-gray-600">Proven track record with 17,375+ successful students</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
