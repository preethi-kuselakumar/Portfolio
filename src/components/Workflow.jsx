import { motion } from 'framer-motion';
import { THEME } from '../theme';
import SectionLabel from './ui/SectionLabel';
import SectionTitle from './ui/SectionTitle';

const WORKFLOW = [
  { step: '01', title: 'Plan', desc: 'Understand requirements, break tasks down, and decide the right UI/UX approach.' },
  { step: '02', title: 'Build Components', desc: 'Create reusable React components with clean props and structure.' },
  { step: '03', title: 'Integrate APIs', desc: 'Connect endpoints with good loading, error, and success states.' },
  { step: '04', title: 'Polish UX', desc: 'Improve interactions, add subtle motion, and ensure accessibility basics.' },
  { step: '05', title: 'Test & Debug', desc: 'Check edge cases, fix issues, and validate on mobile/desktop.' },
  { step: '06', title: 'Deploy', desc: 'Build, preview, and publish updates with confidence.' },
];

export default function Workflow() {
  return (
    <section style={{ padding: THEME.spacing.section, maxWidth: 1100, margin: '0 auto' }}>
      <SectionLabel>How I Work</SectionLabel>
      <SectionTitle>
        My development
        <br />
        <span style={{ color: THEME.colors.cyan }}>workflow</span>
      </SectionTitle>

      <div className="grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
        {WORKFLOW.map((step, i) => (
          <motion.div
            key={step.step}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ borderColor: `${THEME.colors.cyan}44` }}
            style={{
              background: THEME.colors.cardBg,
              border: `1px solid ${THEME.colors.border}`,
              borderRadius: 14,
              padding: 24,
              backdropFilter: 'blur(12px)',
            }}
          >
            <div style={{ fontFamily: "'Space Mono', monospace", fontSize: 36, fontWeight: 700, color: `${THEME.colors.cyan}33`, marginBottom: 12, lineHeight: 1 }}>
              {step.step}
            </div>
            <div style={{ color: '#fff', fontSize: 16, fontWeight: 600, marginBottom: 8, fontFamily: "'Sora', sans-serif" }}>
              {step.title}
            </div>
            <div style={{ color: 'rgba(255,255,255,0.45)', fontSize: 13, lineHeight: 1.65, fontFamily: "'DM Sans', sans-serif" }}>
              {step.desc}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

