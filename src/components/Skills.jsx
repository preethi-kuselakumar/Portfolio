import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNode, FaDatabase, FaGitAlt, FaGithub, FaCode } from 'react-icons/fa';

const Skills = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  const skills = {
    frontend: [
      { name: 'HTML', icon: FaHtml5 },
      { name: 'CSS', icon: FaCss3Alt },
      { name: 'JavaScript', icon: FaJs },
      { name: 'React', icon: FaReact },
    ],
    backend: [
      { name: 'Node.js', icon: FaNode },
      { name: 'Databases', icon: FaDatabase },
      { name: 'REST APIs', icon: FaCode },
    ],
    tools: [
      { name: 'Git', icon: FaGitAlt },
      { name: 'GitHub', icon: FaGithub },
      { name: 'VS Code', icon: FaCode },
    ],
  };

  const SkillCard = ({ skill }) => {
    const IconComponent = skill.icon;
    return (
      <motion.div
        className="skill-card"
        variants={itemVariants}
        whileHover={{
          scale: 1.05,
          transition: { duration: 0.2 },
        }}
      >
        <IconComponent className="skill-icon" />
        <span className="skill-name">{skill.name}</span>
      </motion.div>
    );
  };

  return (
    <motion.section
      id="skills"
      className="skills"
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
    >
      <div className="skills-container">
        <motion.h2 className="section-title">Skills & Expertise</motion.h2>

        <motion.div className="skill-category" variants={itemVariants}>
          <h3>Frontend</h3>
          <div className="skill-grid">
            {skills.frontend.map((skill, index) => (
              <SkillCard key={index} skill={skill} />
            ))}
          </div>
        </motion.div>

        <motion.div className="skill-category" variants={itemVariants}>
          <h3>Backend</h3>
          <div className="skill-grid">
            {skills.backend.map((skill, index) => (
              <SkillCard key={index} skill={skill} />
            ))}
          </div>
        </motion.div>

        <motion.div className="skill-category" variants={itemVariants}>
          <h3>Tools</h3>
          <div className="skill-grid">
            {skills.tools.map((skill, index) => (
              <SkillCard key={index} skill={skill} />
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Skills;
