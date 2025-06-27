"use client"

import React from "react"
import { motion } from "framer-motion"
import { Button, ButtonProps } from "./button"
import { cn } from "@/lib/utils"

interface EnhancedButtonProps extends Omit<ButtonProps, "variant"> {
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | "gradient" | "glow"
  animation?: "none" | "bounce" | "scale" | "pulse" | "glow"
  glowColor?: string
}

export const EnhancedButton = React.forwardRef<HTMLButtonElement, EnhancedButtonProps>(
  ({ className, variant = "default", animation = "scale", glowColor = "blue", children, ...props }, ref) => {
    const getVariantClasses = () => {
      switch (variant) {
        case "gradient":
          return "bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white shadow-lg hover:shadow-xl"
        case "glow":
          return `bg-gradient-to-r from-${glowColor}-600 to-${glowColor}-700 text-white shadow-lg hover:shadow-2xl hover:shadow-${glowColor}-500/50`
        default:
          return ""
      }
    }

    const getAnimationProps = () => {
      switch (animation) {
        case "bounce":
          return {
            whileHover: { y: -2 },
            whileTap: { y: 0 },
            transition: { type: "spring", stiffness: 400, damping: 10 } as const
          }
        case "scale":
          return {
            whileHover: { scale: 1.05 },
            whileTap: { scale: 0.95 },
            transition: { type: "spring", stiffness: 400, damping: 10 } as const
          }
        case "pulse":
          return {
            animate: { scale: [1, 1.02, 1] },
            transition: { duration: 2, repeat: Infinity, ease: "easeInOut" } as const
          }
        case "glow":
          return {
            whileHover: { 
              boxShadow: `0 0 20px rgba(59, 130, 246, 0.5)`,
              scale: 1.02
            },
            transition: { duration: 0.3 } as const
          }
        default:
          return {}
      }
    }

    if (animation === "none") {
      return (
        <Button
          className={cn(getVariantClasses(), className)}
          variant={variant === "gradient" || variant === "glow" ? "default" : variant}
          ref={ref}
          {...props}
        >
          {children}
        </Button>
      )
    }

    return (
      <motion.div {...getAnimationProps()}>
        <Button
          className={cn(getVariantClasses(), className)}
          variant={variant === "gradient" || variant === "glow" ? "default" : variant}
          ref={ref}
          {...props}
        >
          {children}
        </Button>
      </motion.div>
    )
  }
)

EnhancedButton.displayName = "EnhancedButton"
