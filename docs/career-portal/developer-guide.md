# Career Portal - Developer Guide

## 🛠️ Technical Implementation Guide

This guide provides comprehensive technical documentation for developers working on the Webs Jyoti Career Portal.

## 🏗️ Architecture Overview

### Technology Stack
- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS, Radix UI Components
- **Forms**: React Hook Form, Zod Validation
- **File Handling**: React Dropzone, Custom Upload API
- **State Management**: React Context, Local State
- **Security**: Custom Image Watermarking, Input Sanitization

### Project Structure
```
app/
├── careers/
│   ├── page.tsx                 # Main careers listing page
│   ├── apply/page.tsx           # Application form page
│   └── admin/page.tsx           # Admin dashboard page
├── api/
│   ├── careers/
│   │   └── apply/route.ts       # Application submission API
│   └── upload/
│       └── cv/route.ts          # CV file upload API
└── layout.tsx                   # Root layout with providers

components/careers/
├── career-application-form.tsx  # Main application form component
├── career-search-filters.tsx    # Search and filtering interface
├── career-card.tsx              # Job position display card
├── file-upload.tsx              # CV upload with drag-and-drop
├── image-watermark.tsx          # Image protection component
├── admin-dashboard.tsx          # Admin management interface
└── image-protection-provider.tsx # Global image protection

data/
├── career-positions.tsx         # Job positions database
├── skills.tsx                   # Skills and categories data
├── locations.tsx                # Geographic locations
└── trainers.tsx                 # Trainer information

lib/
├── career-utils.ts              # Career-specific utility functions
├── watermark.ts                 # Image watermarking utilities
└── utils.ts                     # General utility functions
```

## 🔧 Component Development

### Career Application Form

#### Form Schema Definition
```typescript
const applicationSchema = z.object({
  fullName: z.string().min(2, 'Full name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  linkedinProfile: z.string().url().optional().or(z.literal('')),
  currentLocation: z.string().min(1, 'Please select your current location'),
  yearsOfExperience: z.number().min(0).max(50),
  skills: z.array(z.number()).min(1, 'Please select at least one skill'),
  positionsAppliedFor: z.array(z.number()).min(1, 'Please select at least one position'),
  cvFile: z.any().optional()
})
```

#### Form Implementation Pattern
```typescript
const form = useForm<ApplicationFormData>({
  resolver: zodResolver(applicationSchema),
  defaultValues: {
    fullName: '',
    email: '',
    phone: '',
    // ... other defaults
  }
})

const handleSubmit = async (data: ApplicationFormData) => {
  try {
    const response = await fetch('/api/careers/apply', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
    
    if (!response.ok) throw new Error('Submission failed')
    
    const result = await response.json()
    // Handle success
  } catch (error) {
    // Handle error
  }
}
```

### Search and Filter Component

#### Filter State Management
```typescript
interface SearchFilters {
  keyword?: string
  location?: string
  skills?: string[]
  experience?: string
  department?: string
  trainerName?: string
  positionType?: string
}

const [filters, setFilters] = useState<SearchFilters>({})
const [selectedSkills, setSelectedSkills] = useState<string[]>([])

// Update filters when any filter changes
useEffect(() => {
  const updatedFilters = {
    ...filters,
    skills: selectedSkills.length > 0 ? selectedSkills : undefined
  }
  onFiltersChange(updatedFilters)
}, [filters, selectedSkills, onFiltersChange])
```

#### Filter Application Logic
```typescript
const filteredPositions = useMemo(() => {
  let positions = getActivePositions()

  // Keyword search
  if (filters.keyword) {
    const keyword = filters.keyword.toLowerCase()
    positions = positions.filter(position =>
      position.title.toLowerCase().includes(keyword) ||
      position.description.toLowerCase().includes(keyword) ||
      position.skills.some(skill => skill.toLowerCase().includes(keyword))
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

  // Additional filters...
  return positions
}, [filters])
```

### File Upload Component

#### Dropzone Configuration
```typescript
const { getRootProps, getInputProps, isDragActive } = useDropzone({
  onDrop,
  accept: {
    'application/pdf': ['.pdf'],
    'application/msword': ['.doc'],
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx']
  },
  maxFiles: 1,
  disabled: disabled || isUploading
})
```

#### File Validation
```typescript
const validateCVFile = (file: File): { isValid: boolean; error?: string } => {
  const ALLOWED_TYPES = [
    'application/pdf',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
  ]
  
  const MAX_SIZE = 5 * 1024 * 1024 // 5MB

  if (!ALLOWED_TYPES.includes(file.type)) {
    return {
      isValid: false,
      error: 'Please upload a PDF, DOC, or DOCX file'
    }
  }

  if (file.size > MAX_SIZE) {
    return {
      isValid: false,
      error: 'File size must be less than 5MB'
    }
  }

  return { isValid: true }
}
```

## 🔒 Security Implementation

### Image Watermarking System

#### Canvas-based Watermarking
```typescript
class ImageWatermark {
  private canvas: HTMLCanvasElement
  private ctx: CanvasRenderingContext2D

  async applyTiledWatermark(
    imageUrl: string,
    options: WatermarkOptions = {}
  ): Promise<string> {
    const {
      text = 'Webs Jyoti',
      opacity = 0.1,
      fontSize = 16,
      rotation = -45
    } = options

    return new Promise((resolve, reject) => {
      const img = new Image()
      img.crossOrigin = 'anonymous'
      
      img.onload = () => {
        this.canvas.width = img.width
        this.canvas.height = img.height

        // Draw original image
        this.ctx.drawImage(img, 0, 0)

        // Apply tiled watermark
        this.ctx.save()
        this.ctx.globalAlpha = opacity
        this.ctx.font = `${fontSize}px Arial`
        this.ctx.fillStyle = '#ffffff'

        // Calculate tile spacing and draw watermarks
        const tileSpacing = 150
        const rows = Math.ceil(img.height / tileSpacing)
        const cols = Math.ceil(img.width / tileSpacing)

        for (let row = 0; row < rows; row++) {
          for (let col = 0; col < cols; col++) {
            const x = (col * tileSpacing) + (tileSpacing / 2)
            const y = (row * tileSpacing) + (tileSpacing / 2)

            this.ctx.save()
            this.ctx.translate(x, y)
            this.ctx.rotate((rotation * Math.PI) / 180)
            this.ctx.fillText(text, 0, 0)
            this.ctx.restore()
          }
        }

        this.ctx.restore()
        resolve(this.canvas.toDataURL('image/png', 0.9))
      }

      img.onerror = () => reject(new Error('Failed to load image'))
      img.src = imageUrl
    })
  }
}
```

#### Protection Event Handlers
```typescript
export function initializeImageProtection(): void {
  if (typeof window === 'undefined') return

  // Prevent right-click on images
  document.addEventListener('contextmenu', (e) => {
    const target = e.target as HTMLElement
    if (target.tagName === 'IMG') {
      e.preventDefault()
      showWatermarkWarning()
    }
  })

  // Prevent drag and drop
  document.addEventListener('dragstart', (e) => {
    const target = e.target as HTMLElement
    if (target.tagName === 'IMG') {
      e.preventDefault()
      showWatermarkWarning()
    }
  })

  // Add CSS protection
  const style = document.createElement('style')
  style.textContent = `
    img {
      -webkit-user-select: none;
      -moz-user-select: none;
      user-select: none;
      -webkit-user-drag: none;
      user-drag: none;
    }
  `
  document.head.appendChild(style)
}
```

## 🌐 API Development

### Application Submission Endpoint

#### Route Handler Structure
```typescript
// app/api/careers/apply/route.ts
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate request body
    const validatedData = applicationSchema.parse(body)
    
    // Generate application ID
    const applicationId = generateApplicationId()
    const appliedDate = new Date().toISOString()
    
    // Create application record
    const application = {
      id: applicationId,
      ...validatedData,
      status: 'pending',
      appliedDate
    }
    
    // Store application (implement database logic)
    await storeApplication(application)
    
    // Send notifications
    await sendConfirmationEmail(application)
    await notifyHRTeam(application)
    
    return NextResponse.json({
      success: true,
      applicationId,
      message: 'Application submitted successfully'
    }, { status: 201 })
    
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({
        success: false,
        message: 'Validation failed',
        errors: error.errors
      }, { status: 400 })
    }
    
    return NextResponse.json({
      success: false,
      message: 'Internal server error'
    }, { status: 500 })
  }
}
```

### File Upload Endpoint

#### Secure File Handling
```typescript
// app/api/upload/cv/route.ts
export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const file = formData.get('file') as File
    const applicantName = formData.get('applicantName') as string
    
    // Validate file
    const validation = validateCVFile(file)
    if (!validation.isValid) {
      return NextResponse.json({
        success: false,
        message: validation.error
      }, { status: 400 })
    }
    
    // Generate secure filename
    const fileName = generateCVFileName(file.name, applicantName)
    
    // Create upload directory
    const uploadDir = path.join(process.cwd(), 'uploads', 'cvs')
    await mkdir(uploadDir, { recursive: true })
    
    // Save file
    const filePath = path.join(uploadDir, fileName)
    const bytes = await file.arrayBuffer()
    await writeFile(filePath, Buffer.from(bytes))
    
    return NextResponse.json({
      success: true,
      fileName,
      message: 'CV uploaded successfully'
    })
    
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: 'Upload failed'
    }, { status: 500 })
  }
}
```

## 📊 Data Management

### Position Data Structure
```typescript
interface CareerPosition {
  id: number
  title: string
  department: string
  location: string[]
  type: "Full-time" | "Part-time" | "Contract" | "Freelance"
  experience: string
  description: string
  requirements: string[]
  responsibilities: string[]
  skills: string[]
  salary?: string
  isActive: boolean
  postedDate: string
  applicationDeadline?: string
}
```

### Skills Data Structure
```typescript
interface Skill {
  id: number
  name: string
  category: string
  description?: string
  isPopular?: boolean
}
```

### Application Data Structure
```typescript
interface CareerApplication {
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
```

## 🎨 Styling Guidelines

### Tailwind CSS Classes
```typescript
// Common component patterns
const cardStyles = "bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
const buttonPrimary = "bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300"
const inputStyles = "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
```

### Brand Color Variables
```css
:root {
  --primary-blue: #1e40af;
  --secondary-indigo: #312e81;
  --accent-light-blue: #60a5fa;
  --success-green: #10b981;
  --warning-orange: #f59e0b;
  --error-red: #ef4444;
}
```

## 🧪 Testing Strategy

### Component Testing
```typescript
// Example test for CareerApplicationForm
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { CareerApplicationForm } from '@/components/careers/career-application-form'

describe('CareerApplicationForm', () => {
  it('validates required fields', async () => {
    render(<CareerApplicationForm />)
    
    const submitButton = screen.getByText('Submit Application')
    fireEvent.click(submitButton)
    
    await waitFor(() => {
      expect(screen.getByText('Full name must be at least 2 characters')).toBeInTheDocument()
      expect(screen.getByText('Please enter a valid email address')).toBeInTheDocument()
    })
  })
  
  it('submits form with valid data', async () => {
    const mockSubmit = jest.fn()
    render(<CareerApplicationForm onSubmit={mockSubmit} />)
    
    // Fill form fields
    fireEvent.change(screen.getByLabelText('Full Name'), {
      target: { value: 'John Doe' }
    })
    // ... fill other fields
    
    fireEvent.click(screen.getByText('Submit Application'))
    
    await waitFor(() => {
      expect(mockSubmit).toHaveBeenCalledWith(expect.objectContaining({
        fullName: 'John Doe'
      }))
    })
  })
})
```

### API Testing
```typescript
// Example API test
import { POST } from '@/app/api/careers/apply/route'
import { NextRequest } from 'next/server'

describe('/api/careers/apply', () => {
  it('creates application with valid data', async () => {
    const validData = {
      fullName: 'John Doe',
      email: 'john@example.com',
      phone: '+919876543210',
      currentLocation: 'Delhi NCR',
      yearsOfExperience: 5,
      skills: [1, 2, 3],
      positionsAppliedFor: [1]
    }
    
    const request = new NextRequest('http://localhost:3000/api/careers/apply', {
      method: 'POST',
      body: JSON.stringify(validData)
    })
    
    const response = await POST(request)
    const data = await response.json()
    
    expect(response.status).toBe(201)
    expect(data.success).toBe(true)
    expect(data.applicationId).toBeDefined()
  })
})
```

## 🚀 Deployment

### Environment Variables
```bash
# .env.local
NEXT_PUBLIC_BASE_URL=https://websjyoti.com
UPLOAD_DIR=/var/uploads/cvs
EMAIL_SERVICE_API_KEY=your_email_api_key
DATABASE_URL=your_database_connection_string
```

### Build Configuration
```javascript
// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['websjyoti.com'],
  },
  async headers() {
    return [
      {
        source: '/api/:path*',
        headers: [
          { key: 'Access-Control-Allow-Origin', value: '*' },
          { key: 'Access-Control-Allow-Methods', value: 'GET, POST, PUT, DELETE, OPTIONS' },
          { key: 'Access-Control-Allow-Headers', value: 'Content-Type, Authorization' },
        ],
      },
    ]
  },
}

module.exports = nextConfig
```

### Production Checklist
- [ ] Environment variables configured
- [ ] Database migrations applied
- [ ] File upload directory permissions set
- [ ] SSL certificates installed
- [ ] Error monitoring configured
- [ ] Performance monitoring enabled
- [ ] Backup systems in place
- [ ] Security headers configured

## 🔧 Maintenance

### Regular Tasks
- **Database Cleanup**: Archive old applications
- **File Management**: Clean up orphaned CV files
- **Performance Monitoring**: Check page load times
- **Security Updates**: Keep dependencies current
- **Backup Verification**: Test restore procedures

### Monitoring
- **Application Errors**: Track submission failures
- **Performance Metrics**: Monitor response times
- **User Analytics**: Track usage patterns
- **Security Events**: Monitor for suspicious activity

---

**For additional technical support**: Contact the development team

**Last Updated**: January 2024  
**Version**: 1.0.0
