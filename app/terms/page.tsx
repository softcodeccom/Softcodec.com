'use client';

import Link from 'next/link';
import ScrollProgress from '../components/ScrollProgress';
import CursorGlow from '../components/CursorGlow';
import { Scale, FileCheck, AlertCircle, HelpCircle, ChevronRight, Gavel, Globe, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

export default function TermsPage() {
  const points = [
    {
      icon: Gavel,
      title: 'Jurisdiction',
      desc: 'Legal Boundaries',
      content: 'These terms are governed by the laws of Pakistan. Any disputes shall be handled exclusively within the jurisdiction of our registered operations center in Punjab.',
      color: '#06b6d4'
    },
    {
      icon: FileCheck,
      title: 'Usage Rights',
      desc: 'License Protocol',
      content: 'We grant you a temporary, non-exclusive license to view our intellectual property for informational purposes. Reverse engineering or unauthorized distribution is strictly prohibited.',
      color: '#7c3aed'
    },
    {
      icon: Globe,
      title: 'Ethical Use',
      desc: 'Global Standards',
      content: 'Users must agree to use SoftCodec for lawful purposes only. Any attempt to compromise the system, inject malicious code, or scrape data will result in immediate termination of access.',
      color: '#10b981'
    },
    {
      icon: Clock,
      title: 'Maintenance',
      desc: 'System Continuity',
      content: 'While we strive for 99.9% uptime, we reserve the right to perform scheduled system maintenance. We are not liable for any temporary service interruptions during these critical updates.',
      color: '#f59e0b'
    }
  ];

  return (
    <div style={{ background: '#ffffff', color: '#0f172a', minHeight: '100vh', overflowX: 'hidden' }}>
      <ScrollProgress />
      <CursorGlow />

      {/* ─── 1. ELITE LEGAL HERO ─── */}
      <section style={{ paddingTop: '200px', paddingBottom: '120px', position: 'relative' }}>
        <div className="grid-bg" />
        <div style={{ position: 'absolute', top: '-10%', left: '-5%', width: '1000px', height: '1000px', background: 'radial-gradient(circle, rgba(6, 182, 212, 0.08) 0%, transparent 70%)', zIndex: 0, filter: 'blur(80px)' }} />
        
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            style={{ maxWidth: '1000px' }}
          >
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', background: 'rgba(6, 182, 212, 0.05)', padding: '10px 24px', borderRadius: '100px', border: '1px solid rgba(6, 182, 212, 0.1)', marginBottom: '40px' }}>
              <Scale size={16} color="#06b6d4" />
              <span style={{ fontSize: '12px', fontWeight: 900, color: '#06b6d4', letterSpacing: '2px', textTransform: 'uppercase' }}>Protocol v4.1</span>
            </div>

            <h1 style={{ fontSize: 'clamp(48px, 8vw, 96px)', fontWeight: 950, letterSpacing: '-5px', lineHeight: 0.9, marginBottom: '40px' }}>
              Terms of <br />
              <span className="gradient-text">Operations.</span>
            </h1>

            <p style={{ fontSize: '24px', color: '#475569', lineHeight: 1.5, maxWidth: '800px', fontWeight: 500 }}>
              Defining the technical and legal framework of our partnership. Professional standards for a digital-first world.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── 2. LEGAL FRAMEWORK GRID ─── */}
      <section style={{ padding: '100px 0' }}>
        <div className="container">
          <div className="grid-2" style={{ gap: '32px' }}>
            {points.map((p, i) => {
              const Icon = p.icon;
              return (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  style={{ 
                    padding: '60px', 
                    borderRadius: '40px', 
                    background: '#f8fafc', 
                    border: '1px solid #e2e8f0',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '24px',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                >
                  <div style={{ position: 'absolute', bottom: '-20px', right: '-20px', fontSize: '120px', fontWeight: 950, color: 'rgba(0,0,0,0.02)', fontFamily: 'Orbitron', zIndex: 0 }}>
                    0{i + 1}
                  </div>

                  <div style={{ 
                    width: '64px', height: '64px', borderRadius: '20px', 
                    background: `${p.color}10`, color: p.color,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    position: 'relative', zIndex: 1
                  }}>
                    <Icon size={32} />
                  </div>

                  <div style={{ position: 'relative', zIndex: 1 }}>
                    <span style={{ fontSize: '11px', fontWeight: 900, color: p.color, textTransform: 'uppercase', letterSpacing: '2px', display: 'block', marginBottom: '8px' }}>{p.desc}</span>
                    <h3 style={{ fontSize: '24px', fontWeight: 900, marginBottom: '16px' }}>{p.title}</h3>
                    <p style={{ color: '#64748b', lineHeight: 1.8, fontSize: '16px' }}>{p.content}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── 3. ACCEPTANCE SECTION ─── */}
      <section style={{ padding: '100px 0', borderTop: '1px solid #f1f5f9' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '80px', alignItems: 'center' }}>
            <div>
               <h2 style={{ fontSize: '40px', fontWeight: 950, marginBottom: '24px', letterSpacing: '-2px' }}>Agreement of <span style={{ color: '#06b6d4' }}>Action.</span></h2>
               <p style={{ color: '#64748b', fontSize: '18px', lineHeight: 1.7, marginBottom: '40px' }}>
                 By utilizing SoftCodec resources, you automatically consent to these operational protocols. We update these terms annually to reflect global shifts in digital law.
               </p>
               <Link href="/contact" className="btn-primary" style={{ padding: '20px 48px', background: '#0f172a', color: '#fff' }}>
                 Discuss Legal Requirements
               </Link>
            </div>
            
            <div style={{ padding: '60px', borderRadius: '48px', background: 'rgba(6, 182, 212, 0.03)', border: '1px dashed #06b6d4' }}>
               <AlertCircle size={40} color="#06b6d4" style={{ marginBottom: '24px' }} />
               <h4 style={{ fontSize: '20px', fontWeight: 800, marginBottom: '16px' }}>Critical Disclaimer</h4>
               <p style={{ color: '#64748b', fontSize: '14px', lineHeight: 1.8 }}>
                 SoftCodec provides engineering services &apos;as is&apos;. While we ensure the highest technical standards, we are not responsible for any direct or indirect loss resulting from the use of our services in production environments beyond our managed infrastructure.
               </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
