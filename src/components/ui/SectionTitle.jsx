import { motion } from 'framer-motion';

export default function SectionTitle({ children, style }) {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      style={{
        fontFamily: "'Sora', sans-serif",
        fontSize: 'clamp(2rem, 5vw, 3.5rem)',
        fontWeight: 700,
        color: '#fff',
        lineHeight: 1.1,
        marginBottom: 36,
        ...style,
      }}
    >
      {children}
    </motion.h2>
  );
}

