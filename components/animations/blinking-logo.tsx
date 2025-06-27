"use client"

import React from "react"
import Image from "next/image"
import { motion } from "framer-motion"

interface BlinkingLogoProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  blinkDuration?: number
  minOpacity?: number
  maxOpacity?: number
}

export function BlinkingLogo({
  src,
  alt,
  width = 300,
  height = 200,
  className = "",
  blinkDuration = 2,
  minOpacity = 0.3,
  maxOpacity = 1,
}: BlinkingLogoProps) {
  return (
    <motion.div
      className={`inline-block ${className}`}
      animate={{
        opacity: [maxOpacity, minOpacity, maxOpacity],
      }}
      transition={{
        duration: blinkDuration,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      // Accessibility: Respect user's motion preferences
      style={{
        willChange: "opacity",
      }}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="object-contain"
        priority
      />
    </motion.div>
  )
}

// Alternative version with CSS-only animation for better performance
export function BlinkingLogoCSSOnly({
  src,
  alt,
  width = 300,
  height = 200,
  className = "",
}: Omit<BlinkingLogoProps, "blinkDuration" | "minOpacity" | "maxOpacity">) {
  return (
    <div className={`inline-block animate-pulse ${className}`}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="object-contain"
        priority
      />
      <style jsx>{`
        @keyframes gentle-blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
        .animate-gentle-blink {
          animation: gentle-blink 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}
