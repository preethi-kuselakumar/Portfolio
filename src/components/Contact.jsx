import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { AnimatePresence, motion } from 'framer-motion';
import { THEME } from '../theme';
import GlassCard from './ui/GlassCard';
import SectionLabel from './ui/SectionLabel';
import SectionTitle from './ui/SectionTitle';

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error | config_error

  const hasConfig = Boolean(EMAILJS_SERVICE_ID && EMAILJS_TEMPLATE_ID && EMAILJS_PUBLIC_KEY);

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.message) return;

    if (!hasConfig) {
      setStatus('config_error');
      return;
    }

    try {
      setStatus('sending');
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          reply_to: form.email,
          message: form.message,
        },
        { publicKey: EMAILJS_PUBLIC_KEY },
      );
      setStatus('sent');
      setForm({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 3500);
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3500);
    }
  };

  const inputStyle = {
    width: '100%',
    padding: '14px 18px',
    borderRadius: 10,
    background: 'rgba(255,255,255,0.04)',
    border: '1px solid rgba(255,255,255,0.12)',
    color: '#fff',
    fontSize: 15,
    fontFamily: "'DM Sans', sans-serif",
    outline: 'none',
    boxSizing: 'border-box',
    transition: 'border 0.2s',
  };

  return (
    <section id="contact" style={{ padding: THEME.spacing.section, maxWidth: 1100, margin: '0 auto' }}>
      <SectionLabel>Contact</SectionLabel>
      <SectionTitle>
        Let&apos;s <span style={{ color: THEME.colors.cyan }}>work together</span>
      </SectionTitle>

      <div className="grid-2" style={{ display: 'grid', gridTemplateColumns: '0.95fr 1.05fr', gap: 40, alignItems: 'start' }}>
        <div>
          <p style={{ color: 'rgba(255,255,255,0.55)', lineHeight: 1.8, fontSize: 16, marginBottom: 40, fontFamily: "'DM Sans', sans-serif" }}>
            Have a question or want to collaborate? Send a message and I&apos;ll get back to you.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {[
              { label: 'Email', val: 'kpreethi706@gmail.com', href: 'mailto:kpreethi706@gmail.com' },
              { label: 'GitHub', val: 'github.com/preethi-kuselakumar', href: 'https://github.com/preethi-kuselakumar' },
              { label: 'LinkedIn', val: 'linkedin.com/in/preethi-kuselakumar', href: 'https://linkedin.com/in/preethi-kuselakumar' },
            ].map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                whileHover={{ x: 4 }}
                style={{ display: 'flex', flexDirection: 'column', gap: 2, textDecoration: 'none' }}
              >
                <span style={{ color: THEME.colors.cyan, fontSize: 11, fontFamily: "'Space Mono', monospace", letterSpacing: 2 }}>
                  {item.label.toUpperCase()}
                </span>
                <span style={{ color: 'rgba(255,255,255,0.65)', fontSize: 14, fontFamily: "'DM Sans', sans-serif" }}>{item.val}</span>
              </motion.a>
            ))}
          </div>
        </div>

        <GlassCard hover={false} style={{ padding: 24 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <input value={form.name} onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))} placeholder="Your Name" style={inputStyle} />
            <input value={form.email} onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))} placeholder="Your Email" style={inputStyle} />
            <textarea
              value={form.message}
              onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
              placeholder="Your Message"
              rows={5}
              style={{ ...inputStyle, resize: 'vertical', minHeight: 150 }}
            />

            <AnimatePresence mode="wait">
              {status === 'sent' ? (
                <motion.div
                  key="sent"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  style={{
                    background: `${THEME.colors.cyan}18`,
                    border: `1px solid ${THEME.colors.cyan}44`,
                    borderRadius: 10,
                    padding: '14px 24px',
                    color: THEME.colors.cyan,
                    fontFamily: "'Space Mono', monospace",
                    fontSize: 14,
                    textAlign: 'center',
                  }}
                >
                  ✓ Message sent!
                </motion.div>
              ) : status === 'config_error' ? (
                <motion.div
                  key="config_error"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  style={{
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.16)',
                    borderRadius: 10,
                    padding: '14px 24px',
                    color: 'rgba(255,255,255,0.75)',
                    fontFamily: "'Space Mono', monospace",
                    fontSize: 12,
                    textAlign: 'center',
                    lineHeight: 1.6,
                  }}
                >
                  Email sending is not configured yet. Add your EmailJS keys in a local <span style={{ color: THEME.colors.cyan }}>.env</span> file.
                </motion.div>
              ) : status === 'error' ? (
                <motion.div
                  key="error"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  style={{
                    background: 'rgba(255,70,70,0.10)',
                    border: '1px solid rgba(255,70,70,0.35)',
                    borderRadius: 10,
                    padding: '14px 24px',
                    color: 'rgba(255,255,255,0.85)',
                    fontFamily: "'Space Mono', monospace",
                    fontSize: 12,
                    textAlign: 'center',
                    lineHeight: 1.6,
                  }}
                >
                  Something went wrong. Please try again, or email me directly.
                </motion.div>
              ) : (
                <motion.button
                  key="btn"
                  onClick={handleSubmit}
                  disabled={status === 'sending'}
                  whileHover={status === 'sending' ? {} : { scale: 1.02, boxShadow: `0 0 30px ${THEME.colors.cyan}44` }}
                  whileTap={status === 'sending' ? {} : { scale: 0.98 }}
                  style={{
                    padding: '14px 28px',
                    borderRadius: 10,
                    background: `linear-gradient(135deg, ${THEME.colors.cyan}, #7CF7EA)`,
                    color: THEME.colors.navy,
                    border: 'none',
                    fontFamily: "'Space Mono', monospace",
                    fontWeight: 700,
                    fontSize: 14,
                    cursor: status === 'sending' ? 'not-allowed' : 'pointer',
                    letterSpacing: 1,
                    opacity: status === 'sending' ? 0.7 : 1,
                  }}
                >
                  {status === 'sending' ? 'Sending…' : 'Send Message →'}
                </motion.button>
              )}
            </AnimatePresence>
          </div>
        </GlassCard>
      </div>
    </section>
  );
}
