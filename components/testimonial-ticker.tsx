"use client"

import Link from "next/link"
import Image from "next/image"
import { Quote } from "lucide-react"

interface Testimonial {
  id: number
  quote: string
  name: string
  designation: string
  company: string
  logo: string
  trainingImage: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      "Hirdesh conducted a number of advanced Excel training sessions for FIA. His ability to simplify concepts, engage across all levels, and provide real-world tools made it extremely impactful.",
    name: "Seema Prem",
    designation: "Co-Founder & CEO",
    company: "FIA Global",
    logo: "/logos/fia-global-logo.png",
    trainingImage: "/images/gallery/azamgarh-excel.webp",
  },
  {
    id: 2,
    quote:
      "Your training for Del Monte was extremely effective! Participants actively engaged and enjoyed solving real business problems through Excel. A big thanks from our entire team!",
    name: "Yamini Talwar",
    designation: "Corporate Trainer",
    company: "Del Monte Foods Pvt. Ltd.",
    logo: "/logos/del-monte-logo.png",
    trainingImage: "/images/gallery/pune-excel.webp",
  },
  {
    id: 3,
    quote:
      "The participants rated the MakeMyTrip training an average of 4.7 out of 5. Truly interactive and informative sessions. Excellent feedback from all locations.",
    name: "Nandita Jindal",
    designation: "HR",
    company: "MakeMyTrip",
    logo: "/logos/makemytrip-logo.png",
    trainingImage: "/images/gallery/raipur-excel.webp",
  },
  {
    id: 4,
    quote:
      "Thanks for your proactive support, Hirdesh! Feedback across HO teams has been overwhelmingly positive. Looking forward to rolling out the final batches soon.",
    name: "Monika Ahuja",
    designation: "HR Manager",
    company: "DCM Shriram Ltd.",
    logo: "/logos/dcm-shriram-logo.png",
    trainingImage: "/images/gallery/img-4351.webp",
  },
  {
    id: 5,
    quote:
      "We at Del Monte are dedicated to continuous learning. Thank you, Hirdesh, for such a powerful session — we look forward to more collaborations!",
    name: "Del Monte Team",
    designation: "Training Department",
    company: "Del Monte India",
    logo: "/logos/del-monte-logo.png",
    trainingImage: "/images/gallery/azamgarh-excel.webp",
  },
]

export function TestimonialTicker() {
  // Duplicate testimonials for infinite scroll effect
  const duplicatedTestimonials = [...testimonials, ...testimonials]

  return (
    <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-12">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Corporate Clients Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trusted by leading organizations across India for delivering impactful corporate training programs
          </p>
        </div>
      </div>

      <div className="relative">
        <div className="flex animate-scroll-left">
          {duplicatedTestimonials.map((testimonial, index) => (
            <div
              key={`${testimonial.id}-${index}`}
              className="flex-shrink-0 mx-4"
            >
              {/* Futuristic 3D Flip Card Container */}
              <div className="futuristic-flip-card">
                <div className="futuristic-flip-card-inner">
                  {/* Front Face - Training Session Image */}
                  <div className="futuristic-flip-card-front relative">
                    <Image
                      src={testimonial.trainingImage}
                      alt={`Training session at ${testimonial.company}`}
                      fill
                      className="object-cover"
                    />
                    {/* Gradient overlay for better text visibility */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-white/90 rounded-lg flex items-center justify-center p-1 border border-gold/30">
                          <Image
                            src={testimonial.logo}
                            alt={`${testimonial.company} logo`}
                            width={32}
                            height={32}
                            className="object-contain"
                          />
                        </div>
                        <div className="text-white">
                          <p className="font-semibold text-sm font-poppins">{testimonial.company}</p>
                          <p className="text-xs opacity-90 text-blue-200">Training Session</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Back Face - Brand-Themed Testimonial */}
                  <div className="futuristic-flip-card-back brand-themed-card">
                    {/* Animated Noise Texture Overlay */}
                    <div className="brand-noise-overlay"></div>

                    {/* Content Layer - Above all overlays */}
                    <div className="brand-content-layer flex flex-col justify-between">
                      {/* Quote Section */}
                      <div className="flex items-start mb-4">
                        <Quote className="w-6 h-6 brand-accent mr-3 flex-shrink-0 mt-1" />
                        <p className="text-white text-sm leading-relaxed italic font-poppins font-light">
                          "{testimonial.quote}"
                        </p>
                      </div>

                      {/* Client Information Section */}
                      <div className="mt-auto pt-6">
                        <div className="border-t border-blue-400/30 pt-4">
                          <div className="flex items-center justify-between">
                            <div className="flex-1">
                              <h4 className="font-semibold text-white text-sm font-poppins mb-1">
                                {testimonial.name}
                              </h4>
                              <p className="brand-accent text-xs font-medium mb-1">
                                {testimonial.designation}
                              </p>
                              <p className="brand-secondary-accent text-xs font-poppins font-medium">
                                {testimonial.company}
                              </p>
                            </div>

                            {/* Company Logo Container with Brand Border */}
                            <div className="flex-shrink-0 ml-4">
                              <div className="w-12 h-12 bg-blue-400/10 rounded-lg flex items-center justify-center overflow-hidden border brand-border backdrop-blur-sm">
                                <Image
                                  src={testimonial.logo || "/placeholder.svg"}
                                  alt={`${testimonial.company} logo`}
                                  width={32}
                                  height={32}
                                  className="object-contain filter brightness-110"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      {/* View More Button */}
        <div className="flex justify-center mt-8">
          <Link href="/testimonials">
            <button className="group relative px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-full transition-all duration-300 font-semibold shadow-lg hover:shadow-xl hover:scale-105 overflow-hidden min-w-[260px]">
              <span className="flex items-center space-x-2 group-hover:animate-full-slide-bounce transition-transform duration-300">
                <span>View All Testimonials</span>
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </span>
            </button>
          </Link>
        </div>



      </div>

      <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll-left {
          animation: scroll-left 30s linear infinite;
        }
        
        .animate-scroll-left:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}
