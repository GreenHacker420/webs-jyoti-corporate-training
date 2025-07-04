import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { generateApplicationId } from '@/lib/career-utils'

// Validation schema for application submission
const applicationSchema = z.object({
  fullName: z.string().min(2, 'Full name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  linkedinProfile: z.string().url().optional().or(z.literal('')),
  currentLocation: z.string().min(1, 'Please select your current location'),
  yearsOfExperience: z.number().min(0).max(50),
  skills: z.array(z.string()).min(1, 'Please select at least one skill'),
  positionsAppliedFor: z.array(z.string()).min(1, 'Please select at least one position'),
  cvFileName: z.string().optional(),
  additionalNotes: z.string().optional()
})

// In-memory storage for demo purposes
// In production, use a proper database
let applications: any[] = []

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate the request body
    const validatedData = applicationSchema.parse(body)
    
    // Generate application ID and timestamp
    const applicationId = generateApplicationId()
    const appliedDate = new Date().toISOString()
    
    // Create application record
    const application = {
      id: applicationId,
      ...validatedData,
      status: 'pending',
      appliedDate,
      notes: validatedData.additionalNotes || ''
    }
    
    // Store application (in production, save to database)
    applications.push(application)
    
    // Log application for monitoring
    console.log('New career application received:', {
      id: applicationId,
      name: validatedData.fullName,
      email: validatedData.email,
      positions: validatedData.positionsAppliedFor,
      timestamp: appliedDate
    })
    
    // Send confirmation email (in production)
    // await sendApplicationConfirmationEmail(application)
    
    // Notify HR team (in production)
    // await notifyHRTeam(application)
    
    return NextResponse.json({
      success: true,
      message: 'Application submitted successfully',
      applicationId,
      data: {
        id: applicationId,
        status: 'pending',
        appliedDate
      }
    }, { status: 201 })
    
  } catch (error) {
    console.error('Error processing career application:', error)
    
    if (error instanceof z.ZodError) {
      return NextResponse.json({
        success: false,
        message: 'Validation failed',
        errors: error.errors.map(err => ({
          field: err.path.join('.'),
          message: err.message
        }))
      }, { status: 400 })
    }
    
    return NextResponse.json({
      success: false,
      message: 'Internal server error. Please try again later.'
    }, { status: 500 })
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const status = searchParams.get('status')
    const limit = parseInt(searchParams.get('limit') || '50')
    const offset = parseInt(searchParams.get('offset') || '0')
    
    // Filter applications by status if provided
    let filteredApplications = applications
    if (status && status !== 'all') {
      filteredApplications = applications.filter(app => app.status === status)
    }
    
    // Apply pagination
    const paginatedApplications = filteredApplications
      .slice(offset, offset + limit)
      .map(app => ({
        ...app,
        // Remove sensitive information from public API
        cvFileName: app.cvFileName ? 'CV uploaded' : undefined
      }))
    
    return NextResponse.json({
      success: true,
      data: paginatedApplications,
      pagination: {
        total: filteredApplications.length,
        limit,
        offset,
        hasMore: offset + limit < filteredApplications.length
      }
    })
    
  } catch (error) {
    console.error('Error fetching applications:', error)
    
    return NextResponse.json({
      success: false,
      message: 'Failed to fetch applications'
    }, { status: 500 })
  }
}

// Helper function to send confirmation email (placeholder)
async function sendApplicationConfirmationEmail(application: any) {
  // In production, integrate with email service (SendGrid, AWS SES, etc.)
  console.log('Sending confirmation email to:', application.email)
  
  const emailContent = {
    to: application.email,
    subject: 'Application Received - Webs Jyoti Careers',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #1e40af 0%, #312e81 100%); color: white; padding: 20px; text-align: center;">
          <h1>Application Received</h1>
        </div>
        
        <div style="padding: 20px; background: #f9fafb;">
          <p>Dear ${application.fullName},</p>
          
          <p>Thank you for your interest in joining Webs Jyoti! We have successfully received your application.</p>
          
          <div style="background: white; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <h3>Application Details:</h3>
            <p><strong>Application ID:</strong> ${application.id}</p>
            <p><strong>Position(s):</strong> ${application.positionsAppliedFor.join(', ')}</p>
            <p><strong>Submitted:</strong> ${new Date(application.appliedDate).toLocaleDateString()}</p>
            <p><strong>Status:</strong> Under Review</p>
          </div>
          
          <p>Our HR team will review your application and get back to you within 5-7 business days.</p>
          
          <p>If you have any questions, please contact us at careers@websjyoti.com</p>
          
          <p>Best regards,<br>Webs Jyoti HR Team</p>
        </div>
        
        <div style="background: #374151; color: white; padding: 15px; text-align: center; font-size: 12px;">
          <p>© 2024 Webs Jyoti. All rights reserved.</p>
        </div>
      </div>
    `
  }
  
  // Implement actual email sending logic here
  return Promise.resolve()
}

// Helper function to notify HR team (placeholder)
async function notifyHRTeam(application: any) {
  // In production, send notification to HR team
  console.log('Notifying HR team of new application:', application.id)
  
  const notification = {
    to: 'hr@websjyoti.com',
    subject: `New Career Application - ${application.fullName}`,
    html: `
      <h2>New Career Application Received</h2>
      <p><strong>Applicant:</strong> ${application.fullName}</p>
      <p><strong>Email:</strong> ${application.email}</p>
      <p><strong>Phone:</strong> ${application.phone}</p>
      <p><strong>Location:</strong> ${application.currentLocation}</p>
      <p><strong>Experience:</strong> ${application.yearsOfExperience} years</p>
      <p><strong>Positions:</strong> ${application.positionsAppliedFor.join(', ')}</p>
      <p><strong>Skills:</strong> ${application.skills.join(', ')}</p>
      <p><strong>Application ID:</strong> ${application.id}</p>
      
      <p><a href="${process.env.NEXT_PUBLIC_BASE_URL}/careers/admin">Review Application</a></p>
    `
  }
  
  // Implement actual notification logic here
  return Promise.resolve()
}
