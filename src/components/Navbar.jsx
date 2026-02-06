import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <motion.nav 
      className="navbar navbar-expand-md"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="container-fluid px-lg-5">
        <a className="navbar-brand" href="#home">
          Preethi K
        </a>
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`}>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#home" onClick={handleNavClick}>
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about" onClick={handleNavClick}>
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#skills" onClick={handleNavClick}>
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#projects" onClick={handleNavClick}>
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact" onClick={handleNavClick}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
