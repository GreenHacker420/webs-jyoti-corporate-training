#!/usr/bin/env node

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
  console.log(`Server process exited with code ${code}`)
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
