"use client"

import React, { useState, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { CareerApplicationForm } from '@/components/careers/career-application-form'
import { CareerCard } from '@/components/careers/career-card'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  CheckCircle, 
  FileText, 
  Users, 
  Clock, 
  ArrowLeft,
  Shield,
  Award,
  Briefcase
} from 'lucide-react'
import { getPositionById, careerPositions } from '@/data/career-positions'
import { skillsData } from '@/data/skills'
import { generateApplicationId, type CareerApplication } from '@/lib/career-utils'
import { useToast } from '@/hooks/use-toast'
import Link from 'next/link'

function CareerApplyContent() {
  const searchParams = useSearchParams()
  const positionId = searchParams.get('position')
  const [selectedPosition, setSelectedPosition] = useState<any>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  useEffect(() => {
    if (positionId) {
      const position = getPositionById(parseInt(positionId))
      setSelectedPosition(position)
    }
  }, [positionId])

  const handleApplicationSubmit = async (data: any) => {
    setIsSubmitting(true)
    
    try {
      // Simulate API call to submit application
      const applicationData: CareerApplication = {
        id: generateApplicationId(),
        fullName: data.fullName,
        email: data.email,
        phone: data.phone,
        linkedinProfile: data.linkedinProfile,
        currentLocation: data.currentLocation,
        yearsOfExperience: data.yearsOfExperience,
        skills: data.skills.map((skillId: number) => {
          // Convert skill IDs to skill names
          const skill = skillsData.find((s: any) => s.id === skillId)
          return skill?.name || `Skill ${skillId}`
        }),
        positionsAppliedFor: data.positionsAppliedFor.map((posId: number) => {
          const position = careerPositions.find(p => p.id === posId)
          return position?.title || `Position ${posId}`
        }),
        cvUrl: data.cvFile ? URL.createObjectURL(data.cvFile) : undefined,
        cvFileName: data.cvFileName,
        status: 'pending',
        appliedDate: new Date().toISOString()
      }

      // Here you would typically send the data to your API
      console.log('Application submitted:', applicationData)
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 2000))

      toast({
        title: "Application Submitted Successfully!",
        description: `Your application ID is ${applicationData.id}. We'll review your application and get back to you within 5-7 business days.`,
      })

    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "There was an error submitting your application. Please try again.",
        variant: "destructive"
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/careers" className="hover:text-blue-600 transition-colors">
              Careers
            </Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">Apply</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Application Form */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <Button
                variant="ghost"
                asChild
                className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 -ml-2"
              >
                <Link href="/careers">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Careers
                </Link>
              </Button>
            </div>

            <CareerApplicationForm 
              onSubmit={handleApplicationSubmit}
              className="mb-8"
            />
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Selected Position */}
            {selectedPosition && (
              <Card className="bg-white border border-gray-200 shadow-sm">
                <CardHeader>
                  <CardTitle className="text-lg">Selected Position</CardTitle>
                  <CardDescription>
                    You're applying for this specific role
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <CareerCard 
                    position={selectedPosition}
                    showFullDescription={false}
                    className="border-0 shadow-none p-0"
                  />
                </CardContent>
              </Card>
            )}

            {/* Application Process */}
            <Card className="bg-white border border-gray-200 shadow-sm">
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <Clock className="w-5 h-5 mr-2 text-blue-600" />
                  Application Process
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-semibold text-blue-600">1</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Submit Application</h4>
                    <p className="text-sm text-gray-600">Complete the form with your details and upload your CV</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-semibold text-blue-600">2</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Initial Review</h4>
                    <p className="text-sm text-gray-600">Our HR team reviews your application (2-3 days)</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-semibold text-blue-600">3</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Interview Process</h4>
                    <p className="text-sm text-gray-600">Technical and HR interviews with our team</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-3 h-3 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Final Decision</h4>
                    <p className="text-sm text-gray-600">We'll notify you of our decision within 7 days</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Benefits */}
            <Card className="bg-white border border-gray-200 shadow-sm">
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <Award className="w-5 h-5 mr-2 text-green-600" />
                  Why Join Us?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span className="text-sm text-gray-700">Competitive salary packages</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span className="text-sm text-gray-700">Professional development opportunities</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span className="text-sm text-gray-700">Flexible working arrangements</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span className="text-sm text-gray-700">Health and wellness benefits</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span className="text-sm text-gray-700">Performance-based bonuses</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span className="text-sm text-gray-700">Continuous learning support</span>
                </div>
              </CardContent>
            </Card>

            {/* Privacy Notice */}
            <Card className="bg-white border border-gray-200 shadow-sm">
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <Shield className="w-5 h-5 mr-2 text-blue-600" />
                  Privacy & Security
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm text-gray-600">
                  <div className="flex items-start space-x-2">
                    <Shield className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Your personal information is encrypted and securely stored</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <FileText className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>CV files are only accessible to authorized HR personnel</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Users className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span>Data is used solely for recruitment purposes</span>
                  </div>
                </div>
                
                <div className="mt-4 pt-4 border-t">
                  <p className="text-xs text-gray-500">
                    By submitting this application, you agree to our{' '}
                    <Link href="/privacy" className="text-blue-600 hover:underline">
                      Privacy Policy
                    </Link>{' '}
                    and{' '}
                    <Link href="/terms" className="text-blue-600 hover:underline">
                      Terms of Service
                    </Link>
                    .
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Contact Support */}
            <Card className="bg-white border border-gray-200 shadow-sm">
              <CardHeader>
                <CardTitle className="text-lg">Need Help?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  Having trouble with your application? Our HR team is here to help.
                </p>
                <div className="space-y-2 text-sm">
                  <div>
                    <span className="font-medium text-gray-900">Email:</span>
                    <span className="text-gray-600 ml-2">careers@websjyoti.com</span>
                  </div>
                  <div>
                    <span className="font-medium text-gray-900">Phone:</span>
                    <span className="text-gray-600 ml-2">+91 8802000175</span>
                  </div>
                  <div>
                    <span className="font-medium text-gray-900">Hours:</span>
                    <span className="text-gray-600 ml-2">Mon-Fri, 9 AM - 6 PM</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default function CareerApplyPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading application form...</p>
        </div>
      </div>
    }>
      <CareerApplyContent />
    </Suspense>
  )
}
