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
  category: 'web' | 'mobile' | 'ai' | 'design';
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

export const projects: Project[] = [
  {
    id: '1',
    title: 'AI-Powered E-commerce Platform',
    description: 'Next-gen shopping experience with personalized AI recommendations',
    longDescription: 'Built a revolutionary e-commerce platform that uses machine learning to provide hyper-personalized shopping experiences. Features include real-time recommendation engine, voice search, and AR try-on capabilities.',
    technologies: ['React', 'TypeScript', 'Node.js', 'TensorFlow', 'WebGL', 'Three.js'],
    imageUrl: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop',
    liveUrl: 'https://ai-commerce-demo.com',
    githubUrl: 'https://github.com/username/ai-commerce',
    featured: true,
    category: 'web',
    year: 2024,
    challenge: 'Traditional e-commerce platforms lack personalization and have poor conversion rates',
    solution: 'Implemented AI-driven recommendation engine with 3D product visualization',
    result: '40% increase in conversion rates and 60% improvement in user engagement'
  },
  {
    id: '2',
    title: 'Neural Network Visualizer',
    description: 'Interactive 3D visualization of deep learning models',
    longDescription: 'Created an immersive 3D visualization tool that helps researchers and students understand complex neural network architectures through interactive exploration.',
    technologies: ['WebGL', 'Three.js', 'D3.js', 'Python', 'TensorFlow'],
    imageUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop',
    liveUrl: 'https://neural-viz.com',
    githubUrl: 'https://github.com/username/neural-viz',
    featured: true,
    category: 'ai',
    year: 2024,
    challenge: 'Complex neural networks are difficult to understand and debug',
    solution: 'Built interactive 3D visualization with real-time data flow animation',
    result: 'Used by 10,000+ researchers worldwide, featured in top AI conferences'
  },
  {
    id: '3',
    title: 'Sustainable City Dashboard',
    description: 'Real-time environmental monitoring and urban planning tool',
    longDescription: 'Developed a comprehensive dashboard for city planners to monitor environmental metrics, energy consumption, and citizen well-being indicators in real-time.',
    technologies: ['Vue.js', 'Node.js', 'PostgreSQL', 'Docker', 'GraphQL'],
    imageUrl: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=600&fit=crop',
    liveUrl: 'https://sustainable-city.com',
    featured: false,
    category: 'web',
    year: 2023,
    challenge: 'Cities lack integrated tools for environmental monitoring',
    solution: 'Created unified dashboard with IoT sensor integration and predictive analytics',
    result: 'Adopted by 25 smart cities, reduced energy consumption by 15%'
  },
  {
    id: '4',
    title: 'AR Fitness Companion',
    description: 'Augmented reality personal trainer mobile app',
    longDescription: 'Revolutionary fitness app that uses AR to provide real-time form correction and personalized workout guidance through computer vision.',
    technologies: ['React Native', 'ARKit', 'ARCore', 'TensorFlow Lite', 'Computer Vision'],
    imageUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop',
    liveUrl: 'https://ar-fitness.app',
    featured: true,
    category: 'mobile',
    year: 2024,
    challenge: 'Poor form leads to injuries and ineffective workouts',
    solution: 'AI-powered real-time pose detection with AR overlay feedback',
    result: '500K+ downloads, 95% user satisfaction, featured by Apple'
  }
];

export const experiences: Experience[] = [
  {
    id: '1',
    company: 'Cloud Eight Technologies',
    position: 'Software Engineer Intern',
    duration: '2024 Nov - Present',
    description: 'Develop responsive web applications using modern frameworks',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Flutter', 'Go', 'Terraform', 'AWS', 'GCP'],
    achievements: [
      'Improved website performance with integrating CloudWatch RUM',
      'Built features and components across multiple projects',
      'Contributed to modern web application development using cutting-edge technologies'
    ]
  }
];

export const skills: Skill[] = [
  // Frontend
  { name: 'React', category: 'frontend', level: 95, icon: '⚛️' },
  { name: 'TypeScript', category: 'frontend', level: 90, icon: '📘' },
  { name: 'Vue.js', category: 'frontend', level: 85, icon: '💚' },
  { name: 'Three.js', category: 'frontend', level: 80, icon: '🎮' },
  { name: 'WebGL', category: 'frontend', level: 75, icon: '🎨' },
  { name: 'Framer Motion', category: 'frontend', level: 88, icon: '🎭' },
  
  // Backend
  { name: 'Node.js', category: 'backend', level: 90, icon: '🟢' },
  { name: 'Python', category: 'backend', level: 85, icon: '🐍' },
  { name: 'PostgreSQL', category: 'backend', level: 80, icon: '🐘' },
  { name: 'GraphQL', category: 'backend', level: 82, icon: '🔗' },
  { name: 'Docker', category: 'backend', level: 88, icon: '🐳' },
  
  // Tools
  { name: 'Git', category: 'tools', level: 92, icon: '📝' },
  { name: 'AWS', category: 'tools', level: 85, icon: '☁️' },
  { name: 'Figma', category: 'tools', level: 78, icon: '🎨' },
  { name: 'Webpack', category: 'tools', level: 80, icon: '📦' },
  
  // Soft Skills
  { name: 'Leadership', category: 'soft', level: 85, icon: '👑' },
  { name: 'Problem Solving', category: 'soft', level: 92, icon: '🧩' },
  { name: 'Communication', category: 'soft', level: 88, icon: '💬' },
  { name: 'Creativity', category: 'soft', level: 90, icon: '💡' }
];

export const testimonials = [
  {
    id: '1',
    name: 'Sarah Johnson',
    position: 'CTO at TechVision AI',
    content: 'Exceptional developer with a rare combination of technical expertise and creative vision. Delivered our most complex project ahead of schedule.',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face'
  },
  {
    id: '2',
    name: 'Mike Chen',
    position: 'Product Manager at InnovateLab',
    content: 'Outstanding ability to translate complex requirements into elegant solutions. The 3D visualizations they created exceeded all expectations.',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face'
  },
  {
    id: '3',
    name: 'Emily Rodriguez',
    position: 'Design Director at Creative Studio',
    content: 'Perfect blend of technical skills and design sensibility. Every project was delivered with pixel-perfect precision and smooth animations.',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face'
  }
];

export const personalInfo = {
  name: 'Alex Developer',
  title: 'Creative Full-Stack Developer',
  tagline: 'Crafting digital experiences that blend innovation with purpose',
  email: 'alex@portfolio.dev',
  phone: '+1 (555) 123-4567',
  location: 'San Francisco, CA',
  social: {
    github: 'https://github.com/alexdev',
    linkedin: 'https://linkedin.com/in/alexdev',
    twitter: 'https://twitter.com/alexdev',
    dribbble: 'https://dribbble.com/alexdev'
  },
  bio: 'Passionate full-stack developer with 5+ years of experience creating innovative web applications. I specialize in React, Node.js, and emerging technologies like AI/ML integration and 3D web experiences. Always excited to tackle challenging problems and learn new technologies.',
  availability: 'Available for freelance projects',
  resumeUrl: '/resume.pdf'
};