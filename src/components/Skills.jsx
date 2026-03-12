import { useRef, useState } from 'react';
import { AnimatePresence, motion, useInView } from 'framer-motion';
import { THEME } from '../theme';
import { SKILLS, TOOLS } from '../data/skills';
import SectionLabel from './ui/SectionLabel';
import SectionTitle from './ui/SectionTitle';

function SkillBar({ name, level, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <div ref={ref} style={{ marginBottom: 20 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
        <span style={{ color: '#fff', fontSize: 14, fontFamily: "'DM Sans', sans-serif" }}>{name}</span>
        <span style={{ color: THEME.colors.cyan, fontSize: 13, fontFamily: "'Space Mono', monospace" }}>{level}%</span>
      </div>
      <div style={{ height: 4, background: 'rgba(255,255,255,0.06)', borderRadius: 4, overflow: 'hidden' }}>
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : {}}
          transition={{ duration: 1.2, delay: index * 0.07, ease: 'easeOut' }}
          style={{
            height: '100%',
            background: `linear-gradient(90deg, ${THEME.colors.cyan}, rgba(0,229,204,0.4))`,
            borderRadius: 4,
            boxShadow: `0 0 10px ${THEME.colors.cyan}55`,
          }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const categories = [...new Set(SKILLS.map((s) => s.category))];
  const [active, setActive] = useState('Frontend');

  return (
    <section id="skills" style={{ padding: THEME.spacing.section, maxWidth: 1100, margin: '0 auto' }}>
      <SectionLabel>Technical Skills</SectionLabel>
      <SectionTitle>
        What I work
        <br />
        with <span style={{ color: THEME.colors.cyan }}>every day</span>
      </SectionTitle>

      <div style={{ display: 'flex', gap: 12, marginBottom: 48, flexWrap: 'wrap' }}>
        {categories.map((cat) => (
          <motion.button
            key={cat}
            onClick={() => setActive(cat)}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            style={{
              padding: '8px 20px',
              borderRadius: 8,
              cursor: 'pointer',
              fontFamily: "'Space Mono', monospace",
              fontSize: 13,
              letterSpacing: 1,
              border: `1px solid ${active === cat ? THEME.colors.cyan : 'rgba(255,255,255,0.15)'}`,
              background: active === cat ? `${THEME.colors.cyan}18` : 'transparent',
              color: active === cat ? THEME.colors.cyan : 'rgba(255,255,255,0.5)',
              transition: 'all 0.2s',
            }}
          >
            {cat}
          </motion.button>
        ))}
      </div>

      <div className="grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48 }}>
        <div>
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {SKILLS.filter((s) => s.category === active).map((skill, i) => (
                <SkillBar key={skill.name} name={skill.name} level={skill.level} index={i} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12, alignContent: 'start' }}>
          {TOOLS.map((tool, i) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              whileHover={{ y: -4, borderColor: `${THEME.colors.cyan}66`, boxShadow: `0 0 16px ${THEME.colors.cyan}22` }}
              style={{
                background: THEME.colors.cardBg,
                border: `1px solid ${THEME.colors.border}`,
                borderRadius: 12,
                padding: '14px 8px',
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
                  fontSize: 10,
                  marginTop: 6,
                  fontFamily: "'Space Mono', monospace",
                  letterSpacing: 0.5,
                }}
              >
                {tool.name}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
