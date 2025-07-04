# Installation Guide

## 🚀 Quick Start

This guide will help you set up the Webs Jyoti platform locally for development or production deployment.

## Prerequisites

### System Requirements
- **Node.js**: Version 18.0 or higher
- **npm**: Version 8.0 or higher (comes with Node.js)
- **Git**: For version control
- **Modern Browser**: Chrome 90+, Firefox 88+, Safari 14+, or Edge 90+

### Development Tools (Recommended)
- **VS Code**: With TypeScript and Tailwind CSS extensions
- **Git Client**: GitHub Desktop or command line
- **Terminal**: Command line interface

## Installation Steps

### 1. Clone the Repository
```bash
git clone <repository-url>
cd websjyoti
```

### 2. Install Dependencies
```bash
npm install
```

This will install all required packages including:
- Next.js 15 and React 19
- TypeScript and type definitions
- Tailwind CSS and UI components
- Form handling and validation libraries
- Image processing and security utilities

### 3. Environment Setup
Create a `.env.local` file in the root directory:

```bash
# .env.local
NEXT_PUBLIC_BASE_URL=http://localhost:3000
UPLOAD_DIR=./uploads
EMAIL_SERVICE_API_KEY=your_email_api_key
DATABASE_URL=your_database_connection_string
```

### 4. Create Upload Directories
```bash
mkdir -p uploads/cvs
chmod 755 uploads
```

### 5. Start Development Server
```bash
npm run dev
```

The application will be available at [http://localhost:3000](http://localhost:3000)

## Development Commands

### Available Scripts
```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Run linting
npm run lint

# Run type checking
npm run type-check

# Clean build files
npm run clean
```

### Development Workflow
1. **Start Development**: `npm run dev`
2. **Make Changes**: Edit files in `app/`, `components/`, or `lib/`
3. **Hot Reload**: Changes automatically reflect in browser
4. **Test Features**: Use the application locally
5. **Build & Test**: `npm run build` before committing

## Production Deployment

### Build Optimization
```bash
# Create optimized production build
npm run build

# Test production build locally
npm run start
```

### Environment Variables for Production
```bash
# .env.production
NEXT_PUBLIC_BASE_URL=https://yourdomain.com
UPLOAD_DIR=/var/uploads/cvs
EMAIL_SERVICE_API_KEY=production_email_key
DATABASE_URL=production_database_url
ADMIN_USERNAME=admin
ADMIN_PASSWORD=secure_password
```

### Deployment Platforms

#### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Configure environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

#### Other Platforms
- **Netlify**: Configure build command as `npm run build`
- **AWS Amplify**: Use the provided build settings
- **DigitalOcean**: Deploy using App Platform
- **Railway**: Connect repository and deploy

## Database Setup (Optional)

### For Production Use
If you plan to store applications in a database:

```bash
# Install database dependencies
npm install prisma @prisma/client

# Initialize Prisma
npx prisma init

# Generate database schema
npx prisma generate

# Run migrations
npx prisma migrate dev
```

### Database Schema Example
```sql
-- Applications table
CREATE TABLE applications (
  id VARCHAR(255) PRIMARY KEY,
  full_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(20) NOT NULL,
  linkedin_profile VARCHAR(500),
  current_location VARCHAR(100) NOT NULL,
  years_of_experience INTEGER NOT NULL,
  skills JSON NOT NULL,
  positions_applied_for JSON NOT NULL,
  cv_filename VARCHAR(255),
  status ENUM('pending', 'reviewing', 'shortlisted', 'rejected', 'hired') DEFAULT 'pending',
  applied_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  notes TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

## File Upload Configuration

### Local Development
Files are stored in the `uploads/cvs/` directory by default.

### Production Setup
1. **Create Upload Directory**:
   ```bash
   sudo mkdir -p /var/uploads/cvs
   sudo chown www-data:www-data /var/uploads/cvs
   sudo chmod 755 /var/uploads/cvs
   ```

2. **Configure Nginx** (if using):
   ```nginx
   location /uploads/ {
       alias /var/uploads/;
       expires 1y;
       add_header Cache-Control "public, immutable";
   }
   ```

3. **Cloud Storage** (recommended for production):
   - AWS S3
   - Google Cloud Storage
   - Azure Blob Storage

## Security Configuration

### Image Protection
The image watermarking system is automatically enabled. To customize:

```typescript
// lib/watermark.ts
const watermarkOptions = {
  text: 'Your Company Name',
  opacity: 0.3,
  fontSize: 16,
  color: '#ffffff'
}
```

### File Upload Security
- File type validation is enforced
- File size limits are set to 5MB
- Virus scanning can be added for production

### Admin Access
Default admin credentials (change in production):
- Username: `admin`
- Password: `websjyoti2024`

## Troubleshooting

### Common Issues

#### Port Already in Use
```bash
# Kill process on port 3000
npx kill-port 3000

# Or use different port
npm run dev -- -p 3001
```

#### Module Not Found Errors
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

#### Build Errors
```bash
# Clear Next.js cache
rm -rf .next
npm run build
```

#### TypeScript Errors
```bash
# Run type checking
npm run type-check

# Fix common issues
npm run lint --fix
```

### Performance Issues
- **Slow Development**: Disable source maps in `next.config.js`
- **Large Bundle**: Analyze with `npm run analyze`
- **Memory Issues**: Increase Node.js memory limit

### File Upload Issues
- **Permission Denied**: Check directory permissions
- **File Too Large**: Verify size limits in configuration
- **Upload Fails**: Check network connectivity and server logs

## Development Tips

### VS Code Extensions
Install these extensions for better development experience:
- TypeScript and JavaScript Language Features
- Tailwind CSS IntelliSense
- ES7+ React/Redux/React-Native snippets
- Auto Rename Tag
- Prettier - Code formatter

### Git Workflow
```bash
# Create feature branch
git checkout -b feature/new-feature

# Make changes and commit
git add .
git commit -m "Add new feature"

# Push and create pull request
git push origin feature/new-feature
```

### Code Quality
- Use TypeScript for type safety
- Follow ESLint rules
- Write descriptive commit messages
- Test on multiple browsers
- Optimize images before adding

## Support

### Getting Help
- **Documentation**: Check the `docs/` directory
- **Issues**: Create GitHub issues for bugs
- **Questions**: Contact the development team
- **Community**: Join discussions in repository

### Reporting Bugs
When reporting issues, include:
- Operating system and version
- Node.js and npm versions
- Browser and version
- Steps to reproduce
- Error messages and logs
- Screenshots if applicable

---

**Need additional help?** Contact the development team or check the [troubleshooting guide](./maintenance/troubleshooting.md).

**Last Updated**: January 2024
