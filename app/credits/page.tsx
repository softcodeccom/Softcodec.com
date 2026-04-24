'use client';

import Link from 'next/link';
import ScrollProgress from '../components/ScrollProgress';
import CursorGlow from '../components/CursorGlow';
import { Sparkles, Code2, Cpu, Globe, Heart, Layers, Terminal } from 'lucide-react';
import { motion } from 'framer-motion';

export default function CreditsPage() {
  const credits = [
    {
      category: 'Core Architecture',
      desc: 'The Engineering Stack',
      items: ['Next.js 15+ App Router', 'React 19 Server Components', 'TypeScript 5 Strict Mode', 'TailwindCSS / Vanilla CSS', 'Framer Motion Physics'],
      icon: Code2,
      color: '#7c3aed'
    },
    {
      category: 'Cloud Infrastructure',
      desc: 'Global Deployment Network',
      items: ['Vercel Edge Network', 'Supabase PostgreSQL', 'AWS S3 Asset Storage', 'Vercel Speed Insights'],
      icon: Cpu,
      color: '#06b6d4'
    },
    {
      category: 'Creative Assets',
      desc: 'Aesthetics & Visuals',
      items: ['Lucide React Icons', 'Google Fonts (Orbitron, Inter)', 'Unsplash Editorial Photography', 'Midjourney v6 Generative AI'],
      icon: Sparkles,
      color: '#f59e0b'
    },
    {
      category: 'UX Engineering',
      desc: 'Interactive Elements',
      items: ['Lenis Smooth Scrolling', 'Custom Glassmorphism UI', 'CSS Grid Mobile System', 'Radix Primitives'],
      icon: Layers,
      color: '#ec4899'
    }
  ];

  return (
    <div style={{ background: '#ffffff', color: '#0f172a', minHeight: '100vh', overflowX: 'hidden' }}>
      <ScrollProgress />
      <CursorGlow />

      {/* ─── 1. TECH HERO ─── */}
      <section style={{ paddingTop: '200px', paddingBottom: '120px', position: 'relative' }}>
        <div className="grid-bg" />
        <div style={{ position: 'absolute', top: '10%', left: '50%', transform: 'translateX(-50%)', width: '1000px', height: '1000px', background: 'radial-gradient(circle, rgba(124, 58, 237, 0.05) 0%, transparent 70%)', zIndex: 0, filter: 'blur(80px)' }} />
        
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            style={{ textAlign: 'center', maxWidth: '900px', margin: '0 auto', position: 'relative', zIndex: 1 }}
          >
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', background: 'rgba(236, 72, 153, 0.05)', padding: '10px 24px', borderRadius: '100px', border: '1px solid rgba(236, 72, 153, 0.1)', marginBottom: '40px' }}>
              <Terminal size={16} color="#ec4899" />
              <span style={{ fontSize: '12px', fontWeight: 900, color: '#ec4899', letterSpacing: '2px', textTransform: 'uppercase' }}>System Acknowledgments</span>
            </div>

            <h1 style={{ fontSize: 'clamp(48px, 8vw, 96px)', fontWeight: 950, letterSpacing: '-5px', lineHeight: 0.9, marginBottom: '40px' }}>
              The Power <br />
              <span className="gradient-text">Behind the Code.</span>
            </h1>

            <p style={{ fontSize: '22px', color: '#64748b', lineHeight: 1.6, maxWidth: '700px', margin: '0 auto', fontWeight: 500 }}>
              SoftCodec is engineered on the shoulders of giants. We utilize the most advanced open-source technologies and creative assets to build digital dominance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── 2. THE STACK GRID ─── */}
      <section style={{ padding: '80px 0', position: 'relative', zIndex: 1 }}>
        <div className="container">
          <div className="grid-2" style={{ gap: '40px' }}>
            {credits.map((c, i) => {
              const Icon = c.icon;
              return (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -8 }}
                  style={{ 
                    padding: '50px', 
                    borderRadius: '40px', 
                    background: '#f8fafc', 
                    border: '1px solid #f1f5f9',
                    position: 'relative',
                    overflow: 'hidden',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.02)'
                  }}
                >
                  <div style={{ position: 'absolute', top: '-20%', right: '-10%', width: '200px', height: '200px', background: `radial-gradient(circle, ${c.color}15 0%, transparent 70%)`, filter: 'blur(30px)', zIndex: 0 }} />
                  
                  <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '40px', position: 'relative', zIndex: 1 }}>
                    <div style={{ 
                      width: '72px', height: '72px', borderRadius: '24px', 
                      background: `${c.color}10`, color: c.color, border: `1px solid ${c.color}20`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center'
                    }}>
                      <Icon size={32} />
                    </div>
                    <div>
                      <span style={{ fontSize: '11px', fontWeight: 900, color: c.color, textTransform: 'uppercase', letterSpacing: '2px', display: 'block', marginBottom: '4px' }}>{c.desc}</span>
                      <h3 style={{ fontSize: '24px', fontWeight: 900, letterSpacing: '-0.5px' }}>{c.category}</h3>
                    </div>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', position: 'relative', zIndex: 1 }}>
                    {c.items.map((item, j) => (
                      <div key={j} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: c.color }} />
                        <span style={{ color: '#475569', fontSize: '16px', fontWeight: 600 }}>{item}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* ─── 3. ORIGIN SIGNATURE ─── */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            style={{ 
              marginTop: '120px', 
              padding: '80px 40px', 
              borderRadius: '60px', 
              background: '#020205', 
              color: '#fff',
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '100%', height: '100%', background: 'radial-gradient(circle, rgba(239, 68, 68, 0.1) 0%, transparent 60%)', pointerEvents: 'none' }} />
            
            <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'rgba(239, 68, 68, 0.1)', border: '1px solid rgba(239, 68, 68, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '32px' }}>
                <Heart size={36} color="#ef4444" fill="#ef4444" />
              </div>
              <h2 style={{ fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: 950, marginBottom: '24px', letterSpacing: '-2px' }}>Architected with <span style={{ color: '#ef4444' }}>Passion.</span></h2>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '20px', maxWidth: '600px', margin: '0 auto 40px', lineHeight: 1.6 }}>
                Handcrafted in Punjab, Pakistan by the SoftCodec engineering team. We are pushing the boundaries of what is possible on the web.
              </p>
              
              <Link href="/portfolio" className="btn-primary" style={{ padding: '20px 48px', background: '#fff', color: '#0f172a' }}>
                Explore Our Work
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
