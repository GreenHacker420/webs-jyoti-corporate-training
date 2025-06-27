"use client"

import React from "react"
import { BlinkingLogo } from "./animations/blinking-logo"
import { EnhancedButton } from "./ui/enhanced-button"
import { EnhancedCard, GlowCard, TiltCard } from "./ui/enhanced-card"
import { LoadingSpinner, LoadingDots, LoadingPulse } from "./ui/enhanced-loading"

export function TestComponents() {
  return (
    <div className="p-8 space-y-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-8">Enhanced UI Components Test</h1>
      
      {/* Blinking Logo Test */}
      <section className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Blinking Logo Component</h2>
        <div className="flex justify-center">
          <BlinkingLogo
            src="/webs-jyoti-logo-correct.jpeg"
            alt="Test Logo"
            width={200}
            height={150}
            blinkDuration={2}
            minOpacity={0.3}
            maxOpacity={1}
          />
        </div>
      </section>

      {/* Enhanced Buttons Test */}
      <section className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Enhanced Buttons</h2>
        <div className="flex flex-wrap gap-4">
          <EnhancedButton variant="gradient" animation="scale">
            Gradient Scale
          </EnhancedButton>
          <EnhancedButton variant="glow" animation="bounce" glowColor="blue">
            Glow Bounce
          </EnhancedButton>
          <EnhancedButton variant="outline" animation="pulse">
            Outline Pulse
          </EnhancedButton>
          <EnhancedButton animation="glow">
            Default Glow
          </EnhancedButton>
        </div>
      </section>

      {/* Enhanced Cards Test */}
      <section className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Enhanced Cards</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <EnhancedCard animation="hover" className="p-4 bg-white border">
            <h3 className="font-semibold mb-2">Hover Card</h3>
            <p className="text-gray-600">Hover to see the effect</p>
          </EnhancedCard>
          
          <GlowCard className="p-4" glowColor="purple">
            <h3 className="font-semibold mb-2">Glow Card</h3>
            <p className="text-gray-600">Hover for glow effect</p>
          </GlowCard>
          
          <TiltCard className="p-4">
            <h3 className="font-semibold mb-2">Tilt Card</h3>
            <p className="text-gray-600">Hover for 3D tilt</p>
          </TiltCard>
        </div>
      </section>

      {/* Loading Components Test */}
      <section className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Loading Components</h2>
        <div className="flex flex-wrap items-center gap-8">
          <div className="text-center">
            <LoadingSpinner size="md" color="blue" />
            <p className="mt-2 text-sm">Spinner</p>
          </div>
          
          <div className="text-center">
            <LoadingDots size="md" color="green" />
            <p className="mt-2 text-sm">Dots</p>
          </div>
          
          <div className="text-center">
            <LoadingPulse size="md" color="purple" />
            <p className="mt-2 text-sm">Pulse</p>
          </div>
        </div>
      </section>

      {/* Animation Test Info */}
      <section className="bg-blue-50 p-6 rounded-lg">
        <h2 className="text-xl font-semibold mb-4 text-blue-800">Animation Features</h2>
        <ul className="space-y-2 text-blue-700">
          <li>✅ Smooth CSS transitions with easing</li>
          <li>✅ Framer Motion integration for complex animations</li>
          <li>✅ Accessibility-friendly (respects prefers-reduced-motion)</li>
          <li>✅ Configurable animation parameters</li>
          <li>✅ Performance optimized with will-change properties</li>
        </ul>
      </section>
    </div>
  )
}
