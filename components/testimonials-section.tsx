"use client"

import Image from "next/image"
import Link from "next/link"
import { Quote, ArrowRight } from "lucide-react"
import { EnhancedCard } from "@/components/ui/enhanced-card"
import { EnhancedButton } from "@/components/ui/enhanced-button"
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
}

// Featured testimonials for home page (3-4 testimonials)
const featuredTestimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      "Hirdesh conducted a number of advanced Excel training sessions for FIA. His ability to simplify concepts, engage across all levels, and provide real-world tools made it extremely impactful.",
    name: "Seema Prem",
    designation: "Co-Founder & CEO",
    company: "FIA Global",
    logo: "/logos/fia-global-logo.png",
  },
  {
    id: 2,
    quote:
      "Your training for Del Monte was extremely effective! Participants actively engaged and enjoyed solving real business problems through Excel. A big thanks from our entire team!",
    name: "Yamini Talwar",
    designation: "Corporate Trainer",
    company: "Del Monte Foods Pvt. Ltd.",
    logo: "/logos/del-monte-logo.png",
  },
  {
    id: 3,
    quote:
      "The Excel training provided by Webs Jyoti was comprehensive and practical. Our team's productivity has significantly improved after implementing the techniques learned.",
    name: "Rajesh Kumar",
    designation: "Operations Manager",
    company: "DCM Shriram",
    logo: "/logos/dcm-shriram-logo.png",
  },
  {
    id: 4,
    quote:
      "Excellent training program! The hands-on approach and real-world examples made complex data analytics concepts easy to understand and apply in our daily work.",
    name: "Priya Sharma",
    designation: "Data Analyst",
    company: "MakeMyTrip",
    logo: "/logos/makemytrip-logo.png",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <FadeIn className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Our Corporate Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trusted by leading organizations across India for delivering impactful corporate training programs
          </p>
        </FadeIn>

        {/* Testimonials Grid */}
        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12" staggerDelay={100}>
          {featuredTestimonials.slice(0, 4).map((testimonial, index) => (
            <FadeIn key={testimonial.id} delay={index * 100}>
              <FloatingCard className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 h-full hover:shadow-xl transition-all duration-300">
                <div className="flex flex-col h-full">
                  {/* Quote Icon and Text */}
                  <div className="flex items-start mb-6">
                    <Quote className="w-8 h-8 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                    <p className="text-gray-700 leading-relaxed italic flex-grow">
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
                      <div className="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center overflow-hidden">
                        <Image
                          src={testimonial.logo || "/placeholder.svg"}
                          alt={`${testimonial.company} logo`}
                          width={40}
                          height={40}
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

        {/* View All Testimonials Button */}
        <FadeIn className="text-center">
          <Link href="/testimonials">
            <EnhancedButton
              variant="gradient"
              animation="scale"
              className="px-8 py-3 text-lg font-semibold"
            >
              View All Testimonials
              <ArrowRight className="w-5 h-5 ml-2" />
            </EnhancedButton>
          </Link>
        </FadeIn>
      </div>
    </section>
  )
}
