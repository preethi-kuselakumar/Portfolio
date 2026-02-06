import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <motion.section
      id="about"
      className="about"
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
    >
      <div className="about-content">
        <motion.h2 className="section-title">About Me</motion.h2>
        <motion.p
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          I'm a full stack developer with 1 year of professional experience, driven by a passion for building clean, user-friendly web experiences. I completed comprehensive full stack training, gaining expertise in both frontend and backend technologies. I specialize in crafting responsive, modern interfaces that engage users while maintaining clean, maintainable code. My focus is on combining technical excellence with thoughtful design to deliver solutions that make a real impact.
        </motion.p>
      </div>
    </motion.section>
  );
};

export default About;
