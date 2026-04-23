'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Minus, Plus, Palette, Smartphone, Sparkles, Layers, Figma, Search, ChevronRight, PenTool, LayoutTemplate, Box } from 'lucide-react';
import ScrollProgress from '../../components/ScrollProgress';
import CursorGlow from '../../components/CursorGlow';

// ====================
// DATA
// ====================
const SERVICE_ID = "ui-ux-design";
const BRAND_COLOR = "#f59e0b"; // Amber
const BRAND_GRADIENT = "linear-gradient(135deg, #f59e0b, #ec4899)"; // Amber to Pink

const features = [
  { icon: <Palette size={28} />, title: 'Immersive UI Design', desc: 'Aesthetic superiority combined with functional clarity. We forge visual identities that instantly communicate premium quality and build absolute trust.' },
  { icon: <Search size={28} />, title: 'Cognitive UX Research', desc: 'Data-driven psychological mapping. We eliminate friction points before they exist and engineer pathways that naturally guide users to conversion.' },
  { icon: <Figma size={28} />, title: 'High-Fidelity Prototyping', desc: 'Interactive, pixel-perfect Figma prototypes that feel exactly like the final product, ensuring complete alignment before a single line of code is written.' },
  { icon: <Layers size={28} />, title: 'Scalable Design Systems', desc: 'Robust token-based component libraries (utilizing Atomic Design principles) that ensure your brand remains perfectly consistent across massive digital ecosystems.' },
  { icon: <Smartphone size={28} />, title: 'Adaptive Human-centric', desc: 'Flawless execution across every viewport. From 4K enterprise dashboards to native mobile applications, the experience remains uncompromising.' },
  { icon: <Sparkles size={28} />, title: 'Spatial Motion Design', desc: 'Purposeful micro-animations and spatial transitions that provide critical user feedback, reduce perceived latency, and breathe life into static interfaces.' },
];

const process = [
  { num: '01', title: 'Cognitive Mapping', desc: 'Deep-dive stakeholder interviews, competitor teardowns, and user journey mapping to establish a dominant market strategy.' },
  { num: '02', title: 'Architectural Wireframing', desc: 'Low-fidelity structural blueprints focused entirely on information hierarchy, data flow, and frictionless conversion paths.' },
  { num: '03', title: 'Aesthetic Forge', desc: 'Transforming wireframes into stunning, high-fidelity visual spectacles with meticulously defined typography, color theory, and motion.' },
  { num: '04', title: 'Developer Handoff', desc: 'Zero-friction handoff to engineering teams with fully documented component states, design tokens, and interactive guidelines.' },
];

const faqs = [
  { q: 'What is the distinction between UI and UX?', a: 'UX (User Experience) is the invisible architecture—how intuitive the product feels, the logical flow, and the friction-reduction logic. UI (User Interface) is the visible skin—the typography, spatial balancing, color palettes, and micro-interactions that make the product aesthetically dominant.' },
  { q: 'Do you design for cross-platform environments?', a: 'Always. We employ a responsive, mobile-first design philosophy engineered to scale seamlessly from smartwatches and mobile devices up to enterprise-grade desktop software screens.' },
  { q: 'Can you inherit and elevate our existing brand guidelines?', a: 'Absolutely. We specialize in brand evolution. We can strictly adhere to your established identity, or radically modernize it into a comprehensive digital design system built for the next decade.' },
  { q: 'What is your primary architectural toolset?', a: 'We architect entirely in Figma for cloud-collaborative UI/UX and rapid prototyping. For advanced motion and spatial design, we leverage Framer, Adobe After Effects, and Spline 3D.' },
];

const techStack = ['Figma', 'Framer', 'Spline 3D', 'Adobe Creative Suite', 'Principle', 'Protopie', 'Storybook', 'Miro', 'Zeplin', 'Rive'];

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

export default function UIUXDesignPage() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <div style={{ background: '#ffffff', color: '#0f172a', overflowX: 'hidden' }}>
      <ScrollProgress />
      <CursorGlow />
      {/* Navbar handled in layout.tsx */}

      {/* ─── 1. PREMIUM DESIGN HERO ─── */}
      <section style={{ paddingTop: '120px', paddingBottom: '160px', position: 'relative', overflow: 'hidden' }}>
        {/* Ambient Glows */}
        <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: '900px', height: '900px', background: 'radial-gradient(circle, rgba(245,158,11,0.08) 0%, transparent 70%)', zIndex: 0 }} />
        <div style={{ position: 'absolute', bottom: '0', left: '-5%', width: '700px', height: '700px', background: 'radial-gradient(circle, rgba(236,72,153,0.06) 0%, transparent 70%)', zIndex: 0 }} />
        
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '80px', alignItems: 'center' }}>
            
            {/* PREMIUM UI FORGE VISUAL (LEFT) */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }} 
              animate={{ opacity: 1, scale: 1 }} 
              transition={{ duration: 1.2 }}
              className="hide-mobile"
              style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}
            >
              <div style={{ position: 'relative', zIndex: 2 }}>
                <motion.img 
                  animate={{ y: [0, -20, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                  src="/3d uiux mobile screen with user elements _ Premium Photo-Photoroom.png" 
                  alt="Premium UI Design"
                  style={{ width: '100%', maxWidth: '550px', height: 'auto', filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.1))' }}
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
                    background: 'radial-gradient(ellipse at center, rgba(245,158,11,0.3) 0%, transparent 70%)', 
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
                <Figma size={18} color="#0ACF83" />
                <span style={{ fontSize: '14px', fontWeight: 800, color: '#0f172a' }}>Atomic Design Systems</span>
              </motion.div>
            </motion.div>

            {/* HERO TEXT (RIGHT) */}
            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: `#fef3c7`, border: `1px solid #fde68a`, borderRadius: '100px', padding: '8px 20px', marginBottom: '32px' }}>
                <Sparkles size={14} color={BRAND_COLOR} />
                <span style={{ fontSize: '12px', fontWeight: 900, color: BRAND_COLOR, letterSpacing: '2.5px', textTransform: 'uppercase' }}>Digital Architecture</span>
              </div>
              
              <h1 style={{ fontSize: 'clamp(44px, 6vw, 84px)', fontWeight: 950, lineHeight: 1, letterSpacing: '-4px', marginBottom: '32px' }}>
                Aesthetics That <br />
                <span className="gradient-text">Command Action.</span>
              </h1>
              
              <p style={{ fontSize: '20px', color: '#475569', lineHeight: 1.6, marginBottom: '48px', maxWidth: '560px' }}>
                We engineer visually dominant, hyper-intuitive digital interfaces. From elite enterprise dashboards to disruptive consumer apps, we construct experiences that users categorically prefer.
              </p>
              
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
                <Link href="/contact" className="btn-primary" style={{ padding: '20px 48px', fontSize: '16px', background: BRAND_GRADIENT, color: '#fff', borderRadius: '100px', fontWeight: 800, textDecoration: 'none', boxShadow: `0 20px 40px ${BRAND_COLOR}30`, display: 'flex', alignItems: 'center', gap: '10px' }}>
                  Commission Design <ChevronRight size={18} />
                </Link>
                <Link href="/portfolio" style={{ padding: '20px 40px', fontSize: '16.5px', color: '#0f172a', border: '1px solid #e2e8f0', borderRadius: '100px', fontWeight: 700, textDecoration: 'none' }}>
                  Visual Vault
                </Link>
              </div>

              {/* Design Core Indicators */}
              <div style={{ marginTop: '60px', display: 'flex', gap: '32px' }}>
                {[
                  { icon: <LayoutTemplate size={18} />, label: 'Spatial Flow' },
                  { icon: <PenTool size={18} />, label: 'Aesthetics' },
                  { icon: <Box size={18} />, label: '3D Spatial' }
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', opacity: 0.7 }}>
                    <div style={{ color: BRAND_COLOR }}>{item.icon}</div>
                    <div style={{ fontSize: '12px', fontWeight: 800, color: '#64748b', textTransform: 'uppercase', letterSpacing: '1px' }}>{item.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ─── 2. ENTERPRISE STATS GRID ─── */}
      <section style={{ padding: '0 0 120px' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1px', background: '#f1f5f9', border: '1px solid #f1f5f9', borderRadius: '32px', overflow: 'hidden' }}>
            {[
              { num: '300+', label: 'Interfaces Architected', sub: 'Global Deployments' },
              { num: '4.9/5', label: 'Client Satisfaction', sub: 'Verified External Rating' },
              { num: '85%', label: 'Retention Lift', sub: 'Average post-redesign' },
              { num: '50%', label: 'Bounce Reduction', sub: 'Through cognitive UX' },
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

      {/* ─── 3. CAPABILITIES GRID (DESIGN GLASS) ─── */}
      <section style={{ padding: '140px 0', background: '#f8fafc', borderTop: '1px solid #f1f5f9', borderBottom: '1px solid #f1f5f9' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '100px', maxWidth: '800px', margin: '0 auto 100px' }}>
            <span style={{ color: BRAND_COLOR, fontWeight: 900, textTransform: 'uppercase', fontSize: '12px', letterSpacing: '3px', display: 'block', marginBottom: '16px' }}>Design Capabilities</span>
            <h2 style={{ fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: 950, color: '#0f172a', letterSpacing: '-2.5px', lineHeight: 1 }}>
                Aesthetics That <span className="gradient-text">Function.</span>
            </h2>
            <p style={{ fontSize: '19px', color: '#64748b', marginTop: '24px', lineHeight: 1.6 }}>
                We refuse to compromise between beauty and utility. Our products are visually arresting and logically flawless.
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

      {/* ─── 3.5. MOBILE-FIRST UX SHOWCASE ─── */}
      <section style={{ padding: '120px 0', background: '#fff' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '80px', alignItems: 'center' }}>
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span style={{ color: BRAND_COLOR, fontWeight: 900, textTransform: 'uppercase', fontSize: '12px', letterSpacing: '3px', display: 'block', marginBottom: '16px' }}>Mobile Domination</span>
              <h2 style={{ fontSize: '48px', fontWeight: 950, letterSpacing: '-2px', marginBottom: '24px' }}>Native-Grade <br />Mobile UX.</h2>
              <p style={{ fontSize: '18px', color: '#64748b', lineHeight: 1.7, marginBottom: '40px' }}>
                We engineer mobile experiences that users don't just use, they inhabit. Our mobile-first philosophy ensures sub-second feedback loops and thumb-optimized interactions that maximize user retention.
              </p>
              <div style={{ display: 'flex', gap: '20px' }}>
                <Link href="/contact" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: BRAND_COLOR, fontWeight: 800, textDecoration: 'none', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                    View Mobile Systems <ChevronRight size={16} />
                </Link>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
              <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <motion.img 
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  src="/Notifications UI AI design_ Control center glassmorphism-Photoroom.png" 
                  alt="Mobile UX Design"
                  style={{ width: '100%', height: 'auto', maxHeight: '500px', objectFit: 'contain', filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.1))', zIndex: 2 }}
                />
                <motion.div
                  animate={{ scale: [1, 0.85, 1], opacity: [0.2, 0.1, 0.2] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  style={{ width: '60%', height: '30px', background: 'radial-gradient(ellipse at center, rgba(245,158,11,0.3) 0%, transparent 70%)', borderRadius: '50%', marginTop: '-15px', zIndex: 1, filter: 'blur(10px)' }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── 4. THE DESIGN ARSENAL (PREMIUM PILLS) ─── */}
      <section style={{ padding: '120px 0', background: '#fff' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.2fr)', gap: '100px', alignItems: 'center' }}>
            <div>
              <span style={{ color: BRAND_COLOR, fontWeight: 900, textTransform: 'uppercase', fontSize: '12px', letterSpacing: '3px', display: 'block', marginBottom: '16px' }}>Design Arsenal</span>
              <h2 style={{ fontSize: '48px', fontWeight: 950, letterSpacing: '-2px', marginBottom: '24px' }}>The Core of <br />Creative Logic.</h2>
              <p style={{ fontSize: '18px', color: '#64748b', lineHeight: 1.7, marginBottom: '40px' }}>
                We utilize an elite, industry-standard stack of prototyping and spatial design tools to ensure precision perfect handoffs.
              </p>
              <div style={{ display: 'flex', gap: '40px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <Figma size={32} color={BRAND_COLOR} />
                    <div style={{ fontSize: '13px', fontWeight: 800 }}>Figma UI/UX</div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <Box size={32} color={BRAND_COLOR} />
                    <div style={{ fontSize: '13px', fontWeight: 800 }}>Spline / WebGL</div>
                </div>
              </div>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
              {techStack.map((tech) => (
                <motion.div
                  key={tech}
                  whileHover={{ y: -5, background: '#fef3c7', borderColor: BRAND_COLOR }}
                  style={{
                    padding: '16px 32px', borderRadius: '100px', border: '1px solid #e2e8f0',
                    fontSize: '15px', fontWeight: 800, color: '#0f172a', transition: 'all 0.3s'
                  }}
                >
                  {tech}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── 5. FAQ ─── */}
      <section style={{ padding: '140px 0', background: '#f8fafc', borderTop: '1px solid #f1f5f9' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 style={{ fontSize: '40px', fontWeight: 900, textAlign: 'center', marginBottom: '60px', letterSpacing: '-1.5px' }}>Design <span style={{ color: BRAND_COLOR }}>Briefing.</span></h2>
          <div>
            {faqs.map((f, i) => <FAQItem key={i} question={f.q} answer={f.a} />)}
          </div>
        </div>
      </section>

      {/* Footer handled in layout.tsx */}
    </div>
  );
}
