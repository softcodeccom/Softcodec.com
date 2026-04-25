'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Github, ChevronRight, LineChart, Smartphone, Bot, ShoppingBag, Cloud, PenTool, Layout, Loader2, Shield, Zap, Globe } from 'lucide-react';
import Navbar from '../../components/Navbar';
import ScrollProgress from '../../components/ScrollProgress';
import CursorGlow from '../../components/CursorGlow';
import { supabase } from '../../../lib/supabase';

const getCategoryAssets = (category: string) => {
  switch (category) {
    case 'Web Development': return { icon: LineChart, color: '#7c3aed' };
    case 'Mobile Apps': return { icon: Smartphone, color: '#06b6d4' };
    case 'SaaS': return { icon: Cloud, color: '#3b82f6' };
    case 'AI & Automation': return { icon: Bot, color: '#ec4899' };
    case 'E-Commerce': return { icon: ShoppingBag, color: '#10b981' };
    case 'UI/UX Design': return { icon: PenTool, color: '#f59e0b' };
    default: return { icon: Layout, color: '#94a3b8' };
  }
};

export default function ProjectDetailPage() {
  const params = useParams();
  const id = params.id as string;

  const [project, setProject] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    if (id) fetchProject();
  }, [id]);

  const fetchProject = async () => {
    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .eq('id', id)
      .single();

    if (error || !data) {
      setNotFound(true);
    } else {
      setProject(data);
    }
    setLoading(false);
  };

  if (loading) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#fff' }}>
        <Loader2 size={40} style={{ animation: 'spin 1s linear infinite', color: '#7c3aed' }} />
        <style>{`@keyframes spin { 100% { transform: rotate(360deg); } }`}</style>
      </div>
    );
  }

  if (notFound || !project) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: '#fff', color: '#0f172a', gap: '24px' }}>
        <h1 style={{ fontSize: '48px', fontWeight: 900 }}>404</h1>
        <p style={{ color: '#64748b', fontSize: '18px' }}>Project not found</p>
        <Link href="/portfolio" style={{ padding: '14px 32px', background: '#7c3aed', color: '#fff', borderRadius: '100px', textDecoration: 'none', fontWeight: 700 }}>
          ← Back to Portfolio
        </Link>
      </div>
    );
  }

  const { icon: Icon, color } = getCategoryAssets(project.category);
  const techStack = Array.isArray(project.tech_stack) ? project.tech_stack : [];

  return (
    <div style={{ background: '#ffffff', color: '#0f172a', overflowX: 'hidden' }}>
      <ScrollProgress />
      <CursorGlow />
      <Navbar />

      {/* ─── 1. CASE STUDY HERO ─── */}
      <section style={{ paddingTop: '140px', paddingBottom: '100px', background: '#f8fafc', borderBottom: '1px solid #f1f5f9' }}>
        <div className="container">
          <Link href="/portfolio" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#64748b', textDecoration: 'none', fontSize: '14px', fontWeight: 700, marginBottom: '48px' }}>
            <ArrowLeft size={16} /> Back to Arsenal
          </Link>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '80px', alignItems: 'center' }}>
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: `${color}10`, border: `1px solid ${color}20`, borderRadius: '100px', padding: '8px 20px', marginBottom: '32px' }}>
                <Icon size={14} color={color} />
                <span style={{ fontSize: '11px', fontWeight: 900, color, letterSpacing: '2px', textTransform: 'uppercase' }}>{project.category}</span>
              </div>
              <h1 style={{ fontSize: 'clamp(40px, 6vw, 72px)', fontWeight: 950, letterSpacing: '-3px', lineHeight: 1.1, marginBottom: '32px' }}>
                {project.title.split(' ').slice(0, -1).join(' ')} <br />
                <span style={{ color }}>{project.title.split(' ').pop()}</span>
              </h1>
              <p style={{ fontSize: '20px', color: '#475569', lineHeight: 1.7, marginBottom: '40px' }}>
                {project.description}
              </p>
              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <Link href="/contact" className="btn-primary" style={{ padding: '18px 40px', background: color, boxShadow: `0 20px 40px ${color}30`, display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none', borderRadius: '100px', color: '#fff', fontWeight: 800 }}>
                  Initiate Similar Build <ChevronRight size={18} />
                </Link>
                {project.live_url && (
                  <a href={project.live_url} target="_blank" rel="noopener noreferrer" style={{ padding: '18px 32px', border: '1px solid #e2e8f0', borderRadius: '100px', textDecoration: 'none', color: '#0f172a', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <ExternalLink size={16} /> Live Demo
                  </a>
                )}
                {project.github_url && (
                  <a href={project.github_url} target="_blank" rel="noopener noreferrer" style={{ padding: '18px 32px', border: '1px solid #e2e8f0', borderRadius: '100px', textDecoration: 'none', color: '#0f172a', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Github size={16} /> GitHub
                  </a>
                )}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }}>
              <div style={{ position: 'relative', borderRadius: '40px', overflow: 'hidden', boxShadow: '0 40px 100px rgba(0,0,0,0.1)', background: '#f1f5f9' }}>
                {project.image_url ? (
                  <img src={project.image_url} alt={project.title} style={{ width: '100%', height: 'auto', display: 'block', minHeight: '300px', objectFit: 'cover' }} />
                ) : (
                  <div style={{ width: '100%', minHeight: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#94a3b8' }}>
                    <Layout size={80} />
                  </div>
                )}
                <div style={{ position: 'absolute', inset: 0, border: '1px solid rgba(0,0,0,0.05)', borderRadius: '40px' }} />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── 2. TECH STACK + DESCRIPTION ─── */}
      <section style={{ padding: '120px 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '80px' }}>
            <div>
              <h2 style={{ fontSize: '32px', fontWeight: 900, marginBottom: '32px', letterSpacing: '-1px' }}>Project Overview</h2>
              <p style={{ fontSize: '18px', color: '#64748b', lineHeight: 1.8 }}>
                {project.description}
              </p>

              {project.live_url && (
                <div style={{ marginTop: '40px', padding: '24px', background: '#f8fafc', borderRadius: '20px', border: '1px solid #f1f5f9' }}>
                  <p style={{ fontSize: '12px', fontWeight: 800, color: '#64748b', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px' }}>Live URL</p>
                  <a href={project.live_url} target="_blank" rel="noopener noreferrer" style={{ color: color, fontWeight: 700, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <Globe size={16} /> {project.live_url}
                  </a>
                </div>
              )}
            </div>

            <div>
              <h2 style={{ fontSize: '32px', fontWeight: 900, marginBottom: '32px', letterSpacing: '-1px' }}>Tech Arsenal</h2>
              {techStack.length > 0 ? (
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                  {techStack.map((tech: string, i: number) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.08 }}
                      viewport={{ once: true }}
                      style={{
                        padding: '10px 20px',
                        background: `${color}10`,
                        border: `1px solid ${color}25`,
                        borderRadius: '100px',
                        fontSize: '14px',
                        fontWeight: 700,
                        color: color
                      }}
                    >
                      {tech}
                    </motion.div>
                  ))}
                </div>
              ) : (
                <p style={{ color: '#94a3b8' }}>No tech stack specified.</p>
              )}

              {/* Status Badge */}
              <div style={{ marginTop: '40px', padding: '24px', background: '#f8fafc', borderRadius: '20px', border: '1px solid #f1f5f9' }}>
                <p style={{ fontSize: '12px', fontWeight: 800, color: '#64748b', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '12px' }}>Project Status</p>
                <span style={{
                  padding: '8px 20px',
                  borderRadius: '100px',
                  fontSize: '13px',
                  fontWeight: 800,
                  background: project.status === 'Published' ? 'rgba(16,185,129,0.1)' : 'rgba(245,158,11,0.1)',
                  color: project.status === 'Published' ? '#10b981' : '#f59e0b'
                }}>
                  {project.status}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 3. HIGHLIGHTS ─── */}
      <section style={{ padding: '120px 0', background: '#020205', borderRadius: '60px 60px 0 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <h2 style={{ color: '#fff', fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: 950, letterSpacing: '-2px' }}>
              Why This <span className="gradient-text">Project Stands Out.</span>
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            {[
              { icon: Zap, title: 'High Performance', desc: 'Engineered for speed, scalability, and enterprise-grade reliability.' },
              { icon: Shield, title: 'Secure by Design', desc: 'Built with security best practices at every layer of the stack.' },
              { icon: Globe, title: 'Global Ready', desc: 'Designed to scale internationally with multi-region architecture.' },
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '24px', padding: '40px' }}>
                <div style={{ width: '52px', height: '52px', borderRadius: '16px', background: `${color}15`, color, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}>
                  <item.icon size={24} />
                </div>
                <h3 style={{ color: '#fff', fontSize: '20px', fontWeight: 800, marginBottom: '12px' }}>{item.title}</h3>
                <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.7 }}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 4. CTA ─── */}
      <section style={{ padding: '140px 0', background: '#020205', textAlign: 'center' }}>
        <div className="container">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
            <h2 style={{ color: '#fff', fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: 950, letterSpacing: '-2px', marginBottom: '24px' }}>
              Ready to Build <span className="gradient-text">Something Like This?</span>
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '18px', maxWidth: '600px', margin: '0 auto 48px' }}>
              Let&apos;s partner up and create your next high-impact digital product.
            </p>
            <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '20px 52px', background: `linear-gradient(135deg, #7c3aed, #06b6d4)`, borderRadius: '100px', color: '#fff', textDecoration: 'none', fontWeight: 900, fontSize: '18px', boxShadow: '0 20px 50px rgba(124,58,237,0.3)' }}>
              Start Your Project <ChevronRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
