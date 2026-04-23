'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollProgress from '../components/ScrollProgress';
import CursorGlow from '../components/CursorGlow';
import WorkProcess from '../components/WorkProcess';
import AboutHero from '../components/AboutHero';
import { Target, Zap, Shield, Cpu, ExternalLink, ChevronRight, Share2, Sparkles, Code2, ShieldCheck, Layers, Activity, Handshake } from 'lucide-react';
import { motion } from 'framer-motion';


const values = [
  { icon: Target, title: 'Mission-Driven', desc: 'Every architecture decision is mapped directly to your expansion goals. No unnecessary complexity.' },
  { icon: Zap, title: 'Unmatched Velocity', desc: 'Optimized sprint cycles and AI-assisted workflows ensure you hit the market months ahead of competitors.' },
  { icon: Shield, title: 'Ironclad Security', desc: 'Military-grade encryption and rigorous stress testing secure your infrastructure against all modern threats.' },
  { icon: Cpu, title: 'Future-Proof', desc: 'We build auto-scaling microservices meant to handle your first thousand users to your first ten million.' },
];

const whyChooseUs = [
  { 
    title: 'Expert Sovereignty', 
    desc: 'Our team consists of senior architects who have built systems for millions. We don\'t just code; we architect for global scalability.', 
    icon: ShieldCheck, 
    color: '#7c3aed' 
  },
  { 
    title: 'Radical Transparency', 
    desc: 'You have 24/7 access to our staging environments and codebase. No black boxes—just clear, absolute visibility into our progress.', 
    icon: Activity, 
    color: '#06b6d4' 
  },
  { 
    title: 'Adaptive Strategy', 
    desc: 'We use agile methodologies that actually work, pivoting with you as your market needs shift. Your success is our primary KPI.', 
    icon: Layers, 
    color: '#ec4899' 
  },
  { 
    title: 'Sustained Partnership', 
    desc: 'We are your long-term technological allies. From the MVP to your first round of global expansion, we are with you every step.', 
    icon: Handshake, 
    color: '#10b981' 
  },
];


export default function AboutPage() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    );
    document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-up').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="noise-overlay" />
      <ScrollProgress />
      <CursorGlow />
      <Navbar />
      <AboutHero />

      {/* ─── 2. CINEMATIC MISSION ─── */}
      <section className="section" style={{ background: '#ffffff', position: 'relative', overflow: 'hidden', padding: '160px 0' }}>
        {/* Light accent glow */}
        <div style={{ position: 'absolute', bottom: '-20%', right: '-10%', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(124, 58, 237, 0.05) 0%, transparent 70%)', filter: 'blur(100px)', zIndex: 0 }} />
        
        <div className="container">
          <div className="reveal-up" style={{ 
            position: 'relative', zIndex: 2, 
            background: '#f8fafc', 
            border: '1px solid rgba(0, 0, 0, 0.05)', 
            borderRadius: '40px', 
            overflow: 'hidden',
            boxShadow: '0 40px 100px rgba(0,0,0,0.05)'
          }}>
            <div className="grid-2" style={{ gap: '0', alignItems: 'stretch' }}>
              <div style={{ padding: '80px', flex: 1 }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#7c3aed', fontSize: '12px', fontWeight: 900, letterSpacing: '2.5px', textTransform: 'uppercase', marginBottom: '24px' }}>
                  <Sparkles size={14} /> Our Core Mission
                </div>
                <h2 style={{ fontSize: 'clamp(32px, 4vw, 56px)', fontWeight: 900, color: '#0f172a', lineHeight: 1.1, marginBottom: '32px' }}>
                  Rooted in Excellence, <br />
                  <span className="gradient-text">Driven by Purpose.</span>
                </h2>
                <p style={{ color: '#475569', fontSize: '19px', lineHeight: 1.8, marginBottom: '48px', maxWidth: '500px' }}>
                  SoftCodec was founded on the belief that world-class engineering should be accessible to everyone. Our journey is defined by a relentless pursuit of technical perfection and a heart for human collaboration. We don't just solve problems; we build the bridges to your future.
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>
                  <div>
                    <div style={{ fontSize: '40px', fontWeight: 900, color: '#0f172a', fontFamily: 'Orbitron' }}>2019</div>
                    <div style={{ fontSize: '11px', color: '#7c3aed', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '2px', marginTop: '8px' }}>Year Founded</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '40px', fontWeight: 900, color: '#0f172a', fontFamily: 'Orbitron' }}>45+</div>
                    <div style={{ fontSize: '11px', color: '#7c3aed', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '2px', marginTop: '8px' }}>Global Projects</div>
                  </div>
                </div>
              </div>
              <div className="hide-mobile" style={{ flex: 1, position: 'relative', minHeight: '500px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f1f5f9' }}>
                <motion.img 
                  src="/about-hero-icon.png" 
                  alt="Rotating Mission Icon" 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  style={{ 
                    width: '70%', 
                    height: 'auto', 
                    display: 'block',
                    borderRadius: '50%', // Hide corners
                    mixBlendMode: 'multiply' // Blend white/light background with the container
                  }}
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, #f8fafc, transparent)' }} />
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* ─── 3. BEAUTIFUL CORE VALUES ─── */}
      <section className="section" style={{ paddingTop: '100px', paddingBottom: '100px' }}>
        <div className="container">
          <div className="text-center reveal-up" style={{ marginBottom: '80px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
            <h2 className="section-heading" style={{ textAlign: 'center' }}>The SoftCodec <span className="gradient-text">Advantage</span></h2>
            <p className="section-subtext" style={{ marginTop: '16px', textAlign: 'center', margin: '16px auto 0' }}>The guiding principles that dictate every line of code we write.</p>
          </div>
          
          <div className="grid-2" style={{ gap: '24px' }}>
            {values.map((v, i) => (
              <div key={i} className="glass-card reveal-up" style={{ 
                padding: '40px', background: '#020205', border: '1px solid rgba(255,255,255,0.05)', transitionDelay: `${i * 0.1}s`,
                boxShadow: '0 20px 50px rgba(0,0,0,0.1)'
              }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start', gap: '24px' }}>
                  <div style={{ width: '56px', height: '56px', borderRadius: '14px', background: 'linear-gradient(135deg, #7c3aed20, #06b6d410)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(124,58,237,0.2)' }}>
                    <v.icon size={24} color="#a78bfa" />
                  </div>
                  <div style={{ flex: 1 }}>
                    <h3 style={{ fontSize: '22px', fontWeight: 800, color: '#fff', marginBottom: '12px' }}>{v.title}</h3>
                    <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '15px', lineHeight: 1.7 }}>{v.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ─── 4. WHY CHOOSE US (CINEMATIC GLASSMorphism) ─── */}
      <section className="section" style={{ background: '#020205', position: 'relative', overflow: 'hidden', padding: '160px 0' }}>
        {/* Animated Background Accents */}
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 10, repeat: Infinity }}
          style={{ position: 'absolute', top: '10%', left: '10%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(124, 58, 237, 0.1) 0%, transparent 70%)', filter: 'blur(100px)', zIndex: 0 }} 
        />
        <motion.div 
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 12, repeat: Infinity }}
          style={{ position: 'absolute', bottom: '10%', right: '10%', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(6, 182, 212, 0.1) 0%, transparent 70%)', filter: 'blur(100px)', zIndex: 0 }} 
        />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="text-center reveal-up" style={{ marginBottom: '100px' }}>
            <span style={{ color: '#7c3aed', fontSize: '12px', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '3px', display: 'block', marginBottom: '16px' }}>The SoftCodec Advantage</span>
            <h2 style={{ fontSize: 'clamp(32px, 5vw, 64px)', fontWeight: 950, color: '#fff', lineHeight: 1, letterSpacing: '-2px' }}>
              Why Partner with <br />
              <span className="gradient-text">SoftCodec?</span>
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '18px', maxWidth: '600px', margin: '24px auto 0', lineHeight: 1.7 }}>
              We don't just build products; we architect the technological future of your business with elite engineering and visionary design.
            </p>
          </div>

          <div className="grid-4" style={{ gap: '24px' }}>
            {whyChooseUs.map((item, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.8 }}
                className="glass-card" 
                style={{ 
                  padding: '40px 32px', 
                  background: 'rgba(255,255,255,0.02)', 
                  border: '1px solid rgba(255,255,255,0.05)',
                  borderTop: '1px solid rgba(255,255,255,0.15)',
                  backdropFilter: 'blur(20px)',
                  borderRadius: '32px',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '24px'
                }}
              >
                <div style={{ width: '56px', height: '56px', borderRadius: '16px', background: `${item.color}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', border: `1px solid ${item.color}30` }}>
                  <item.icon size={26} color={item.color} />
                </div>
                <div>
                  <h3 style={{ fontSize: '20px', fontWeight: 800, color: '#fff', marginBottom: '12px' }}>{item.title}</h3>
                  <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.45)', lineHeight: 1.8 }}>{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 5. PROJECT PROCESS (ZIGZAG) ─── */}
      <WorkProcess />

      {/* ─── 6. CINEMATIC CTA ─── */}
      <section className="section" style={{ background: '#020205', padding: '160px 0', position: 'relative', overflow: 'hidden' }}>
        {/* Deep Ambient Glow Orbs */}
        <motion.div 
          animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 8, repeat: Infinity }}
          style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '800px', height: '800px', background: 'radial-gradient(circle, rgba(124, 58, 237, 0.3) 0%, transparent 70%)', filter: 'blur(120px)', zIndex: 0 }} 
        />
        <motion.div 
          animate={{ scale: [1.3, 1, 1.3], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 10, repeat: Infinity }}
          style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(6, 182, 212, 0.2) 0%, transparent 70%)', filter: 'blur(100px)', zIndex: 0 }} 
        />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            style={{ 
              background: 'rgba(255, 255, 255, 0.02)', 
              border: '1px solid rgba(255, 255, 255, 0.05)',
              borderTop: '1px solid rgba(255, 255, 255, 0.15)',
              backdropFilter: 'blur(40px)', 
              WebkitBackdropFilter: 'blur(40px)',
              borderRadius: '48px', 
              padding: '100px 40px',
              textAlign: 'center',
              boxShadow: '0 50px 100px -20px rgba(0,0,0,0.8)',
              maxWidth: '1000px',
              margin: '0 auto'
            }}
          >
            <div style={{ marginBottom: '32px' }}>
              <span style={{ 
                fontSize: '11px', 
                fontWeight: 900, 
                color: '#a78bfa', 
                textTransform: 'uppercase', 
                letterSpacing: '4px',
                display: 'block',
                marginBottom: '16px'
              }}>
                Ready to Architect your expansion?
              </span>
              <h2 style={{ 
                fontFamily: 'Orbitron, sans-serif',
                fontSize: 'clamp(36px, 8vw, 68px)', 
                fontWeight: 950, 
                color: '#fff', 
                lineHeight: 1.1, 
                letterSpacing: '-3px' 
              }}>
                Let's Build the <br />
                <span className="gradient-text">Future, Together.</span>
              </h2>
            </div>
            
            <p style={{ 
              color: 'rgba(255,255,255,0.45)', 
              fontSize: 'clamp(18px, 2vw, 22px)', 
              maxWidth: '650px', 
              margin: '0 auto 48px',
              lineHeight: 1.6
            }}>
              Join an exclusive cohort of market leaders scaling their vision with our high-performance engineering forge.
            </p>

            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="/contact" className="btn-primary" style={{ padding: '22px 56px', fontSize: '18px', display: 'flex', alignItems: 'center', boxShadow: '0 0 30px rgba(124, 58, 237, 0.3)' }}>
                  <span>Initiate Project</span>
                  <ChevronRight size={20} style={{ marginLeft: '12px' }} />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}
