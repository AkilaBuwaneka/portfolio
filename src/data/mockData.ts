export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  imageUrl: string;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  category: 'web' | /*'mobile' | */'ai' | 'design';
  year: number;
  challenge: string;
  solution: string;
  result: string;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  duration: string;
  description: string;
  technologies: string[];
  achievements: string[];
}

export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'tools' | 'soft';
  level: number; // 1-100
  icon: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  credentialUrl?: string;
  type: 'certification' | 'badge';
  imageUrl: string;
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'Venture Vibe',
    description: 'Collaborative travel planning platform with social features',
    longDescription: 'A comprehensive web platform designed for travelers to plan trips collaboratively with friends, discover destinations, manage budgets, and connect with travel guides. Features include trip planning tools, blog sharing, event discovery, and a multi-role system for admins, event planners, and certified travel guides.',
    technologies: ['React', 'Spring Boot', 'PostgreSQL', 'AWS Cognito', 'AWS S3', 'AWS Lambda', 'GCP', 'GitHub', 'Postman'],
    imageUrl: new URL('../assets/ventureVibe/homepage_01.PNG', import.meta.url).href,
    githubUrl: 'https://github.com/VentureVibe',
    featured: true,
    category: 'web',
    year: 2024,
    challenge: 'Travelers struggle to plan trips collaboratively and find reliable travel guides while managing budgets effectively',
    solution: 'Built a comprehensive platform with real-time collaboration, verified travel guide system, budget management tools, and social features for sharing experiences',
    result: 'Seamless trip planning experience with integrated event discovery, guide booking, and community-driven travel blogs'
  },
  {
    id: '2',
    title: 'Computify',
    description: 'PC & laptop accessories e-commerce platform with custom PC builder',
    longDescription: 'An innovative e-commerce platform specializing in computer accessories and components. Features a unique PC building tool that helps users select compatible components, an intuitive shopping experience, and a comprehensive admin panel for inventory management.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
    imageUrl: new URL('../assets/computify/products_page.jpg', import.meta.url).href,
    githubUrl: 'https://github.com/sachin541/Group-Project-SCS2202',
    featured: true,
    category: 'web',
    year: 2023,
    challenge: 'Users struggle to build compatible PCs and find the right components for their needs',
    solution: 'Developed an intelligent PC builder with compatibility checking and comprehensive product catalog with advanced filtering',
    result: 'Simplified PC building process with real-time compatibility validation and streamlined purchasing experience'
  },
  {
    id: '3',
    title: 'FreshLand',
    description: 'Modern food delivery platform with microservices architecture',
    longDescription: 'A scalable online food ordering platform built with cutting-edge microservices architecture and micro-frontend approach. Utilizes Single SPA for seamless module integration and BFF (Backend for Frontend) pattern for optimized API communication.',
    technologies: ['React', 'Single SPA', 'Spring Boot', 'Node.js', 'MongoDB', 'Microservices', 'Micro-Frontend'],
    imageUrl: new URL('../assets/freshland/freshland.PNG', import.meta.url).href,
    githubUrl: 'https://github.com/AkilaBuwaneka/freshland-food_store',
    featured: true,
    category: 'web',
    year: 2024,
    challenge: 'Traditional monolithic food delivery platforms struggle with scalability and independent feature deployment',
    solution: 'Implemented microservices architecture with micro-frontend using Single SPA, enabling independent scaling and deployment of features',
    result: 'Highly scalable platform with improved performance, faster feature deployment, and better team collaboration'
  },
  {
    id: '4',
    title: 'Find Optimal Path',
    description: 'AI-powered indoor navigation and pathfinding solution',
    longDescription: 'An intelligent pathfinding application that allows users to upload floor plan images, mark obstacles, and generate optimal routes between multiple points. Perfect for warehouse management, indoor navigation, and logistics optimization.',
    technologies: ['FastAPI', 'Python', 'MongoDB', 'Computer Vision', 'Pathfinding Algorithms'],
    imageUrl: new URL('../assets/findOptimalPath/homepage.png', import.meta.url).href,
    githubUrl: 'https://github.com/AkilaBuwaneka/optimal-path-finder',
    featured: true,
    category: 'ai',
    year: 2024,
    challenge: 'Manual path planning in complex indoor environments is time-consuming and often inefficient',
    solution: 'Built an AI-powered system with image processing for floor plan analysis and advanced algorithms for optimal route calculation',
    result: 'Automated pathfinding with visual floor plan editing, supporting multi-point optimization for efficient navigation'
  },
  {
    id: '5',
    title: 'ShowSync',
    description: 'Event management and budget tracking platform',
    longDescription: 'A modern platform for organizing events and managing budgets efficiently. Currently features a sleek Next.js frontend with plans for a robust backend using Node.js and Express with PostgreSQL for data persistence and real-time updates.',
    technologies: ['Next.js', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'Prisma'],
    imageUrl: new URL('../assets/showSync/homePage.png', import.meta.url).href,
    githubUrl: 'https://github.com/AkilaBuwaneka/show-sync',
    featured: false,
    category: 'web',
    year: 2025,
    challenge: 'Event organizers need a centralized platform to manage complex events and track budgets in real-time',
    solution: 'Creating an intuitive platform with budget tracking, vendor management, and collaborative planning features',
    result: 'Streamlined event planning workflow with comprehensive budget oversight and team collaboration tools'
  },
  {
    id: '6',
    title: 'Portfolio Website',
    description: 'Modern developer portfolio with stunning animations',
    longDescription: 'A personal portfolio website showcasing projects, skills, and experience with smooth animations and an engaging user interface. Built with modern web technologies for optimal performance and visual appeal.',
    technologies: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Framer Motion'],
    imageUrl: new URL('../assets/portfolio/Screenshot 2025-10-27 082151.jpg', import.meta.url).href,
    githubUrl: 'https://github.com/AkilaBuwaneka/portfolio',
    featured: false,
    category: 'web',
    year: 2025,
    challenge: 'Need a standout portfolio to showcase technical skills and projects effectively',
    solution: 'Designed and developed a modern, animated portfolio with smooth interactions and responsive design',
    result: 'Professional online presence with engaging visuals and comprehensive project showcases'
  }
];

export const experiences: Experience[] = [
  {
    id: '1',
    company: 'Cloud Eight Technologies',
    position: 'Software Engineer Intern',
    duration: '2024 Nov - Present',
    description: 'Develop responsive web applications using modern frameworks',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Flutter', 'Go', 'Terraform', 'AWS', 'GCP', 'Quarkus'],
    achievements: [
      'Improved website performance with integrating CloudWatch RUM',
      'Built features and components across multiple projects',
      'Contributed to modern web application development using cutting-edge technologies'
    ]
  }
];

export const certifications: Certification[] = [
  {
    id: '1',
    title: 'Introduction to Artificial Intelligence 2023',
    issuer: 'Great Learning',
    date: '2023',
    credentialUrl: '',
    type: 'certification',
    imageUrl: new URL('../assets/certificationsAndBadges/CertificateOfCompletion_Introduction to Artificial Intelligence 2023_page-0001.jpg', import.meta.url).href
  },
  {
    id: '2',
    title: 'Level 3 Certificate of Completion - External Project Summit 2024',
    issuer: 'Project Summit',
    date: '2024',
    credentialUrl: '',
    type: 'certification',
    imageUrl: new URL('../assets/certificationsAndBadges/Level 3 Certificate of Completion - External Project Summit 2024 - Akila Buwaneka_page-0001.jpg', import.meta.url).href
  },
  {
    id: '3',
    title: 'Digital Badge - ProjectSummit Basecamp03',
    issuer: 'Project Summit',
    date: '2024',
    credentialUrl: '',
    type: 'badge',
    imageUrl: new URL('../assets/certificationsAndBadges/Digital Badge - ProjectSummit_Basecamp03.png', import.meta.url).href
  }
];

export const personalInfo = {
  name: 'Akila Buwaneka',
  title: 'Creative Full-Stack Developer',
  tagline: 'Crafting digital experiences that blend innovation with purpose',
  email: 'akilamg2000@gmail.com',
  phone: '+94 704976919',
  location: 'Galle, Sri Lanka',
  social: {
    github: 'https://github.com/akilabuwaneka',
    linkedin: 'https://linkedin.com/in/akila-buwaneka',
    leetcode: 'https://leetcode.com/u/eImNAuid8I/'
  },
  bio: 'Passionate full-stack developer specializing in building scalable web applications with modern technologies. Experienced in architecting microservices platforms, developing AI-powered solutions, and creating collaborative travel and e-commerce systems. Proficient in React, Spring Boot, Node.js, and cloud technologies (AWS, GCP). Strong focus on creating user-centric solutions with clean, maintainable code and innovative problem-solving approaches.',
  availability: 'Available for freelance projects',
  education: {
    degree: 'BSc in Computer Science',
    institution: 'University of Colombo School of Computing',
    classification: '2nd Lower',
    gpa: '≈ 3.00'
  },
  resumeUrl: '/Akila_Buwaneka_Fullstack_Software_Engineer.pdf'
};