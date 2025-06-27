export interface Testimonial {
  id: number
  quote: string
  name: string
  designation: string
  company: string
  logo: string
  rating?: number
}

export const testimonialsData: Testimonial[] = [
  {
    id: 1,
    quote:
      "Hirdesh conducted a number of advanced Excel training sessions for FIA. His ability to simplify concepts, engage across all levels, and provide real-world tools made it extremely impactful.",
    name: "Seema Prem",
    designation: "Co-Founder & CEO",
    company: "FIA Global",
    logo: "/logos/fia-global-logo.png",
    rating: 5,
  },
  {
    id: 2,
    quote:
      "Your training for Del Monte was extremely effective! Participants actively engaged and enjoyed solving real business problems through Excel. A big thanks from our entire team!",
    name: "Yamini Talwar",
    designation: "Corporate Trainer",
    company: "Del Monte Foods Pvt. Ltd.",
    logo: "/logos/del-monte-logo.png",
    rating: 5,
  },
  {
    id: 3,
    quote:
      "The Excel training provided by Webs Jyoti was comprehensive and practical. Our team's productivity has significantly improved after implementing the techniques learned.",
    name: "Rajesh Kumar",
    designation: "Operations Manager",
    company: "DCM Shriram",
    logo: "/logos/dcm-shriram-logo.png",
    rating: 5,
  },
  {
    id: 4,
    quote:
      "Excellent training program! The hands-on approach and real-world examples made complex data analytics concepts easy to understand and apply in our daily work.",
    name: "Priya Sharma",
    designation: "Data Analyst",
    company: "MakeMyTrip",
    logo: "/logos/makemytrip-logo.png",
    rating: 5,
  },
  {
    id: 5,
    quote:
      "We at Del Monte are dedicated to continuous learning. Thank you, Hirdesh, for such a powerful session — we look forward to more collaborations!",
    name: "Del Monte Team",
    designation: "Training Department",
    company: "Del Monte India",
    logo: "/logos/del-monte-logo.png",
    rating: 5,
  },
  {
    id: 6,
    quote:
      "The Power BI training was exceptional. Our team can now create professional dashboards and reports that have transformed our decision-making process.",
    name: "Amit Singh",
    designation: "Business Intelligence Manager",
    company: "Tech Solutions Ltd.",
    logo: "/placeholder.svg",
    rating: 5,
  },
  {
    id: 7,
    quote:
      "Outstanding training delivery! The trainer's expertise in data analytics and ability to explain complex concepts in simple terms was remarkable.",
    name: "Neha Gupta",
    designation: "HR Director",
    company: "Global Enterprises",
    logo: "/placeholder.svg",
    rating: 5,
  },
  {
    id: 8,
    quote:
      "The corporate training program exceeded our expectations. Our employees are now more confident in handling data analysis tasks and creating meaningful insights.",
    name: "Vikram Patel",
    designation: "Training Manager",
    company: "Innovation Corp",
    logo: "/placeholder.svg",
    rating: 5,
  },
  {
    id: 9,
    quote:
      "Webs Jyoti's Excel training transformed our team's productivity. The practical approach and real-world examples made learning engaging and effective.",
    name: "Ravi Sharma",
    designation: "Operations Head",
    company: "Manufacturing Solutions",
    logo: "/placeholder.svg",
    rating: 5,
  },
  {
    id: 10,
    quote:
      "The data visualization training helped us create compelling reports that our stakeholders love. Highly recommend their professional approach.",
    name: "Sunita Patel",
    designation: "Data Manager",
    company: "Financial Services Inc.",
    logo: "/placeholder.svg",
    rating: 5,
  },
]

// Helper function to get featured testimonials (first 4)
export const getFeaturedTestimonials = (): Testimonial[] => {
  return testimonialsData.slice(0, 4)
}

// Helper function to get testimonial by ID
export const getTestimonialById = (id: number): Testimonial | undefined => {
  return testimonialsData.find(testimonial => testimonial.id === id)
}

// Helper function to get testimonials by company
export const getTestimonialsByCompany = (company: string): Testimonial[] => {
  return testimonialsData.filter(testimonial => 
    testimonial.company.toLowerCase().includes(company.toLowerCase())
  )
}

// Helper function to get random testimonials
export const getRandomTestimonials = (count: number): Testimonial[] => {
  const shuffled = [...testimonialsData].sort(() => 0.5 - Math.random())
  return shuffled.slice(0, count)
}
