import { motion } from 'framer-motion';
import { THEME } from '../theme';
import SectionLabel from './ui/SectionLabel';
import SectionTitle from './ui/SectionTitle';

const WORKFLOW = [
  { step: '01', title: 'Scope & Plan', desc: 'Clarify requirements, break stories into tasks, and track progress in ClickUp.' },
  { step: '02', title: 'Design → UI', desc: 'Translate designs into reusable React components with consistent styling and behavior.' },
  { step: '03', title: 'API + State', desc: 'Integrate REST APIs using Axios + React Query with caching, retries, and clean UI states.' },
  { step: '04', title: 'Auth + Realtime', desc: 'Implement OAuth Bearer authentication and real-time messaging with WebSocket when needed.' },
  { step: '05', title: 'Validate & Debug', desc: 'Test endpoints in Postman, debug edge cases, and ensure responsive behavior across devices.' },
  { step: '06', title: 'Ship', desc: 'Merge via Git/GitHub and support CI/CD releases through Jenkins with stable, reviewable changes.' },
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

