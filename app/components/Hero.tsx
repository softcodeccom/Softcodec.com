'use client';

import { useState, useEffect } from 'react';

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setMounted(true);
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const scrollToPortfolio = () => {
    document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      paddingTop: '80px' // Refined space for better vertical balance
    }}>
      {/* Background Video */}
      <div style={{
        position: 'absolute',
        inset: 0,
        zIndex: 0,
        background: '#000' // Fallback
      }}>
        {mounted && (
          <video
            autoPlay
            muted
            loop
            playsInline
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              opacity: 0.9, // Increased for HD clarity
            }}
          >
            <source src="/WhatsApp%20Video%202026-04-01%20at%2018.56.28.mp4" type="video/mp4" />
          </video>
        )}
        {/* Refined Black Overlay with reduced opacity */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(0, 0, 0, 0.55)', // Increased for better text contrast
          zIndex: 1
        }} />
      </div>

      <div className="grid-bg" />

      {/* Content */}
      <div className="container" style={{ position: 'relative', zIndex: 10, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div className="reveal" style={{ animationDelay: '0.1s' }}>
            <span style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '8px 16px',
              background: 'rgba(139, 92, 246, 0.1)',
              border: '1px solid rgba(139, 92, 246, 0.2)',
              borderRadius: '100px',
              fontSize: '13px',
              fontWeight: 600,
              color: '#a78bfa',
              marginBottom: '32px'
            }}>
              <div className="system-dot" />
              PAKISTAN&apos;S TOP AI AGENCY
            </span>
          </div>

          <h1 className="section-heading reveal" style={{ animationDelay: '0.2s', color: '#ffffff' }}>
            Transforming Business <br />
            with <span className="gradient-text">Intelligent Code</span>
          </h1>

          <p className="section-subtext reveal" style={{ animationDelay: '0.3s', fontSize: '20px', color: '#ffffff', margin: '0 auto 40px', textShadow: '0 2px 10px rgba(0,0,0,0.3)', fontWeight: 500 }}>
            We engineer world-class AI solutions, blazing-fast web apps, and modern mobile experiences that drive real business growth.
          </p>

          <div className="reveal" style={{ animationDelay: '0.4s', display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <button onClick={scrollToPortfolio} className="btn-primary">
              <span>View Case Studies</span>
            </button>
            <button onClick={scrollToContact} className="btn-outline" style={{ color: '#fff', border: '1px solid rgba(255, 255, 255, 0.2)', background: 'rgba(255,255,255,0.05)' }}>
              <span>Hire Us</span>
            </button>
          </div>
        </div>
      </div>

      {/* Elite Scroll Indicator (Pill Design) */}
      <div
        className="hide-mobile"
        style={{
          position: 'absolute',
          bottom: '0',
          left: '50%',
          transform: 'translate(-50%, 50%)',
          zIndex: 100,
          cursor: 'pointer',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px'
        }}
        onClick={() => {
          const nextSection = document.getElementById('about');
          if (nextSection) nextSection.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <div style={{
          padding: '12px 16px',
          background: 'rgba(255, 255, 255, 0.05)',
          backdropFilter: 'blur(16px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderRadius: '100px',
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          boxShadow: '0 4px 24px rgba(0,0,0,0.2)',
          transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
        }}>
          <div style={{
            width: '16px',
            height: '24px',
            border: '1.5px solid rgba(255, 255, 255, 0.3)',
            borderRadius: '8px',
            display: 'flex',
            justifyContent: 'center',
            paddingTop: '3px'
          }}>
            <div style={{
              width: '2px',
              height: '5px',
              background: 'var(--accent-purple)',
              borderRadius: '1px',
              animation: 'scroll-dot 2s infinite'
            }} />
          </div>
          <span style={{
            color: '#fff',
            fontSize: '10px',
            fontWeight: 700,
            letterSpacing: '2px',
            textTransform: 'uppercase',
            opacity: 0.8
          }}>Scroll</span>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-dot {
          0% { transform: translateY(0); opacity: 1; }
          50% { transform: translateY(6px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
      `}</style>
    </section>
  );
}
