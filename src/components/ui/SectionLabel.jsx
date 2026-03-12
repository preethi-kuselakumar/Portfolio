import { motion } from 'framer-motion';
import { THEME } from '../../theme';

export default function SectionLabel({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}
    >
      <span style={{ width: 32, height: 2, background: THEME.colors.cyan, display: 'block' }} />
      <span
        style={{
          color: THEME.colors.cyan,
          fontFamily: "'Space Mono', monospace",
          fontSize: 12,
          letterSpacing: 3,
          textTransform: 'uppercase',
        }}
      >
        {children}
      </span>
    </motion.div>
  );
}

