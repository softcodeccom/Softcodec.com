'use client';

import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

export default function AboutHero() {
  return (
    <section style={{ 
      minHeight: '90vh', 
      display: 'flex', 
      alignItems: 'center', 
      position: 'relative', 
      overflow: 'hidden', 
      background: '#ffffff', // Requested White Background
      padding: '80px 0 60px'
    }}>
      {/* Subtle Grid Pattern for Texture */}
      <div className="grid-bg" style={{ opacity: 0.05, filter: 'invert(1)' }} />
      
      {/* Soft Ambient Accents for Light Mode */}
      <div style={{ 
        position: 'absolute', 
        top: '20%', 
        left: '50%', 
        transform: 'translate(-50%, -50%)', 
        width: '1000px', 
        height: '600px', 
        background: 'radial-gradient(circle, rgba(124, 58, 237, 0.05) 0%, transparent 70%)', 
        filter: 'blur(80px)', 
        zIndex: 0 
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <div className="grid-2" style={{ alignItems: 'center', gap: '40px' }}>
          
          <div className="reveal-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div style={{ 
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: '8px', 
                padding: '8px 16px', 
                borderRadius: '100px', 
                background: 'rgba(124, 58, 237, 0.05)', 
                border: '1px solid rgba(124, 58, 237, 0.1)', 
                marginBottom: '32px' 
              }}>
                <div className="system-dot" />
                <span style={{ fontSize: '11px', fontWeight: 800, color: '#7c3aed', letterSpacing: '2px', textTransform: 'uppercase' }}>Established 2019</span>
              </div>

              <h1 style={{ 
                fontFamily: 'Orbitron, sans-serif', 
                fontSize: 'clamp(40px, 5vw, 68px)', 
                fontWeight: 900, 
                lineHeight: 1.05, 
                letterSpacing: '-1.5px', 
                color: '#0f172a', // Dark text for white background
                marginBottom: '32px' 
              }}>
                Empowering the World, <br />
                <span className="gradient-text">Byte by Byte.</span>
              </h1>

              <p style={{ 
                fontSize: 'clamp(17px, 2vw, 20px)', 
                color: '#475569', // Gray text for better readability
                lineHeight: 1.7, 
                maxWidth: '600px', 
                marginBottom: '48px' 
              }}>
                At SoftCodec, we don't just write code; we build the digital foundation for tomorrow's leaders. Our mission is to transform complex challenges into elegant, scalable solutions that drive human progress.
              </p>

              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <Link href="/contact" className="btn-primary" style={{ padding: '18px 40px' }}>
                  <span>Initiate Project</span>
                  <ChevronRight size={18} style={{ marginLeft: '8px' }} />
                </Link>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', paddingLeft: '8px' }}>
                  <div style={{ display: 'flex', gap: '-8px' }}>
                    {[1, 2, 3].map(i => (
                      <div key={i} style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#f1f5f9', border: '2px solid #ffffff', marginLeft: i === 1 ? 0 : '-10px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px', color: '#94a3b8' }}>👤</div>
                    ))}
                  </div>
                  <div style={{ fontSize: '13px', color: '#94a3b8', fontWeight: 600 }}>Trusted by 45+ Global Teams</div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="reveal-right" style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
            {/* Soft Backlight Accent */}
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.2, 0.1]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              style={{ 
                position: 'absolute', 
                width: '400px', 
                height: '400px', 
                background: 'radial-gradient(circle, rgba(124, 58, 237, 0.1) 0%, transparent 70%)', 
                filter: 'blur(50px)',
                zIndex: -1
              }}
            />
            
            <motion.div
              animate={{ 
                y: [0, -15, 0],
                rotateZ: [0, 1, 0]
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              style={{ position: 'relative' }}
            >
              <img 
                src="/about-hero-light.png" // Using the image on white background
                alt="SoftCodec IT Excellence Icon" 
                style={{ 
                  width: '100%', 
                  maxWidth: '650px', 
                  height: 'auto', 
                  display: 'block',
                  transform: 'scaleX(-1)', // Flip horizontally to face the text
                  filter: 'drop-shadow(0 30px 60px rgba(0,0,0,0.08))' // Soft shadow for light mode
                }} 
              />
              
              {/* Floating Minimalist Stat Cards */}
              <motion.div 
                animate={{ x: [0, 8, 0], y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
                style={{ 
                  position: 'absolute', 
                  top: '15%', 
                  right: '0%', 
                  padding: '16px 24px', 
                  borderRadius: '20px', 
                  background: 'rgba(255, 255, 255, 0.9)', 
                  border: '1px solid rgba(0, 0, 0, 0.05)',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                  backdropFilter: 'blur(10px)'
                }}
              >
                <div style={{ color: '#06b6d4', fontSize: '10px', fontWeight: 900, marginBottom: '4px', letterSpacing: '1px' }}>SYSTEM HEALTH</div>
                <div style={{ fontSize: '18px', fontWeight: 800, color: '#0f172a' }}>99.9%</div>
              </motion.div>

              <motion.div 
                animate={{ x: [0, -8, 0], y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                style={{ 
                  position: 'absolute', 
                  bottom: '25%', 
                  left: '0%', 
                  padding: '16px 24px', 
                  borderRadius: '20px', 
                  background: 'rgba(255, 255, 255, 0.9)', 
                  border: '1px solid rgba(0, 0, 0, 0.05)',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                  backdropFilter: 'blur(10px)'
                }}
              >
                <div style={{ color: '#7c3aed', fontSize: '10px', fontWeight: 900, marginBottom: '4px', letterSpacing: '1px' }}>LATENCY</div>
                <div style={{ fontSize: '18px', fontWeight: 800, color: '#0f172a' }}>12ms</div>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
