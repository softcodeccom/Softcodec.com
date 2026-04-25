'use client';

import { motion } from 'framer-motion';
import { Moon, Sun, Settings as SettingsIcon, Monitor, Bell, Shield, Database } from 'lucide-react';
import { useAdminTheme } from '../ThemeProvider';

export default function AdminSettings() {
  const { theme, toggleTheme } = useAdminTheme();

  return (
    <div style={{ maxWidth: '800px' }}>
      <div style={{ marginBottom: '40px' }}>
        <h1 style={{ fontSize: '32px', fontWeight: 900, letterSpacing: '-1px', marginBottom: '8px' }}>Settings</h1>
        <p style={{ color: 'var(--admin-text-muted)' }}>Manage your admin preferences, theme, and system configurations.</p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
        
        {/* Appearance Section */}
        <motion.section 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ background: 'var(--admin-surface)', border: '1px solid var(--admin-border)', borderRadius: '24px', overflow: 'hidden' }}
        >
          <div style={{ padding: '24px', borderBottom: '1px solid var(--admin-border)', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Monitor size={20} color="#06b6d4" />
            <h2 style={{ fontSize: '18px', fontWeight: 800, color: 'var(--admin-text)' }}>Appearance</h2>
          </div>
          
          <div style={{ padding: '32px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <h3 style={{ fontSize: '16px', fontWeight: 700, color: 'var(--admin-text)', marginBottom: '4px' }}>Admin Panel Theme</h3>
                <p style={{ color: 'var(--admin-text-muted)', fontSize: '14px' }}>Toggle between Dark and Light mode for the admin dashboard.</p>
              </div>
              
              <div style={{ display: 'flex', background: 'var(--admin-input-bg)', padding: '4px', borderRadius: '12px', border: '1px solid var(--admin-border)' }}>
                <button 
                  onClick={() => theme !== 'light' && toggleTheme()}
                  style={{ 
                    display: 'flex', alignItems: 'center', gap: '8px',
                    padding: '8px 16px', borderRadius: '8px',
                    background: theme === 'light' ? '#fff' : 'transparent',
                    color: theme === 'light' ? '#000' : 'var(--admin-text-muted)',
                    border: 'none', cursor: 'pointer', transition: 'all 0.2s',
                    boxShadow: theme === 'light' ? '0 2px 8px rgba(0,0,0,0.1)' : 'none',
                    fontWeight: 600, fontSize: '13px'
                  }}
                >
                  <Sun size={16} /> Light
                </button>
                <button 
                  onClick={() => theme !== 'dark' && toggleTheme()}
                  style={{ 
                    display: 'flex', alignItems: 'center', gap: '8px',
                    padding: '8px 16px', borderRadius: '8px',
                    background: theme === 'dark' ? '#020205' : 'transparent',
                    color: theme === 'dark' ? '#fff' : 'var(--admin-text-muted)',
                    border: 'none', cursor: 'pointer', transition: 'all 0.2s',
                    boxShadow: theme === 'dark' ? '0 2px 8px rgba(0,0,0,0.2)' : 'none',
                    fontWeight: 600, fontSize: '13px'
                  }}
                >
                  <Moon size={16} /> Dark
                </button>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Security Section (Placeholder) */}
        <motion.section 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          style={{ background: 'var(--admin-surface)', border: '1px solid var(--admin-border)', borderRadius: '24px', overflow: 'hidden' }}
        >
          <div style={{ padding: '24px', borderBottom: '1px solid var(--admin-border)', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Shield size={20} color="#7c3aed" />
            <h2 style={{ fontSize: '18px', fontWeight: 800, color: 'var(--admin-text)' }}>Security & Auth</h2>
          </div>
          
          <div style={{ padding: '32px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
              <div>
                <h3 style={{ fontSize: '16px', fontWeight: 700, color: 'var(--admin-text)', marginBottom: '4px' }}>Admin Credentials</h3>
                <p style={{ color: 'var(--admin-text-muted)', fontSize: '14px' }}>Update your login password for the admin console.</p>
              </div>
              <button style={{ padding: '10px 16px', borderRadius: '8px', background: 'var(--admin-hover)', border: '1px solid var(--admin-border)', color: 'var(--admin-text)', cursor: 'pointer', fontSize: '13px', fontWeight: 600 }}>
                Change Password
              </button>
            </div>
          </div>
        </motion.section>

        {/* Database Section (Placeholder) */}
        <motion.section 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          style={{ background: 'var(--admin-surface)', border: '1px solid var(--admin-border)', borderRadius: '24px', overflow: 'hidden' }}
        >
          <div style={{ padding: '24px', borderBottom: '1px solid var(--admin-border)', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Database size={20} color="#10b981" />
            <h2 style={{ fontSize: '18px', fontWeight: 800, color: 'var(--admin-text)' }}>Database Connection</h2>
          </div>
          
          <div style={{ padding: '32px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <h3 style={{ fontSize: '16px', fontWeight: 700, color: 'var(--admin-text)', marginBottom: '4px' }}>Supabase Status</h3>
                <p style={{ color: 'var(--admin-text-muted)', fontSize: '14px' }}>Manage your connection to the Supabase backend.</p>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '6px 12px', background: 'rgba(16, 185, 129, 0.1)', color: '#10b981', borderRadius: '100px', fontSize: '12px', fontWeight: 700 }}>
                <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'currentColor' }} />
                Connected
              </div>
            </div>
          </div>
        </motion.section>

      </div>
    </div>
  );
}
