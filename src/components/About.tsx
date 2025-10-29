import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Rocket, Heart } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useCustomHooks';
import { personalInfo } from '../data/mockData';

const About: React.FC = () => {
  const [ref, isInView] = useIntersectionObserver(0.1);

  const values = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable code that stands the test of time'
    },
    {
      icon: Palette,
      title: 'Creative Design',
      description: 'Blending aesthetics with functionality for exceptional user experiences'
    },
    {
      icon: Rocket,
      title: 'Innovation',
      description: 'Embracing cutting-edge technologies to solve complex problems'
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'Driven by genuine love for creating digital solutions that matter'
    }
  ];

  const stats = [
    { number: '2+', label: 'Years Experience' },
    { number: '6+', label: 'Projects Completed' },
    { number: '3+', label: 'Certifications' },
    { number: '40+', label: 'Technologies' }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800 overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            About <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Passionate developer with a mission to create impactful digital experiences
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Bio Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="relative">
              <motion.div
                className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-20"
                animate={{ rotate: [0, 1, -1, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
              />
              <div className="relative bg-gray-50 dark:bg-gray-900 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  My Journey
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                  {personalInfo.bio}
                </p>
                <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span>{personalInfo.availability}</span>
                  </div>
                  <span>📍 {personalInfo.location}</span>
                </div>
                {/* Education */}
                {personalInfo.education && (
                  <div className="mt-4 text-sm text-gray-700 dark:text-gray-300">
                    <div className="font-semibold text-gray-900 dark:text-white">{personalInfo.education.degree}</div>
                    <div className="text-gray-600 dark:text-gray-400">{personalInfo.education.institution} • {personalInfo.education.classification} • GPA {personalInfo.education.gpa}</div>
                  </div>
                )}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg text-center"
                >
                  <motion.div
                    className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1, type: 'spring' }}
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-gray-600 dark:text-gray-400 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Values Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
              What Drives Me
            </h3>
            <div className="space-y-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="flex items-start space-x-4 group"
                >
                  <motion.div
                    className="flex-shrink-0 p-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl text-white"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <value.icon size={24} />
                  </motion.div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                      {value.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Tech Stack - Animated Icons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-16 overflow-hidden"
        >
          <h3 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Technologies <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">I Work With</span>
          </h3>
          
          {/* Infinite Horizontal Scroll - First Row */}
          <div className="relative mb-8">
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white dark:from-gray-800 to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white dark:from-gray-800 to-transparent z-10" />
            
            <motion.div
              className="flex space-x-8"
              animate={{
                x: [0, -1920],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 30,
                  ease: "linear",
                },
              }}
            >
              {/* First set of icons */}
              {[
                'React.svg', 'TypeScript.svg', 'JavaScript.svg', 'Next.js.svg', 'Node.js.svg',
                'Spring.svg', 'Java.svg', 'Python.svg', 'Go.svg', 'FastAPI.svg',
                'PostgresSQL.svg', 'MongoDB.svg', 'MySQL.svg', 'Redis.svg', 'Docker.svg',
                'Kubernetes.svg', 'AWS.svg', 'Google Cloud.svg', 'Git.svg', 'GitHub.svg'
              ].map((icon, index) => (
                <motion.div
                  key={`first-${index}`}
                  className="flex-shrink-0 w-16 h-16 flex items-center justify-center bg-white dark:bg-gray-700 rounded-xl shadow-lg hover:shadow-xl transition-shadow group"
                  whileHover={{ scale: 1.1, y: -5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <img
                    src={new URL(`../assets/icons/${icon}`, import.meta.url).href}
                    alt={icon.replace('.svg', '')}
                    className="w-10 h-10 object-contain group-hover:scale-110 transition-transform"
                  />
                </motion.div>
              ))}
              {/* Duplicate set for seamless loop */}
              {[
                'React.svg', 'TypeScript.svg', 'JavaScript.svg', 'Next.js.svg', 'Node.js.svg',
                'Spring.svg', 'Java.svg', 'Python.svg', 'Go.svg', 'FastAPI.svg',
                'PostgresSQL.svg', 'MongoDB.svg', 'MySQL.svg', 'Redis.svg', 'Docker.svg',
                'Kubernetes.svg', 'AWS.svg', 'Google Cloud.svg', 'Git.svg', 'GitHub.svg'
              ].map((icon, index) => (
                <motion.div
                  key={`duplicate-${index}`}
                  className="flex-shrink-0 w-16 h-16 flex items-center justify-center bg-white dark:bg-gray-700 rounded-xl shadow-lg hover:shadow-xl transition-shadow group"
                  whileHover={{ scale: 1.1, y: -5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <img
                    src={new URL(`../assets/icons/${icon}`, import.meta.url).href}
                    alt={icon.replace('.svg', '')}
                    className="w-10 h-10 object-contain group-hover:scale-110 transition-transform"
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Infinite Horizontal Scroll - Second Row (Reverse Direction) */}
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white dark:from-gray-800 to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white dark:from-gray-800 to-transparent z-10" />
            
            <motion.div
              className="flex space-x-8"
              animate={{
                x: [-1920, 0],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 30,
                  ease: "linear",
                },
              }}
            >
              {/* First set of icons */}
              {[
                'Tailwind CSS.svg', 'Bootstrap.svg', 'Material UI.svg', 'HTML5.svg', 'CSS3.svg',
                'Vite.js.svg', 'NPM.svg', 'Yarn.svg', 'Express.svg',
                'Flutter.svg', 'Dart.svg', 'PHP.svg', 'Apache Maven.svg',
                'HashiCorp Terraform.svg', 'Postman.svg', 'Visual Studio Code (VS Code).svg', 'IntelliJ IDEA.svg', 'Figma.svg'
              ].map((icon, index) => (
                <motion.div
                  key={`second-first-${index}`}
                  className="flex-shrink-0 w-16 h-16 flex items-center justify-center bg-white dark:bg-gray-700 rounded-xl shadow-lg hover:shadow-xl transition-shadow group"
                  whileHover={{ scale: 1.1, y: -5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <img
                    src={new URL(`../assets/icons/${icon}`, import.meta.url).href}
                    alt={icon.replace('.svg', '')}
                    className="w-10 h-10 object-contain group-hover:scale-110 transition-transform"
                  />
                </motion.div>
              ))}
              {/* Duplicate set for seamless loop */}
              {[
                'Tailwind CSS.svg', 'Bootstrap.svg', 'Material UI.svg', 'HTML5.svg', 'CSS3.svg',
                'Vite.js.svg',  'NPM.svg', 'Yarn.svg', 'Express.svg',
                'Flutter.svg', 'Dart.svg', 'PHP.svg', 'Apache Maven.svg',
                'HashiCorp Terraform.svg', 'Postman.svg', 'Visual Studio Code (VS Code).svg', 'IntelliJ IDEA.svg', 'Figma.svg'
              ].map((icon, index) => (
                <motion.div
                  key={`second-duplicate-${index}`}
                  className="flex-shrink-0 w-16 h-16 flex items-center justify-center bg-white dark:bg-gray-700 rounded-xl shadow-lg hover:shadow-xl transition-shadow group"
                  whileHover={{ scale: 1.1, y: -5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <img
                    src={new URL(`../assets/icons/${icon}`, import.meta.url).href}
                    alt={icon.replace('.svg', '')}
                    className="w-10 h-10 object-contain group-hover:scale-110 transition-transform"
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;