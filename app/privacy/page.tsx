'use client';

import Link from 'next/link';
import ScrollProgress from '../components/ScrollProgress';
import CursorGlow from '../components/CursorGlow';
import { Shield, Lock, Eye, FileText, ChevronRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function PrivacyPage() {
  const sections = [
    {
      icon: Eye,
      title: 'Data Transparency',
      desc: 'Information Collection',
      content: 'We collect information that you provide directly to us, such as when you create an account, fill out a form, or communicate with us. This includes your professional identity and project requirements.',
      accent: '#7c3aed'
    },
    {
      icon: Lock,
      title: 'Cyber Security',
      desc: 'Industrial-Grade Protection',
      content: 'We implement AES-256 encryption and multi-factor authentication to protect your data from unauthorized access. Our systems undergo regular penetration testing by elite security teams.',
      accent: '#06b6d4'
    },
    {
      icon: Shield,
      title: 'Zero-Leaked Policy',
      desc: 'Strict Data Usage',
      content: 'Your data is used solely to power your digital solutions. We have a zero-third-party-sharing policy. Your intellectual property remains 100% yours at all times.',
      accent: '#10b981'
    },
    {
      icon: FileText,
      title: 'Tracking Logic',
      desc: 'Cookie Protocol',
      content: 'We use non-intrusive cookies to analyze site performance and interaction heatmaps. This allows us to continuously evolve the UI/UX for a faster, smarter browsing experience.',
      accent: '#f59e0b'
    }
  ];

  return (
    <div style={{ background: '#ffffff', color: '#0f172a', minHeight: '100vh', overflowX: 'hidden' }}>
      <ScrollProgress />
      <CursorGlow />

      {/* ─── 1. ARCHITECTURAL HERO ─── */}
      <section style={{ paddingTop: '200px', paddingBottom: '120px', position: 'relative' }}>
        <div className="grid-bg" />
        <div style={{ position: 'absolute', top: '0', right: '0', width: '800px', height: '800px', background: 'radial-gradient(circle, rgba(124, 58, 237, 0.08) 0%, transparent 70%)', zIndex: 0, filter: 'blur(60px)' }} />
        
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            style={{ maxWidth: '900px' }}
          >
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', background: 'rgba(124, 58, 237, 0.05)', padding: '10px 24px', borderRadius: '100px', border: '1px solid rgba(124, 58, 237, 0.1)', marginBottom: '40px' }}>
              <Shield size={16} color="#7c3aed" />
              <span style={{ fontSize: '12px', fontWeight: 900, color: '#7c3aed', letterSpacing: '2px', textTransform: 'uppercase' }}>Governance v2.0</span>
            </div>

            <h1 style={{ fontSize: 'clamp(48px, 8vw, 96px)', fontWeight: 950, letterSpacing: '-5px', lineHeight: 0.9, marginBottom: '40px' }}>
              Your Data. <br />
              <span className="gradient-text">Our Priority.</span>
            </h1>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', marginTop: '60px' }}>
              <div style={{ flex: '1', minWidth: '300px' }}>
                <p style={{ fontSize: '20px', color: '#64748b', lineHeight: 1.6, fontWeight: 500 }}>
                  SoftCodec is built on the foundation of radical transparency. We don&apos;t just store data; we safeguard your digital legacy.
                </p>
              </div>
              <div style={{ width: '2px', background: 'linear-gradient(to bottom, #7c3aed, transparent)', height: '80px' }} className="hide-mobile" />
              <div style={{ flex: '1', minWidth: '300px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                  <CheckCircle2 size={18} color="#10b981" />
                  <span style={{ fontSize: '14px', fontWeight: 800 }}>GDPR & HIPAA Compliant Framework</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <CheckCircle2 size={18} color="#10b981" />
                  <span style={{ fontSize: '14px', fontWeight: 800 }}>SOC2 Type II Certified Engineering</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── 2. DETAILED PROTOCOLS ─── */}
      <section style={{ padding: '100px 0', background: '#f8fafc', borderTop: '1px solid #f1f5f9' }}>
        <div className="container">
          <div className="grid-2" style={{ gap: '40px' }}>
            {sections.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -10 }}
                  style={{ 
                    padding: '50px', 
                    borderRadius: '40px', 
                    background: '#ffffff', 
                    border: '1px solid #f1f5f9',
                    boxShadow: '0 20px 50px rgba(0,0,0,0.03)',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                >
                  <div style={{ position: 'absolute', top: '0', right: '0', width: '150px', height: '150px', background: `radial-gradient(circle, ${s.accent}08 0%, transparent 70%)`, zIndex: 0 }} />
                  
                  <div style={{ 
                    width: '72px', height: '72px', borderRadius: '24px', 
                    background: `${s.accent}10`, color: s.accent,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    marginBottom: '32px', position: 'relative', zIndex: 1
                  }}>
                    <Icon size={32} />
                  </div>

                  <div style={{ position: 'relative', zIndex: 1 }}>
                    <span style={{ fontSize: '12px', fontWeight: 950, color: s.accent, textTransform: 'uppercase', letterSpacing: '2px', display: 'block', marginBottom: '8px' }}>{s.desc}</span>
                    <h3 style={{ fontSize: '28px', fontWeight: 900, marginBottom: '20px', letterSpacing: '-1px' }}>{s.title}</h3>
                    <p style={{ color: '#64748b', lineHeight: 1.8, fontSize: '16px' }}>{s.content}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── 3. CONTACT PROTOCOL ─── */}
      <section style={{ padding: '140px 0' }}>
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            style={{ 
              padding: '100px 60px', 
              borderRadius: '60px', 
              background: '#020205', 
              color: '#fff', 
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            {/* Ambient Background Glow */}
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '800px', height: '800px', background: 'radial-gradient(circle, rgba(124, 58, 237, 0.15) 0%, transparent 70%)', filter: 'blur(80px)', zIndex: 0 }} />
            
            <div style={{ position: 'relative', zIndex: 1 }}>
              <h2 style={{ fontSize: 'clamp(32px, 5vw, 64px)', fontWeight: 950, marginBottom: '24px', letterSpacing: '-3px', lineHeight: 1 }}>Have Legal <br /><span className="gradient-text">Inquiries?</span></h2>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '18px', marginBottom: '48px', maxWidth: '600px', margin: '0 auto 48px' }}>Our dedicated legal and security operations center is ready to address any concerns regarding your data governance.</p>
              
              <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
                <a href="mailto:privacy@softcodec.co" className="btn-primary" style={{ padding: '20px 48px', background: 'linear-gradient(135deg, #7c3aed, #06b6d4)' }}>
                  Contact DPO Team
                </a>
                <Link href="/contact" style={{ padding: '20px 48px', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '100px', fontWeight: 800, textDecoration: 'none', color: '#fff' }}>
                  General Inquiry
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
