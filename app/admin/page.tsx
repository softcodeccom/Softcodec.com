'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Users, Briefcase, MessageSquare, TrendingUp, ArrowUpRight, Activity, RefreshCw } from 'lucide-react';
import { supabase } from '../../lib/supabase';
import Link from 'next/link';

export default function AdminDashboard() {
  const [stats, setStats] = useState({ projects: 0, leads: 0, testimonials: 0, newLeads: 0 });
  const [recentLeads, setRecentLeads] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    setLoading(true);
    try {
      const [projectsRes, leadsRes, testimonialsRes, newLeadsRes, recentLeadsRes] = await Promise.all([
        supabase.from('projects').select('id', { count: 'exact', head: true }),
        supabase.from('leads').select('id', { count: 'exact', head: true }),
        supabase.from('testimonials').select('id', { count: 'exact', head: true }),
        supabase.from('leads').select('id', { count: 'exact', head: true }).eq('status', 'new'),
        supabase.from('leads').select('*').order('created_at', { ascending: false }).limit(5),
      ]);

      setStats({
        projects: projectsRes.count || 0,
        leads: leadsRes.count || 0,
        testimonials: testimonialsRes.count || 0,
        newLeads: newLeadsRes.count || 0,
      });
      setRecentLeads(recentLeadsRes.data || []);
    } catch (err) {
      console.error('Dashboard fetch error:', err);
    } finally {
      setLoading(false);
    }
  };

  const statCards = [
    { title: 'Total Projects', value: stats.projects, icon: Briefcase, color: '#06b6d4', trend: 'In Portfolio', href: '/admin/projects' },
    { title: 'Total Leads', value: stats.leads, icon: Users, color: '#7c3aed', trend: `${stats.newLeads} new`, href: '/admin/contacts' },
    { title: 'Testimonials', value: stats.testimonials, icon: MessageSquare, color: '#f59e0b', trend: 'Published Reviews', href: '/admin/testimonials' },
    { title: 'New Inquiries', value: stats.newLeads, icon: Activity, color: '#10b981', trend: 'Awaiting Response', href: '/admin/contacts' },
  ];

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
        <div>
          <h1 style={{ fontSize: '32px', fontWeight: 900, letterSpacing: '-1px', marginBottom: '8px' }}>Dashboard Overview</h1>
          <p style={{ color: 'var(--admin-text-muted)' }}>Welcome back to the SoftCodec command center.</p>
        </div>
        <button
          onClick={fetchDashboardData}
          style={{ padding: '12px 24px', fontSize: '14px', background: 'var(--admin-surface)', border: '1px solid var(--admin-border)', borderRadius: '12px', color: 'var(--admin-text)', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 600 }}
        >
          <RefreshCw size={16} /> Refresh
        </button>
      </div>

      {/* Stats Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px', marginBottom: '48px' }}>
        {statCards.map((stat, i) => {
          const Icon = stat.icon;
          return (
            <Link key={i} href={stat.href} style={{ textDecoration: 'none' }}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.02 }}
                style={{
                  background: 'var(--admin-surface)',
                  border: '1px solid var(--admin-border)',
                  borderRadius: '24px',
                  padding: '24px',
                  position: 'relative',
                  overflow: 'hidden',
                  cursor: 'pointer'
                }}
              >
                <div style={{ position: 'absolute', top: 0, right: 0, width: '100px', height: '100px', background: `radial-gradient(circle, ${stat.color}20 0%, transparent 70%)`, filter: 'blur(20px)' }} />

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '24px' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: `${stat.color}15`, color: stat.color, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Icon size={24} />
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#10b981', fontSize: '12px', fontWeight: 700, background: 'rgba(16, 185, 129, 0.1)', padding: '4px 8px', borderRadius: '100px' }}>
                    <TrendingUp size={12} />
                    <span>{stat.trend}</span>
                  </div>
                </div>

                <h3 style={{ fontSize: '36px', fontWeight: 900, marginBottom: '4px', color: 'var(--admin-text)' }}>
                  {loading ? '...' : stat.value}
                </h3>
                <p style={{ color: 'var(--admin-text-muted)', fontSize: '14px', fontWeight: 600 }}>{stat.title}</p>
              </motion.div>
            </Link>
          );
        })}
      </div>

      {/* Recent Lead Submissions */}
      <div style={{ background: 'var(--admin-surface)', border: '1px solid var(--admin-border)', borderRadius: '24px', padding: '32px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
          <h3 style={{ fontSize: '20px', fontWeight: 800, color: 'var(--admin-text)' }}>Recent Lead Submissions</h3>
          <Link href="/admin/contacts" style={{ fontSize: '13px', color: '#7c3aed', fontWeight: 700, textDecoration: 'none' }}>View All →</Link>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {loading ? (
            <p style={{ color: 'var(--admin-text-muted)', textAlign: 'center', padding: '20px' }}>Loading...</p>
          ) : recentLeads.length === 0 ? (
            <p style={{ color: 'var(--admin-text-muted)', textAlign: 'center', padding: '20px' }}>No leads yet. Share your contact page!</p>
          ) : recentLeads.map((lead, i) => (
            <motion.div
              key={lead.id}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.05 }}
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px', background: 'var(--admin-input-bg)', border: '1px solid var(--admin-border)', borderRadius: '16px' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(124, 58, 237, 0.2)', color: '#a78bfa', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, flexShrink: 0 }}>
                  {lead.name?.charAt(0) || '?'}
                </div>
                <div>
                  <h4 style={{ fontSize: '15px', fontWeight: 700, color: 'var(--admin-text)' }}>
                    {lead.name} <span style={{ color: 'var(--admin-text-dark)', fontWeight: 400 }}>from</span> {lead.company || 'N/A'}
                  </h4>
                  <p style={{ color: 'var(--admin-text-muted)', fontSize: '13px', marginTop: '2px' }}>
                    {lead.email} · {lead.service || 'General Inquiry'}
                  </p>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexShrink: 0 }}>
                <span style={{
                  fontSize: '11px', fontWeight: 700, padding: '4px 10px', borderRadius: '100px',
                  background: lead.status === 'new' ? 'rgba(124,58,237,0.15)' : 'rgba(16,185,129,0.1)',
                  color: lead.status === 'new' ? '#a78bfa' : '#10b981'
                }}>
                  {lead.status || 'new'}
                </span>
                <span style={{ color: 'var(--admin-text-dark)', fontSize: '12px' }}>
                  {new Date(lead.created_at).toLocaleDateString()}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
