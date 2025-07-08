# cPanel Deployment Checklist

## Pre-deployment
- [ ] Run `npm run build:production` locally to test build
- [ ] Run `npm run deploy:test` to test production server locally
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
