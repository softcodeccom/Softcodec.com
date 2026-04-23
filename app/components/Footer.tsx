'use client';

import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const companyLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Testimonials', href: '/testimonials' },
    { name: 'Contact', href: '/contact' },
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
        <div className="footer-grid" style={{ marginBottom: '80px' }}>
          {/* Brand Col */}
          <div>
            <Link href="/" style={{ display: 'inline-block', marginBottom: '24px' }}>
              <img src="/logo.png" alt="SoftCodec" style={{ height: '50px', filter: 'brightness(0) invert(1)' }} />
            </Link>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '15px', lineHeight: 1.7, maxWidth: '300px', marginBottom: '32px' }}>
              We build high-performance digital products for the world&apos;s most ambitious companies.
            </p>
            <div style={{ display: 'flex', gap: '12px' }}>
               {['𝕏', 'In', 'In'].map((s, i) => (
                  <div key={i} style={{ width: '40px', height: '40px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ffffff', cursor: 'pointer', transition: 'all 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--accent-purple)'} onMouseLeave={(e) => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'}>
                    {s}
                  </div>
               ))}
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

          {/* Newsletter */}
          <div>
            <h4 style={{ color: '#ffffff', fontSize: '16px', fontWeight: 700, marginBottom: '24px' }}>Newsletter</h4>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '14px', marginBottom: '20px' }}>SoftCodec insights delivered to your inbox.</p>
            <div style={{ display: 'flex', position: 'relative' }}>
               <input type="text" placeholder="Email" style={{ width: '100%', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '100px', padding: '12px 20px', color: '#ffffff', fontSize: '14px', outline: 'none' }} />
               <button style={{ position: 'absolute', right: '5px', top: '5px', bottom: '5px', background: 'var(--accent-purple)', color: '#fff', border: 'none', borderRadius: '100px', padding: '0 15px', fontSize: '12px', fontWeight: 700, cursor: 'pointer' }}>Join</button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '40px', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
          <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '13px' }}>© {currentYear} SoftCodec AI. Pakistan&apos;s #1 Agency.</p>
          <div style={{ display: 'flex', gap: '24px' }}>
             {['Privacy', 'Terms', 'Credits'].map((l) => (
                <Link key={l} href="#" style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none', fontSize: '13px' }}>{l}</Link>
             ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
