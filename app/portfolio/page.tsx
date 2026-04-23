'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { LineChart, Smartphone, Bot, ShoppingBag, Cloud, PenTool, ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollProgress from '../components/ScrollProgress';
import CursorGlow from '../components/CursorGlow';

const projects = [
  { id: 1, category: 'Web Development', title: 'NexTrade AI Platform', desc: 'A sophisticated dashboard for AI-powered crypto trading with real-time analytics.', icon: LineChart, color: '#7c3aed' },
  { id: 2, category: 'Mobile Apps', title: 'HealthSync Wellness', desc: 'React Native fitness app with real-time biometric tracking and AI workout plans.', icon: Smartphone, color: '#06b6d4' },
  { id: 3, category: 'AI & Automation', title: 'SmartRetail Pro', desc: 'AI-driven inventory forecasting and automated restocking system for global retailers.', icon: Bot, color: '#ec4899' },
  { id: 4, category: 'E-Commerce', title: 'PureBazaar Store', desc: 'High-performing headless e-commerce store with 0.8s load time and 20% conversion boost.', icon: ShoppingBag, color: '#10b981' },
  { id: 5, category: 'Cloud & DevOps', title: 'SecureStack Cloud', desc: 'Enterprise-grade cloud migration for a major bank with zero downtime and 40% cost saving.', icon: Cloud, color: '#3b82f6' },
  { id: 6, category: 'UI/UX Design', title: 'ZenSpace Mobile UI', desc: 'Minimalist meditation app design focused on reducing cognitive load and maximizing calm.', icon: PenTool, color: '#f59e0b' },
];

const categories = ['All', 'Web Development', 'Mobile Apps', 'AI & Automation', 'E-Commerce', 'Cloud & DevOps', 'UI/UX Design'];

export default function PortfolioPage() {
  const [filter, setFilter] = useState('All');
  const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  return (
    <div style={{ background: '#ffffff', color: '#0f172a' }}>
      <ScrollProgress />
      <CursorGlow />
      <Navbar />

      {/* ─── 1. ARCHITECTURAL WHITE HERO ─── */}
      <section className="section" style={{ 
        paddingTop: '200px', 
        paddingBottom: '120px', 
        background: 'radial-gradient(circle at 50% -10%, rgba(6,182,212,0.08), transparent 70%)',
        position: 'relative'
      }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '10px', 
              background: 'rgba(6,182,212,0.05)', 
              padding: '8px 20px', 
              borderRadius: '100px', 
              border: '1px solid rgba(6,182,212,0.1)',
              marginBottom: '32px'
            }}>
              <span style={{ width: '8px', height: '8px', background: '#06b6d4', borderRadius: '50%', boxShadow: '0 0 10px #06b6d4' }} />
              <span style={{ fontSize: '11px', fontWeight: 900, letterSpacing: '2px', color: '#06b6d4', textTransform: 'uppercase' }}>OUR PORTFOLIO</span>
            </div>
            
            <h1 style={{ 
              fontSize: 'clamp(44px, 8vw, 84px)', 
              fontWeight: 950, 
              lineHeight: 1.05, 
              letterSpacing: '-3px', 
              marginBottom: '32px' 
            }}>
              Crafted for <br />
              <span style={{ color: '#7c3aed' }}>Scale.</span>
            </h1>
            
            <p style={{ 
              fontSize: '20px', 
              color: '#475569', 
              maxWidth: '650px', 
              margin: '0 auto', 
              lineHeight: 1.7 
            }}>
              Explore a curated selection of our high-performance digital products. Where architectural engineering meets elite design.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── 2. CINEMATIC SHOWCASE (DARK MODE) ─── */}
      <section className="section" style={{ 
        background: '#020205', 
        paddingTop: '100px', 
        paddingBottom: '160px',
        position: 'relative' 
      }}>
        {/* Dark Mode Ambient Glows */}
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'radial-gradient(circle at top, rgba(124,58,237,0.1), transparent 40%)', zIndex: 0 }} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          
          {/* Light-to-Dark Filtration System */}
          <div style={{ 
            display: 'flex', gap: '12px', justifyContent: 'center', marginBottom: '80px', flexWrap: 'wrap'
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
                onMouseEnter={(e) => { if(filter !== c) e.currentTarget.style.color = '#fff'; }}
                onMouseLeave={(e) => { if(filter !== c) e.currentTarget.style.color = 'rgba(255,255,255,0.6)'; }}
              >
                {c}
              </button>
            ))}
          </div>

          {/* Animating Grid */}
          <motion.div layout className="grid-3" style={{ gap: '40px' }}>
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((p) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, type: "spring", stiffness: 100, damping: 15 }}
                  key={p.id}
                  style={{
                    background: 'rgba(255,255,255,0.02)',
                    borderRadius: '24px',
                    border: '1px solid rgba(255,255,255,0.05)',
                    borderTop: '1px solid rgba(255,255,255,0.12)',
                    backdropFilter: 'blur(30px)',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    cursor: 'pointer',
                    boxShadow: '0 20px 50px rgba(0,0,0,0.3)',
                    transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-12px)';
                    e.currentTarget.style.boxShadow = `0 40px 80px ${p.color}20`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 20px 50px rgba(0,0,0,0.3)';
                  }}
                >
                  {/* Image / Icon Container */}
                  <div style={{ 
                    height: '240px', 
                    background: `linear-gradient(135deg, ${p.color}20, #020205)`,
                    position: 'relative',
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    borderBottom: '1px solid rgba(255,255,255,0.05)',
                    overflow: 'hidden'
                  }}>
                    <div style={{ position: 'absolute', width: '150px', height: '150px', background: p.color, opacity: 0.2, filter: 'blur(60px)', borderRadius: '50%' }} />
                    <p.icon size={64} color={p.color} strokeWidth={1.5} style={{ zIndex: 1, filter: `drop-shadow(0 10px 20px ${p.color}40)` }} />
                  </div>
                  
                  {/* Content Data */}
                  <div style={{ padding: '32px' }}>
                    <div style={{ 
                      fontSize: '12px', fontWeight: 800, color: p.color, 
                      textTransform: 'uppercase', marginBottom: '12px', letterSpacing: '2px' 
                    }}>
                      {p.category}
                    </div>
                    <h3 style={{ fontSize: '24px', fontWeight: 800, color: '#fff', marginBottom: '16px', letterSpacing: '-0.5px' }}>{p.title}</h3>
                    <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, marginBottom: '32px' }}>{p.desc}</p>
                    
                    <Link href={`/portfolio/${p.id}`} style={{ 
                      display: 'inline-flex', alignItems: 'center', gap: '8px', 
                      color: '#fff', textDecoration: 'none', fontWeight: 700, fontSize: '14px',
                      transition: 'color 0.3s'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.color = p.color}
                    onMouseLeave={(e) => e.currentTarget.style.color = '#fff'}
                    >
                      View Case Study <ArrowRight size={18} />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* ─── 3. IMMERSIVE CLOSE (DARK THEME) ─── */}
      <section className="section" style={{ 
        background: '#020205',
        padding: '0 0 160px',
        textAlign: 'center',
        borderTop: '1px solid rgba(255,255,255,0.05)'
      }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            style={{ maxWidth: '900px', margin: '0 auto', paddingTop: '160px' }}
          >
            <h2 style={{ color: '#fff', fontSize: 'clamp(36px, 6vw, 64px)', fontWeight: 950, letterSpacing: '-3px', lineHeight: 1 }}>
              Ready to craft your <br />
              <span className="gradient-text">digital legacy?</span>
            </h2>
            <p style={{ fontSize: '20px', color: 'rgba(255,255,255,0.6)', margin: '32px auto 48px', maxWidth: '600px' }}>
              Our engineering team is ready to analyze your requirements and blueprint your next massive success.
            </p>
            <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
              <Link href="/contact" className="btn-primary" style={{ padding: '20px 48px', boxShadow: '0 10px 30px rgba(124,58,237,0.3)' }}>
                <span>Start Your Project →</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Wrapping Footer in dark mode fix */}
      <div style={{ background: '#020205' }}>
        <Footer />
      </div>
    </div>
  );
}
