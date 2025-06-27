"use client"

import React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg" | "xl"
  color?: string
  className?: string
}

export function LoadingSpinner({ size = "md", color = "blue", className }: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-8 h-8",
    lg: "w-12 h-12",
    xl: "w-16 h-16"
  }

  return (
    <motion.div
      className={cn(
        "inline-block rounded-full border-2 border-solid border-current border-r-transparent",
        `border-${color}-600`,
        sizeClasses[size],
        className
      )}
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      role="status"
      aria-label="Loading"
    />
  )
}

interface LoadingDotsProps {
  size?: "sm" | "md" | "lg"
  color?: string
  className?: string
}

export function LoadingDots({ size = "md", color = "blue", className }: LoadingDotsProps) {
  const sizeClasses = {
    sm: "w-1 h-1",
    md: "w-2 h-2",
    lg: "w-3 h-3"
  }

  const dotVariants = {
    initial: { y: 0 },
    animate: { y: -10 }
  }

  return (
    <div className={cn("flex space-x-1", className)} role="status" aria-label="Loading">
      {[0, 1, 2].map((index) => (
        <motion.div
          key={index}
          className={cn(
            "rounded-full",
            `bg-${color}-600`,
            sizeClasses[size]
          )}
          variants={dotVariants}
          initial="initial"
          animate="animate"
          transition={{
            duration: 0.6,
            repeat: Infinity,
            repeatType: "reverse",
            delay: index * 0.2
          }}
        />
      ))}
    </div>
  )
}

interface LoadingPulseProps {
  size?: "sm" | "md" | "lg" | "xl"
  color?: string
  className?: string
}

export function LoadingPulse({ size = "md", color = "blue", className }: LoadingPulseProps) {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-16 h-16",
    xl: "w-20 h-20"
  }

  return (
    <motion.div
      className={cn(
        "rounded-full",
        `bg-${color}-600`,
        sizeClasses[size],
        className
      )}
      animate={{
        scale: [1, 1.2, 1],
        opacity: [1, 0.7, 1]
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      role="status"
      aria-label="Loading"
    />
  )
}

interface LoadingSkeletonProps {
  className?: string
  lines?: number
  animate?: boolean
}

export function LoadingSkeleton({ className, lines = 3, animate = true }: LoadingSkeletonProps) {
  const skeletonVariants = {
    initial: { opacity: 1 },
    animate: { opacity: 0.5 }
  }

  return (
    <div className={cn("space-y-3", className)} role="status" aria-label="Loading content">
      {Array.from({ length: lines }).map((_, index) => (
        <motion.div
          key={index}
          className="h-4 bg-gray-200 rounded-md"
          style={{ width: `${Math.random() * 40 + 60}%` }}
          variants={animate ? skeletonVariants : undefined}
          initial={animate ? "initial" : undefined}
          animate={animate ? "animate" : undefined}
          transition={animate ? {
            duration: 1,
            repeat: Infinity,
            repeatType: "reverse",
            delay: index * 0.1
          } : undefined}
        />
      ))}
    </div>
  )
}
