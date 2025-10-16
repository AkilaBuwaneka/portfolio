import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Rocket, Heart, Award, Users } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useCustomHooks';
import { personalInfo, skills } from '../data/mockData';

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
    { number: '5+', label: 'Years Experience' },
    { number: '50+', label: 'Projects Completed' },
    { number: '20+', label: 'Happy Clients' },
    { number: '15+', label: 'Technologies' }
  ];

  const skillCategories = [
    { name: 'Frontend', skills: skills.filter(skill => skill.category === 'frontend'), color: 'from-blue-500 to-cyan-500' },
    { name: 'Backend', skills: skills.filter(skill => skill.category === 'backend'), color: 'from-green-500 to-emerald-500' },
    { name: 'Tools', skills: skills.filter(skill => skill.category === 'tools'), color: 'from-orange-500 to-red-500' },
    { name: 'Soft Skills', skills: skills.filter(skill => skill.category === 'soft'), color: 'from-purple-500 to-pink-500' }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800" ref={ref}>
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

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Technical <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Expertise</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1 + categoryIndex * 0.1 }}
                className="bg-gray-50 dark:bg-gray-900 p-6 rounded-2xl"
              >
                <h4 className={`text-lg font-bold mb-6 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                  {category.name}
                </h4>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: 1.2 + categoryIndex * 0.1 + skillIndex * 0.05 }}
                      className="group"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="flex items-center space-x-2 text-gray-700 dark:text-gray-300">
                          <span>{skill.icon}</span>
                          <span className="font-medium">{skill.name}</span>
                        </span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <motion.div
                          className={`h-2 rounded-full bg-gradient-to-r ${category.color}`}
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : {}}
                          transition={{ duration: 1, delay: 1.4 + categoryIndex * 0.1 + skillIndex * 0.05, ease: 'easeOut' }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Achievement Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-8 rounded-2xl text-white">
            <div className="flex justify-center items-center space-x-8">
              <motion.div
                className="flex items-center space-x-3"
                whileHover={{ scale: 1.05 }}
              >
                <Award size={32} />
                <div>
                  <div className="text-2xl font-bold">Award Winner</div>
                  <div className="text-purple-100">Best Portfolio 2024</div>
                </div>
              </motion.div>
              <motion.div
                className="flex items-center space-x-3"
                whileHover={{ scale: 1.05 }}
              >
                <Users size={32} />
                <div>
                  <div className="text-2xl font-bold">Team Player</div>
                  <div className="text-purple-100">Collaborative Leader</div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;