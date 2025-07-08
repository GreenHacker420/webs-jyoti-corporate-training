/**
 * Static Career Application Handler
 * 
 * This file provides client-side alternatives for career application functionality
 * since API routes are not available in static hosting environments.
 * 
 * For production deployment on cPanel, you'll need to implement one of these solutions:
 * 1. Use a third-party form service (Formspree, Netlify Forms, etc.)
 * 2. Set up a separate backend service
 * 3. Use serverless functions (if supported by your hosting provider)
 */

import { z } from 'zod'
import { generateApplicationId } from './career-utils'

// Validation schema (same as API route)
export const applicationSchema = z.object({
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

export type ApplicationData = z.infer<typeof applicationSchema>

/**
 * OPTION 1: Formspree Integration
 * Replace YOUR_FORMSPREE_ENDPOINT with your actual Formspree endpoint
 */
export async function submitToFormspree(data: ApplicationData): Promise<{ success: boolean; message: string; applicationId?: string }> {
  const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORMSPREE_ENDPOINT'
  
  try {
    const applicationId = generateApplicationId()
    
    const formData = new FormData()
    formData.append('applicationId', applicationId)
    formData.append('fullName', data.fullName)
    formData.append('email', data.email)
    formData.append('phone', data.phone)
    formData.append('linkedinProfile', data.linkedinProfile || '')
    formData.append('currentLocation', data.currentLocation)
    formData.append('yearsOfExperience', data.yearsOfExperience.toString())
    formData.append('skills', data.skills.join(', '))
    formData.append('positionsAppliedFor', data.positionsAppliedFor.join(', '))
    formData.append('additionalNotes', data.additionalNotes || '')
    formData.append('appliedDate', new Date().toISOString())
    
    const response = await fetch(FORMSPREE_ENDPOINT, {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    })
    
    if (response.ok) {
      return {
        success: true,
        message: 'Application submitted successfully',
        applicationId
      }
    } else {
      throw new Error('Failed to submit application')
    }
  } catch (error) {
    console.error('Error submitting to Formspree:', error)
    return {
      success: false,
      message: 'Failed to submit application. Please try again.'
    }
  }
}

/**
 * OPTION 2: Email Integration (using EmailJS)
 * Requires EmailJS account and configuration
 */
export async function submitViaEmailJS(data: ApplicationData): Promise<{ success: boolean; message: string; applicationId?: string }> {
  try {
    // You'll need to install emailjs-com: npm install emailjs-com
    // const emailjs = require('emailjs-com')
    
    const applicationId = generateApplicationId()
    
    const templateParams = {
      applicationId,
      fullName: data.fullName,
      email: data.email,
      phone: data.phone,
      linkedinProfile: data.linkedinProfile || 'Not provided',
      currentLocation: data.currentLocation,
      yearsOfExperience: data.yearsOfExperience,
      skills: data.skills.join(', '),
      positionsAppliedFor: data.positionsAppliedFor.join(', '),
      additionalNotes: data.additionalNotes || 'None',
      appliedDate: new Date().toLocaleDateString()
    }
    
    // Replace with your EmailJS configuration
    // await emailjs.send(
    //   'YOUR_SERVICE_ID',
    //   'YOUR_TEMPLATE_ID',
    //   templateParams,
    //   'YOUR_USER_ID'
    // )
    
    return {
      success: true,
      message: 'Application submitted successfully',
      applicationId
    }
  } catch (error) {
    console.error('Error submitting via EmailJS:', error)
    return {
      success: false,
      message: 'Failed to submit application. Please try again.'
    }
  }
}

/**
 * OPTION 3: Local Storage (for demo/development)
 * This stores applications in browser's local storage
 */
export function submitToLocalStorage(data: ApplicationData): { success: boolean; message: string; applicationId: string } {
  try {
    const applicationId = generateApplicationId()
    const application = {
      id: applicationId,
      ...data,
      status: 'pending',
      appliedDate: new Date().toISOString()
    }
    
    // Get existing applications
    const existingApplications = JSON.parse(localStorage.getItem('careerApplications') || '[]')
    
    // Add new application
    existingApplications.push(application)
    
    // Save back to localStorage
    localStorage.setItem('careerApplications', JSON.stringify(existingApplications))
    
    return {
      success: true,
      message: 'Application submitted successfully (stored locally)',
      applicationId
    }
  } catch (error) {
    console.error('Error saving to localStorage:', error)
    return {
      success: false,
      message: 'Failed to submit application. Please try again.',
      applicationId: ''
    }
  }
}

/**
 * Get applications from localStorage (for demo purposes)
 */
export function getApplicationsFromLocalStorage(): any[] {
  try {
    return JSON.parse(localStorage.getItem('careerApplications') || '[]')
  } catch (error) {
    console.error('Error reading from localStorage:', error)
    return []
  }
}

/**
 * Main submission handler - choose your preferred method
 */
export async function submitCareerApplication(data: ApplicationData): Promise<{ success: boolean; message: string; applicationId?: string }> {
  // Validate data first
  try {
    applicationSchema.parse(data)
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {
        success: false,
        message: 'Validation failed: ' + error.errors.map(e => e.message).join(', ')
      }
    }
  }
  
  // Choose your preferred submission method:
  
  // For production with Formspree:
  // return await submitToFormspree(data)
  
  // For production with EmailJS:
  // return await submitViaEmailJS(data)
  
  // For demo/development:
  return submitToLocalStorage(data)
}

/**
 * File upload handler for static hosting
 * Since we can't handle file uploads server-side, we provide alternatives
 */
export function handleCVUpload(file: File): { success: boolean; message: string; fileName?: string } {
  // Validate file
  const maxSize = 5 * 1024 * 1024 // 5MB
  const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document']
  
  if (file.size > maxSize) {
    return {
      success: false,
      message: 'File size exceeds 5MB limit'
    }
  }
  
  if (!allowedTypes.includes(file.type)) {
    return {
      success: false,
      message: 'Invalid file type. Only PDF, DOC, and DOCX files are allowed'
    }
  }
  
  // For static hosting, you can:
  // 1. Store file reference and ask user to email CV separately
  // 2. Use a file upload service like Uploadcare, Cloudinary, etc.
  // 3. Convert to base64 and include in form submission (not recommended for large files)
  
  return {
    success: true,
    message: 'CV validated successfully. Please note: For static hosting, CV will need to be submitted via email.',
    fileName: file.name
  }
}
