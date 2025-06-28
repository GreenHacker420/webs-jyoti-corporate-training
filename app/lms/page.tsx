import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ExternalLink, BookOpen, Users, Award, ArrowRight } from "lucide-react"

export default function LMSPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">Learning Management System</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            Access your dedicated corporate training portal for seamless learning, progress tracking, and HR insights.
          </p>
        </div>
      </section>

      {/* LMS Access Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="bg-white rounded-2xl shadow-2xl p-12 border border-gray-100">
            <div className="w-24 h-24 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-full flex items-center justify-center mx-auto mb-8">
              <BookOpen className="w-12 h-12 text-white" />
            </div>

            <h2 className="text-4xl font-bold text-gray-800 mb-6">Access Your Corporate Training Portal</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Login to your dedicated Learning Management System to access training content, track progress, and manage your learning journey.
            </p>

            <div className="space-y-4">
              <Link href="https://corporate.websjyoti.com/hr_login.php" target="_blank" rel="noopener noreferrer">
                <Button className="bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white px-12 py-6 rounded-full text-xl font-semibold shadow-xl hover:shadow-2xl transform transition-all duration-300 hover:scale-105">
                  Login to Corporate Portal
                  <ExternalLink className="w-6 h-6 ml-3" />
                </Button>
              </Link>
              
              <p className="text-sm text-gray-500 mt-4">
                You will be redirected to the secure corporate training portal
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* LMS Features */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">What's Available in Your Portal</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <BookOpen className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Training Content Archive</h3>
              <p className="text-gray-600">Downloadable handouts, decks, and recorded sessions</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Practical Exercises</h3>
              <p className="text-gray-600">Real-world case simulations relevant to business environments</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="bg-cyan-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-cyan-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Progress & Performance Tracking</h3>
              <p className="text-gray-600">Completion status and certification records with HR-accessible reports</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Access Your Training?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Click the button above to login to your corporate training portal and continue your learning journey.
          </p>
          <Link href="https://corporate.websjyoti.com/hr_login.php" target="_blank" rel="noopener noreferrer">
            <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-full text-lg font-semibold shadow-xl hover:shadow-2xl transform transition-all duration-300 hover:scale-105">
              Go to Portal
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
