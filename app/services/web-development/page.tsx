'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Minus, Plus, Code, Smartphone, HardDrive, ShieldCheck, Zap, Globe, ChevronRight, Sparkles, Terminal, Activity, Server, Cpu } from 'lucide-react';
import ScrollProgress from '../../components/ScrollProgress';
import CursorGlow from '../../components/CursorGlow';

// ====================
// DATA
// ====================
const SERVICE_ID = "web-development";
const BRAND_COLOR = "#7c3aed";
const BRAND_GRADIENT = "linear-gradient(135deg, #7c3aed, #06b6d4)";

const features = [
  { icon: <Zap size={28} />, title: 'Sub-Second Loading', desc: 'Server-side rendering (SSR), static generation (SSG), and edge caching deliver blazing-fast sub-second load times.' },
  { icon: <Smartphone size={28} />, title: 'Adaptive Resourcing', desc: 'Dynamic assets that look stunning on everything from 4K industrial monitors to high-DPI smartphones.' },
  { icon: <Globe size={28} />, title: 'Sovereign SEO', desc: 'Semantic HTML5, Core Web Vitals optimization, and structured JSON-LD data built into the core architecture.' },
  { icon: <ShieldCheck size={28} />, title: 'Hardened Security', desc: 'HTTPS, CSRF protection, rate limiting, and industry-standard security protocols protecting your enterprise assets.' },
  { icon: <Code size={28} />, title: 'API-First Design', desc: 'Headless CMS integrations, high-performance GraphQL endpoints, and seamless RESTful data synchronization.' },
  { icon: <HardDrive size={28} />, title: 'Elastic Scalability', desc: 'Microservices and serverless architectures designed to handle sudden traffic spikes with zero downtime.' },
];

const process = [
  { num: '01', title: 'Discovery & Strategy', desc: 'We dive deep into your business goals, target audience, and architecture requirements.' },
  { num: '02', title: 'UX/UI Prototyping', desc: "Interactive wireframes and high-fidelity mockups. You see the product before code is written." },
  { num: '03', title: 'Agile Engineering', desc: 'Rapid development sprints using the latest tech stacks and strictly typed, maintainable code.' },
  { num: '04', title: 'Deployment & Scale', desc: 'Rigorous QA, seamless CI/CD pipeline deployment, and 24/7 post-launch infrastructure support.' },
];

const faqs = [
  { q: 'Which frameworks do you use for web development?', a: 'We primarily use Next.js 15+, React 19, and TypeScript for the frontend. For backing services, we utilize Node.js, Express, and FastAPI. All projects follow modern best practices including App Router, Server Components, and Edge Functions.' },
  { q: 'Can you redesign my existing website?', a: "Absolutely. We handle full architectural redesigns, performance audits, and incremental upgrades. We'll audit your current site, identify friction points, and deliver a modern, conversion-focused ecosystem." },
  { q: 'Do you build custom admin dashboards?', a: 'Yes. We build feature-rich admin panels with role-based access control (RBAC), real-time analytics dashboards, and custom CMS functionality tailored to your specific business operations.' },
  { q: 'How do you ensure website security?', a: 'Every project includes HTTPS/SSL, environment variable protection, rate limiting, input validation, XSS & CSRF protection, and regular security dependency audits.' },
];

const techStack = ['Next.js 15', 'React 19', 'TypeScript', 'Node.js', 'TailwindCSS', 'PostgreSQL', 'MongoDB', 'Redis', 'AWS Edge', 'Vercel', 'GraphQL', 'RESTful API'];

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

export default function WebDevelopmentPage() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <div style={{ background: '#ffffff', color: '#0f172a', overflowX: 'hidden' }}>
      <ScrollProgress />
      <CursorGlow />
      {/* Navbar handled in layout.tsx */}

      {/* ─── 1. PREMIUM ARCHITECTURAL HERO ─── */}
      <section style={{ paddingTop: '120px', paddingBottom: '140px', position: 'relative', overflow: 'hidden' }}>
        {/* Ambient Glows */}
        <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: '900px', height: '900px', background: 'radial-gradient(circle, rgba(124,58,237,0.1) 0%, transparent 70%)', zIndex: 0 }} />
        <div style={{ position: 'absolute', bottom: '0', left: '-5%', width: '700px', height: '700px', background: 'radial-gradient(circle, rgba(6,182,212,0.06) 0%, transparent 70%)', zIndex: 0 }} />
        
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '80px', alignItems: 'center' }}>
            
            {/* PREMIUM 3D VISUAL (LEFT) */}
            <motion.div 
               initial={{ opacity: 0, scale: 0.8, x: -20 }} 
               animate={{ opacity: 1, scale: 1, x: 0 }} 
               transition={{ duration: 1.2, ease: "easeOut" }}
               className="visible"
            >
              <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                {/* Floating Glow Behind Image */}
                <div style={{ 
                  position: 'absolute', 
                  top: '40%', 
                  left: '50%', 
                  transform: 'translate(-50%, -50%)',
                  width: '130%', 
                  height: '130%', 
                  background: `radial-gradient(circle, ${BRAND_COLOR}12 0%, transparent 70%)`,
                  zIndex: -1
                }} />
                
                {/* THE FLOATING IMAGE */}
                <motion.img 
                  animate={{ y: [0, -25, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  src="/3D computer image-Photoroom.png" 
                  alt="Web Development Engineering"
                  style={{ 
                    width: '100%', 
                    height: 'auto', 
                    maxHeight: '580px', 
                    objectFit: 'contain',
                    filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.1))',
                    zIndex: 2,
                    position: 'relative'
                  }} 
                />

                {/* FLOOR SHADOW */}
                <motion.div
                  animate={{ 
                    scale: [1, 0.75, 1], 
                    opacity: [0.3, 0.1, 0.3],
                    filter: ['blur(15px)', 'blur(25px)', 'blur(15px)']
                  }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  style={{
                    width: '70%',
                    height: '40px',
                    background: 'radial-gradient(ellipse at center, rgba(124,58,237,0.3) 0%, transparent 70%)',
                    borderRadius: '50%',
                    marginTop: '-20px',
                    zIndex: 1
                  }}
                />
              </div>
            </motion.div>

            {/* HERO TEXT (RIGHT) */}
            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: `#f5f3ff`, border: `1px solid #ddd6fe`, borderRadius: '100px', padding: '8px 20px', marginBottom: '32px' }}>
                <Sparkles size={14} color={BRAND_COLOR} />
                <span style={{ fontSize: '12px', fontWeight: 900, color: BRAND_COLOR, letterSpacing: '2.5px', textTransform: 'uppercase' }}>Web Architecture</span>
              </div>
              
              <h1 style={{ fontSize: 'clamp(44px, 6vw, 84px)', fontWeight: 950, lineHeight: 1, letterSpacing: '-4px', marginBottom: '32px' }}>
                Engineering <br />
                <span className="gradient-text">Absolute Velocity.</span>
              </h1>
              
              <p style={{ fontSize: '20px', color: '#475569', lineHeight: 1.6, marginBottom: '48px', maxWidth: '560px' }}>
                We architect high-performance, server-side rendered platforms with industrial-grade Next.js infrastructure. Optimized for global expansion and conversion dominance.
              </p>
              
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
                <Link href="/contact" className="btn-primary" style={{ padding: '20px 48px', fontSize: '16px', background: BRAND_GRADIENT, color: '#fff', borderRadius: '100px', fontWeight: 800, textDecoration: 'none', boxShadow: `0 20px 40px ${BRAND_COLOR}30`, display: 'flex', alignItems: 'center', gap: '10px' }}>
                  Initiate Build <ChevronRight size={18} />
                </Link>
                <Link href="/portfolio" style={{ padding: '20px 40px', fontSize: '16.5px', color: '#0f172a', border: '1px solid #e2e8f0', borderRadius: '100px', fontWeight: 700, textDecoration: 'none' }}>
                  System Gallery
                </Link>
              </div>

              {/* Lighthouse Stats Placeholder */}
              <div style={{ marginTop: '60px', display: 'flex', gap: '24px' }}>
                {['Performance', 'Accessibility', 'SEO', 'Best Practices'].map(stat => (
                    <div key={stat} style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        <div style={{ width: '44px', height: '44px', borderRadius: '50%', border: '3px solid #10b981', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: 900, color: '#10b981' }}>100</div>
                        <div style={{ fontSize: '10px', fontWeight: 800, color: '#64748b', textTransform: 'uppercase', letterSpacing: '1px', textAlign: 'center' }}>{stat.split(' ')[0]}</div>
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
          <div className="grid-4" style={{ gap: '1px', background: '#f1f5f9', border: '1px solid #f1f5f9', borderRadius: '32px', overflow: 'hidden' }}>
            {[
              { num: '200+', label: 'Platforms Engineered', sub: 'High-Scale Deployments' },
              { num: '0.4s', label: 'Average LCP', sub: 'Lighthouse Score 100/100' },
              { num: '99.9%', label: 'Infrastructure Uptime', sub: 'Zero-Maintenance Scalability' },
              { num: '3.4x', label: 'Conversion Utility', sub: 'User-First Architecture' },
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

      {/* ─── 3. CAPABILITIES GRID (SOFT CODEC GLASS) ─── */}
      <section style={{ padding: '140px 0', background: '#f8fafc', borderTop: '1px solid #f1f5f9', borderBottom: '1px solid #f1f5f9' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '100px', maxWidth: '800px', margin: '0 auto 100px' }}>
            <span style={{ color: BRAND_COLOR, fontWeight: 900, textTransform: 'uppercase', fontSize: '12px', letterSpacing: '3px', display: 'block', marginBottom: '16px' }}>Core Expertise</span>
            <h2 style={{ fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: 950, color: '#0f172a', letterSpacing: '-2.5px', lineHeight: 1 }}>
                Engineering <span className="gradient-text">Dominance.</span>
            </h2>
            <p style={{ fontSize: '19px', color: '#64748b', marginTop: '24px', lineHeight: 1.6 }}>
                We don&apos;t build generic websites. We engineer high-performance engines designed for competitive superiority.
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

      {/* ─── 3.5. SHOWCASE EXPANSION ─── */}
      {/* Section 1: Desktop Mockup */}
      <section style={{ padding: '120px 0', background: '#fff' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '80px', alignItems: 'center' }}>
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span style={{ color: BRAND_COLOR, fontWeight: 900, textTransform: 'uppercase', fontSize: '12px', letterSpacing: '3px', display: 'block', marginBottom: '16px' }}>Pixel Perfection</span>
              <h2 style={{ fontSize: '48px', fontWeight: 950, letterSpacing: '-2px', marginBottom: '24px' }}>High-Fidelity <br />Engineering.</h2>
              <p style={{ fontSize: '18px', color: '#64748b', lineHeight: 1.7, marginBottom: '40px' }}>
                Every pixel is engineered for sub-second performance. We transform abstract designs into high-performance digital engines that dominate your market. Our code is as clean as the visuals we produce.
              </p>
              <div style={{ display: 'flex', gap: '20px' }}>
                <Link href="/contact" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: BRAND_COLOR, fontWeight: 800, textDecoration: 'none', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                    View Standards <ChevronRight size={16} />
                </Link>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
              <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <motion.img 
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  src="/Desktop Website Mock-Up V2-Photoroom.png" 
                  alt="Desktop Mockup"
                  style={{ width: '100%', height: 'auto', maxHeight: '480px', objectFit: 'contain', filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.1))', zIndex: 2 }}
                />
                <motion.div
                  animate={{ scale: [1, 0.85, 1], opacity: [0.2, 0.1, 0.2] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  style={{ width: '60%', height: '30px', background: 'radial-gradient(ellipse at center, rgba(0,0,0,0.3) 0%, transparent 70%)', borderRadius: '50%', marginTop: '-15px', zIndex: 1, filter: 'blur(10px)' }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 2: Corporate Design (ALT Layout) */}
      <section style={{ padding: '120px 0', background: '#f8fafc' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '80px', alignItems: 'center' }}>
             <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
              <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <motion.img 
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  src="/Corporate homepage design-Photoroom.png" 
                  alt="Corporate Design"
                  style={{ width: '100%', height: 'auto', maxHeight: '480px', objectFit: 'contain', filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.1))', zIndex: 2 }}
                />
                <motion.div
                  animate={{ scale: [1, 0.85, 1], opacity: [0.2, 0.1, 0.2] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  style={{ width: '60%', height: '30px', background: 'radial-gradient(ellipse at center, rgba(0,0,0,0.3) 0%, transparent 70%)', borderRadius: '50%', marginTop: '-15px', zIndex: 1, filter: 'blur(10px)' }}
                />
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span style={{ color: BRAND_COLOR, fontWeight: 900, textTransform: 'uppercase', fontSize: '12px', letterSpacing: '3px', display: 'block', marginBottom: '16px' }}>Enterprise Standards</span>
              <h2 style={{ fontSize: '48px', fontWeight: 950, letterSpacing: '-2px', marginBottom: '24px' }}>Architected for <br />Corporate Scale.</h2>
              <p style={{ fontSize: '18px', color: '#64748b', lineHeight: 1.7, marginBottom: '40px' }}>
                Our corporate ecosystems are built to support global traffic spikes and complex business logic. We ensure your digital headquarters represents your brand with absolute authority.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '30px' }}>
                 <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: BRAND_COLOR }} />
                    <span style={{ fontSize: '11px', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '1px' }}>Global CDN</span>
                 </div>
                 <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: BRAND_COLOR }} />
                    <span style={{ fontSize: '11px', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '1px' }}>DDoS Protection</span>
                 </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 3: Auto Follow-up */}
      <section style={{ padding: '120px 0', background: '#fff' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '80px', alignItems: 'center' }}>
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span style={{ color: BRAND_COLOR, fontWeight: 900, textTransform: 'uppercase', fontSize: '12px', letterSpacing: '3px', display: 'block', marginBottom: '16px' }}>Sales Automation</span>
              <h2 style={{ fontSize: '48px', fontWeight: 950, letterSpacing: '-2px', marginBottom: '24px' }}>Autonomous Lead <br />Ecosystems.</h2>
              <p style={{ fontSize: '18px', color: '#64748b', lineHeight: 1.7, marginBottom: '40px' }}>
                Convert interest into revenue without lifting a finger. We build intelligent automation systems that handle lead nurturing while you focus on scaling your core operations.
              </p>
              <Link href="/contact" className="btn-primary" style={{ padding: '16px 32px', fontSize: '14px', background: BRAND_GRADIENT, color: '#fff', borderRadius: '100px', fontWeight: 800, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
                  Deploy Automation <Zap size={16} />
              </Link>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
               <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <motion.img 
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                  src="/Let your system follow up automatically no more…-Photoroom.png" 
                  alt="Auto Follow-up"
                  style={{ width: '100%', height: 'auto', maxHeight: '480px', objectFit: 'contain', filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.1))', zIndex: 2 }}
                />
                <motion.div
                  animate={{ scale: [1, 0.85, 1], opacity: [0.2, 0.1, 0.2] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                  style={{ width: '60%', height: '30px', background: 'radial-gradient(ellipse at center, rgba(0,0,0,0.3) 0%, transparent 70%)', borderRadius: '50%', marginTop: '-15px', zIndex: 1, filter: 'blur(10px)' }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── 4. THE TECH ARSENAL (PREMIUM PILLS) ─── */}
      <section style={{ padding: '120px 0', background: '#fff' }}>
        <div className="container">
          <div className="grid-2" style={{ gap: '40px', alignItems: 'center' }}>
            <div>
              <span style={{ color: BRAND_COLOR, fontWeight: 900, textTransform: 'uppercase', fontSize: '12px', letterSpacing: '3px', display: 'block', marginBottom: '16px' }}>Industrial Stack</span>
              <h2 style={{ fontSize: '48px', fontWeight: 950, letterSpacing: '-2px', marginBottom: '24px' }}>The Arsenal of <br />Market Leaders.</h2>
              <p style={{ fontSize: '18px', color: '#64748b', lineHeight: 1.7, marginBottom: '40px' }}>
                We utilize a high-performance stack that prioritizes sub-second delivery, ironclad security, and limitless scalability.
              </p>
              <div style={{ display: 'flex', gap: '40px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <Server size={32} color={BRAND_COLOR} />
                    <div style={{ fontSize: '13px', fontWeight: 800 }}>Node.js / Edge</div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <Cpu size={32} color={BRAND_COLOR} />
                    <div style={{ fontSize: '13px', fontWeight: 800 }}>Type-Safe TS</div>
                </div>
              </div>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
              {techStack.map((tech, i) => (
                <motion.div
                  key={tech}
                  whileHover={{ y: -5, background: '#f8fafc', borderColor: BRAND_COLOR }}
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
          <h2 style={{ fontSize: '40px', fontWeight: 900, textAlign: 'center', marginBottom: '60px', letterSpacing: '-1.5px' }}>Technical <span style={{ color: BRAND_COLOR }}>Briefing.</span></h2>
          <div>
            {faqs.map((f, i) => <FAQItem key={i} question={f.q} answer={f.a} />)}
          </div>
        </div>
      </section>

      {/* Footer handled in layout.tsx */}
    </div>
  );
}
