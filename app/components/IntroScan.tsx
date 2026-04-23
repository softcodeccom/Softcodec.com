'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

const technicalLogs = [
  "CORE_INIT_0xFF1A",
  "NEURAL_MAP_LOADED",
  "QUANTUM_STABILITY_OK",
  "DEEP_PROTOCOLS_ACTIVE",
  "AI_ENGINE_SPIN_UP",
  "USER_LAYER_SYNC",
  "PIXEL_PERFECTION_READY"
];

export default function IntroScan() {
  const [complete, setComplete] = useState(false);
  const [currentLog, setCurrentLog] = useState(0);

  useEffect(() => {
    // Cycle through logs
    const interval = setInterval(() => {
      setCurrentLog(prev => (prev + 1) % technicalLogs.length);
    }, 150);

    // End sequence
    const timer = setTimeout(() => {
      setComplete(true);
      clearInterval(interval);
    }, 2200);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);

  return (
    <AnimatePresence>
      {!complete && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0, 
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
          }}
          className="intro-scan"
          style={{
            position: 'fixed',
            inset: 0,
            background: '#020205',
            zIndex: 10000,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden'
          }}
        >
          {/* Ambient Grid Background */}
          <div style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'radial-gradient(rgba(124, 58, 237, 0.05) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
            opacity: 0.3
          }} />

          {/* Core Radial Glow */}
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            style={{
              position: 'absolute',
              width: '500px',
              height: '500px',
              background: 'radial-gradient(circle, rgba(124, 58, 237, 0.2) 0%, transparent 70%)',
              filter: 'blur(80px)',
              zIndex: 1
            }}
          />

          {/* Main Content */}
          <div style={{ position: 'relative', zIndex: 10, textAlign: 'center' }}>
            {/* Logo Wrapper */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              style={{ marginBottom: '40px' }}
            >
              <img 
                src="/logo.png" 
                alt="SoftCodec Logo" 
                style={{ 
                  height: '80px',
                  filter: 'brightness(1.5) drop-shadow(0 0 30px rgba(124, 58, 237, 0.5))'
                }} 
              />
            </motion.div>

            {/* Technical Logs */}
            <div style={{ height: '20px', marginBottom: '32px' }}>
              <motion.div
                key={currentLog}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                style={{
                  fontFamily: 'Space Mono, monospace',
                  fontSize: '11px',
                  color: '#7c3aed',
                  letterSpacing: '2px',
                  fontWeight: 600,
                  textTransform: 'uppercase'
                }}
              >
                {technicalLogs[currentLog]}
              </motion.div>
            </div>

            {/* Progress Bar Container */}
            <div style={{
              width: '280px',
              height: '2px',
              background: 'rgba(255, 255, 255, 0.05)',
              borderRadius: '2px',
              overflow: 'hidden',
              margin: '0 auto 16px',
              position: 'relative'
            }}>
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.8, ease: "easeInOut" }}
                style={{
                  height: '100%',
                  background: 'linear-gradient(90deg, #7c3aed, #06b6d4)',
                  boxShadow: '0 0 10px rgba(124, 58, 237, 0.5)'
                }}
              />
            </div>

            {/* Status Text */}
            <motion.div
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              style={{
                fontFamily: 'Orbitron, sans-serif',
                fontSize: '12px',
                color: '#fff',
                letterSpacing: '5px',
                fontWeight: 600,
                textTransform: 'uppercase'
              }}
            >
              Initializing Systems...
            </motion.div>
          </div>

          {/* Corner Technical Graphics */}
          <div style={{
            position: 'absolute',
            bottom: '40px',
            right: '40px',
            fontFamily: 'Space Mono, monospace',
            fontSize: '10px',
            color: 'rgba(255,255,255,0.1)',
            textAlign: 'right',
            letterSpacing: '1px'
          }}>
            SYSTEM_BOOT_SECURE<br />
            PROTOCOL_v4.2.0
          </div>

          {/* Scanning Line */}
          <motion.div
            initial={{ top: '-10%' }}
            animate={{ top: '110%' }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            style={{
              position: 'absolute',
              left: 0,
              width: '100%',
              height: '4px',
              background: 'linear-gradient(90deg, transparent, rgba(124, 58, 237, 0.3), transparent)',
              boxShadow: '0 0 20px rgba(124, 58, 237, 0.2)',
              zIndex: 20
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
