'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import ScrollProgress from '../components/ScrollProgress';
import CursorGlow from '../components/CursorGlow';
import WorkProcess from '../components/WorkProcess';
import AboutHero from '../components/AboutHero';
import { Target, Zap, Shield, Cpu, ExternalLink, ChevronRight, Share2, Sparkles, Code2, ShieldCheck, Layers, Activity, Handshake, Quote, Linkedin, Mail } from 'lucide-react';
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
      <section className="section" style={{ background: '#ffffff', position: 'relative', overflow: 'hidden', padding: '60px 0' }}>
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
              <div style={{ padding: '60px 50px', flex: 1 }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#7c3aed', fontSize: '12px', fontWeight: 900, letterSpacing: '2.5px', textTransform: 'uppercase', marginBottom: '24px' }}>
                  <Sparkles size={14} /> Our Core Mission
                </div>
                <h2 style={{ fontSize: 'clamp(30px, 4vw, 50px)', fontWeight: 900, color: '#0f172a', lineHeight: 1.1, marginBottom: '32px', letterSpacing: '-1.5px' }}>
                  Rooted in <span style={{ color: '#7c3aed' }}>Excellence</span>,<br />
                  <span style={{ 
                    background: 'linear-gradient(90deg, #7c3aed, #06b6d4)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}>
                    Driven by Purpose.
                  </span>
                </h2>
                <p style={{ color: '#475569', fontSize: '18px', lineHeight: 1.8, marginBottom: '40px', maxWidth: '520px' }}>
                  SoftCodec was founded in 2024 on the belief that world-class engineering should be accessible to everyone. In our 2 years of rapid growth, our journey is defined by a relentless pursuit of technical perfection and global collaboration. We don&apos;t just solve problems; we build the bridges to your future.
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '24px' }}>
                  <div>
                    <div style={{ fontSize: '36px', fontWeight: 900, color: '#0f172a', fontFamily: 'Orbitron' }}>2024</div>
                    <div style={{ fontSize: '11px', color: '#7c3aed', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '1.5px', marginTop: '6px' }}>Since 2024 (2 Yrs)</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '36px', fontWeight: 900, color: '#0f172a', fontFamily: 'Orbitron' }}>45+</div>
                    <div style={{ fontSize: '11px', color: '#7c3aed', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '1.5px', marginTop: '6px' }}>Projects Completed</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '36px', fontWeight: 900, color: '#0f172a', fontFamily: 'Orbitron' }}>11+</div>
                    <div style={{ fontSize: '11px', color: '#7c3aed', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '1.5px', marginTop: '6px' }}>Countries Served</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '36px', fontWeight: 900, color: '#0f172a', fontFamily: 'Orbitron' }}>97%</div>
                    <div style={{ fontSize: '11px', color: '#7c3aed', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '1.5px', marginTop: '6px' }}>Client Satisfaction</div>
                  </div>
                </div>
              </div>
              <div className="" style={{ flex: 1, position: 'relative', minHeight: '500px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f1f5f9' }}>
                <motion.img 
                  src="/about-hero-icon.png" 
                  alt="Rotating Mission Icon" 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  style={{ 
                    width: '70%', 
                    height: 'auto', 
                    display: 'block',
                    borderRadius: '50%',
                    mixBlendMode: 'multiply'
                  }}
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, #f8fafc, transparent)' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 2.5 EXECUTIVE LEADERSHIP (FOUNDER & CEO SPOTLIGHT) ─── */}
      <section className="section" style={{ background: '#020205', position: 'relative', overflow: 'hidden', padding: '120px 0' }}>
        {/* Ambient Lighting Orbs */}
        <div style={{ position: 'absolute', top: '10%', left: '5%', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(124, 58, 237, 0.15) 0%, transparent 70%)', filter: 'blur(100px)', zIndex: 0 }} />
        <div style={{ position: 'absolute', bottom: '10%', right: '5%', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(6, 182, 212, 0.12) 0%, transparent 70%)', filter: 'blur(100px)', zIndex: 0 }} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="text-center reveal-up" style={{ marginBottom: '70px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#a78bfa', fontSize: '12px', fontWeight: 900, letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '16px', padding: '6px 18px', background: 'rgba(124, 58, 237, 0.12)', borderRadius: '100px', border: '1px solid rgba(124, 58, 237, 0.25)' }}>
              <Sparkles size={14} color="#a78bfa" /> Executive Leadership
            </div>
            <h2 className="section-heading" style={{ color: '#ffffff' }}>
              Meet Our <span className="gradient-text">Founder & CEO</span>
            </h2>
            <p className="section-subtext" style={{ marginTop: '16px', maxWidth: '650px', color: 'rgba(255,255,255,0.5)' }}>
              The engineering visionary guiding SoftCodec&apos;s architectural standards and international expansion.
            </p>
          </div>

          <div className="reveal-up" style={{
            background: '#ffffff',
            border: '1px solid #e2e8f0',
            borderRadius: '36px',
            overflow: 'hidden',
            boxShadow: '0 30px 80px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.08)',
            padding: 'clamp(32px, 5vw, 60px)'
          }}>
            <div className="grid-2" style={{ alignItems: 'center', gap: 'clamp(40px, 6vw, 70px)' }}>
              
              {/* CEO Portrait Column */}
              <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
                <div style={{
                  position: 'relative',
                  width: '100%',
                  maxWidth: '430px',
                  borderRadius: '26px',
                  overflow: 'hidden',
                  border: '1px solid #e2e8f0',
                  boxShadow: '0 20px 45px rgba(0,0,0,0.1)',
                  background: '#ffffff',
                  zIndex: 1
                }}>
                  <img 
                    src="/CEO.jpeg" 
                    alt="Salman Shoukat - CEO & Founder of SoftCodec"
                    style={{
                      width: '100%',
                      height: 'auto',
                      objectFit: 'cover',
                      display: 'block'
                    }}
                  />
                </div>
              </div>

              {/* CEO Bio & Details (Light Theme on White) */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                
                {/* Role Pill */}
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '6px 16px',
                  borderRadius: '100px',
                  background: 'rgba(124, 58, 237, 0.08)',
                  border: '1px solid rgba(124, 58, 237, 0.2)',
                  width: 'fit-content'
                }}>
                  <div style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#7c3aed', boxShadow: '0 0 8px rgba(124,58,237,0.4)' }} />
                  <span style={{ fontSize: '11px', fontWeight: 800, color: '#7c3aed', textTransform: 'uppercase', letterSpacing: '1.5px' }}>
                    Founder & CEO
                  </span>
                </div>

                {/* Name & Title */}
                <div>
                  <h3 style={{ fontSize: 'clamp(32px, 4vw, 44px)', fontWeight: 950, color: '#0f172a', letterSpacing: '-1.5px', lineHeight: 1.1, margin: 0 }}>
                    Salman <span className="gradient-text">Shoukat</span>
                  </h3>
                  <p style={{ color: '#64748b', fontSize: '14.5px', fontWeight: 700, marginTop: '6px', letterSpacing: '0.3px' }}>
                    Chief Executive Officer · SoftCodec
                  </p>
                </div>

                {/* Description */}
                <p style={{ color: '#334155', fontSize: '15.5px', lineHeight: 1.8, margin: 0 }}>
                  Under Salman Shoukat&apos;s leadership since 2024, SoftCodec has rapidly grown into a high-performance IT and AI engineering agency. Overseeing elite engineers and designers, he leads the architecture of modern web ecosystems, bespoke digital platforms, and intelligent AI solutions for enterprise clients worldwide.
                </p>

                {/* Quote Box */}
                <div style={{
                  padding: '18px 22px',
                  background: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  borderLeft: '4px solid #7c3aed',
                  borderRadius: '16px'
                }}>
                  <p style={{ color: '#475569', fontSize: '14px', lineHeight: 1.7, margin: 0, fontStyle: 'italic', fontWeight: 500 }}>
                    &ldquo;We don&apos;t just build software to complete contracts — we engineer high-velocity digital solutions that empower companies with absolute reliability and long-term value.&rdquo;
                  </p>
                </div>

                {/* 3 Stats Strip */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gap: '12px',
                  marginTop: '4px'
                }}>
                  <div style={{ padding: '16px 14px', borderRadius: '18px', background: '#f8fafc', border: '1px solid #e2e8f0', textAlign: 'center' }}>
                    <div style={{ color: '#0284c7', fontSize: '24px', fontWeight: 950, lineHeight: 1.1 }}>2+ Years</div>
                    <div style={{ fontSize: '11px', color: '#64748b', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.8px', marginTop: '4px' }}>Leadership</div>
                  </div>
                  <div style={{ padding: '16px 14px', borderRadius: '18px', background: '#f8fafc', border: '1px solid #e2e8f0', textAlign: 'center' }}>
                    <div style={{ color: '#7c3aed', fontSize: '24px', fontWeight: 950, lineHeight: 1.1 }}>45+</div>
                    <div style={{ fontSize: '11px', color: '#64748b', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.8px', marginTop: '4px' }}>Projects Done</div>
                  </div>
                  <div style={{ padding: '16px 14px', borderRadius: '18px', background: '#f8fafc', border: '1px solid #e2e8f0', textAlign: 'center' }}>
                    <div style={{ color: '#059669', fontSize: '24px', fontWeight: 950, lineHeight: 1.1 }}>11+</div>
                    <div style={{ fontSize: '11px', color: '#64748b', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.8px', marginTop: '4px' }}>Countries</div>
                  </div>
                </div>

                {/* Action Buttons Row */}
                <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap', marginTop: '6px' }}>
                  <Link href="/contact" className="btn-primary" style={{ padding: '14px 30px', fontSize: '13.5px', display: 'inline-flex', alignItems: 'center', gap: '8px', boxShadow: '0 6px 20px rgba(124,58,237,0.3)' }}>
                    <span>Connect with Leadership</span>
                    <ChevronRight size={15} />
                  </Link>

                  <a 
                    href="mailto:salmanshoukat@softcodec.co" 
                    style={{
                      padding: '13px 22px',
                      borderRadius: '100px',
                      background: '#f8fafc',
                      border: '1px solid #e2e8f0',
                      color: '#0f172a',
                      fontSize: '13.5px',
                      fontWeight: 700,
                      textDecoration: 'none',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      transition: 'all 0.3s'
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#7c3aed'; e.currentTarget.style.background = '#f5f3ff'; e.currentTarget.style.color = '#7c3aed'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#e2e8f0'; e.currentTarget.style.background = '#f8fafc'; e.currentTarget.style.color = '#0f172a'; }}
                  >
                    <Mail size={16} color="#7c3aed" />
                    <span>salmanshoukat@softcodec.co</span>
                  </a>

                  <a 
                    href="https://pk.linkedin.com/company/softcodec" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    title="Connect on LinkedIn"
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '50%',
                      background: '#f8fafc',
                      border: '1px solid #e2e8f0',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#0077b5',
                      textDecoration: 'none',
                      transition: 'all 0.3s'
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.background = '#0077b5'; e.currentTarget.style.borderColor = '#0077b5'; e.currentTarget.style.color = '#fff'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = '#f8fafc'; e.currentTarget.style.borderColor = '#e2e8f0'; e.currentTarget.style.color = '#0077b5'; }}
                  >
                    <Linkedin size={17} />
                  </a>
                </div>

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

    </>
  );
}
