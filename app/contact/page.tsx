'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram, Github, ChevronRight, Send } from 'lucide-react';
import Navbar from '../components/Navbar';
import ScrollProgress from '../components/ScrollProgress';
import CursorGlow from '../components/CursorGlow';

const contactDetails = [
  { 
    icon: Mail, 
    title: 'Email Us', 
    value: 'softcodec.com@gmail.com', 
    color: '#7c3aed',
    desc: 'Our technical team typically responds within 4 business hours.'
  },
  { 
    icon: Phone, 
    title: 'Call Us', 
    value: '+92-307-6209331', 
    color: '#06b6d4',
    desc: 'Available Mon-Fri, 9am - 6pm PKT for immediate inquiries.'
  }
];

const socialLinks = [
  { icon: Linkedin, name: 'LinkedIn', href: '#' },
  { icon: Twitter, name: 'Twitter', href: '#' },
  { icon: Instagram, name: 'Instagram', href: '#' },
  { icon: Github, name: 'GitHub', href: '#' }
];

export default function ContactPage() {
  const [formState, setFormState] = useState<'idle'|'sending'|'sent'|'error'>('idle');
  const [formData, setFormData] = useState({ name: '', email: '', service: 'Elite Web Development', message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('sending');
    
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error('Failed to send');
      
      setFormState('sent');
      setFormData({ name: '', email: '', service: 'Elite Web Development', message: '' });
      setTimeout(() => setFormState('idle'), 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setFormState('error');
      setTimeout(() => setFormState('idle'), 3000);
    }
  };

  return (
    <div style={{ background: '#ffffff', color: '#0f172a' }}>
      <ScrollProgress />
      <CursorGlow />
      <Navbar />

      {/* ─── 1. ARCHITECTURAL HERO ─── */}
      <section className="section" style={{ 
        paddingTop: '200px', 
        paddingBottom: '140px', 
        background: 'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(124,58,237,0.12), transparent)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Background Accents */}
        <div style={{ position: 'absolute', top: '10%', left: '0', width: '100%', height: '100%', backgroundImage: 'radial-gradient(rgba(0,0,0,1) 1px, transparent 1px)', backgroundSize: '40px 40px', opacity: 0.03, zIndex: 0 }} />
        
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="grid-2" style={{ alignItems: 'center', gap: '60px' }}>
            
            {/* Left Column: Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              style={{ textAlign: 'left' }}
            >
              <div style={{ 
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: '10px', 
                background: 'rgba(124,58,237,0.05)', 
                padding: '8px 20px', 
                borderRadius: '100px', 
                border: '1px solid rgba(124,58,237,0.1)',
                marginBottom: '32px'
              }}>
                <span style={{ width: '8px', height: '8px', background: '#7c3aed', borderRadius: '50%', boxShadow: '0 0 10px #7c3aed' }} />
                <span style={{ fontSize: '11px', fontWeight: 900, letterSpacing: '2px', color: '#7c3aed', textTransform: 'uppercase' }}>GET IN TOUCH</span>
              </div>
              
              <h1 style={{ 
                fontSize: 'clamp(36px, 6vw, 64px)', 
                fontWeight: 950, 
                lineHeight: 1.1, 
                letterSpacing: '-2px', 
                marginBottom: '24px',
                color: '#7c3aed'
              }}>
                Contact Us
              </h1>
              
              <h3 style={{ fontSize: '20px', fontWeight: 800, color: '#0f172a', marginBottom: '24px' }}>
                Let&apos;s Build Something Great Together
              </h3>
              
              <p style={{ 
                fontSize: '17px', 
                color: '#475569', 
                maxWidth: '500px', 
                lineHeight: 1.7,
                margin: 0
              }}>
                Have a project in mind, a question about our services, or need expert guidance? We&apos;re here to help. Reach out to us and let&apos;s discuss how we can turn your ideas into powerful digital solutions.
              </p>
            </motion.div>

            {/* Right Column: Communication Hub Visual */}
            <div className="" style={{ position: 'relative', height: '400px', width: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              
              {/* Central Phone Icon (Styled 3D) */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                style={{
                  width: '180px',
                  height: '180px',
                  background: 'linear-gradient(135deg, #7c3aed, #4c1d95)',
                  borderRadius: '30px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 20px 50px rgba(124,58,237,0.3), inset 0 2px 10px rgba(255,255,255,0.4), inset 0 -5px 15px rgba(0,0,0,0.2)',
                  zIndex: 2,
                  position: 'relative'
                }}
              >
                <div style={{
                  position: 'absolute',
                  inset: '10px',
                  border: '1.5px solid rgba(255,255,255,0.1)',
                  borderRadius: '22px',
                  pointerEvents: 'none'
                }} />
                <Phone size={80} color="#fff" strokeWidth={1.5} style={{ filter: 'drop-shadow(0 10px 10px rgba(0,0,0,0.2))' }} />
              </motion.div>

              {/* Decorative Arc Path - Center (200,200), Radius 150 */}
              <svg width="400" height="400" style={{ position: 'absolute', zIndex: 1 }}>
                <motion.path
                  d="M 50 200 A 150 150 0 0 1 350 200"
                  fill="none"
                  stroke="rgba(124,58,237,0.15)"
                  strokeWidth="2"
                  strokeDasharray="5,5"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5, delay: 0.4 }}
                />
              </svg>

              {/* Floating Orbiting Icons - Radius must match Arc (150) */}
              {[
                { Icon: (props: any) => <span {...props}>🎧</span>, theta: 200 },
                { Icon: (props: any) => <span {...props}>💬</span>, theta: 240 },
                { Icon: (props: any) => <span {...props}>✉️</span>, theta: 270 },
                { Icon: (props: any) => <span {...props}>📞</span>, theta: 300 },
                { Icon: (props: any) => <span {...props}>@</span>, theta: 340 }
              ].map((item, i) => {
                const radius = 150;
                const angle = (item.theta * Math.PI) / 180;
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;
                
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 + i * 0.1, duration: 0.5 }}
                    style={{
                      position: 'absolute',
                      left: `calc(50% + ${x}px)`,
                      top: `calc(50% + ${y}px)`,
                      width: '44px',
                      height: '44px',
                      background: '#fff',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '18px',
                      boxShadow: '0 10px 20px rgba(0,0,0,0.06), 0 0 0 1px rgba(0,0,0,0.02)',
                      zIndex: 3,
                      transform: 'translate(-50%, -50%)'
                    }}
                  >
                    <motion.div
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
                    >
                      <item.Icon />
                    </motion.div>
                  </motion.div>
                );
              })}

              {/* Background Glows */}
              <div style={{ position: 'absolute', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(124,58,237,0.1) 0%, transparent 70%)', filter: 'blur(40px)', zIndex: 0 }} />
            </div>

          </div>
        </div>
      </section>

      {/* ─── 2. CONTACT DETAILS GRID ─── */}
      <section className="section" style={{ padding: '0 0 140px' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <div className="grid-2" style={{ gap: '32px' }}>
            {contactDetails.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.8 }}
                style={{ 
                  padding: '40px', 
                  background: '#020205', 
                  borderRadius: '32px', 
                  border: '1px solid rgba(255,255,255,0.05)',
                  borderTop: '1px solid rgba(255,255,255,0.15)',
                  backdropFilter: 'blur(30px)',
                  boxShadow: '0 20px 50px rgba(0,0,0,0.3)',
                  transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-12px)';
                  e.currentTarget.style.borderColor = 'rgba(124,58,237,0.3)';
                  e.currentTarget.style.boxShadow = '0 40px 80px rgba(0,0,0,0.5)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)';
                  e.currentTarget.style.boxShadow = '0 20px 50px rgba(0,0,0,0.3)';
                }}
              >
                <div style={{ 
                  width: '64px', 
                  height: '64px', 
                  borderRadius: '20px', 
                  background: 'rgba(255,255,255,0.03)', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  marginBottom: '28px',
                  border: `1px solid rgba(255,255,255,0.08)` 
                }}>
                  <item.icon size={30} color={item.color} />
                </div>
                <h3 style={{ fontSize: '22px', fontWeight: 800, marginBottom: '12px', color: '#fff' }}>{item.title}</h3>
                <div style={{ fontSize: '16px', fontWeight: 700, color: '#7c3aed', marginBottom: '16px' }}>{item.value}</div>
                <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.45)', lineHeight: 1.7 }}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 3. FORM SECTION ─── */}
      <section className="section" style={{ background: '#f8fafc', padding: '140px 0', borderTop: '1px solid rgba(0,0,0,0.05)' }}>
        <div className="container">
          <div className="grid-2" style={{ gap: '100px', alignItems: 'center' }}>
            
            <div className="reveal-left">
              <span style={{ fontSize: '11px', fontWeight: 900, color: '#7c3aed', letterSpacing: '2px', textTransform: 'uppercase' }}>DEPLOY YOUR VISION</span>
              <h2 style={{ fontSize: 'clamp(32px, 4vw, 54px)', fontWeight: 950, letterSpacing: '-2px', lineHeight: 1.1, margin: '20px 0 32px' }}>
                Ready to Start the <span className="gradient-text">Forge?</span>
              </h2>
              <p style={{ fontSize: '18px', color: '#475569', lineHeight: 1.7, marginBottom: '48px' }}>
                Fill out the technical brief below, and one of our senior architects will reach out to schedule a deep-dive feasibility session.
              </p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <h4 style={{ fontSize: '14px', fontWeight: 900, letterSpacing: '1px', textTransform: 'uppercase', color: '#64748b' }}>Technical Partnership Channels</h4>
                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                  {socialLinks.map((s, i) => (
                    <Link 
                      key={i} 
                      href={s.href}
                      style={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: '10px', 
                        padding: '12px 20px', 
                        borderRadius: '100px', 
                        background: '#fff', 
                        border: '1px solid rgba(0,0,0,0.06)', 
                        textDecoration: 'none',
                        transition: 'all 0.3s ease'
                      }}
                      onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#7c3aed'; e.currentTarget.style.background = 'rgba(124,58,237,0.02)'; }}
                      onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(0,0,0,0.06)'; e.currentTarget.style.background = '#fff'; }}
                    >
                      <s.icon size={16} color="#475569" />
                      <span style={{ fontSize: '13px', fontWeight: 700, color: '#475569' }}>{s.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="reveal-right">
              <motion.div 
                style={{ 
                  background: '#ffffff', 
                  borderRadius: '32px', 
                  padding: 'min(50px, 8vw)',
                  boxShadow: '0 40px 100px rgba(0,0,0,0.08)',
                  border: '1px solid rgba(0,0,0,0.03)'
                }}
              >
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
                  <div className="grid-2" style={{ gap: '28px' }}>
                    <div className="form-group">
                      <label style={{ fontSize: '12px', fontWeight: 800, color: '#64748b', textTransform: 'uppercase', letterSpacing: '1px', display: 'block', marginBottom: '10px' }}>Full Name</label>
                      <input 
                        type="text" 
                        required 
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        placeholder="John Doe"
                        style={{ width: '100%', padding: '16px', background: 'rgba(0,0,0,0.02)', border: '1px solid rgba(0,0,0,0.06)', borderRadius: '14px', color: '#0f172a', fontWeight: 600, outline: 'none', transition: 'all 0.3s ease' }} 
                        onFocus={(e) => e.target.style.borderColor = '#7c3aed'}
                        onBlur={(e) => e.target.style.borderColor = 'rgba(0,0,0,0.06)'}
                      />
                    </div>
                    <div className="form-group">
                      <label style={{ fontSize: '12px', fontWeight: 800, color: '#64748b', textTransform: 'uppercase', letterSpacing: '1px', display: 'block', marginBottom: '10px' }}>Email Address</label>
                      <input 
                        type="email" 
                        required 
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        placeholder="john@softcodec.ai"
                        style={{ width: '100%', padding: '16px', background: 'rgba(0,0,0,0.02)', border: '1px solid rgba(0,0,0,0.06)', borderRadius: '14px', color: '#0f172a', fontWeight: 600, outline: 'none', transition: 'all 0.3s ease' }} 
                        onFocus={(e) => e.target.style.borderColor = '#7c3aed'}
                        onBlur={(e) => e.target.style.borderColor = 'rgba(0,0,0,0.06)'}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label style={{ fontSize: '12px', fontWeight: 800, color: '#64748b', textTransform: 'uppercase', letterSpacing: '1px', display: 'block', marginBottom: '10px' }}>Inquiry Domain</label>
                    <select 
                      value={formData.service}
                      onChange={(e) => setFormData({...formData, service: e.target.value})}
                      style={{ width: '100%', padding: '16px', background: 'rgba(0,0,0,0.02)', border: '1px solid rgba(0,0,0,0.06)', borderRadius: '14px', color: '#0f172a', fontWeight: 600, outline: 'none', appearance: 'none' }}
                    >
                      <option>Elite Web Development</option>
                      <option>High-Performance Mobile Apps</option>
                      <option>AI-First Engineering</option>
                      <option>Cloud Architecture & DevOps</option>
                      <option>Premium UI/UX System Design</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label style={{ fontSize: '12px', fontWeight: 800, color: '#64748b', textTransform: 'uppercase', letterSpacing: '1px', display: 'block', marginBottom: '10px' }}>Technical Brief</label>
                    <textarea 
                      rows={4} 
                      required 
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      placeholder="Give us a high-level summary of your project vision..."
                      style={{ width: '100%', padding: '16px', background: 'rgba(0,0,0,0.02)', border: '1px solid rgba(0,0,0,0.06)', borderRadius: '14px', color: '#0f172a', fontWeight: 600, outline: 'none', transition: 'all 0.3s ease', resize: 'none' }} 
                      onFocus={(e) => e.target.style.borderColor = '#7c3aed'}
                      onBlur={(e) => e.target.style.borderColor = 'rgba(0,0,0,0.06)'}
                    />
                  </div>

                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit" 
                    className="btn-primary" 
                    disabled={formState === 'sending' || formState === 'sent'} 
                    style={{ 
                      width: '100%', padding: '20px', fontSize: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px',
                      background: formState === 'error' ? '#ef4444' : formState === 'sent' ? '#10b981' : undefined
                    }}
                  >
                    <span>{formState === 'idle' ? 'Initialize Contact' : formState === 'sending' ? 'Sending Technical Data...' : formState === 'error' ? 'Connection Error - Try Again' : 'Message Deployed Successfully!'}</span>
                    {formState === 'idle' && <Send size={18} />}
                  </motion.button>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      <style>{`
        select { background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%237c3aed' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'%3E%3C/path%3E%3C/svg%3E"); background-repeat: no-repeat; background-position: right 16px center; background-size: 16px; }
      `}</style>
    </div>
  );
}
