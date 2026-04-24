'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, X } from 'lucide-react';
import Link from 'next/link';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already accepted/declined cookies
    const consent = localStorage.getItem('softcodec_cookie_consent');
    if (!consent) {
      // Small delay so it doesn't pop up instantly on initial load
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('softcodec_cookie_consent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('softcodec_cookie_consent', 'declined');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', damping: 20, stiffness: 100 }}
          style={{
            position: 'fixed',
            bottom: '24px',
            left: '24px',
            right: '24px',
            maxWidth: '480px',
            margin: '0 auto',
            background: 'rgba(3, 3, 10, 0.95)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '24px',
            padding: '24px',
            boxShadow: '0 40px 80px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(124, 58, 237, 0.1)',
            zIndex: 9999,
            display: 'flex',
            flexDirection: 'column',
            gap: '16px'
          }}
        >
          {/* Close button */}
          <button 
            onClick={handleDecline}
            style={{ position: 'absolute', top: '16px', right: '16px', background: 'transparent', border: 'none', color: 'rgba(255,255,255,0.4)', cursor: 'pointer', padding: '4px' }}
          >
            <X size={16} />
          </button>

          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
            <div style={{ 
              width: '40px', height: '40px', borderRadius: '12px', 
              background: 'rgba(124, 58, 237, 0.15)', border: '1px solid rgba(124, 58, 237, 0.3)',
              display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
              color: '#a78bfa'
            }}>
              <Cookie size={20} />
            </div>
            <div>
              <h4 style={{ color: '#ffffff', fontSize: '16px', fontWeight: 800, marginBottom: '6px' }}>Cookie Protocol</h4>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '13px', lineHeight: 1.6 }}>
                We use cookies to optimize site functionality and give you the best possible experience. 
                <Link href="/privacy" style={{ color: '#a78bfa', textDecoration: 'none', marginLeft: '4px' }}>Learn more</Link>
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '12px', marginTop: '4px' }}>
            <button 
              onClick={handleDecline}
              style={{ 
                flex: 1, padding: '10px', borderRadius: '10px', 
                background: 'rgba(255,255,255,0.05)', color: '#fff', border: '1px solid rgba(255,255,255,0.1)',
                fontSize: '13px', fontWeight: 700, cursor: 'pointer'
              }}
            >
              Decline
            </button>
            <button 
              onClick={handleAccept}
              style={{ 
                flex: 1, padding: '10px', borderRadius: '10px', 
                background: '#7c3aed', color: '#fff', border: 'none',
                fontSize: '13px', fontWeight: 700, cursor: 'pointer',
                boxShadow: '0 10px 20px rgba(124, 58, 237, 0.3)'
              }}
            >
              Accept All
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
