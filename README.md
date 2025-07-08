# Webs Jyoti Corporate Training Website

[![Built with Next.js](https://img.shields.io/badge/Built%20with-Next.js-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![Powered by React](https://img.shields.io/badge/Powered%20by-React-blue?style=for-the-badge&logo=react)](https://reactjs.org/)
[![Styled with Tailwind CSS](https://img.shields.io/badge/Styled%20with-Tailwind%20CSS-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)

## 🚀 Project Overview

Webs Jyoti Corporate Training is a comprehensive web platform designed to showcase and deliver professional corporate training services. With over 17 years of excellence in data analytics, Excel, Power BI, and business intelligence training, this platform serves as the digital gateway for organizations seeking to upskill their teams.

### ✨ Key Features

- **Modern React/Next.js Architecture**: Built with the latest web technologies for optimal performance
- **Responsive Design**: Seamlessly adapts to all device sizes and screen resolutions
- **Interactive UI Components**: Enhanced user experience with smooth animations and transitions
- **Corporate Training Focus**: Specialized content for data analytics, Excel, Power BI, and MIS reporting
- **Multi-delivery Support**: Online, on-site, and hybrid training options
- **Performance Analytics**: Built-in tracking for training effectiveness and ROI measurement
- **Career Portal**: Comprehensive job application and recruitment management system
- **Image Protection**: Advanced watermarking and content protection system
- **Admin Dashboard**: Powerful tools for managing applications and candidates

## 🛠️ Technology Stack

### Frontend
- **Next.js 15.2.4** - React framework for production
- **React 19** - JavaScript library for building user interfaces
- **TypeScript** - Type-safe JavaScript development
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library for React

### UI Components
- **Radix UI** - Unstyled, accessible UI primitives
- **Lucide React** - Beautiful & consistent icon toolkit
- **Aura UI Patterns** - Enhanced component animations and interactions

### Development Tools
- **ESLint** - Code linting and formatting
- **PostCSS** - CSS processing and optimization
- **Autoprefixer** - CSS vendor prefixing

## 📦 Installation and Setup

### Prerequisites

#### Development Environment
- **Node.js**: v18.0.0 or higher (v24.3.0 recommended)
- **npm**: v8.0.0 or higher (v11.4.2 recommended)
- **Git**: For version control

#### cPanel Hosting Requirements
- **Node.js Support**: cPanel with "Setup Node.js App" feature
- **Node.js Version**: v18+ supported by hosting provider
- **File Manager Access**: For file uploads and management
- **SSH Access**: Recommended but not required
- **Domain/Subdomain**: Configured for the application

#### Recommended Tools
- **VS Code**: With Next.js and TypeScript extensions
- **cURL**: For API testing
- **ZIP Utility**: For deployment package creation

### Quick Start

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd webs-jyoti-corporate-training-lj
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

### Build for Production

```bash
# Build and test locally
npm run deploy:test

# Complete deployment process
npm run deploy:full
```

## 🚀 Deployment Process

### Automated Deployment (Recommended)

The application includes automated deployment scripts for easy cPanel deployment:

```bash
# Complete deployment process
npm run deploy:full

# This will:
# 1. Build the production application
# 2. Validate the build
# 3. Create deployment package
# 4. Generate deployment ZIP file
```

### Manual Deployment Steps

1. **Prepare deployment package**
   ```bash
   npm run deploy:package
   ```

2. **Upload to cPanel**
   - Upload the generated `deployment-package.zip` to your cPanel File Manager
   - Extract in your domain's root directory (usually `public_html`)

3. **Configure Node.js App in cPanel**
   - Go to "Setup Node.js App" in cPanel
   - Create new application:
     - **Node.js version**: 18+ (latest available)
     - **Application mode**: Production
     - **Application root**: `/public_html` (or your domain folder)
     - **Application URL**: Your domain name
     - **Application startup file**: `server.js`

4. **Install dependencies**
   - In the Node.js app settings, click "Run NPM Install"
   - Wait for installation to complete

5. **Set environment variables**
   ```bash
   NODE_ENV=production
   NEXT_PUBLIC_BASE_URL=https://yourdomain.com
   ALLOWED_ORIGINS=https://yourdomain.com,https://www.yourdomain.com
   ```

6. **Start the application**
   - Click "START APP" in cPanel
   - Verify status shows "Running"

### Environment Configuration

#### Required Variables
```bash
NODE_ENV=production
PORT=3000                    # Set automatically by cPanel
HOST=0.0.0.0                # Bind to all interfaces
NEXT_PUBLIC_BASE_URL=https://yourdomain.com
ALLOWED_ORIGINS=https://yourdomain.com,https://www.yourdomain.com
```

#### Optional Variables
```bash
# File Upload
MAX_FILE_SIZE=5242880       # 5MB default
UPLOAD_DIR=./uploads

# Email Service (if using)
SMTP_HOST=your_smtp_host
SMTP_PORT=587
SMTP_USER=your_email@yourdomain.com
SMTP_PASS=your_email_password

# Third-party Services
FORMSPREE_ENDPOINT=https://formspree.io/f/your_endpoint
GOOGLE_ANALYTICS_ID=GA_MEASUREMENT_ID
```

## � API Endpoints

### Health & Status Endpoints

#### GET /health
Returns server health status and system information.

```bash
curl http://localhost:3000/health
```

**Response:**
```json
{
  "status": "healthy",
  "timestamp": "2025-07-08T15:24:57.155Z",
  "environment": "production",
  "uptime": 35.0119638,
  "memory": {
    "rss": 94179328,
    "heapTotal": 46448640,
    "heapUsed": 43643776,
    "external": 3926416,
    "arrayBuffers": 81256
  },
  "version": "v24.3.0"
}
```

#### GET /api/status
Returns API status and application version.

```bash
curl http://localhost:3000/api/status
```

**Response:**
```json
{
  "api": "online",
  "timestamp": "2025-07-08T15:25:13.442Z",
  "version": "0.1.1"
}
```

### Career Application Endpoints

#### POST /api/careers/apply
Submit a new career application.

**Request Body:**
```json
{
  "fullName": "John Doe",
  "email": "john@example.com",
  "phone": "1234567890",
  "linkedinProfile": "https://linkedin.com/in/johndoe",
  "currentLocation": "Mumbai",
  "yearsOfExperience": 5,
  "skills": ["Excel", "Power BI", "Data Analysis"],
  "positionsAppliedFor": ["Data Analyst", "Business Analyst"],
  "cvFileName": "john_doe_cv.pdf",
  "additionalNotes": "Interested in remote opportunities"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Application submitted successfully",
  "applicationId": "APP_20250708_001",
  "data": {
    "id": "APP_20250708_001",
    "status": "pending",
    "appliedDate": "2025-07-08T15:30:00.000Z"
  }
}
```

#### GET /api/careers/apply
Retrieve career applications (admin only).

**Query Parameters:**
- `status`: Filter by status (pending, reviewed, accepted, rejected)
- `limit`: Number of results (default: 50)
- `offset`: Pagination offset (default: 0)

### File Upload Endpoints

#### POST /api/upload/cv
Upload CV file for career applications.

**Request:** Multipart form data
- `file`: CV file (PDF, DOC, DOCX, max 5MB)
- `applicantName`: Applicant's name
- `applicationId`: Associated application ID

**Response:**
```json
{
  "success": true,
  "message": "CV uploaded successfully",
  "data": {
    "fileName": "1720447800000_john_doe_cv.pdf",
    "originalName": "john_doe_cv.pdf",
    "fileSize": 1024000,
    "fileType": "application/pdf",
    "uploadPath": "/uploads/cvs/1720447800000_john_doe_cv.pdf",
    "uploadedAt": "2025-07-08T15:30:00.000Z"
  }
}
```

#### GET /api/upload/cv?file=filename
Download uploaded CV file (admin only).

#### DELETE /api/upload/cv?file=filename
Delete uploaded CV file (admin only).

## �📁 Project Structure

```
webs-jyoti-corporate-training-lj/
├── app/                    # Next.js app directory
│   ├── about/             # About page
│   ├── careers/           # Career portal pages
│   │   ├── page.tsx       # Main careers page
│   │   ├── apply/         # Application form
│   │   └── admin/         # Admin dashboard
│   ├── contact/           # Contact page
│   ├── enquire/           # Enquiry page
│   ├── gallery/           # Gallery page
│   ├── lms/               # Learning Management System
│   ├── locations/         # Locations page
│   ├── trainer-team/      # Trainer team page
│   ├── training-modules/  # Training modules page
│   ├── api/               # API routes
│   │   ├── careers/       # Career-related APIs
│   │   └── upload/        # File upload APIs
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout component
│   └── page.tsx           # Homepage component
├── components/            # Reusable React components
│   ├── animations/        # Animation components
│   ├── careers/           # Career portal components
│   ├── ui/               # UI component library
│   ├── footer.tsx        # Footer component
│   ├── header.tsx        # Header component
│   └── ...               # Other components
├── data/                 # Data files and schemas
│   ├── career-positions.tsx # Job positions data
│   ├── skills.tsx        # Skills database
│   └── ...               # Other data files
├── docs/                 # Documentation
│   ├── career-portal/    # Career portal docs
│   ├── features/         # Feature documentation
│   └── ...               # Other documentation
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions
│   ├── career-utils.ts   # Career-specific utilities
│   ├── watermark.ts      # Image protection
│   └── ...               # Other utilities
├── public/               # Static assets
│   ├── images/           # Image assets
│   └── logos/            # Logo assets
├── styles/               # Additional stylesheets
└── ...                   # Configuration files
```

## 🎯 Usage Guidelines

### Development Workflow

1. **Component Development**: Create reusable components in the `components/` directory
2. **Page Creation**: Add new pages in the `app/` directory following Next.js 13+ app router conventions
3. **Styling**: Use Tailwind CSS classes for styling, with custom CSS in `globals.css` when needed
4. **State Management**: Utilize React hooks and context for state management
5. **Type Safety**: Maintain TypeScript types for all components and functions

### Best Practices

- Follow React and Next.js best practices
- Maintain consistent code formatting with ESLint
- Use semantic HTML for accessibility
- Optimize images and assets for web performance
- Write descriptive commit messages
- Test components across different devices and browsers

## 🚀 Deployment

The application is optimized for deployment on various platforms:

### Vercel (Recommended)
```bash
npm run build
# Deploy to Vercel
```

### Other Platforms
The application can be deployed to any platform that supports Next.js applications, including:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## 🤝 Contributing

We welcome contributions to improve the Webs Jyoti Corporate Training platform!

### How to Contribute

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Make your changes**
4. **Commit your changes**
   ```bash
   git commit -m 'Add some amazing feature'
   ```
5. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
6. **Open a Pull Request**

### Contribution Guidelines

- Ensure your code follows the existing style and conventions
- Add appropriate TypeScript types for new features
- Test your changes thoroughly across different devices
- Update documentation as needed
- Write clear, descriptive commit messages

### Code of Conduct

- Be respectful and inclusive
- Provide constructive feedback
- Focus on the best interests of the community
- Help others learn and grow

## 📄 License

This project is proprietary software developed for Webs Jyoti Corporate Training. All rights reserved.

## � Troubleshooting

### Common Issues and Solutions

#### Build Issues

**Issue**: `npm run build` fails with TypeScript errors
```bash
# Solution: Run type checking first
npm run type-check
npm run lint:fix
npm run build
```

**Issue**: Module not found errors during build
```bash
# Solution: Clean and reinstall dependencies
npm run clean:all
npm install
npm run build
```

#### Server Issues

**Issue**: Server fails to start with "path-to-regexp" error
```bash
# Solution: This was fixed in the latest version
# Ensure you're using the updated server.js
npm start
```

**Issue**: Port already in use
```bash
# Solution: Use different port or kill existing process
PORT=3001 npm start
# or
lsof -ti:3000 | xargs kill -9  # Kill process on port 3000
```

#### Deployment Issues

**Issue**: Application won't start in cPanel
- Check Node.js version compatibility (18+ required)
- Verify `server.js` is set as startup file
- Check environment variables are set correctly
- Review application logs in cPanel

**Issue**: 404 errors on deployed site
- Ensure `.next` folder was uploaded
- Check file permissions (755 for folders, 644 for files)
- Verify all route files are present

**Issue**: API routes not working
- Confirm `app/api` folder structure is intact
- Check server logs for errors
- Verify custom server is handling requests properly

#### File Upload Issues

**Issue**: CV upload fails
- Check `uploads/cvs` directory exists and has write permissions
- Verify file size is under 5MB limit
- Ensure file type is PDF, DOC, or DOCX

#### Performance Issues

**Issue**: Slow page loading
```bash
# Solution: Enable compression and caching
# Already configured in next.config.js
# Check network tab in browser dev tools
```

**Issue**: High memory usage
- Monitor with `/health` endpoint
- Check for memory leaks in custom code
- Consider increasing server resources

### Getting Help

1. **Check logs**: Use `/health` endpoint for server status
2. **Review documentation**: See comprehensive guides in `docs/` folder
3. **Validate environment**: Run `npm run deploy:validate`
4. **Test locally**: Use `npm run deploy:test` before deployment

### Debug Mode

Enable debug logging by setting:
```bash
NODE_ENV=development
DEBUG=true
```

## �📚 Documentation

Comprehensive documentation is available in the `docs/` directory:

- **[Main Documentation](./docs/README.md)** - Complete platform overview
- **[Career Portal Guide](./docs/career-portal/README.md)** - Career portal features and usage
- **[User Guide](./docs/career-portal/user-guide.md)** - For job seekers and applicants
- **[Admin Guide](./docs/career-portal/admin-guide.md)** - For HR teams and administrators
- **[Developer Guide](./docs/career-portal/developer-guide.md)** - Technical implementation details

## 📞 Support

For technical support or questions about the platform:

- **Website**: [https://websjyoti.com](https://websjyoti.com)
- **Email**: Contact through the website contact form
- **Training Portal**: [https://corporate.websjyoti.com](https://corporate.websjyoti.com)
- **Career Portal**: [/careers](./app/careers) - Job opportunities and applications

## 🏆 About Webs Jyoti

Webs Jyoti has been a leading provider of corporate training services for over 17 years, specializing in:

- **Data Analytics Training**
- **Advanced Excel Training**
- **Power BI and Business Intelligence**
- **MIS Reporting Systems**
- **Corporate Skill Development**

With 9,375+ professionals trained across 22+ cities in India, Webs Jyoti continues to be the trusted partner for organizations seeking to enhance their team's analytical and technical capabilities.

---

**Built with ❤️ by The GreenHacker**
