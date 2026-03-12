import { motion } from 'framer-motion';
import { THEME } from '../theme';
import GlassCard from './ui/GlassCard';
import SectionLabel from './ui/SectionLabel';
import SectionTitle from './ui/SectionTitle';

export default function Experience() {
  return (
    <section id="experience" style={{ padding: THEME.spacing.section, maxWidth: 1100, margin: '0 auto' }}>
      <SectionLabel>Experience</SectionLabel>
      <SectionTitle>
        Where I&apos;ve
        <br />
        <span style={{ color: THEME.colors.cyan }}>built</span>
      </SectionTitle>

      <GlassCard style={{ position: 'relative', overflow: 'hidden' }}>
        <div
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: 300,
            height: 300,
            background: `radial-gradient(circle, ${THEME.colors.cyan}0A, transparent 70%)`,
            pointerEvents: 'none',
          }}
        />

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 16, marginBottom: 24 }}>
          <div>
            <div style={{ color: THEME.colors.cyan, fontSize: 12, fontFamily: "'Space Mono', monospace", letterSpacing: 2, marginBottom: 8 }}>
              EXPERIENCE
            </div>
            <h3 style={{ color: '#fff', fontSize: 24, fontWeight: 700, marginBottom: 4, fontFamily: "'Sora', sans-serif" }}>
              Frontend Developer
            </h3>
            <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 16, fontFamily: "'DM Sans', sans-serif" }}>
              React · UI · API Integration
            </div>
          </div>
          <div style={{ background: `${THEME.colors.cyan}18`, border: `1px solid ${THEME.colors.cyan}33`, borderRadius: 8, padding: '6px 16px' }}>
            <span style={{ color: THEME.colors.cyan, fontSize: 13, fontFamily: "'Space Mono', monospace" }}>Available</span>
          </div>
        </div>

        <div className="grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 24 }}>
          {[
            'Build responsive React components with clean structure',
            'Integrate REST APIs with good loading/error handling',
            'Maintain reusable UI patterns and consistent styling',
            'Improve UX details with animations and accessible interactions',
            'Use Git/GitHub for collaboration and version control',
            'Test, debug, and polish before shipping',
          ].map((point, i) => (
            <motion.div
              key={point}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}
            >
              <span style={{ color: THEME.colors.cyan, marginTop: 3, flexShrink: 0, fontSize: 12 }}>▸</span>
              <span style={{ color: 'rgba(255,255,255,0.65)', fontSize: 14, lineHeight: 1.6, fontFamily: "'DM Sans', sans-serif" }}>
                {point}
              </span>
            </motion.div>
          ))}
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
          {['React', 'JavaScript', 'CSS', 'Axios', 'Git', 'Bootstrap', 'Postman'].map((tag) => (
            <span
              key={tag}
              style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                color: 'rgba(255,255,255,0.6)',
                borderRadius: 6,
                padding: '4px 12px',
                fontSize: 12,
                fontFamily: "'Space Mono', monospace",
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </GlassCard>
    </section>
  );
}

