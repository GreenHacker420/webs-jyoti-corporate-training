"use client"

import React, { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { FadeIn } from "@/components/animations/fade-in"

interface BrandLogo {
  src: string
  alt: string
  name: string
  width?: number
  height?: number
}

const trustedBrands: BrandLogo[] = [
  {
    src: "/webs-jyoti-logo-correct.jpeg",
    alt: "Webs Jyoti Corporate Training",
    name: "Webs Jyoti",
    width: 140,
    height: 80
  },
  {
    src: "/logos/dcm-shriram-logo.png",
    alt: "DCM Shriram",
    name: "DCM Shriram",
    width: 120,
    height: 60
  },
  {
    src: "/logos/del-monte-logo.png",
    alt: "Del Monte",
    name: "Del Monte",
    width: 120,
    height: 60
  },
  {
    src: "/logos/fia-global-logo.png",
    alt: "FIA Global",
    name: "FIA Global",
    width: 120,
    height: 60
  },
  {
    src: "/logos/makemytrip-logo.png",
    alt: "MakeMyTrip",
    name: "MakeMyTrip",
    width: 120,
    height: 60
  }
]

interface SequentialBrandLogoProps {
  brand: BrandLogo
  index: number
  activeIndex: number
  isHovered: boolean
  onHover: () => void
  onLeave: () => void
}

function SequentialBrandLogo({
  brand,
  index,
  activeIndex,
  isHovered,
  onHover,
  onLeave,
}: SequentialBrandLogoProps) {
  const isActive = activeIndex === index || isHovered

  return (
    <motion.div
      className="group relative flex flex-col items-center justify-center p-4 cursor-pointer"
      onHoverStart={onHover}
      onHoverEnd={onLeave}
      animate={{
        opacity: isActive ? 1 : 0.3,
        scale: isActive ? 1.05 : 1,
      }}
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
      style={{
        willChange: "opacity, transform",
      }}
    >
      {/* Glow effect for active logo */}
      <AnimatePresence>
        {isActive && (
          <motion.div
            className="absolute inset-0 bg-blue-100 rounded-xl -z-10"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.6, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
          />
        )}
      </AnimatePresence>

      <div className="flex items-center justify-center h-16 w-full mb-2">
        <Image
          src={brand.src}
          alt={brand.alt}
          width={brand.width || 120}
          height={brand.height || 60}
          className={`object-contain max-w-full max-h-full transition-all duration-500 ${
            isActive
              ? 'filter-none'
              : 'filter grayscale'
          }`}
          priority={index < 3}
        />
      </div>

      <motion.p
        className={`text-xs font-medium text-center transition-colors duration-300 ${
          isActive
            ? 'text-blue-600'
            : 'text-gray-500'
        }`}
        animate={{
          opacity: isActive ? 1 : 0.7,
        }}
      >
        {brand.name}
      </motion.p>
    </motion.div>
  )
}

export function TrustedBrands() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  // Sequential animation logic
  useEffect(() => {
    if (isHovered) return // Pause animation when hovering

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % trustedBrands.length)
    }, 1200) // 1.2 seconds per logo

    return () => clearInterval(interval)
  }, [isHovered])

  const handleLogoHover = (index: number) => {
    setIsHovered(true)
    setHoveredIndex(index)
    setActiveIndex(index)
  }

  const handleLogoLeave = () => {
    setIsHovered(false)
    setHoveredIndex(null)
  }

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <FadeIn className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <span>🤝</span>
            <span>Trusted by Industry Leaders</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Companies That Trust Us
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join leading organizations who have transformed their teams through our expert-led corporate training programs.
          </p>
        </FadeIn>

        {/* Sequential Logo Animation Section */}
        <FadeIn className="mt-12">
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
            {/* Desktop Layout: Horizontal Row */}
            <div className="hidden md:grid md:grid-cols-5 gap-6 items-center justify-items-center">
              {trustedBrands.map((brand, index) => (
                <SequentialBrandLogo
                  key={brand.name}
                  brand={brand}
                  index={index}
                  activeIndex={activeIndex}
                  isHovered={hoveredIndex === index}
                  onHover={() => handleLogoHover(index)}
                  onLeave={handleLogoLeave}
                />
              ))}
            </div>

            {/* Tablet Layout: 3 Columns */}
            <div className="hidden sm:grid md:hidden grid-cols-3 gap-4 items-center justify-items-center">
              {trustedBrands.map((brand, index) => (
                <SequentialBrandLogo
                  key={brand.name}
                  brand={brand}
                  index={index}
                  activeIndex={activeIndex}
                  isHovered={hoveredIndex === index}
                  onHover={() => handleLogoHover(index)}
                  onLeave={handleLogoLeave}
                />
              ))}
            </div>

            {/* Mobile Layout: 2 Columns */}
            <div className="grid sm:hidden grid-cols-2 gap-4 items-center justify-items-center">
              {trustedBrands.map((brand, index) => (
                <SequentialBrandLogo
                  key={brand.name}
                  brand={brand}
                  index={index}
                  activeIndex={activeIndex}
                  isHovered={hoveredIndex === index}
                  onHover={() => handleLogoHover(index)}
                  onLeave={handleLogoLeave}
                />
              ))}
            </div>

            {/* Animation Indicator */}
            <div className="flex justify-center mt-6 space-x-2">
              {trustedBrands.map((_, index) => (
                <motion.div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                    activeIndex === index ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                  animate={{
                    scale: activeIndex === index ? 1.2 : 1,
                  }}
                  transition={{ duration: 0.3 }}
                />
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Trust Message */}
        <FadeIn className="text-center mt-8">
          <p className="text-sm text-gray-500">
            <span className="font-semibold text-blue-600">17+ Years</span> of training excellence •
            <span className="font-semibold text-blue-600"> 17,375+</span> professionals trained •
            <span className="font-semibold text-blue-600"> 55+</span> cities covered
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
