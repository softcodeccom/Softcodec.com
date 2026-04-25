'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Briefcase, MapPin, Clock, Send, CheckCircle2, Upload,
  ChevronRight, Code2, Rocket, Globe, Zap, Shield,
  Star, Users, Laptop, Coffee, Heart, Target, Sparkles,
  ArrowRight, Filter, Search, Terminal, PenTool, Database,
  Cpu, Layout, SearchCode, Pen, Share2, Award, Cloud
} from 'lucide-react';
import Navbar from '../components/Navbar';
import ScrollProgress from '../components/ScrollProgress';
import CursorGlow from '../components/CursorGlow';

const categories = ['All', 'Engineering', 'Design', 'Management', 'Marketing', 'Support'];
const BRAND_COLOR = "#7c3aed";
const BRAND_GRADIENT = "linear-gradient(135deg, #7c3aed, #06b6d4)";

export default function CareersPage() {
  const [jobs, setJobs] = useState<any[]>([]);
  const [selectedJob, setSelectedJob] = useState<any | null>(null);
  const [activeCategory, setActiveCategory] = useState('All');
  const [loading, setLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const res = await fetch('/api/admin/jobs');
      const data = await res.json();
      setJobs(data.filter((j: any) => j.is_active));
    } catch (err) {
      console.error('Error fetching jobs:', err);
    } finally {
      setLoading(false);
    }
  };

  const filteredJobs = activeCategory === 'All' 
    ? jobs 
    : jobs.filter(j => j.category === activeCategory);

  const getIcon = (iconName: string) => {
    const icons: any = {
      Code2, Rocket, Globe, Zap, Shield, Star, Users, Laptop, 
      Coffee, Heart, Target, Sparkles, Terminal, PenTool, 
      Database, Cpu, Layout, SearchCode, Pen, Share2, Award, Cloud, Briefcase
    };
    return icons[iconName] || Briefcase;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    if (selectedJob) {
      formData.append('position', selectedJob.title);
      formData.append('category', selectedJob.category);
    }

    try {
      const res = await fetch('/api/careers', {
        method: 'POST',
        body: formData,
      });

      if (!res.ok) throw new Error('Failed to submit application');

      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div style={{ minHeight: '100vh', background: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} style={{ maxWidth: '500px', textAlign: 'center' }}>
          <div style={{ width: '100px', height: '100px', background: '#f0fdf4', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 32px' }}>
            <CheckCircle2 size={50} color="#22c55e" />
          </div>
          <h1 style={{ fontSize: '40px', fontWeight: 950, color: '#0f172a', marginBottom: '16px', letterSpacing: '-2px' }}>Application <span className="gradient-text">Sent!</span></h1>
          <p style={{ color: '#64748b', fontSize: '18px', lineHeight: 1.6, marginBottom: '32px' }}>
            Thank you for applying to SoftCodec. Our recruitment team will review your profile and contact you soon.
          </p>
          <a href="/" className="btn-primary" style={{ display: 'inline-block', textDecoration: 'none', background: BRAND_GRADIENT, color: '#fff' }}>Back to Home</a>
        </motion.div>
      </div>
    );
  }

  return (
    <div style={{ background: '#ffffff', color: '#0f172a', minHeight: '100vh', overflowX: 'hidden' }}>
      <ScrollProgress />
      <CursorGlow />
      <Navbar />

      {/* ─── 1. PREMIUM LIGHT HERO WITH IMAGE BG ─── */}
      <section style={{
        paddingTop: 'clamp(150px, 15vw, 220px)',
        paddingBottom: 'clamp(80px, 10vw, 160px)',
        position: 'relative',
        overflow: 'hidden',
        background: '#fff'
      }}>
        {/* Background Image with High Visibility */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'url("/careers_hero_bg.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.85, // Significant increase for clear visibility
          zIndex: 0
        }} />
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom, rgba(255,255,255,0.1), rgba(255,255,255,1))',
          zIndex: 0
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: `#ffffff`, border: `1px solid #e2e8f0`, borderRadius: '100px', padding: '10px 24px', marginBottom: '32px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
              <Sparkles size={14} color={BRAND_COLOR} />
              <span style={{ fontSize: '12px', fontWeight: 900, color: BRAND_COLOR, letterSpacing: '2.5px', textTransform: 'uppercase' }}>Join The Arsenal</span>
            </div>

            <h1 style={{ fontSize: 'clamp(40px, 8vw, 100px)', fontWeight: 950, letterSpacing: '-4px', lineHeight: 0.95, marginBottom: '32px', color: '#0f172a' }}>
              Architect Your <br /><span className="gradient-text">Digital Legacy.</span>
            </h1>

            <p style={{ color: '#475569', fontSize: 'clamp(16px, 2vw, 20px)', maxWidth: '800px', margin: '0 auto 48px', lineHeight: 1.6 }}>
              SoftCodec is growing. We are looking for elite talent to build world-class digital products and AI solutions.
            </p>

            <div style={{ display: 'flex', justifyContent: 'center', gap: 'clamp(20px, 4vw, 50px)', flexWrap: 'wrap' }}>
              {[
                { label: 'Remote First', icon: Globe, val: 'Global' },
                { label: 'Growth rate', icon: Rocket, val: '240%' },
                { label: 'Talent base', icon: Users, val: 'Elite' },
                { label: 'Tech stack', icon: Zap, val: 'Modern' },
              ].map((stat, i) => (
                <div key={i} style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: 'clamp(24px, 4vw, 32px)', fontWeight: 900, color: '#0f172a', marginBottom: '4px' }}>{stat.val}</div>
                  <div style={{ fontSize: '11px', fontWeight: 800, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '1px' }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── 2. JET BLACK JOBS GRID ─── */}
      {!selectedJob ? (
        <section style={{ paddingBottom: '120px', background: '#f8fafc' }}>
          <div className="container" style={{ paddingTop: '80px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '50px', flexWrap: 'wrap', gap: '30px' }}>
              <h2 style={{ fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: 950, letterSpacing: '-2px' }}>Open <span className="gradient-text">Missions</span></h2>

              {/* Filter Bar */}
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    style={{
                      padding: '10px 20px',
                      borderRadius: '100px',
                      border: '1px solid',
                      borderColor: activeCategory === cat ? BRAND_COLOR : '#e2e8f0',
                      background: activeCategory === cat ? `${BRAND_COLOR}10` : '#fff',
                      color: activeCategory === cat ? BRAND_COLOR : '#64748b',
                      fontSize: '13px',
                      fontWeight: 700,
                      cursor: 'pointer',
                      transition: 'all 0.3s'
                    }}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(clamp(300px, 45vw, 360px), 1fr))', gap: '24px' }}>
              {filteredJobs.map((job) => (
                <motion.div
                  key={job.id}
                  whileHover={{ y: -8 }}
                  style={{
                    background: '#0a0a0f',
                    borderRadius: '28px',
                    padding: 'clamp(30px, 5vw, 44px)',
                    cursor: 'pointer',
                    transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                  onClick={() => setSelectedJob(job)}
                >
                  <div style={{ position: 'absolute', top: 0, right: 0, width: '150px', height: '150px', background: 'radial-gradient(circle at 100% 0%, rgba(124, 58, 237, 0.1) 0%, transparent 70%)', zIndex: 0 }} />

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '24px', position: 'relative', zIndex: 1 }}>
                    <div style={{ width: '50px', height: '50px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                       {(() => {
                         const Icon = getIcon(job.icon_name);
                         return <Icon size={24} color="#7c3aed" />;
                       })()}
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', justifyContent: 'flex-end' }}>
                      <span style={{ background: 'rgba(124, 58, 237, 0.15)', padding: '5px 10px', borderRadius: '100px', fontSize: '9px', fontWeight: 800, color: '#a78bfa', letterSpacing: '1px', textTransform: 'uppercase' }}>{job.category}</span>
                      <span style={{ background: 'rgba(255,255,255,0.05)', padding: '5px 10px', borderRadius: '100px', fontSize: '9px', fontWeight: 800, color: 'rgba(255,255,255,0.4)', letterSpacing: '1px', textTransform: 'uppercase' }}>{job.type}</span>
                    </div>
                  </div>

                  <h3 style={{ fontSize: '22px', fontWeight: 900, marginBottom: '12px', color: '#fff', position: 'relative', zIndex: 1 }}>{job.title}</h3>
                  <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '14px', lineHeight: 1.6, marginBottom: '28px', position: 'relative', zIndex: 1 }}>{job.desc}</p>

                  <div style={{ display: 'flex', gap: '20px', marginBottom: '32px', position: 'relative', zIndex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'rgba(255,255,255,0.3)', fontSize: '12px', fontWeight: 600 }}>
                      <Briefcase size={14} /> {job.experience}
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '24px', position: 'relative', zIndex: 1 }}>
                    <div style={{ fontSize: '15px', fontWeight: 900, color: '#fff' }}>{job.salary}</div>
                    <div style={{ color: '#7c3aed', fontWeight: 800, fontSize: '13px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                      Apply Now <ArrowRight size={16} />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      ) : (
        /* ─── 3. APPLICATION PORTAL (RESPONSIVE) ─── */
        <section style={{ paddingBottom: '120px', background: '#f8fafc' }}>
          <div className="container" style={{ maxWidth: '1100px', paddingTop: '60px' }}>
            <button
              onClick={() => setSelectedJob(null)}
              style={{ background: 'none', border: 'none', color: '#64748b', fontSize: '15px', fontWeight: 700, cursor: 'pointer', marginBottom: '32px', display: 'flex', alignItems: 'center', gap: '10px' }}
            >
              <ArrowRight size={18} style={{ transform: 'rotate(180deg)' }} /> Back to Roles
            </button>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }} className="responsive-flex">
              {/* Form Side */}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} style={{ flex: 1.2, background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '32px', padding: 'clamp(30px, 5vw, 60px)', boxShadow: '0 15px 40px rgba(0,0,0,0.02)' }}>
                <div style={{ marginBottom: '40px' }}>
                  <span style={{ color: BRAND_COLOR, fontWeight: 800, fontSize: '12px', textTransform: 'uppercase', letterSpacing: '2px' }}>Application Submission</span>
                  <h2 style={{ fontSize: 'clamp(28px, 5vw, 40px)', fontWeight: 950, marginTop: '8px', color: '#0f172a' }}>Joining <br /><span className="gradient-text">{selectedJob.title}</span></h2>
                </div>

                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
                    <div className="input-field">
                      <label style={labelStyle}>Full Name *</label>
                      <input name="fullName" type="text" required placeholder="John Doe" style={inputStyle} />
                    </div>
                    <div className="input-field">
                      <label style={labelStyle}>Email Address *</label>
                      <input name="email" type="email" required placeholder="john@softcodec.co" style={inputStyle} />
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
                    <div className="input-field">
                      <label style={labelStyle}>Phone Number</label>
                      <input name="phone" type="tel" placeholder="+92 3XX XXXXXXX" style={inputStyle} />
                    </div>
                    <div className="input-field">
                      <label style={labelStyle}>Experience Level</label>
                      <select name="experience" style={inputStyle}>
                        <option value="Fresh">Fresh Graduate</option>
                        <option value="1-2 Years">1 - 2 Years</option>
                        <option value="3-5 Years">3 - 5 Years</option>
                        <option value="5+ Years">Senior Veteran</option>
                      </select>
                    </div>
                  </div>

                  <div className="input-field">
                    <label style={labelStyle}>Resume / CV (PDF Preferred) *</label>
                    <div style={{ border: '2px dashed #e2e8f0', borderRadius: '24px', padding: '40px', textAlign: 'center', position: 'relative', background: '#f8fafc' }}>
                      <input name="resume" type="file" required accept=".pdf,.doc,.docx" style={{ position: 'absolute', inset: 0, opacity: 0, cursor: 'pointer' }} />
                      <Upload size={32} color={BRAND_COLOR} style={{ marginBottom: '12px' }} />
                      <p style={{ fontSize: '14px', color: '#64748b', fontWeight: 600 }}>Click or drag to upload CV</p>
                    </div>
                  </div>

                  <div className="input-field">
                    <label style={labelStyle}>Message / Cover Letter</label>
                    <textarea name="message" rows={4} placeholder="What makes you the best fit for SoftCodec?" style={{ ...inputStyle, borderRadius: '24px', resize: 'none' }}></textarea>
                  </div>

                  {error && <p style={{ color: '#ef4444', fontSize: '14px', fontWeight: 600 }}>{error}</p>}

                  <button type="submit" disabled={isSubmitting} className="btn-primary" style={{ width: '100%', padding: '22px', fontSize: '15px', fontWeight: 800, letterSpacing: '1.5px', background: BRAND_GRADIENT, color: '#fff', border: 'none', borderRadius: '100px', cursor: 'pointer' }}>
                    {isSubmitting ? 'Architecting Submission...' : 'SUBMIT APPLICATION'}
                  </button>
                </form>
              </motion.div>

              {/* Sidebar Side */}
              <div style={{ flex: 0.8, display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <div style={{ background: '#0a0a0f', borderRadius: '32px', padding: '40px', color: '#fff', position: 'relative', overflow: 'hidden' }}>
                  <div style={{ position: 'absolute', top: '-10%', right: '-10%', width: '100%', height: '100%', background: 'radial-gradient(circle, rgba(124,58,237,0.1) 0%, transparent 70%)', zIndex: 0 }} />
                  <div style={{ position: 'relative', zIndex: 1 }}>
                    <h4 style={{ fontSize: '18px', fontWeight: 900, marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <Target size={20} color="#a78bfa" /> Key Requirements
                    </h4>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                      {selectedJob.requirements.map((req: string, i: number) => (
                        <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '20px', color: 'rgba(255,255,255,0.7)', fontSize: '14px', lineHeight: 1.5 }}>
                          <CheckCircle2 size={16} color="#10b981" style={{ flexShrink: 0, marginTop: '2px' }} />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div style={{ background: '#ffffff', border: '1px solid #f1f5f9', borderRadius: '32px', padding: '40px' }}>
                  <h4 style={{ fontSize: '14px', fontWeight: 800, color: '#64748b', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '24px' }}>Arsenal Benefits</h4>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '16px' }}>
                    {[
                      { icon: Coffee, color: '#f59e0b', text: 'Premium Snacks' },
                      { icon: Heart, color: '#ef4444', text: 'Health Perks' },
                      { icon: Star, color: '#facc15', text: 'Performance Bonuses' },
                      { icon: Laptop, color: '#06b6d4', text: 'High-End Gear' }
                    ].map((item, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '14px', fontWeight: 700, color: '#1e293b' }}>
                        <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: `${item.color}10`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <item.icon size={16} color={item.color} />
                        </div>
                        {item.text}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      <style jsx>{`
        .responsive-flex {
          display: flex;
          flex-direction: column;
        }
        @media (min-width: 1024px) {
          .responsive-flex {
            flex-direction: row;
          }
        }
      `}</style>
    </div>
  );
}

const labelStyle = {
  display: 'block',
  fontSize: '12px',
  fontWeight: 800,
  color: '#64748b',
  textTransform: 'uppercase' as const,
  letterSpacing: '1.5px',
  marginBottom: '10px'
};

const inputStyle = {
  width: '100%',
  padding: '18px 24px',
  borderRadius: '100px',
  border: '1px solid #e2e8f0',
  fontSize: '15px',
  color: '#0f172a',
  outline: 'none',
  background: '#f8fafc',
  transition: 'all 0.3s'
};
