import { motion } from 'framer-motion';
import { THEME } from '../theme';
import SectionLabel from './ui/SectionLabel';
import SectionTitle from './ui/SectionTitle';

export default function About() {
  return (
    <section id="about" style={{ padding: THEME.spacing.section, maxWidth: 1100, margin: '0 auto' }}>
      <SectionLabel>About Me</SectionLabel>
      <div style={{ maxWidth: 720 }}>
        <SectionTitle>
          Turning designs
          <br />
          into <span style={{ color: THEME.colors.cyan }}>real products</span>
        </SectionTitle>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          style={{
            color: 'rgba(255,255,255,0.6)',
            lineHeight: 1.8,
            fontSize: 16,
            marginBottom: 20,
            fontFamily: "'DM Sans', sans-serif",
          }}
        >
          I&apos;m a Frontend Developer focused on building responsive React interfaces and integrating APIs with clean, maintainable code.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.35 }}
          style={{
            color: 'rgba(255,255,255,0.6)',
            lineHeight: 1.8,
            fontSize: 16,
            marginBottom: 32,
            fontFamily: "'DM Sans', sans-serif",
          }}
        >
          I enjoy translating designs into pixel-perfect components, improving UX details, and shipping features that feel fast and polished.
        </motion.p>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          {['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'REST APIs'].map((tag, i) => (
            <motion.span
              key={tag}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i }}
              style={{
                background: 'rgba(0,229,204,0.08)',
                border: `1px solid ${THEME.colors.cyan}33`,
                color: THEME.colors.cyan,
                borderRadius: 6,
                padding: '5px 14px',
                fontSize: 13,
                fontFamily: "'Space Mono', monospace",
              }}
            >
              {tag}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
