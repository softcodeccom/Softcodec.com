'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Star, Quote, ArrowRight, Zap, Target, TrendingUp, Users } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollProgress from '../components/ScrollProgress';
import CursorGlow from '../components/CursorGlow';

const testimonials = [
  { 
    id: 1, 
    name: 'Ahmed Raza', 
    role: 'CEO, TechVentures PK', 
    text: 'SoftCodec completely transformed our business. The website they built increased our conversions by 340% in the first month! Their team is professional, fast, and highly skilled.',
    rating: 5,
    avatar: 'AR',
    accent: '#7c3aed'
  },
  { 
    id: 2, 
    name: 'Sarah Jenkins', 
    role: 'Marketing Director, GlobalFlow', 
    text: 'Working with SoftCodec was a game changer for our mobile app. The AI-integrated features they developed have set us light years ahead of our competitors.',
    rating: 5,
    avatar: 'SJ',
    accent: '#06b6d4'
  },
  { 
    id: 3, 
    name: 'Umer Khan', 
    role: 'Owner, PureBazaar', 
    text: 'The headless e-commerce store SoftCodec built for us is incredibly fast. Our customers love the new experience, and our sales have never been higher.',
    rating: 5,
    avatar: 'UK',
    accent: '#ec4899'
  },
  { 
    id: 4, 
    name: 'David Miller', 
    role: 'CTO, DataSecure', 
    text: 'Our cloud migration was seamless thanks to the SoftCodec DevOps team. Zero downtime and a significant reduction in our monthly cloud spend.',
    rating: 5,
    avatar: 'DM',
    accent: '#10b981'
  },
  { 
    id: 5, 
    name: 'Zainab Bibi', 
    role: 'Product Manager, CreativeStudio', 
    text: 'The UI/UX design team at SoftCodec is world-class. They took our vague ideas and turned them into a stunning, intuitive interface that users love.',
    rating: 5,
    avatar: 'ZB',
    accent: '#f59e0b'
  },
  { 
    id: 6, 
    name: 'Robert Wilson', 
    role: 'Founder, StartupX', 
    text: 'From seed-stage MVP to a scalable product, SoftCodec has been our trusted technical partner. Their insight goes beyond just writing code.',
    rating: 5,
    avatar: 'RW',
    accent: '#8b5cf6'
  }
];

const metrics = [
  { icon: TrendingUp, val: '340%', label: 'Avg. Conversion Lift', color: '#7c3aed' },
  { icon: Users, val: '99%', label: 'Client Satisfaction', color: '#06b6d4' },
  { icon: Target, val: '150+', label: 'Successful Launches', color: '#ec4899' },
  { icon: Zap, val: '4.9/5', label: 'Average Platform Rating', color: '#10b981' }
];

export default function TestimonialsPage() {
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
                <div style={{ display: 'flex', justifyContent: 'center', gap: '4px', color: '#fbbf24', fontSize: '14px', marginBottom: '16px' }}>★★★★★</div>
                <h3 style={{ color: '#fff', fontSize: '20px', fontWeight: 700, lineHeight: 1.4, marginBottom: '20px' }}>
                  World-class engineering and intuitive design!
                </h3>
                <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', marginBottom: '24px' }}>
                   <span style={{ background: 'rgba(16,185,129,0.1)', color: '#10b981', padding: '4px 12px', borderRadius: '100px', fontSize: '11px', fontWeight: 800 }}>Fast delivery</span>
                   <span style={{ background: 'rgba(16,185,129,0.1)', color: '#10b981', padding: '4px 12px', borderRadius: '100px', fontSize: '11px', fontWeight: 800 }}>Perfect</span>
                </div>
                <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '12px' }}>
                  - @{testimonials[4].name.replace(' ', '')} -
                </p>
              </motion.div>

              {/* Card 2: Wide Dark Horizontal */}
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
                <div style={{ display: 'flex', gap: '4px', color: '#fbbf24', fontSize: '14px' }}>★★★★★</div>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '14px', lineHeight: 1.6, margin: '16px 0 24px' }}>
                  {testimonials[5].text}
                </p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ background: 'rgba(16,185,129,0.15)', color: '#10b981', padding: '6px 16px', borderRadius: '100px', fontSize: '11px', fontWeight: 800 }}>Great service</span>
                  <div style={{ textAlign: 'right' }}>
                    <h4 style={{ color: '#fff', fontSize: '13px', fontWeight: 700 }}>{testimonials[5].name}</h4>
                    <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: '11px' }}>{testimonials[5].role}</p>
                  </div>
                </div>
              </motion.div>

            </div>

            {/* ================= COLUMN 2 ================= */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginTop: '20px' }}>
              
              {/* Card 3: The Main Feature Block */}
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
                      {testimonials[0].avatar}
                    </div>
                    <div>
                      <h4 style={{ color: '#fff', fontSize: '15px', fontWeight: 700 }}>{testimonials[0].name}</h4>
                      <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '12px' }}>{testimonials[0].role}</p>
                    </div>
                  </div>
                  <div style={{ background: '#10b981', color: '#fff', padding: '4px 10px', borderRadius: '100px', fontSize: '10px', letterSpacing: '2px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    ★★★★★
                  </div>
                </div>
                
                <h2 style={{ color: '#fff', fontSize: '32px', fontWeight: 800, lineHeight: 1.2, marginBottom: '16px', letterSpacing: '-0.5px' }}>
                  Increased conversions by 340% in the first month!
                </h2>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '15px' }}>
                  Superb quality, extremely professional team. SoftCodec completely transformed our business trajectory.
                </p>
              </motion.div>

              {/* Card 4: Dark Review Style */}
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
                <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: '11px', textAlign: 'right', marginBottom: '16px' }}>@purebazaar • 12h</p>
                <h3 style={{ color: '#fff', fontSize: '28px', fontWeight: 800, marginBottom: '16px' }}>Lightning Fast</h3>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '14px', lineHeight: 1.7, marginBottom: '32px' }}>
                  {testimonials[2].text}
                </p>
                <div style={{ textAlign: 'right', display: 'flex', justifyContent: 'flex-end', gap: '8px', alignItems: 'center' }}>
                  <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '12px' }}>★★★★★</span>
                  <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '11px' }}>(5.0)</span>
                </div>
              </motion.div>

            </div>

            {/* ================= COLUMN 3 ================= */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginTop: '-20px' }}>
              
              {/* Card 5: Quote Top */}
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
                  {testimonials[1].text}
                </p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ display: 'flex', gap: '2px', color: 'rgba(255,255,255,0.3)', fontSize: '12px' }}>★★★★★ <span style={{marginLeft: '4px'}}>(5/5)</span></div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                     <h4 style={{ color: '#fff', fontSize: '12px' }}>{testimonials[1].name}</h4>
                     <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: '#06b6d4', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', color: '#fff' }}>{testimonials[1].avatar}</div>
                  </div>
                </div>
              </motion.div>

              {/* Card 6: Square Image Overlap Highlight */}
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
                  {testimonials[3].avatar}
                </div>
                <h3 style={{ color: '#fff', fontSize: '22px', fontWeight: 800, marginBottom: '12px' }}>Zero Downtime</h3>
                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '13px', lineHeight: 1.6 }}>
                  {testimonials[3].text}
                </p>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', marginTop: '32px', color: 'rgba(255,255,255,0.4)', fontSize: '12px' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>♥ 1,914</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>👁 21.7k</span>
                </div>
              </motion.div>

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

      <Footer />
    </div>
  );
}
