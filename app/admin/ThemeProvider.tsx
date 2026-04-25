'use client';

import { createContext, useContext, useState, useEffect } from 'react';

type Theme = 'dark' | 'light';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function AdminThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('dark');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem('softcodec_admin_theme') as Theme;
    if (stored) setTheme(stored);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('softcodec_admin_theme', newTheme);
  };

  if (!mounted) return <div style={{ minHeight: '100vh', background: '#020205' }} />;

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div data-admin-theme={theme} style={{ 
        background: 'var(--admin-bg)', 
        color: 'var(--admin-text)', 
        minHeight: '100vh', 
        transition: 'background 0.3s, color 0.3s' 
      }}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

export function useAdminTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useAdminTheme must be used within an AdminThemeProvider');
  }
  return context;
}
