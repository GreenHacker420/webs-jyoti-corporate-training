"use client"

import React from "react"
import { motion } from "framer-motion"
import { Card } from "./card"
import { cn } from "@/lib/utils"

interface EnhancedCardProps extends React.HTMLAttributes<HTMLDivElement> {
  animation?: "none" | "hover" | "float" | "glow" | "tilt"
  glowColor?: string
  hoverScale?: number
}

export const EnhancedCard = React.forwardRef<HTMLDivElement, EnhancedCardProps>(
  ({ className, animation = "hover", glowColor = "blue", hoverScale = 1.02, children, ...props }, ref) => {
    const getAnimationProps = () => {
      switch (animation) {
        case "hover":
          return {
            whileHover: { 
              scale: hoverScale,
              y: -4,
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
            },
            transition: { type: "spring", stiffness: 300, damping: 20 }
          }
        case "float":
          return {
            animate: { y: [-2, 2, -2] },
            transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
            whileHover: { scale: hoverScale }
          }
        case "glow":
          return {
            whileHover: { 
              boxShadow: `0 0 30px rgba(59, 130, 246, 0.3)`,
              scale: hoverScale
            },
            transition: { duration: 0.3 }
          }
        case "tilt":
          return {
            whileHover: { 
              rotateX: 5,
              rotateY: 5,
              scale: hoverScale,
              transformPerspective: 1000
            },
            transition: { type: "spring", stiffness: 300, damping: 20 }
          }
        default:
          return {}
      }
    }

    if (animation === "none") {
      return (
        <Card className={cn(className)} ref={ref} {...props}>
          {children}
        </Card>
      )
    }

    return (
      <motion.div {...getAnimationProps()}>
        <Card className={cn(className)} ref={ref} {...props}>
          {children}
        </Card>
      </motion.div>
    )
  }
)

EnhancedCard.displayName = "EnhancedCard"

// Enhanced Card variants for specific use cases
export const FloatingCard = ({ children, className, ...props }: EnhancedCardProps) => (
  <EnhancedCard animation="float" className={cn("bg-white/80 backdrop-blur-sm", className)} {...props}>
    {children}
  </EnhancedCard>
)

export const GlowCard = ({ children, className, glowColor = "blue", ...props }: EnhancedCardProps) => (
  <EnhancedCard 
    animation="glow" 
    glowColor={glowColor}
    className={cn("bg-gradient-to-br from-white to-gray-50 border-0", className)} 
    {...props}
  >
    {children}
  </EnhancedCard>
)

export const TiltCard = ({ children, className, ...props }: EnhancedCardProps) => (
  <EnhancedCard 
    animation="tilt" 
    className={cn("bg-white shadow-lg border border-gray-100", className)} 
    {...props}
  >
    {children}
  </EnhancedCard>
)
