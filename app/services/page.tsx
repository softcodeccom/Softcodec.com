'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Minus, Plus, Globe, Smartphone, Bot, ShoppingCart, Cloud, Palette, Search, Megaphone, PenTool, LayoutTemplate, ChevronRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollProgress from '../components/ScrollProgress';
import CursorGlow from '../components/CursorGlow';

// ====================
// DATA
// ====================
const BRAND_COLOR = "#7c3aed";
const BRAND_GRADIENT = "linear-gradient(135deg, #7c3aed, #06b6d4)";

const services = [
  { icon: <Globe size={32} />, title: 'Web Development', desc: 'Custom websites, enterprise SaaS, and web apps built with Next.js & React frameworks.', tag: 'Most Popular', color: '#7c3aed', href: '/services/web-development' },
  { icon: <Smartphone size={32} />, title: 'Mobile Apps', desc: 'Native and cross-platform mobile applications for iOS & Android that users love.', tag: 'iOS & Android', color: '#06b6d4', href: '/services/mobile-apps' },
  { icon: <Bot size={32} />, title: 'AI & Automation', desc: 'Intelligent solutions powered by machine learning, NLP, and advanced AI APIs.', tag: 'Trending', color: '#ec4899', href: '/services/ai-automation' },
  { icon: <ShoppingCart size={32} />, title: 'E-Commerce', desc: 'High-converting online stores with seamless checkout, inventory management & analytics.', tag: 'Revenue Booster', color: '#10b981', href: '/services/ecommerce' },
  { icon: <Cloud size={32} />, title: 'Cloud & DevOps', desc: 'Scalable cloud infrastructure, CI/CD pipelines, and DevOps for enterprise teams.', tag: 'Enterprise', color: '#3b82f6', href: '/services/cloud-devops' },
  { icon: <Palette size={32} />, title: 'UI/UX Design', desc: 'Stunning, user-centric designs that convert visitors into loyal customers instantly.', tag: 'Award Winning', color: '#f59e0b', href: '/services/ui-ux-design' },
  { icon: <Search size={32} />, title: 'SEO Optimization', desc: 'Data-driven search strategies that guarantee page-one visibility & dominate traffic.', tag: 'High ROI', color: '#14b8a6', href: '/services/seo' },
  { icon: <Megaphone size={32} />, title: 'Digital Marketing', desc: 'Performance marketing, social media, and campaigns that aggressively drive sales.', tag: 'Growth Engine', color: '#f43f5e', href: '/services/digital-marketing' },
  { icon: <PenTool size={32} />, title: 'Graphic Design', desc: 'Premium branding, logos, illustrations, and visual guidelines that demand attention.', tag: 'Premium', color: '#8b5cf6', href: '/services/graphic-design' },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ borderBottom: '1px solid var(--border-subtle)', marginBottom: '16px' }}>
      <button 
        onClick={() => setOpen(!open)}
        style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '24px 0', background: 'transparent', border: 'none', cursor: 'pointer', textAlign: 'left', color: 'var(--text-primary)', fontSize: '18px', fontWeight: 700 }}
      >
        {question}
        <motion.div animate={{ rotate: open ? 180 : 0 }} style={{ color: BRAND_COLOR }}>
          {open ? <Minus size={20} /> : <Plus size={20} />}
        </motion.div>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: 'easeInOut' }} style={{ overflow: 'hidden' }}>
            <p style={{ paddingBottom: '24px', color: 'var(--text-secondary)', lineHeight: 1.7, fontSize: '15px' }}>{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function ServicesPage() {
  return (
    <div style={{ background: 'var(--bg-primary)', color: 'var(--text-primary)', overflowX: 'hidden' }}>
      <ScrollProgress />
      <CursorGlow />
      <Navbar />

      {/* ─── 1. ARCHITECTURAL DARK HERO WITH BACKGROUND ─── */}
      <section style={{ 
        position: 'relative', 
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '180px', 
        paddingBottom: '80px',
        overflow: 'hidden' 
      }}>
        {/* Background Video & Overlay */}
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <video
            autoPlay
            muted
            loop
            playsInline
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center',
              opacity: 0.95,
            }}
          >
            <source src="/isy-animtion-add-karo.mp4" type="video/mp4" />
          </video>
        </div>
        <div style={{ position: 'absolute', inset: 0, zIndex: 1, background: 'linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.55) 85%, var(--bg-primary) 100%)' }} />
        <div style={{ position: 'absolute', top: 0, right: 0, width: '800px', height: '800px', background: 'radial-gradient(circle, rgba(124,58,237,0.12) 0%, transparent 70%)', zIndex: 1, filter: 'blur(100px)' }} />
        
        <div className="container" style={{ position: 'relative', zIndex: 10, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          
          <div style={{ maxWidth: '800px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <span style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 16px',
                background: 'rgba(139, 92, 246, 0.1)',
                border: '1px solid rgba(139, 92, 246, 0.2)',
                borderRadius: '100px',
                fontSize: '13px',
                fontWeight: 600,
                color: '#a78bfa',
                marginBottom: '32px',
                backdropFilter: 'blur(10px)'
              }}>
                <div className="system-dot" />
                OUR CAPABILITIES
              </span>
              
              <h1 className="section-heading" style={{ color: '#ffffff', marginBottom: '24px' }}>
                Engineering <br />
                <span className="gradient-text">Your Sovereignty</span>
              </h1>
              
              <p className="section-subtext" style={{ fontSize: '20px', color: '#ffffffcc', margin: '0 auto 40px', maxWidth: '650px' }}>
                End-to-end digital solutions from concept to deployment — engineered meticulously to scale your business and outpace the competition.
              </p>
              
              <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' }}>
                <Link href="#all-services" className="btn-primary" style={{ padding: '16px 36px', fontSize: '15px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  Explore Services <ChevronRight size={18} />
                </Link>
              </div>
            </motion.div>
          </div>

        </div>
      </section>

      {/* ─── 2. THE 9 SERVICES 3D GRID ─── */}
      <section id="all-services" style={{ padding: '80px 0 140px', background: 'var(--bg-primary)' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '80px', maxWidth: '700px', margin: '0 auto 80px' }}>
            <span className="system-status" style={{ marginBottom: '24px', justifyContent: 'center' }}>
              <div className="system-dot" />
              CAPABILITIES ALIGNED
            </span>
            <h2 className="section-heading">
              The Engine For <span className="gradient-text">Innovation</span>
            </h2>
            <p className="section-subtext" style={{ fontSize: '18px' }}>
              We build omnipresent digital ecosystems that systematically convert strangers into lifelong customers.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '32px', perspective: '1000px' }}>
            {services.map((s, i) => (
              <Link key={i} href={s.href} style={{ textDecoration: 'none', display: 'block' }}>
                <motion.div 
                  initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} 
                  whileHover={{ y: -10, rotateX: 5, rotateY: -5, boxShadow: `0 30px 60px ${s.color}20` }} 
                  transition={{ duration: 0.4 }} 
                  className="glass-card dark-glass-card"
                  style={{ 
                    padding: '40px', 
                    background: '#000000',
                    border: '1px solid rgba(255,255,255,0.06)',
                    borderTop: '1px solid rgba(255,255,255,0.15)',
                    backdropFilter: 'blur(40px)',
                    WebkitBackdropFilter: 'blur(40px)',
                    position: 'relative', 
                    overflow: 'hidden', 
                    height: '100%', 
                    display: 'flex', 
                    flexDirection: 'column',
                    borderRadius: '24px'
                  }}
                >
                  <span style={{ position: 'absolute', top: '24px', right: '24px', background: `${s.color}15`, color: s.color, border: `1px solid ${s.color}30`, padding: '6px 12px', borderRadius: '100px', fontSize: '11px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px' }}>
                    {s.tag}
                  </span>
                  
                  <div style={{ width: '64px', height: '64px', borderRadius: '16px', background: `${s.color}15`, border: `1px solid ${s.color}30`, color: s.color, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '32px', boxShadow: `0 0 20px ${s.color}20` }}>
                    {s.icon}
                  </div>
                  
                  <h3 style={{ fontSize: '22px', fontWeight: 800, color: '#fff', marginBottom: '16px' }}>{s.title}</h3>
                  <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, flex: 1 }}>{s.desc}</p>
                  
                  <div style={{ marginTop: '32px', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', fontWeight: 800, color: s.color, letterSpacing: '0.5px' }}>
                    Explore Capabilities <span>→</span>
                  </div>
                  
                  <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '3px', background: s.color, opacity: 0, transition: 'opacity 0.3s' }} className="card-indicator" />
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 3. FAQ ─── */}
      <section style={{ padding: '140px 0', background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-subtle)' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div className="text-center" style={{ marginBottom: '60px' }}>
            <span className="system-status" style={{ marginBottom: '16px', justifyContent: 'center' }}>
              <div className="system-dot" />
              INTELLIGENCE
            </span>
            <h2 className="section-heading" style={{ margin: 0 }}>Service <span className="gradient-text">Questions</span></h2>
          </div>

          <div>
            {[
              { q: 'How long does a project typically take?', a: 'Project timelines vary based on complexity. A standard website takes 2-4 weeks, while complex web applications or mobile apps may take 2-4 months. We provide a detailed timeline during our discovery call.' },
              { q: 'What technologies do you specialize in?', a: 'We specialize in Next.js, React, React Native, Node.js, Python, AWS, and more. Our full-stack expertise means we can handle any technical requirement from front-end to back-end to cloud deployment.' },
              { q: 'Do you provide post-launch support?', a: 'Absolutely! We offer multiple support packages including 24/7 emergency support, monthly maintenance plans, and dedicated account managers for enterprise clients.' },
              { q: 'How do we start a project with SoftCodec?', a: 'Simply click "Get Started" above or visit our Contact page. We\'ll schedule a free discovery call, understand your requirements, and send you a detailed proposal within 48 hours.' },
            ].map((f, i) => <FAQItem key={i} question={f.q} answer={f.a} />)}
          </div>
        </div>
      </section>

      {/* ─── 4. CTA ─── */}
      <section style={{ padding: '120px 0', background: 'var(--bg-primary)', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: `radial-gradient(circle at 50% 100%, rgba(124, 58, 237, 0.15), transparent 60%)` }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <h2 className="section-heading" style={{ marginBottom: '24px' }}>
            Ready to build <span className="gradient-text">exceptional</span> digital experiences?
          </h2>
          <p className="section-subtext" style={{ maxWidth: '600px', margin: '0 auto 40px' }}>
            Join 120+ happy clients who trusted SoftCodec to transform their digital presence and exponentially scale their business.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
            <Link href="/contact" className="btn-primary" style={{ padding: '16px 36px', fontSize: '15px' }}>
              Initiate Project
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <style>{`
        .card-indicator { opacity: 0; }
        a:hover .card-indicator { opacity: 1 !important; }
      `}</style>
    </div>
  );
}
