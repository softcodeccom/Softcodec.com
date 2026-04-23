'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Minus, Plus, Bot, BrainCircuit, Zap, Eye, BarChart3, Link as LinkIcon, Cpu, ChevronRight, Sparkles, Terminal, Activity, Server, Database } from 'lucide-react';
import ScrollProgress from '../../components/ScrollProgress';
import CursorGlow from '../../components/CursorGlow';

// ====================
// DATA
// ====================
const SERVICE_ID = "ai-automation";
const BRAND_COLOR = "#ec4899";
const BRAND_GRADIENT = "linear-gradient(135deg, #ec4899, #7c3aed)";

const features = [
  { icon: <BrainCircuit size={28} />, title: 'Sovereign AI Models', desc: 'Custom machine learning architectures trained on your proprietary data for classification, trend prediction, and high-fidelity NLP.' },
  { icon: <Zap size={28} />, title: 'Hyper-Automation', desc: 'End-to-end industrial workflow automation focusing on high-volume data processing and sub-second decision making.' },
  { icon: <Bot size={28} />, title: 'Agentic Assistants', desc: 'GPT-integrated autonomous agents with custom knowledge-graph memory and multi-platform operational capabilities.' },
  { icon: <Eye size={28} />, title: 'Neural Vision', desc: 'Enterprise-grade image recognition and real-time object detection systems optimized for security and industrial QA.' },
  { icon: <BarChart3 size={28} />, title: 'Predictive Intelligence', desc: 'Machine learning forecasting engines that detect fraud, optimize supply chains, and unlock exponential business growth.' },
  { icon: <LinkIcon size={28} />, title: 'Universal Integration', desc: 'Seamless neural bridging with OpenAI GPT-4, Claude 3.5, Gemini, and custom vector-database infrastructures.' },
];

const process = [
  { num: '01', title: 'Neural Audit', desc: 'We assess your data ecosystem to identify the most potent automation opportunities for maximum ROI.' },
  { num: '02', title: 'Architecture Forge', desc: 'Model selection, feature engineering, and high-fidelity prototyping with strict performance benchmarks.' },
  { num: '03', title: 'Training & Entropy', desc: 'Rigorous weights optimization, hyperparameter tuning, and validation against real-world adversarial data.' },
  { num: '04', title: 'Deployment & Drift', desc: 'Industrial cloud deployment with 24/7 monitoring for model drift and continuous evolution pipelines.' },
];

const faqs = [
  { q: 'Do I need a large dataset to use AI?', a: 'Not necessarily. We utilize few-shot learning, transfer learning, and fine-tuning strategies that can achieve enterprise performance even with specialized, low-volume datasets.' },
  { q: 'How do AI chatbots work with our business?', a: 'We architect RAG (Retrieval-Augmented Generation) systems that bridge LLMs with your private knowledge base, ensuring 100% accuracy and custom brand alignment.' },
  { q: 'Can AI be integrated into our existing stack?', a: 'Yes. Every SoftCodec AI solution is architected as a modular microservice with high-performance GraphQL or RESTful endpoints that plug into any enterprise stack.' },
  { q: 'How do you ensure model accuracy?', a: 'We employ rigorous cross-validation and production-grade monitoring systems that track model performance and accuracy KPIs in real-time, preventing hallucination and bias.' },
];

const techStack = ['Python', 'OpenAI GPT-4o', 'LangChain', 'PyTorch', 'TensorFlow', 'Hugging Face', 'FastAPI', 'Pinecone DB', 'AWS SageMaker', 'Claude 3.5 Sonnet', 'Vector Search'];

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

export default function AIAutomationPage() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <div style={{ background: '#ffffff', color: '#0f172a', overflowX: 'hidden' }}>
      <ScrollProgress />
      <CursorGlow />
      {/* Navbar handled in layout.tsx */}

      {/* ─── 1. PREMIUM NEURAL HERO ─── */}
      <section style={{ paddingTop: '160px', paddingBottom: '180px', position: 'relative', overflow: 'hidden', background: '#020617' }}>
        {/* Background Video */}
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          style={{ 
            position: 'absolute', 
            top: 0, 
            left: 0, 
            width: '100%', 
            height: '100%', 
            objectFit: 'cover', 
            zIndex: 0,
            opacity: 0.5, // Increased visibility
          }}
        >
          <source src="/animate-it.mp4" type="video/mp4" />
        </video>

        {/* Cinematic Dark Overlays */}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(2,6,23,0.4), #020617 98%)', zIndex: 1 }} />
        
        {/* Ambient Glows (Subtle for Dark Mode) */}
        <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: '900px', height: '900px', background: 'radial-gradient(circle, rgba(236,72,153,0.15) 0%, transparent 70%)', zIndex: 1 }} />
        <div style={{ position: 'absolute', bottom: '0', left: '-5%', width: '700px', height: '700px', background: 'radial-gradient(circle, rgba(124,58,237,0.12) 0%, transparent 70%)', zIndex: 1 }} />
        
        <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: `rgba(236,72,153,0.1)`, border: `1px solid rgba(236,72,153,0.3)`, borderRadius: '100px', padding: '8px 20px', marginBottom: '32px', backdropFilter: 'blur(10px)' }}>
              <Sparkles size={14} color={BRAND_COLOR} />
              <span style={{ fontSize: '12px', fontWeight: 900, color: BRAND_COLOR, letterSpacing: '2.5px', textTransform: 'uppercase' }}>Neural Engineering</span>
            </div>
            
            <h1 style={{ fontSize: 'clamp(44px, 8vw, 110px)', fontWeight: 950, lineHeight: 0.9, letterSpacing: '-6px', marginBottom: '32px', color: '#ffffff' }}>
              Forge Your <br />
              <span className="gradient-text">Neural Advantage.</span>
            </h1>
            
            <p style={{ fontSize: '22px', color: 'rgba(255,255,255,0.7)', lineHeight: 1.6, marginBottom: '56px', maxWidth: '800px', margin: '0 auto' }}>
              We engineer autonomous AI systems and intelligent workflow engines that handle global operations with sub-second precision. Reclaim 90% of your operational bandwidth.
            </p>
            
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px', justifyContent: 'center' }}>
              <Link href="/contact" className="btn-primary" style={{ padding: '22px 56px', fontSize: '17px', background: BRAND_GRADIENT, color: '#fff', borderRadius: '100px', fontWeight: 800, textDecoration: 'none', boxShadow: `0 20px 40px ${BRAND_COLOR}40`, display: 'flex', alignItems: 'center', gap: '10px' }}>
                Commence AI Forge <ChevronRight size={18} />
              </Link>
              <Link href="/portfolio" style={{ padding: '22px 48px', fontSize: '17px', color: '#ffffff', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '100px', fontWeight: 700, textDecoration: 'none', background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(10px)' }}>
                Neural Systems
              </Link>
            </div>

            {/* Data Node Indicators (Centered) */}
            <div style={{ marginTop: '70px', display: 'flex', gap: '40px', justifyContent: 'center' }}>
              {[
                { icon: <Database size={18} />, label: 'Vector Data' },
                { icon: <Server size={18} />, label: 'Autonomous' },
                { icon: <Activity size={18} />, label: 'Real-time' }
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{ color: BRAND_COLOR }}>{item.icon}</div>
                  <div style={{ fontSize: '12px', fontWeight: 800, color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '1px' }}>{item.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── 2. ENTERPRISE STATS GRID ─── */}
      <section style={{ padding: '0 0 120px' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1px', background: '#f1f5f9', border: '1px solid #f1f5f9', borderRadius: '32px', overflow: 'hidden' }}>
            {[
              { num: '70%', label: 'Efficiency Lift', sub: 'Average Operational Speed' },
              { num: '10M+', label: 'Daily Predictions', sub: 'Sub-second Latency' },
              { num: '50+', label: 'Systems Deployed', sub: 'Zero-hallucination engines' },
              { num: '24/7', label: 'Autonomous Uptime', sub: 'Manual-free workflow' },
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

      {/* ─── 3. CAPABILITIES GRID (NEURAL GLASS) ─── */}
      <section style={{ padding: '140px 0', background: '#f8fafc', borderTop: '1px solid #f1f5f9', borderBottom: '1px solid #f1f5f9' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '100px', maxWidth: '800px', margin: '0 auto 100px' }}>
            <span style={{ color: BRAND_COLOR, fontWeight: 900, textTransform: 'uppercase', fontSize: '12px', letterSpacing: '3px', display: 'block', marginBottom: '16px' }}>Neural Capabilities</span>
            <h2 style={{ fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: 950, color: '#0f172a', letterSpacing: '-2.5px', lineHeight: 1 }}>
                Intelligence <span className="gradient-text">Unbound.</span>
            </h2>
            <p style={{ fontSize: '19px', color: '#64748b', marginTop: '24px', lineHeight: 1.6 }}>
                Every AI system we forge is designed for sub-second precision and absolute market dominance.
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

      {/* ─── 3.5. MARKET INTELLIGENCE SHOWCASE (ALT) ─── */}
      <section style={{ padding: '120px 0', background: '#fff' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '80px', alignItems: 'center' }}>
            {/* Image Left */}
            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
              <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <motion.img 
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  src="/AI Talent Wars_ Explosive Offers, Secret Deals, and Tears-Photoroom.png" 
                  alt="AI Talent Wars"
                  style={{ width: '100%', height: 'auto', maxHeight: '500px', objectFit: 'contain', filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.1))', zIndex: 2 }}
                />
                <motion.div
                  animate={{ scale: [1, 0.85, 1], opacity: [0.2, 0.1, 0.2] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  style={{ width: '60%', height: '30px', background: 'radial-gradient(ellipse at center, rgba(0,0,0,0.3) 0%, transparent 70%)', borderRadius: '50%', marginTop: '-15px', zIndex: 1, filter: 'blur(10px)' }}
                />
              </div>
            </motion.div>

            {/* Text Right */}
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span style={{ color: BRAND_COLOR, fontWeight: 900, textTransform: 'uppercase', fontSize: '12px', letterSpacing: '3px', display: 'block', marginBottom: '16px' }}>Market Dominance</span>
              <h2 style={{ fontSize: '48px', fontWeight: 950, letterSpacing: '-2px', marginBottom: '24px' }}>The AI <br />Talent War.</h2>
              <p style={{ fontSize: '18px', color: '#64748b', lineHeight: 1.7, marginBottom: '40px' }}>
                In a landscape defined by explosive growth and secret tactical advantages, we provide the neural infrastructure to secure your competitive superiority. We help you out-pace, out-think, and out-perform the global competition.
              </p>
              <div style={{ display: 'flex', gap: '20px' }}>
                <Link href="/contact" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: BRAND_COLOR, fontWeight: 800, textDecoration: 'none', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                    Secure Your Edge <ChevronRight size={16} />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── 3.7. DIGITAL FORGE SHOWCASE ─── */}
      <section style={{ padding: '120px 0', background: '#f8fafc' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '80px', alignItems: 'center' }}>
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span style={{ color: BRAND_COLOR, fontWeight: 900, textTransform: 'uppercase', fontSize: '12px', letterSpacing: '3px', display: 'block', marginBottom: '16px' }}>Industrial AI</span>
              <h2 style={{ fontSize: '48px', fontWeight: 950, letterSpacing: '-2px', marginBottom: '24px' }}>The Digital <br />Neural Forge.</h2>
              <p style={{ fontSize: '18px', color: '#64748b', lineHeight: 1.7, marginBottom: '40px' }}>
                We construct industrial-grade neural forges that process petabytes of operational data into actionable, sub-second business decisions. Your workflows don't just run; they evolve autonomously.
              </p>
              <div style={{ display: 'flex', gap: '20px' }}>
                <Link href="/contact" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: BRAND_COLOR, fontWeight: 800, textDecoration: 'none', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                    Access the Forge <ChevronRight size={16} />
                </Link>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
              <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <motion.img 
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  src="/digital_forge_3d.png" 
                  alt="Digital AI Forge"
                  style={{ width: '100%', height: 'auto', maxHeight: '500px', objectFit: 'contain', filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.1))', zIndex: 2 }}
                />
                <motion.div
                  animate={{ scale: [1, 0.85, 1], opacity: [0.2, 0.1, 0.2] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  style={{ width: '60%', height: '30px', background: 'radial-gradient(ellipse at center, rgba(236,72,153,0.3) 0%, transparent 70%)', borderRadius: '50%', marginTop: '-15px', zIndex: 1, filter: 'blur(10px)' }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── 3.8. CONTROL CENTER SHOWCASE ─── */}
      <section style={{ padding: '120px 0', background: '#fff' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '80px', alignItems: 'center' }}>
            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
              <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <motion.img 
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  src="/Notifications UI AI design_ Control center glassmorphism-Photoroom.png" 
                  alt="AI Control Center"
                  style={{ width: '100%', height: 'auto', maxHeight: '500px', objectFit: 'contain', filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.1))', zIndex: 2 }}
                />
                <motion.div
                  animate={{ scale: [1, 0.85, 1], opacity: [0.2, 0.1, 0.2] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  style={{ width: '60%', height: '30px', background: 'radial-gradient(ellipse at center, rgba(236,72,153,0.3) 0%, transparent 70%)', borderRadius: '50%', marginTop: '-15px', zIndex: 1, filter: 'blur(10px)' }}
                />
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span style={{ color: BRAND_COLOR, fontWeight: 900, textTransform: 'uppercase', fontSize: '12px', letterSpacing: '3px', display: 'block', marginBottom: '16px' }}>Autonomous Ops</span>
              <h2 style={{ fontSize: '48px', fontWeight: 950, letterSpacing: '-2px', marginBottom: '24px' }}>Neural Control <br />Centers.</h2>
              <p style={{ fontSize: '18px', color: '#64748b', lineHeight: 1.7, marginBottom: '40px' }}>
                We engineer glassmorphic control centers that provide high-fidelity observability into your AI agents. Monitor decision-making logic, model performance, and operational KPIs in real-time with absolute clarity.
              </p>
              <div style={{ display: 'flex', gap: '20px' }}>
                <Link href="/contact" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: BRAND_COLOR, fontWeight: 800, textDecoration: 'none', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                    View System Metrics <ChevronRight size={16} />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── 4. THE NEURAL ARSENAL (PREMIUM PILLS) ─── */}
      <section style={{ padding: '120px 0', background: '#fff' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.2fr)', gap: '100px', alignItems: 'center' }}>
            <div>
              <span style={{ color: BRAND_COLOR, fontWeight: 900, textTransform: 'uppercase', fontSize: '12px', letterSpacing: '3px', display: 'block', marginBottom: '16px' }}>Neural Stack</span>
              <h2 style={{ fontSize: '48px', fontWeight: 950, letterSpacing: '-2px', marginBottom: '24px' }}>The Arsenal of <br />Intelligent Leaders.</h2>
              <p style={{ fontSize: '18px', color: '#64748b', lineHeight: 1.7, marginBottom: '40px' }}>
                We utilize a high-performance neural stack that prioritizes 100% accuracy, secure integration, and limitless cognitive scale.
              </p>
              <div style={{ display: 'flex', gap: '40px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <Terminal size={32} color={BRAND_COLOR} />
                    <div style={{ fontSize: '13px', fontWeight: 800 }}>Python / Forge</div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <Cpu size={32} color={BRAND_COLOR} />
                    <div style={{ fontSize: '13px', fontWeight: 800 }}>Vector Core</div>
                </div>
              </div>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
              {techStack.map((tech, i) => (
                <motion.div
                  key={tech}
                  whileHover={{ y: -5, background: '#fdf2f8', borderColor: BRAND_COLOR }}
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
          <h2 style={{ fontSize: '40px', fontWeight: 900, textAlign: 'center', marginBottom: '60px', letterSpacing: '-1.5px' }}>Intelligence <span style={{ color: BRAND_COLOR }}>Briefing.</span></h2>
          <div>
            {faqs.map((f, i) => <FAQItem key={i} question={f.q} answer={f.a} />)}
          </div>
        </div>
      </section>

      {/* Footer handled in layout.tsx */}
    </div>
  );
}
