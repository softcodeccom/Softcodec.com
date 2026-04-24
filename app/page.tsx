'use client';

import ScrollProgress from './components/ScrollProgress';
import CursorGlow from './components/CursorGlow';
import Hero from './components/Hero';
import Link from 'next/link';
import StatCard from './components/StatCard';
import { Cpu, Zap, Activity, ShieldCheck, Shield, Timer, Globe, BarChart3, Award, RotateCcw, Star, Quote, CheckCircle2, ChevronDown, ChevronUp, Smartphone, Bot, Palette } from 'lucide-react';
import { useState } from 'react';
import dynamic from 'next/dynamic';
import BlobImage from './components/BlobImage';

const highlights = [
  { icon: '🌐', title: 'Web Development', desc: 'Blazing fast Next.js & React apps', href: '/services/web-development', color: '#7c3aed', image: '/web app.jpg' },
  { icon: '📱', title: 'Mobile Apps', desc: 'iOS & Android with React Native', href: '/services/mobile-apps', color: '#06b6d4', image: '/mobile app.jpg' },
  { icon: '🤖', title: 'AI Solutions', desc: 'Smart automation & machine learning', href: '/services/ai-automation', color: '#8b5cf6', image: '/ai.jpg' },
  { icon: '🎨', title: 'UI/UX Design', desc: 'Award winning design systems', href: '/services/ui-ux-design', color: '#06b6d4', image: '/ui.jpg' },
];

const partners = ["Microsoft", "Google Cloud", "AWS", "NVIDIA", "Meta", "Adobe", "OpenAI", "Oracle", "Shopify", "Stripe", "Vercel", "Cloudflare"];

const testimonials = [
  { name: 'Arsalan Khan', role: 'CTO, FinTech Global', country: '🇺🇸 USA', rating: 5, text: 'SoftCodec delivered a high-performance platform that exceeded our expectations. Their AI integration is second to none. Best dev team we&apos;ve worked with internationally.', avatar: 'AK' },
  { name: 'Sara Mitchell', role: 'Product Manager, E-Shop Pro', country: '🇬🇧 UK', rating: 5, text: 'The UI/UX design provided by SoftCodec transformed our conversion rates by 340%. Truly a professional, world-class team. Highly recommend.', avatar: 'SM' },
  { name: 'John Rodrigues', role: 'CEO, HealthAI Inc.', country: '🇨🇦 Canada', rating: 5, text: 'Working with SoftCodec was seamless. Their agile methodology and transparent communication made the entire dev cycle perfectly smooth. 10/10 team.', avatar: 'JR' },
  { name: 'Lena Hoffmann', role: 'Founder, TechScale', country: '🇩🇪 Germany', rating: 5, text: 'Outstanding quality and communication. SoftCodec built our enterprise SaaS in record time. We&apos;re already on our 3rd project with them.', avatar: 'LH' },
  { name: 'Ali Al-Rashid', role: 'VP Engineering, PayFlow', country: '🇦🇪 UAE', rating: 5, text: 'Professional, skilled, and deadline-oriented. SoftCodec is our exclusive technology partner. They truly understand international business needs.', avatar: 'AR' },
  { name: 'James Park', role: 'Director, DataBridge', country: '🇦🇺 Australia', rating: 5, text: 'Incredibly talented team. They built our ML pipeline from scratch and it processes 2M requests/day flawlessly. Exceptional engineering talent.', avatar: 'JP' },
];

const faqs = [
  { q: "How long does a typical project take?", a: "Project timelines vary based on complexity. A standard web application usually takes 8-12 weeks from discovery to deployment. We provide detailed project roadmaps upfront." },
  { q: "Do you offer post-launch support?", a: "Yes, we provide 24/7 maintenance and support packages to ensure your systems remain optimized and secure. SLAs available for enterprise clients." },
  { q: "Can you integrate AI into our existing platform?", a: "Absolutely. We specialize in retrofitting legacy systems with cutting-edge AI and machine learning capabilities with zero downtime migrations." },
  { q: "What is your development stack?", a: "We primarily use Next.js, React, Node.js, and Python, ensuring scalable and modern architectures. We also work with any existing tech stack." },
  { q: "Do you work with international clients?", a: "Yes! We serve clients across USA, UK, Canada, UAE, Australia, Germany and 20+ more countries. We offer flexible timezone support and clear async communication." },
  { q: "What are your payment terms?", a: "We offer milestone-based payments with 50% upfront and the rest upon delivery. We accept international wire transfers, PayPal, and crypto." },
];

const statsData = [
  { num: 250, label: 'Projects Completed', icon: 'Rocket', color: '#a78bfa', glow: 'rgba(167, 139, 250, 0.5)', delay: 0 },
  { num: 30, label: 'Countries Served', icon: 'Globe', color: '#22d3ee', glow: 'rgba(34, 211, 238, 0.5)', delay: 200 },
  { num: 98, label: 'Client Satisfaction', icon: 'Star', color: '#facc15', glow: 'rgba(250, 204, 21, 0.5)', delay: 400, suffix: '%' },
  { num: 50, label: 'Elite Developers', icon: 'Zap', color: '#f472b6', glow: 'rgba(244, 114, 182, 0.5)', delay: 600 },
];

const caseStudies = [
  {
    tag: 'FinTech · USA', title: 'AI-Powered Trading Platform', desc: 'Built a real-time algorithmic trading platform processing 500K transactions/second with ML-based fraud detection.',
    results: [{ label: 'Faster Execution', value: '10x' }, { label: 'Fraud Reduction', value: '94%' }, { label: 'Uptime', value: '99.99%' }],
    color: '#7c3aed', icon: '📈', image: '/Wexvarim Platform.jpg'
  },
  {
    tag: 'E-Commerce · UK', title: 'Global Shopify Ecosystem', desc: 'Scaled a fashion brand&apos;s e-commerce platform to handle 2M+ daily visitors with AI-driven personalization.',
    results: [{ label: 'Revenue Growth', value: '340%' }, { label: 'Page Speed', value: '98/100' }, { label: 'Conversion Rate', value: '+67%' }],
    color: '#06b6d4', icon: '🛍️', image: '/Shopify Web Development.jpg'
  },
  {
    tag: 'HealthTech · Canada', title: 'Medical AI Diagnostic Tool', desc: 'Developed an FDA-compliant AI diagnostic platform integrated with hospital EHR systems across 12 hospitals.',
    results: [{ label: 'Diagnosis Accuracy', value: '97.3%' }, { label: 'Time Saved', value: '8hrs/day' }, { label: 'Hospitals Live', value: '12' }],
    color: '#10b981', icon: '🏥', image: '/AI steps up in healthcare_ GPT-3_5 and 4 excel in clinical reasoning.jpg'
  },
];

const whyUs = [
  { icon: 'Shield', title: 'NDA & IP Protection', desc: 'Full legal protection on every project. Your code, your IP — always.', color: '#7c3aed' },
  { icon: 'Timer', title: 'On-Time Delivery', desc: '96% of our projects ship on schedule. We respect your deadlines.', color: '#06b6d4' },
  { icon: 'Globe', title: 'Timezone Flexible', desc: '24/7 async support with dedicated PMs for every timezone.', color: '#ec4899' },
  { icon: 'BarChart3', title: 'Transparent Reporting', desc: 'Weekly progress reports, live Jira boards, and open communication.', color: '#10b981' },
  { icon: 'Award', title: 'Award Winning Quality', desc: 'Top-rated on Clutch, Upwork & GoodFirms with verified reviews.', color: '#f59e0b' },
  { icon: 'RotateCcw', title: 'Agile Methodology', desc: '2-week sprints, daily standups, and rapid iteration cycles.', color: '#8b5cf6' },
];

const awards = [
  { platform: 'Clutch', rating: '5.0', icon: Star, color: '#f59e0b', category: 'Top Developer 2024' },
  { platform: 'Upwork', rating: 'Top Rated+', icon: Award, color: '#10b981', category: 'Expert Verified' },
  { platform: 'GoodFirms', rating: '4.9/5', icon: Activity, color: '#06b6d4', category: 'Best Software Co.' },
  { platform: 'ISO', rating: 'Certified', icon: ShieldCheck, color: '#8b5cf6', category: 'ISO 27001 Security' },
];

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [showAllTestimonials, setShowAllTestimonials] = useState(false);

  return (
    <>
      <ScrollProgress />
      <CursorGlow />
      {/* Navbar handled in layout.tsx */}

      {/* Hero */}
      <Hero />

      {/* Trusted By — Partner Logos Marquee */}
      <div style={{
        borderTop: '1px solid var(--border-subtle)',
        borderBottom: '1px solid var(--border-subtle)',
        padding: '40px 0',
        background: 'var(--bg-secondary)',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{ textAlign: 'center', marginBottom: '28px' }}>
          <span style={{ fontSize: '11px', letterSpacing: '3px', color: 'var(--text-muted)', fontWeight: 700, textTransform: 'uppercase' }}>
            Trusted by teams at
          </span>
        </div>
        <div className="marquee-container" style={{ padding: 0 }}>
          <div className="marquee-content">
            {partners.concat(partners).map((p, i) => (
              <div key={i} style={{
                color: 'var(--text-muted)', fontSize: '15px', fontWeight: 700,
                letterSpacing: '2px', fontFamily: 'Orbitron', padding: '0 48px',
                transition: 'color 0.3s',
              }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent-purple)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
              >
                {p.toUpperCase()}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats */}
      <section className="section" style={{ paddingTop: '60px', paddingBottom: '60px' }} id="about">
        <div className="container">
          <div className="grid-4">
            {statsData.map((s, i) => (
              <StatCard key={i} {...s} number={s.num} />
            ))}
          </div>
        </div>
      </section>

      {/* ============ THE DIGITAL FORGE (ABOUT) ============ */}
      <section className="section" id="forge" style={{ paddingTop: '60px', paddingBottom: '80px', background: 'var(--bg-primary)' }}>
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center' }}>
            <div className="reveal-left">
              <span className="system-status" style={{ marginBottom: '24px' }}>
                <div className="system-dot" />
                THE DIGITAL FORGE
              </span>
              <h2 className="section-heading">
                Forging <span className="gradient-text">Digital Empires</span>
              </h2>
              <p className="section-subtext" style={{ marginTop: '24px', fontSize: '18px', lineHeight: 1.8 }}>
                We don&apos;t just write code; we architect the future. SoftCodec merges industrial-grade engineering with visionary design to build digital products that dominate their markets. Every line of code is a step toward your digital sovereignty.
              </p>

              <div className="grid-2" style={{ gap: '20px', marginTop: '48px' }}>
                <div className="glass-card dark-glass-card reveal" style={{ 
                  padding: '32px 24px', 
                  background: 'rgba(3, 3, 10, 0.92)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderTop: '1px solid rgba(255, 255, 255, 0.15)',
                  backdropFilter: 'blur(32px)',
                  WebkitBackdropFilter: 'blur(32px)',
                  boxShadow: '0 10px 30px -10px rgba(0,0,0,0.5), 0 0 1px 0 rgba(255,255,255,0.1) inset'
                }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '12px', background: 'rgba(124, 58, 237, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px', border: '1px solid rgba(124, 58, 237, 0.3)' }}>
                    <Cpu size={20} color="#a78bfa" />
                  </div>
                  <h4 style={{ color: '#ffffff', marginBottom: '10px', fontSize: '17px', fontWeight: 800 }}>Engineering First</h4>
                  <p style={{ fontSize: '13.5px', color: 'rgba(255, 255, 255, 0.7)', lineHeight: 1.7 }}>Clean, microservices-oriented architectures that scale to millions with ease.</p>
                </div>
                <div className="glass-card dark-glass-card reveal" style={{ 
                  padding: '32px 24px',
                  background: 'rgba(3, 3, 10, 0.92)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderTop: '1px solid rgba(255, 255, 255, 0.15)',
                  backdropFilter: 'blur(32px)',
                  WebkitBackdropFilter: 'blur(32px)',
                  boxShadow: '0 10px 30px -10px rgba(0,0,0,0.5), 0 0 1px 0 rgba(255,255,255,0.1) inset'
                }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '12px', background: 'rgba(6, 182, 212, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px', border: '1px solid rgba(6, 182, 212, 0.3)' }}>
                    <Zap size={20} color="#22d3ee" />
                  </div>
                  <h4 style={{ color: '#ffffff', marginBottom: '10px', fontSize: '17px', fontWeight: 800 }}>Instant Velocity</h4>
                  <p style={{ fontSize: '13.5px', color: 'rgba(255, 255, 255, 0.7)', lineHeight: 1.7 }}>Rapid deployment cycles that get your product to market 2x faster than average.</p>
                </div>
              </div>
            </div>
            <div className="reveal-right" style={{ position: 'relative', width: '100%' }}>
               <img 
                 src="/tech-workspace.png" 
                 alt="Engineering Workspace" 
                 style={{ 
                   width: '100%', 
                   height: '540px', 
                   objectFit: 'cover',
                   borderRadius: '32px',
                   boxShadow: '0 40px 100px rgba(0,0,0,0.5)'
                 }} 
               />
            </div>
          </div>
        </div>
      </section>

      {/* ============ WHY CHOOSE US (NEURAL TREE) ============ */}
      <section className="section" style={{ background: 'var(--bg-secondary)', paddingTop: '80px', paddingBottom: '80px', overflow: 'hidden' }} id="why-us">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '80px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <span className="system-status" style={{ marginBottom: '24px', justifyContent: 'center' }}>
              <div className="system-dot" />
              THE SOFTCODEC CONTEXT
            </span>
            <h2 className="section-heading">A Growing Network of <br /><span className="gradient-text">Absolute Trust</span></h2>
            <p className="section-subtext" style={{ margin: '20px auto 0', maxWidth: '600px' }}>
              We don&apos;t just build software; we cultivate intelligence through a connected, transparent, and high-performance infrastructure.
            </p>
          </div>

          <div className="neural-surface">
            {/* SVG Background Skeleton */}
            <svg className="neural-svg-layer " viewBox="0 0 1000 1000" preserveAspectRatio="none">
              <defs>
                <linearGradient id="neural-grad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#8b5cf6" />
                  <stop offset="100%" stopColor="#06b6d4" />
                </linearGradient>
              </defs>

              {/* Main Trunk Path (Curved) */}
              <path
                className="neural-path visible"
                d="M 500 0 C 480 200, 520 400, 500 600 S 480 800, 500 1000"
              />

              {/* Branch Paths (Bezier Curves) */}
              {whyUs.map((w, i) => {
                const isLeft = i % 2 === 0;
                const startY = (i * 150) + 120;
                const endX = isLeft ? 280 : 720;
                const endY = startY + (isLeft ? 30 : -30);
                const cpX = isLeft ? 400 : 600;
                const pathD = `M 500 ${startY} C ${cpX} ${startY}, ${cpX} ${endY}, ${endX} ${endY}`;

                return (
                  <path
                    key={i}
                    className="neural-path visible"
                    d={pathD}
                  />
                );
              })}
            </svg>

            {/* Feature Nodes & Text */}
            {whyUs.map((w, i) => {
              const isLeft = i % 2 === 0;
              const startY = (i * 150) + 120;
              const nodeXPct = isLeft ? 28 : 72; // % matching SVG viewBox 0-1000: 280→28%, 720→72%
              const nodeX = isLeft ? 280 : 720;   // still used for SVG path
              const nodeY = startY + (isLeft ? 30 : -30);
              const Icon = { Shield, Timer, Globe, BarChart3, Award, RotateCcw }[w.icon] || Shield;

              return (
                <div key={i}>
                  {/* Node Icon — positioned at % to match SVG line endpoint */}
                  <div className="neural-node-wrapper visible" style={{
                    top: `${nodeY}px`,
                    left: `${nodeXPct}%`,
                  }}>
                    <div className="neural-glow-node" style={{
                      '--node-color-low': `${w.color}25`,
                      '--node-color-high': w.color
                    } as any}>
                      <Icon size={28} color={w.color} strokeWidth={1.5} />

                      {/* Traveling Data Packet (CSS Path) */}
                      <div className="neural-data-packet " style={{
                        '--path-id': `path('M 500 ${startY} C ${isLeft ? 400 : 600} ${startY}, ${isLeft ? 400 : 600} ${nodeY}, ${nodeX} ${nodeY}')`
                      } as any} />
                    </div>
                  </div>

                  {/* Feature Text Content — calc() from node % position */}
                  <div className="neural-text visible" style={{
                    top: `${nodeY}px`,
                    left: isLeft ? '0' : `calc(${nodeXPct}% + 44px)`,
                    width: isLeft ? `calc(${nodeXPct}% - 44px)` : `calc(${100 - nodeXPct}% - 44px)`,
                    textAlign: isLeft ? 'right' : 'left',
                  }}>
                    <div style={{ fontSize: '11px', fontWeight: 900, color: w.color, marginBottom: '8px', letterSpacing: '2px', textTransform: 'uppercase', opacity: 0.8 }}>
                      Node 0{i + 1}
                    </div>
                    <h3 style={{ color: 'var(--text-primary)', fontSize: '20px', fontWeight: 800, marginBottom: '10px', letterSpacing: '0.5px' }}>{w.title}</h3>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '13px', lineHeight: 1.7 }}>
                      {w.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Feature Section 1: AI Engine */}
      <section className="section" style={{ background: '#020205', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '800px', height: '800px', background: 'radial-gradient(circle, rgba(124,58,237,0.1) 0%, transparent 70%)', filter: 'blur(80px)', zIndex: 0 }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="grid-2" style={{ alignItems: 'center' }}>
            <div className="reveal-left">
              <div className="glass-card" style={{ borderRadius: '24px', overflow: 'hidden', border: '1px solid rgba(139, 92, 246, 0.2)', boxShadow: '0 40px 80px rgba(0,0,0,0.4)' }}>
                <img src="/ai-brain.png" alt="AI Neural Network" style={{ width: '100%', height: 'auto', display: 'block' }} />
              </div>
            </div>
            <div className="reveal-right">
              <span style={{ color: '#a78bfa', fontWeight: 800, letterSpacing: '3px', fontSize: '11px', textTransform: 'uppercase', marginBottom: '16px', display: 'block' }}>01. ADVANCED INTELLIGENCE</span>
              <h2 className="section-heading" style={{ fontSize: 'clamp(32px, 5vw, 56px)', color: '#fff' }}>Autonomous <br /><span style={{ color: '#7c3aed' }}>Neural Ops.</span></h2>
              <p className="section-subtext" style={{ color: 'rgba(255,255,255,0.5)', maxWidth: '500px' }}>We build self-learning systems that automate complex analytical workflows, giving your business a sovereign advantage in data-driven markets.</p>
              <Link href="/services/ai-automation" className="btn-outline" style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.2)', padding: '12px 28px' }}>Deep Dive into AI →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Section 2: Product Performance */}
      <section className="section" style={{ background: '#000', position: 'relative' }}>
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center' }}>
            <div className="reveal-left">
              <span style={{ color: '#06b6d4', fontWeight: 800, letterSpacing: '3px', fontSize: '11px', textTransform: 'uppercase', marginBottom: '16px', display: 'block' }}>02. SCALABLE ARCHITECTURE</span>
              <h2 className="section-heading" style={{ fontSize: 'clamp(32px, 5vw, 56px)', color: '#fff' }}>Next-Gen <br /><span style={{ color: '#06b6d4' }}>Web Platforms.</span></h2>
              <p className="section-subtext" style={{ color: 'rgba(255,255,255,0.5)', maxWidth: '500px' }}>Blazing-fast, cloud-native applications engineered with modern Next.js best practices. Performance that drives conversion and dominance.</p>
              <Link href="/services/web-development" className="btn-outline" style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.2)', padding: '12px 28px' }}>View Architecture →</Link>
            </div>
            <div className="reveal-right">
              <div className="glass-card" style={{ borderRadius: '24px', overflow: 'hidden', border: '1px solid rgba(6, 182, 212, 0.2)', boxShadow: '0 40px 80px rgba(0,0,0,0.4)' }}>
                <img src="/laptop-dashboard.png" alt="Sleek Analytics Dashboard" style={{ width: '100%', height: 'auto', display: 'block' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ AWARDS & RECOGNITION (ELITE WALL) ============ */}
      <section className="section" style={{ paddingTop: '40px', paddingBottom: '60px', background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-subtle)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <span style={{ fontSize: '11px', letterSpacing: '4px', color: 'var(--text-muted)', fontWeight: 800, textTransform: 'uppercase' }}>
              Awards & Recognition
            </span>
          </div>
          <div className="grid-4" style={{ gap: '20px' }}>
            {awards.map((a, i) => {
              const Icon = a.icon;
              return (
                <div key={i} className="glass-card reveal" style={{
                  padding: '44px 24px',
                  textAlign: 'center',
                  transitionDelay: `${i * 0.12}s`,
                  position: 'relative',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  background: 'rgba(3, 3, 10, 0.92)',
                  backdropFilter: 'blur(32px)',
                  WebkitBackdropFilter: 'blur(32px)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                }}>
                  {/* Subtle Platform Watermark */}
                  <div style={{ position: 'absolute', bottom: '-10px', left: '-5px', fontSize: '42px', fontWeight: 900, color: 'rgba(255,255,255,0.03)', fontFamily: 'Orbitron', pointerEvents: 'none' }}>
                    {a.platform.toUpperCase()}
                  </div>

                  {/* Border Beam Glow */}
                  <div style={{
                    position: 'absolute', top: 0, left: 0, width: '100%', height: '2px',
                    background: `linear-gradient(90deg, transparent, ${a.color}, transparent)`,
                    opacity: 0.4
                  }} />

                  <div style={{
                    width: '64px', height: '64px', borderRadius: '50%',
                    background: `${a.color}10`, border: `1px solid ${a.color}25`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    marginBottom: '32px',
                    boxShadow: `0 0 20px ${a.color}15`
                  }}>
                    <Icon size={28} color={a.color} strokeWidth={1.5} />
                  </div>

                  <div style={{
                    fontSize: '24px', fontWeight: 900, color: '#ffffff',
                    marginBottom: '8px', fontFamily: 'Orbitron', letterSpacing: '-0.5px',
                    textShadow: `0 0 20px ${a.color}10`
                  }}>
                    {a.rating}
                  </div>

                  <div style={{
                    fontSize: '12px', fontWeight: 800, color: a.color,
                    marginBottom: '10px', letterSpacing: '1.5px', textTransform: 'uppercase'
                  }}>
                    {a.platform}
                  </div>

                  <div style={{
                    fontSize: '11px', color: 'rgba(255,255,255,0.5)',
                    fontWeight: 600, maxWidth: '160px', lineHeight: 1.4
                  }}>
                    {a.category}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ CORE SERVICES (PREMIUM GRID) ============ */}
      <section className="section" style={{ background: 'var(--bg-secondary)', paddingTop: '80px', paddingBottom: '80px' }} id="services">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '60px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <span className="system-status" style={{ marginBottom: '24px', justifyContent: 'center' }}>
              <div className="system-dot" />
              CAPABILITIES
            </span>
            <h2 className="section-heading">Our <span className="gradient-text">Core Services</span></h2>
            <p className="section-subtext" style={{ margin: '20px auto 0', maxWidth: '600px' }}>
              Specialized solutions for forward-thinking enterprises and startups building the next generation of software.
            </p>
          </div>

          <div className="grid-4" style={{ gap: '24px' }}>
            {highlights.map((h, i) => {
              const Icon = {
                '🌐': Globe,
                '📱': Smartphone,
                '🤖': Bot,
                '🎨': Palette
              }[h.icon] || Globe;

              return (
                <div key={i} className="glass-card reveal" style={{
                  padding: '48px 32px',
                  transitionDelay: `${i * 0.1}s`,
                  position: 'relative',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  minHeight: '440px',
                  border: 'none',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.18), 0 2px 8px rgba(0,0,0,0.10)',
                  background: '#0a0a0a',
                }}>
                  {/* Background Image Container */}
                  <div className="service-card-img-container">
                    <img src={h.image} alt={h.title} className="service-card-img" />
                    <div className="service-card-overlay" />
                  </div>

                  {/* Content (Above Overlay) */}
                  <div style={{ position: 'relative', zIndex: 10, height: '100%', width: '100%', display: 'flex', flexDirection: 'column' }}>
                    {/* Large Decorative Index */}
                    <div style={{
                      position: 'absolute', top: '-12px', right: '0',
                      fontSize: '52px', fontWeight: 900,
                      color: 'rgba(255,255,255,0.08)',
                      fontFamily: 'Orbitron', userSelect: 'none'
                    }}>0{i + 1}</div>

                    {/* Service Glow Accent */}
                    <div style={{
                      position: 'absolute', top: '-36px', left: '-32px', width: 'calc(100% + 64px)', height: '2px',
                      background: `linear-gradient(90deg, transparent, ${h.color}, transparent)`,
                      opacity: 0.8,
                    }} />

                    <div style={{
                      width: '56px', height: '56px', borderRadius: '16px',
                      background: `${h.color}15`, border: `1px solid ${h.color}30`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      marginBottom: '32px',
                      boxShadow: `0 8px 24px ${h.color}10`,
                      color: '#ffffff',
                      backdropFilter: 'blur(8px)'
                    }}>
                      <Icon size={26} strokeWidth={1.5} />
                    </div>

                    <div style={{ marginTop: 'auto' }}>
                      <h3 style={{ color: '#fff', fontSize: '22px', fontWeight: 800, marginBottom: '14px', letterSpacing: '0.5px' }}>{h.title}</h3>
                      <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '14px', lineHeight: 1.7, marginBottom: '32px', maxWidth: '90%' }}>{h.desc}</p>

                      <Link href={h.href} style={{
                        display: 'inline-flex', alignItems: 'center', gap: '8px',
                        color: '#fff', textDecoration: 'none', fontSize: '13.5px', fontWeight: 700,
                        transition: 'all 0.3s',
                        padding: '8px 16px',
                        background: 'rgba(255,255,255,0.08)',
                        borderRadius: '100px',
                        border: '1px solid rgba(255,255,255,0.15)',
                        backdropFilter: 'blur(10px)'
                      }} className="service-link"
                        onMouseEnter={(e) => { e.currentTarget.style.background = h.color; e.currentTarget.style.borderColor = h.color; }}
                        onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'; }}
                      >
                        Explore Solutions <ChevronDown size={14} style={{ transform: 'rotate(-90deg)' }} />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ THE PROOF IN PRODUCTION (CASE STUDIES) ============ */}
      <section className="section" style={{ paddingTop: '80px', paddingBottom: '80px', background: 'var(--bg-secondary)' }} id="proof">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '60px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <span className="system-status" style={{ marginBottom: '24px', justifyContent: 'center' }}>
              <div className="system-dot" />
              IMPACT & EVIDENCE
            </span>
            <h2 className="section-heading">The <span className="gradient-text">Proof</span> in Production</h2>
            <p className="section-subtext" style={{ margin: '20px auto 0', maxWidth: '600px' }}>
              Numbers don&apos;t lie. We deliver industrial-grade solutions that redefine performance benchmarks for global enterprises.
            </p>
          </div>

          <div className="grid-3" style={{ gap: '32px' }}>
            {caseStudies.map((cs, i) => (
              <div key={i} className="case-card reveal" style={{ 
                transitionDelay: `${i * 0.15}s`,
                '--case-accent': cs.color 
              } as any}>
                <img src={cs.image} alt={cs.title} className="case-bg-image" />
                <div className="case-scanner" />
                
                <div className="case-overlay">
                  {/* Category Badge */}
                  <div style={{ 
                    position: 'absolute', top: '40px', left: '40px',
                    padding: '8px 16px', borderRadius: '100px',
                    background: 'rgba(0,0,0,0.6)', border: `1px solid ${cs.color}40`,
                    backdropFilter: 'blur(10px)', display: 'flex', alignItems: 'center', gap: '8px'
                  }}>
                    <div className="audit-dot" style={{ background: cs.color, boxShadow: `0 0 10px ${cs.color}` }} />
                    <span style={{ fontSize: '11px', fontWeight: 900, color: '#fff', letterSpacing: '1px' }}>{cs.tag}</span>
                  </div>

                  {/* Tech Ref ID */}
                  <div style={{ position: 'absolute', top: '40px', right: '40px', fontSize: '10px', fontWeight: 900, color: 'rgba(255,255,255,0.2)', fontFamily: 'Orbitron' }}>
                    REF #SC-00{i+1}
                  </div>

                  <div className="case-content">
                    <h3 style={{ color: '#fff', fontSize: '24px', fontWeight: 800, marginBottom: '16px', textShadow: '0 2px 20px rgba(0,0,0,0.5)' }}>{cs.title}</h3>
                    <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '14.5px', lineHeight: 1.6, marginBottom: '32px' }}>{cs.desc}</p>
                    
                    {/* Performance metrics shown on hover */}
                    <div className="case-data-panel">
                      <div className="audit-status">
                        System Verified Audit
                      </div>
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
                        {cs.results.map((r, j) => (
                          <div key={j}>
                            <div className="metric-shimmer" style={{ fontSize: '22px', fontWeight: 900, color: cs.color }}>{r.value}</div>
                            <div style={{ fontSize: '10px', color: 'rgba(255,255,255,0.4)', marginTop: '4px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px' }}>{r.label}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <Link href="/portfolio" className="btn-outline" style={{ 
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '16px 40px', fontSize: '15px', fontWeight: 700
            }}>
              View Full Portfolio Archive <ChevronDown size={16} style={{ transform: 'rotate(-90deg)' }} />
            </Link>
          </div>
        </div>
      </section>

      {/* ============ GLOBAL PRESENCE DASHBOARD ============ */}
      <section className="section" style={{
        background: 'var(--bg-secondary)', paddingTop: '60px', paddingBottom: '60px',
        position: 'relative', overflow: 'hidden',
      }} id="presence">
        {/* Background glow */}
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(124,58,237,0.06) 0%, transparent 70%)', borderRadius: '50%', pointerEvents: 'none' }} />
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '40px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <span className="system-status" style={{ marginBottom: '20px', justifyContent: 'center' }}>
              <div className="system-dot" />
              GLOBAL PRESENCE
            </span>
            <h2 className="section-heading">Serving Clients <br /><span className="gradient-text">Worldwide</span></h2>
            <p className="section-subtext" style={{ marginTop: '20px', maxWidth: '600px', marginBottom: '10px' }}>
              From Silicon Valley to Dubai to London — our team serves ambitious businesses across every continent with dedicated timezone support.
            </p>
          </div>
          
          {/* 3D Spinning Ring with Node Cards */}
          <div className="reveal-up" style={{ height: '400px', width: '100%', position: 'relative', overflow: 'visible', marginTop: '-40px' }}>
            <div className="ring-3d-scene" style={{ height: '100%', transform: 'scale(1.2)' }}>
              <div className="ring-3d-object">
                {[
                  { id: 'US-EAST-1', country: 'United States', flag: '🇺🇸', clients: '80+ Clients', color: '#8b5cf6', percent: 85, status: 'Active' },
                  { id: 'EU-WEST-2', country: 'United Kingdom', flag: '🇬🇧', clients: '45+ Clients', color: '#06b6d4', percent: 65, status: 'Active' },
                  { id: 'ME-SOUTH-1', country: 'UAE & Gulf', flag: '🇦🇪', clients: '60+ Clients', color: '#ec4899', percent: 75, status: 'Active' },
                  { id: 'CA-CENTRAL-1', country: 'Canada', flag: '🇨🇦', clients: '30+ Clients', color: '#f59e0b', percent: 45, status: 'Active' },
                  { id: 'EU-CENTRAL-1', country: 'Germany', flag: '🇩🇪', clients: '20+ Clients', color: '#10b981', percent: 35, status: 'Active' },
                  { id: 'AP-SOUTHEAST-2', country: 'Australia', flag: '🇦🇺', clients: '25+ Clients', color: '#3b82f6', percent: 40, status: 'Active' },
                ].map((loc, i) => (
                  <div key={i} className="ring-3d-item" style={{ transform: `rotateY(${i * 60}deg) translateZ(360px)` }}>
                    <div className="node-card" style={{ width: '320px', margin: '0 auto', pointerEvents: 'auto' }}>
                      {/* Refined Header */}
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '24px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                          <span style={{ fontSize: '24px' }}>{loc.flag}</span>
                          <div>
                            <div style={{ color: 'var(--text-primary)', fontSize: '16px', fontWeight: 800, letterSpacing: '0.5px' }}>{loc.country}</div>
                            <div style={{ fontSize: '10px', color: 'var(--text-muted)', fontWeight: 800, fontFamily: 'Orbitron', letterSpacing: '1px' }}>NODE: {loc.id}</div>
                          </div>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '4px 8px', background: 'rgba(0,0,0,0.03)', borderRadius: '100px', border: '1px solid rgba(0,0,0,0.06)' }}>
                          <div style={{ position: 'relative', width: '6px', height: '6px' }}>
                            <div className="ping-dot" style={{ position: 'absolute', top: 0, left: 0, background: loc.color }} />
                            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', borderRadius: '50%', background: loc.color }} />
                          </div>
                          <span style={{ fontSize: '9px', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--text-muted)' }}>{loc.status}</span>
                        </div>
                      </div>

                      <div style={{ color: 'var(--text-secondary)', fontSize: '12px', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '16px' }}>{loc.clients}</div>

                      {/* Server Load Graphs */}
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        <div style={{ width: '100%', height: '6px', background: 'rgba(0,0,0,0.06)', borderRadius: '10px', overflow: 'hidden', position: 'relative' }}>
                          <div className="load-bar" style={{ width: `${loc.percent}%`, background: `linear-gradient(90deg, transparent, ${loc.color})` }} />
                        </div>
                        <div style={{ width: '100%', height: '6px', background: 'rgba(0,0,0,0.06)', borderRadius: '10px', overflow: 'hidden', position: 'relative' }}>
                          <div className="load-bar" style={{ width: `${loc.percent * 0.6}%`, background: `linear-gradient(90deg, transparent, rgba(0,0,0,0.15))` }} />
                        </div>
                      </div>

                      {/* Ambient Floor Glow */}
                      <div style={{
                        position: 'absolute', bottom: '-40px', right: '-40px',
                        width: '120px', height: '120px', borderRadius: '50%',
                        background: loc.color, filter: 'blur(50px)', opacity: 0.15,
                        pointerEvents: 'none'
                      }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section" style={{ paddingTop: '60px', paddingBottom: '60px' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '80px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h2 className="section-heading">Trusted by <span className="gradient-text">Leaders</span></h2>
            <p className="section-subtext" style={{ margin: '20px auto 0', maxWidth: '600px' }}>What our international clients say about their experience with SoftCodec.</p>
          </div>
          <div className="grid-3" style={{ gap: '32px' }}>
            {(showAllTestimonials ? testimonials : testimonials.slice(0, 3)).map((t, i) => (
              <div key={i} className="glass-card dark-glass-card reveal" style={{
                padding: '48px 40px',
                transitionDelay: `${i * 0.1}s`,
                position: 'relative',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                background: 'rgba(3, 3, 10, 0.92)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderTop: '1px solid rgba(255, 255, 255, 0.15)',
                backdropFilter: 'blur(32px)',
                WebkitBackdropFilter: 'blur(32px)',
                boxShadow: '0 10px 30px -10px rgba(0,0,0,0.5), 0 0 1px 0 rgba(255,255,255,0.1) inset'
              }}>
                {/* Decorative Quote Icon */}
                <Quote size={80} style={{ position: 'absolute', top: '-10px', right: '-10px', opacity: 0.04, color: '#ffffff', transform: 'rotate(10deg)' }} />

                {/* Verification Badge */}
                <div style={{ position: 'absolute', top: '24px', right: '32px', display: 'flex', alignItems: 'center', gap: '6px', padding: '6px 12px', background: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.2)', borderRadius: '20px' }}>
                  <CheckCircle2 size={12} color="#10b981" />
                  <span style={{ fontSize: '10px', color: '#10b981', fontWeight: 800, letterSpacing: '1px', textTransform: 'uppercase' }}>Verified</span>
                </div>

                {/* Star Rating */}
                <div style={{ display: 'flex', gap: '4px', marginBottom: '28px' }}>
                  {Array(t.rating).fill(0).map((_, j) => (
                    <Star key={j} size={14} fill="#f59e0b" color="#f59e0b" style={{ filter: 'drop-shadow(0 0 5px rgba(245, 158, 11, 0.4))' }} />
                  ))}
                </div>

                {/* Review Text */}
                <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '15px', lineHeight: 1.9, marginBottom: '40px', fontStyle: 'italic', position: 'relative', zIndex: 1 }}>
                  &quot;{t.text}&quot;
                </p>

                {/* User Info */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginTop: 'auto' }}>
                  <div style={{
                    width: '52px', height: '52px', borderRadius: '50%',
                    background: 'linear-gradient(135deg, #7c3aed, #06b6d4)',
                    padding: '2px', // Border effect
                    flexShrink: 0,
                  }}>
                    <div style={{ width: '100%', height: '100%', borderRadius: '50%', background: '#0a0a0a', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900, color: '#ffffff', fontSize: '16px' }}>
                      {t.avatar}
                    </div>
                  </div>
                  <div>
                    <div style={{ color: '#ffffff', fontWeight: 800, fontSize: '16px', letterSpacing: '0.5px' }}>{t.name}</div>
                    <div style={{ color: 'rgba(255, 255, 255, 0.5)', fontSize: '12px', marginTop: '2px' }}>{t.role}</div>
                  </div>
                </div>

                {/* Country Tag */}
                <div style={{ marginTop: '28px', borderTop: '1px solid rgba(255, 255, 255, 0.05)', paddingTop: '20px', display: 'flex', justifyContent: 'flex-end' }}>
                  <span style={{ fontSize: '11px', fontWeight: 900, color: 'rgba(255, 255, 255, 0.3)', letterSpacing: '1.5px' }}>{t.country.toUpperCase()}</span>
                </div>
              </div>
            ))}
          </div>

          {!showAllTestimonials && testimonials.length > 3 && (
            <div style={{ textAlign: 'center', marginTop: '60px' }}>
              <button
                onClick={() => setShowAllTestimonials(true)}
                className="secondary-btn"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
              >
                View All Testimonials <ChevronDown size={18} />
              </button>
            </div>
          )}

          {showAllTestimonials && (
            <div style={{ textAlign: 'center', marginTop: '60px' }}>
              <button
                onClick={() => setShowAllTestimonials(false)}
                className="secondary-btn"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
              >
                Show Less <ChevronUp size={18} />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Tech Stack Marquee */}
      <section className="section" style={{ padding: '60px 0', background: 'var(--bg-secondary)', borderTop: '1px solid var(--glass-border)' }}>
        <div style={{ textAlign: 'center', marginBottom: '28px' }}>
          <span style={{ fontSize: '11px', letterSpacing: '3px', color: 'var(--text-muted)', fontWeight: 700, textTransform: 'uppercase' }}>
            Our Tech Stack
          </span>
        </div>
        <div className="marquee-container">
          <div className="marquee-content">
            {['Next.js', 'React', 'Python', 'Node.js', 'TypeScript', 'Docker', 'AWS', 'PyTorch', 'TensorFlow', 'PostgreSQL', 'Redis', 'Kubernetes'].concat(['Next.js', 'React', 'Python', 'Node.js', 'TypeScript', 'Docker', 'AWS', 'PyTorch', 'TensorFlow', 'PostgreSQL', 'Redis', 'Kubernetes']).map((t, i) => (
              <div key={i} style={{ fontSize: '20px', fontWeight: 700, color: 'var(--text-secondary)', padding: '0 40px', letterSpacing: '1px' }}>{t}</div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section" id="faq" style={{ paddingTop: '60px', paddingBottom: '60px' }}>
        <div className="container">
          <div className="grid-2" style={{ gap: '80px' }}>
            <div>
              <span className="system-status" style={{ marginBottom: '20px' }}>
                <div className="system-dot" />
                FAQ
              </span>
              <h2 className="section-heading">Your Questions, <br /><span className="gradient-text">Answered</span></h2>
              <p className="section-subtext" style={{ marginTop: '24px' }}>Everything you need to know about working with SoftCodec on your next major project.</p>
              <div style={{ marginTop: '40px', padding: '24px', borderRadius: '16px', background: 'rgba(124,58,237,0.04)', border: '1px solid rgba(124,58,237,0.15)' }}>
                <div style={{ fontSize: '14px', color: 'var(--accent-purple)', fontWeight: 600, marginBottom: '8px' }}>💬 Still have questions?</div>
                <div style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '16px' }}>Our team typically replies within 2 hours.</div>
                <Link href="/contact" style={{ fontSize: '13px', color: 'var(--accent-purple)', fontWeight: 700, textDecoration: 'none' }}>Contact us →</Link>
              </div>
            </div>
            <div className="faq-accordion">
              {faqs.map((f, i) => (
                <div key={i} className={`faq-item visible ${openFaq === i ? 'open' : ''}`}>
                  <button className="faq-question" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                    {f.q}
                    <span style={{ fontSize: '22px', opacity: 0.5 }}>{openFaq === i ? '−' : '+'}</span>
                  </button>
                  <div className="faq-answer">
                    <div style={{ paddingBottom: '24px' }}>{f.a}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ PREMIUM CTA SECTION ============ */}
      <section id="contact" style={{ position: 'relative', overflow: 'hidden', background: 'var(--bg-primary)', borderTop: '1px solid var(--border-subtle)' }}>
        {/* Gradient blobs */}
        <div style={{ position: 'absolute', top: '-100px', left: '-100px', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(124,58,237,0.07) 0%, transparent 70%)', borderRadius: '50%', zIndex: 0, filter: 'blur(40px)' }} />
        <div style={{ position: 'absolute', bottom: '-80px', right: '-80px', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(6,182,212,0.05) 0%, transparent 70%)', borderRadius: '50%', zIndex: 0, filter: 'blur(40px)' }} />
        {/* Top border glow */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', zIndex: 1, background: 'linear-gradient(90deg, transparent, rgba(124,58,237,0.3), rgba(6,182,212,0.25), transparent)' }} />
        {/* Grid pattern */}
        <div style={{ position: 'absolute', inset: 0, zIndex: 0, backgroundImage: 'radial-gradient(rgba(0,0,0,0.04) 1px, transparent 1px)', backgroundSize: '36px 36px' }} />

        <div className="container" style={{ position: 'relative', zIndex: 2, padding: '80px 24px 100px', textAlign: 'center' }}>
          {/* Top badge */}
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '40px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '8px 20px', borderRadius: '100px', background: 'rgba(124,58,237,0.06)', border: '1px solid rgba(124,58,237,0.2)', backdropFilter: 'blur(10px)' }}>
              <div className="system-dot" />
              <span style={{ fontSize: '11px', fontWeight: 800, letterSpacing: '2.5px', color: 'var(--accent-purple)', textTransform: 'uppercase' }}>Ready to Build?</span>
            </div>
          </div>

          {/* Big headline */}
          <h2 style={{ fontFamily: 'Orbitron, sans-serif', fontSize: 'clamp(40px, 6vw, 76px)', fontWeight: 900, lineHeight: 1.05, letterSpacing: '-2px', color: 'var(--text-primary)', marginBottom: '28px' }}>
            Let&apos;s Build Your
            <br />
            <span style={{ background: 'linear-gradient(90deg, #a78bfa, #7c3aed 30%, #06b6d4 70%, #38bdf8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Next Big Thing</span>
          </h2>

          <p style={{ fontSize: '18px', color: 'var(--text-secondary)', lineHeight: 1.7, maxWidth: '520px', margin: '0 auto 52px' }}>
            Join <strong style={{ color: '#a78bfa' }}>250+ global businesses</strong> who trust SoftCodec to engineer world-class digital products that scale.
          </p>

          {/* CTA Buttons */}
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '60px' }}>
            <Link href="/contact" style={{
              display: 'inline-flex', alignItems: 'center', gap: '10px',
              padding: '18px 48px', borderRadius: '100px',
              background: 'linear-gradient(135deg, #7c3aed, #06b6d4)',
              color: '#fff', fontWeight: 800, fontSize: '15px', textDecoration: 'none',
              boxShadow: '0 0 40px rgba(124,58,237,0.45), 0 20px 60px rgba(0,0,0,0.4)',
              transition: 'all 0.3s ease',
            }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-3px) scale(1.03)'; e.currentTarget.style.boxShadow = '0 0 60px rgba(124,58,237,0.65), 0 24px 80px rgba(0,0,0,0.5)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0) scale(1)'; e.currentTarget.style.boxShadow = '0 0 40px rgba(124,58,237,0.45), 0 20px 60px rgba(0,0,0,0.4)'; }}
            >
              <span style={{ fontSize: '18px' }}>🚀</span> Start Your Project
            </Link>
            <Link href="/portfolio" style={{
              display: 'inline-flex', alignItems: 'center', gap: '10px',
              padding: '18px 40px', borderRadius: '100px',
              background: 'rgba(0,0,0,0.04)', border: '1px solid var(--border-subtle)',
              color: 'var(--text-primary)', fontWeight: 600, fontSize: '15px', textDecoration: 'none',
              backdropFilter: 'blur(12px)', transition: 'all 0.3s ease',
            }}
              onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(124,58,237,0.06)'; e.currentTarget.style.borderColor = 'rgba(124,58,237,0.2)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(0,0,0,0.04)'; e.currentTarget.style.borderColor = 'var(--border-subtle)'; e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              View Portfolio →
            </Link>
          </div>

          {/* Vertical divider line */}
          <div style={{ width: '1px', height: '40px', background: 'linear-gradient(to bottom, transparent, rgba(0,0,0,0.15), transparent)', margin: '0 auto 40px' }} />

          {/* Trust badge pills */}
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            {[
              { icon: '🔐', label: 'NDA Protected' },
              { icon: '⚡', label: '48hr Kickoff' },
              { icon: '♾️', label: 'Unlimited Revisions' },
              { icon: '✅', label: 'Money-back Guarantee' },
              { icon: '🌍', label: '30+ Countries' },
            ].map((b, i) => (
              <div key={i} style={{
                display: 'inline-flex', alignItems: 'center', gap: '7px',
                padding: '9px 18px', borderRadius: '100px',
                background: 'rgba(0,0,0,0.03)', border: '1px solid var(--border-subtle)',
                fontSize: '12px', color: 'var(--text-secondary)', fontWeight: 600,
                backdropFilter: 'blur(8px)', transition: 'all 0.2s',
              }}
                onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(124,58,237,0.06)'; e.currentTarget.style.borderColor = 'rgba(124,58,237,0.2)'; e.currentTarget.style.color = 'var(--accent-purple)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(0,0,0,0.03)'; e.currentTarget.style.borderColor = 'var(--border-subtle)'; e.currentTarget.style.color = 'var(--text-secondary)'; }}
              >
                <span>{b.icon}</span> {b.label}
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Footer handled in layout.tsx */}
    </>
  );
}
