'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Minus, Plus, Megaphone, Share2, TrendingUp, Mail, Target, Users, ChevronRight, BarChart, MousePointerClick } from 'lucide-react';
import ScrollProgress from '../../components/ScrollProgress';
import CursorGlow from '../../components/CursorGlow';

// ====================
// DATA
// ====================
const SERVICE_ID = "digital-marketing";
const BRAND_COLOR = "#f43f5e"; // Rose
const BRAND_GRADIENT = "linear-gradient(135deg, #f43f5e, #fb923c)"; // Rose to Orange

const features = [
  { icon: <Target size={28} />, title: 'Performance Marketing', desc: 'Aggressive, data-driven Google and Meta ad campaigns engineered strictly to minimize Customer Acquisition Cost (CAC) and maximize ROAS.' },
  { icon: <Share2 size={28} />, title: 'Brand Omnipresence', desc: 'Strategic domination across Instagram, LinkedIn, and TikTok. We do not just post; we engineer virality and build fiercely loyal communities.' },
  { icon: <Mail size={28} />, title: 'Automated Lifecycle', desc: 'Complex email and SMS trigger flows that autonomously recover carts, nurture cold leads, and exponentially increase Lifetime Value (LTV).' },
  { icon: <MousePointerClick size={28} />, title: 'Conversion Rate Opt (CRO)', desc: 'Relentless A/B testing of landing pages, copy, and CTAs to ensure the traffic we generate mathematically mathematically has to convert.' },
  { icon: <Users size={28} />, title: 'Creator Ecosystems', desc: 'Activating highly-vetted influencer networks and user-generated content (UGC) to manufacture authentic, massive social proof at scale.' },
  { icon: <Megaphone size={28} />, title: 'Positioning Strategy', desc: 'Carving out an undeniable market position. We define your brand voice so sharply that your competition becomes irrelevant.' },
];

const process = [
  { num: '01', title: 'Data Extraction', desc: 'Deep-dive analysis of your current analytics, competitor ad libraries, and market gaps to establish a dominant baseline.' },
  { num: '02', title: 'Funnel Architecture', desc: 'Designing the absolute shortest, most compelling path from cold prospect to paid customer, engineered to prevent drop-off.' },
  { num: '03', title: 'Creative Forge', desc: 'Developing high-converting ad assets, aggressive direct-response copywriting, and configuring bulletproof pixel tracking.' },
  { num: '04', title: 'Scale & Kill', desc: 'Deploying capital. We brutally cut underperforming ads and aggressively funnel budget into winning creatives for maximum scale.' },
];

const faqs = [
  { q: 'How does SoftCodec differ from average marketing agencies?', a: 'We operate as a growth partner, entirely focused on revenue. We do not report on vanity metrics like "impressions" or "likes." Our sole KPIs are Return On Ad Spend (ROAS), Cost Per Acquisition (CPA), and net revenue generated.' },
  { q: 'What is the required capital to begin scaling?', a: 'For performance marketing to exit the algorithmic learning phases effectively, we mandate a minimum ad spend of $5,000/month. Anything less starves the AI of the data required to optimize.' },
  { q: 'Do you handle the creative asset production?', a: 'Yes. Our internal creative teams produce high-end UGC style videos, motion graphics, and static assets designed specifically for algorithmic disruption and high CTR.' },
  { q: 'How fast can we expect a positive ROAS?', a: 'While initial testing phases take 14-30 days to collect baseline data, our aggressive CRO and creative testing protocols typically yield profitable ROAS scaling within the first 45-60 days.' },
];

const techStack = ['Google Ads / PMax', 'Meta Business Matrix', 'TikTok For Business', 'LinkedIn Campaign HQ', 'Klaviyo', 'ActiveCampaign', 'Triple Whale', 'GA4 Advanced', 'PostHog', 'Segment'];

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

export default function DigitalMarketingPage() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <div style={{ background: '#ffffff', color: '#0f172a', overflowX: 'hidden' }}>
      <ScrollProgress />
      <CursorGlow />
      {/* Navbar handled globally */}

      {/* ─── 1. PREMIUM MARKETING HERO ─── */}
      <section style={{ paddingTop: '120px', paddingBottom: '160px', position: 'relative', overflow: 'hidden' }}>
        {/* Ambient Glows */}
        <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: '900px', height: '900px', background: 'radial-gradient(circle, rgba(244,63,94,0.08) 0%, transparent 70%)', zIndex: 0 }} />
        <div style={{ position: 'absolute', bottom: '0', left: '-5%', width: '700px', height: '700px', background: 'radial-gradient(circle, rgba(251,146,60,0.06) 0%, transparent 70%)', zIndex: 0 }} />
        
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '80px', alignItems: 'center' }}>
            
            {/* PREMIUM MARKETING VISUAL (LEFT) */}
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
                  src="/Digital Marketing-Photoroom.png" 
                  alt="Digital Marketing Architecture"
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
                    background: 'radial-gradient(ellipse at center, rgba(244,63,94,0.3) 0%, transparent 70%)', 
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
                <BarChart size={18} color="#10b981" />
                <span style={{ fontSize: '14px', fontWeight: 800, color: '#0f172a' }}>ROAS: 6.4x</span>
              </motion.div>
            </motion.div>

            {/* HERO TEXT (RIGHT) */}
            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: `#ffe4e6`, border: `1px solid #fecdd3`, borderRadius: '100px', padding: '8px 20px', marginBottom: '32px' }}>
                <TrendingUp size={14} color={BRAND_COLOR} />
                <span style={{ fontSize: '12px', fontWeight: 900, color: BRAND_COLOR, letterSpacing: '2.5px', textTransform: 'uppercase' }}>Performance Marketing</span>
              </div>
              
              <h1 style={{ fontSize: 'clamp(44px, 6vw, 84px)', fontWeight: 950, lineHeight: 1, letterSpacing: '-4px', marginBottom: '32px' }}>
                Marketing That <br />
                <span className="gradient-text">Scales Revenue.</span>
              </h1>
              
              <p style={{ fontSize: '20px', color: '#475569', lineHeight: 1.6, marginBottom: '48px', maxWidth: '560px' }}>
                We engineer data-driven acquisition engines. Eradicate vanity metrics and aggressively scale your customer base using calculated, high-converting performance marketing.
              </p>
              
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
                <Link href="/contact" className="btn-primary" style={{ padding: '20px 48px', fontSize: '16px', background: BRAND_GRADIENT, color: '#fff', borderRadius: '100px', fontWeight: 800, textDecoration: 'none', boxShadow: `0 20px 40px ${BRAND_COLOR}30`, display: 'flex', alignItems: 'center', gap: '10px' }}>
                  Commence Scaling <ChevronRight size={18} />
                </Link>
                <Link href="/services" style={{ padding: '20px 40px', fontSize: '16.5px', color: '#0f172a', border: '1px solid #e2e8f0', borderRadius: '100px', fontWeight: 700, textDecoration: 'none' }}>
                  All Capabilities
                </Link>
              </div>

              {/* Trust Indicators */}
              <div style={{ marginTop: '60px', display: 'flex', gap: '32px' }}>
                {[
                  { icon: <BarChart size={18} />, label: 'ROI Focused' },
                  { icon: <Target size={18} />, label: 'Precision Ads' },
                  { icon: <Users size={18} />, label: 'LTV Optimization' }
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
              { num: '4.8x', label: 'Average ROAS', sub: 'Calculated baseline' },
              { num: '$80M+', label: 'Ad Spend Handled', sub: 'Across Meta & Google' },
              { num: '-45%', label: 'CPA Reduction', sub: 'Using precise targeting' },
              { num: '500+', label: 'Scaling Campaigns', sub: 'Currently active' },
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

      {/* ─── 3. CAPABILITIES GRID (MARKETING GLASS) ─── */}
      <section style={{ padding: '140px 0', background: '#f8fafc', borderTop: '1px solid #f1f5f9', borderBottom: '1px solid #f1f5f9' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '100px', maxWidth: '800px', margin: '0 auto 100px' }}>
            <span style={{ color: BRAND_COLOR, fontWeight: 900, textTransform: 'uppercase', fontSize: '12px', letterSpacing: '3px', display: 'block', marginBottom: '16px' }}>Growth Capabilities</span>
            <h2 style={{ fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: 950, color: '#0f172a', letterSpacing: '-2.5px', lineHeight: 1 }}>
                The Engine For <span className="gradient-text">Domination.</span>
            </h2>
            <p style={{ fontSize: '19px', color: '#64748b', marginTop: '24px', lineHeight: 1.6 }}>
                We construct omnichannel acquisition pipelines that systematically hunt, capture, and convert complete strangers into absolute loyalists.
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

      {/* ─── 4. THE MARKETING ARSENAL (PREMIUM PILLS) ─── */}
      <section style={{ padding: '120px 0', background: '#fff' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.2fr)', gap: '100px', alignItems: 'center' }}>
            <div>
              <span style={{ color: BRAND_COLOR, fontWeight: 900, textTransform: 'uppercase', fontSize: '12px', letterSpacing: '3px', display: 'block', marginBottom: '16px' }}>Acquisition Stack</span>
              <h2 style={{ fontSize: '48px', fontWeight: 950, letterSpacing: '-2px', marginBottom: '24px' }}>The Weapons of <br />Scale.</h2>
              <p style={{ fontSize: '18px', color: '#64748b', lineHeight: 1.7, marginBottom: '40px' }}>
                We deploy millions utilizing the industry's most aggressive ad networks and deepest analytics tracking tools for absolute attribution.
              </p>
              <div style={{ display: 'flex', gap: '40px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <TrendingUp size={32} color={BRAND_COLOR} />
                    <div style={{ fontSize: '13px', fontWeight: 800 }}>Meta / Google PMax</div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <Target size={32} color={BRAND_COLOR} />
                    <div style={{ fontSize: '13px', fontWeight: 800 }}>Triple Whale</div>
                </div>
              </div>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
              {techStack.map((tech) => (
                <motion.div
                  key={tech}
                  whileHover={{ y: -5, background: '#ffe4e6', borderColor: BRAND_COLOR }}
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
          <h2 style={{ fontSize: '40px', fontWeight: 900, textAlign: 'center', marginBottom: '60px', letterSpacing: '-1.5px' }}>Growth <span style={{ color: BRAND_COLOR }}>Briefing.</span></h2>
          <div>
            {faqs.map((f, i) => <FAQItem key={i} question={f.q} answer={f.a} />)}
          </div>
        </div>
      </section>

      {/* Footer handled in layout.tsx */}
    </div>
  );
}
