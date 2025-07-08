"use client"

import { Phone, MessageCircle } from "lucide-react"
import { cn } from "@/lib/utils"

interface ContactButtonsProps {
  variant?: "default" | "floating" | "inline"
  size?: "sm" | "md" | "lg"
  className?: string
  showLabels?: boolean
  phoneNumber?: string
  whatsappMessage?: string
}

export function ContactButtons({
  variant = "default",
  size = "md",
  className,
  showLabels = true,
  phoneNumber = "+918802000175",
  whatsappMessage = "Hi, I'm interested in corporate training programs"
}: ContactButtonsProps) {
  const phoneUrl = `tel:${phoneNumber}`
  const whatsappUrl = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(whatsappMessage)}`

  const sizeClasses = {
    sm: "p-2 text-sm",
    md: "p-3 text-base",
    lg: "p-4 text-lg"
  }

  const iconSizes = {
    sm: "w-4 h-4",
    md: "w-5 h-5", 
    lg: "w-6 h-6"
  }

  if (variant === "floating") {
    return (
      <div className={cn("fixed bottom-4 right-4 z-50 flex flex-col gap-3", className)}>
        {/* WhatsApp Floating Button */}
        <a 
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "group bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-110 flex items-center justify-center",
            sizeClasses[size]
          )}
          aria-label="Contact us on WhatsApp"
        >
          <MessageCircle className={iconSizes[size]} />
        </a>
        
        {/* Call Floating Button */}
        <a 
          href={phoneUrl}
          className={cn(
            "group bg-blue-500 hover:bg-blue-600 text-white rounded-full shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-110 flex items-center justify-center",
            sizeClasses[size]
          )}
          aria-label="Call us now"
        >
          <Phone className={iconSizes[size]} />
        </a>
      </div>
    )
  }

  if (variant === "inline") {
    return (
      <div className={cn("flex gap-3", className)}>
        <a 
          href={phoneUrl}
          className={cn(
            "group bg-green-500 hover:bg-green-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105 flex items-center space-x-2",
            showLabels ? "px-6 py-3" : sizeClasses[size]
          )}
        >
          <Phone className={iconSizes[size]} />
          {showLabels && <span>Call Now</span>}
        </a>
        <a 
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "group bg-green-400 hover:bg-green-500 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105 flex items-center space-x-2",
            showLabels ? "px-6 py-3" : sizeClasses[size]
          )}
        >
          <MessageCircle className={iconSizes[size]} />
          {showLabels && <span>WhatsApp</span>}
        </a>
      </div>
    )
  }

  // Default variant - stacked buttons
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      {/* Call Button */}
      <a 
        href={phoneUrl}
        className={cn(
          "group bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-xl font-bold shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105 flex items-center space-x-2",
          showLabels ? "px-4 py-2" : sizeClasses[size]
        )}
      >
        <Phone className={cn(iconSizes[size], "animate-pulse")} />
        {showLabels && <span className="text-sm">Call Now</span>}
      </a>
      
      {/* WhatsApp Button */}
      <a 
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "group bg-gradient-to-r from-green-400 to-green-500 hover:from-green-500 hover:to-green-600 text-white rounded-xl font-bold shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105 flex items-center space-x-2",
          showLabels ? "px-4 py-2" : sizeClasses[size]
        )}
      >
        <MessageCircle className={iconSizes[size]} />
        {showLabels && <span className="text-sm">WhatsApp</span>}
      </a>
    </div>
  )
}

// Phone number display component
export function PhoneNumber({ 
  number = "+91-8802000175",
  className 
}: { 
  number?: string
  className?: string 
}) {
  return (
    <a 
      href={`tel:${number.replace(/[^0-9+]/g, '')}`}
      className={cn(
        "inline-flex items-center space-x-2 text-blue-600 hover:text-blue-800 font-semibold transition-colors duration-200",
        className
      )}
    >
      <Phone className="w-4 h-4" />
      <span>{number}</span>
    </a>
  )
}

// WhatsApp link component
export function WhatsAppLink({ 
  number = "+918802000175",
  message = "Hi, I'm interested in corporate training programs",
  children,
  className 
}: { 
  number?: string
  message?: string
  children?: React.ReactNode
  className?: string 
}) {
  const whatsappUrl = `https://wa.me/${number.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(message)}`
  
  return (
    <a 
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center space-x-2 text-green-600 hover:text-green-800 font-semibold transition-colors duration-200",
        className
      )}
    >
      <MessageCircle className="w-4 h-4" />
      <span>{children || "WhatsApp"}</span>
    </a>
  )
}
