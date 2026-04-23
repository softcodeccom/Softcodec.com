'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Minus, Plus, Search, BarChart3, LineChart, Target, FileText, Zap, Key, ChevronRight, Activity, GitBranch } from 'lucide-react';
import ScrollProgress from '../../components/ScrollProgress';
import CursorGlow from '../../components/CursorGlow';

// ====================
// DATA
// ====================
const SERVICE_ID = "seo";
const BRAND_COLOR = "#14b8a6"; // Teal
const BRAND_GRADIENT = "linear-gradient(135deg, #14b8a6, #3b82f6)";

const features = [
  { icon: <Search size={28} />, title: 'Core Technical SEO', desc: 'Aggressive server-side optimizations, Core Web Vital overhauls, and deep schema markup ensuring search engine spiders prioritize your domain.' },
  { icon: <Key size={28} />, title: 'Intent-Based Targeting', desc: 'Surgical competitor analysis to isolate and monopolize high-intent, low-friction keyword clusters that yield immediate commercial value.' },
  { icon: <FileText size={28} />, title: 'Algorithmic Content', desc: 'Deploying high-authority, semantically dense content structures engineered to dominate NLP (Natural Language Processing) evaluation bots.' },
  { icon: <Target size={28} />, title: 'Silo Architecture', desc: 'Constructing robust internal linking silos that pass maximum PageRank juice to your most critical conversion landing pages.' },
  { icon: <Zap size={28} />, title: 'Authority Acquisition', desc: 'Aggressive, white-hat link velocity scaling through high DR (Domain Rating) digital PR and authoritative asset placements.' },
  { icon: <BarChart3 size={28} />, title: 'Absolute Transparency', desc: 'Live dashboards wired directly into Google Search Console and BigQuery, giving you millisecond-accurate insights on your ranking delta.' },
];

const process = [
  { num: '01', title: 'Deep Index Audit', desc: 'We execute a highly technical crawler sweep to diagnose exactly why you are bleeding rank to competitors on Page 1.' },
  { num: '02', title: 'Architecture Refactoring', desc: 'Restructuring your DOM, eliminating render-blocking scripts, and mapping logical topic clusters to dominate search intent.' },
  { num: '03', title: 'Content & Vectorization', desc: 'Injecting LSI keys and semantic vectors into existing pages to create an immediate ranking shockwave.' },
  { num: '04', title: 'Authority Scaling', desc: 'Initiating sustained, high-velocity link acquisition campaigns that mathematically guarantee long-term market dominance.' },
];

const faqs = [
  { q: 'What is the actual timeframe to see ROI?', a: 'SEO compounds exponentially. Technical fixes provide an immediate algorithmic bump in 14-30 days. However, achieving absolute market dominance on highly competitive commercial terms requires a sustained 4 to 6-month aggressive sprint.' },
  { q: 'Can you artificially guarantee the #1 ranking slot?', a: 'No elite agency guarantees a #1 static spot due to AI volatility. However, we guarantee the deployment of mathematically sound, server-grade technical structures that consistently secure massive organic traffic.' },
  { q: 'Why is Technical SEO prioritized over basic content?', a: 'If your server architecture is flawed, Google\'s crawlers will physically fail to index your content, wasting your marketing budget. We rebuild the engine before we paint the car.' },
  { q: 'What analytics infrastructure do you provide?', a: 'We wire up enterprise-grade telemetry. You don\'t just get PDFs; you get live BigQuery-backed data studios tracking keyword delta, crawl budgets, and precise organic attribution.' },
];

const techStack = ['Ahrefs Enterprise', 'Screaming Frog Core', 'Semrush Toolkit', 'Google Search Console API', 'BigQuery', 'Lighthouse CI', 'Next.js Server-Side', 'Schema.org JSON-LD', 'SurferSEO'];

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

export default function SEOPage() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <div style={{ background: '#ffffff', color: '#0f172a', overflowX: 'hidden' }}>
      <ScrollProgress />
      <CursorGlow />
      {/* Navbar handled globally */}

      {/* ─── 1. PREMIUM SEO HERO ─── */}
      <section style={{ paddingTop: '120px', paddingBottom: '160px', position: 'relative', overflow: 'hidden' }}>
        {/* Ambient Glows */}
        <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: '900px', height: '900px', background: 'radial-gradient(circle, rgba(20,184,166,0.08) 0%, transparent 70%)', zIndex: 0 }} />
        <div style={{ position: 'absolute', bottom: '0', left: '-5%', width: '700px', height: '700px', background: 'radial-gradient(circle, rgba(59,130,246,0.06) 0%, transparent 70%)', zIndex: 0 }} />
        
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '80px', alignItems: 'center' }}>
            
            {/* PREMIUM SEO VISUAL (LEFT) */}
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
                  src="/Google Search-Photoroom.png" 
                  alt="SEO Dominance"
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
                    background: 'radial-gradient(ellipse at center, rgba(20,184,166,0.3) 0%, transparent 70%)', 
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
                <Activity size={18} color="#10b981" />
                <span style={{ fontSize: '14px', fontWeight: 800, color: '#0f172a' }}>Visibility: +340%</span>
              </motion.div>
            </motion.div>

            {/* HERO TEXT (RIGHT) */}
            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: `#ccfbf1`, border: `1px solid #99f6e4`, borderRadius: '100px', padding: '8px 20px', marginBottom: '32px' }}>
                <Activity size={14} color={BRAND_COLOR} />
                <span style={{ fontSize: '12px', fontWeight: 900, color: BRAND_COLOR, letterSpacing: '2.5px', textTransform: 'uppercase' }}>Search Architecture</span>
              </div>
              
              <h1 style={{ fontSize: 'clamp(44px, 6vw, 84px)', fontWeight: 950, lineHeight: 1, letterSpacing: '-4px', marginBottom: '32px' }}>
                Dominate The <br />
                <span className="gradient-text">Algorithm.</span>
              </h1>
              
              <p style={{ fontSize: '20px', color: '#475569', lineHeight: 1.6, marginBottom: '48px', maxWidth: '560px' }}>
                We engineer high-velocity SEO structures. Eradicate your competitors from Page 1 by weaponizing technical architecture, semantic data, and authority acquisition.
              </p>
              
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
                <Link href="/contact" className="btn-primary" style={{ padding: '20px 48px', fontSize: '16px', background: BRAND_GRADIENT, color: '#fff', borderRadius: '100px', fontWeight: 800, textDecoration: 'none', boxShadow: `0 20px 40px ${BRAND_COLOR}30`, display: 'flex', alignItems: 'center', gap: '10px' }}>
                  Commence Audit <ChevronRight size={18} />
                </Link>
                <Link href="/portfolio" style={{ padding: '20px 40px', fontSize: '16.5px', color: '#0f172a', border: '1px solid #e2e8f0', borderRadius: '100px', fontWeight: 700, textDecoration: 'none' }}>
                  View Rankings
                </Link>
              </div>

              {/* Trust Indicators */}
              <div style={{ marginTop: '60px', display: 'flex', gap: '32px' }}>
                {[
                  { icon: <Target size={18} />, label: 'Intent Targeting' },
                  { icon: <GitBranch size={18} />, label: 'Silo Architecture' },
                  { icon: <Key size={18} />, label: 'High DR Links' }
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
              { num: '500%', label: 'Delta Increase', sub: 'Average organic growth' },
              { num: 'Page 1', label: 'Monopoly Status', sub: 'High-commercial intent' },
              { num: '0.8s', label: 'Render Velocity', sub: 'Technical SEO baseline' },
              { num: '100+', label: 'High-DR Assets', sub: 'Authority backlinks built' },
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

      {/* ─── 3. CAPABILITIES GRID (SEO GLASS) ─── */}
      <section style={{ padding: '140px 0', background: '#f8fafc', borderTop: '1px solid #f1f5f9', borderBottom: '1px solid #f1f5f9' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '100px', maxWidth: '800px', margin: '0 auto 100px' }}>
            <span style={{ color: BRAND_COLOR, fontWeight: 900, textTransform: 'uppercase', fontSize: '12px', letterSpacing: '3px', display: 'block', marginBottom: '16px' }}>Ranking Capabilities</span>
            <h2 style={{ fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: 950, color: '#0f172a', letterSpacing: '-2.5px', lineHeight: 1 }}>
                Engineering <span className="gradient-text">Authority.</span>
            </h2>
            <p style={{ fontSize: '19px', color: '#64748b', marginTop: '24px', lineHeight: 1.6 }}>
                SEO is not magic. It is applied mathematics, server optimization, and rigid architectural silos that force Google to respect your domain.
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

      {/* ─── 3.5. SEMANTIC MASTERY SHOWCASE ─── */}
      <section style={{ padding: '120px 0', background: '#fff' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '80px', alignItems: 'center' }}>
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span style={{ color: BRAND_COLOR, fontWeight: 900, textTransform: 'uppercase', fontSize: '12px', letterSpacing: '3px', display: 'block', marginBottom: '16px' }}>Semantic Mastery</span>
              <h2 style={{ fontSize: '48px', fontWeight: 950, letterSpacing: '-2px', marginBottom: '24px' }}>Vectorized <br />Content Silos.</h2>
              <p style={{ fontSize: '18px', color: '#64748b', lineHeight: 1.7, marginBottom: '40px' }}>
                We don't just write blogs. We engineer semantic clusters that satisfy the most complex intent-based ranking signals, forcing Google to recognize your domain as the definitive authority in your niche.
              </p>
              <div style={{ display: 'flex', gap: '20px' }}>
                <Link href="/contact" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: BRAND_COLOR, fontWeight: 800, textDecoration: 'none', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                    Audit Your Silos <ChevronRight size={16} />
                </Link>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
              <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <motion.img 
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  src="/SEO Manager Illustration concept on white background-Photoroom.png" 
                  alt="SEO Authority"
                  style={{ width: '100%', height: 'auto', maxHeight: '500px', objectFit: 'contain', filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.1))', zIndex: 2 }}
                />
                <motion.div
                  animate={{ scale: [1, 0.85, 1], opacity: [0.2, 0.1, 0.2] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  style={{ width: '60%', height: '30px', background: 'radial-gradient(ellipse at center, rgba(20,184,166,0.3) 0%, transparent 70%)', borderRadius: '50%', marginTop: '-15px', zIndex: 1, filter: 'blur(10px)' }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── 4. THE SEO ARSENAL (PREMIUM PILLS) ─── */}
      <section style={{ padding: '120px 0', background: '#fff' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.2fr)', gap: '100px', alignItems: 'center' }}>
            <div>
              <span style={{ color: BRAND_COLOR, fontWeight: 900, textTransform: 'uppercase', fontSize: '12px', letterSpacing: '3px', display: 'block', marginBottom: '16px' }}>Telemetry Stack</span>
              <h2 style={{ fontSize: '48px', fontWeight: 950, letterSpacing: '-2px', marginBottom: '24px' }}>The Weapons of <br />Search.</h2>
              <p style={{ fontSize: '18px', color: '#64748b', lineHeight: 1.7, marginBottom: '40px' }}>
                We utilize enterprise-grade scraping, semantic mapping, and big data architecture to execute our ranking algorithms with zero guess-work.
              </p>
              <div style={{ display: 'flex', gap: '40px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <BarChart3 size={32} color={BRAND_COLOR} />
                    <div style={{ fontSize: '13px', fontWeight: 800 }}>Ahrefs Core</div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <Search size={32} color={BRAND_COLOR} />
                    <div style={{ fontSize: '13px', fontWeight: 800 }}>Screaming Frog</div>
                </div>
              </div>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
              {techStack.map((tech) => (
                <motion.div
                  key={tech}
                  whileHover={{ y: -5, background: '#ccfbf1', borderColor: BRAND_COLOR }}
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
          <h2 style={{ fontSize: '40px', fontWeight: 900, textAlign: 'center', marginBottom: '60px', letterSpacing: '-1.5px' }}>Architecture <span style={{ color: BRAND_COLOR }}>Briefing.</span></h2>
          <div>
            {faqs.map((f, i) => <FAQItem key={i} question={f.q} answer={f.a} />)}
          </div>
        </div>
      </section>

      {/* Footer handled globally */}
    </div>
  );
}
