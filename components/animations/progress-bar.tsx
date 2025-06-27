"use client"

import { useEffect, useRef, useState } from "react"

interface ProgressBarProps {
  progress: number
  className?: string
  color?: string
  height?: string
}

export function ProgressBar({ progress, className = "", color = "bg-blue-500", height = "h-2" }: ProgressBarProps) {
  const [animatedProgress, setAnimatedProgress] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
        }
      },
      { threshold: 0.5 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [isVisible])

  useEffect(() => {
    if (!isVisible) return

    const timer = setTimeout(() => {
      setAnimatedProgress(progress)
    }, 200)

    return () => clearTimeout(timer)
  }, [isVisible, progress])

  return (
    <div ref={ref} className={`w-full bg-gray-200 rounded-full ${height} ${className}`}>
      <div
        className={`${height} ${color} rounded-full transition-all duration-1000 ease-out`}
        style={{ width: `${animatedProgress}%` }}
      />
    </div>
  )
}
