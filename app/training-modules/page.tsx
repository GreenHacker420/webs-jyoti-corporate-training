"use client"

import { useState } from "react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { TrainingModuleModal } from "@/components/training-module-modal"
import { Users, Award, BookOpen } from "lucide-react"

export default function TrainingModulesPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const modules = [
    {
      id: 1,
      title: "Data Analytics Fundamentals",
      level: "Beginner",
      description:
        "Strengthen foundational knowledge of data analytics concepts with hands-on practice in statistical analysis and reporting.",
      topics: ["Statistics Basics", "Data Collection", "Data Cleaning", "Basic Analysis", "Reporting"],
      certification: "Data Analytics Foundation Certificate",
    },
    {
      id: 2,
      title: "Advanced Excel Mastery",
      level: "Intermediate",
      description:
        "Enhance Excel proficiency with advanced features, automation techniques, and dashboard creation for business applications.",
      topics: ["Pivot Tables", "Advanced Functions", "Macros & VBA", "Data Validation", "Dashboard Creation"],
      certification: "Excel Expert Certificate",
    },
    {
      id: 3,
      title: "Power BI Professional",
      level: "Intermediate",
      description:
        "Strengthen working knowledge of Power BI with dashboard-building, data modeling, and hands-on DAX practice.",
      topics: ["DAX", "Visualizations", "Power Query", "Reports"],
      certification: "Power BI Professional Certificate",
    },
    {
      id: 4,
      title: "MIS Reporting Excellence",
      level: "Intermediate",
      description:
        "Develop expertise in creating effective MIS reports and automated systems for business intelligence.",
      topics: ["Report Design", "KPI Development", "Automation", "Data Integration", "Executive Dashboards"],
      certification: "MIS Specialist Certificate",
    },
    {
      id: 5,
      title: "Business Intelligence Suite",
      level: "Advanced",
      description:
        "Enterprise-focused BI training with hands-on practice across tools like Power BI, Tableau, SQL, and ETL — designed to build end-to-end reporting and decision systems.",
      topics: ["SQL Basics", "Tableau", "Power BI", "Data Warehousing", "ETL Processes"],
      certification: "Business Intelligence Expert Certificate",
    },
    {
      id: 6,
      title: "Corporate Analytics Program",
      level: "Advanced",
      description:
        "Advanced program designed for corporate analytics professionals focusing on strategic decision-making and predictive analytics.",
      topics: [
        "Advanced Statistics",
        "Predictive Analytics",
        "Machine Learning Basics",
        "Big Data Concepts",
        "Strategy",
      ],
      certification: "Corporate Analytics Professional Certificate",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">Training Modules</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Focused corporate training programs designed to sharpen your team's data analytics and business intelligence
            capabilities.
          </p>
        </div>
      </section>

      {/* Modules Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8">
            {modules.map((module) => (
              <div key={module.id} className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-gray-800">{module.title}</h3>
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        module.level === "Beginner"
                          ? "bg-green-100 text-green-800"
                          : module.level === "Intermediate"
                            ? "bg-blue-100 text-blue-800"
                            : "bg-indigo-100 text-indigo-800"
                      }`}
                    >
                      {module.level}
                    </span>
                  </div>

                  <p className="text-gray-600 mb-4">{module.description}</p>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                      <BookOpen className="w-4 h-4 mr-1" />
                      Focus Areas
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {module.topics.map((topic, index) => (
                        <span key={index} className="bg-gray-100 text-gray-700 text-sm px-2 py-1 rounded">
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                      <Award className="w-4 h-4 mr-1" />
                      Certification
                    </h4>
                    <p className="text-sm text-gray-600">{module.certification}</p>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <div className="space-x-2">
                      <Button variant="outline" size="sm" onClick={() => setIsModalOpen(true)}>
                        View Details
                      </Button>
                      <Link href="/contact">
                        <Button className="bg-blue-500 hover:bg-blue-600" size="sm">
                          Hire a Trainer
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">What's Included in Every Module</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Course Materials</h3>
              <p className="text-gray-600">Ready-to-use decks, templates, and practical handouts for business teams</p>
            </div>
            <div className="text-center">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Hands-on Practice</h3>
              <p className="text-gray-600">Real-world simulations and role-specific business scenarios</p>
            </div>
            <div className="text-center">
              <div className="bg-cyan-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-cyan-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Certification</h3>
              <p className="text-gray-600">Industry-recognized certificates aligned with corporate L&D standards</p>
            </div>
            <div className="text-center">
              <div className="bg-sky-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Performance Tracking</h3>
              <p className="text-gray-600">Post-training dashboards, HR reports, and skill-matrix for ROI analysis</p>
            </div>
          </div>
        </div>
      </section>

      <TrainingModuleModal isOpen={isModalOpen} onCloseAction={() => setIsModalOpen(false)} />

      <Footer />
    </div>
  )
}
