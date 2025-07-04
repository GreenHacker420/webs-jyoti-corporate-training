export interface Skill {
  id: number
  name: string
  category: string
  description?: string
  isPopular?: boolean
}

export const skillsData: Skill[] = [
  // Data Analytics Skills
  {
    id: 1,
    name: "Data Analytics",
    category: "Analytics",
    description: "Comprehensive data analysis and interpretation",
    isPopular: true
  },
  {
    id: 2,
    name: "Statistical Analysis",
    category: "Analytics",
    description: "Statistical methods and data interpretation",
    isPopular: true
  },
  {
    id: 3,
    name: "Data Visualization",
    category: "Analytics",
    description: "Creating visual representations of data",
    isPopular: true
  },
  {
    id: 4,
    name: "Business Intelligence",
    category: "Analytics",
    description: "BI tools and strategic data insights",
    isPopular: true
  },
  {
    id: 5,
    name: "Data Mining",
    category: "Analytics",
    description: "Extracting patterns from large datasets"
  },
  {
    id: 6,
    name: "Predictive Analytics",
    category: "Analytics",
    description: "Forecasting and predictive modeling"
  },

  // Excel Skills
  {
    id: 7,
    name: "Advanced Excel",
    category: "Excel",
    description: "Advanced Excel functions and features",
    isPopular: true
  },
  {
    id: 8,
    name: "Excel VBA",
    category: "Excel",
    description: "Visual Basic for Applications programming",
    isPopular: true
  },
  {
    id: 9,
    name: "Excel Macros",
    category: "Excel",
    description: "Automation using Excel macros"
  },
  {
    id: 10,
    name: "Financial Modeling",
    category: "Excel",
    description: "Financial analysis and modeling in Excel",
    isPopular: true
  },
  {
    id: 11,
    name: "Excel Dashboards",
    category: "Excel",
    description: "Creating interactive Excel dashboards"
  },
  {
    id: 12,
    name: "Pivot Tables",
    category: "Excel",
    description: "Advanced pivot table analysis"
  },

  // Power BI Skills
  {
    id: 13,
    name: "Power BI",
    category: "Business Intelligence",
    description: "Microsoft Power BI development and analysis",
    isPopular: true
  },
  {
    id: 14,
    name: "DAX",
    category: "Business Intelligence",
    description: "Data Analysis Expressions for Power BI",
    isPopular: true
  },
  {
    id: 15,
    name: "Power Query",
    category: "Business Intelligence",
    description: "Data transformation and preparation"
  },
  {
    id: 16,
    name: "Power BI Service",
    category: "Business Intelligence",
    description: "Power BI cloud service and collaboration"
  },

  // Database Skills
  {
    id: 17,
    name: "SQL",
    category: "Database",
    description: "Structured Query Language for databases",
    isPopular: true
  },
  {
    id: 18,
    name: "MySQL",
    category: "Database",
    description: "MySQL database management"
  },
  {
    id: 19,
    name: "PostgreSQL",
    category: "Database",
    description: "PostgreSQL database management"
  },
  {
    id: 20,
    name: "Oracle",
    category: "Database",
    description: "Oracle database management"
  },

  // Programming Skills
  {
    id: 21,
    name: "Python",
    category: "Programming",
    description: "Python programming for data analysis",
    isPopular: true
  },
  {
    id: 22,
    name: "R Programming",
    category: "Programming",
    description: "R language for statistical computing"
  },
  {
    id: 23,
    name: "JavaScript",
    category: "Programming",
    description: "JavaScript for web development and data viz"
  },

  // Visualization Tools
  {
    id: 24,
    name: "Tableau",
    category: "Visualization",
    description: "Tableau data visualization platform",
    isPopular: true
  },
  {
    id: 25,
    name: "QlikView",
    category: "Visualization",
    description: "QlikView business intelligence platform"
  },
  {
    id: 26,
    name: "D3.js",
    category: "Visualization",
    description: "JavaScript library for data visualization"
  },

  // Cloud & Big Data
  {
    id: 27,
    name: "Azure",
    category: "Cloud",
    description: "Microsoft Azure cloud platform"
  },
  {
    id: 28,
    name: "AWS",
    category: "Cloud",
    description: "Amazon Web Services cloud platform"
  },
  {
    id: 29,
    name: "Google Cloud",
    category: "Cloud",
    description: "Google Cloud Platform services"
  },
  {
    id: 30,
    name: "Hadoop",
    category: "Big Data",
    description: "Apache Hadoop big data framework"
  },
  {
    id: 31,
    name: "Spark",
    category: "Big Data",
    description: "Apache Spark data processing engine"
  },

  // Soft Skills
  {
    id: 32,
    name: "Training & Development",
    category: "Soft Skills",
    description: "Training delivery and curriculum development",
    isPopular: true
  },
  {
    id: 33,
    name: "Presentation Skills",
    category: "Soft Skills",
    description: "Effective presentation and communication",
    isPopular: true
  },
  {
    id: 34,
    name: "Project Management",
    category: "Soft Skills",
    description: "Project planning and execution"
  },
  {
    id: 35,
    name: "Team Leadership",
    category: "Soft Skills",
    description: "Leading and managing teams"
  },
  {
    id: 36,
    name: "Client Management",
    category: "Soft Skills",
    description: "Managing client relationships and expectations"
  },

  // Specialized Skills
  {
    id: 37,
    name: "MIS Reporting",
    category: "Reporting",
    description: "Management Information Systems reporting",
    isPopular: true
  },
  {
    id: 38,
    name: "KPI Development",
    category: "Reporting",
    description: "Key Performance Indicator design and tracking"
  },
  {
    id: 39,
    name: "Data Governance",
    category: "Management",
    description: "Data quality and governance practices"
  },
  {
    id: 40,
    name: "ETL Processes",
    category: "Data Engineering",
    description: "Extract, Transform, Load data processes"
  }
]

// Helper functions
export const getSkillsByCategory = (category: string): Skill[] => {
  return skillsData.filter(skill => skill.category === category)
}

export const getPopularSkills = (): Skill[] => {
  return skillsData.filter(skill => skill.isPopular)
}

export const getAllSkillCategories = (): string[] => {
  const categories = new Set<string>()
  skillsData.forEach(skill => {
    categories.add(skill.category)
  })
  return Array.from(categories).sort()
}

export const searchSkills = (query: string): Skill[] => {
  const lowercaseQuery = query.toLowerCase()
  return skillsData.filter(skill => 
    skill.name.toLowerCase().includes(lowercaseQuery) ||
    skill.description?.toLowerCase().includes(lowercaseQuery) ||
    skill.category.toLowerCase().includes(lowercaseQuery)
  )
}

export const getSkillById = (id: number): Skill | undefined => {
  return skillsData.find(skill => skill.id === id)
}

export const getSkillsByIds = (ids: number[]): Skill[] => {
  return skillsData.filter(skill => ids.includes(skill.id))
}
