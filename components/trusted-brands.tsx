"use client"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect, useCallback, useRef } from "react"

interface BrandLogo {
  src: string
  alt: string
  name: string
  id: string
}

const trustedBrands: BrandLogo[] = [
  {
    id: "makemytrip",
    src: "https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/112019/mmt_fullcolor.png?JgFR3clMwpXRH2xztnw10uhf0tUSghgS&itok=2eLs41rV",
    alt: "MakeMyTrip",
    name: "MakeMyTrip",
  },
  {
    id: "bigbasket",
    src: "https://upload.wikimedia.org/wikipedia/en/thumb/1/1d/BigBasket_Logo.svg/1200px-BigBasket_Logo.svg.png",
    alt: "BigBasket",
    name: "BigBasket",
  },
  {
    id: "ciena",
    src: "https://upload.wikimedia.org/wikipedia/en/thumb/4/45/Ciena_logo.svg/2560px-Ciena_logo.svg.png",
    alt: "Ciena",
    name: "Ciena",
  },
  {
    id: "delmonte",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQznXMi1W7C-J70coZjZa1Xuta9A43Ltx3hEw&s",
    alt: "Del Monte",
    name: "Del Monte",
  },
  {
    id: "mes",
    src: "https://mes.gov.in/sites/default/files/mes-logo_0_0.png",
    alt: "Commander Works Engineers",
    name: "Commander Works Engineers",
  },
  {
    id: "paras",
    src: "https://mma.prnewswire.com/media/2633113/Paras_Dairy_Logo.jpg?p=twitter",
    alt: "Paras Dairy",
    name: "Paras Dairy",
  },
  {
    id: "dcm",
    src: "https://getvectorlogo.com/wp-content/uploads/2019/03/dcm-shriram-vector-logo.png",
    alt: "DCM Shriram",
    name: "DCM Shriram",
  },
  {
    id: "continental",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7ijDiTB_0ZwnsIrGxD45pBOaLF_Uz-2ZGwA&s",
    alt: "Continental Carriers",
    name: "Continental Carriers",
  },
  {
    id: "boston",
    src: "https://news.bostonscientific.com/download/BSC_541blue_RGB.jpg",
    alt: "Boston Scientific",
    name: "Boston Scientific",
  },
  {
    id: "yaskawa",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwY9E7G4KWPtxpz1QxikA9ZmVUeiy1_hkREQ&s",
    alt: "Yaskawa India",
    name: "Yaskawa India",
  },
  {
    id: "evident",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTawUkW-cYaldWK5eNBl1pa-6le7YVb-4dI_Q&s",
    alt: "Evident Scientific",
    name: "Evident Scientific",
  },
  {
    id: "nestle",
    src: "https://logowik.com/content/uploads/images/nestle7563.logowik.com.webp",
    alt: "Nestle",
    name: "Nestle",
  },
  {
    id: "olam",
    src: "https://www.olamgroup.com/content/dam/olamgroup/webp/our-businesses/our-businesses-images/olamagri-logo.webp",
    alt: "Olam Agro",
    name: "Olam Agro",
  },
  {
    id: "cars24",
    src: "https://play-lh.googleusercontent.com/G7skapQg8LPBE6NfUKLBbrLh87JN4VMeM0OUqgTHC5tJS3PclGtMr3gcbRvABR9gCDM",
    alt: "Cars24",
    name: "Cars24",
  },
  {
    id: "beumer",
    src: "https://www.beumergroup.com/app/uploads/2020/01/Logo-BEUMER-Group.png",
    alt: "Beumer Group",
    name: "Beumer Group",
  },
  {
    id: "pgs",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4qUAkO6dnN_BKJeV2ppUSwunx7ydy4U_u1g&s",
    alt: "PGS Partner",
    name: "PGS Partner",
  },
  {
    id: "get",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/getglobalgroup_logo-s9rocjQVvnF3gywUFx1xkPg924PqO5.jpeg",
    alt: "GET Global",
    name: "GET Global",
  },
  {
    id: "eximius",
    src: "https://eximiusvc.com/wp-content/uploads/2023/10/blue-eximius.webp",
    alt: "Eximius Ventures",
    name: "Eximius Ventures",
  },
  {
    id: "process9",
    src: "https://process9.com/wp-content/uploads/2020/07/site-black-logo.png",
    alt: "Process9",
    name: "Process9",
  },
  {
    id: "hema",
    src: "https://content.jdmagicbox.com/comp/hosur/u1/9999p4344.4344.150525181845.d9u1/catalogue/hema-engineering-industries-ltd-belagondapalli-hosur-engineering-job-works-3aclc27.jpg",
    alt: "Hema Engineering",
    name: "Hema Engineering",
  },
  {
    id: "nsg",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/National_security_guard_logo.png/1200px-National_security_guard_logo.png",
    alt: "National Security Guard",
    name: "National Security Guard",
  },
  {
    id: "realistic",
    src: "https://content3.jdmagicbox.com/comp/gurgaon/c8/011pxx11.xx11.090610150019.j4c8/catalogue/realistic-realtors-pvt-ltd-sector-25-gurgaon-estate-agents-for-commercial-spaces-a43zrnhpqp.jpg",
    alt: "Realistic Realtors",
    name: "Realistic Realtors",
  },
  {
    id: "pine",
    src: "https://mma.prnewswire.com/media/812226/Pine_Labs_Logo.jpg?p=facebook",
    alt: "Pine Labs",
    name: "Pine Labs",
  },
  {
    id: "sigma",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sigma%20consultancy-1YSQBW8xt81ARt8e10vWuDOQVOnQdS.jpeg",
    alt: "Sigma Consultancy",
    name: "Sigma Consultancy",
  },
  {
    id: "india-shelter",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/india%20shelter-LACBtLlJPrUA47uEZa42BVsLrw34Ml.jpeg",
    alt: "India Shelter Finance",
    name: "India Shelter Finance",
  },
  {
    id: "jastech",
    src: "https://static.wixstatic.com/media/e6b065_f1d84a188d424699ae346fe964073c98~mv2.jpg",
    alt: "Jastech Systems",
    name: "Jastech Systems",
  },
  {
    id: "nsf",
    src: "https://www.nsfindia.org/wp-content/uploads/2022/10/Asset-4Month-300x107.png",
    alt: "National Skills Foundation",
    name: "National Skills Foundation",
  },
  {
    id: "mb-informatics",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MB%20INFORMATICS-L1xF93EqtFw9f8jXwGsgyFjWP3whSt.jpeg",
    alt: "MB Informatics",
    name: "MB Informatics",
  },
  {
    id: "logenix",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgyiyagYrF9z2bw5SukDbWNPNcX7yY-QhbLA&s",
    alt: "Logenix India",
    name: "Logenix India",
  },
  {
    id: "alpine",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWOS4ktw6hbANhP_Q1fmo9L1Hm7TwNJCLi1A&s",
    alt: "Alpine India",
    name: "Alpine India",
  },
  {
    id: "fia-global",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fiaglobal_logo-FQmtrGv5MIC4G2yeAfvG8s4pezu4ms.jpeg",
    alt: "FIA Global Solutions",
    name: "FIA Global Solutions",
  },
  {
    id: "pace",
    src: "https://image-static.collegedunia.com/public/image/institute/cover_1635080228Logo.jpg",
    alt: "Pace Academy",
    name: "Pace Academy",
  },
  {
    id: "dudhi",
    src: "https://dudhi.in/wp-content/uploads/2023/04/logos.png",
    alt: "Dudhi Industries",
    name: "Dudhi Industries",
  },
  {
    id: "experion",
    src: "https://www.experion.co/img/logo/experion-logo.png",
    alt: "Experion Developers",
    name: "Experion Developers",
  },
  {
    id: "digiaccel",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/digiaccel-RNR0FHzC6jvqtpyXU6p6QwXz2b7JQD.jpeg",
    alt: "Digiaccel Learning",
    name: "Digiaccel Learning",
  },
  {
    id: "altmobility",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/altmobility_logo-cCtvNtwITQnN8Hu7eEYtMeqqBWINA7.jpeg",
    alt: "Alt Mobility",
    name: "Alt Mobility",
  },
]

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
      className="relative aspect-[3/2] bg-white border border-gray-200 rounded-lg overflow-hidden group cursor-pointer"
      whileHover={{
        scale: 1.05,
        zIndex: 10,
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
  return <AnimatedLogoGrid />
}


