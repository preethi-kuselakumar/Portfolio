import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiMail } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <motion.footer
      className="footer"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
    >
      <div className="footer-content">
        <a
          href="https://github.com/preethi-kuselakumar"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link"
        >
          <FiGithub className="footer-icon" />
          GitHub
        </a>
        <a href="mailto:kpreethi706@gmail.com" className="footer-link">
          <FiMail className="footer-icon" />
          Email
        </a>
      </div>
      <p className="footer-copyright">
        © {currentYear} Preethi K. All rights reserved.
      </p>
    </motion.footer>
  );
};

export default Footer;
