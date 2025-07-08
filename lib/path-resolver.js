/**
 * Path Resolution Utilities for cPanel Shared Hosting
 *
 * This module provides utilities to handle path resolution issues
 * that commonly occur in shared hosting environments.
 */

import path from 'path'
import { existsSync } from 'fs'

/**
 * Get the application root directory
 * Handles different deployment scenarios
 */
export function getAppRoot() {
  // In development, use current working directory
  if (process.env.NODE_ENV === 'development') {
    return process.cwd()
  }

  // In production, try to find the actual app root
  let currentDir = process.cwd()
  
  // Look for package.json to identify app root
  while (currentDir !== path.dirname(currentDir)) {
    if (existsSync(path.join(currentDir, 'package.json'))) {
      return currentDir
    }
    currentDir = path.dirname(currentDir)
  }
  
  // Fallback to current working directory
  return process.cwd()
}

/**
 * Resolve public asset paths for shared hosting
 */
export function resolvePublicPath(assetPath) {
  // Remove leading slash if present
  const cleanPath = assetPath.startsWith('/') ? assetPath.slice(1) : assetPath
  
  // In development, use standard Next.js public path
  if (process.env.NODE_ENV === 'development') {
    return `/${cleanPath}`
  }
  
  // In production, handle subdirectory deployments
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''
  return `${basePath}/${cleanPath}`
}

/**
 * Resolve API endpoint URLs for different environments
 */
export function resolveApiUrl(endpoint) {
  // Remove leading slash if present
  const cleanEndpoint = endpoint.startsWith('/') ? endpoint.slice(1) : endpoint
  
  // In development, use localhost
  if (process.env.NODE_ENV === 'development') {
    const port = process.env.PORT || 3000
    return `http://localhost:${port}/${cleanEndpoint}`
  }
  
  // In production, use the configured base URL
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || ''
  return `${baseUrl}/${cleanEndpoint}`
}

/**
 * Resolve upload directory path
 */
export function resolveUploadPath(filename) {
  const appRoot = getAppRoot()
  const uploadDir = process.env.UPLOAD_DIR || 'uploads'
  
  const basePath = path.isAbsolute(uploadDir) 
    ? uploadDir 
    : path.join(appRoot, uploadDir)
  
  return filename ? path.join(basePath, filename) : basePath
}

/**
 * Resolve CV upload path specifically
 */
export function resolveCVUploadPath(filename) {
  const uploadPath = resolveUploadPath('cvs')
  return filename ? path.join(uploadPath, filename) : uploadPath
}

/**
 * Get the correct hostname for the current environment
 */
export function getHostname() {
  if (process.env.NODE_ENV === 'development') {
    return 'localhost'
  }
  
  // In production, bind to all interfaces for cPanel compatibility
  return process.env.HOST || '0.0.0.0'
}

/**
 * Get the correct port for the current environment
 */
export function getPort() {
  // cPanel provides PORT environment variable
  const port = process.env.PORT || 3000
  return parseInt(port.toString(), 10)
}

/**
 * Check if running in a subdirectory deployment
 */
export function isSubdirectoryDeployment() {
  return !!(process.env.NEXT_PUBLIC_BASE_PATH || process.env.BASE_PATH)
}

/**
 * Get the base path for subdirectory deployments
 */
export function getBasePath() {
  return process.env.NEXT_PUBLIC_BASE_PATH || process.env.BASE_PATH || ''
}

/**
 * Resolve static file URLs for different deployment scenarios
 */
export function resolveStaticUrl(filePath) {
  const cleanPath = filePath.startsWith('/') ? filePath.slice(1) : filePath
  
  if (process.env.NODE_ENV === 'development') {
    return `/${cleanPath}`
  }
  
  // Handle CDN or asset prefix
  const assetPrefix = process.env.ASSET_PREFIX || getBasePath()
  return assetPrefix ? `${assetPrefix}/${cleanPath}` : `/${cleanPath}`
}

/**
 * Create a safe filename for uploads
 */
export function createSafeFilename(originalName, prefix) {
  // Remove unsafe characters
  const safeName = originalName
    .replace(/[^a-zA-Z0-9.-]/g, '_')
    .replace(/_{2,}/g, '_')
    .toLowerCase()
  
  // Add timestamp to prevent conflicts
  const timestamp = Date.now()
  const extension = path.extname(safeName)
  const nameWithoutExt = path.basename(safeName, extension)
  
  const finalName = prefix 
    ? `${prefix}_${timestamp}_${nameWithoutExt}${extension}`
    : `${timestamp}_${nameWithoutExt}${extension}`
  
  return finalName
}

/**
 * Validate and normalize file paths to prevent directory traversal
 */
export function validateFilePath(filePath, allowedDir) {
  try {
    // Resolve the path
    const resolvedPath = path.resolve(allowedDir, filePath)
    const normalizedAllowedDir = path.resolve(allowedDir)
    
    // Check if the resolved path is within the allowed directory
    if (!resolvedPath.startsWith(normalizedAllowedDir)) {
      return null // Path traversal attempt
    }
    
    return resolvedPath
  } catch (error) {
    return null
  }
}

/**
 * Get environment-specific configuration
 */
export function getEnvironmentConfig() {
  return {
    isDevelopment: process.env.NODE_ENV === 'development',
    isProduction: process.env.NODE_ENV === 'production',
    port: getPort(),
    hostname: getHostname(),
    basePath: getBasePath(),
    baseUrl: process.env.NEXT_PUBLIC_BASE_URL || '',
    uploadDir: resolveUploadPath(),
    cvUploadDir: resolveCVUploadPath(),
    maxFileSize: parseInt(process.env.MAX_FILE_SIZE || '5242880', 10), // 5MB default
    allowedOrigins: process.env.ALLOWED_ORIGINS?.split(',') || [],
  }
}

/**
 * Log environment information for debugging
 */
export function logEnvironmentInfo() {
  const config = getEnvironmentConfig()
  
  console.log('🔧 Environment Configuration:')
  console.log(`   Mode: ${config.isDevelopment ? 'Development' : 'Production'}`)
  console.log(`   Host: ${config.hostname}:${config.port}`)
  console.log(`   Base URL: ${config.baseUrl || 'Not set'}`)
  console.log(`   Base Path: ${config.basePath || 'Root'}`)
  console.log(`   Upload Dir: ${config.uploadDir}`)
  console.log(`   Max File Size: ${(config.maxFileSize / 1024 / 1024).toFixed(1)}MB`)
  console.log(`   App Root: ${getAppRoot()}`)
  
  if (config.allowedOrigins.length > 0) {
    console.log(`   Allowed Origins: ${config.allowedOrigins.join(', ')}`)
  }
}

// All functions are exported individually using ES module syntax above
