'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Minus, Plus, ShoppingBag, CreditCard, Package, TrendingUp, Search, Smartphone, ChevronRight, Sparkles, Activity, Server, Database, Store } from 'lucide-react';
import ScrollProgress from '../../components/ScrollProgress';
import CursorGlow from '../../components/CursorGlow';

// ====================
// DATA
// ====================
const SERVICE_ID = "ecommerce";
const BRAND_COLOR = "#10b981"; // Emerald
const BRAND_GRADIENT = "linear-gradient(135deg, #10b981, #06b6d4)";

const features = [
  { icon: <ShoppingBag size={28} />, title: 'Hyper-Converting UX', desc: 'Every component, from landing pages to checkout forms, is engineered and rigorously A/B tested to maximize user conversion rates.' },
  { icon: <CreditCard size={28} />, title: 'Universal Global Payments', desc: 'Frictionless integration with Stripe, PayPal, Apple Pay, and localized gateways to capture global revenue instantly.' },
  { icon: <Package size={28} />, title: 'Intelligent Inventory', desc: 'Real-time synchronization across multiple warehouses, predictive restocking alerts, and seamless supplier management.' },
  { icon: <TrendingUp size={28} />, title: 'Data-Driven Analytics', desc: 'Deep integrations with GA4 and internal ML engines to track Customer Lifetime Value, cart abandonment, and predictive pacing.' },
  { icon: <Search size={28} />, title: 'AI Commerce Search', desc: 'Elasticsearch and vector-based product discovery with typo-tolerance, ensuring users find what they need in milliseconds.' },
  { icon: <Smartphone size={28} />, title: 'Mobile-First Dominance', desc: 'Native-feeling Progressive Web Apps (PWAs) with one-tap checkout and sub-second navigation designed exclusively for thumbs.' },
];

const process = [
  { num: '01', title: 'Market Positioning', desc: 'Deep competitor analysis and UX strategy designed specifically to capture and dominate your target demographic.' },
  { num: '02', title: 'Architecture & Design', desc: 'High-fidelity Figma prototyping ensuring frictionless user flows and a checkout experience that practically sells itself.' },
  { num: '03', title: 'Headless Engineering', desc: 'Next.js decoupled frontend paired with the optimal custom or enterprise backend, guaranteeing blazing speed.' },
  { num: '04', title: 'Zero-Downtime Launch', desc: 'Rigorous payment gateway testing, load balancing for launch day spikes, and immediate post-launch conversion tracking.' },
];

const faqs = [
  { q: 'What e-commerce architecture do you build on?', a: 'We architect premium Headless Commerce solutions. The frontend is invariably Next.js 14+ for absolute speed, interacting with a decoupled backend like Shopify Plus, Magento, or a highly customized Node.js/Prisma microservice layer.' },
  { q: 'Can you handle complex product variations?', a: 'Yes. We architect data structures that smoothly handle tens of thousands of SKUs, complex matrix variants, bundled items, and custom pricing tiers without degrading site speed.' },
  { q: 'Is it possible to migrate without destroying my SEO?', a: 'Absolutely. We specialize in zero-friction migrations. We construct comprehensive 301 redirect maps, migrate the entire product catalog, user base, and order history while retaining or improving your current search rankings.' },
  { q: 'How do you guarantee load times under 1 second?', a: 'Through aggressive Edge caching, Incremental Static Regeneration (ISR), optimized WebP image delivery, and eliminating database bottlenecks during the critical rendering path.' },
];

const techStack = ['Next.js 15', 'Shopify Plus', 'Headless Commerce', 'Stripe API', 'WooCommerce', 'Elasticsearch', 'Redis Edge', 'PostgreSQL', 'Prisma ORM', 'AWS Architecture'];

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

export default function EcommercePage() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <div style={{ background: '#ffffff', color: '#0f172a', overflowX: 'hidden' }}>
      <ScrollProgress />
      <CursorGlow />
      {/* Navbar handled in layout.tsx */}

      {/* ─── 1. PREMIUM RETAIL HERO ─── */}
      <section style={{ paddingTop: '120px', paddingBottom: '160px', position: 'relative', overflow: 'hidden' }}>
        {/* Ambient Glows */}
        <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: '900px', height: '900px', background: 'radial-gradient(circle, rgba(16,185,129,0.08) 0%, transparent 70%)', zIndex: 0 }} />
        <div style={{ position: 'absolute', bottom: '0', left: '-5%', width: '700px', height: '700px', background: 'radial-gradient(circle, rgba(6,182,212,0.06) 0%, transparent 70%)', zIndex: 0 }} />
        
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '80px', alignItems: 'center' }}>
            
            {/* PREMIUM E-COMMERCE VISUAL (LEFT) */}
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
                  src="/eco.png" 
                  alt="E-commerce Design"
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
                    background: 'radial-gradient(ellipse at center, rgba(16,185,129,0.3) 0%, transparent 70%)', 
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
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#10b981' }} />
                <span style={{ fontSize: '14px', fontWeight: 800, color: '#0f172a' }}>Conversion: +32%</span>
              </motion.div>
            </motion.div>

            {/* HERO TEXT (RIGHT) */}
            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: `#ecfdf5`, border: `1px solid #a7f3d0`, borderRadius: '100px', padding: '8px 20px', marginBottom: '32px' }}>
                <Sparkles size={14} color={BRAND_COLOR} />
                <span style={{ fontSize: '12px', fontWeight: 900, color: BRAND_COLOR, letterSpacing: '2.5px', textTransform: 'uppercase' }}>Digital Retail</span>
              </div>
              
              <h1 style={{ fontSize: 'clamp(44px, 6vw, 84px)', fontWeight: 950, lineHeight: 1, letterSpacing: '-4px', marginBottom: '32px' }}>
                Stores That <br />
                <span className="gradient-text">Dominate Sales.</span>
              </h1>
              
              <p style={{ fontSize: '20px', color: '#475569', lineHeight: 1.6, marginBottom: '48px', maxWidth: '560px' }}>
                We engineer elite Headless E-Commerce ecosystems. Blazing speed, frictionless checkouts, and an architecture designed strictly for maximum revenue capture.
              </p>
              
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
                <Link href="/contact" className="btn-primary" style={{ padding: '20px 48px', fontSize: '16px', background: BRAND_GRADIENT, color: '#fff', borderRadius: '100px', fontWeight: 800, textDecoration: 'none', boxShadow: `0 20px 40px ${BRAND_COLOR}30`, display: 'flex', alignItems: 'center', gap: '10px' }}>
                  Commission Store <ChevronRight size={18} />
                </Link>
                <Link href="/portfolio" style={{ padding: '20px 40px', fontSize: '16.5px', color: '#0f172a', border: '1px solid #e2e8f0', borderRadius: '100px', fontWeight: 700, textDecoration: 'none' }}>
                  Retail Case Studies
                </Link>
              </div>

              {/* Trust Indicators */}
              <div style={{ marginTop: '60px', display: 'flex', gap: '32px' }}>
                {[
                  { icon: <Store size={18} />, label: 'Headless Systems' },
                  { icon: <CreditCard size={18} />, label: 'High-Volume' },
                  { icon: <Activity size={18} />, label: 'Edge-Cached' }
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
              { num: '50+', label: 'Stores Engineered', sub: 'Global Deployments' },
              { num: '$40M+', label: 'Processed Revenue', sub: 'Through our systems' },
              { num: '< 0.8s', label: 'LCP Load Time', sub: 'Instant Render Engine' },
              { num: '32%', label: 'Checkout Lift', sub: 'Measured post-launch' },
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

      {/* ─── 3. CAPABILITIES GRID (RETAIL GLASS) ─── */}
      <section style={{ padding: '140px 0', background: '#f8fafc', borderTop: '1px solid #f1f5f9', borderBottom: '1px solid #f1f5f9' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '100px', maxWidth: '800px', margin: '0 auto 100px' }}>
            <span style={{ color: BRAND_COLOR, fontWeight: 900, textTransform: 'uppercase', fontSize: '12px', letterSpacing: '3px', display: 'block', marginBottom: '16px' }}>Retail Capabilities</span>
            <h2 style={{ fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: 950, color: '#0f172a', letterSpacing: '-2.5px', lineHeight: 1 }}>
                Architected to <span className="gradient-text">Convert.</span>
            </h2>
            <p style={{ fontSize: '19px', color: '#64748b', marginTop: '24px', lineHeight: 1.6 }}>
                Every pixel and milliseconds is optimized to funnel your users into a zero-friction checkout experience.
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

      {/* ─── 3.5. RETAIL ECOSYSTEM SHOWCASE ─── */}
      <section style={{ padding: '120px 0', background: '#fff' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '80px', alignItems: 'center' }}>
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span style={{ color: BRAND_COLOR, fontWeight: 900, textTransform: 'uppercase', fontSize: '12px', letterSpacing: '3px', display: 'block', marginBottom: '16px' }}>Retail Ecosystem</span>
              <h2 style={{ fontSize: '48px', fontWeight: 950, letterSpacing: '-2px', marginBottom: '24px' }}>Global Scale <br />Architectures.</h2>
              <p style={{ fontSize: '18px', color: '#64748b', lineHeight: 1.7, marginBottom: '40px' }}>
                Whether you are launching your first flagship or scaling to a global multi-store ecosystem, our headless architectures provide the absolute speed and reliability needed to dominate the digital retail space.
              </p>
              <div style={{ display: 'flex', gap: '20px' }}>
                <Link href="/contact" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: BRAND_COLOR, fontWeight: 800, textDecoration: 'none', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                    Scale Your Store <ChevronRight size={16} />
                </Link>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
              <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <motion.img 
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  src="/Os 6 E-commerces Mais Confiáveis do Brasil 2025 🛒✨-Photoroom.png" 
                  alt="E-commerce Ecosystem"
                  style={{ width: '100%', height: 'auto', maxHeight: '500px', objectFit: 'contain', filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.1))', zIndex: 2 }}
                />
                <motion.div
                  animate={{ scale: [1, 0.85, 1], opacity: [0.2, 0.1, 0.2] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  style={{ width: '60%', height: '30px', background: 'radial-gradient(ellipse at center, rgba(16,185,129,0.3) 0%, transparent 70%)', borderRadius: '50%', marginTop: '-15px', zIndex: 1, filter: 'blur(10px)' }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── 3.7. ENTERPRISE ANALYTICS SHOWCASE ─── */}
      <section style={{ padding: '120px 0', background: '#f8fafc', borderTop: '1px solid #f1f5f9', borderBottom: '1px solid #f1f5f9' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '80px', alignItems: 'center' }}>
            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
              <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <motion.img 
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  src="/Tiqmo-Photoroom.png" 
                  alt="Enterprise E-commerce Dashboard"
                  style={{ width: '100%', height: 'auto', maxHeight: '500px', objectFit: 'contain', filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.1))', zIndex: 2 }}
                />
                <motion.div
                  animate={{ scale: [1, 0.85, 1], opacity: [0.2, 0.1, 0.2] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  style={{ width: '60%', height: '30px', background: 'radial-gradient(ellipse at center, rgba(16,185,129,0.3) 0%, transparent 70%)', borderRadius: '50%', marginTop: '-15px', zIndex: 1, filter: 'blur(10px)' }}
                />
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span style={{ color: BRAND_COLOR, fontWeight: 900, textTransform: 'uppercase', fontSize: '12px', letterSpacing: '3px', display: 'block', marginBottom: '16px' }}>Operational Control</span>
              <h2 style={{ fontSize: '48px', fontWeight: 950, letterSpacing: '-2px', marginBottom: '24px' }}>Unified Retail <br />Intelligence.</h2>
              <p style={{ fontSize: '18px', color: '#64748b', lineHeight: 1.7, marginBottom: '40px' }}>
                Command your entire retail empire from a single, high-fidelity dashboard. Monitor real-time global sales, manage multi-region inventory, and automate customer logistics with absolute surgical precision.
              </p>
              <div style={{ display: 'flex', gap: '20px' }}>
                <Link href="/contact" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: BRAND_COLOR, fontWeight: 800, textDecoration: 'none', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                    Access Control Center <ChevronRight size={16} />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── 4. THE COMMERCE ARSENAL (PREMIUM PILLS) ─── */}
      <section style={{ padding: '120px 0', background: '#fff' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.2fr)', gap: '100px', alignItems: 'center' }}>
            <div>
              <span style={{ color: BRAND_COLOR, fontWeight: 900, textTransform: 'uppercase', fontSize: '12px', letterSpacing: '3px', display: 'block', marginBottom: '16px' }}>Commerce Stack</span>
              <h2 style={{ fontSize: '48px', fontWeight: 950, letterSpacing: '-2px', marginBottom: '24px' }}>The Arsenal of <br />Top Retailers.</h2>
              <p style={{ fontSize: '18px', color: '#64748b', lineHeight: 1.7, marginBottom: '40px' }}>
                We utilize an elite headless stack that isolates the frontend for raw speed, while integrating robust backends for inventory management.
              </p>
              <div style={{ display: 'flex', gap: '40px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <Server size={32} color={BRAND_COLOR} />
                    <div style={{ fontSize: '13px', fontWeight: 800 }}>Headless CMS</div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <CreditCard size={32} color={BRAND_COLOR} />
                    <div style={{ fontSize: '13px', fontWeight: 800 }}>Stripe / Global</div>
                </div>
              </div>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
              {techStack.map((tech) => (
                <motion.div
                  key={tech}
                  whileHover={{ y: -5, background: '#ecfdf5', borderColor: BRAND_COLOR }}
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
          <h2 style={{ fontSize: '40px', fontWeight: 900, textAlign: 'center', marginBottom: '60px', letterSpacing: '-1.5px' }}>Commerce <span style={{ color: BRAND_COLOR }}>Briefing.</span></h2>
          <div>
            {faqs.map((f, i) => <FAQItem key={i} question={f.q} answer={f.a} />)}
          </div>
        </div>
      </section>

      {/* Footer handled in layout.tsx */}
    </div>
  );
}
