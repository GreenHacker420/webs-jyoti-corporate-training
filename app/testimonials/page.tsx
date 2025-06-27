"use client"

import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Quote, Star } from "lucide-react"
import { FadeIn } from "@/components/animations/fade-in"
import { FloatingCard } from "@/components/animations/floating-card"
import { StaggerContainer } from "@/components/animations/stagger-container"

interface Testimonial {
  id: number
  quote: string
  name: string
  designation: string
  company: string
  logo: string
  rating?: number
}

// All testimonials data
const allTestimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      "Hirdesh conducted a number of advanced Excel training sessions for FIA. His ability to simplify concepts, engage across all levels, and provide real-world tools made it extremely impactful.",
    name: "Seema Prem",
    designation: "Co-Founder & CEO",
    company: "FIA Global",
    logo: "/logos/fia-global-logo.png",
    rating: 5,
  },
  {
    id: 2,
    quote:
      "Your training for Del Monte was extremely effective! Participants actively engaged and enjoyed solving real business problems through Excel. A big thanks from our entire team!",
    name: "Yamini Talwar",
    designation: "Corporate Trainer",
    company: "Del Monte Foods Pvt. Ltd.",
    logo: "/logos/del-monte-logo.png",
    rating: 5,
  },
  {
    id: 3,
    quote:
      "The Excel training provided by Webs Jyoti was comprehensive and practical. Our team's productivity has significantly improved after implementing the techniques learned.",
    name: "Rajesh Kumar",
    designation: "Operations Manager",
    company: "DCM Shriram",
    logo: "/logos/dcm-shriram-logo.png",
    rating: 5,
  },
  {
    id: 4,
    quote:
      "Excellent training program! The hands-on approach and real-world examples made complex data analytics concepts easy to understand and apply in our daily work.",
    name: "Priya Sharma",
    designation: "Data Analyst",
    company: "MakeMyTrip",
    logo: "/logos/makemytrip-logo.png",
    rating: 5,
  },
  {
    id: 5,
    quote:
      "We at Del Monte are dedicated to continuous learning. Thank you, Hirdesh, for such a powerful session — we look forward to more collaborations!",
    name: "Del Monte Team",
    designation: "Training Department",
    company: "Del Monte India",
    logo: "/logos/del-monte-logo.png",
    rating: 5,
  },
  {
    id: 6,
    quote:
      "The Power BI training was exceptional. Our team can now create professional dashboards and reports that have transformed our decision-making process.",
    name: "Amit Singh",
    designation: "Business Intelligence Manager",
    company: "Tech Solutions Ltd.",
    logo: "/placeholder.svg",
    rating: 5,
  },
  {
    id: 7,
    quote:
      "Outstanding training delivery! The trainer's expertise in data analytics and ability to explain complex concepts in simple terms was remarkable.",
    name: "Neha Gupta",
    designation: "HR Director",
    company: "Global Enterprises",
    logo: "/placeholder.svg",
    rating: 5,
  },
  {
    id: 8,
    quote:
      "The corporate training program exceeded our expectations. Our employees are now more confident in handling data analysis tasks and creating meaningful insights.",
    name: "Vikram Patel",
    designation: "Training Manager",
    company: "Innovation Corp",
    logo: "/placeholder.svg",
    rating: 5,
  },
]

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <FadeIn>
            <h1 className="text-5xl font-bold text-white mb-6">Client Testimonials</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Discover what our corporate clients say about our training programs and how we've helped transform their teams' capabilities
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center" staggerDelay={100}>
            <FadeIn>
              <div className="space-y-2">
                <div className="text-3xl md:text-4xl font-bold text-blue-600">17,375+</div>
                <div className="text-gray-600 font-medium">Professionals Trained</div>
              </div>
            </FadeIn>
            <FadeIn>
              <div className="space-y-2">
                <div className="text-3xl md:text-4xl font-bold text-blue-600">500+</div>
                <div className="text-gray-600 font-medium">Corporate Clients</div>
              </div>
            </FadeIn>
            <FadeIn>
              <div className="space-y-2">
                <div className="text-3xl md:text-4xl font-bold text-blue-600">98%</div>
                <div className="text-gray-600 font-medium">Satisfaction Rate</div>
              </div>
            </FadeIn>
            <FadeIn>
              <div className="space-y-2">
                <div className="text-3xl md:text-4xl font-bold text-blue-600">17+</div>
                <div className="text-gray-600 font-medium">Years Experience</div>
              </div>
            </FadeIn>
          </StaggerContainer>
        </div>
      </section>

      {/* All Testimonials Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <FadeIn className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say About Us
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Read testimonials from corporate leaders who have experienced the impact of our training programs
            </p>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" staggerDelay={100}>
            {allTestimonials.map((testimonial, index) => (
              <FadeIn key={testimonial.id} delay={index * 50}>
                <FloatingCard className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 h-full hover:shadow-xl transition-all duration-300">
                  <div className="flex flex-col h-full">
                    {/* Rating Stars */}
                    {testimonial.rating && (
                      <div className="flex items-center mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    )}

                    {/* Quote Icon and Text */}
                    <div className="flex items-start mb-6">
                      <Quote className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                      <p className="text-gray-700 text-sm leading-relaxed italic flex-grow">
                        "{testimonial.quote}"
                      </p>
                    </div>

                    {/* Author Info and Company Logo */}
                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 text-sm">
                          {testimonial.name}
                        </h4>
                        <p className="text-gray-600 text-xs">
                          {testimonial.designation}
                        </p>
                        <p className="text-blue-600 text-xs font-medium">
                          {testimonial.company}
                        </p>
                      </div>

                      <div className="flex-shrink-0 ml-4">
                        <div className="w-10 h-10 bg-gray-50 rounded-lg flex items-center justify-center overflow-hidden">
                          <Image
                            src={testimonial.logo || "/placeholder.svg"}
                            alt={`${testimonial.company} logo`}
                            width={32}
                            height={32}
                            className="object-contain"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </FloatingCard>
              </FadeIn>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <Footer />
    </div>
  )
}
