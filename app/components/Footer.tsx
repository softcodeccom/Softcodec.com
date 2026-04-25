'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Phone, Mail, Linkedin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [subStatus, setSubStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubscribe = async () => {
    if (!email || !email.includes('@')) return;
    setSubStatus('loading');
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw new Error('Failed');
      setSubStatus('success');
      setEmail('');
      setTimeout(() => setSubStatus('idle'), 4000);
    } catch {
      setSubStatus('error');
      setTimeout(() => setSubStatus('idle'), 3000);
    }
  };


  const companyLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Testimonials', href: '/testimonials' },
    { name: 'Contact', href: '/contact' },
    { name: 'Careers', href: '/careers' },
  ];

  const serviceLinks = [
    { name: 'Web Apps', href: '/services/web-development' },
    { name: 'Mobile Apps', href: '/services/mobile-apps' },
    { name: 'AI Solutions', href: '/services/ai-automation' },
    { name: 'UI/UX Design', href: '/services/ui-ux-design' },
  ];

  return (
    <footer className="section" style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingBottom: '40px', background: 'rgba(3, 3, 10, 0.95)', color: '#ffffff' }}>
      <div className="container">
        <div className="footer-grid" style={{ marginBottom: '60px', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
          {/* Brand Col */}
          <div style={{ gridColumn: 'span 1' }}>
            <Link href="/" style={{ display: 'inline-block', marginBottom: '24px' }}>
              <img src="/logo.png" alt="SoftCodec" style={{ height: '50px', filter: 'brightness(0) invert(1)' }} />
            </Link>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '15px', lineHeight: 1.7, maxWidth: '300px', marginBottom: '32px' }}>
              We build high-performance digital products for the world&apos;s most ambitious companies.
            </p>
            
            {/* Contact Info */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '32px' }}>
               <a href="tel:+923076209331" style={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none', fontSize: '15px', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '12px', transition: 'all 0.3s' }} className="footer-link">
                  <div style={{ width: '32px', height: '32px', borderRadius: '10px', background: 'rgba(124, 58, 237, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                     <Phone size={14} color="var(--accent-purple)" />
                  </div>
                  +92-307-6209331
               </a>
               <a href="mailto:softcodec.com@gmail.com" style={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none', fontSize: '15px', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '12px', transition: 'all 0.3s' }} className="footer-link">
                  <div style={{ width: '32px', height: '32px', borderRadius: '10px', background: 'rgba(6, 182, 212, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                     <Mail size={14} color="var(--accent-cyan)" />
                  </div>
                  softcodec.com@gmail.com
               </a>
            </div>

            <div style={{ display: 'flex', gap: '12px' }}>
               <a href="https://pk.linkedin.com/company/softcodec" target="_blank" rel="noopener noreferrer" style={{ width: '44px', height: '44px', borderRadius: '14px', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.03)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ffffff', transition: 'all 0.3s' }} onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#0077b5'; e.currentTarget.style.background = 'rgba(0, 119, 181, 0.1)'; }} onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.background = 'rgba(255,255,255,0.03)'; }}>
                  <Linkedin size={20} />
               </a>
            </div>
          </div>

          {/* Links 1 */}
          <div>
            <h4 style={{ color: '#ffffff', fontSize: '16px', fontWeight: 700, marginBottom: '24px' }}>Services</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {serviceLinks.map((l) => (
                <li key={l.name}><Link href={l.href} style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none', fontSize: '14px', transition: 'color 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent-purple)'} onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.6)'}>{l.name}</Link></li>
              ))}
            </ul>
          </div>

          {/* Links 2 */}
          <div>
            <h4 style={{ color: '#ffffff', fontSize: '16px', fontWeight: 700, marginBottom: '24px' }}>Agency</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {companyLinks.map((l) => (
                <li key={l.name}><Link href={l.href} style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none', fontSize: '14px', transition: 'color 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent-purple)'} onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.6)'}>{l.name}</Link></li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Section - "Ichy" (Below) */}
        <div style={{ 
          background: 'rgba(255,255,255,0.02)', 
          border: '1px solid rgba(255,255,255,0.05)', 
          borderRadius: '32px', 
          padding: '40px', 
          marginBottom: '60px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '30px'
        }}>
          <div style={{ maxWidth: '400px' }}>
            <h4 style={{ color: '#ffffff', fontSize: '20px', fontWeight: 800, marginBottom: '8px' }}>Join the Arsenal</h4>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '14px' }}>Get high-performance digital insights delivered to your inbox.</p>
          </div>
          <div style={{ display: 'flex', position: 'relative', width: '100%', maxWidth: '400px', flexDirection: 'column', gap: '8px' }}>
             <div style={{ display: 'flex', position: 'relative', width: '100%' }}>
               <input
                 type="email"
                 placeholder="Enter your email"
                 value={email}
                 onChange={(e) => setEmail(e.target.value)}
                 onKeyDown={(e) => e.key === 'Enter' && handleSubscribe()}
                 disabled={subStatus === 'loading' || subStatus === 'success'}
                 style={{ width: '100%', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '100px', padding: '16px 24px', color: '#ffffff', fontSize: '14px', outline: 'none' }}
               />
               <button
                 onClick={handleSubscribe}
                 disabled={subStatus === 'loading' || subStatus === 'success'}
                 style={{ position: 'absolute', right: '6px', top: '6px', bottom: '6px', background: subStatus === 'success' ? '#10b981' : 'var(--accent-purple)', color: '#fff', border: 'none', borderRadius: '100px', padding: '0 25px', fontSize: '13px', fontWeight: 800, cursor: subStatus === 'loading' ? 'wait' : 'pointer', transition: 'all 0.3s', whiteSpace: 'nowrap' }}
               >
                 {subStatus === 'loading' ? 'Sending...' : subStatus === 'success' ? '✓ Done!' : 'Subscribe'}
               </button>
             </div>
             {subStatus === 'success' && <p style={{ color: '#10b981', fontSize: '12px', paddingLeft: '16px', fontWeight: 600 }}>✓ Subscribed! You will receive our updates soon.</p>}
             {subStatus === 'error' && <p style={{ color: '#ef4444', fontSize: '12px', paddingLeft: '16px', fontWeight: 600 }}>Something went wrong. Please try again.</p>}
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '40px', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
          <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '13px' }}>© {currentYear} SoftCodec AI. Pakistan&apos;s #1 Agency.</p>
          <div style={{ display: 'flex', gap: '24px' }}>
             <Link href="/privacy" style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none', fontSize: '13px', transition: 'color 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.color = '#fff'} onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.4)'}>Privacy</Link>
             <Link href="/terms" style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none', fontSize: '13px', transition: 'color 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.color = '#fff'} onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.4)'}>Terms</Link>
             <Link href="/credits" style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none', fontSize: '13px', transition: 'color 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.color = '#fff'} onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.4)'}>Credits</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
