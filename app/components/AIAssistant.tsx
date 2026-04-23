'use client';

import { useState } from 'react';

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div 
        className="ai-assistant-bubble"
        onClick={() => setIsOpen(!isOpen)}
        title="AI Assistant"
      >
        <span>🤖</span>
      </div>

      {isOpen && (
        <div style={{
          position: 'fixed',
          bottom: '100px',
          right: '30px',
          width: '300px',
          background: 'rgba(2, 0, 8, 0.95)',
          backdropFilter: 'blur(20px)',
          border: '1px solid var(--accent-purple)',
          borderRadius: '20px',
          padding: '20px',
          zIndex: 9999,
          boxShadow: '0 20px 50px rgba(0, 0, 0, 0.5)',
          animation: 'fade-up 0.4s ease'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '15px' }}>
            <div className="system-dot"></div>
            <h4 style={{ color: '#fff', fontSize: '14px', margin: 0, fontFamily: 'Orbitron' }}>SOFTCODEC AI v1.0</h4>
          </div>
          <p style={{ color: 'var(--text-secondary)', fontSize: '13px', lineHeight: 1.6, margin: 0 }}>
             Greetings. I am the SoftCodec autonomous assistant. How can I facilitate your digital transformation today?
          </p>
          <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {['View Portfolio', 'Services Catalog', 'Initial Contact'].map(btn => (
               <button 
                 key={btn}
                 style={{
                   padding: '10px',
                   background: 'rgba(255,255,255,0.03)',
                   border: '1px solid rgba(255,255,255,0.1)',
                   borderRadius: '8px',
                   color: '#fff',
                   fontSize: '12px',
                   textAlign: 'left',
                   cursor: 'pointer',
                   transition: 'all 0.3s'
                 }}
                 onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--accent-purple)'}
                 onMouseLeave={(e) => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'}
               >
                 {btn}
               </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
