'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { LineChart, Smartphone, Bot, ShoppingBag, Cloud, PenTool, ArrowRight, Sparkles, ChevronRight, Zap, Target, Users, Globe } from 'lucide-react';
import Navbar from '../components/Navbar';
import ScrollProgress from '../components/ScrollProgress';
import CursorGlow from '../components/CursorGlow';

const projects = [
  { id: 1, category: 'Web Development', title: 'NexTrade AI Platform', desc: 'A sophisticated dashboard for AI-powered crypto trading with real-time analytics.', icon: LineChart, color: '#7c3aed', image: '/laptop-dashboard.png' },
  { id: 2, category: 'Mobile Apps', title: 'HealthSync Wellness', desc: 'React Native fitness app with real-time biometric tracking and AI workout plans.', icon: Smartphone, color: '#06b6d4', image: '/Placehunter - Mobile App UX_UI.png' },
  { id: 3, category: 'AI & Automation', title: 'SmartRetail Pro', desc: 'AI-driven inventory forecasting and automated restocking system for global retailers.', icon: Bot, color: '#ec4899', image: '/Concept of cloud computing technology isometric illustration by generative ai _ Premium AI-generated image-Photoroom.png' },
  { id: 4, category: 'E-Commerce', title: 'PureBazaar Store', desc: 'High-performing headless e-commerce store with 0.8s load time and 20% conversion boost.', icon: ShoppingBag, color: '#10b981', image: '/Os 6 E-commerces Mais Confiáveis do Brasil 2025 🛒✨-Photoroom.png' },
  { id: 5, category: 'Cloud & DevOps', title: 'SecureStack Cloud', desc: 'Enterprise-grade cloud migration for a major bank with zero downtime and 40% cost saving.', icon: Cloud, color: '#3b82f6', image: '/Multi-Cloud Adoption in 2025_ Strategies, Benefits & Enterprise Challenges-Photoroom.png' },
  { id: 6, category: 'UI/UX Design', title: 'ZenSpace Mobile UI', desc: 'Minimalist meditation app design focused on reducing cognitive load and maximizing calm.', icon: PenTool, color: '#f59e0b', image: '/3d uiux mobile screen with user elements _ Premium Photo-Photoroom.png' },
];

const categories = ['All', 'Web Development', 'Mobile Apps', 'AI & Automation', 'E-Commerce', 'Cloud & DevOps', 'UI/UX Design'];
const BRAND_COLOR = "#7c3aed";
const BRAND_GRADIENT = "linear-gradient(135deg, #7c3aed, #06b6d4)";

export default function PortfolioPage() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const [filter, setFilter] = useState('All');
  const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  return (
    <div style={{ background: '#ffffff', color: '#0f172a', overflowX: 'hidden' }}>
      <ScrollProgress />
      <CursorGlow />
      <Navbar />

      {/* ─── 1. PREMIUM ARCHITECTURAL HERO ─── */}
      <section style={{ paddingTop: '160px', paddingBottom: '140px', position: 'relative', overflow: 'hidden' }}>
        {/* Ambient Glows */}
        <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: '900px', height: '900px', background: 'radial-gradient(circle, rgba(124,58,237,0.1) 0%, transparent 70%)', zIndex: 0 }} />
        <div style={{ position: 'absolute', bottom: '0', left: '-5%', width: '700px', height: '700px', background: 'radial-gradient(circle, rgba(6,182,212,0.06) 0%, transparent 70%)', zIndex: 0 }} />
        
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '80px', alignItems: 'center' }}>
            
            {/* HERO TEXT (LEFT) */}
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: `#f5f3ff`, border: `1px solid #ddd6fe`, borderRadius: '100px', padding: '8px 20px', marginBottom: '32px' }}>
                <Sparkles size={14} color={BRAND_COLOR} />
                <span style={{ fontSize: '12px', fontWeight: 900, color: BRAND_COLOR, letterSpacing: '2.5px', textTransform: 'uppercase' }}>Our Portfolio</span>
              </div>
              
              <h1 style={{ fontSize: 'clamp(44px, 6vw, 84px)', fontWeight: 950, lineHeight: 1, letterSpacing: '-4px', marginBottom: '32px' }}>
                Crafted for <br />
                <span className="gradient-text">Massive Scale.</span>
              </h1>
              
              <p style={{ fontSize: '20px', color: '#475569', lineHeight: 1.6, marginBottom: '48px', maxWidth: '560px' }}>
                Explore a curated selection of our high-performance digital products. Where architectural engineering meets elite design to create market leaders.
              </p>
              
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
                <Link href="/contact" className="btn-primary" style={{ padding: '20px 48px', fontSize: '16px', background: BRAND_GRADIENT, color: '#fff', borderRadius: '100px', fontWeight: 800, textDecoration: 'none', boxShadow: `0 20px 40px ${BRAND_COLOR}30`, display: 'flex', alignItems: 'center', gap: '10px' }}>
                  Initiate Build <ChevronRight size={18} />
                </Link>
                <button onClick={() => document.getElementById('portfolio-grid')?.scrollIntoView({ behavior: 'smooth' })} style={{ padding: '20px 40px', fontSize: '16.5px', color: '#0f172a', border: '1px solid #e2e8f0', background: 'transparent', borderRadius: '100px', fontWeight: 700, cursor: 'pointer' }}>
                  System Gallery
                </button>
              </div>
            </motion.div>

            {/* PREMIUM 3D VISUAL (RIGHT) */}
            <motion.div 
               initial={{ opacity: 0, scale: 0.8, x: 20 }} 
               animate={{ opacity: 1, scale: 1, x: 0 }} 
               transition={{ duration: 1.2, ease: "easeOut" }}
               className=""
            >
              <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
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
                
                <motion.img 
                  animate={{ y: [0, -25, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  src="/portfolio_hero_3d.png" 
                  alt="Portfolio Showcase"
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
          </div>
        </div>
      </section>

      {/* ─── 2. RESULTS COUNTER GRID ─── */}
      <section style={{ padding: '0 0 120px' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1px', background: '#f1f5f9', border: '1px solid #f1f5f9', borderRadius: '32px', overflow: 'hidden' }}>
            {[
              { num: '500+', label: 'Digital Assets', sub: 'High-Performance Ecosystems', icon: <Zap size={20} /> },
              { num: '98%', label: 'Client Retention', sub: 'Engineered for Loyalty', icon: <Users size={20} /> },
              { num: '12+', label: 'Global Industries', sub: 'Cross-Sector Dominance', icon: <Globe size={20} /> },
              { num: '24/7', label: 'Systems Active', sub: 'Autonomous Operations', icon: <Target size={20} /> },
            ].map((s, i) => (
              <div key={i} style={{ background: '#fff', padding: '48px 32px', textAlign: 'center', position: 'relative' }}>
                <div style={{ color: BRAND_COLOR, marginBottom: '16px', display: 'flex', justifyContent: 'center' }}>{s.icon}</div>
                <div style={{ fontSize: '42px', fontWeight: 950, color: '#0f172a', letterSpacing: '-2px', marginBottom: '4px', fontFamily: 'Orbitron' }}>{s.num}</div>
                <div style={{ fontSize: '13px', fontWeight: 800, color: BRAND_COLOR, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '4px' }}>{s.label}</div>
                <div style={{ fontSize: '12px', color: '#94a3b8', fontWeight: 500 }}>{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 3. CINEMATIC SHOWCASE (DARK MODE) ─── */}
      <section id="portfolio-grid" style={{ 
        background: '#020205', 
        paddingTop: '120px', 
        paddingBottom: '160px',
        position: 'relative',
        borderRadius: '60px 60px 0 0',
        marginTop: '-40px',
        zIndex: 2
      }}>
        {/* Dark Mode Ambient Glows */}
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'radial-gradient(circle at top, rgba(124,58,237,0.1), transparent 40%)', zIndex: 0 }} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <h2 style={{ color: '#fff', fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: 950, letterSpacing: '-2.5px', lineHeight: 1, marginBottom: '40px' }}>
              The <span className="gradient-text">Arsenal.</span>
            </h2>

            {/* Light-to-Dark Filtration System */}
            <div style={{ 
              display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap'
            }}>
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setFilter(c)}
                  style={{
                    padding: '12px 24px', 
                    borderRadius: '100px', 
                    border: filter === c ? '1px solid rgba(124,58,237,0.5)' : '1px solid rgba(255,255,255,0.1)',
                    background: filter === c ? 'rgba(124,58,237,0.1)' : 'rgba(255,255,255,0.03)',
                    color: filter === c ? '#fff' : 'rgba(255,255,255,0.6)',
                    fontSize: '14px', 
                    fontWeight: 700, 
                    cursor: 'pointer', 
                    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                    boxShadow: filter === c ? '0 0 20px rgba(124,58,237,0.2)' : 'none'
                  }}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          {/* Animating Grid */}
          <motion.div layout className="grid-3" style={{ gap: '32px' }}>
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((p) => (
                <Link
                  href={`/portfolio/${p.id}`}
                  key={p.id}
                  style={{ textDecoration: 'none' }}
                >
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 20 }}
                    transition={{ duration: 0.5, type: "spring", stiffness: 100, damping: 15 }}
                    className="dark-glass-card"
                    style={{
                      background: 'rgba(255,255,255,0.02)',
                      borderRadius: '32px',
                      border: '1px solid rgba(255,255,255,0.05)',
                      borderTop: '1px solid rgba(255,255,255,0.12)',
                      backdropFilter: 'blur(30px)',
                      overflow: 'hidden',
                      display: 'flex',
                      flexDirection: 'column',
                      cursor: 'pointer',
                      boxShadow: '0 20px 50px rgba(0,0,0,0.3)',
                      position: 'relative',
                    }}
                  >
                    {/* Image Container */}
                    <div style={{ 
                      height: '280px', 
                      position: 'relative',
                      borderBottom: '1px solid rgba(255,255,255,0.05)',
                      overflow: 'hidden'
                    }}>
                      <motion.img 
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                        src={p.image} 
                        alt={p.title}
                        style={{ 
                          width: '100%', 
                          height: '100%', 
                          objectFit: 'cover',
                          opacity: 0.8
                        }} 
                      />
                      <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(to bottom, transparent 40%, #020205 100%)` }} />
                      
                      {/* Floating Icon Overlay */}
                      <div style={{ position: 'absolute', bottom: '24px', left: '24px', width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(3, 3, 10, 0.6)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2 }}>
                         <p.icon size={24} color={p.color} />
                      </div>

                      {/* Floating Category Badge */}
                      <div style={{ position: 'absolute', top: '24px', right: '24px', background: 'rgba(3, 3, 10, 0.6)', backdropFilter: 'blur(10px)', padding: '6px 16px', borderRadius: '100px', border: '1px solid rgba(255,255,255,0.1)', fontSize: '10px', fontWeight: 900, color: 'rgba(255,255,255,0.8)', textTransform: 'uppercase', letterSpacing: '1px', zIndex: 2 }}>
                        {p.category}
                      </div>
                    </div>
                    
                    {/* Content Data */}
                    <div style={{ padding: '40px' }}>
                      <h3 style={{ fontSize: '26px', fontWeight: 800, color: '#fff', marginBottom: '16px', letterSpacing: '-0.5px' }}>{p.title}</h3>
                      <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, marginBottom: '32px' }}>{p.desc}</p>
                      
                      <div style={{ 
                        display: 'inline-flex', alignItems: 'center', gap: '8px', 
                        color: p.color, fontWeight: 800, fontSize: '14px',
                        textTransform: 'uppercase', letterSpacing: '1px'
                      }}>
                        Analyze Case Study <ArrowRight size={18} />
                      </div>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* ─── 4. IMMERSIVE CLOSE (DARK THEME) ─── */}
      <section style={{ 
        background: '#020205',
        padding: '0 0 160px',
        textAlign: 'center'
      }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            style={{ 
              maxWidth: '1000px', 
              margin: '0 auto', 
              padding: '100px 40px',
              background: 'rgba(255,255,255,0.02)',
              borderRadius: '48px',
              border: '1px solid rgba(255,255,255,0.05)',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            <div style={{ position: 'absolute', top: '-50%', left: '-20%', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(124,58,237,0.1) 0%, transparent 70%)', zIndex: 0 }} />

            <div style={{ position: 'relative', zIndex: 1 }}>
              <h2 style={{ color: '#fff', fontSize: 'clamp(36px, 6vw, 64px)', fontWeight: 950, letterSpacing: '-3px', lineHeight: 1 }}>
                Ready to craft your <br />
                <span className="gradient-text">Digital Legacy?</span>
              </h2>
              <p style={{ fontSize: '20px', color: 'rgba(255,255,255,0.5)', margin: '32px auto 48px', maxWidth: '650px', lineHeight: 1.6 }}>
                Our engineering team is ready to analyze your requirements and blueprint your next massive success. Let's build something absolute.
              </p>
              <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link href="/contact" className="btn-primary" style={{ padding: '20px 48px', background: BRAND_GRADIENT, boxShadow: '0 20px 40px rgba(124,58,237,0.3)' }}>
                  <span>Initiate Build →</span>
                </Link>
                <Link href="/about" className="btn-outline" style={{ padding: '20px 48px', color: '#fff', borderColor: 'rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.03)' }}>
                  <span>Our Philosophy</span>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
