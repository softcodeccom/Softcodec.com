'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { LayoutDashboard, Users, MessageSquare, Briefcase, Settings, LogOut, Code2, Moon, Sun, Menu, X, Loader2, GraduationCap } from 'lucide-react';
import { supabase } from '../../lib/supabase';
import { AdminThemeProvider, useAdminTheme } from './ThemeProvider';

function AdminSidebar({ isOpen, setIsOpen }: { isOpen: boolean, setIsOpen: (val: boolean) => void }) {
  const pathname = usePathname();
  const { theme, toggleTheme } = useAdminTheme();

  const menuItems = [
    { name: 'Dashboard', path: '/admin', icon: LayoutDashboard },
    { name: 'Projects', path: '/admin/projects', icon: Code2 },
    { name: 'Job Listings', path: '/admin/jobs', icon: Briefcase },
    { name: 'Applications', path: '/admin/careers', icon: GraduationCap },
    { name: 'Testimonials', path: '/admin/testimonials', icon: MessageSquare },
    { name: 'Leads / Contacts', path: '/admin/contacts', icon: Users },
    { name: 'Settings', path: '/admin/settings', icon: Settings },
  ];

  return (
    <>
      {/* Mobile Backdrop */}
      {isOpen && (
        <div 
          onClick={() => setIsOpen(false)}
          style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', zIndex: 40, backdropFilter: 'blur(4px)' }} 
        />
      )}

      <aside className={`admin-sidebar ${isOpen ? 'open' : ''}`}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '60px' }}>
          {/* Brand */}
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
            <img 
              src="/logo.png" 
              alt="SoftCodec" 
              style={{ 
                height: '40px', 
                width: 'auto',
                filter: theme === 'light' ? 'brightness(0)' : 'none',
                transition: 'all 0.3s ease'
              }} 
            />
            <div style={{ display: 'none' }}>
               <h1 style={{ fontSize: '18px', fontWeight: 900, letterSpacing: '-0.5px' }}>SoftCodec<span style={{ color: '#06b6d4' }}>.</span></h1>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
               <span style={{ fontSize: '10px', color: 'var(--admin-text-muted)', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 800 }}>Admin Console</span>
            </div>
          </Link>
        </div>

        {/* Navigation */}
        <nav style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.path;

            return (
              <Link 
                key={item.path} 
                href={item.path}
                onClick={() => window.innerWidth <= 1024 && setIsOpen(false)}
                style={{
                  display: 'flex', alignItems: 'center', gap: '12px',
                  padding: '14px 16px', borderRadius: '12px',
                  background: isActive ? 'var(--admin-active)' : 'transparent',
                  color: isActive ? 'var(--admin-text)' : 'var(--admin-text-muted)',
                  textDecoration: 'none',
                  fontSize: '14px', fontWeight: 600,
                  transition: 'all 0.3s',
                  border: isActive ? '1px solid var(--admin-active)' : '1px solid transparent'
                }}
              >
                <Icon size={18} color={isActive ? '#a78bfa' : 'currentColor'} />
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* Footer / Theme Toggle */}
        <div style={{ borderTop: '1px solid var(--admin-border)', paddingTop: '24px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <button onClick={toggleTheme} style={{ 
            display: 'flex', alignItems: 'center', gap: '12px', width: '100%',
            padding: '14px 16px', borderRadius: '12px',
            background: 'var(--admin-surface)', border: '1px solid var(--admin-border)',
            color: 'var(--admin-text)', fontSize: '14px', fontWeight: 600,
            cursor: 'pointer', transition: 'all 0.3s'
          }}>
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
          </button>

          <button 
            onClick={async () => {
              await supabase.auth.signOut();
              window.location.href = '/admin/login';
            }}
            style={{ 
              display: 'flex', alignItems: 'center', gap: '12px', width: '100%',
              padding: '14px 16px', borderRadius: '12px',
              background: 'transparent', border: 'none',
              color: '#ef4444', fontSize: '14px', fontWeight: 600,
              cursor: 'pointer', transition: 'all 0.3s'
            }}
          >
            <LogOut size={18} />
            Sign Out
          </button>
        </div>
      </aside>
    </>
  );
}

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    setIsMounted(true);
    checkAuth();

    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === 'SIGNED_OUT') {
        setIsAuthenticated(false);
        if (pathname !== '/admin/login') router.push('/admin/login');
      } else if (session) {
        setIsAuthenticated(true);
      }
    });

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, [pathname, router]);

  const checkAuth = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    
    if (session) {
      setIsAuthenticated(true);
      // If already logged in and on login page, redirect to admin
      if (pathname === '/admin/login') {
        router.push('/admin');
      }
    } else if (pathname !== '/admin/login') {
      router.push('/admin/login');
    } else {
      // On login page with no session — that's fine
      setIsAuthenticated(false);
    }
  };

  if (!isMounted) return <div style={{ minHeight: '100vh', background: '#020205' }} />;

  // If it's the login page, don't show the admin sidebar
  if (pathname === '/admin/login') {
    return <AdminThemeProvider>{children}</AdminThemeProvider>;
  }

  // If not authenticated yet, show a loader
  if (!isAuthenticated) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#020205', color: '#fff' }}>
        <Loader2 size={32} className="lucide-spin" style={{ animation: 'spin 2s linear infinite' }} />
        <style>{`@keyframes spin { 100% { transform: rotate(360deg); } }`}</style>
      </div>
    );
  }

  return (
    <AdminThemeProvider>
      <div className="admin-layout">
        <AdminSidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
        
        {/* ─── MAIN CONTENT AREA ─── */}
        <main className="admin-main">
          
          {/* Mobile Header */}
          <div className="admin-mobile-header">
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'linear-gradient(135deg, #7c3aed, #06b6d4)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Code2 size={16} color="#fff" />
              </div>
              <h1 style={{ fontSize: '16px', fontWeight: 900, letterSpacing: '-0.5px', color: 'var(--admin-text)' }}>Admin Console</h1>
            </div>
            <button onClick={() => setIsSidebarOpen(true)} style={{ background: 'transparent', border: 'none', color: 'var(--admin-text)', cursor: 'pointer' }}>
              <Menu size={24} />
            </button>
          </div>

          {/* Subtle Background Glow */}
          <div style={{ position: 'absolute', top: '-20%', left: '50%', transform: 'translateX(-50%)', width: '800px', height: '800px', background: 'radial-gradient(circle, rgba(124, 58, 237, 0.05) 0%, transparent 70%)', pointerEvents: 'none', zIndex: 0 }} />
          
          <div className="admin-content">
            {children}
          </div>
        </main>
      </div>
    </AdminThemeProvider>
  );
}
