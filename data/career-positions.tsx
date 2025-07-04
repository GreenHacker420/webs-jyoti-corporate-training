export interface CareerPosition {
  id: number
  title: string
  department: string
  location: string[]
  type: "Full-time" | "Part-time" | "Contract" | "Freelance"
  experience: string
  description: string
  requirements: string[]
  responsibilities: string[]
  skills: string[]
  salary?: string
  isActive: boolean
  postedDate: string
  applicationDeadline?: string
}

export const careerPositions: CareerPosition[] = [
  {
    id: 1,
    title: "Senior Data Analytics Trainer",
    department: "Training & Development",
    location: ["Delhi NCR", "Gurgaon", "Mumbai", "Bangalore"],
    type: "Full-time",
    experience: "5+ Years",
    description: "Lead comprehensive data analytics training programs for corporate clients. Design curriculum, deliver training sessions, and mentor junior trainers.",
    requirements: [
      "Master's degree in Data Science, Statistics, or related field",
      "5+ years of experience in data analytics training",
      "Expertise in Excel, Power BI, SQL, Python/R",
      "Strong presentation and communication skills",
      "Experience with corporate training programs"
    ],
    responsibilities: [
      "Design and deliver data analytics training programs",
      "Develop training materials and curriculum",
      "Conduct assessments and provide feedback",
      "Mentor junior trainers and team members",
      "Stay updated with latest analytics tools and trends"
    ],
    skills: ["Data Analytics", "Excel", "Power BI", "SQL", "Python", "Training", "Presentation"],
    salary: "₹8-15 LPA",
    isActive: true,
    postedDate: "2024-01-15",
    applicationDeadline: "2024-02-15"
  },
  {
    id: 2,
    title: "Excel Training Specialist",
    department: "Training & Development",
    location: ["Delhi NCR", "Pune", "Hyderabad"],
    type: "Full-time",
    experience: "3+ Years",
    description: "Specialize in advanced Excel training for corporate professionals. Focus on advanced formulas, VBA, and business applications.",
    requirements: [
      "Bachelor's degree in any field",
      "3+ years of Excel training experience",
      "Advanced Excel certification",
      "VBA programming knowledge",
      "Corporate training experience preferred"
    ],
    responsibilities: [
      "Conduct advanced Excel training sessions",
      "Develop Excel-based business solutions",
      "Create training materials and exercises",
      "Provide one-on-one coaching",
      "Support curriculum development"
    ],
    skills: ["Advanced Excel", "VBA", "Financial Modeling", "Training", "Business Analysis"],
    salary: "₹5-10 LPA",
    isActive: true,
    postedDate: "2024-01-10",
    applicationDeadline: "2024-02-10"
  },
  {
    id: 3,
    title: "Power BI Consultant",
    department: "Consulting Services",
    location: ["Remote", "Delhi NCR", "Mumbai"],
    type: "Contract",
    experience: "4+ Years",
    description: "Provide Power BI consulting services to enterprise clients. Design dashboards, implement BI solutions, and train client teams.",
    requirements: [
      "Bachelor's degree in IT, Engineering, or related field",
      "4+ years of Power BI experience",
      "Microsoft Power BI certification",
      "Experience with data modeling and DAX",
      "Client-facing experience"
    ],
    responsibilities: [
      "Design and develop Power BI dashboards",
      "Implement end-to-end BI solutions",
      "Train client teams on Power BI",
      "Provide technical support and maintenance",
      "Document solutions and best practices"
    ],
    skills: ["Power BI", "DAX", "Data Modeling", "SQL", "Azure", "Consulting"],
    salary: "₹6-12 LPA",
    isActive: true,
    postedDate: "2024-01-12",
    applicationDeadline: "2024-02-12"
  },
  {
    id: 4,
    title: "Business Intelligence Trainer",
    department: "Training & Development",
    location: ["Bangalore", "Chennai", "Hyderabad"],
    type: "Full-time",
    experience: "4+ Years",
    description: "Train professionals on business intelligence tools and concepts. Focus on Power BI, Tableau, and data visualization best practices.",
    requirements: [
      "Master's degree in Business, IT, or related field",
      "4+ years of BI training experience",
      "Expertise in multiple BI tools",
      "Strong analytical and presentation skills",
      "Industry certifications preferred"
    ],
    responsibilities: [
      "Deliver BI training programs",
      "Develop comprehensive training materials",
      "Conduct workshops and seminars",
      "Assess trainee progress and provide feedback",
      "Stay current with BI trends and tools"
    ],
    skills: ["Business Intelligence", "Power BI", "Tableau", "Data Visualization", "Training"],
    salary: "₹7-13 LPA",
    isActive: true,
    postedDate: "2024-01-08",
    applicationDeadline: "2024-02-08"
  },
  {
    id: 5,
    title: "Training Content Developer",
    department: "Content Development",
    location: ["Remote", "Delhi NCR"],
    type: "Full-time",
    experience: "2+ Years",
    description: "Create engaging training content for data analytics and Excel programs. Develop e-learning modules, assessments, and interactive materials.",
    requirements: [
      "Bachelor's degree in Education, IT, or related field",
      "2+ years of content development experience",
      "Knowledge of data analytics and Excel",
      "Experience with e-learning platforms",
      "Strong writing and design skills"
    ],
    responsibilities: [
      "Develop training content and materials",
      "Create e-learning modules and assessments",
      "Design interactive learning experiences",
      "Collaborate with subject matter experts",
      "Maintain content quality and accuracy"
    ],
    skills: ["Content Development", "E-learning", "Instructional Design", "Excel", "Data Analytics"],
    salary: "₹4-8 LPA",
    isActive: true,
    postedDate: "2024-01-05",
    applicationDeadline: "2024-02-05"
  }
]

// Helper functions
export const getActivePositions = (): CareerPosition[] => {
  return careerPositions.filter(position => position.isActive)
}

export const getPositionsByLocation = (location: string): CareerPosition[] => {
  return careerPositions.filter(position => 
    position.location.some(loc => 
      loc.toLowerCase().includes(location.toLowerCase())
    )
  )
}

export const getPositionsBySkill = (skill: string): CareerPosition[] => {
  return careerPositions.filter(position => 
    position.skills.some(s => 
      s.toLowerCase().includes(skill.toLowerCase())
    )
  )
}

export const getPositionById = (id: number): CareerPosition | undefined => {
  return careerPositions.find(position => position.id === id)
}

export const getAllSkills = (): string[] => {
  const skills = new Set<string>()
  careerPositions.forEach(position => {
    position.skills.forEach(skill => skills.add(skill))
  })
  return Array.from(skills).sort()
}

export const getAllDepartments = (): string[] => {
  const departments = new Set<string>()
  careerPositions.forEach(position => {
    departments.add(position.department)
  })
  return Array.from(departments).sort()
}

export const getAllCareerLocations = (): string[] => {
  const locations = new Set<string>()
  careerPositions.forEach(position => {
    position.location.forEach(location => locations.add(location))
  })
  return Array.from(locations).sort()
}
