import { Briefcase, Cog, Zap, Droplets, Sun, Building2, Gauge, GraduationCap, Award, Languages } from "lucide-react";

export const portfolioData = {
  personalInfo: {
    name: "Zakir",
    lastName: "Aleem",
    title: "Mechanical & Technical Supervisor",
    location: "Karachi, Pakistan",
    status: "Available for opportunities",
    yearsExperience: "15+",
    projectsDelivered: "50+",
    industriesServed: "6+",
    email: "zakir.aleem@example.com", // Placeholder
    tagline: "Engineering excellence through technical leadership in CNG Plants, RO Systems, and Facilities Management.",
    designedBy: "Owais Zakir"
  },
  expertise: [
    {
      icon: Cog,
      title: "Mechanical Systems",
      color: "from-orange-500 to-red-500",
      skills: [
        "CNG Plant Operations & Maintenance",
        "Compressor Systems & Reciprocating Equipment",
        "HVAC Systems Installation & Maintenance",
        "Hydraulic & Pneumatic Systems",
        "Preventive Maintenance Planning",
      ],
    },
    {
      icon: Zap,
      title: "Electrical Systems",
      color: "from-yellow-500 to-orange-500",
      skills: [
        "VFD (Variable Frequency Drive) Configuration",
        "Industrial Wiring & Panel Boards",
        "Motor Control & Protection Systems",
        "Electrical Safety Compliance",
        "Power Distribution Systems",
      ],
    },
    {
      icon: Droplets,
      title: "Water Systems",
      color: "from-blue-500 to-cyan-500",
      skills: [
        "RO Plant Installation & Operation",
        "Water Treatment & Purification",
        "Pump Systems & Piping Networks",
        "Quality Control & Testing",
        "Membrane Maintenance & Replacement",
      ],
    },
    {
      icon: Sun,
      title: "Energy Systems",
      color: "from-amber-500 to-yellow-500",
      skills: [
        "Solar Power Installation",
        "Diesel Generator Operations",
        "Power Backup Systems",
        "Energy Efficiency Optimization",
        "UPS Systems & Battery Banks",
      ],
    },
    {
      icon: Building2,
      title: "Facilities Management",
      color: "from-emerald-500 to-teal-500",
      skills: [
        "Building Maintenance & Operations",
        "Infrastructure Planning",
        "Vendor & Contractor Management",
        "Asset Lifecycle Management",
        "Emergency Response Protocols",
      ],
    },
    {
      icon: Gauge,
      title: "Technical Operations",
      color: "from-violet-500 to-purple-500",
      skills: [
        "Equipment Troubleshooting & Diagnostics",
        "Technical Documentation & Reporting",
        "Safety Protocol Implementation",
        "Inventory & Spare Parts Management",
        "Team Training & Development",
      ],
    },
  ],
  experiences: [
    {
      title: "Technical Supervisor",
      company: "Industrial Facilities & CNG Plants",
      location: "Karachi, Pakistan",
      period: "2015 - Present",
      current: true,
      responsibilities: [
        "Lead comprehensive maintenance operations for CNG compression systems, ensuring 99%+ uptime",
        "Supervise installation and maintenance of RO water treatment plants with daily capacity of 50,000+ liters",
        "Manage electrical systems including VFD drives, panel boards, and power distribution networks",
        "Implement preventive maintenance schedules reducing equipment failures by 40%",
        "Oversee solar power installations and integration with existing power systems",
        "Coordinate with vendors and contractors for specialized equipment and services",
      ],
    },
    {
      title: "Mechanical Supervisor",
      company: "Hospital & Healthcare Facilities",
      location: "Karachi, Pakistan",
      period: "2012 - 2015",
      current: false,
      responsibilities: [
        "Managed critical HVAC systems ensuring optimal environmental conditions for patient care",
        "Supervised generator operations providing uninterrupted power backup for medical equipment",
        "Maintained water supply systems including pumping stations and storage facilities",
        "Implemented safety protocols in compliance with healthcare facility standards",
        "Led a team of 10+ technicians across multiple facility maintenance disciplines",
      ],
    },
    {
      title: "Maintenance Technician",
      company: "Commercial & Industrial Sector",
      location: "Karachi, Pakistan",
      period: "2008 - 2012",
      current: false,
      responsibilities: [
        "Performed troubleshooting and repairs on mechanical and electrical equipment",
        "Assisted in installation of new machinery and equipment commissioning",
        "Maintained detailed maintenance logs and equipment documentation",
        "Participated in safety training and emergency response drills",
        "Developed expertise in compressor systems, motors, and control panels",
      ],
    },
  ],
  skillCategories: [
    {
      category: "Mechanical",
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "CNG Plant Operations", level: 95 },
        { name: "Compressor Systems", level: 90 },
        { name: "HVAC Systems", level: 85 },
        { name: "Hydraulic Systems", level: 80 },
      ],
    },
    {
      category: "Electrical",
      color: "from-yellow-500 to-orange-500",
      skills: [
        { name: "VFD Configuration", level: 90 },
        { name: "Industrial Wiring", level: 85 },
        { name: "Motor Controls", level: 88 },
        { name: "Power Distribution", level: 82 },
      ],
    },
    {
      category: "Water Systems",
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "RO Plant Operations", level: 92 },
        { name: "Water Treatment", level: 88 },
        { name: "Pump Systems", level: 85 },
        { name: "Quality Testing", level: 80 },
      ],
    },
    {
      category: "Energy Systems",
      color: "from-emerald-500 to-teal-500",
      skills: [
        { name: "Solar Installation", level: 85 },
        { name: "Generator Operations", level: 92 },
        { name: "Power Backup", level: 88 },
        { name: "UPS Systems", level: 82 },
      ],
    },
  ],
  education: [
    {
      degree: "Diploma in Mechanical Engineering",
      institution: "Technical Training Institute",
      year: "2007",
    },
    {
      degree: "Matriculation (Science)",
      institution: "Board of Secondary Education",
      year: "2004",
    },
  ],
  certifications: [
    "CNG Plant Operations & Safety",
    "Industrial Electrical Safety",
    "HVAC Systems Certification",
    "First Aid & Emergency Response",
  ],
  languages: [
    { name: "Urdu", level: "Native", percent: 100 },
    { name: "English", level: "Professional", percent: 85 },
    { name: "Punjabi", level: "Conversational", percent: 70 },
  ]
};