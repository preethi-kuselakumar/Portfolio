import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiDownload, FiExternalLink, FiChevronDown } from 'react-icons/fi';

const Hero = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = '/src/assets/resume.pdf';
    link.download = 'Preethi_K_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleResumeView = () => {
    window.open('/src/assets/resume.pdf', '_blank');
  };

  return (
    <motion.section
      id="home"
      className="hero"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="hero-content">
        <motion.h1 variants={itemVariants}>
          Building modern, responsive and engaging web experiences
        </motion.h1>

        <motion.p className="hero-subtitle" variants={itemVariants}>
          Full Stack Developer with 1 year of industry experience and comprehensive training across the entire development stack
        </motion.p>

        <motion.div className="hero-cta" variants={itemVariants}>
          <div className="resume-dropdown">
            <button
              className="dropdown-toggle"
              onClick={() => setShowDropdown(!showDropdown)}
            >
              Resume
              <FiChevronDown size={18} />
            </button>
            <div className={`dropdown-menu ${showDropdown ? 'show' : ''}`}>
              <button
                className="dropdown-item"
                onClick={handleResumeDownload}
              >
                <FiDownload size={16} />
                Download
              </button>
              <button
                className="dropdown-item"
                onClick={handleResumeView}
              >
                <FiExternalLink size={16} />
                View Online
              </button>
            </div>
          </div>
          <a href="#contact" className="btn btn-secondary">
            Contact Me
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
