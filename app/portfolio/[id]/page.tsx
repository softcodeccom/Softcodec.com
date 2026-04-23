'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, ShieldCheck, Zap, Globe, Target, ChevronRight, LineChart, Smartphone, Bot, ShoppingBag, Cloud, PenTool } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ScrollProgress from '../../components/ScrollProgress';
import CursorGlow from '../../components/CursorGlow';

const projects = [
  { id: 1, category: 'Web Development', title: 'NexTrade AI Platform', desc: 'A sophisticated dashboard for AI-powered crypto trading with real-time analytics.', icon: LineChart, color: '#7c3aed', image: '/laptop-dashboard.png', fullDesc: 'NexTrade is an enterprise-grade AI trading platform designed for high-frequency crypto markets. It utilizes advanced machine learning models to predict market trends with 85% accuracy. The frontend is built with Next.js for blazing fast performance, while the backend utilizes a distributed microservices architecture on AWS.', tech: ['Next.js 15', 'TypeScript', 'TailwindCSS', 'AWS Lambda', 'Python AI'], results: ['0.4s Average Load Time', '200% User Growth', 'Ironclad Security'] },
  { id: 2, category: 'Mobile Apps', title: 'HealthSync Wellness', desc: 'React Native fitness app with real-time biometric tracking and AI workout plans.', icon: Smartphone, color: '#06b6d4', image: '/Placehunter - Mobile App UX_UI.png', fullDesc: 'HealthSync revolutionizes personal fitness by integrating real-time biometric data from wearable devices. The app uses AI to generate personalized workout plans that adapt to your body\'s recovery state. Built with React Native, it offers a seamless experience across both iOS and Android platforms.', tech: ['React Native', 'Expo', 'Node.js', 'PostgreSQL', 'TensorFlow Lite'], results: ['1M+ Downloads', '4.9 App Store Rating', '99.9% Uptime'] },
  { id: 3, category: 'AI & Automation', title: 'SmartRetail Pro', desc: 'AI-driven inventory forecasting and automated restocking system for global retailers.', icon: Bot, color: '#ec4899', image: '/Concept of cloud computing technology isometric illustration by generative ai _ Premium AI-generated image-Photoroom.png', fullDesc: 'SmartRetail Pro optimizes supply chains for global retail chains. By analyzing historical sales data and current market trends, it predicts inventory needs with extreme precision, reducing waste by 30% and ensuring products are always in stock when customers need them.', tech: ['FastAPI', 'MongoDB', 'Redis', 'Docker', 'Kubernetes'], results: ['30% Waste Reduction', '40% Cost Savings', 'Real-time Sync'] },
  { id: 4, category: 'E-Commerce', title: 'PureBazaar Store', desc: 'High-performing headless e-commerce store with 0.8s load time and 20% conversion boost.', icon: ShoppingBag, color: '#10b981', image: '/Os 6 E-commerces Mais Confiáveis do Brasil 2025 🛒✨-Photoroom.png', fullDesc: 'PureBazaar is a headless e-commerce masterpiece. By decoupling the frontend from the Shopify backend, we achieved unprecedented loading speeds and a highly customized user experience that drives massive conversions. The architectural design focuses on mobile-first navigation and sub-second checkout.', tech: ['Shopify Headless', 'Hydrogen', 'Remix', 'TailwindCSS', 'Sanity CMS'], results: ['20% Conversion Boost', '0.8s Load Time', 'Mobile-First Design'] },
  { id: 5, category: 'Cloud & DevOps', title: 'SecureStack Cloud', desc: 'Enterprise-grade cloud migration for a major bank with zero downtime and 40% cost saving.', icon: Cloud, color: '#3b82f6', image: '/Multi-Cloud Adoption in 2025_ Strategies, Benefits & Enterprise Challenges-Photoroom.png', fullDesc: 'SecureStack handled the complex cloud migration for a leading financial institution. We implemented a multi-cloud strategy that ensures zero downtime and provides ironclad security for sensitive banking data. The automation pipelines reduced operational overhead by 40% while improving deployment frequency.', tech: ['Terraform', 'AWS', 'Azure', 'Jenkins', 'Vault'], results: ['Zero Downtime Migration', '40% Overhead Reduction', 'Bank-Grade Security'] },
  { id: 6, category: 'UI/UX Design', title: 'ZenSpace Mobile UI', desc: 'Minimalist meditation app design focused on reducing cognitive load and maximizing calm.', icon: PenTool, color: '#f59e0b', image: '/3d uiux mobile screen with user elements _ Premium Photo-Photoroom.png', fullDesc: 'ZenSpace is a masterclass in minimalist design. Every interaction is engineered to reduce stress and maximize focus. We utilized soft gradients, glassmorphism, and subtle micro-animations to create an immersive environment that guides users toward tranquility.', tech: ['Figma', 'Adobe After Effects', 'Protopie', 'Spline 3D', 'Next.js'], results: ['User Fatigue -60%', 'Session Length +45%', 'Award-Winning UI'] },
];

const BRAND_COLOR = "#7c3aed";

export default function ProjectDetailPage() {
  const params = useParams();
  const id = parseInt(params.id as string);
  const project = projects.find(p => p.id === id);

  if (!project) return <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Project Not Found</div>;

  return (
    <div style={{ background: '#ffffff', color: '#0f172a', overflowX: 'hidden' }}>
      <ScrollProgress />
      <CursorGlow />
      <Navbar />

      {/* ─── 1. CASE STUDY HERO ─── */}
      <section style={{ paddingTop: '140px', paddingBottom: '100px', background: '#f8fafc', borderBottom: '1px solid #f1f5f9' }}>
        <div className="container">
          <Link href="/portfolio" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#64748b', textDecoration: 'none', fontSize: '14px', fontWeight: 700, marginBottom: '48px', transition: 'color 0.3s' }}>
            <ArrowLeft size={16} /> Back to Arsenal
          </Link>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '80px', alignItems: 'center' }}>
             <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: `${project.color}10`, border: `1px solid ${project.color}20`, borderRadius: '100px', padding: '8px 20px', marginBottom: '32px' }}>
                  <project.icon size={14} color={project.color} />
                  <span style={{ fontSize: '11px', fontWeight: 900, color: project.color, letterSpacing: '2px', textTransform: 'uppercase' }}>{project.category}</span>
                </div>
                <h1 style={{ fontSize: 'clamp(40px, 6vw, 72px)', fontWeight: 950, letterSpacing: '-3px', lineHeight: 1.1, marginBottom: '32px' }}>
                  {project.title.split(' ').slice(0, -1).join(' ')} <br />
                  <span style={{ color: project.color }}>{project.title.split(' ').pop()}</span>
                </h1>
                <p style={{ fontSize: '20px', color: '#475569', lineHeight: 1.7, marginBottom: '40px' }}>
                  {project.desc}
                </p>
                <div style={{ display: 'flex', gap: '20px' }}>
                   <Link href="/contact" className="btn-primary" style={{ padding: '18px 40px', background: project.color, boxShadow: `0 20px 40px ${project.color}30` }}>
                      Initiate Similar Build <ChevronRight size={18} />
                   </Link>
                </div>
             </motion.div>

             <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }}>
                <div style={{ position: 'relative', borderRadius: '40px', overflow: 'hidden', boxShadow: '0 40px 100px rgba(0,0,0,0.1)' }}>
                   <img src={project.image} alt={project.title} style={{ width: '100%', height: 'auto', display: 'block' }} />
                   <div style={{ position: 'absolute', inset: 0, border: '1px solid rgba(0,0,0,0.05)', borderRadius: '40px' }} />
                </div>
             </motion.div>
          </div>
        </div>
      </section>

      {/* ─── 2. DEEP BRIEF & TECH ─── */}
      <section style={{ padding: '120px 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '100px' }}>
             <div>
                <h2 style={{ fontSize: '32px', fontWeight: 900, marginBottom: '32px', letterSpacing: '-1px' }}>Project Narrative</h2>
                <p style={{ fontSize: '18px', color: '#64748b', lineHeight: 1.8, whiteSpace: 'pre-line' }}>
                  {project.fullDesc}
                </p>

                <div style={{ marginTop: '64px', display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '40px' }}>
                   <div>
                      <h4 style={{ fontSize: '14px', fontWeight: 900, textTransform: 'uppercase', color: '#94a3b8', letterSpacing: '2px', marginBottom: '24px' }}>Key Results</h4>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                        {project.results.map((r, i) => (
                           <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '16px', fontWeight: 700 }}>
                              <ShieldCheck size={20} color="#10b981" /> {r}
                           </div>
                        ))}
                      </div>
                   </div>
                   <div>
                      <h4 style={{ fontSize: '14px', fontWeight: 900, textTransform: 'uppercase', color: '#94a3b8', letterSpacing: '2px', marginBottom: '24px' }}>Infrastructure</h4>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                        {project.tech.map((t, i) => (
                           <span key={i} style={{ padding: '8px 16px', background: '#f1f5f9', borderRadius: '100px', fontSize: '13px', fontWeight: 800 }}>{t}</span>
                        ))}
                      </div>
                   </div>
                </div>
             </div>

             {/* SIDEBAR WIDGETS */}
             <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                <div style={{ padding: '40px', background: '#020205', borderRadius: '32px', color: '#fff' }}>
                   <h3 style={{ fontSize: '24px', fontWeight: 800, marginBottom: '16px' }}>Ready for Scale?</h3>
                   <p style={{ color: 'rgba(255,255,255,0.6)', marginBottom: '32px', lineHeight: 1.6 }}>We can engineer a similar high-performance ecosystem for your brand.</p>
                   <Link href="/contact" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', padding: '16px', background: '#fff', color: '#000', borderRadius: '100px', fontWeight: 800, textDecoration: 'none' }}>
                      Start Engineering
                   </Link>
                </div>

                <div style={{ padding: '40px', border: '1px solid #e2e8f0', borderRadius: '32px' }}>
                   <h4 style={{ fontSize: '14px', fontWeight: 900, textTransform: 'uppercase', color: '#94a3b8', letterSpacing: '2px', marginBottom: '24px' }}>Project Metrics</h4>
                   <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                      {[
                        { label: 'Uptime', val: '99.9%', icon: <Globe size={18} /> },
                        { label: 'Velocity', val: '0.4s LCP', icon: <Zap size={18} /> },
                        { label: 'Growth', val: '+240%', icon: <Target size={18} /> },
                      ].map((m, i) => (
                        <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                           <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#64748b', fontWeight: 600 }}>{m.icon} {m.label}</div>
                           <div style={{ fontWeight: 800 }}>{m.val}</div>
                        </div>
                      ))}
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* ─── 3. CTA ─── */}
      <section style={{ padding: '0 0 120px', textAlign: 'center' }}>
         <div className="container">
            <div style={{ padding: '80px', background: '#f8fafc', borderRadius: '60px', border: '1px solid #f1f5f9' }}>
               <h2 style={{ fontSize: '40px', fontWeight: 950, letterSpacing: '-2px', marginBottom: '24px' }}>Next: Build Your <span className="gradient-text">Absolute Future.</span></h2>
               <Link href="/portfolio" style={{ fontSize: '16px', fontWeight: 800, color: BRAND_COLOR, textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                  Explore More Systems <ArrowLeft style={{ transform: 'rotate(180deg)' }} size={20} />
               </Link>
            </div>
         </div>
      </section>

      <Footer />
    </div>
  );
}
