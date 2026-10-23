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
      <motion.button
        type="button"
        onClick={() => document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' })}
        whileHover={{ color: THEME.colors.cyan }}
        style={{
          background: 'none',
          border: 'none',
          fontFamily: "'Sora', sans-serif",
          color: '#fff',
          fontSize: 16,
          fontWeight: 700,
          letterSpacing: 0.2,
          cursor: 'pointer',
        }}
      >
        Preethi K
      </motion.button>

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
    </motion.nav>
  );
}
