"use client"

import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage, FormDescription } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Checkbox } from '@/components/ui/checkbox'
import { FileUpload } from './file-upload'
import { Badge } from '@/components/ui/badge'
import { X, User, Mail, Phone, MapPin, Briefcase, Award, FileText, Linkedin } from 'lucide-react'
import { useToast } from '@/hooks/use-toast'
import { skillsData } from '@/data/skills'
import { careerPositions } from '@/data/career-positions'
import { getAllCareerLocations } from '@/data/career-positions'
import { isValidEmail, isValidPhone, isValidLinkedInURL, generateApplicationId } from '@/lib/career-utils'

// Form validation schema
const applicationSchema = z.object({
  fullName: z.string().min(2, 'Full name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  linkedinProfile: z.string().url('Please enter a valid LinkedIn URL').optional().or(z.literal('')),
  currentLocation: z.string().min(1, 'Please select your current location'),
  yearsOfExperience: z.number().min(0, 'Experience cannot be negative').max(50, 'Please enter a valid experience'),
  skills: z.array(z.number()).min(1, 'Please select at least one skill'),
  positionsAppliedFor: z.array(z.number()).min(1, 'Please select at least one position'),
  cvFile: z.any().optional().nullable()
})

type ApplicationFormData = z.infer<typeof applicationSchema>

interface CareerApplicationFormProps {
  onSubmit?: (data: ApplicationFormData & {
    cvFile?: File | null;
    cvFileName?: string;
    applicationId?: string;
    appliedDate?: string;
    status?: string;
  }) => void
  className?: string
}

export function CareerApplicationForm({ onSubmit, className }: CareerApplicationFormProps) {
  const [selectedSkills, setSelectedSkills] = useState<number[]>([])
  const [selectedPositions, setSelectedPositions] = useState<number[]>([])
  const [cvFile, setCvFile] = useState<File | null>(null)
  const [cvFileName, setCvFileName] = useState<string>('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const form = useForm<ApplicationFormData>({
    resolver: zodResolver(applicationSchema),
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      linkedinProfile: '',
      currentLocation: '',
      yearsOfExperience: 0,
      skills: [],
      positionsAppliedFor: []
    }
  })

  const locations = getAllCareerLocations()
  const activePositions = careerPositions.filter(pos => pos.isActive)

  const handleSkillToggle = (skillId: number) => {
    const newSkills = selectedSkills.includes(skillId)
      ? selectedSkills.filter(id => id !== skillId)
      : [...selectedSkills, skillId]
    
    setSelectedSkills(newSkills)
    form.setValue('skills', newSkills)
  }

  const handlePositionToggle = (positionId: number) => {
    const newPositions = selectedPositions.includes(positionId)
      ? selectedPositions.filter(id => id !== positionId)
      : [...selectedPositions, positionId]
    
    setSelectedPositions(newPositions)
    form.setValue('positionsAppliedFor', newPositions)
  }

  const handleFileUpload = (file: File, fileName: string) => {
    setCvFile(file)
    setCvFileName(fileName)
    form.setValue('cvFile', file)
  }

  const handleFileRemove = () => {
    setCvFile(null)
    setCvFileName('')
    form.setValue('cvFile', undefined)
  }

  const handleFormSubmit = async (data: ApplicationFormData) => {
    setIsSubmitting(true)
    
    try {
      // Validate additional fields
      if (!isValidEmail(data.email)) {
        throw new Error('Please enter a valid email address')
      }
      
      if (!isValidPhone(data.phone)) {
        throw new Error('Please enter a valid phone number')
      }
      
      if (data.linkedinProfile && !isValidLinkedInURL(data.linkedinProfile)) {
        throw new Error('Please enter a valid LinkedIn profile URL')
      }

      // Prepare submission data
      const submissionData = {
        ...data,
        cvFile: cvFile || undefined,
        cvFileName,
        applicationId: generateApplicationId(),
        appliedDate: new Date().toISOString(),
        status: 'pending' as const
      }

      // Call parent submit handler
      if (onSubmit) {
        await onSubmit(submissionData)
      }

      toast({
        title: "Application Submitted Successfully!",
        description: "Thank you for your interest. We'll review your application and get back to you soon.",
      })

      // Reset form
      form.reset()
      setSelectedSkills([])
      setSelectedPositions([])
      setCvFile(null)
      setCvFileName('')

    } catch (error) {
      toast({
        title: "Submission Failed",
        description: error instanceof Error ? error.message : "Please try again later.",
        variant: "destructive"
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const getSkillById = (id: number) => skillsData.find(skill => skill.id === id)
  const getPositionById = (id: number) => activePositions.find(pos => pos.id === id)

  return (
    <Card className={'bg-white border border-gray-200 shadow-sm'}>
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-bold text-gray-900">
          Career Application Form
        </CardTitle>
        <CardDescription className="text-gray-600">
          Join our team of expert trainers and consultants. Fill out the form below to apply for available positions.
        </CardDescription>
      </CardHeader>

      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleFormSubmit)} className="space-y-6">
            {/* Personal Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                <User className="w-5 h-5 mr-2 text-blue-600" />
                Personal Information
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name *</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your full name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Address *</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="your.email@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone Number *</FormLabel>
                      <FormControl>
                        <Input type="tel" placeholder="+91 9876543210" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="linkedinProfile"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>LinkedIn Profile (Optional)</FormLabel>
                      <FormControl>
                        <Input placeholder="https://linkedin.com/in/yourprofile" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            {/* Location and Experience */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                <MapPin className="w-5 h-5 mr-2 text-blue-600" />
                Location & Experience
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="currentLocation"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Current Location *</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select your location" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {locations.map((location) => (
                            <SelectItem key={location} value={location}>
                              {location}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="yearsOfExperience"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Years of Experience *</FormLabel>
                      <FormControl>
                        <Input 
                          type="number" 
                          min="0" 
                          max="50" 
                          placeholder="0" 
                          {...field}
                          onChange={(e) => field.onChange(parseInt(e.target.value) || 0)}
                        />
                      </FormControl>
                      <FormDescription>
                        Enter 0 if you're a fresher
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            {/* Skills Selection */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                <Award className="w-5 h-5 mr-2 text-blue-600" />
                Skills & Expertise *
              </h3>
              
              <div className="space-y-3">
                {['Analytics', 'Excel', 'Business Intelligence', 'Programming', 'Soft Skills'].map((category) => {
                  const categorySkills = skillsData.filter(skill => skill.category === category)
                  if (categorySkills.length === 0) return null

                  return (
                    <div key={category}>
                      <h4 className="font-medium text-gray-700 mb-2">{category}</h4>
                      <div className="flex flex-wrap gap-2">
                        {categorySkills.map((skill) => (
                          <Badge
                            key={skill.id}
                            variant={selectedSkills.includes(skill.id) ? "default" : "outline"}
                            className="cursor-pointer hover:bg-blue-100 transition-colors"
                            onClick={() => handleSkillToggle(skill.id)}
                          >
                            {skill.name}
                            {selectedSkills.includes(skill.id) && (
                              <X className="w-3 h-3 ml-1" />
                            )}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )
                })}
              </div>
              
              {form.formState.errors.skills && (
                <p className="text-sm text-red-600">{form.formState.errors.skills.message}</p>
              )}
            </div>

            {/* Position Selection */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                <Briefcase className="w-5 h-5 mr-2 text-blue-600" />
                Positions Applied For *
              </h3>
              
              <div className="grid grid-cols-1 gap-3">
                {activePositions.map((position) => (
                  <div
                    key={position.id}
                    className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                      selectedPositions.includes(position.id)
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 hover:border-blue-300'
                    }`}
                    onClick={() => handlePositionToggle(position.id)}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-900">{position.title}</h4>
                        <p className="text-sm text-gray-600">{position.department}</p>
                        <p className="text-sm text-gray-500">
                          {position.location.join(', ')} • {position.experience}
                        </p>
                      </div>
                      <Checkbox
                        checked={selectedPositions.includes(position.id)}
                        onChange={() => handlePositionToggle(position.id)}
                      />
                    </div>
                  </div>
                ))}
              </div>
              
              {form.formState.errors.positionsAppliedFor && (
                <p className="text-sm text-red-600">{form.formState.errors.positionsAppliedFor.message}</p>
              )}
            </div>

            {/* CV Upload */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                <FileText className="w-5 h-5 mr-2 text-blue-600" />
                CV/Resume Upload
              </h3>
              
              <FileUpload
                onFileUpload={handleFileUpload}
                onFileRemove={handleFileRemove}
                currentFile={cvFile}
                currentFileName={cvFileName}
                applicantName={form.watch('fullName') || 'applicant'}
                disabled={isSubmitting}
              />
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                {isSubmitting ? 'Submitting Application...' : 'Submit Application'}
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}
