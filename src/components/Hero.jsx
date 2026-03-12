import { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FiChevronDown, FiDownload, FiFileText } from 'react-icons/fi';
import { THEME } from '../theme';
import { useTypingEffect } from '../hooks/useTypingEffect';
import resumePdf from '../assets/resume.pdf';

const resumeButtonStyle = {
  padding: '14px 28px',
  borderRadius: 10,
  background: `linear-gradient(135deg, ${THEME.colors.cyan}, #7CF7EA)`,
  color: THEME.colors.navy,
  border: 'none',
  fontFamily: "'Space Mono', monospace",
  fontWeight: 700,
  fontSize: 14,
  cursor: 'pointer',
  letterSpacing: 1,
  display: 'inline-flex',
  alignItems: 'center',
  gap: 10,
};

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
  const [showResumeMenu, setShowResumeMenu] = useState(false);
  const typed = useTypingEffect(['Frontend Developer', 'React Developer', 'UI Builder', 'API Integrator']);

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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            background: 'rgba(0,229,204,0.08)',
            border: `1px solid ${THEME.colors.cyan}33`,
            borderRadius: 100,
            padding: '6px 16px',
            marginBottom: 32,
          }}
        >
          <span
            style={{
              width: 8,
              height: 8,
              borderRadius: '50%',
              background: THEME.colors.cyan,
              display: 'block',
              animation: 'blink 1.5s infinite',
            }}
          />
          <span
            style={{
              color: THEME.colors.cyan,
              fontSize: 12,
              fontFamily: "'Space Mono', monospace",
              letterSpacing: 2,
            }}
          >
            AVAILABLE FOR WORK
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          style={{
            fontFamily: "'Sora', sans-serif",
            fontSize: 'clamp(3rem, 8vw, 6rem)',
            fontWeight: 800,
            lineHeight: 1.05,
            color: '#fff',
            marginBottom: 8,
            letterSpacing: -1,
          }}
        >
          Preethi K
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: 'clamp(1rem, 2.5vw, 1.5rem)',
            color: THEME.colors.cyan,
            height: 40,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 4,
            marginBottom: 24,
          }}
        >
          <span>{typed}</span>
          <span style={{ animation: 'blink 1s infinite', color: THEME.colors.cyan }}>|</span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
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
          transition={{ delay: 1.1 }}
          style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}
        >
          <div style={{ position: 'relative' }}>
            <motion.button
              type="button"
              onClick={() => setShowResumeMenu((open) => !open)}
              whileHover={{ scale: 1.05, boxShadow: `0 0 30px ${THEME.colors.cyan}55` }}
              whileTap={{ scale: 0.97 }}
              style={resumeButtonStyle}
            >
              <FiFileText size={18} />
              Resume
              <FiChevronDown size={16} />
            </motion.button>

            {showResumeMenu && (
              <div
                style={{
                  position: 'absolute',
                  top: '110%',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  background: '#050d1f',
                  border: `1px solid ${THEME.colors.cyan}33`,
                  borderRadius: 10,
                  padding: 8,
                  minWidth: 190,
                  boxShadow: '0 18px 45px rgba(0,0,0,0.45)',
                  zIndex: 10,
                }}
              >
                <a
                  href={resumePdf}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                    padding: '8px 10px',
                    borderRadius: 6,
                    color: '#fff',
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 13,
                    textDecoration: 'none',
                  }}
                >
                  <FiFileText size={16} />
                  <span>View PDF</span>
                </a>
                <a
                  href={resumePdf}
                  download="Preethi_K_Resume.pdf"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                    padding: '8px 10px',
                    borderRadius: 6,
                    color: 'rgba(255,255,255,0.85)',
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 13,
                    textDecoration: 'none',
                  }}
                >
                  <FiDownload size={16} />
                  <span>Download PDF</span>
                </a>
              </div>
            )}
          </div>
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

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          style={{ display: 'flex', gap: 48, justifyContent: 'center', marginTop: 64, flexWrap: 'wrap' }}
        >
          {[{ n: '10+', label: 'Technologies' }, { n: '2+', label: 'Projects' }, { n: '100%', label: 'Learning' }].map((s) => (
            <div key={s.label} style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: "'Sora', sans-serif", fontSize: 28, fontWeight: 800, color: THEME.colors.cyan }}>
                {s.n}
              </div>
              <div
                style={{
                  color: 'rgba(255,255,255,0.4)',
                  fontSize: 11,
                  fontFamily: "'Space Mono', monospace",
                  letterSpacing: 2,
                  textTransform: 'uppercase',
                  marginTop: 4,
                }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        style={{
          position: 'absolute',
          bottom: 32,
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 8,
        }}
      >
        <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: 10, fontFamily: "'Space Mono', monospace", letterSpacing: 3 }}>
          SCROLL
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          style={{ width: 1, height: 40, background: `linear-gradient(${THEME.colors.cyan}, transparent)` }}
        />
      </motion.div>
    </section>
  );
}
