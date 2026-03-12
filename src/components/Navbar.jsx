import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { NAV_LINKS } from '../data/navLinks';
import { THEME } from '../theme';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: '0 40px',
        height: 64,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: scrolled ? 'rgba(5,13,26,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(0,229,204,0.08)' : 'none',
        transition: 'background 0.4s, border 0.4s',
      }}
    >
      <span
        style={{
          fontFamily: "'Space Mono', monospace",
          color: THEME.colors.cyan,
          fontSize: 18,
          fontWeight: 700,
          letterSpacing: 1,
        }}
      >
        PK<span style={{ color: '#fff' }}>.</span>
      </span>

      <div style={{ display: 'flex', gap: 32 }} className="desktop-nav">
        {NAV_LINKS.map((link) => (
          <motion.button
            key={link}
            onClick={() => scrollTo(link)}
            whileHover={{ color: THEME.colors.cyan }}
            style={{
              background: 'none',
              border: 'none',
              color: 'rgba(255,255,255,0.7)',
              fontFamily: "'Space Mono', monospace",
              fontSize: 13,
              cursor: 'pointer',
              letterSpacing: 1,
              padding: '4px 0',
              transition: 'color 0.2s',
            }}
          >
            {link}
          </motion.button>
        ))}
      </div>

      <motion.a
        href="mailto:kpreethi706@gmail.com"
        whileHover={{ scale: 1.05, boxShadow: `0 0 20px ${THEME.colors.cyan}55` }}
        style={{
          padding: '8px 20px',
          borderRadius: 8,
          border: `1px solid ${THEME.colors.cyan}`,
          color: THEME.colors.cyan,
          fontSize: 13,
          fontFamily: "'Space Mono', monospace",
          textDecoration: 'none',
          letterSpacing: 1,
          transition: 'all 0.2s',
        }}
      >
        Hire Me
      </motion.a>
    </motion.nav>
  );
}
