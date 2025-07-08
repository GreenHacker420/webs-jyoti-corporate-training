import express from 'express'
import next from 'next'
import compression from 'compression'
import helmet from 'helmet'
import cors from 'cors'
import morgan from 'morgan'
import path from 'path'
import fs from 'fs'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

// ES module compatibility
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// Import path resolution utilities
import {
  getPort,
  getHostname,
  getEnvironmentConfig,
  logEnvironmentInfo,
  resolveUploadPath,
  validateFilePath,
  createSafeFilename
} from './lib/path-resolver.js'

// Environment configuration
const dev = process.env.NODE_ENV !== 'production'
const port = getPort()
const hostname = getHostname()

// Initialize Next.js app
const nextApp = next({ dev, hostname, port })
const handle = nextApp.getRequestHandler()

// Create Express app
const app = express()

console.log(`🚀 Starting Next.js server in ${dev ? 'development' : 'production'} mode...`)
console.log(`📡 Server will bind to: ${hostname}:${port}`)

// Prepare Next.js and start server
nextApp.prepare().then(() => {
  // Security middleware
  app.use(helmet({
    contentSecurityPolicy: false, // Disable CSP for Next.js compatibility
    crossOriginEmbedderPolicy: false
  }))

  // CORS configuration for cPanel hosting
  app.use(cors({
    origin: dev ? true : [
      process.env.NEXT_PUBLIC_BASE_URL,
      process.env.ALLOWED_ORIGINS?.split(',') || []
    ].flat().filter(Boolean),
    credentials: true
  }))

  // Compression middleware for better performance
  app.use(compression())

  // Request logging
  if (dev) {
    app.use(morgan('dev'))
  } else {
    app.use(morgan('combined'))
  }

  // Body parsing middleware
  app.use(express.json({ limit: '10mb' }))
  app.use(express.urlencoded({ extended: true, limit: '10mb' }))

  // Health check endpoint for cPanel monitoring
  app.get('/health', (req, res) => {
    res.status(200).json({
      status: 'healthy',
      timestamp: new Date().toISOString(),
      environment: process.env.NODE_ENV || 'development',
      uptime: process.uptime(),
      memory: process.memoryUsage(),
      version: process.version
    })
  })

  // API status endpoint
  app.get('/api/status', (req, res) => {
    res.status(200).json({
      api: 'online',
      timestamp: new Date().toISOString(),
      version: JSON.parse(fs.readFileSync('./package.json', 'utf8')).version
    })
  })

  // Serve uploaded files (CVs) with proper security
  app.use('/uploads', (req, res, next) => {
    // Add authentication check here in production
    // For now, we'll serve files directly
    const filePath = path.join(__dirname, 'uploads', req.path)

    // Security check: prevent directory traversal
    if (req.path.includes('..') || !filePath.startsWith(path.join(__dirname, 'uploads'))) {
      return res.status(403).json({ error: 'Access denied' })
    }

    // Check if file exists
    if (!fs.existsSync(filePath)) {
      return res.status(404).json({ error: 'File not found' })
    }

    // Set appropriate headers
    res.setHeader('Content-Disposition', 'attachment')
    next()
  }, express.static(path.join(__dirname, 'uploads')))

  // Handle all other requests with Next.js
  app.use((req, res) => {
    return handle(req, res)
  })

  // Error handling middleware
  app.use((err, req, res, next) => {
    console.error('Server error:', err)

    if (res.headersSent) {
      return next(err)
    }

    res.status(500).json({
      error: dev ? err.message : 'Internal server error',
      timestamp: new Date().toISOString()
    })
  })

  // Start the server
  const server = app.listen(port, hostname, (err) => {
    if (err) {
      console.error('❌ Failed to start server:', err)
      process.exit(1)
    }

    console.log(`✅ Server ready on http://${hostname}:${port}`)
    console.log(`🌍 Environment: ${process.env.NODE_ENV || 'development'}`)
    console.log(`📁 Working directory: ${process.cwd()}`)

    if (dev) {
      console.log(`🔧 Development mode - Hot reloading enabled`)
    } else {
      console.log(`🚀 Production mode - Optimized for performance`)
    }
  })

  // Graceful shutdown handling
  const gracefulShutdown = (signal) => {
    console.log(`\n${signal} received, shutting down gracefully...`)

    server.close(() => {
      console.log('✅ HTTP server closed')

      // Close Next.js app
      nextApp.close().then(() => {
        console.log('✅ Next.js app closed')
        process.exit(0)
      }).catch((err) => {
        console.error('❌ Error closing Next.js app:', err)
        process.exit(1)
      })
    })

    // Force close after 10 seconds
    setTimeout(() => {
      console.error('❌ Could not close connections in time, forcefully shutting down')
      process.exit(1)
    }, 10000)
  }

  // Handle shutdown signals
  process.on('SIGTERM', () => gracefulShutdown('SIGTERM'))
  process.on('SIGINT', () => gracefulShutdown('SIGINT'))

  // Handle uncaught exceptions
  process.on('uncaughtException', (err) => {
    console.error('❌ Uncaught Exception:', err)
    gracefulShutdown('UNCAUGHT_EXCEPTION')
  })

  process.on('unhandledRejection', (reason, promise) => {
    console.error('❌ Unhandled Rejection at:', promise, 'reason:', reason)
    gracefulShutdown('UNHANDLED_REJECTION')
  })

}).catch((err) => {
  console.error('❌ Failed to prepare Next.js app:', err)
  process.exit(1)
})
