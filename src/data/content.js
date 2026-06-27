// All resume copy lives here so the page stays a thin presentation layer.
// Source: Ridha Fathima — B.E. Computer Science (Data Science) & Engineering.

export const profile = {
  name: 'Ridha',
  fullName: 'Ridha Fathima',
  tagline: 'B.E. Computer Science (Data Science) & Engineering',
  location: 'Dammam, KSA (willing to relocate)',
  email: 'ridhafathima.wrk@gmail.com',
  phone: '+966 531369382',
  // "building things" counter — anchored to the start of her CS journey.
  buildingSince: '2022-08-01',
}

export const nav = [
  // RESUME + GITHUB are placeholders to fill in later (see spec).
  { label: 'RESUME', href: '#', placeholder: true },
  { label: 'LINKEDIN', href: 'https://linkedin.com/in/ridha-fathima-rafeeq', placeholder: false },
  { label: 'GITHUB', href: '#', placeholder: true },
]

export const currently = [
  {
    sprite: 'grad',
    text: 'a fresh B.E. Computer Science (Data Science) graduate from',
    link: { label: 'Sahyadri College of Engineering', href: 'https://www.sahyadri.edu.in/' },
    tail: ', Mangalore.',
  },
  {
    sprite: 'apps',
    text: 'a Software Developer Intern at',
    link: { label: 'Novigo Solutions', href: '#' },
    tail: ', building PowerApps that clean & automate data.',
  },
]

export const previously = [
  {
    sprite: 'flow',
    text: 'shipped 2+ PowerApps solutions that automated data entry & reporting — cutting manual processing and lifting data accuracy.',
  },
  {
    sprite: 'panel',
    text: 'designed and maintained PowerApps interfaces for tracking operational data across departments.',
  },
  {
    sprite: 'team',
    text: 'partnered with cross-functional teams to gather requirements, debug data discrepancies, and deliver reliable reporting.',
  },
]

export const projects = [
  {
    name: 'Facebook Insights Cleaning Pipeline',
    href: '#',
    blurb:
      'A Python / pandas pipeline that tamed a 1,300+ column social-analytics export — dropped 297 zero-signal columns, fixed every dtype, and resolved 34 missing values into an audit-ready summary. Shipped a formatted workbook of 24 curated KPIs (reach, impressions, engagement, video views).',
    tags: ['Python', 'pandas', 'data-cleaning', 'Excel'],
  },
  {
    name: 'Data Management System',
    href: '#',
    blurb:
      'A system to track and manage product information — improving data accuracy, consistency, and operational visibility for reporting.',
    tags: ['Data Modeling', 'Reporting'],
  },
  {
    name: 'Process Automation Solution',
    href: '#',
    blurb:
      'PowerApps-based automation flows that streamline data entry and kill repetitive manual work — improving workflow efficiency across departments.',
    tags: ['PowerApps', 'Automation', 'Office 365'],
  },
]

export const skills = [
  {
    group: 'tools & platforms',
    items: ['PowerApps', 'MS Excel', 'Office 365', 'Git', 'GitHub', 'Windows'],
  },
  {
    group: 'languages',
    items: ['Python', 'HTML', 'CSS', 'JavaScript'],
  },
  {
    group: 'core competencies',
    items: [
      'Data Analysis',
      'Data Visualization',
      'Data Quality & QC',
      'Process Automation',
      'Reporting & Docs',
      'Troubleshooting',
      'IT Support',
    ],
  },
]

export const certifications = [
  { name: 'Web Development Fundamentals', org: 'Angela Yu · Udemy' },
  { name: 'Cloud Security on AWS', org: 'Coursera' },
]

export const footerLine = 'i just clean & automate data <3'
