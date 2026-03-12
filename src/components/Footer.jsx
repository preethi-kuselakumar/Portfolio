import { motion } from 'framer-motion';
import { NAV_LINKS } from '../data/navLinks';
import { THEME } from '../theme';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer style={{ borderTop: '1px solid rgba(255,255,255,0.06)', padding: '40px', textAlign: 'center' }}>
      <div style={{ marginBottom: 20 }}>
        <span style={{ fontFamily: "'Space Mono', monospace", color: THEME.colors.cyan, fontSize: 20, fontWeight: 700 }}>
          PK<span style={{ color: '#fff' }}>.</span>
        </span>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', gap: 24, marginBottom: 20, flexWrap: 'wrap' }}>
        {NAV_LINKS.map((l) => (
          <motion.button
            key={l}
            onClick={() => document.getElementById(l.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}
            whileHover={{ color: THEME.colors.cyan }}
            style={{
              background: 'none',
              border: 'none',
              color: 'rgba(255,255,255,0.35)',
              fontFamily: "'Space Mono', monospace",
              fontSize: 12,
              cursor: 'pointer',
              letterSpacing: 1,
              transition: 'color 0.2s',
            }}
          >
            {l}
          </motion.button>
        ))}
      </div>
      <div style={{ color: 'rgba(255,255,255,0.2)', fontSize: 12, fontFamily: "'Space Mono', monospace" }}>
        © {currentYear} Preethi K · Built with React
      </div>
    </footer>
  );
}
