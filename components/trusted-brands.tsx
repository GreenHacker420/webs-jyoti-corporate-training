"use client"

import React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { FadeIn } from "@/components/animations/fade-in"
import { StaggerContainer } from "@/components/animations/stagger-container"

interface BrandLogo {
  src: string
  alt: string
  name: string
}

const trustedBrands: BrandLogo[] = [
  {
    src: "/logos/dcm-shriram-logo.png",
    alt: "DCM Shriram",
    name: "DCM Shriram"
  },
  {
    src: "/logos/del-monte-logo.png", 
    alt: "Del Monte",
    name: "Del Monte"
  },
  {
    src: "/logos/fia-global-logo.png",
    alt: "FIA Global",
    name: "FIA Global"
  },
  {
    src: "/logos/makemytrip-logo.png",
    alt: "MakeMyTrip",
    name: "MakeMyTrip"
  }
]

interface BlinkingBrandLogoProps {
  brand: BrandLogo
  delay?: number
  blinkDuration?: number
  minOpacity?: number
  maxOpacity?: number
}

function BlinkingBrandLogo({
  brand,
  delay = 0,
  blinkDuration = 2.5,
  minOpacity = 0.4,
  maxOpacity = 1,
}: BlinkingBrandLogoProps) {
  return (
    <motion.div
      className="group relative bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 hover:border-blue-200"
      initial={{ opacity: 0, y: 20 }}
      animate={{ 
        opacity: [maxOpacity, minOpacity, maxOpacity],
        y: 0 
      }}
      transition={{
        opacity: {
          duration: blinkDuration,
          repeat: Infinity,
          ease: "easeInOut",
          delay: delay,
        },
        y: {
          duration: 0.6,
          ease: "easeOut"
        }
      }}
      whileHover={{ 
        scale: 1.05,
        transition: { duration: 0.2 }
      }}
      style={{
        willChange: "opacity, transform",
      }}
    >
      <div className="flex items-center justify-center h-20">
        <Image
          src={brand.src}
          alt={brand.alt}
          width={120}
          height={60}
          className="object-contain max-w-full max-h-full filter grayscale group-hover:grayscale-0 transition-all duration-300"
          priority
        />
      </div>
      <div className="mt-4 text-center">
        <p className="text-sm font-medium text-gray-600 group-hover:text-blue-600 transition-colors duration-300">
          {brand.name}
        </p>
      </div>
    </motion.div>
  )
}

export function TrustedBrands() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4">
        <FadeIn className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <span>🤝</span>
            <span>Trusted by Industry Leaders</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Companies That Trust Us
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Join the ranks of leading organizations who have transformed their teams through our
            expert-led corporate training programs. Your success is our mission.
          </p>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16" staggerDelay={200}>
          {trustedBrands.map((brand, index) => (
            <FadeIn key={brand.name} delay={index * 100}>
              <BlinkingBrandLogo
                brand={brand}
                delay={index * 0.5}
                blinkDuration={2.5}
                minOpacity={0.4}
                maxOpacity={1}
              />
            </FadeIn>
          ))}
        </StaggerContainer>

        {/* Main Company Logo Section */}
        <FadeIn className="text-center">
          <div className="bg-white rounded-2xl shadow-xl p-12 border border-gray-100 max-w-2xl mx-auto">
            <motion.div
              className="flex justify-center mb-8"
              animate={{
                opacity: [1, 0.3, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{
                willChange: "opacity",
              }}
            >
              <Image
                src="/webs-jyoti-logo-correct.jpeg"
                alt="Webs Jyoti - Premier Corporate Training Institute"
                width={300}
                height={200}
                className="object-contain hover:scale-105 transition-transform duration-300"
                priority
              />
            </motion.div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Webs Jyoti Corporate Training
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Your trusted partner in professional development and corporate training excellence.
              <span className="block mt-2 text-blue-600 font-semibold">
                17+ Years of Training Excellence
              </span>
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
