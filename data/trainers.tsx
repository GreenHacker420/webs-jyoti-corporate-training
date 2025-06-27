export interface Trainer {
  id: number
  name: string
  locations: string[]
  title: string
  experience: string
  specialization: string
  certifications: string[]
  bio: string
  email?: string
  linkedin?: string
  image?: string
}

export const trainersData: Trainer[] = [
  {
    id: 1,
    name: "Hirdesh Bhardwaj",
    locations: ["Delhi NCR", "Gurgaon", "Delhi", "Noida", "Ghaziabad", "Meerut", "KOTA"],
    title: "Senior Data Analytics Trainer & Regional Head",
    experience: "15+ Years",
    specialization: "Data Analytics, Advanced Excel, Power BI",
    certifications: ["Microsoft Certified", "Google Analytics", "Power BI Expert"],
    bio: "Regional head covering Delhi NCR and surrounding areas with expertise in comprehensive data analytics training.",
  },
  {
    id: 2,
    name: "Ujjwal Garg",
    locations: ["AGRA"],
    title: "Data Analytics Specialist",
    experience: "12+ Years",
    specialization: "Advanced Excel, MIS Reporting, Data Visualization",
    certifications: ["Microsoft Excel Expert", "Data Analytics Certified"],
    bio: "Specialized in advanced Excel techniques and MIS reporting for corporate clients in Agra region.",
  },
  {
    id: 3,
    name: "Kishore Kumar",
    locations: ["RAIPUR"],
    title: "Business Intelligence Trainer",
    experience: "10+ Years",
    specialization: "Power BI, Business Intelligence, Dashboard Design",
    certifications: ["Power BI Certified", "Business Intelligence", "Data Visualization"],
    bio: "Expert in Power BI and business intelligence solutions serving Chhattisgarh region.",
  },
  {
    id: 4,
    name: "Akshat Dubey",
    locations: ["BHOPAL"],
    title: "Excel & Analytics Expert",
    experience: "11+ Years",
    specialization: "Advanced Excel, Statistical Analysis, Reporting",
    certifications: ["Excel Expert", "Statistical Analysis", "Data Reporting"],
    bio: "Comprehensive Excel training specialist covering Madhya Pradesh region with focus on statistical analysis.",
  },
  {
    id: 5,
    name: "Rohit Sharma",
    locations: ["JAIPUR"],
    title: "Power BI & Data Visualization Expert",
    experience: "9+ Years",
    specialization: "Power BI, Data Visualization, Business Analytics",
    certifications: ["Power BI Certified", "Data Visualization", "Business Analytics"],
    bio: "Power BI specialist serving Rajasthan region with expertise in creating compelling data visualizations.",
  },
  {
    id: 6,
    name: "Priya Singh",
    locations: ["LUCKNOW"],
    title: "Advanced Excel Trainer",
    experience: "8+ Years",
    specialization: "Advanced Excel, Financial Modeling, Data Analysis",
    certifications: ["Microsoft Excel Expert", "Financial Modeling", "Data Analysis"],
    bio: "Excel training expert specializing in financial modeling and advanced data analysis techniques for UP region.",
  },
  {
    id: 7,
    name: "Amit Kumar",
    locations: ["PATNA"],
    title: "Data Analytics & MIS Expert",
    experience: "10+ Years",
    specialization: "Data Analytics, MIS Reporting, Excel Automation",
    certifications: ["Data Analytics Certified", "MIS Expert", "Excel Automation"],
    bio: "Comprehensive data analytics trainer serving Bihar region with focus on MIS reporting and automation.",
  },
  {
    id: 8,
    name: "Neha Gupta",
    locations: ["CHANDIGARH"],
    title: "Business Intelligence Consultant",
    experience: "12+ Years",
    specialization: "Business Intelligence, Power BI, Data Strategy",
    certifications: ["BI Consultant", "Power BI Expert", "Data Strategy"],
    bio: "Business intelligence consultant covering Punjab and Haryana regions with strategic data implementation expertise.",
  },
  {
    id: 9,
    name: "Rajesh Patel",
    locations: ["AHMEDABAD"],
    title: "Excel & Power BI Trainer",
    experience: "11+ Years",
    specialization: "Advanced Excel, Power BI, Dashboard Development",
    certifications: ["Excel Expert", "Power BI Certified", "Dashboard Development"],
    bio: "Dual expertise in Excel and Power BI serving Gujarat region with focus on dashboard development.",
  },
  {
    id: 10,
    name: "Sunita Yadav",
    locations: ["PUNE"],
    title: "Data Visualization Specialist",
    experience: "9+ Years",
    specialization: "Data Visualization, Power BI, Analytics Reporting",
    certifications: ["Data Visualization Expert", "Power BI Certified", "Analytics Reporting"],
    bio: "Data visualization specialist serving Maharashtra region with expertise in creating impactful analytical reports.",
  },
  {
    id: 11,
    name: "Vikram Singh",
    locations: ["INDORE"],
    title: "Advanced Analytics Trainer",
    experience: "13+ Years",
    specialization: "Advanced Analytics, Statistical Analysis, Excel Modeling",
    certifications: ["Advanced Analytics", "Statistical Analysis", "Excel Modeling"],
    bio: "Advanced analytics trainer covering central India with deep expertise in statistical analysis and modeling.",
  },
  {
    id: 12,
    name: "Kavita Sharma",
    locations: ["KOLKATA"],
    title: "Excel & Data Analysis Expert",
    experience: "10+ Years",
    specialization: "Excel Mastery, Data Analysis, Financial Reporting",
    certifications: ["Excel Master", "Data Analysis", "Financial Reporting"],
    bio: "Excel mastery trainer serving West Bengal region with specialization in financial data analysis and reporting.",
  },
  {
    id: 13,
    name: "Manoj Kumar",
    locations: ["HYDERABAD"],
    title: "Power BI & Analytics Consultant",
    experience: "14+ Years",
    specialization: "Power BI, Business Analytics, Data Strategy",
    certifications: ["Power BI Expert", "Business Analytics", "Data Strategy Consultant"],
    bio: "Senior Power BI consultant serving Telangana and Andhra Pradesh with comprehensive business analytics expertise.",
  },
  {
    id: 14,
    name: "Deepika Reddy",
    locations: ["BANGALORE"],
    title: "Data Science & Analytics Trainer",
    experience: "11+ Years",
    specialization: "Data Science, Advanced Analytics, Machine Learning Basics",
    certifications: ["Data Science", "Advanced Analytics", "ML Fundamentals"],
    bio: "Data science trainer serving Karnataka region with expertise in advanced analytics and machine learning fundamentals.",
  },
  {
    id: 15,
    name: "Arjun Nair",
    locations: ["KOCHI"],
    title: "Excel & BI Solutions Expert",
    experience: "9+ Years",
    specialization: "Excel Solutions, Business Intelligence, Data Integration",
    certifications: ["Excel Solutions", "BI Expert", "Data Integration"],
    bio: "Excel and BI solutions expert serving Kerala region with focus on data integration and business intelligence.",
  },
  {
    id: 16,
    name: "Pooja Agarwal",
    locations: ["SURAT"],
    title: "Data Analytics & Reporting Specialist",
    experience: "8+ Years",
    specialization: "Data Analytics, Advanced Reporting, Excel Automation",
    certifications: ["Data Analytics", "Advanced Reporting", "Excel Automation"],
    bio: "Data analytics specialist serving Gujarat region with expertise in advanced reporting and Excel automation solutions.",
  },
  {
    id: 17,
    name: "Ravi Tiwari",
    locations: ["KANPUR"],
    title: "MIS & Data Management Expert",
    experience: "12+ Years",
    specialization: "MIS Development, Data Management, Excel Solutions",
    certifications: ["MIS Expert", "Data Management", "Excel Solutions"],
    bio: "MIS and data management expert serving Uttar Pradesh region with comprehensive Excel solutions expertise.",
  },
  {
    id: 18,
    name: "Shreya Joshi",
    locations: ["NASHIK"],
    title: "Power BI & Data Visualization Trainer",
    experience: "7+ Years",
    specialization: "Power BI, Data Visualization, Interactive Dashboards",
    certifications: ["Power BI Certified", "Data Visualization", "Dashboard Design"],
    bio: "Power BI trainer serving Maharashtra region with specialization in interactive dashboard design and data visualization.",
  },
  {
    id: 19,
    name: "Ankit Verma",
    locations: ["VARANASI"],
    title: "Excel & Analytics Consultant",
    experience: "10+ Years",
    specialization: "Excel Consulting, Data Analytics, Business Reporting",
    certifications: ["Excel Consultant", "Data Analytics", "Business Reporting"],
    bio: "Excel and analytics consultant serving eastern Uttar Pradesh with expertise in business reporting and data analytics.",
  },
  {
    id: 20,
    name: "Meera Patel",
    locations: ["VADODARA"],
    title: "Business Analytics & Excel Trainer",
    experience: "9+ Years",
    specialization: "Business Analytics, Advanced Excel, Data Modeling",
    certifications: ["Business Analytics", "Advanced Excel", "Data Modeling"],
    bio: "Business analytics trainer serving Gujarat region with advanced Excel and data modeling expertise.",
  },
  {
    id: 21,
    name: "Sanjay Gupta",
    locations: ["DEHRADUN"],
    title: "Data Analytics & Excel Expert",
    experience: "11+ Years",
    specialization: "Data Analytics, Excel Mastery, Statistical Analysis",
    certifications: ["Data Analytics Expert", "Excel Master", "Statistical Analysis"],
    bio: "Data analytics expert serving Uttarakhand region with comprehensive Excel mastery and statistical analysis skills.",
  },
  {
    id: 22,
    name: "Nisha Kumari",
    locations: ["RANCHI"],
    title: "Power BI & Data Solutions Specialist",
    experience: "8+ Years",
    specialization: "Power BI, Data Solutions, Business Intelligence",
    certifications: ["Power BI Specialist", "Data Solutions", "Business Intelligence"],
    bio: "Power BI specialist serving Jharkhand region with comprehensive data solutions and business intelligence expertise.",
  },
  {
    id: 23,
    name: "Rahul Saxena",
    locations: ["GWALIOR"],
    title: "Advanced Excel & Analytics Trainer",
    experience: "10+ Years",
    specialization: "Advanced Excel, Data Analytics, Financial Modeling",
    certifications: ["Advanced Excel", "Data Analytics", "Financial Modeling"],
    bio: "Advanced Excel trainer serving Madhya Pradesh region with expertise in data analytics and financial modeling.",
  },
  {
    id: 24,
    name: "Priyanka Singh",
    locations: ["ALLAHABAD"],
    title: "Excel & MIS Development Expert",
    experience: "9+ Years",
    specialization: "Excel Development, MIS Systems, Data Automation",
    certifications: ["Excel Development", "MIS Systems", "Data Automation"],
    bio: "Excel and MIS development expert serving Uttar Pradesh region with specialization in data automation solutions.",
  },
  {
    id: 25,
    name: "Ashish Sharma",
    locations: ["JODHPUR"],
    title: "Data Analytics & BI Consultant",
    experience: "12+ Years",
    specialization: "Data Analytics, Business Intelligence, Strategic Reporting",
    certifications: ["Data Analytics Consultant", "BI Expert", "Strategic Reporting"],
    bio: "Senior data analytics consultant serving Rajasthan region with expertise in business intelligence and strategic reporting.",
  }
]

// Helper function to get trainers by location
export const getTrainersByLocation = (location: string): Trainer[] => {
  return trainersData.filter(trainer => 
    trainer.locations.some(loc => 
      loc.toLowerCase().includes(location.toLowerCase())
    )
  )
}

// Helper function to get trainer by ID
export const getTrainerById = (id: number): Trainer | undefined => {
  return trainersData.find(trainer => trainer.id === id)
}

// Helper function to get all unique locations
export const getAllLocations = (): string[] => {
  const locations = new Set<string>()
  trainersData.forEach(trainer => {
    trainer.locations.forEach(location => locations.add(location))
  })
  return Array.from(locations).sort()
}
