import { NextRequest, NextResponse } from 'next/server'
import { writeFile, mkdir } from 'fs/promises'
import { existsSync } from 'fs'
import path from 'path'
import { validateCVFile, generateCVFileName } from '@/lib/career-utils'

// Maximum file size (5MB)
const MAX_FILE_SIZE = 5 * 1024 * 1024

// Allowed file types
const ALLOWED_TYPES = [
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
]

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const file = formData.get('file') as File
    const applicantName = formData.get('applicantName') as string || 'applicant'
    const applicationId = formData.get('applicationId') as string || 'unknown'
    
    if (!file) {
      return NextResponse.json({
        success: false,
        message: 'No file provided'
      }, { status: 400 })
    }
    
    // Validate file
    const validation = validateCVFile(file)
    if (!validation.isValid) {
      return NextResponse.json({
        success: false,
        message: validation.error
      }, { status: 400 })
    }
    
    // Additional server-side validation
    if (file.size > MAX_FILE_SIZE) {
      return NextResponse.json({
        success: false,
        message: 'File size exceeds 5MB limit'
      }, { status: 400 })
    }
    
    if (!ALLOWED_TYPES.includes(file.type)) {
      return NextResponse.json({
        success: false,
        message: 'Invalid file type. Only PDF, DOC, and DOCX files are allowed'
      }, { status: 400 })
    }
    
    // Generate unique filename
    const fileName = generateCVFileName(file.name, applicantName)
    
    // Create upload directory if it doesn't exist
    const uploadDir = path.join(process.cwd(), 'uploads', 'cvs')
    if (!existsSync(uploadDir)) {
      await mkdir(uploadDir, { recursive: true })
    }
    
    // Save file to disk
    const filePath = path.join(uploadDir, fileName)
    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)
    
    await writeFile(filePath, buffer)
    
    // Log upload for monitoring
    console.log('CV uploaded successfully:', {
      fileName,
      applicantName,
      applicationId,
      fileSize: file.size,
      fileType: file.type,
      timestamp: new Date().toISOString()
    })
    
    // In production, you might want to:
    // 1. Upload to cloud storage (AWS S3, Google Cloud Storage, etc.)
    // 2. Scan file for viruses
    // 3. Extract text content for search indexing
    // 4. Generate thumbnail for PDF files
    
    return NextResponse.json({
      success: true,
      message: 'CV uploaded successfully',
      data: {
        fileName,
        originalName: file.name,
        fileSize: file.size,
        fileType: file.type,
        uploadPath: `/uploads/cvs/${fileName}`,
        uploadedAt: new Date().toISOString()
      }
    })
    
  } catch (error) {
    console.error('Error uploading CV:', error)
    
    return NextResponse.json({
      success: false,
      message: 'Failed to upload CV. Please try again.'
    }, { status: 500 })
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const fileName = searchParams.get('file')
    
    if (!fileName) {
      return NextResponse.json({
        success: false,
        message: 'File name is required'
      }, { status: 400 })
    }
    
    // Security: Validate file name to prevent directory traversal
    if (fileName.includes('..') || fileName.includes('/') || fileName.includes('\\')) {
      return NextResponse.json({
        success: false,
        message: 'Invalid file name'
      }, { status: 400 })
    }
    
    const filePath = path.join(process.cwd(), 'uploads', 'cvs', fileName)
    
    if (!existsSync(filePath)) {
      return NextResponse.json({
        success: false,
        message: 'File not found'
      }, { status: 404 })
    }
    
    // In production, implement proper access control
    // Only allow authorized users (HR team) to download CVs
    
    // Read file and return as response
    const { readFile } = await import('fs/promises')
    const fileBuffer = await readFile(filePath)
    
    // Determine content type based on file extension
    const ext = path.extname(fileName).toLowerCase()
    let contentType = 'application/octet-stream'
    
    switch (ext) {
      case '.pdf':
        contentType = 'application/pdf'
        break
      case '.doc':
        contentType = 'application/msword'
        break
      case '.docx':
        contentType = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
        break
    }
    
    return new NextResponse(fileBuffer, {
      headers: {
        'Content-Type': contentType,
        'Content-Disposition': `attachment; filename="${fileName}"`,
        'Content-Length': fileBuffer.length.toString()
      }
    })
    
  } catch (error) {
    console.error('Error downloading CV:', error)
    
    return NextResponse.json({
      success: false,
      message: 'Failed to download CV'
    }, { status: 500 })
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const fileName = searchParams.get('file')
    
    if (!fileName) {
      return NextResponse.json({
        success: false,
        message: 'File name is required'
      }, { status: 400 })
    }
    
    // Security: Validate file name
    if (fileName.includes('..') || fileName.includes('/') || fileName.includes('\\')) {
      return NextResponse.json({
        success: false,
        message: 'Invalid file name'
      }, { status: 400 })
    }
    
    const filePath = path.join(process.cwd(), 'uploads', 'cvs', fileName)
    
    if (!existsSync(filePath)) {
      return NextResponse.json({
        success: false,
        message: 'File not found'
      }, { status: 404 })
    }
    
    // Delete file
    const { unlink } = await import('fs/promises')
    await unlink(filePath)
    
    console.log('CV deleted:', {
      fileName,
      timestamp: new Date().toISOString()
    })
    
    return NextResponse.json({
      success: true,
      message: 'CV deleted successfully'
    })
    
  } catch (error) {
    console.error('Error deleting CV:', error)
    
    return NextResponse.json({
      success: false,
      message: 'Failed to delete CV'
    }, { status: 500 })
  }
}

// Helper function to scan file for viruses (placeholder)
async function scanFileForViruses(filePath: string): Promise<boolean> {
  // In production, integrate with antivirus service
  // Example: ClamAV, VirusTotal API, etc.
  console.log('Scanning file for viruses:', filePath)
  
  // Simulate virus scan
  await new Promise(resolve => setTimeout(resolve, 100))
  
  // Return true if file is clean, false if infected
  return true
}

// Helper function to extract text content (placeholder)
async function extractTextContent(filePath: string, fileType: string): Promise<string> {
  // In production, use libraries like:
  // - pdf-parse for PDF files
  // - mammoth for DOCX files
  // - textract for DOC files
  
  console.log('Extracting text content from:', filePath)
  
  try {
    switch (fileType) {
      case 'application/pdf':
        // Extract PDF text
        return 'PDF text content would be extracted here'
      
      case 'application/vnd.openxmlformats-officedocument.wordprocessingml.document':
        // Extract DOCX text
        return 'DOCX text content would be extracted here'
      
      case 'application/msword':
        // Extract DOC text
        return 'DOC text content would be extracted here'
      
      default:
        return ''
    }
  } catch (error) {
    console.error('Error extracting text content:', error)
    return ''
  }
}
