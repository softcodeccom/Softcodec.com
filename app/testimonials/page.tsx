'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Star, Quote, ArrowRight, Zap, Target, TrendingUp, Users } from 'lucide-react';
import Navbar from '../components/Navbar';
import ScrollProgress from '../components/ScrollProgress';
import CursorGlow from '../components/CursorGlow';
import { supabase } from '../../lib/supabase';

const getInitials = (name: string) => {
  if (!name) return 'U';
  const parts = name.split(' ');
  if (parts.length > 1) return (parts[0][0] + parts[1][0]).toUpperCase();
  return name[0].toUpperCase();
};

const metrics = [
  { icon: TrendingUp, val: '340%', label: 'Avg. Conversion Lift', color: '#7c3aed' },
  { icon: Users, val: '99%', label: 'Client Satisfaction', color: '#06b6d4' },
  { icon: Target, val: '150+', label: 'Successful Launches', color: '#ec4899' },
  { icon: Zap, val: '4.9/5', label: 'Average Platform Rating', color: '#10b981' }
];

export default function TestimonialsPage() {
  const [testimonials, setTestimonials] = useState<any[]>([]);

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const fetchTestimonials = async () => {
    try {
      const { data, error } = await supabase
        .from('testimonials')
        .select('*')
        .eq('status', 'Published')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setTestimonials(data || []);
    } catch (error) {
      console.error('Error fetching testimonials:', error);
    }
  };

  const t0 = testimonials[0];
  const t1 = testimonials[1];
  const t2 = testimonials[2];
  const t3 = testimonials[3];
  const t4 = testimonials[4];
  const t5 = testimonials[5];

  return (
    <div style={{ background: '#ffffff', color: '#0f172a' }}>
      <ScrollProgress />
      <CursorGlow />
      <Navbar />

      {/* ─── 1. ARCHITECTURAL HERO ─── */}
      <section className="section" style={{ 
        paddingTop: '200px', 
        paddingBottom: '120px', 
        background: 'radial-gradient(circle at 50% -10%, rgba(124,58,237,0.08), transparent 70%)',
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
              background: 'rgba(124,58,237,0.05)', 
              padding: '8px 20px', 
              borderRadius: '100px', 
              border: '1px solid rgba(124,58,237,0.1)',
              marginBottom: '32px'
            }}>
              <span style={{ width: '8px', height: '8px', background: '#7c3aed', borderRadius: '50%', boxShadow: '0 0 10px #7c3aed' }} />
              <span style={{ fontSize: '11px', fontWeight: 900, letterSpacing: '2px', color: '#7c3aed', textTransform: 'uppercase' }}>CLIENT SUCCESS STORIES</span>
            </div>
            
            <h1 style={{ 
              fontSize: 'clamp(40px, 7vw, 76px)', 
              fontWeight: 950, 
              lineHeight: 1, 
              letterSpacing: '-3px', 
              marginBottom: '32px' 
            }}>
              Voices of Global <br />
              <span className="gradient-text">Innovation.</span>
            </h1>
            
            <p style={{ 
              fontSize: '20px', 
              color: '#475569', 
              maxWidth: '650px', 
              margin: '0 auto', 
              lineHeight: 1.7 
            }}>
              Don&apos;t just take our word for it. Hear from the visionaries and leaders who Have partnered with SoftCodec to scale their digital territory.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── 2. IMPACT METRICS ─── */}
      <section className="section" style={{ padding: '0 0 120px' }}>
        <div className="container">
          <div className="grid-4" style={{ gap: '24px' }}>
            {metrics.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                style={{
                  padding: '40px 32px',
                  background: '#fff',
                  borderRadius: '24px',
                  border: '1px solid rgba(0,0,0,0.05)',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.02)',
                  textAlign: 'center'
                }}
              >
                <div style={{ 
                  width: '50px', height: '50px', borderRadius: '50%', 
                  background: `${m.color}10`, display: 'flex', alignItems: 'center', 
                  justifyContent: 'center', margin: '0 auto 24px', border: `1px solid ${m.color}20` 
                }}>
                  <m.icon size={24} color={m.color} />
                </div>
                <div style={{ fontSize: '40px', fontWeight: 950, fontFamily: 'Orbitron', marginBottom: '8px', letterSpacing: '-2px' }}>{m.val}</div>
                <div style={{ fontSize: '12px', fontWeight: 800, color: '#64748b', textTransform: 'uppercase', letterSpacing: '1px' }}>{m.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 3. ELITE TESTIMONIAL GRID ─── */}
      <section className="section" style={{ 
        background: '#020205', 
        padding: '140px 0', 
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Cinematic Ambient Elements */}
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'radial-gradient(circle at 10% 20%, rgba(124,58,237,0.05), transparent 50%), radial-gradient(circle at 90% 80%, rgba(6,182,212,0.05), transparent 50%)', zIndex: 0 }} />
        
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <h2 style={{ color: '#fff', fontSize: 'clamp(32px, 5vw, 54px)', fontWeight: 950, letterSpacing: '-2px' }}>
              Architecting <span className="gradient-text">Excellence</span>
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '18px', maxWidth: '600px', margin: '20px auto 0' }}>
              A curated collection of feedback from our most strategic partnerships.
            </p>
          </div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
            gap: '24px', 
            alignItems: 'start' 
          }}>
            
            {/* ================= COLUMN 1 ================= */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              
              {/* Card 1: Vertical Centered */}
              {t4 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                style={{
                  background: 'rgba(255,255,255,0.02)',
                  borderRadius: '24px',
                  padding: '40px 32px',
                  border: '1px solid rgba(255,255,255,0.06)',
                  backdropFilter: 'blur(20px)',
                  textAlign: 'center',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'center', gap: '4px', color: '#fbbf24', fontSize: '14px', marginBottom: '16px' }}>
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} fill={i < t4.rating ? 'currentColor' : 'transparent'} color={i < t4.rating ? 'currentColor' : 'rgba(255,255,255,0.2)'} />)}
                </div>
                <h3 style={{ color: '#fff', fontSize: '20px', fontWeight: 700, lineHeight: 1.4, marginBottom: '20px' }}>
                  {t4.content}
                </h3>
                <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', marginBottom: '24px' }}>
                   <span style={{ background: 'rgba(16,185,129,0.1)', color: '#10b981', padding: '4px 12px', borderRadius: '100px', fontSize: '11px', fontWeight: 800 }}>Fast delivery</span>
                   <span style={{ background: 'rgba(16,185,129,0.1)', color: '#10b981', padding: '4px 12px', borderRadius: '100px', fontSize: '11px', fontWeight: 800 }}>Perfect</span>
                </div>
                <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '12px' }}>
                  - @{t4.name.replace(/\s+/g, '')} -
                </p>
              </motion.div>
              )}

              {/* Card 2: Wide Dark Horizontal */}
              {t5 && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                style={{
                  background: 'rgba(3,3,10,0.8)',
                  borderRadius: '24px',
                  padding: '32px',
                  border: '1px solid rgba(255,255,255,0.04)',
                  backdropFilter: 'blur(20px)',
                }}
              >
                <div style={{ display: 'flex', gap: '4px', color: '#fbbf24', fontSize: '14px' }}>
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} fill={i < t5.rating ? 'currentColor' : 'transparent'} color={i < t5.rating ? 'currentColor' : 'rgba(255,255,255,0.2)'} />)}
                </div>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '14px', lineHeight: 1.6, margin: '16px 0 24px' }}>
                  {t5.content}
                </p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ background: 'rgba(16,185,129,0.15)', color: '#10b981', padding: '6px 16px', borderRadius: '100px', fontSize: '11px', fontWeight: 800 }}>Great service</span>
                  <div style={{ textAlign: 'right' }}>
                    <h4 style={{ color: '#fff', fontSize: '13px', fontWeight: 700 }}>{t5.name}</h4>
                    <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: '11px' }}>{t5.role}</p>
                  </div>
                </div>
              </motion.div>
              )}

            </div>

            {/* ================= COLUMN 2 ================= */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginTop: '20px' }}>
              
              {/* Card 3: The Main Feature Block */}
              {t0 && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                style={{
                  background: 'linear-gradient(160deg, rgba(255,255,255,0.06), rgba(255,255,255,0.01))',
                  borderRadius: '28px',
                  padding: '40px',
                  border: '1px solid rgba(255,255,255,0.1)',
                  backdropFilter: 'blur(30px)',
                  boxShadow: '0 30px 60px rgba(0,0,0,0.4)',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                {/* Top Header */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '24px' }}>
                  <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                    <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: 'linear-gradient(135deg, #7c3aed, #06b6d4)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 800, border: '2px solid rgba(255,255,255,0.2)' }}>
                      {getInitials(t0.name)}
                    </div>
                    <div>
                      <h4 style={{ color: '#fff', fontSize: '15px', fontWeight: 700 }}>{t0.name}</h4>
                      <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '12px' }}>{t0.role}</p>
                    </div>
                  </div>
                  <div style={{ background: '#10b981', color: '#fff', padding: '4px 10px', borderRadius: '100px', fontSize: '10px', letterSpacing: '2px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    {[...Array(5)].map((_, i) => <Star key={i} size={10} fill={i < t0.rating ? 'currentColor' : 'transparent'} />)}
                  </div>
                </div>
                
                <h2 style={{ color: '#fff', fontSize: '32px', fontWeight: 800, lineHeight: 1.2, marginBottom: '16px', letterSpacing: '-0.5px' }}>
                  Superb quality, extremely professional team!
                </h2>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '15px' }}>
                  {t0.content}
                </p>
              </motion.div>
              )}

              {/* Card 4: Dark Review Style */}
              {t2 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                style={{
                  background: 'rgba(255,255,255,0.02)',
                  borderRadius: '24px',
                  padding: '32px',
                  border: '1px solid rgba(255,255,255,0.04)',
                  backdropFilter: 'blur(20px)',
                }}
              >
                <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: '11px', textAlign: 'right', marginBottom: '16px' }}>@{t2.company.replace(/\s+/g, '')} • {new Date(t2.created_at).toLocaleDateString()}</p>
                <h3 style={{ color: '#fff', fontSize: '28px', fontWeight: 800, marginBottom: '16px' }}>{t2.name}</h3>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '14px', lineHeight: 1.7, marginBottom: '32px' }}>
                  {t2.content}
                </p>
                <div style={{ textAlign: 'right', display: 'flex', justifyContent: 'flex-end', gap: '8px', alignItems: 'center' }}>
                  <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '12px', display: 'flex' }}>
                    {[...Array(5)].map((_, i) => <Star key={i} size={12} fill={i < t2.rating ? 'currentColor' : 'transparent'} color={i < t2.rating ? 'currentColor' : 'rgba(255,255,255,0.2)'} />)}
                  </span>
                  <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '11px' }}>({t2.rating}.0)</span>
                </div>
              </motion.div>
              )}

            </div>

            {/* ================= COLUMN 3 ================= */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginTop: '-20px' }}>
              
              {/* Card 5: Quote Top */}
              {t1 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                style={{
                  background: 'rgba(255,255,255,0.02)',
                  borderRadius: '24px',
                  padding: '32px',
                  border: '1px solid rgba(255,255,255,0.05)',
                  backdropFilter: 'blur(20px)',
                }}
              >
                <h1 style={{ color: 'rgba(255,255,255,0.1)', fontSize: '50px', lineHeight: 0.5, margin: 0, padding: 0 }}>&quot;</h1>
                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px', fontStyle: 'italic', lineHeight: 1.6, margin: '16px 0 24px' }}>
                  {t1.content}
                </p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ display: 'flex', gap: '2px', color: 'rgba(255,255,255,0.3)', fontSize: '12px' }}>
                    {[...Array(5)].map((_, i) => <Star key={i} size={10} fill={i < t1.rating ? 'currentColor' : 'transparent'} color={i < t1.rating ? 'currentColor' : 'rgba(255,255,255,0.2)'} />)}
                    <span style={{marginLeft: '4px'}}>({t1.rating}/5)</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                     <h4 style={{ color: '#fff', fontSize: '12px' }}>{t1.name}</h4>
                     <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: '#06b6d4', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', color: '#fff' }}>
                       {getInitials(t1.name)}
                     </div>
                  </div>
                </div>
              </motion.div>
              )}

              {/* Card 6: Square Image Overlap Highlight */}
              {t3 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                style={{
                  background: 'linear-gradient(180deg, rgba(6,182,212,0.1) 0%, rgba(6,182,212,0.01) 100%)',
                  borderRadius: '32px',
                  padding: '40px 32px',
                  border: '1px solid rgba(6,182,212,0.15)',
                  backdropFilter: 'blur(20px)',
                  textAlign: 'center',
                  marginTop: '10px'
                }}
              >
                <div style={{ 
                  width: '80px', height: '80px', borderRadius: '50%', 
                  background: 'linear-gradient(135deg, #10b981, #06b6d4)', 
                  margin: '0 auto 24px', 
                  border: '4px solid #020205',
                  boxShadow: '0 10px 20px rgba(6,182,212,0.3)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: '#fff', fontSize: '24px', fontWeight: 800
                }}>
                  {getInitials(t3.name)}
                </div>
                <h3 style={{ color: '#fff', fontSize: '22px', fontWeight: 800, marginBottom: '12px' }}>Highly Recommended</h3>
                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '13px', lineHeight: 1.6 }}>
                  {t3.content}
                </p>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', marginTop: '32px', color: 'rgba(255,255,255,0.4)', fontSize: '12px' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>♥ 1,914</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>👁 21.7k</span>
                </div>
              </motion.div>
              )}

            </div>
          </div>
        </div>
      </section>

      {/* ─── 4. CINEMATIC CTA ─── */}
      <section className="section" style={{ 
        padding: '160px 0',
        background: '#fff',
        textAlign: 'center'
      }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            style={{ maxWidth: '900px', margin: '0 auto' }}
          >
            <h2 style={{ fontSize: 'clamp(36px, 6vw, 64px)', fontWeight: 950, letterSpacing: '-3px', lineHeight: 1 }}>
              Your Success is Our <br />
              <span className="gradient-text">Next Project.</span>
            </h2>
            <p style={{ fontSize: '20px', color: '#475569', margin: '32px auto 48px', maxWidth: '600px' }}>
              Join hundreds of high-growth companies that trust SoftCodec to engineer their competitive advantage.
            </p>
            <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
              <Link href="/contact" className="btn-primary" style={{ padding: '20px 48px' }}>
                <span>Initiate Partnership →</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
