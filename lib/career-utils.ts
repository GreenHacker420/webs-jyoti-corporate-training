import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Career-specific utility functions

export interface CareerApplication {
  id: string
  fullName: string
  email: string
  phone: string
  linkedinProfile?: string
  currentLocation: string
  yearsOfExperience: number
  skills: string[]
  positionsAppliedFor: string[]
  cvUrl?: string
  cvFileName?: string
  status: "pending" | "reviewing" | "shortlisted" | "rejected" | "hired"
  appliedDate: string
  notes?: string
}

// File validation utilities
export const ALLOWED_CV_TYPES = [
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
]

export const MAX_CV_SIZE = 5 * 1024 * 1024 // 5MB

export function validateCVFile(file: File): { isValid: boolean; error?: string } {
  if (!ALLOWED_CV_TYPES.includes(file.type)) {
    return {
      isValid: false,
      error: 'Please upload a PDF, DOC, or DOCX file'
    }
  }

  if (file.size > MAX_CV_SIZE) {
    return {
      isValid: false,
      error: 'File size must be less than 5MB'
    }
  }

  return { isValid: true }
}

// Generate unique filename for CV uploads
export function generateCVFileName(originalName: string, applicantName: string): string {
  const timestamp = Date.now()
  const extension = originalName.split('.').pop()
  const sanitizedName = applicantName.replace(/[^a-zA-Z0-9]/g, '_')
  return `cv_${sanitizedName}_${timestamp}.${extension}`
}

// Format experience years for display
export function formatExperience(years: number): string {
  if (years === 0) return "Fresher"
  if (years === 1) return "1 Year"
  return `${years} Years`
}

// Validate email format
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

// Validate phone number (Indian format)
export function isValidPhone(phone: string): boolean {
  const phoneRegex = /^[+]?[91]?[6-9]\d{9}$/
  return phoneRegex.test(phone.replace(/[\s\-\(\)]/g, ''))
}

// Validate LinkedIn profile URL
export function isValidLinkedInURL(url: string): boolean {
  const linkedinRegex = /^https?:\/\/(www\.)?linkedin\.com\/in\/[a-zA-Z0-9\-]+\/?$/
  return linkedinRegex.test(url)
}

// Search and filter utilities
export interface SearchFilters {
  location?: string
  skills?: string[]
  experience?: string
  keyword?: string
  trainerName?: string
}

export function filterApplications(
  applications: CareerApplication[],
  filters: SearchFilters
): CareerApplication[] {
  return applications.filter(application => {
    // Location filter
    if (filters.location && !application.currentLocation.toLowerCase().includes(filters.location.toLowerCase())) {
      return false
    }

    // Skills filter
    if (filters.skills && filters.skills.length > 0) {
      const hasMatchingSkill = filters.skills.some(skill =>
        application.skills.some(appSkill =>
          appSkill.toLowerCase().includes(skill.toLowerCase())
        )
      )
      if (!hasMatchingSkill) return false
    }

    // Experience filter
    if (filters.experience) {
      const expRange = parseExperienceRange(filters.experience)
      if (expRange && !isInExperienceRange(application.yearsOfExperience, expRange)) {
        return false
      }
    }

    // Keyword search
    if (filters.keyword) {
      const keyword = filters.keyword.toLowerCase()
      const searchableText = [
        application.fullName,
        application.email,
        application.currentLocation,
        ...application.skills,
        ...application.positionsAppliedFor
      ].join(' ').toLowerCase()

      if (!searchableText.includes(keyword)) {
        return false
      }
    }

    return true
  })
}

// Parse experience range from filter string
function parseExperienceRange(experience: string): { min: number; max: number } | null {
  const ranges: Record<string, { min: number; max: number }> = {
    'fresher': { min: 0, max: 0 },
    '0-2': { min: 0, max: 2 },
    '2-5': { min: 2, max: 5 },
    '5-10': { min: 5, max: 10 },
    '10+': { min: 10, max: 100 }
  }

  return ranges[experience.toLowerCase()] || null
}

// Check if experience is in range
function isInExperienceRange(experience: number, range: { min: number; max: number }): boolean {
  return experience >= range.min && experience <= range.max
}

// Generate application ID
export function generateApplicationId(): string {
  const timestamp = Date.now()
  const random = Math.random().toString(36).substring(2, 8)
  return `APP_${timestamp}_${random}`.toUpperCase()
}

// Format application status for display
export function formatApplicationStatus(status: CareerApplication['status']): {
  label: string
  color: string
  bgColor: string
} {
  const statusMap = {
    pending: {
      label: 'Pending Review',
      color: 'text-yellow-700',
      bgColor: 'bg-yellow-100'
    },
    reviewing: {
      label: 'Under Review',
      color: 'text-blue-700',
      bgColor: 'bg-blue-100'
    },
    shortlisted: {
      label: 'Shortlisted',
      color: 'text-green-700',
      bgColor: 'bg-green-100'
    },
    rejected: {
      label: 'Not Selected',
      color: 'text-red-700',
      bgColor: 'bg-red-100'
    },
    hired: {
      label: 'Hired',
      color: 'text-emerald-700',
      bgColor: 'bg-emerald-100'
    }
  }

  return statusMap[status]
}

// Sort applications by date
export function sortApplicationsByDate(
  applications: CareerApplication[],
  order: 'asc' | 'desc' = 'desc'
): CareerApplication[] {
  return [...applications].sort((a, b) => {
    const dateA = new Date(a.appliedDate).getTime()
    const dateB = new Date(b.appliedDate).getTime()
    return order === 'desc' ? dateB - dateA : dateA - dateB
  })
}

// Get applications statistics
export function getApplicationStats(applications: CareerApplication[]) {
  const total = applications.length
  const pending = applications.filter(app => app.status === 'pending').length
  const reviewing = applications.filter(app => app.status === 'reviewing').length
  const shortlisted = applications.filter(app => app.status === 'shortlisted').length
  const hired = applications.filter(app => app.status === 'hired').length
  const rejected = applications.filter(app => app.status === 'rejected').length

  return {
    total,
    pending,
    reviewing,
    shortlisted,
    hired,
    rejected,
    activeApplications: pending + reviewing + shortlisted
  }
}

// Export applications to CSV
export function exportApplicationsToCSV(applications: CareerApplication[]): string {
  const headers = [
    'Application ID',
    'Full Name',
    'Email',
    'Phone',
    'Location',
    'Experience (Years)',
    'Skills',
    'Positions Applied',
    'Status',
    'Applied Date',
    'LinkedIn Profile'
  ]

  const rows = applications.map(app => [
    app.id,
    app.fullName,
    app.email,
    app.phone,
    app.currentLocation,
    app.yearsOfExperience.toString(),
    app.skills.join('; '),
    app.positionsAppliedFor.join('; '),
    app.status,
    app.appliedDate,
    app.linkedinProfile || ''
  ])

  const csvContent = [headers, ...rows]
    .map(row => row.map(field => `"${field}"`).join(','))
    .join('\n')

  return csvContent
}
