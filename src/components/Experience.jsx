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
              FRONTEND DEVELOPER · INFARIO TECHNOLOGY
            </div>
            <h3 style={{ color: '#fff', fontSize: 24, fontWeight: 700, marginBottom: 4, fontFamily: "'Sora', sans-serif" }}>
              Textellent 3.0
            </h3>
            <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 16, fontFamily: "'DM Sans', sans-serif" }}>
              Business SMS & Messaging Platform (B2B SaaS)
            </div>
          </div>
          <div style={{ background: `${THEME.colors.cyan}18`, border: `1px solid ${THEME.colors.cyan}33`, borderRadius: 8, padding: '6px 16px' }}>
            <span style={{ color: THEME.colors.cyan, fontSize: 13, fontFamily: "'Space Mono', monospace" }}>Professional</span>
          </div>
        </div>

        <div className="grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 24 }}>
          {[
            'Rebuilt key UI screens by modernizing a legacy jQuery-based frontend into React',
            'Built reusable React components from designs and maintained consistent UI patterns',
            'Integrated REST APIs using Axios + React Query with caching and reliable UI states',
            'Implemented OAuth Bearer authentication for secure API calls',
            'Implemented WebSocket communication for real-time messaging features',
            'Added guided product tours using Usetiful to improve onboarding and feature discovery',
            'Delivered responsive layouts using Bootstrap 5 across desktop and mobile',
            'Validated and debugged endpoints with Postman and collaborated with backend teams on fixes',
            'Managed tasks and sprint progress in ClickUp and coordinated delivery in an Agile workflow',
            'Supported CI/CD releases through Jenkins and maintained code via Git/GitHub',
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

        <div style={{ background: 'rgba(0,229,204,0.04)', border: `1px solid ${THEME.colors.cyan}22`, borderRadius: 12, padding: 18, marginBottom: 20 }}>
          <div style={{ color: THEME.colors.cyan, fontSize: 11, fontFamily: "'Space Mono', monospace", letterSpacing: 2, marginBottom: 10 }}>
            KEY MODULES
          </div>
          <div style={{ color: 'rgba(255,255,255,0.62)', fontSize: 14, lineHeight: 1.7, fontFamily: "'DM Sans', sans-serif" }}>
            Worked on core flows like <span style={{ color: '#fff' }}>Login</span>, <span style={{ color: '#fff' }}>Forgot Password</span>,{' '}
            <span style={{ color: '#fff' }}>Messaging</span>, and <span style={{ color: '#fff' }}>Campaigns</span>, building reusable components used across screens.
          </div>
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
          {[
            'React',
            'JavaScript',
            'Bootstrap 5',
            'Axios',
            'React Query',
            'OAuth Bearer',
            'WebSocket',
            'Usetiful',
            'Postman',
            'Jenkins',
            'ClickUp',
            'Git/GitHub',
            'Jetty',
          ].map((tag) => (
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

