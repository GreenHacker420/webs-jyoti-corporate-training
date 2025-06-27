import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function GalleryPage() {
  const galleryImages = [
    {
      id: 1,
      title: "Corporate Excel Training Session",
      category: "Training",
      src: "/images/gallery/img-4351.webp",
      alt: "Corporate Excel training session with participants",
    },
    {
      id: 2,
      title: "Azamgarh Excel Workshop",
      category: "Workshop",
      src: "/images/gallery/azamgarh-excel.webp",
      alt: "Excel training workshop in Azamgarh",
    },
    {
      id: 3,
      title: "Pune Corporate Training",
      category: "Corporate",
      src: "/images/gallery/pune-excel.webp",
      alt: "Corporate training session in Pune",
    },
    {
      id: 4,
      title: "Raipur Excel Training",
      category: "Training",
      src: "/images/gallery/raipur-excel.webp",
      alt: "Excel training session in Raipur",
    },
    {
      id: 5,
      title: "Advanced Analytics Workshop",
      category: "Workshop",
      src: "/images/gallery/img-4351.webp",
      alt: "Advanced analytics training workshop",
    },
    {
      id: 6,
      title: "Power BI Corporate Training",
      category: "Corporate",
      src: "/images/gallery/pune-excel.webp",
      alt: "Power BI training for corporate teams",
    },
    {
      id: 7,
      title: "Data Analytics Masterclass",
      category: "Masterclass",
      src: "/images/gallery/azamgarh-excel.webp",
      alt: "Data analytics masterclass session",
    },
    {
      id: 8,
      title: "Business Intelligence Training",
      category: "Training",
      src: "/images/gallery/raipur-excel.webp",
      alt: "Business intelligence training session",
    },
    {
      id: 9,
      title: "Team Skills Development",
      category: "Corporate",
      src: "/images/gallery/img-4351.webp",
      alt: "Corporate team skills development session",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">View Our Corporate Training in Action</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Browse snapshots from real training sessions, team workshops, and on-site corporate engagements across 20+
            cities.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {galleryImages.map((image) => (
              <div key={image.id} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-md shadow-lg aspect-[4/3]">
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    width={400}
                    height={300}
                    className="w-full h-48 sm:h-56 md:h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-center text-white">
                      <h3 className="text-xl font-semibold mb-2">{image.title}</h3>
                      <span className="bg-blue-500 px-3 py-1 rounded-full text-sm">{image.category}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
