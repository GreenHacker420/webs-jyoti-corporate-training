"use client"

import type React from "react"

interface FloatingCardProps {
  children: React.ReactNode
  className?: string
  delay?: number
}

export function FloatingCard({ children, className = "", delay = 0 }: FloatingCardProps) {
  return (
    <div
      className={`transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:-translate-y-2 ${className}`}
      style={{
        animationDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}
