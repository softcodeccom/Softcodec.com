'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Minus, Plus, Smartphone, Layers, Bell, WifiOff, CreditCard, Activity, ChevronRight, Apple, Play, Sparkles, Layout } from 'lucide-react';
import ScrollProgress from '../../components/ScrollProgress';
import CursorGlow from '../../components/CursorGlow';

// ====================
// DATA
// ====================
const SERVICE_ID = "mobile-apps";
const BRAND_COLOR = "#06b6d4";
const BRAND_GRADIENT = "linear-gradient(135deg, #06b6d4, #7c3aed)";

const features = [
  { icon: <Layers size={28} />, title: 'Cross-Platform Native', desc: 'React Native delivers truly native UI components — not a web view — for buttery-smooth performance on both iOS and Android.' },
  { icon: <Smartphone size={28} />, title: 'Pixel-Perfect UI', desc: 'Custom animations, fluid transitions, and platform-specific design patterns that make users feel right at home.' },
  { icon: <Bell size={28} />, title: 'Push Notifications', desc: 'Reach users when it matters most. Real-time push notifications with deep linking and rich media out of the box.' },
  { icon: <WifiOff size={28} />, title: 'Offline-First', desc: 'Local data sync, optimistic updates, and background refresh so your app works flawlessly without internet.' },
  { icon: <CreditCard size={28} />, title: 'In-App Purchases', desc: 'Native Apple Pay, Google Pay, and subscription management built for high conversion.' },
  { icon: <Activity size={28} />, title: 'Analytics & Tracking', desc: 'Firebase and Sentry integration to track user behavior and identify issues before users report them.' },
];

const process = [
  { num: '01', title: 'Strategy & UX', desc: 'User personas, journey mapping, and app architecture designed for maximum retention and engagement.' },
  { num: '02', title: 'Design System', desc: 'Platform-specific design in Figma — iOS Human Interface & Material Design guidelines.' },
  { num: '03', title: 'Development', desc: 'React Native + TypeScript with clean component architecture. Weekly demo builds on TestFlight & Google Play.' },
  { num: '04', title: 'Launch & ASO', desc: 'App Store & Google Play submission, metadata optimization, and crash-free release monitoring.' },
];

const faqs = [
  { q: 'Do you build for both iOS and Android?', a: 'Yes! We primarily use React Native which lets us build a single codebase that runs natively on both platforms. For performance-critical features, we can write native modules in Swift/Kotlin as needed.' },
  { q: 'How long does it take to build a mobile app?', a: 'A standard MVP takes 8-12 weeks. Feature-rich apps with complex backends may take 4-6 months. We break every project into 2-week sprints with working demo builds throughout.' },
  { q: 'Can you rebuild an existing app?', a: 'Absolutely. We specialize in app modernization — migrating from outdated codebases, improving performance, redesigning the UX, and adding new features without breaking what works.' },
  { q: 'Do you help with App Store submission?', a: 'Yes, we handle the full submission process for both the Apple App Store and Google Play Store, including app review compliance, metadata optimization, and screenshot creation.' },
];

// ====================
// COMPONENTS
// ====================
function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ borderBottom: '1px solid #e2e8f0', marginBottom: '16px' }}>
      <button
        onClick={() => setOpen(!open)}
        style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '24px 0', background: 'transparent', border: 'none', cursor: 'pointer', textAlign: 'left', color: '#0f172a', fontSize: '18px', fontWeight: 700 }}
      >
        {question}
        <motion.div animate={{ rotate: open ? 180 : 0 }} style={{ color: BRAND_COLOR }}>
          {open ? <Minus size={20} /> : <Plus size={20} />}
        </motion.div>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            style={{ overflow: 'hidden' }}
          >
            <p style={{ paddingBottom: '24px', color: '#64748b', lineHeight: 1.7, fontSize: '15px' }}>{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function MobileAppsPage() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <div style={{ background: '#ffffff', color: '#0f172a', overflowX: 'hidden' }}>
      <ScrollProgress />
      <CursorGlow />
      {/* Navbar handled in layout.tsx */}

      {/* ─── 1. PREMIUM ARCHITECTURAL HERO ─── */}
      <section style={{ paddingTop: '180px', paddingBottom: '140px', position: 'relative', overflow: 'hidden', background: '#ffffff' }}>
        {/* Ambient Glows removed for clean white background as per user request */}

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '80px', alignItems: 'center' }}>

            {/* PREMIUM MOBILE VISUAL (LEFT) */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }} 
              animate={{ opacity: 1, scale: 1 }} 
              transition={{ duration: 1.2 }}
              className="visible"
              style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}
            >
              <div style={{ position: 'relative', zIndex: 2 }}>
                <motion.img 
                  animate={{ y: [0, -20, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                  src="/Placehunter - Mobile App UX_UI.png" 
                  alt="Mobile App Engineering"
                  style={{ width: '100%', maxWidth: '500px', height: 'auto', filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.1))' }}
                />
                
                {/* Dynamic Floor Shadow */}
                <motion.div
                  animate={{ 
                    scale: [1, 0.8, 1],
                    opacity: [0.2, 0.1, 0.2]
                  }}
                  transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                  style={{ 
                    width: '70%', 
                    height: '40px', 
                    background: 'radial-gradient(ellipse at center, rgba(6,182,212,0.3) 0%, transparent 70%)', 
                    borderRadius: '50%', 
                    margin: '-40px auto 0',
                    filter: 'blur(15px)',
                    zIndex: 1
                  }}
                />
              </div>

              {/* Status Pill (Floating) */}
              <motion.div 
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                style={{ 
                  position: 'absolute', top: '40px', left: '-20px', 
                  background: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(20px)',
                  padding: '16px 24px', borderRadius: '20px', border: '1px solid #f1f5f9',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.1)', display: 'flex', alignItems: 'center', gap: '12px', zIndex: 3
                }}
              >
                <Apple size={18} color="#000" />
                <span style={{ fontSize: '14px', fontWeight: 800, color: '#0f172a' }}>Top 10 App Store</span>
              </motion.div>
            </motion.div>

            {/* HERO TEXT (RIGHT) */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: `#f0f9ff`, border: `1px solid #bae6fd`, borderRadius: '100px', padding: '8px 20px', marginBottom: '32px' }}>
                <Sparkles size={14} color={BRAND_COLOR} />
                <span style={{ fontSize: '12px', fontWeight: 900, color: BRAND_COLOR, letterSpacing: '2.5px', textTransform: 'uppercase' }}>Mobile Engineering</span>
              </div>

              <h1 style={{ fontSize: 'clamp(44px, 6vw, 84px)', fontWeight: 950, lineHeight: 1, letterSpacing: '-4px', marginBottom: '32px', color: '#0f172a' }}>
                Apps that <br />
                <span className="gradient-text">Command Attention.</span>
              </h1>

              <p style={{ fontSize: '20px', color: '#475569', lineHeight: 1.6, marginBottom: '48px', maxWidth: '560px' }}>
                Industrial-grade mobile solutions for iOS and Android. We forge high-performance React Native applications that scale from a thousand users to ten million.
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
                <Link href="/contact" className="btn-primary" style={{
                  padding: '20px 48px', fontSize: '16px', background: BRAND_GRADIENT, color: '#fff',
                  borderRadius: '100px', fontWeight: 800, textDecoration: 'none',
                  boxShadow: `0 20px 40px ${BRAND_COLOR}40`, display: 'flex', alignItems: 'center', gap: '10px'
                }}>
                  Initiate Build <ChevronRight size={18} />
                </Link>

                <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                  <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: '#f1f5f9', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #e2e8f0' }}>
                    <Apple size={20} color="#0f172a" />
                  </div>
                  <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: '#f1f5f9', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #e2e8f0' }}>
                    <Play size={20} color="#0f172a" />
                  </div>
                </div>
              </div>

              {/* Trust Badge */}
              <div style={{ marginTop: '60px', display: 'flex', alignItems: 'center', gap: '16px', opacity: 0.6 }}>
                <div style={{ display: 'flex', gap: '-4px' }}>
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} style={{ width: '28px', height: '28px', borderRadius: '50%', background: '#cbd5e1', border: '2px solid #fff', marginLeft: i === 1 ? 0 : '-8px' }} />
                  ))}
                </div>
                <div style={{ fontSize: '13px', fontWeight: 700, color: '#64748b' }}>Trusted by 40+ Enterprise Partners</div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ─── 2. ENTERPRISE STATS ─── */}
      <section style={{ padding: '0 0 120px' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1px', background: '#f1f5f9', border: '1px solid #f1f5f9', borderRadius: '32px', overflow: 'hidden' }}>
            {[
              { num: '80+', label: 'Apps Published', sub: 'iOS & Android' },
              { num: '4.8★', label: 'Store Rating', sub: 'Average Score' },
              { num: '2.5M', label: 'User Installs', sub: 'Aggregate Reach' },
              { num: '0.1s', label: 'P99 Latency', sub: 'Core Interaction' },
            ].map((s, i) => (
              <div key={i} style={{ background: '#fff', padding: '48px 32px', textAlign: 'center' }}>
                <div style={{ fontSize: '42px', fontWeight: 950, color: '#0f172a', letterSpacing: '-2px', marginBottom: '4px', fontFamily: 'Orbitron' }}>{s.num}</div>
                <div style={{ fontSize: '13px', fontWeight: 800, color: BRAND_COLOR, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '4px' }}>{s.label}</div>
                <div style={{ fontSize: '12px', color: '#94a3b8', fontWeight: 500 }}>{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 3. CAPABILITIES GRID ─── */}
      <section style={{ padding: '140px 0', background: '#f8fafc', borderTop: '1px solid #f1f5f9', borderBottom: '1px solid #f1f5f9' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '100px', maxWidth: '800px', margin: '0 auto 100px' }}>
            <span style={{ color: BRAND_COLOR, fontWeight: 900, textTransform: 'uppercase', fontSize: '12px', letterSpacing: '3px', display: 'block', marginBottom: '16px' }}>Core Expertise</span>
            <h2 style={{ fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: 950, color: '#0f172a', letterSpacing: '-2.5px', lineHeight: 1 }}>
              Engineering <span className="gradient-text">Excellence.</span>
            </h2>
            <p style={{ fontSize: '19px', color: '#64748b', marginTop: '24px', lineHeight: 1.6 }}>
              Every app we build forges a deeper connection between your brand and your users.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '32px' }}>
            {features.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -12 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                style={{
                  background: '#ffffff', padding: '48px', borderRadius: '32px',
                  border: '1px solid #f1f5f9', boxShadow: '0 20px 50px rgba(0,0,0,0.03)',
                  display: 'flex', flexDirection: 'column', gap: '24px'
                }}
              >
                <div style={{ width: '64px', height: '64px', borderRadius: '20px', background: `${BRAND_COLOR}10`, color: BRAND_COLOR, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{f.icon}</div>
                <div>
                  <h3 style={{ fontSize: '22px', fontWeight: 900, color: '#0f172a', marginBottom: '12px' }}>{f.title}</h3>
                  <p style={{ fontSize: '15px', color: '#64748b', lineHeight: 1.8 }}>{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 4. REAL-TIME INTERACTION SECTION ─── */}
      <section style={{ padding: '80px 0', background: '#020205', position: 'relative', overflow: 'hidden' }}>
        {/* Subtle Ambient Background */}
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '800px', height: '800px', background: 'radial-gradient(circle, rgba(6,182,212,0.12) 0%, transparent 70%)', filter: 'blur(80px)', zIndex: 0 }} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1.2fr) minmax(0, 1fr)', gap: '80px', alignItems: 'center' }}>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              style={{ position: 'relative' }}
            >
              <motion.img
                src="/Alpine – Premium Mountain Rentals App UI_UX Designs.png"
                alt="Real-time Messaging Interface"
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />

              {/* Data Floating Elements */}
              <motion.div
                animate={{ x: [0, 10, 0], y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                style={{ position: 'absolute', top: '20px', right: '-20px', background: BRAND_GRADIENT, width: '12px', height: '12px', borderRadius: '50%', boxShadow: `0 0 20px ${BRAND_COLOR}` }}
              />
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', textAlign: 'right' }}>
              <span style={{ color: BRAND_COLOR, fontWeight: 900, letterSpacing: '3px', fontSize: '12px', textTransform: 'uppercase', marginBottom: '16px', display: 'block' }}>Instant Connectivity</span>
              <h2 style={{ fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: 950, color: '#ffffff', lineHeight: 1.1, letterSpacing: '-2.5px', marginBottom: '32px' }}>
                Immersive <br />
                <span className="gradient-text">Real-time Gear.</span>
              </h2>
              <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, marginBottom: '48px', maxWidth: '500px' }}>
                We engineer low-latency messaging engines and real-time data pipelines that keep your users connected. From instant marketplace negotiation to live collaboration — we build it for scale.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', width: '100%' }}>
                <div style={{ padding: '24px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '20px', textAlign: 'right' }}>
                  <div style={{ fontSize: '24px', fontWeight: 900, color: '#ffffff', marginBottom: '4px' }}>&lt;100ms</div>
                  <div style={{ fontSize: '11px', color: '#64748b', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px' }}>Global Latency</div>
                </div>
                <div style={{ padding: '24px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '20px', textAlign: 'right' }}>
                  <div style={{ fontSize: '24px', fontWeight: 900, color: '#ffffff', marginBottom: '4px' }}>E2E</div>
                  <div style={{ fontSize: '11px', color: '#64748b', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px' }}>Encryption Built-in</div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ─── 4. FAQ ─── */}
      <section style={{ padding: '140px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '40px', fontWeight: 900, marginBottom: '60px', textAlign: 'center', letterSpacing: '-1.5px' }}>App Development <span style={{ color: BRAND_COLOR }}>Insights.</span></h2>
            {faqs.map((f, i) => <FAQItem key={i} question={f.q} answer={f.a} />)}
          </div>
        </div>
      </section>

      {/* Footer handled in layout.tsx */}
    </div>
  );
}
