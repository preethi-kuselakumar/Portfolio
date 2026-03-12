import { motion } from 'framer-motion';
import { THEME } from '../theme';
import { PROJECTS } from '../data/projects';
import SectionLabel from './ui/SectionLabel';
import SectionTitle from './ui/SectionTitle';

export default function Projects() {
  return (
    <section id="projects" style={{ padding: THEME.spacing.section, maxWidth: 1100, margin: '0 auto' }}>
      <SectionLabel>Projects</SectionLabel>
      <SectionTitle>
        Things I&apos;ve
        <br />
        <span style={{ color: THEME.colors.cyan }}>built</span>
      </SectionTitle>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 24 }}>
        {PROJECTS.map((proj, i) => (
          <motion.div
            key={proj.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12 }}
            whileHover={{ y: -8, boxShadow: proj.type !== 'Soon' ? `0 20px 60px ${THEME.colors.cyan}18` : 'none' }}
            style={{
              background: proj.highlight ? `linear-gradient(135deg, rgba(0,229,204,0.06), rgba(0,229,204,0.02))` : THEME.colors.cardBg,
              border: `1px solid ${proj.highlight ? `${THEME.colors.cyan}44` : THEME.colors.border}`,
              borderRadius: 16,
              padding: 28,
              backdropFilter: 'blur(12px)',
              opacity: proj.type === 'Soon' ? 0.5 : 1,
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {proj.type === 'Soon' && (
              <div
                style={{
                  position: 'absolute',
                  top: 16,
                  right: 16,
                  background: 'rgba(255,255,255,0.1)',
                  color: 'rgba(255,255,255,0.5)',
                  borderRadius: 4,
                  padding: '3px 10px',
                  fontSize: 10,
                  fontFamily: "'Space Mono', monospace",
                }}
              >
                SOON
              </div>
            )}

            <div style={{ color: THEME.colors.cyan, fontSize: 11, fontFamily: "'Space Mono', monospace", letterSpacing: 2, marginBottom: 8 }}>
              {proj.type.toUpperCase()}
            </div>
            <h3 style={{ color: '#fff', fontSize: 20, fontWeight: 700, marginBottom: 4, fontFamily: "'Sora', sans-serif" }}>
              {proj.title}
            </h3>
            <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: 13, marginBottom: 14, fontFamily: "'DM Sans', sans-serif" }}>
              {proj.subtitle}
            </div>
            <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: 14, lineHeight: 1.7, marginBottom: 20, fontFamily: "'DM Sans', sans-serif" }}>
              {proj.desc}
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 20 }}>
              {proj.tags.map((tag) => (
                <span
                  key={tag}
                  style={{
                    background: 'rgba(0,229,204,0.06)',
                    border: `1px solid ${THEME.colors.cyan}22`,
                    color: THEME.colors.cyan,
                    borderRadius: 4,
                    padding: '2px 10px',
                    fontSize: 11,
                    fontFamily: "'Space Mono', monospace",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              {proj.githubUrl ? (
                <motion.a
                  href={proj.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ x: 4 }}
                  style={{
                    color: THEME.colors.cyan,
                    fontSize: 13,
                    fontFamily: "'Space Mono', monospace",
                    textDecoration: 'none',
                  }}
                >
                  Open on GitHub →
                </motion.a>
              ) : null}
              {proj.liveUrl ? (
                <motion.a
                  href={proj.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ x: 4 }}
                  style={{
                    color: '#fff',
                    fontSize: 13,
                    fontFamily: "'Space Mono', monospace",
                    textDecoration: 'none',
                    opacity: 0.9,
                  }}
                >
                  Live Demo →
                </motion.a>
              ) : null}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
