'use client';

import { motion } from 'framer-motion';


export default function BlobImage() {
  return (
    <div style={{ position: 'relative', width: '100%', maxWidth: '560px', margin: '0 auto' }}>
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 1, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{ position: 'relative', zIndex: 1 }}
      >
        {/* SVG Mask Container */}
        <svg width="0" height="0" style={{ position: 'absolute' }}>
          <defs>
            <clipPath id="blobMask" clipPathUnits="objectBoundingBox">
              <path d="M0.91,0.342 C0.941,0.473,0.912,0.614,0.822,0.72 C0.732,0.826,0.581,0.898,0.428,0.913 C0.275,0.928,0.119,0.887,0.05,0.767 C-0.019,0.647,-0.001,0.448,0.07,0.298 C0.141,0.148,0.265,0.046,0.408,0.012 C0.551,-0.022,0.713,0.013,0.814,0.108 C0.915,0.203,0.879,0.211,0.91,0.342" />
            </clipPath>
          </defs>
        </svg>

        {/* Glow Background */}
        <div style={{
          position: 'absolute',
          inset: '10%',
          background: 'radial-gradient(circle, var(--accent-purple) 0%, transparent 70%)',
          filter: 'blur(60px)',
          opacity: 0.3,
          zIndex: -1
        }} />

        {/* Image with Mask */}
        <div style={{
          position: 'relative',
          padding: '12px',
          background: 'rgba(255, 255, 255, 0.05)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderRadius: '40px',
          overflow: 'hidden',
          clipPath: 'url(#blobMask)',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
        }}>
          <img
            src="/team_blob.png"
            alt="SoftCodec Innovation Team"
            style={{
              width: '100%',
              height: 'auto',
              display: 'block',
              filter: 'contrast(1.1) brightness(1.1)',
              transform: 'scale(1.05)'
            }}
          />
        </div>

        {/* Floating Accent Dots */}
        <div style={{ position: 'absolute', bottom: '15%', left: '5%', width: '12px', height: '12px', borderRadius: '50%', background: '#06b6d4', boxShadow: '0 0 15px #06b6d4' }} />
        <div style={{ position: 'absolute', top: '10%', left: '40%', width: '8px', height: '8px', borderRadius: '50%', background: '#a78bfa', boxShadow: '0 0 10px #a78bfa' }} />
      </motion.div>
    </div>
  );
}
