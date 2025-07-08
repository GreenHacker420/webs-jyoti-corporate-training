#!/usr/bin/env node

/**
 * Automated Deployment Script for Next.js cPanel Application
 * 
 * This script automates the complete deployment process:
 * 1. Builds the production application
 * 2. Validates the build
 * 3. Creates deployment package with only necessary files
 * 4. Generates ZIP file ready for cPanel upload
 * 5. Provides deployment instructions
 */

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { dirname } from 'path'
import { spawn } from 'child_process'
import archiver from 'archiver'

// ES module compatibility
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const projectRoot = path.dirname(__dirname)

// Configuration
const config = {
  deploymentDir: path.join(projectRoot, 'deployment-temp'),
  outputZip: path.join(projectRoot, 'deployment-package.zip'),
  buildDir: path.join(projectRoot, '.next'),
  
  // Files and directories to include in deployment
  includeFiles: [
    'server.js',
    'package.json',
    'package-lock.json',
    'next.config.js',
    '.next',
    'public',
    'app',
    'components',
    'lib',
    'data',
    'hooks',
    'uploads',
    '.htaccess',
    'start.js',
    '.env.template',
    'DEPLOYMENT_CHECKLIST.md',
    'CPANEL_DEPLOYMENT_GUIDE.md'
  ],
  
  // Files and directories to exclude
  excludePatterns: [
    'node_modules',
    '.git',
    '.gitignore',
    '.env.local',
    '.env.development',
    '.next/cache',
    'README.md',
    'docs',
    'scripts',
    '*.log',
    '.DS_Store',
    'Thumbs.db',
    '*.tmp',
    '*.temp'
  ]
}

// Utility functions
function log(message, type = 'info') {
  const timestamp = new Date().toISOString().split('T')[1].split('.')[0]
  const icons = {
    info: '📝',
    success: '✅',
    error: '❌',
    warning: '⚠️',
    progress: '🔄'
  }
  
  console.log(`${icons[type]} [${timestamp}] ${message}`)
}

function runCommand(command, args = [], options = {}) {
  return new Promise((resolve, reject) => {
    log(`Running: ${command} ${args.join(' ')}`, 'progress')

    // Handle Windows/Git Bash environment
    const isWindows = process.platform === 'win32'
    const cmd = isWindows && command === 'npm' ? 'npm.cmd' : command

    const childProcess = spawn(cmd, args, {
      stdio: 'inherit',
      cwd: projectRoot,
      shell: true,
      ...options
    })

    childProcess.on('close', (code) => {
      if (code === 0) {
        resolve()
      } else {
        reject(new Error(`Command failed with exit code ${code}`))
      }
    })

    childProcess.on('error', (error) => {
      reject(error)
    })
  })
}

function cleanDirectory(dir) {
  if (fs.existsSync(dir)) {
    fs.rmSync(dir, { recursive: true, force: true })
    log(`Cleaned directory: ${dir}`)
  }
}

function copyFileOrDirectory(src) {
  const srcPath = path.join(projectRoot, src)
  const destPath = path.join(config.deploymentDir, src)
  
  if (!fs.existsSync(srcPath)) {
    log(`Warning: ${src} not found, skipping`, 'warning')
    return
  }
  
  // Create destination directory
  const destDir = path.dirname(destPath)
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true })
  }
  
  // Copy file or directory
  const stats = fs.statSync(srcPath)
  if (stats.isDirectory()) {
    fs.cpSync(srcPath, destPath, { recursive: true })
    log(`Copied directory: ${src}`)
  } else {
    fs.copyFileSync(srcPath, destPath)
    log(`Copied file: ${src}`)
  }
}

async function buildApplication() {
  log('Building production application...', 'progress')
  
  try {
    await runCommand('npm', ['run', 'build:production'])
    log('Production build completed successfully', 'success')
  } catch (error) {
    log(`Build failed: ${error.message}`, 'error')
    throw error
  }
}

function validateBuild() {
  log('Validating build...', 'progress')
  
  const requiredFiles = [
    '.next/BUILD_ID',
    '.next/package.json',
    'server.js',
    'package.json'
  ]
  
  for (const file of requiredFiles) {
    const filePath = path.join(projectRoot, file)
    if (!fs.existsSync(filePath)) {
      throw new Error(`Required file missing: ${file}`)
    }
  }
  
  // Check if .next directory has content
  const nextDir = path.join(projectRoot, '.next')
  const nextContents = fs.readdirSync(nextDir)
  if (nextContents.length === 0) {
    throw new Error('.next directory is empty')
  }
  
  log('Build validation passed', 'success')
}

function createDeploymentPackage() {
  log('Creating deployment package...', 'progress')
  
  // Clean and create deployment directory
  cleanDirectory(config.deploymentDir)
  fs.mkdirSync(config.deploymentDir, { recursive: true })
  
  // Copy files and directories
  for (const item of config.includeFiles) {
    copyFileOrDirectory(item, item)
  }
  
  // Create uploads directories if they don't exist
  const uploadsDir = path.join(config.deploymentDir, 'uploads')
  const cvDir = path.join(uploadsDir, 'cvs')
  const logsDir = path.join(config.deploymentDir, 'logs')
  const tmpDir = path.join(config.deploymentDir, 'tmp')
  
  for (const dir of [uploadsDir, cvDir, logsDir, tmpDir]) {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true })
      // Create .gitkeep file to preserve empty directories
      fs.writeFileSync(path.join(dir, '.gitkeep'), '')
    }
  }
  
  log('Deployment package created', 'success')
}

function createZipFile() {
  return new Promise((resolve, reject) => {
    log('Creating ZIP file...', 'progress')
    
    // Remove existing ZIP file
    if (fs.existsSync(config.outputZip)) {
      fs.unlinkSync(config.outputZip)
    }
    
    const output = fs.createWriteStream(config.outputZip)
    const archive = archiver('zip', {
      zlib: { level: 9 } // Maximum compression
    })
    
    output.on('close', () => {
      const sizeInMB = (archive.pointer() / 1024 / 1024).toFixed(2)
      log(`ZIP file created: ${config.outputZip} (${sizeInMB} MB)`, 'success')
      resolve()
    })
    
    archive.on('error', (err) => {
      log(`ZIP creation failed: ${err.message}`, 'error')
      reject(err)
    })
    
    archive.pipe(output)
    archive.directory(config.deploymentDir, false)
    archive.finalize()
  })
}

function generateDeploymentInstructions() {
  const instructions = `
🚀 DEPLOYMENT PACKAGE READY!

📦 Package: deployment-package.zip
📁 Size: ${fs.existsSync(config.outputZip) ? (fs.statSync(config.outputZip).size / 1024 / 1024).toFixed(2) + ' MB' : 'Unknown'}

📋 NEXT STEPS:

1. 📤 UPLOAD TO CPANEL
   - Log into your cPanel File Manager
   - Navigate to your domain's root directory (usually public_html)
   - Upload deployment-package.zip
   - Extract the ZIP file

2. ⚙️ CONFIGURE NODE.JS APP
   - Go to "Setup Node.js App" in cPanel
   - Create new application:
     * Node.js version: 18+ (latest available)
     * Application mode: Production
     * Application root: /public_html (or your domain folder)
     * Application URL: Your domain name
     * Application startup file: server.js

3. 📦 INSTALL DEPENDENCIES
   - In Node.js app settings, click "Run NPM Install"
   - Wait for installation to complete

4. 🔧 SET ENVIRONMENT VARIABLES
   Add these variables in cPanel Node.js app settings:
   - NODE_ENV=production
   - NEXT_PUBLIC_BASE_URL=https://yourdomain.com
   - ALLOWED_ORIGINS=https://yourdomain.com,https://www.yourdomain.com

5. 🚀 START APPLICATION
   - Click "START APP" in cPanel
   - Verify status shows "Running"

6. ✅ TEST DEPLOYMENT
   - Visit your domain
   - Check health: https://yourdomain.com/health
   - Test API: https://yourdomain.com/api/status

📚 For detailed instructions, see CPANEL_DEPLOYMENT_GUIDE.md

🔧 Need help? Check the troubleshooting section in README.md
`
  
  console.log(instructions)
  
  // Save instructions to file
  const instructionsFile = path.join(projectRoot, 'DEPLOYMENT_INSTRUCTIONS.txt')
  fs.writeFileSync(instructionsFile, instructions)
  log(`Deployment instructions saved to: ${instructionsFile}`, 'success')
}

// Main deployment function
async function deploy(target = 'production') {
  const startTime = Date.now()
  
  try {
    log(`Starting deployment process for ${target}...`, 'progress')
    
    // Step 1: Build application
    await buildApplication()
    
    // Step 2: Validate build
    validateBuild()
    
    // Step 3: Create deployment package
    createDeploymentPackage()
    
    // Step 4: Create ZIP file
    await createZipFile()
    
    // Step 5: Generate instructions
    generateDeploymentInstructions()
    
    // Cleanup
    cleanDirectory(config.deploymentDir)
    
    const duration = ((Date.now() - startTime) / 1000).toFixed(2)
    log(`Deployment package created successfully in ${duration}s`, 'success')
    
  } catch (error) {
    log(`Deployment failed: ${error.message}`, 'error')
    
    // Cleanup on error
    cleanDirectory(config.deploymentDir)
    
    process.exit(1)
  }
}

// Command line interface
const args = process.argv.slice(2)
const target = args[0] || 'production'

if (args.includes('--help') || args.includes('-h')) {
  console.log(`
Usage: node scripts/deploy.js [target] [options]

Targets:
  production (default)  - Create production deployment package
  staging              - Create staging deployment package

Options:
  --help, -h           - Show this help message

Examples:
  node scripts/deploy.js
  node scripts/deploy.js production
  node scripts/deploy.js staging
  `)
  process.exit(0)
}

// Run deployment
deploy(target).catch((error) => {
  log(`Deployment script failed: ${error.message}`, 'error')
  process.exit(1)
})
