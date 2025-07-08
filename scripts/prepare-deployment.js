#!/usr/bin/env node

/**
 * Deployment Preparation Script for cPanel Hosting
 * 
 * This script prepares the Next.js application for deployment to cPanel
 * by creating necessary directories, setting permissions, and generating
 * deployment-specific files.
 */

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

// ES module compatibility
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

console.log('🚀 Preparing deployment for cPanel hosting...')

// Create necessary directories
const directories = [
  'uploads',
  'uploads/cvs',
  'logs',
  'tmp'
]

directories.forEach(dir => {
  const dirPath = path.join(process.cwd(), dir)
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true })
    console.log(`✅ Created directory: ${dir}`)
  } else {
    console.log(`📁 Directory already exists: ${dir}`)
  }
})

// Create .htaccess file for Apache (if needed)
const htaccessContent = `# Next.js Custom Server Configuration
# Redirect all requests to the Node.js application

RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^(.*)$ http://localhost:${process.env.PORT || 3000}/$1 [P,L]

# Security headers
Header always set X-Frame-Options DENY
Header always set X-Content-Type-Options nosniff
Header always set Referrer-Policy "origin-when-cross-origin"

# Cache static assets
<FilesMatch "\\.(css|js|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$">
  ExpiresActive On
  ExpiresDefault "access plus 1 year"
  Header set Cache-Control "public, immutable"
</FilesMatch>

# Don't cache API routes
<LocationMatch "^/api/">
  Header set Cache-Control "no-store, no-cache, must-revalidate, max-age=0"
</LocationMatch>
`

// Only create .htaccess if it doesn't exist (user might have custom configuration)
const htaccessPath = path.join(process.cwd(), '.htaccess')
if (!fs.existsSync(htaccessPath)) {
  fs.writeFileSync(htaccessPath, htaccessContent)
  console.log('✅ Created .htaccess file')
} else {
  console.log('📄 .htaccess file already exists (skipping)')
}

// Create environment template
const envTemplate = `# Environment Configuration for cPanel Deployment
# Copy this file to .env.local and configure your values

# Server Configuration
NODE_ENV=production
PORT=3000
HOST=0.0.0.0

# Application URLs
NEXT_PUBLIC_BASE_URL=https://yourdomain.com
ALLOWED_ORIGINS=https://yourdomain.com,https://www.yourdomain.com

# Database Configuration (if using)
# DATABASE_URL=your_database_connection_string

# Email Configuration (if using)
# SMTP_HOST=your_smtp_host
# SMTP_PORT=587
# SMTP_USER=your_email@yourdomain.com
# SMTP_PASS=your_email_password

# File Upload Configuration
MAX_FILE_SIZE=5242880
UPLOAD_DIR=./uploads

# Security
# JWT_SECRET=your_jwt_secret_here
# ENCRYPTION_KEY=your_encryption_key_here

# Third-party Services
# FORMSPREE_ENDPOINT=https://formspree.io/f/your_endpoint
# EMAILJS_SERVICE_ID=your_service_id
# EMAILJS_TEMPLATE_ID=your_template_id
# EMAILJS_USER_ID=your_user_id

# Analytics (optional)
# GOOGLE_ANALYTICS_ID=GA_MEASUREMENT_ID
# VERCEL_ANALYTICS_ID=your_vercel_analytics_id
`

const envTemplatePath = path.join(process.cwd(), '.env.template')
fs.writeFileSync(envTemplatePath, envTemplate)
console.log('✅ Created .env.template file')

// Create deployment checklist
const deploymentChecklist = `# cPanel Deployment Checklist

## Pre-deployment
- [ ] Run \`npm run build:production\` locally to test build
- [ ] Run \`npm run deploy:test\` to test production server locally
- [ ] Update environment variables in .env.local
- [ ] Update domain configuration in next.config.js
- [ ] Test all functionality locally

## Deployment Steps
- [ ] Upload all files except node_modules to cPanel
- [ ] Set up Node.js app in cPanel
- [ ] Configure environment variables in cPanel
- [ ] Run npm install in cPanel
- [ ] Start the application
- [ ] Test all functionality on live site

## Post-deployment
- [ ] Test homepage loads correctly
- [ ] Test all navigation links
- [ ] Test API routes (career applications, file uploads)
- [ ] Test form submissions
- [ ] Check server logs for errors
- [ ] Monitor application performance

## Files to Upload
✅ server.js
✅ package.json
✅ package-lock.json
✅ next.config.js
✅ .next/ (build output)
✅ public/
✅ app/
✅ components/
✅ lib/
✅ data/
✅ uploads/ (empty directory)
✅ .htaccess (if using Apache)

## Files NOT to Upload
❌ node_modules/
❌ .git/
❌ .env.local
❌ .next/cache/
❌ README.md (optional)
❌ .gitignore (optional)
`

const checklistPath = path.join(process.cwd(), 'DEPLOYMENT_CHECKLIST.md')
fs.writeFileSync(checklistPath, deploymentChecklist)
console.log('✅ Created DEPLOYMENT_CHECKLIST.md')

// Create startup script for cPanel
const startupScript = `#!/usr/bin/env node

/**
 * Startup script for cPanel Node.js hosting
 * This script ensures the application starts correctly in the cPanel environment
 */

import { spawn } from 'child_process'
import path from 'path'

// Set environment variables
process.env.NODE_ENV = process.env.NODE_ENV || 'production'
process.env.PORT = process.env.PORT || 3000

console.log('🚀 Starting Next.js application for cPanel...')
console.log('Environment:', process.env.NODE_ENV)
console.log('Port:', process.env.PORT)

// Start the server
const serverPath = path.join(__dirname, 'server.js')
const server = spawn('node', [serverPath], {
  stdio: 'inherit',
  env: process.env
})

server.on('error', (err) => {
  console.error('❌ Failed to start server:', err)
  process.exit(1)
})

server.on('close', (code) => {
  console.log(\`Server process exited with code \${code}\`)
  if (code !== 0) {
    process.exit(code)
  }
})

// Handle shutdown signals
process.on('SIGTERM', () => {
  console.log('SIGTERM received, shutting down...')
  server.kill('SIGTERM')
})

process.on('SIGINT', () => {
  console.log('SIGINT received, shutting down...')
  server.kill('SIGINT')
})
`

const startupPath = path.join(process.cwd(), 'start.js')
fs.writeFileSync(startupPath, startupScript)
console.log('✅ Created start.js startup script')

// Make scripts executable (Unix-like systems)
if (process.platform !== 'win32') {
  try {
    fs.chmodSync(startupPath, '755')
    console.log('✅ Made start.js executable')
  } catch (err) {
    console.log('⚠️  Could not make start.js executable:', err.message)
  }
}

console.log('\n🎉 Deployment preparation complete!')
console.log('\nNext steps:')
console.log('1. Review and update .env.template with your values')
console.log('2. Copy .env.template to .env.local and configure')
console.log('3. Update domain settings in next.config.js')
console.log('4. Run npm run deploy:test to test locally')
console.log('5. Follow DEPLOYMENT_CHECKLIST.md for deployment')
