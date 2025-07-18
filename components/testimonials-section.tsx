"use client"

import Image from "next/image"
import Link from "next/link"
import { Quote, ArrowRight } from "lucide-react"
import { EnhancedCard } from "@/components/ui/enhanced-card"
import { EnhancedButton } from "@/components/ui/enhanced-button"
import { FadeIn } from "@/components/animations/fade-in"
import { FloatingCard } from "@/components/animations/floating-card"
import { StaggerContainer } from "@/components/animations/stagger-container"
import { getFeaturedTestimonials } from "@/data/testimonials"


export function TestimonialsSection() {
  const featuredTestimonials = getFeaturedTestimonials()

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
