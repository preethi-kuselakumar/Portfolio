import { motion } from 'framer-motion';
import { THEME } from '../../theme';

export default function GlassCard({ children, style = {}, hover = true }) {
  return (
    <motion.div
      whileHover={hover ? { y: -6, borderColor: 'rgba(0,229,204,0.4)' } : {}}
      transition={{ duration: 0.25 }}
      style={{
        background: THEME.colors.cardBg,
        border: `1px solid ${THEME.colors.border}`,
        borderRadius: 16,
        backdropFilter: 'blur(12px)',
        padding: 28,
        ...style,
      }}
    >
      {children}
    </motion.div>
  );
}

