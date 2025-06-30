"use client"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect, useCallback, useRef } from "react"
import trustedBrands,{BrandLogo} from '../data/trusted-brands';

interface LogoSlotProps {
  logo: BrandLogo
  index: number
  onLogoChange: (index: number) => void
}

function LogoSlot({ logo, index, onLogoChange }: LogoSlotProps) {
  const [isFlipping, setIsFlipping] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    // Random flip animation every 6-10 seconds
    const flipInterval = setInterval(
      () => {
        setIsFlipping(true)
        setTimeout(() => setIsFlipping(false), 600)
      },
      6000 + Math.random() * 4000,
    )

    // Logo rotation every 12-18 seconds (staggered based on index)
    const rotationInterval = setInterval(
      () => {
        onLogoChange(index)
      },
      12000 + Math.random() * 6000 + index * 800,
    )

    return () => {
      clearInterval(flipInterval)
      clearInterval(rotationInterval)
    }
  }, [index, onLogoChange])

  return (
    <motion.div
      className="relative aspect-[3/2] bg-white border border-gray-200 rounded-lg overflow-hidden group cursor-pointer shadow-md"
      whileHover={{
        scale: 1.1,
        zIndex: 10,
        boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)",
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 30,
      }}
    >
      {/* Shimmer Loading Effect */}
      <AnimatePresence>
        {isLoading && !hasError && (
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200"
            animate={{
              x: ["-100%", "100%"],
            }}
            transition={{
              duration: 1.5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            exit={{ opacity: 0 }}
          />
        )}
      </AnimatePresence>

      {/* Logo Container */}
      <AnimatePresence mode="wait">
        <motion.div
          key={logo.id}
          className="relative w-full h-full flex items-center justify-center p-4"
          initial={{
            opacity: 0,
            rotateY: -90,
            scale: 0.8,
          }}
          animate={{
            opacity: 1,
            rotateY: isFlipping ? 360 : 0,
            scale: isFlipping ? [1, 0.8, 1] : 1,
          }}
          exit={{
            opacity: 0,
            rotateY: 90,
            scale: 0.8,
          }}
          transition={{
            duration: 0.6,
            ease: "easeInOut",
          }}
          style={{
            transformStyle: "preserve-3d",
          }}
        >
          {hasError ? (
            <div className="w-full h-full flex items-center justify-center bg-gray-100 text-gray-500 text-xs font-medium text-center p-2">
              {logo.name}
            </div>
          ) : (
            <Image
              src={logo.src || "/placeholder.svg"}
              alt={logo.alt}
              width={120}
              height={80}
              className="object-contain w-full h-full transition-all duration-300 group-hover:brightness-110 group-hover:scale-105"
              onLoad={() => {
                setIsLoading(false)
                setHasError(false)
              }}
              onError={() => {
                setIsLoading(false)
                setHasError(true)
              }}
              priority={index < 12}
              unoptimized
            />
          )}
        </motion.div>
      </AnimatePresence>

      {/* Hover Overlay */}
      <motion.div
        className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
      />

      {/* Shimmer Effect on Hover */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 opacity-0 group-hover:opacity-100"
        animate={{
          x: ["-100%", "100%"],
        }}
        transition={{
          duration: 0.8,
          ease: "easeInOut",
        }}
      />
    </motion.div>
  )
}

function AnimatedLogoGrid() {
  const [logoGrid, setLogoGrid] = useState<BrandLogo[]>([])
  const [availableLogos, setAvailableLogos] = useState<BrandLogo[]>([])
  const isRotatingRef = useRef(false)

  // Initialize grid with first 24 unique logos and remaining 12 in pool
  useEffect(() => {
    // Shuffle all logos first
    const shuffledLogos = [...trustedBrands].sort(() => Math.random() - 0.5)

    // Take first 24 for initial grid display
    const initialGrid = shuffledLogos.slice(0, 24)

    // Remaining 12 logos for rotation pool
    const rotationPool = shuffledLogos.slice(24)

    setLogoGrid(initialGrid)
    setAvailableLogos(rotationPool)

    console.log("🎯 Logo Grid Initialized:")
    console.log(
      "Grid:",
      initialGrid.map((l) => l.id),
    )
    console.log(
      "Pool:",
      rotationPool.map((l) => l.id),
    )
  }, [])

  const handleLogoChange = useCallback((slotIndex: number) => {
    // Prevent concurrent rotations
    if (isRotatingRef.current) {
      console.log("⏳ Rotation in progress, skipping slot", slotIndex)
      return
    }

    isRotatingRef.current = true

    // Use functional updates to ensure we have the latest state
    setLogoGrid((currentGrid) => {
      setAvailableLogos((currentAvailable) => {
        // Safety checks
        if (currentAvailable.length === 0) {
          console.log("❌ No available logos for rotation")
          isRotatingRef.current = false
          return currentAvailable
        }

        const currentLogo = currentGrid[slotIndex]
        if (!currentLogo) {
          console.log("❌ No current logo at slot", slotIndex)
          isRotatingRef.current = false
          return currentAvailable
        }

        // Check if current logo is already in available pool
        const isDuplicateInPool = currentAvailable.some((logo) => logo.id === currentLogo.id)
        if (isDuplicateInPool) {
          console.log("⚠️ Logo already in pool, skipping:", currentLogo.id)
          isRotatingRef.current = false
          return currentAvailable
        }

        // Get random logo from available pool
        const randomIndex = Math.floor(Math.random() * currentAvailable.length)
        const newLogo = currentAvailable[randomIndex]

        // Check if new logo is already in grid
        const isDuplicateInGrid = currentGrid.some((logo, idx) => idx !== slotIndex && logo.id === newLogo.id)
        if (isDuplicateInGrid) {
          console.log("⚠️ Logo already in grid, skipping:", newLogo.id)
          isRotatingRef.current = false
          return currentAvailable
        }

        console.log(`🔄 Slot ${slotIndex}: ${currentLogo.id} → ${newLogo.id}`)

        // Create new available pool: remove selected logo, add current logo
        const newAvailable = currentAvailable.filter((_, idx) => idx !== randomIndex)
        newAvailable.push(currentLogo)

        // Update the grid with new logo
        const newGrid = [...currentGrid]
        newGrid[slotIndex] = newLogo

        // Validate no duplicates in new grid
        const gridIds = newGrid.map((logo) => logo.id)
        const uniqueIds = new Set(gridIds)
        if (gridIds.length !== uniqueIds.size) {
          console.error("🚨 DUPLICATE DETECTED IN GRID!", gridIds)
          // Don't update if duplicates detected
          isRotatingRef.current = false
          return currentAvailable
        }

        // Update the grid state
        setLogoGrid(newGrid)

        // Release rotation lock after a delay
        setTimeout(() => {
          isRotatingRef.current = false
        }, 500)

        return newAvailable.sort(() => Math.random() - 0.5)
      })

      return currentGrid
    })
  }, [])

  if (logoGrid.length === 0) {
    return (
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-6xl mx-auto">
        {Array.from({ length: 24 }).map((_, index) => (
          <div key={index} className="aspect-[3/2] bg-gray-200 rounded-lg animate-pulse" />
        ))}
      </div>
    )
  }

  return (
    <motion.div
      className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-6xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        staggerChildren: 0.1,
      }}
    >
      {logoGrid.map((logo, index) => (
        <motion.div
          key={`slot-${index}-${logo.id}`}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.5,
            delay: index * 0.05,
          }}
        >
          <LogoSlot logo={logo} index={index} onLogoChange={handleLogoChange} />
        </motion.div>
      ))}
    </motion.div>
  )
}

export function TrustedBrands() {
  return (
    <section className="py-10 bg-gray-50 pb-10">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Heading */}
        <motion.h2
          className="text-4xl font-bold text-gray-800 mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Trusted by 100+ Companies
        </motion.h2>

        {/* Logo Grid */}
        <AnimatedLogoGrid />
      </div>
    </section>
  )
}


