"use client"

import React from "react"
import { User, GraduationCap } from "lucide-react"
import { cn } from "@/lib/utils"

interface DefaultAvatarProps {
  name: string
  size?: "sm" | "md" | "lg" | "xl"
  className?: string
  showIcon?: boolean
  variant?: "circle" | "rounded"
}

export function DefaultAvatar({ 
  name, 
  size = "md", 
  className, 
  showIcon = true,
  variant = "circle"
}: DefaultAvatarProps) {
  // Generate initials from name
  const getInitials = (fullName: string) => {
    const names = fullName.trim().split(' ')
    if (names.length === 1) {
      return names[0].charAt(0).toUpperCase()
    }
    return (names[0].charAt(0) + names[names.length - 1].charAt(0)).toUpperCase()
  }

  // Generate consistent color based on name
  const getAvatarColor = (fullName: string) => {
    const colors = [
      'bg-gradient-to-br from-blue-500 to-blue-600',
      'bg-gradient-to-br from-green-500 to-green-600',
      'bg-gradient-to-br from-purple-500 to-purple-600',
      'bg-gradient-to-br from-orange-500 to-orange-600',
      'bg-gradient-to-br from-red-500 to-red-600',
      'bg-gradient-to-br from-indigo-500 to-indigo-600',
      'bg-gradient-to-br from-pink-500 to-pink-600',
      'bg-gradient-to-br from-teal-500 to-teal-600',
    ]
    
    let hash = 0
    for (let i = 0; i < fullName.length; i++) {
      hash = fullName.charCodeAt(i) + ((hash << 5) - hash)
    }
    
    return colors[Math.abs(hash) % colors.length]
  }

  // Size configurations
  const sizeConfig = {
    sm: {
      container: "w-8 h-8",
      text: "text-xs",
      icon: "w-3 h-3"
    },
    md: {
      container: "w-12 h-12",
      text: "text-sm",
      icon: "w-4 h-4"
    },
    lg: {
      container: "w-16 h-16",
      text: "text-lg",
      icon: "w-5 h-5"
    },
    xl: {
      container: "w-20 h-20",
      text: "text-xl",
      icon: "w-6 h-6"
    }
  }

  const config = sizeConfig[size]
  const initials = getInitials(name)
  const colorClass = getAvatarColor(name)
  const roundedClass = variant === "circle" ? "rounded-full" : "rounded-lg"

  return (
    <div
      className={cn(
        "flex items-center justify-center text-white font-semibold shadow-lg border-2 border-white relative overflow-hidden",
        config.container,
        colorClass,
        roundedClass,
        className
      )}
      title={name}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-full h-full">
          <div className="absolute top-1 right-1 w-2 h-2 bg-white rounded-full opacity-20"></div>
          <div className="absolute bottom-1 left-1 w-1 h-1 bg-white rounded-full opacity-30"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center">
        {showIcon && size !== "sm" ? (
          <div className="flex flex-col items-center">
            <GraduationCap className={cn(config.icon, "mb-0.5")} />
            <span className={cn(config.text, "font-bold leading-none")}>
              {initials}
            </span>
          </div>
        ) : (
          <span className={cn(config.text, "font-bold")}>
            {initials}
          </span>
        )}
      </div>

      {/* Shine effect */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white to-transparent opacity-0 hover:opacity-10 transition-opacity duration-300 transform -skew-x-12"></div>
    </div>
  )
}

// Alternative simple version without icon
export function SimpleAvatar({ name, size = "md", className, variant = "circle" }: Omit<DefaultAvatarProps, 'showIcon'>) {
  return (
    <DefaultAvatar 
      name={name} 
      size={size} 
      className={className} 
      variant={variant}
      showIcon={false} 
    />
  )
}

// Professional trainer avatar with specific styling
export function TrainerAvatar({ name, size = "lg", className }: Omit<DefaultAvatarProps, 'showIcon' | 'variant'>) {
  return (
    <DefaultAvatar 
      name={name} 
      size={size} 
      className={cn("ring-2 ring-blue-200 ring-offset-2", className)} 
      variant="circle"
      showIcon={true} 
    />
  )
}
