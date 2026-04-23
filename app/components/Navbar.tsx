'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';

const serviceItems = [
  { icon: '🌐', title: 'Web Development', desc: 'Next.js, React & modern web apps', href: '/services/web-development', color: '#7c3aed' },
  { icon: '📱', title: 'Mobile Apps', desc: 'iOS & Android with React Native', href: '/services/mobile-apps', color: '#06b6d4' },
  { icon: '🤖', title: 'AI & Automation', desc: 'Smart ML & AI-powered solutions', href: '/services/ai-automation', color: '#ec4899' },
  { icon: '🛒', title: 'E-Commerce', desc: 'High-converting online stores', href: '/services/ecommerce', color: '#10b981' },
  { icon: '☁️', title: 'Cloud & DevOps', desc: 'Scalable infra & CI/CD pipelines', href: '/services/cloud-devops', color: '#3b82f6' },
  { icon: '🎨', title: 'UI/UX Design', desc: 'Award-winning design systems', href: '/services/ui-ux-design', color: '#f59e0b' },
  { icon: '🔍', title: 'SEO Optimization', desc: 'Data-driven search rankings', href: '/services/seo', color: '#14b8a6' },
  { icon: '📢', title: 'Digital Marketing', desc: 'High-ROI growth campaigns', href: '/services/digital-marketing', color: '#f43f5e' },
  { icon: '✒️', title: 'Graphic Design', desc: 'Premium branding & assets', href: '/services/graphic-design', color: '#8b5cf6' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLLIElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setServicesOpen(false);
    setMobileOpen(false);
  }, [pathname]);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setServicesOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setServicesOpen(false), 150);
  };

  const links = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services', hasDropdown: true },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Testimonials', href: '/testimonials' },
  ];

  const isServicesActive = pathname.startsWith('/services');

  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <Link href="/" className="nav-logo" style={{ display: 'flex', alignItems: 'center' }}>
        <img src="/logo.png" alt="SoftCodec Logo" style={{ height: '42px', width: 'auto', objectFit: 'contain' }} />
      </Link>

      <ul className="nav-links hide-mobile">
        {links.map((link) =>
          link.hasDropdown ? (
            <li
              key={link.href}
              ref={dropdownRef}
              style={{ position: 'relative' }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                href={link.href}
                style={{ color: isServicesActive ? 'var(--accent-purple)' : undefined, display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 500 }}
              >
                {link.label}
                <svg
                  width="10" height="10" viewBox="0 0 10 10" fill="none"
                  style={{ transition: 'transform 0.3s ease', transform: servicesOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                >
                  <path d="M1 3L5 7L9 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>

              {/* Premium Mega Dropdown */}
              <div style={{
                position: 'absolute',
                top: 'calc(100% + 16px)',
                left: '50%',
                transform: servicesOpen ? 'translateX(-50%) translateY(0px) scale(1)' : 'translateX(-50%) translateY(-8px) scale(0.97)',
                width: '920px',
                opacity: servicesOpen ? 1 : 0,
                visibility: servicesOpen ? 'visible' : 'hidden',
                transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                zIndex: 1000,
                borderRadius: '24px',
                overflow: 'hidden',
                boxShadow: '0 32px 80px rgba(0,0,0,0.1), 0 0 0 1px rgba(0,0,0,0.05)',
              }}>
                {/* Ambient glow top */}
                <div style={{
                  position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)',
                  width: '300px', height: '1px',
                  background: 'linear-gradient(90deg, transparent, rgba(124,58,237,0.8), rgba(6,182,212,0.6), transparent)',
                  zIndex: 2,
                }} />

                <div style={{ display: 'flex', background: 'rgba(255, 255, 255, 0.98)', backdropFilter: 'blur(30px)', WebkitBackdropFilter: 'blur(30px)' }}>

                  {/* Left Panel — Premium Branding (Dark Theme) */}
                  <div style={{
                    width: '260px', flexShrink: 0, padding: '32px',
                    background: '#020205',
                    display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
                    position: 'relative', overflow: 'hidden'
                  }}>
                    {/* Ambient Glows */}
                    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'radial-gradient(circle at top left, rgba(124,58,237,0.15), transparent 60%)', zIndex: 0 }} />
                    <div style={{ position: 'absolute', bottom: 0, right: 0, width: '100%', height: '100%', background: 'radial-gradient(circle at bottom right, rgba(6,182,212,0.1), transparent 60%)', zIndex: 0 }} />
                    
                    <div style={{ position: 'relative', zIndex: 1 }}>
                      <div style={{
                        display: 'inline-flex', alignItems: 'center', gap: '8px',
                        background: 'rgba(124,58,237,0.15)', border: '1px solid rgba(124,58,237,0.3)',
                        borderRadius: '100px', padding: '6px 14px', marginBottom: '24px',
                      }}>
                        <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#a855f7', boxShadow: '0 0 10px #a855f7' }} />
                        <span style={{ fontSize: '10px', fontWeight: 800, color: '#e9d5ff', letterSpacing: '1px', textTransform: 'uppercase' }}>SERVICES</span>
                      </div>
                      <div style={{ fontSize: '24px', fontWeight: 800, color: '#fff', lineHeight: 1.2, marginBottom: '16px' }}>
                        Architecting<br />
                        <span className="gradient-text">Excellence.</span>
                      </div>
                      <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)', lineHeight: 1.6 }}>
                        End-to-end digital solutions scaling the world&apos;s most ambitious businesses.
                      </div>
                    </div>
                    <Link
                      href="/services"
                      style={{
                        position: 'relative', zIndex: 1,
                        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                        padding: '12px 20px', borderRadius: '14px',
                        background: 'linear-gradient(135deg, #7c3aed, #06b6d4)',
                        color: '#fff', fontSize: '13px', fontWeight: 700,
                        textDecoration: 'none', marginTop: '32px',
                        boxShadow: '0 10px 24px rgba(124,58,237,0.3)',
                        transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                      }}
                      onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 16px 32px rgba(124,58,237,0.5)'; }}
                      onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 10px 24px rgba(124,58,237,0.3)'; }}
                    >
                      View All Services <span>→</span>
                    </Link>
                  </div>

                  {/* Right Panel — 3-Column Service Grid */}
                  <div style={{ flex: 1, padding: '24px' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px' }}>
                      {serviceItems.map((s) => (
                        <Link
                          key={s.href}
                          href={s.href}
                          style={{
                            display: 'flex', gap: '12px', alignItems: 'center',
                            textDecoration: 'none', padding: '12px 14px',
                            borderRadius: '14px',
                            border: '1px solid rgba(0,0,0,0.04)',
                            background: 'rgba(0,0,0,0.02)',
                            transition: 'all 0.25s ease',
                            position: 'relative', overflow: 'hidden',
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.background = `${s.color}15`;
                            e.currentTarget.style.borderColor = `${s.color}50`;
                            e.currentTarget.style.transform = 'translateY(-2px)';
                            e.currentTarget.style.boxShadow = `0 8px 24px ${s.color}20`;
                            const glow = e.currentTarget.querySelector('.svc-glow') as HTMLElement;
                            if (glow) glow.style.opacity = '1';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.background = 'rgba(0,0,0,0.02)';
                            e.currentTarget.style.borderColor = 'rgba(0,0,0,0.04)';
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = 'none';
                            const glow = e.currentTarget.querySelector('.svc-glow') as HTMLElement;
                            if (glow) glow.style.opacity = '0';
                          }}
                        >
                          {/* Subtle corner glow */}
                          <div className="svc-glow" style={{
                            position: 'absolute', top: '-20px', right: '-20px',
                            width: '60px', height: '60px', borderRadius: '50%',
                            background: s.color, filter: 'blur(20px)',
                            opacity: 0, transition: 'opacity 0.3s ease',
                          }} />
                          <div style={{
                            width: '38px', height: '38px', borderRadius: '10px', flexShrink: 0,
                            background: `${s.color}18`,
                            border: `1px solid ${s.color}35`,
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            fontSize: '17px', position: 'relative', zIndex: 1,
                            boxShadow: `0 4px 12px ${s.color}20`,
                          }}>{s.icon}</div>
                          <div style={{ position: 'relative', zIndex: 1 }}>
                            <div style={{ color: '#1e293b', fontWeight: 600, fontSize: '13px' }}>{s.title}</div>
                            <div style={{ color: 'rgba(15,23,42,0.5)', fontSize: '11px', marginTop: '2px', lineHeight: 1.4 }}>{s.desc}</div>
                          </div>
                        </Link>
                      ))}
                    </div>

                    {/* Bottom tagline - Spans full width of the grid */}
                    <div style={{
                      marginTop: '16px', padding: '12px 20px',
                      background: 'rgba(255,255,255,0.5)',
                      borderRadius: '14px', border: '1px solid rgba(0,0,0,0.04)',
                      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <span style={{ fontSize: '16px' }}>⚡</span>
                        <span style={{ fontSize: '12px', color: 'rgba(15,23,42,0.6)', fontWeight: 600 }}>
                          Architecting world-class software since <span style={{ color: '#7c3aed', fontWeight: 800 }}>2020</span>
                        </span>
                      </div>
                      <span style={{ fontSize: '11px', fontWeight: 700, color: 'rgba(6,182,212,0.8)', background: 'rgba(6,182,212,0.1)', padding: '4px 12px', borderRadius: '100px' }}>
                        50+ Masterpieces Delivered
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ) : (
            <li key={link.href}>
              <Link
                href={link.href}
                style={{ color: pathname === link.href ? 'var(--accent-purple)' : undefined, fontWeight: 500 }}
              >
                {link.label}
              </Link>
            </li>
          )
        )}
      </ul>

      <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
        <div className="system-status hide-mobile" style={{ 
          marginRight: '8px',
          background: 'rgba(6, 182, 212, 0.05)',
          padding: '6px 12px',
          borderRadius: '100px',
          border: '1px solid rgba(6, 182, 212, 0.1)'
        }}>
          <div className="system-dot" style={{ background: '#06b6d4', boxShadow: '0 0 10px #06b6d4' }} />
          <span style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '1px', color: '#06b6d4' }}>SYSTEM ONLINE</span>
        </div>
        <Link href="/contact" className="btn-primary" style={{ padding: '8px 20px', fontSize: '13px', fontWeight: 700 }}>
          Get Started
        </Link>
        <button className={`hamburger ${mobileOpen ? 'open' : ''}`} onClick={() => setMobileOpen(!mobileOpen)} style={{ background: 'none', border: 'none' }}>
           <div />
           <div />
        </button>
      </div>


      {mobileOpen && (
        <div style={{
          position: 'fixed', top: '70px', left: 0, right: 0,
          background: 'rgba(255,255,255,0.98)', backdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(0,0,0,0.08)',
          padding: '20px', zIndex: 999,
          display: 'flex', flexDirection: 'column', gap: '4px',
          maxHeight: 'calc(100vh - 70px)', overflowY: 'auto',
        }}>
          {links.map((link) =>
            link.hasDropdown ? (
              <div key={link.href}>
                <button
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  style={{
                    color: isServicesActive ? '#7c3aed' : '#475569',
                    textDecoration: 'none', fontSize: '16px', fontWeight: 500,
                    padding: '12px 0', borderBottom: '1px solid rgba(0,0,0,0.05)',
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    width: '100%', background: 'none', border: 'none', cursor: 'pointer',
                  }}
                >
                  Services
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                    style={{ transform: mobileServicesOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s', color: '#64748b' }}>
                    <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                {mobileServicesOpen && (
                  <div style={{ paddingLeft: '16px', paddingBottom: '8px' }}>
                    {serviceItems.map((s) => (
                      <Link
                        key={s.href}
                        href={s.href}
                        onClick={() => setMobileOpen(false)}
                        style={{
                          display: 'flex', alignItems: 'center', gap: '12px',
                          padding: '10px 0', textDecoration: 'none',
                          borderBottom: '1px solid rgba(255,255,255,0.03)',
                        }}
                      >
                        <span style={{ fontSize: '20px' }}>{s.icon}</span>
                        <span style={{ fontSize: '14px', color: pathname === s.href ? s.color : '#475569', fontWeight: 500 }}>{s.title}</span>
                      </Link>
                    ))}
                    <Link
                      href="/services"
                      onClick={() => setMobileOpen(false)}
                      style={{ display: 'block', padding: '10px 0', fontSize: '13px', color: '#7c3aed', fontWeight: 600, textDecoration: 'none' }}
                    >
                      View All Services →
                    </Link>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                style={{
                  color: pathname === link.href ? '#7c3aed' : '#475569',
                  textDecoration: 'none', fontSize: '16px', fontWeight: 500,
                  padding: '12px 0', borderBottom: '1px solid rgba(0,0,0,0.05)',
                  display: 'block',
                }}
              >
                {link.label}
              </Link>
            )
          )}
          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            style={{
              marginTop: '12px', display: 'block', textAlign: 'center',
              padding: '14px', borderRadius: '12px',
              background: 'linear-gradient(135deg, #7c3aed, #06b6d4)',
              color: '#fff', textDecoration: 'none', fontWeight: 700,
            }}
          >
            Get Started →
          </Link>
        </div>
      )}
    </nav>
  );
}
