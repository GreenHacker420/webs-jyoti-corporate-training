import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Users, Award, Target, BookOpen } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">About Us</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Leading corporate training provider with 17+ years of experience in transforming careers through
            comprehensive data analytics and business intelligence programs.
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">About Webs Jyoti</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Webs Jyoti is a leading corporate training institute established with a vision to bridge the gap
                  between academic learning and industry requirements. We specialize in providing comprehensive training
                  programs in data analytics, advanced Excel, Power BI, MIS reporting, and business intelligence.
                </p>
                <p>
                  Our institute has been at the forefront of corporate training for over 17 years, helping professionals
                  and organizations enhance their analytical capabilities and make data-driven decisions. We have
                  successfully trained over 9,375 professionals across 22+ cities in India.
                </p>
                <p>
                  At Webs Jyoti, we believe in practical learning combined with theoretical knowledge. Our expert
                  trainers bring real-world experience to the classroom, ensuring that our students are job-ready from
                  day one. We offer both online and offline training modes to cater to diverse learning preferences.
                </p>
                <p>
                  Our training methodology focuses on hands-on experience with real-world projects, case studies, and
                  industry-relevant scenarios. We provide comprehensive study materials, practical assignments, and
                  continuous support to ensure maximum learning outcomes.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-orange-100 to-yellow-100 p-8 rounded-2xl">
              <Image
                src="/hirdesh_img.jpg"
                alt="Hirdesh - Expert Trainer at Webs Jyoti"
                width={500}
                height={400}
                className="rounded-xl object-cover w-full h-auto"
              />
              <div className="mt-4 text-center">
                <h3 className="text-xl font-bold text-gray-800">Hirdesh Bhardwaj</h3>
                <p className="text-gray-600">Lead Trainer & Data Analytics Expert</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed">
                To empower professionals and organizations with cutting-edge data analytics skills, enabling them to
                make data-driven decisions and achieve sustainable growth in today's competitive business environment.
                We strive to provide world-class training that combines theoretical knowledge with practical
                application.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Vision</h2>
              <p className="text-gray-600 leading-relaxed">
                To be the premier destination for corporate training in data analytics, MIS, and business intelligence,
                recognized globally for our innovative teaching methodologies and industry-relevant curriculum. We aim
                to create a skilled workforce that drives digital transformation across industries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Why Choose Webs Jyoti</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Expert Trainers</h3>
              <p className="text-gray-600">Industry professionals with 10+ years of experience</p>
            </div>
            <div className="text-center">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Certified Programs</h3>
              <p className="text-gray-600">Industry-recognized certifications upon completion</p>
            </div>
            <div className="text-center">
              <div className="bg-cyan-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-cyan-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Practical Approach</h3>
              <p className="text-gray-600">Hands-on training with real-world projects</p>
            </div>
            <div className="text-center">
              <div className="bg-sky-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-sky-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Flexible Learning</h3>
              <p className="text-gray-600">Online and offline sessions with flexible timings</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Upskill Your Team with Corporate Training</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Partner with a trusted training provider to boost performance, close skill gaps, and deliver ROI-driven
            learning for your workforce.
          </p>
          <Link href="/contact">
            <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-full text-lg font-semibold shadow-xl hover:shadow-2xl transform transition-all duration-300 hover:scale-105">
              Get Started
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
