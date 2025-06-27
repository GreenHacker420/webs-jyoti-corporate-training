import Image from "next/image"
import { TrainerAvatar } from "@/components/default-avatar"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Linkedin, Mail, Award, MapPin } from "lucide-react"

// Add these imports at the top
import { FadeIn } from "@/components/animations/fade-in"
import { FloatingCard } from "@/components/animations/floating-card"
import { StaggerContainer } from "@/components/animations/stagger-container"

export default function TrainerTeamPage() {
  const trainers = [
    {
      id: 1,
      name: "Hirdesh Bhardwaj",
      locations: ["Delhi NCR", "Gurgaon", "Delhi", "Noida", "Ghaziabad", "Meerut", "KOTA"],
      title: "Senior Data Analytics Trainer & Regional Head",
      experience: "15+ Years",
      specialization: "Data Analytics, Advanced Excel, Power BI",
      certifications: ["Microsoft Certified", "Google Analytics", "Power BI Expert"],
      bio: "Regional head covering Delhi NCR and surrounding areas with expertise in comprehensive data analytics training.",
    },
    {
      id: 2,
      name: "Ujjwal Garg",
      locations: ["AGRA"],
      title: "Data Analytics Specialist",
      experience: "12+ Years",
      specialization: "Advanced Excel, MIS Reporting, Data Visualization",
      certifications: ["Microsoft Excel Expert", "Data Analytics Certified"],
      bio: "Specialized in advanced Excel techniques and MIS reporting for corporate clients in Agra region.",
    },
    {
      id: 3,
      name: "Kishore Kumar",
      locations: ["RAIPUR"],
      title: "Business Intelligence Trainer",
      experience: "10+ Years",
      specialization: "Power BI, Business Intelligence, Dashboard Design",
      certifications: ["Power BI Certified", "Business Intelligence", "Data Visualization"],
      bio: "Expert in Power BI and business intelligence solutions serving Chhattisgarh region.",
    },
    {
      id: 4,
      name: "Akshat Dubey",
      locations: ["BHOPAL"],
      title: "Excel & Analytics Expert",
      experience: "11+ Years",
      specialization: "Advanced Excel, Statistical Analysis, Reporting",
      certifications: ["Excel Expert", "Statistical Analysis", "Data Science Fundamentals"],
      bio: "Focused on advanced Excel training and statistical analysis for Madhya Pradesh region.",
    },
    {
      id: 5,
      name: "Sanskar Singh",
      locations: ["INDORE"],
      title: "Corporate Training Specialist",
      experience: "9+ Years",
      specialization: "Corporate Training, Data Analytics, Excel Automation",
      certifications: ["Corporate Training", "Excel Automation", "VBA Programming"],
      bio: "Specializes in corporate training programs and Excel automation solutions.",
    },
    {
      id: 6,
      name: "Bhavendra Singh",
      locations: ["JODHPUR"],
      title: "Data Analytics Trainer",
      experience: "8+ Years",
      specialization: "Data Analytics, Power BI, Statistical Methods",
      certifications: ["Data Analytics", "Power BI", "Statistical Analysis"],
      bio: "Expert trainer serving Rajasthan region with focus on practical data analytics applications.",
    },
    {
      id: 7,
      name: "Gurpreet Singh",
      locations: ["BHATINDA"],
      title: "Excel & BI Specialist",
      experience: "10+ Years",
      specialization: "Advanced Excel, Business Intelligence, Data Modeling",
      certifications: ["Excel Expert", "BI Specialist", "Data Modeling"],
      bio: "Experienced trainer covering Punjab region with expertise in Excel and BI solutions.",
    },
    {
      id: 8,
      name: "Mahesh Gutalkar",
      locations: ["PUNE"],
      title: "Analytics & Reporting Expert",
      experience: "12+ Years",
      specialization: "Data Analytics, MIS Reporting, Dashboard Creation",
      certifications: ["Analytics Expert", "MIS Specialist", "Dashboard Design"],
      bio: "Senior trainer serving Maharashtra region with focus on analytics and reporting solutions.",
    },
    {
      id: 9,
      name: "Brijesh Kumar Chaurasia",
      locations: ["Azamgarh"],
      title: "Data Science & Analytics Trainer",
      experience: "9+ Years",
      specialization: "Data Science, Analytics, Excel Advanced",
      certifications: ["Data Science", "Analytics Certified", "Excel Advanced"],
      bio: "Specialized in data science fundamentals and advanced analytics training.",
    },
    {
      id: 10,
      name: "Sangram Singh",
      locations: ["LUCKNOW"],
      title: "Business Analytics Expert",
      experience: "11+ Years",
      specialization: "Business Analytics, Power BI, Data Visualization",
      certifications: ["Business Analytics", "Power BI Expert", "Data Visualization"],
      bio: "Expert in business analytics and data visualization serving Uttar Pradesh region.",
    },
    {
      id: 11,
      name: "Birendra Goswami",
      locations: ["PATNA"],
      title: "Excel & Analytics Specialist",
      experience: "10+ Years",
      specialization: "Advanced Excel, Data Analytics, Financial Modeling",
      certifications: ["Excel Expert", "Financial Modeling", "Data Analytics"],
      bio: "Specialized in Excel training and financial modeling for Bihar region.",
    },
    {
      id: 12,
      name: "Manish",
      locations: ["GHORAKPUR"],
      title: "Data Analytics Trainer",
      experience: "8+ Years",
      specialization: "Data Analytics, Excel, Statistical Analysis",
      certifications: ["Data Analytics", "Excel Certified", "Statistics"],
      bio: "Focused on practical data analytics training and statistical analysis methods.",
    },
    {
      id: 13,
      name: "Sushil (I-CONS COMPUTERS)",
      locations: ["Rohtak", "Karnal", "Hisar"],
      title: "Technical Training Manager",
      experience: "12+ Years",
      specialization: "Technical Training, Computer Applications, Data Management",
      certifications: ["Technical Training", "Computer Applications", "Data Management"],
      bio: "Managing technical training programs across Haryana region through I-CONS COMPUTERS.",
    },
    {
      id: 14,
      name: "Mayank Goel",
      locations: ["BAREILLY"],
      title: "Excel & BI Trainer",
      experience: "9+ Years",
      specialization: "Excel Advanced, Business Intelligence, Reporting",
      certifications: ["Excel Advanced", "BI Certified", "Reporting Specialist"],
      bio: "Expert in Excel and business intelligence training serving western Uttar Pradesh.",
    },
    {
      id: 15,
      name: "Varinder (Amiras)",
      locations: ["LUDHIANA"],
      title: "Corporate Analytics Trainer",
      experience: "11+ Years",
      specialization: "Corporate Analytics, Excel, Data Processing",
      certifications: ["Corporate Analytics", "Excel Expert", "Data Processing"],
      bio: "Corporate analytics specialist serving Punjab region through Amiras training center.",
    },
    {
      id: 16,
      name: "Manoj",
      locations: ["GUWAHATI"],
      title: "Data Analytics & Excel Expert",
      experience: "10+ Years",
      specialization: "Data Analytics, Advanced Excel, Regional Training",
      certifications: ["Data Analytics", "Excel Advanced", "Training Management"],
      bio: "Leading data analytics training initiatives in Northeast India region.",
    },
    {
      id: 17,
      name: "Rizwan Shaikh",
      locations: ["Gandhinagar"],
      title: "BI & Analytics Specialist",
      experience: "9+ Years",
      specialization: "Business Intelligence, Data Analytics, Power BI",
      certifications: ["BI Specialist", "Power BI", "Data Analytics"],
      bio: "Business intelligence expert serving Gujarat region with comprehensive BI solutions.",
    },
    {
      id: 18,
      name: "Shubham Nathani",
      locations: ["CHITTORGARH"],
      title: "Excel & Data Analytics Trainer",
      experience: "8+ Years",
      specialization: "Excel Training, Data Analytics, Statistical Methods",
      certifications: ["Excel Certified", "Data Analytics", "Statistical Analysis"],
      bio: "Specialized in Excel training and data analytics for Rajasthan region.",
    },
    {
      id: 19,
      name: "Parul Singh",
      locations: ["KOLKATA"],
      title: "Senior Analytics Trainer",
      experience: "12+ Years",
      specialization: "Data Analytics, Business Intelligence, Excel Advanced",
      certifications: ["Senior Analytics", "BI Expert", "Excel Advanced"],
      bio: "Senior trainer covering Eastern India with expertise in comprehensive analytics solutions.",
    },
    {
      id: 20,
      name: "Chandrababu R",
      locations: ["Bangalore"],
      title: "Data Science & Analytics Expert",
      experience: "13+ Years",
      specialization: "Data Science, Advanced Analytics, Machine Learning Basics",
      certifications: ["Data Science", "Advanced Analytics", "ML Fundamentals"],
      bio: "Data science expert serving Karnataka region with advanced analytics and ML training.",
    },
    {
      id: 21,
      name: "Ismail Chalil",
      locations: ["Bangalore"],
      title: "Business Analytics Specialist",
      experience: "10+ Years",
      specialization: "Business Analytics, Power BI, Data Visualization",
      certifications: ["Business Analytics", "Power BI Expert", "Data Visualization"],
      bio: "Business analytics specialist focusing on Power BI and data visualization training.",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">Our Expert Trainers</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Meet our team of 25+ industry experts with 8-15 years of experience, serving 22+ cities across India with
            specialized data analytics and business intelligence training.
          </p>
        </div>
      </section>

      {/* Trainers Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <FadeIn className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Meet Our Expert Trainers</h2>
            <p className="text-xl text-gray-600">25+ industry professionals serving 22+ cities across India</p>
          </FadeIn>
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" staggerDelay={100}>
            {trainers.map((trainer, index) => (
              <FadeIn key={trainer.id} delay={index * 50}>
                <FloatingCard className="bg-white rounded-lg shadow-lg overflow-hidden border-t-4 border-blue-500 h-full">
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="relative">
                        <TrainerAvatar
                          name={trainer.name}
                          size="lg"
                          className="mr-4 transform transition-all duration-300 hover:scale-110"
                        />


                        <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white animate-pulse"></div>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-800">{trainer.name}</h3>
                        <p className="text-blue-600 font-medium">{trainer.title}</p>
                        <p className="text-sm text-gray-500">{trainer.experience}</p>
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                        <MapPin className="w-4 h-4 mr-1 text-blue-500" />
                        Locations Served
                      </h4>
                      <div className="flex flex-wrap gap-1">
                        {trainer.locations.map((location, index) => (
                          <span
                            key={index}
                            className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded transform transition-all duration-300 hover:scale-105 hover:bg-blue-200"
                          >
                            {location}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-800 mb-2">Specialization</h4>
                      <p className="text-gray-600 text-sm">{trainer.specialization}</p>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                        <Award className="w-4 h-4 mr-1 text-blue-500" />
                        Certifications
                      </h4>
                      <div className="flex flex-wrap gap-1">
                        {trainer.certifications.map((cert, index) => (
                          <span
                            key={index}
                            className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded transform transition-all duration-300 hover:scale-105 hover:bg-gray-200"
                          >
                            {cert}
                          </span>
                        ))}
                      </div>
                    </div>

                    <p className="text-gray-600 text-sm mb-4">{trainer.bio}</p>

                    <div className="flex space-x-3">
                      <button className="bg-blue-100 p-2 rounded-full hover:bg-blue-200 transition-all duration-300 transform hover:scale-110 hover:rotate-12">
                        <Linkedin className="w-4 h-4 text-blue-600" />
                      </button>
                      <button className="bg-gray-100 p-2 rounded-full hover:bg-gray-200 transition-all duration-300 transform hover:scale-110 hover:rotate-12">
                        <Mail className="w-4 h-4 text-gray-600" />
                      </button>
                    </div>
                  </div>
                </FloatingCard>
              </FadeIn>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Why Our Trainers */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Why Our Trainers Stand Out</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Industry Experience</h3>
              <p className="text-gray-600">All trainers have 8+ years of hands-on industry experience</p>
            </div>
            <div className="text-center">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎓</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Certified Professionals</h3>
              <p className="text-gray-600">Multiple industry certifications and continuous learning</p>
            </div>
            <div className="text-center">
              <div className="bg-cyan-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">👥</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Local Expertise</h3>
              <p className="text-gray-600">Regional trainers understanding local business needs</p>
            </div>
            <div className="text-center">
              <div className="bg-sky-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏆</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Training Excellence</h3>
              <p className="text-gray-600">Proven track record with 9,375+ successful students</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
