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
      "The participants rated the MakeMyTrip training an average of 4.7 out of 5. Truly interactive and informative sessions. Excellent feedback from all locations.",
    name: "Nandita Jindal",
    designation: "HR",
    company: "MakeMyTrip",
    logo: "/logos/makemytrip-logo.png",
  },
  {
    id: 4,
    quote:
      "Thanks for your proactive support, Hirdesh! Feedback across HO teams has been overwhelmingly positive. Looking forward to rolling out the final batches soon.",
    name: "Monika Ahuja",
    designation: "HR Manager",
    company: "DCM Shriram Ltd.",
    logo: "/logos/dcm-shriram-logo.png",
  },
  {
    id: 5,
    quote:
      "We at Del Monte are dedicated to continuous learning. Thank you, Hirdesh, for such a powerful session — we look forward to more collaborations!",
    name: "Del Monte Team",
    designation: "Training Department",
    company: "Del Monte India",
    logo: "/logos/del-monte-logo.png",
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
            <div key={`${testimonial.id}-${index}`} className="flex-shrink-0 w-96 mx-4">
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 h-full">
                <div className="flex items-start mb-4">
                  <Quote className="w-8 h-8 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                  <p className="text-gray-700 text-sm leading-relaxed italic">"{testimonial.quote}"</p>
                </div>

                <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-100">
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 text-sm">{testimonial.name}</h4>
                    <p className="text-gray-600 text-xs">{testimonial.designation}</p>
                    <p className="text-blue-600 text-xs font-medium">{testimonial.company}</p>
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
            </div>
          ))}
        </div>

      {/* View More Button */}
      <div className="text-center mt-8">
        <Link href="/testimonials">
          <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-full hover:from-blue-700 hover:to-indigo-800 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center mx-auto space-x-2">
            <span>View All Testimonials</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
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
