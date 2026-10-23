import { motion, useScroll, useTransform } from 'framer-motion';
import { THEME } from '../theme';

const githubButtonStyle = {
  padding: '14px 32px',
  borderRadius: 10,
  background: `linear-gradient(135deg, rgba(139,92,246,0.18), rgba(13,23,48,0.95))`,
  color: '#fff',
  border: `1px solid ${THEME.colors.purple}66`,
  fontFamily: "'Space Mono', monospace",
  fontWeight: 700,
  fontSize: 14,
  textDecoration: 'none',
  letterSpacing: 1,
  display: 'inline-flex',
  alignItems: 'center',
  gap: 8,
  boxShadow: '0 14px 30px rgba(8, 12, 28, 0.35)',
};

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <div
          style={{
            position: 'absolute',
            top: '20%',
            left: '50%',
            transform: 'translateX(-50%)',
            width: 600,
            height: 600,
            background: `radial-gradient(circle, ${THEME.colors.cyan}18 0%, transparent 70%)`,
            borderRadius: '50%',
            animation: 'pulse 4s ease-in-out infinite',
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'linear-gradient(rgba(0,229,204,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,229,204,0.04) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        {[
          { w: 300, h: 300, top: '10%', left: '5%', color: `${THEME.colors.cyan}12`, dur: '8s' },
          { w: 200, h: 200, top: '60%', right: '8%', color: 'rgba(120,80,255,0.12)', dur: '10s' },
          { w: 150, h: 150, top: '80%', left: '20%', color: `${THEME.colors.cyan}10`, dur: '6s' },
        ].map((orb, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              width: orb.w,
              height: orb.h,
              top: orb.top,
              left: orb.left,
              right: orb.right,
              background: `radial-gradient(circle, ${orb.color}, transparent)`,
              borderRadius: '50%',
              animation: `float ${orb.dur} ease-in-out infinite`,
              animationDelay: `${i * 1.5}s`,
            }}
          />
        ))}
      </div>

      <motion.div
        style={{
          y,
          opacity,
          textAlign: 'center',
          position: 'relative',
          zIndex: 1,
          padding: '0 24px',
          maxWidth: 900,
          margin: '0 auto',
        }}
      >
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          style={{
            fontFamily: "'Sora', sans-serif",
            fontSize: 'clamp(3rem, 8vw, 4.5rem)',
            fontWeight: 700,
            lineHeight: 1.05,
            color: '#fff',
            marginBottom: 24,
            letterSpacing: -1,
          }}
        >
          Preethi K
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          style={{
            color: 'rgba(255,255,255,0.55)',
            fontSize: 17,
            lineHeight: 1.7,
            maxWidth: 560,
            margin: '0 auto 40px',
            fontFamily: "'DM Sans', sans-serif",
          }}
        >
          I build modern, responsive web interfaces with React and clean UI/UX.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}
        >
          <motion.a
            href="https://github.com/preethi-kuselakumar"
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.05, boxShadow: `0 0 30px ${THEME.colors.purple}40` }}
            whileTap={{ scale: 0.97 }}
            style={githubButtonStyle}
          >
            View GitHub →
          </motion.a>
          <motion.button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            whileHover={{ scale: 1.05, background: 'rgba(0,229,204,0.08)' }}
            whileTap={{ scale: 0.97 }}
            style={{
              padding: '14px 32px',
              borderRadius: 10,
              background: 'transparent',
              color: '#fff',
              border: '1px solid rgba(255,255,255,0.2)',
              fontFamily: "'Space Mono', monospace",
              fontSize: 14,
              cursor: 'pointer',
              letterSpacing: 1,
            }}
          >
            Let&apos;s Connect
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
}
