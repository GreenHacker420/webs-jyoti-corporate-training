import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
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
import { ArrowRight, CheckCircle, Star, Users, Award, BookOpen } from "lucide-react"
import { Analytics } from "@vercel/analytics/next"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden z-10">
        <div className="absolute inset-0 bg-grid-pattern opacity-5 z-0"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            <FadeIn direction="left" className="space-y-6 sm:space-y-8 relative z-30">
              <div className="space-y-4 sm:space-y-6">
                <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold">
                  <Star className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span>17+ Years of Excellence</span>
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight">
                  Upskill Your Team with
                  <span className="bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent">
                    {" "}
                    Expert-Led
                  </span>
                  <br />
                  Corporate Training
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl">
                  Empower your employees with focused, practical programs in Data Analytics, Excel, Power BI, and
                  Business Intelligence — trusted by 100+ organizations across India.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link href="https://corporate.websjyoti.com/hr_login.php" target="_blank" rel="noopener noreferrer">
                  <Button className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full text-base sm:text-lg font-semibold shadow-xl hover:shadow-2xl transform transition-all duration-300 hover:scale-105">
                    Start Learning Today
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
                  </Button>
                </Link>
                <Link href="/gallery">
                  <Button
                    variant="outline"
                    className="w-full sm:w-auto bg-blue-600 text-white hover:bg-white hover:text-blue-600 border-2 border-blue-600 px-6 py-3 sm:px-8 sm:py-4 rounded-full text-base sm:text-lg font-semibold transition-all duration-300"
                  >
                    <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                    View Gallery
                  </Button>
                </Link>
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-8 pt-4">
                <div className="flex items-center space-x-2">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-r from-blue-400 to-indigo-500 border-2 border-white"
                      ></div>
                    ))}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600">
                    <span className="font-semibold text-gray-900">17,375+</span> professionals trained
                  </div>
                </div>
                <div className="flex items-center space-x-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-current" />
                  ))}
                  <span className="text-xs sm:text-sm text-gray-600 ml-2">4.9/5 rating</span>
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="right" delay={300} className="relative z-30">
              <div className="relative z-40">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl blur-2xl opacity-20 animate-pulse z-0"></div>
                <div className="relative bg-white rounded-3xl p-4 md:p-8 shadow-2xl border border-gray-100 z-10">
                  {/* Responsive Image Container */}
                  <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[400px] overflow-hidden rounded-2xl">
                    <Image
                      src="/images/hero-banner-new.png"
                      alt="Corporate Training - Building Skills, Empowering Success"
                      fill
                      className="object-contain object-center transition-transform duration-500 hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 90vw, (max-width: 1024px) 50vw, 600px"
                      priority
                    />
                  </div>

                  {/* Call Button - Responsive positioning */}
                  <div className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 md:-top-6 md:-right-6 z-20">
                    <a
                      href="tel:+918802000175"
                      className="group bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-2 py-1 sm:px-3 sm:py-2 md:px-4 md:py-2 rounded-lg sm:rounded-xl md:rounded-2xl font-bold shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105 flex items-center space-x-1 sm:space-x-2"
                    >
                      <svg className="w-3 h-3 sm:w-4 sm:h-4 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                      <span className="text-xs sm:text-sm">Call Now</span>
                    </a>
                  </div>

                  {/* Certification Badge - Responsive positioning */}
                  <div className="absolute -bottom-2 -left-2 sm:-bottom-3 sm:-left-3 md:-bottom-6 md:-left-6 bg-white rounded-lg sm:rounded-xl md:rounded-2xl p-2 sm:p-3 md:p-4 shadow-xl border border-gray-100 z-20">
                    <div className="flex items-center space-x-2 sm:space-x-2 md:space-x-3">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12 bg-green-100 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6 text-green-600" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 text-xs sm:text-sm md:text-base">Certified Training</div>
                        <div className="text-xs sm:text-xs md:text-sm text-gray-600">Industry Recognition</div>
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
      <section
        className="py-24 pb-0 parallax-bg relative"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80")',
        }}
      >
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

      {/* Testimonials Section 
       <SafeSection sectionName="Testimonials Section">
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
      <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">Ready to Upskill Your Team?</h2>
            <p className="text-base sm:text-lg md:text-xl text-blue-100 mb-6 sm:mb-8 max-w-2xl mx-auto">
              Take the next step in enhancing your team's performance through data-driven, expert-led corporate
              training.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-6 sm:mb-8">
              <Link href="/contact">
                <Button className="w-full sm:w-auto group bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 sm:px-8 sm:py-4 rounded-full text-base sm:text-lg font-semibold shadow-xl hover:shadow-2xl transform transition-all duration-300 hover:scale-105 flex items-center justify-center overflow-hidden">
                  <span className="relative z-10 flex items-center transition-all duration-300 group-hover:translate-x-1">
                    Get Started
                    {/* Arrow: Larger, slide-in with fade */}
                    <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 ml-2 transform -translate-x-2 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
                  </span>
                </Button>
              </Link>
              <Link href="https://www.websjyoti.com/web-designing.pdf" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  className="w-full sm:w-auto relative overflow-hidden group px-6 py-3 sm:px-8 sm:py-4 border-2 border-blue-600 text-white bg-blue-600 rounded-full text-base sm:text-lg font-semibold transition-all duration-300"
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

            {/* Contact Options */}
            {/* <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="text-blue-100 text-base sm:text-lg font-medium">Or contact us directly:</div>
              <div className="flex gap-3">
                <a
                  href="tel:+918802000175"
                  className="group bg-green-500 hover:bg-green-600 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105 flex items-center space-x-2"
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <span className="text-sm sm:text-base">Call Now</span>
                </a>
                <a
                  href="https://wa.me/918802000175?text=Hi%2C%20I%27m%20interested%20in%20corporate%20training%20programs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-green-400 hover:bg-green-500 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105 flex items-center space-x-2"
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                  <span className="text-sm sm:text-base">WhatsApp</span>
                </a>
              </div>
            </div> */}
          </FadeIn>
          
        </div>
      </section>

      <Footer />
      {/* Sticky WhatsApp Button - Always visible */}
      <div className="fixed bottom-4 right-4 z-50">
        <a
          href="https://wa.me/918802000175?text=Hi%2C%20I%27m%20interested%20in%20corporate%20training%20programs"
          target="_blank"
          rel="noopener noreferrer"
          className="group bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-110 flex items-center justify-center"
          aria-label="Contact us on WhatsApp"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
          </svg>
        </a>
      </div>

      <Analytics />
    </div>
  )
}

