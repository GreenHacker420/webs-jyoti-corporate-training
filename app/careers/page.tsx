"use client"

import React, { useState, useMemo } from 'react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { CareerSearchFilters, SearchFilters } from '@/components/careers/career-search-filters'
import { CareerCard } from '@/components/careers/career-card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  Briefcase, 
  Users, 
  MapPin, 
  TrendingUp, 
  Award,
  ArrowRight,
  Building,
  Clock
} from 'lucide-react'
import { careerPositions, getActivePositions } from '@/data/career-positions'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function CareersPage() {
  const [filters, setFilters] = useState<SearchFilters>({})
  const router = useRouter()

  // Filter positions based on search criteria
  const filteredPositions = useMemo(() => {
    let positions = getActivePositions()

    // Keyword search
    if (filters.keyword) {
      const keyword = filters.keyword.toLowerCase()
      positions = positions.filter(position =>
        position.title.toLowerCase().includes(keyword) ||
        position.description.toLowerCase().includes(keyword) ||
        position.department.toLowerCase().includes(keyword) ||
        position.skills.some(skill => skill.toLowerCase().includes(keyword)) ||
        position.requirements.some(req => req.toLowerCase().includes(keyword))
      )
    }

    // Location filter
    if (filters.location) {
      positions = positions.filter(position =>
        position.location.some(loc => 
          loc.toLowerCase().includes(filters.location!.toLowerCase())
        )
      )
    }

    // Skills filter
    if (filters.skills && filters.skills.length > 0) {
      positions = positions.filter(position =>
        filters.skills!.some(skill =>
          position.skills.some(posSkill =>
            posSkill.toLowerCase().includes(skill.toLowerCase())
          )
        )
      )
    }

    // Experience filter
    if (filters.experience) {
      const expFilter = filters.experience.toLowerCase()
      positions = positions.filter(position => {
        const posExp = position.experience.toLowerCase()
        
        if (expFilter === 'fresher') {
          return posExp.includes('fresher') || posExp.includes('0')
        } else if (expFilter === '0-2') {
          return posExp.includes('0') || posExp.includes('1') || posExp.includes('2')
        } else if (expFilter === '2-5') {
          return posExp.includes('2') || posExp.includes('3') || posExp.includes('4') || posExp.includes('5')
        } else if (expFilter === '5-10') {
          return posExp.includes('5') || posExp.includes('6') || posExp.includes('7') || posExp.includes('8') || posExp.includes('9') || posExp.includes('10')
        } else if (expFilter === '10+') {
          return posExp.includes('10') || posExp.includes('15') || posExp.includes('20')
        }
        
        return true
      })
    }

    // Department filter
    if (filters.department) {
      positions = positions.filter(position =>
        position.department.toLowerCase().includes(filters.department!.toLowerCase())
      )
    }

    // Position type filter
    if (filters.positionType) {
      positions = positions.filter(position =>
        position.type === filters.positionType
      )
    }

    return positions
  }, [filters])

  const handleApplyClick = (positionId: number) => {
    router.push(`/careers/apply?position=${positionId}`)
  }

  const stats = {
    totalPositions: careerPositions.length,
    activePositions: getActivePositions().length,
    departments: [...new Set(careerPositions.map(p => p.department))].length,
    locations: [...new Set(careerPositions.flatMap(p => p.location))].length
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Join Our Team of Expert Trainers
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Shape the future of data analytics education. Build careers, transform businesses, 
              and make a lasting impact in the world of corporate training.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-200">{stats.activePositions}</div>
                <div className="text-sm text-blue-300">Open Positions</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-200">{stats.departments}</div>
                <div className="text-sm text-blue-300">Departments</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-200">{stats.locations}</div>
                <div className="text-sm text-blue-300">Locations</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-200">17+</div>
                <div className="text-sm text-blue-300">Years Experience</div>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-white text-blue-900 hover:bg-blue-50 font-semibold px-8 py-3"
              >
                <Link href="/careers/apply">
                  Apply Now
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-blue-900 font-semibold px-8 py-3"
                onClick={() => document.getElementById('positions')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Positions
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Webs Jyoti?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Join India's leading corporate training institute and be part of a team that's transforming careers across the nation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Career Growth</h3>
              <p className="text-gray-600 text-sm">
                Accelerate your career with continuous learning opportunities and leadership development programs.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Expert Team</h3>
              <p className="text-gray-600 text-sm">
                Work alongside industry experts and learn from the best minds in data analytics and training.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Recognition</h3>
              <p className="text-gray-600 text-sm">
                Get recognized for your contributions with performance-based rewards and public acknowledgment.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Work-Life Balance</h3>
              <p className="text-gray-600 text-sm">
                Enjoy flexible working arrangements and a supportive environment that values your well-being.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Positions Section */}
      <section id="positions" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Current Openings
            </h2>
            <p className="text-lg text-gray-600">
              Discover exciting opportunities to grow your career with us
            </p>
          </div>

          {/* Search and Filters */}
          <div className="mb-8">
            <CareerSearchFilters onFiltersChange={setFilters} />
          </div>

          {/* Results Summary */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <h3 className="text-lg font-semibold text-gray-900">
                {filteredPositions.length} Position{filteredPositions.length !== 1 ? 's' : ''} Found
              </h3>
              
              {Object.keys(filters).length > 0 && (
                <Badge variant="secondary" className="text-sm">
                  {Object.values(filters).filter(v => v).length + (filters.skills?.length || 0)} filter{Object.values(filters).filter(v => v).length + (filters.skills?.length || 0) !== 1 ? 's' : ''} applied
                </Badge>
              )}
            </div>

            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Clock className="w-4 h-4" />
              <span>Updated daily</span>
            </div>
          </div>

          {/* Position Cards */}
          {filteredPositions.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPositions.map((position) => (
                <CareerCard
                  key={position.id}
                  position={position}
                  onApply={handleApplyClick}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <Briefcase className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                No positions found
              </h3>
              <p className="text-gray-600 mb-6">
                Try adjusting your search criteria or check back later for new openings.
              </p>
              <Button
                variant="outline"
                onClick={() => setFilters({})}
              >
                Clear All Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Don't See the Perfect Role?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            We're always looking for talented individuals to join our team. 
            Send us your resume and we'll keep you in mind for future opportunities.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-white text-blue-900 hover:bg-blue-50 font-semibold px-8 py-3"
            >
              <Link href="/careers/apply">
                Submit Your Resume
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-blue-900 font-semibold px-8 py-3"
            >
              <Link href="/contact">
                Contact HR Team
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
