'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Minus, Plus, Cloud, Activity, ShieldAlert, Container, FastForward, GitCommit, Server, Database, ChevronRight, Lock, Users, Settings, Package } from 'lucide-react';
import ScrollProgress from '../../components/ScrollProgress';
import CursorGlow from '../../components/CursorGlow';

// ====================
// DATA
// ====================
const SERVICE_ID = "cloud-devops";
const BRAND_COLOR = "#3b82f6";
const BRAND_GRADIENT = "linear-gradient(135deg, #3b82f6, #06b6d4)";

const features = [
  { icon: <Cloud size={28} />, title: 'Cloud Architecture', desc: 'Secure, multi-zone migrations to AWS, Azure, or GCP with absolute zero downtime and robust failover states.' },
  { icon: <FastForward size={28} />, title: 'Hyper CI/CD', desc: 'Automated, resilient deployment pipelines designed to push code to production rapidly without breaking infrastructure.' },
  { icon: <GitCommit size={28} />, title: 'Infrastructure as Code', desc: 'Complete environment provisioning managed programmatically via Terraform and Ansible for instantaneous disaster recovery.' },
  { icon: <Container size={28} />, title: 'Kubernetes Orchestration', desc: 'Docker containerization managed by Kubernetes, dynamically scaling resources to handle massive load spikes instantly.' },
  { icon: <Activity size={28} />, title: 'Absolute Observability', desc: 'Deep telemetry networks built on Prometheus and Datadog to identify anomalies before they impact end-users.' },
  { icon: <ShieldAlert size={28} />, title: 'Rigid DevSecOps', desc: 'Ironclad security protocols interwoven directly into your pipelines, featuring real-time automated vulnerability scanning.' },
];

const process = [
  { num: '01', title: 'Infra Audit', desc: 'A rigorous tear-down of your existing architecture, exposing legacy bottlenecks, security vulnerabilities, and cost inefficiencies.' },
  { num: '02', title: 'Blueprint Engineering', desc: 'Architecting a highly available, cloud-native framework mathematically modeled for your projected growth and load SLA.' },
  { num: '03', title: 'Automated Forging', desc: 'Deployment of code-driven infrastructure, establishing zero-trust access controls, and containerizing application monoliths.' },
  { num: '04', title: 'Telemetry & Scale', desc: 'Continuous deployment of advanced anomaly detection algorithms, cost optimization filters, and horizontal scaling rules.' },
];

const faqs = [
  { q: 'Which cloud ecosystems do you specialize in?', a: 'We are vendor-agnostic infrastructure engineers with deep expertise deployed across AWS, Google Cloud (GCP), and Azure. We map the cloud ecosystem to your exact technical and financial requirements.' },
  { q: 'How is zero-downtime migration actually achieved?', a: 'Through complex Blue-Green deployment strategies, traffic shadowing, and rigorous state-syncing. We replicate your production environment, sync user data, and shift DNS records only when system integerity is 100% verified.' },
  { q: 'Can you compress our monthly AWS/GCP burn rate?', a: 'Yes. Cost optimization is embedded in our architecture. We audit orphan volumes, aggressively implement Spot/Reserved instances, right-size compute nodes, and configure auto-scaling to kill idle resources instantly.' },
  { q: 'Explain your security perimeter approach.', a: 'We architect Zero-Trust perimeters. Security isn\'t an afterthought; it is coded into Terraform. We enforce strict IAM policies, VPC isolation, TLS 1.3 encryption, and automated CI/CD dependency scanning.' },
];

const techStack = ['AWS (Advanced)', 'Google Cloud', 'Microsoft Azure', 'Kubernetes', 'Docker Swarm', 'Terraform', 'GitHub Actions', 'GitLab CI', 'Prometheus', 'Datadog', 'Ansible', 'Helm'];

// ====================
// COMPONENTS
// ====================
function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ borderBottom: '1px solid #e2e8f0', marginBottom: '16px' }}>
      <button 
        onClick={() => setOpen(!open)}
        style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '24px 0', background: 'transparent', border: 'none', cursor: 'pointer', textAlign: 'left', color: '#0f172a', fontSize: '18px', fontWeight: 700 }}
      >
        {question}
        <motion.div animate={{ rotate: open ? 180 : 0 }} style={{ color: BRAND_COLOR }}>
          {open ? <Minus size={20} /> : <Plus size={20} />}
        </motion.div>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            style={{ overflow: 'hidden' }}
          >
            <p style={{ paddingBottom: '24px', color: '#64748b', lineHeight: 1.7, fontSize: '15px' }}>{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function CloudDevOpsPage() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <div style={{ background: '#ffffff', color: '#0f172a', overflowX: 'hidden' }}>
      <ScrollProgress />
      <CursorGlow />
      {/* Navbar handled globally */}

      {/* ─── 1. PREMIUM CLOUD HERO ─── */}
      <section style={{ paddingTop: '120px', paddingBottom: '160px', position: 'relative', overflow: 'hidden' }}>
        {/* Ambient Glows */}
        <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: '900px', height: '900px', background: 'radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 70%)', zIndex: 0 }} />
        <div style={{ position: 'absolute', bottom: '0', left: '-5%', width: '700px', height: '700px', background: 'radial-gradient(circle, rgba(6,182,212,0.06) 0%, transparent 70%)', zIndex: 0 }} />
        
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '80px', alignItems: 'center' }}>
            
            {/* PREMIUM CLOUD VISUAL (LEFT) */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }} 
              animate={{ opacity: 1, scale: 1 }} 
              transition={{ duration: 1.2 }}
              className="hide-mobile"
              style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}
            >
              <div style={{ position: 'relative', zIndex: 2 }}>
                <motion.img 
                  animate={{ y: [0, -20, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                  src="/Why Linux Is My IDE-Photoroom.png" 
                  alt="Cloud Infrastructure"
                  style={{ width: '100%', maxWidth: '550px', height: 'auto', filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.1))' }}
                />
                
                {/* Dynamic Floor Shadow */}
                <motion.div
                  animate={{ 
                    scale: [1, 0.8, 1],
                    opacity: [0.2, 0.1, 0.2]
                  }}
                  transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                  style={{ 
                    width: '70%', 
                    height: '40px', 
                    background: 'radial-gradient(ellipse at center, rgba(59,130,246,0.3) 0%, transparent 70%)', 
                    borderRadius: '50%', 
                    margin: '-40px auto 0',
                    filter: 'blur(15px)',
                    zIndex: 1
                  }}
                />
              </div>

              {/* Status Pill (Floating) */}
              <motion.div 
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                style={{ 
                  position: 'absolute', top: '40px', left: '-20px', 
                  background: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(20px)',
                  padding: '16px 24px', borderRadius: '20px', border: '1px solid #f1f5f9',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.1)', display: 'flex', alignItems: 'center', gap: '12px', zIndex: 3
                }}
              >
                <Activity size={18} color="#10b981" />
                <span style={{ fontSize: '14px', fontWeight: 800, color: '#0f172a' }}>Uptime: 99.99%</span>
              </motion.div>
            </motion.div>

            {/* HERO TEXT (RIGHT) */}
            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: `#eff6ff`, border: `1px solid #bfdbfe`, borderRadius: '100px', padding: '8px 20px', marginBottom: '32px' }}>
                <Cloud size={14} color={BRAND_COLOR} />
                <span style={{ fontSize: '12px', fontWeight: 900, color: BRAND_COLOR, letterSpacing: '2.5px', textTransform: 'uppercase' }}>Cloud Infrastructure</span>
              </div>
              
              <h1 style={{ fontSize: 'clamp(44px, 6vw, 84px)', fontWeight: 950, lineHeight: 1, letterSpacing: '-4px', marginBottom: '32px' }}>
                Infinite <br />
                <span className="gradient-text">Scalability.</span>
              </h1>
              
              <p style={{ fontSize: '20px', color: '#475569', lineHeight: 1.6, marginBottom: '48px', maxWidth: '560px' }}>
                We engineer bulletproof cloud environments and hyper-automated deployment pipelines. Ship code fearlessly on infrastructure that refuses to fail.
              </p>
              
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
                <Link href="/contact" className="btn-primary" style={{ padding: '20px 48px', fontSize: '16px', background: BRAND_GRADIENT, color: '#fff', borderRadius: '100px', fontWeight: 800, textDecoration: 'none', boxShadow: `0 20px 40px ${BRAND_COLOR}30`, display: 'flex', alignItems: 'center', gap: '10px' }}>
                  Deploy Infrastructure <ChevronRight size={18} />
                </Link>
                <Link href="/portfolio" style={{ padding: '20px 40px', fontSize: '16.5px', color: '#0f172a', border: '1px solid #e2e8f0', borderRadius: '100px', fontWeight: 700, textDecoration: 'none' }}>
                  Architecture Specs
                </Link>
              </div>

              {/* Status Indicators */}
              <div style={{ marginTop: '60px', display: 'flex', gap: '32px' }}>
                {[
                  { icon: <ShieldAlert size={18} />, label: 'Zero-Trust' },
                  { icon: <Server size={18} />, label: '99.99% Node Uptime' },
                  { icon: <GitCommit size={18} />, label: 'Infra As Code' }
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', opacity: 0.7 }}>
                    <div style={{ color: BRAND_COLOR }}>{item.icon}</div>
                    <div style={{ fontSize: '12px', fontWeight: 800, color: '#64748b', textTransform: 'uppercase', letterSpacing: '1px' }}>{item.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ─── 2. ENTERPRISE STATS GRID ─── */}
      <section style={{ padding: '0 0 120px' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1px', background: '#f1f5f9', border: '1px solid #f1f5f9', borderRadius: '32px', overflow: 'hidden' }}>
            {[
              { num: '99.99%', label: 'Uptime Achieved', sub: 'Calculated across nodes' },
              { num: '40%', label: 'Cost Compression', sub: 'Average cloud bill reduction' },
              { num: '10x', label: 'Deployment Velocity', sub: 'Via automated pipelines' },
              { num: '24/7', label: 'Active Defense', sub: 'Zero-trust architecture' },
            ].map((s, i) => (
              <div key={i} style={{ background: '#fff', padding: '48px 32px', textAlign: 'center' }}>
                <div style={{ fontSize: '42px', fontWeight: 950, color: '#0f172a', letterSpacing: '-2px', marginBottom: '4px', fontFamily: 'Orbitron' }}>{s.num}</div>
                <div style={{ fontSize: '13px', fontWeight: 800, color: BRAND_COLOR, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '4px' }}>{s.label}</div>
                <div style={{ fontSize: '12px', color: '#94a3b8', fontWeight: 500 }}>{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 3. CAPABILITIES GRID ─── */}
      <section style={{ padding: '140px 0', background: '#f8fafc', borderTop: '1px solid #f1f5f9', borderBottom: '1px solid #f1f5f9' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '100px', maxWidth: '800px', margin: '0 auto 100px' }}>
            <span style={{ color: BRAND_COLOR, fontWeight: 900, textTransform: 'uppercase', fontSize: '12px', letterSpacing: '3px', display: 'block', marginBottom: '16px' }}>Infrastructure Capabilities</span>
            <h2 style={{ fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: 950, color: '#0f172a', letterSpacing: '-2.5px', lineHeight: 1 }}>
                Engineering <span className="gradient-text">Resilience.</span>
            </h2>
            <p style={{ fontSize: '19px', color: '#64748b', marginTop: '24px', lineHeight: 1.6 }}>
                Infrastructure engineered to self-heal, exponentially scale under pressure, and aggressively defend against threats.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '32px' }}>
            {features.map((f, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 30 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                whileHover={{ y: -12 }}
                transition={{ duration: 0.5, delay: i * 0.1 }} 
                style={{ 
                    background: '#ffffff', padding: '48px', borderRadius: '32px', 
                    border: '1px solid #f1f5f9', boxShadow: '0 20px 50px rgba(0,0,0,0.03)', 
                    display: 'flex', flexDirection: 'column', gap: '24px' 
                }}
              >
                <div style={{ width: '64px', height: '64px', borderRadius: '20px', background: `${BRAND_COLOR}10`, color: BRAND_COLOR, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{f.icon}</div>
                <div>
                    <h3 style={{ fontSize: '22px', fontWeight: 900, color: '#0f172a', marginBottom: '12px' }}>{f.title}</h3>
                    <p style={{ fontSize: '15px', color: '#64748b', lineHeight: 1.8 }}>{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 3.5. ENTERPRISE PLATFORM SHOWCASE ─── */}
      <section style={{ padding: '120px 0', background: '#fff' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '80px', alignItems: 'center' }}>
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span style={{ color: BRAND_COLOR, fontWeight: 900, textTransform: 'uppercase', fontSize: '12px', letterSpacing: '3px', display: 'block', marginBottom: '16px' }}>Industrial Platforms</span>
              <h2 style={{ fontSize: '48px', fontWeight: 950, letterSpacing: '-2px', marginBottom: '24px' }}>Bulletproof <br />Ecosystems.</h2>
              <p style={{ fontSize: '18px', color: '#64748b', lineHeight: 1.7, marginBottom: '40px' }}>
                We don't just host applications; we architect living digital ecosystems. Our cloud environments are designed to sustain massive concurrent users with sub-second feedback loops and total data integrity.
              </p>
              <div style={{ display: 'flex', gap: '20px' }}>
                <Link href="/contact" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: BRAND_COLOR, fontWeight: 800, textDecoration: 'none', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                    View Platform Specs <ChevronRight size={16} />
                </Link>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
              <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <motion.img 
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  src="/Concept of cloud computing technology isometric illustration by generative ai _ Premium AI-generated image-Photoroom.png" 
                  alt="Enterprise Platform"
                  style={{ width: '100%', height: 'auto', maxHeight: '500px', objectFit: 'contain', filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.1))', zIndex: 2 }}
                />
                <motion.div
                  animate={{ scale: [1, 0.85, 1], opacity: [0.2, 0.1, 0.2] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  style={{ width: '60%', height: '30px', background: 'radial-gradient(ellipse at center, rgba(59,130,246,0.3) 0%, transparent 70%)', borderRadius: '50%', marginTop: '-15px', zIndex: 1, filter: 'blur(10px)' }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── 3.8. DEVOPS PHILOSOPHY SHOWCASE (ULTRA HD RECREATION) ─── */}
      <section style={{ padding: '140px 0', background: '#f8fafc', borderTop: '1px solid #f1f5f9' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
             <span style={{ color: BRAND_COLOR, fontWeight: 900, textTransform: 'uppercase', fontSize: '12px', letterSpacing: '3px', display: 'block', marginBottom: '16px' }}>Core Philosophy</span>
             <h2 style={{ fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: 950, color: '#0f172a', letterSpacing: '-2.5px', lineHeight: 1 }}>
                DevOps in <span className="gradient-text">3 Sentences.</span>
             </h2>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px' }}>
            {[
              { 
                num: '01', 
                icon: <Users size={32} />, 
                title: 'The Union', 
                text: 'DevOps is the union of people, process, and products to enable continuous delivery of value to our end users.' 
              },
              { 
                num: '02', 
                icon: <Settings size={32} />, 
                title: 'Silo Erasure', 
                text: 'It is the removal of barriers between development and operations teams to shorten the systems development life cycle.' 
              },
              { 
                num: '03', 
                icon: <Package size={32} />, 
                title: 'Lifecycle Mastery', 
                text: 'It is the practice of engineering teams participating together in the entire service lifecycle, from design to production support.' 
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                whileHover={{ y: -10 }}
                style={{ 
                  background: '#000000', 
                  padding: '60px 40px', 
                  borderRadius: '32px', 
                  border: '1px solid #111827',
                  boxShadow: '0 20px 50px rgba(0,0,0,0.2)',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                <div style={{ position: 'absolute', top: '20px', right: '30px', fontSize: '80px', fontWeight: 900, color: `${BRAND_COLOR}30`, lineHeight: 1, fontFamily: 'Orbitron', pointerEvents: 'none' }}>{item.num}</div>
                <div style={{ width: '64px', height: '64px', borderRadius: '20px', background: `${BRAND_COLOR}20`, color: BRAND_COLOR, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '32px', border: `1px solid ${BRAND_COLOR}30` }}>
                  {item.icon}
                </div>
                <h3 style={{ fontSize: '24px', fontWeight: 900, color: '#fff', marginBottom: '20px' }}>{item.title}</h3>
                <p style={{ fontSize: '17px', color: '#94a3b8', lineHeight: 1.7 }}>{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 3.9. MULTI-CLOUD STRATEGY SHOWCASE ─── */}
      <section style={{ padding: '120px 0', background: '#fff' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '80px', alignItems: 'center' }}>
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span style={{ color: BRAND_COLOR, fontWeight: 900, textTransform: 'uppercase', fontSize: '12px', letterSpacing: '3px', display: 'block', marginBottom: '16px' }}>2025 Strategy</span>
              <h2 style={{ fontSize: '48px', fontWeight: 950, letterSpacing: '-2px', marginBottom: '24px' }}>Multi-Cloud <br />Adoption 2025.</h2>
              <p style={{ fontSize: '18px', color: '#64748b', lineHeight: 1.7, marginBottom: '40px' }}>
                We engineer hybrid and multi-cloud strategies that eliminate vendor lock-in. Scale across AWS, Azure, and GCP simultaneously to achieve absolute redundancy and cost-efficiency in the 2025 enterprise landscape.
              </p>
              <div style={{ display: 'flex', gap: '20px' }}>
                <Link href="/contact" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: BRAND_COLOR, fontWeight: 800, textDecoration: 'none', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                    Develop Strategy <ChevronRight size={16} />
                </Link>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
              <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <motion.img 
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  src="/Multi-Cloud Adoption in 2025_ Strategies, Benefits & Enterprise Challenges-Photoroom.png" 
                  alt="Multi-Cloud Adoption 2025"
                  style={{ width: '100%', height: 'auto', maxHeight: '550px', objectFit: 'contain', filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.1))', zIndex: 2 }}
                />
                <motion.div
                  animate={{ scale: [1, 0.85, 1], opacity: [0.2, 0.1, 0.2] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  style={{ width: '60%', height: '30px', background: 'radial-gradient(ellipse at center, rgba(59,130,246,0.3) 0%, transparent 70%)', borderRadius: '50%', marginTop: '-15px', zIndex: 1, filter: 'blur(10px)' }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── 4. THE INFRA ARSENAL ─── */}
      <section style={{ padding: '120px 0', background: '#fff' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.2fr)', gap: '100px', alignItems: 'center' }}>
            <div>
              <span style={{ color: BRAND_COLOR, fontWeight: 900, textTransform: 'uppercase', fontSize: '12px', letterSpacing: '3px', display: 'block', marginBottom: '16px' }}>Deployment Stack</span>
              <h2 style={{ fontSize: '48px', fontWeight: 950, letterSpacing: '-2px', marginBottom: '24px' }}>Weapons of <br />Automation.</h2>
              <p style={{ fontSize: '18px', color: '#64748b', lineHeight: 1.7, marginBottom: '40px' }}>
                We deploy the industry's most advanced toolchains to containerize, orchestrate, and observe your environments.
              </p>
              <div style={{ display: 'flex', gap: '40px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <Cloud size={32} color={BRAND_COLOR} />
                    <div style={{ fontSize: '13px', fontWeight: 800 }}>AWS / GCP Matrix</div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <Container size={32} color={BRAND_COLOR} />
                    <div style={{ fontSize: '13px', fontWeight: 800 }}>K8s Orchestration</div>
                </div>
              </div>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
              {techStack.map((tech) => (
                <motion.div
                  key={tech}
                  whileHover={{ y: -5, background: '#eff6ff', borderColor: BRAND_COLOR }}
                  style={{
                    padding: '16px 32px', borderRadius: '100px', border: '1px solid #e2e8f0',
                    fontSize: '15px', fontWeight: 800, color: '#0f172a', transition: 'all 0.3s'
                  }}
                >
                  {tech}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── 5. FAQ ─── */}
      <section style={{ padding: '140px 0', background: '#f8fafc', borderTop: '1px solid #f1f5f9' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 style={{ fontSize: '40px', fontWeight: 900, textAlign: 'center', marginBottom: '60px', letterSpacing: '-1.5px' }}>Architecture <span style={{ color: BRAND_COLOR }}>Briefing.</span></h2>
          <div>
            {faqs.map((f, i) => <FAQItem key={i} question={f.q} answer={f.a} />)}
          </div>
        </div>
      </section>

      {/* Footer handled in layout.tsx */}
    </div>
  );
}
