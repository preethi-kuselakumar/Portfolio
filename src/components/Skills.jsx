import { motion } from 'framer-motion';
import { THEME } from '../theme';
import { TOOLS } from '../data/skills';
import SectionLabel from './ui/SectionLabel';
import SectionTitle from './ui/SectionTitle';

export default function Skills() {
  return (
    <section id="skills" style={{ padding: THEME.spacing.section, maxWidth: 1100, margin: '0 auto' }}>
      <SectionLabel>Technical Skills</SectionLabel>
      <SectionTitle>
        What I work
        <br />
        with <span style={{ color: THEME.colors.cyan }}>every day</span>
      </SectionTitle>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12, alignContent: 'start' }}>
        {TOOLS.map((tool, i) => (
          <motion.div
            key={tool.name}
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.02 }}
            whileHover={{ y: -4, borderColor: `${THEME.colors.cyan}66`, boxShadow: `0 0 16px ${THEME.colors.cyan}22` }}
            style={{
              background: THEME.colors.cardBg,
              border: `1px solid ${THEME.colors.border}`,
              borderRadius: 12,
              padding: '18px 4px',
              textAlign: 'center',
              cursor: 'default',
              backdropFilter: 'blur(8px)',
            }}
          >
            <div style={{ fontSize: 22, color: THEME.colors.cyan, display: 'flex', justifyContent: 'center' }}>
              <tool.Icon aria-hidden />
            </div>
            <div
              style={{
                color: 'rgba(255,255,255,0.6)',
                fontSize: 12,
                marginTop: 10,
                fontFamily: "'Space Mono', monospace",
                letterSpacing: 0.5,
              }}
            >
              {tool.name}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
