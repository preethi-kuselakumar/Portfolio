import { motion } from 'framer-motion';
import { FiFeather, FiLink2, FiSend, FiZap } from 'react-icons/fi';
import { THEME } from '../theme';
import SectionLabel from './ui/SectionLabel';
import SectionTitle from './ui/SectionTitle';

export default function About() {
  return (
    <section id="about" style={{ padding: THEME.spacing.section, maxWidth: 1100, margin: '0 auto' }}>
      <SectionLabel>About Me</SectionLabel>
      <div className="grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
        <div>
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
            I enjoy translating Figma designs into pixel-perfect components, improving UX details, and shipping features that feel fast and polished.
          </motion.p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            {['React.js', 'REST APIs', 'Responsive UI', 'Git/GitHub', 'UI Animations'].map((tag, i) => (
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

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
          {[
            { Icon: FiZap, title: 'Fast Learner', desc: 'Quickly adapt to new tools, APIs, and UI patterns' },
            { Icon: FiLink2, title: 'API Integration', desc: 'Comfortable building UI connected to real endpoints' },
            { Icon: FiFeather, title: 'Design-Driven', desc: 'Strong attention to spacing, typography, and details' },
            { Icon: FiSend, title: 'Ship Focused', desc: 'Clean code, reusable components, and smooth UX' },
          ].map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 * i }}
              whileHover={{ y: -4, borderColor: `${THEME.colors.cyan}55` }}
              style={{
                background: THEME.colors.cardBg,
                border: `1px solid ${THEME.colors.border}`,
                borderRadius: 14,
                padding: 20,
                backdropFilter: 'blur(12px)',
              }}
            >
              <div style={{ fontSize: 28, marginBottom: 10, color: THEME.colors.cyan }}>
                <card.Icon aria-hidden />
              </div>
              <div style={{ color: '#fff', fontWeight: 600, fontSize: 14, marginBottom: 6, fontFamily: "'DM Sans', sans-serif" }}>
                {card.title}
              </div>
              <div style={{ color: 'rgba(255,255,255,0.45)', fontSize: 13, lineHeight: 1.6, fontFamily: "'DM Sans', sans-serif" }}>
                {card.desc}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
