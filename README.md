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
- Node.js 18.0 or higher
- npm package manager

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
npm run build
npm run start
```

## 📁 Project Structure

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

## 📚 Documentation

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
