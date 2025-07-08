# Next.js Custom Server Deployment Guide for cPanel (ES Modules)

This guide will help you deploy your Next.js application with a modern ES modules custom server to cPanel hosting that supports Node.js.

## ✅ What's Been Configured

Your application now includes:
- ✅ **Modern ES modules** (no CommonJS, `"type": "module"` in package.json)
- ✅ **Express.js custom server** with security middleware (Helmet, CORS, compression)
- ✅ **Cross-platform scripts** using cross-env for Windows/Linux compatibility
- ✅ **Path resolution utilities** for shared hosting environment
- ✅ **Health check endpoints** (`/health`, `/api/status`) for monitoring
- ✅ **Automated deployment scripts** with validation and packaging
- ✅ **Proper error handling** and graceful shutdown
- ✅ **File upload handling** for CV submissions with security validation
- ✅ **Security headers** and CORS configuration
- ✅ **Zero vulnerabilities** (all dependencies updated and secure)
- ✅ **Comprehensive documentation** with troubleshooting guides

## Prerequisites

### 1. Hosting Requirements
- ✅ cPanel hosting with Node.js support
- ✅ Access to "Setup Node.js App" feature in cPanel
- ✅ SSH access (recommended but not required)
- ✅ File Manager access in cPanel

### 2. Local Development Requirements
- Node.js (v18 or higher recommended)
- npm or yarn package manager

## 🚀 Automated Deployment Process (Recommended)

### Quick Deployment

The fastest way to deploy is using the automated deployment script:

```bash
# Complete automated deployment
npm run deploy:full

# This will:
# 1. Validate your environment and dependencies
# 2. Build the production application
# 3. Create deployment package with only necessary files
# 4. Generate deployment-package.zip ready for upload
# 5. Provide step-by-step upload instructions
```

### Individual Deployment Steps

If you prefer to run steps individually:

```bash
# 1. Validate deployment readiness
npm run deploy:validate

# 2. Create deployment package
npm run deploy:package

# 3. Test locally before deployment
npm run deploy:test
```

## 📋 Manual Deployment Process

### Step 1: Validate and Prepare

First, ensure your application is ready for deployment:

```bash
# Validate environment and dependencies
npm run deploy:validate

# If validation passes, create deployment package
npm run deploy:package
```

This creates `deployment-package.zip` with all necessary files.

### Step 2: Prepare Files for Upload

1. **Build your application:**
   ```bash
   npm run build
   ```

2. **Create deployment package:**
   - Include ALL files and folders EXCEPT:
     - `node_modules/` (will be installed on server)
     - `.git/` (version control)
     - `.next/cache/` (build cache)
     - `README.md` (optional)
     - `.gitignore` (optional)
     - `.env.local` (local environment variables)

3. **Essential files to include:**
   - `server.js` ✅
   - `package.json` ✅
   - `package-lock.json` ✅
   - `next.config.js` ✅
   - `.next/` folder (build output) ✅
   - `public/` folder ✅
   - `app/` folder ✅
   - `components/` folder ✅
   - `lib/` folder ✅
   - `data/` folder ✅
   - All other project folders ✅

4. **Create ZIP file** of all selected files and folders

### Step 3: Upload to cPanel

1. **Log into your cPanel**
2. **Open File Manager**
3. **Navigate to your domain's root folder** (usually `public_html` or `www`)
4. **Upload and extract the ZIP file**
5. **Verify all files are in the correct location**

### Step 4: Setup Node.js Application

1. **In cPanel, go to Software section**
2. **Click "Setup Node.js App"**
3. **Click "+ Create Application"**
4. **Configure the application:**
   - **Node.js version:** Select latest available (18+ recommended)
   - **Application mode:** Production
   - **Application root:** `/public_html` (or your domain folder)
   - **Application URL:** Your domain name
   - **Application startup file:** `server.js`

5. **Click "CREATE"**

### Step 5: Install Dependencies

1. **After creating the app, STOP it temporarily**
2. **Scroll down to "Detected configuration files"**
3. **Click "Run NPM Install"** (this installs all dependencies from package.json)
4. **Wait for installation to complete**

### Step 6: Configure Environment Variables (Optional)

If your app uses environment variables:

1. **In the Node.js app settings**
2. **Add environment variables:**
   - `NODE_ENV=production`
   - Any other custom variables your app needs

### Step 7: Start the Application

1. **Click "START APP"**
2. **Wait for the application to start**
3. **Check the status - should show "Running"**

### Step 8: Test Your Deployment

1. **Open your domain in a browser**
2. **Test all functionality:**
   - ✅ Homepage loads
   - ✅ Navigation works
   - ✅ API routes work (career applications, file uploads)
   - ✅ All pages load correctly
   - ✅ Forms submit properly

## Troubleshooting

### Common Issues and Solutions

#### 1. Application Won't Start
- **Check Node.js version compatibility**
- **Verify server.js is in the root directory**
- **Check application logs in cPanel**

#### 2. 404 Errors on Pages
- **Ensure .next folder was uploaded**
- **Check file permissions (755 for folders, 644 for files)**
- **Verify all route files are present**

#### 3. API Routes Not Working
- **Confirm app/api folder structure is intact**
- **Check server logs for errors**
- **Verify custom server is handling requests properly**

#### 4. Images Not Loading
- **Check public folder was uploaded**
- **Verify image paths are correct**
- **Ensure file permissions are set correctly**

#### 5. Build Errors
- **Run `npm run build` locally first**
- **Fix any TypeScript/ESLint errors**
- **Ensure all dependencies are in package.json**

### Checking Logs

1. **In cPanel Node.js App settings**
2. **Click on your application**
3. **View "Log files" section**
4. **Check for error messages**

### Restarting the Application

If you need to restart:
1. **Stop the application**
2. **Make any necessary changes**
3. **Start the application again**

## File Structure After Deployment

```
public_html/
├── server.js                 # Custom server file
├── package.json             # Dependencies and scripts
├── package-lock.json        # Dependency lock file
├── next.config.js           # Next.js configuration
├── .next/                   # Build output (generated)
├── public/                  # Static assets
├── app/                     # App router pages
│   ├── api/                 # API routes
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Homepage
├── components/              # React components
├── lib/                     # Utility functions
├── data/                    # Static data
└── node_modules/            # Dependencies (installed by cPanel)
```

## Performance Tips

1. **Enable compression** in next.config.js (already configured)
2. **Use CDN** for static assets if available
3. **Monitor application performance** through cPanel
4. **Keep dependencies updated**

## Security Considerations

1. **Never upload .env files** with sensitive data
2. **Use environment variables** in cPanel for secrets
3. **Keep Node.js version updated**
4. **Monitor application logs** for security issues

## 🔍 Health Monitoring & Debugging

### Health Check Endpoints

#### `/health` - Server Health
Returns comprehensive server status:
```json
{
  "status": "healthy",
  "timestamp": "2025-07-08T15:30:00.000Z",
  "environment": "production",
  "uptime": 3600.5,
  "memory": {
    "rss": 94179328,
    "heapTotal": 46448640,
    "heapUsed": 43643776
  },
  "version": "v18.17.0"
}
```

#### `/api/status` - Application Status
Returns application-specific information:
```json
{
  "api": "online",
  "timestamp": "2025-07-08T15:30:00.000Z",
  "version": "0.1.1"
}
```

### Log Monitoring
- **cPanel Logs**: Check "Error Logs" in cPanel
- **Application Logs**: Monitor Node.js app logs in cPanel
- **Access Logs**: Review visitor access patterns

## 🚨 Troubleshooting

### Common Issues

1. **Application won't start**
   - Check Node.js version compatibility (18+ required)
   - Verify startup file is set to `server.js`
   - Check environment variables are configured
   - Review error logs in cPanel

2. **404 errors on routes**
   - Ensure all files were uploaded correctly
   - Check file permissions (755 for directories, 644 for files)
   - Verify .htaccess configuration
   - Test with direct server port access

3. **API routes not working**
   - Check server logs in cPanel Node.js app section
   - Verify custom server is handling requests properly
   - Test health endpoint: `/health`
   - Check CORS configuration for cross-origin requests

4. **File upload issues**
   - Check uploads directory permissions (755 with write access)
   - Verify file size limits in environment variables
   - Check server logs for specific error messages
   - Test with small files first

5. **Performance issues**
   - Monitor memory usage via `/health` endpoint
   - Check server resources in cPanel
   - Review access logs for traffic patterns
   - Consider upgrading hosting plan if needed

### Debug Mode
Enable detailed logging by setting:
```
NODE_ENV=development
DEBUG=true
```

## Support

If you encounter issues:
1. **Check cPanel documentation** for Node.js apps
2. **Contact your hosting provider** for Node.js support
3. **Review application logs** for specific error messages
4. **Test locally first** to isolate deployment issues
5. **Use health endpoints** to diagnose server status
6. **Check the troubleshooting section** in README.md

---

**Note:** This deployment method requires Node.js support from your hosting provider. If your cPanel doesn't have Node.js support, you'll need to use the static export method instead.
