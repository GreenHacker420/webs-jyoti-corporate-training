import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { EnhancedButton } from "@/components/ui/enhanced-button"
import { EnhancedCard, GlowCard } from "@/components/ui/enhanced-card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { TestimonialTicker } from "@/components/testimonial-ticker"
import { TestimonialsSection } from "@/components/testimonials-section"
import { FadeIn } from "@/components/animations/fade-in"
import { Counter } from "@/components/animations/counter"
import { FloatingCard } from "@/components/animations/floating-card"
import { StaggerContainer } from "@/components/animations/stagger-container"
import { SafeSection } from "@/components/error-boundary"
import { TrustedBrands } from "@/components/trusted-brands"
import { Play, ArrowRight, CheckCircle, Star, Users, Award, Clock, BookOpen } from "lucide-react"
import { Analytics } from "@vercel/analytics/next"


export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-24 overflow-hidden z-10">
        <div className="absolute inset-0 bg-grid-pattern opacity-5 z-0"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="left" className="space-y-8 relative z-30">
              <div className="space-y-6">
                <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold">
                  <Star className="w-4 h-4" />
                  <span>17+ Years of Excellence</span>
                </div>
                <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
                  Upskill Your Team with
                  <span className="bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent">
                    {" "}
                    Expert-Led
                  </span>
                  <br />
                  Corporate Training
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                  Empower your employees with focused, practical programs in Data Analytics, Excel, Power BI, and
                  Business Intelligence — trusted by 100+ organizations across India.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="https://corporate.websjyoti.com/hr_login.php" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-xl hover:shadow-2xl transform transition-all duration-300 hover:scale-105">
                    Start Learning Today
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Link href="https://www.youtube.com/watch?v=2Nr6jK77B6g" target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="outline"
                    className="bg-blue-600 text-white hover:bg-white hover:text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300"
                  >
                    <Play className="w-5 h-5 mr-2" />
                    Watch Demo
                  </Button>
                </Link>
              </div>

              <div className="flex items-center space-x-8 pt-4">
                <div className="flex items-center space-x-2">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-400 to-indigo-500 border-2 border-white"
                      ></div>
                    ))}
                  </div>
                  <div className="text-sm text-gray-600">
                    <span className="font-semibold text-gray-900">17,375+</span> professionals trained
                  </div>
                </div>
                <div className="flex items-center space-x-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                  <span className="text-sm text-gray-600 ml-2">4.9/5 rating</span>
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="right" delay={300} className="relative z-30">
              <div className="relative z-40">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl blur-2xl opacity-20 animate-pulse z-0"></div>
                <div className="relative bg-white rounded-3xl p-8 shadow-2xl border border-gray-100 z-10">
                  <Image
                    src="/images/hero-banner-new.png"
                    alt="Corporate Training - Building Skills, Empowering Success"
                    width={600}
                    height={500}
                    className="rounded-2xl relative z-10"
                    style={{
                      objectFit: "cover",
                      objectPosition: "30% center",
                    }}
                  />
                  <div className="absolute -top-6 -right-6 bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-2xl font-bold shadow-lg animate-bounce z-20">
                    🔥 Live Sessions!
                  </div>
                  <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl border border-gray-100 z-20">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">Certified Training</div>
                        <div className="text-sm text-gray-600">Industry Recognition</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 relative z-10">
        <div className="max-w-7xl mx-auto px-4 relative z-20">
          <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-8" staggerDelay={200}>
            <FadeIn className="text-center text-white relative z-30">
              <div className="space-y-2">
                <div className="text-4xl lg:text-6xl font-bold">
                  <Counter end={17375} suffix="+" />
                </div>
                <div className="text-blue-100 font-medium text-lg">Professionals Trained</div>
                <div className="text-blue-200 text-sm">Across India</div>
              </div>
            </FadeIn>
            <FadeIn className="text-center text-white">
              <div className="space-y-2">
                <div className="text-4xl lg:text-6xl font-bold">
                  <Counter end={50} suffix="+" />
                </div>
                <div className="text-blue-100 font-medium text-lg">Certified Corporate Trainers</div>
                <div className="text-blue-200 text-sm">Industry Professionals</div>
              </div>
            </FadeIn>
            <FadeIn className="text-center text-white">
              <div className="space-y-2">
                <div className="text-4xl lg:text-6xl font-bold">
                  <Counter end={55} suffix="+" />
                </div>
                <div className="text-blue-100 font-medium text-lg">Cities Covered</div>
                <div className="text-blue-200 text-sm">Pan India Presence</div>
              </div>
            </FadeIn>
            <FadeIn className="text-center text-white">
              <div className="space-y-2">
                <div className="text-4xl lg:text-6xl font-bold">
                  <Counter end={17} suffix="+" />
                </div>
                <div className="text-blue-100 font-medium text-lg">Years of Corporate Training Success</div>
                <div className="text-blue-200 text-sm">Proven Track Record</div>
              </div>
            </FadeIn>
          </StaggerContainer>
        </div>
      </section>

      {/* Training Programs */}
      <section className="py-24 pb-0 parallax-bg relative" style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80")'
      }}>
        {/* Parallax Overlay */}
        <div className="parallax-overlay"></div>

        <div className="max-w-7xl mx-auto px-4 parallax-content">
          <FadeIn className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Our Training Programs</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              17+ years of delivering impactful, expert-led analytics and BI training tailored for corporate
              professionals and enterprise teams. For corporate clients, we offer post-training performance dashboards
              and skill-gap analytics, enabling HR departments to evaluate ROI and training effectiveness within 30
              days.
            </p>
          </FadeIn>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <FadeIn direction="left">
              <div className="space-y-8">
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Webs Jyoti</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Our focused training programs blend practical tools with real-world scenarios — enabling your teams
                    to apply skills immediately and deliver measurable results.
                  </p>
                </div>

                <div className="space-y-6">
                  {[
                    {
                      icon: Users,
                      title: "Dedicated Corporate LMS for Training",
                      desc: "Comprehensive learning management system for seamless corporate training delivery",
                    },
                    {
                      icon: Award,
                      title: "Pan India Presence",
                      desc: "Training services available across 55+ cities with local expert trainers",
                    },
                    {
                      icon: BookOpen,
                      title: "15+ Years Service",
                      desc: "Proven track record of excellence in corporate training and skill development",
                    },
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-4 group">
                      <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                        <item.icon className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors duration-300" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                        <p className="text-gray-600">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="right" delay={300}>
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    icon: "📊",
                    title: "Data Analytics",
                    desc: "Master statistical analysis and data visualization techniques",
                    gradient: "from-blue-500 to-blue-600",
                  },
                  {
                    icon: "📈",
                    title: "Advanced Excel",
                    desc: "Pivot tables, macros, VBA, and automation",
                    gradient: "from-green-500 to-green-600",
                  },
                  {
                    icon: "📋",
                    title: "Power BI",
                    desc: "Interactive dashboards and business intelligence",
                    gradient: "from-purple-500 to-purple-600",
                  },
                  {
                    icon: "💼",
                    title: "Sales Tools",
                    desc: "CRM systems, sales analytics, and pipeline management",
                    gradient: "from-orange-500 to-orange-600",
                  },
                  {
                    icon: "🤝",
                    title: "Soft Skills",
                    desc: "Leadership, communication, and team collaboration",
                    gradient: "from-pink-500 to-pink-600",
                  },
                  {
                    icon: "📱",
                    title: "Digital Marketing",
                    desc: "SEO, social media, and digital campaign management",
                    gradient: "from-indigo-500 to-indigo-600",
                  },
                ].map((card, index) => (
                  <FloatingCard
                    key={index}
                    className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
                    delay={index * 100}
                  >
                    <div
                      className={`w-12 h-12 bg-gradient-to-r ${card.gradient} rounded-xl flex items-center justify-center mb-4`}
                    >
                      <span className="text-white font-bold">{card.icon}</span>
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2">{card.title}</h4>
                    <p className="text-gray-600 text-sm">{card.desc}</p>
                  </FloatingCard>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>


      {/* Testimonials Section */}
      {/* <SafeSection sectionName="Testimonials Section">
        <TestimonialsSection />
      </SafeSection> */}

      {/* Trusted Brands Section */}
      <SafeSection sectionName="Trusted Brands Section">
        <TrustedBrands />
      </SafeSection>

      {/* Testimonials Ticker */}
      <SafeSection sectionName="Testimonials Ticker Section">
        <TestimonialTicker />
      </SafeSection>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <FadeIn>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Ready to Upskill Your Team?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Take the next step in enhancing your team's performance through data-driven, expert-led corporate
              training.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button className="group bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-full text-lg font-semibold shadow-xl hover:shadow-2xl transform transition-all duration-300 hover:scale-105 flex items-center overflow-hidden">
                  <span
                    className="relative z-10 flex items-center transition-all duration-300 group-hover:translate-x-1"
                  >
                    Get Started

                    {/* Arrow: Larger, slide-in with fade */}
                    <ArrowRight
                      className="w-6 h-6 ml-2 transform -translate-x-2 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                    />
                  </span>
                </Button>
              </Link>
              <Link href="https://www.websjyoti.com/web-designing.pdf" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  className="relative overflow-hidden group px-8 py-4 border-2 border-blue-600 text-white bg-blue-600 rounded-full text-lg font-semibold transition-all duration-300"
                >
                  {/* Text Layer */}
                  <span className="relative z-10 transition-colors duration-300 group-hover:text-blue-600">
                    Download Brochure
                  </span>

                  {/* Vertical Wipe Background */}
                  <span className="absolute inset-0 bg-white transition-transform duration-300 transform scale-y-0 origin-top group-hover:scale-y-100 z-0"></span>
                </Button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </div>
  )
}
