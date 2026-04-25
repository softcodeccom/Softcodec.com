'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Users, Briefcase, MessageSquare, TrendingUp, ArrowUpRight, Activity, RefreshCw, GraduationCap, ListChecks, Clock } from 'lucide-react';
import { supabase } from '../../lib/supabase';
import Link from 'next/link';

export default function AdminDashboard() {
  const [stats, setStats] = useState({ 
    projects: 0, 
    leads: 0, 
    testimonials: 0, 
    newLeads: 0,
    totalApps: 0,
    shortlisted: 0
  });
  const [recentLeads, setRecentLeads] = useState<any[]>([]);
  const [recentApps, setRecentApps] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    setLoading(true);
    try {
      const [
        projectsRes, 
        leadsRes, 
        testimonialsRes, 
        newLeadsRes, 
        recentLeadsRes,
        appsRes,
        shortlistedRes,
        recentAppsRes
      ] = await Promise.all([
        supabase.from('projects').select('id', { count: 'exact', head: true }),
        supabase.from('leads').select('id', { count: 'exact', head: true }),
        supabase.from('testimonials').select('id', { count: 'exact', head: true }),
        supabase.from('leads').select('id', { count: 'exact', head: true }).eq('status', 'new'),
        supabase.from('leads').select('*').order('created_at', { ascending: false }).limit(5),
        supabase.from('job_applications').select('id', { count: 'exact', head: true }),
        supabase.from('job_applications').select('id', { count: 'exact', head: true }).eq('status', 'shortlisted'),
        supabase.from('job_applications').select('*').order('created_at', { ascending: false }).limit(5)
      ]);

      setStats({
        projects: projectsRes.count || 0,
        leads: leadsRes.count || 0,
        testimonials: testimonialsRes.count || 0,
        newLeads: newLeadsRes.count || 0,
        totalApps: appsRes.count || 0,
        shortlisted: shortlistedRes.count || 0
      });
      setRecentLeads(recentLeadsRes.data || []);
      setRecentApps(recentAppsRes.data || []);
    } catch (err) {
      console.error('Dashboard fetch error:', err);
    } finally {
      setLoading(false);
    }
  };

  const statCards = [
    { title: 'Total Projects', value: stats.projects, icon: Briefcase, color: '#06b6d4', trend: 'Portfolio Active', href: '/admin/projects' },
    { title: 'New Leads', value: stats.newLeads, icon: Activity, color: '#10b981', trend: 'Awaiting Action', href: '/admin/contacts' },
    { title: 'Job Applications', value: stats.totalApps, icon: GraduationCap, color: '#7c3aed', trend: 'Incoming Talent', href: '/admin/careers' },
    { title: 'Shortlisted', value: stats.shortlisted, icon: ListChecks, color: '#f59e0b', trend: 'Pipeline Strong', href: '/admin/careers' },
  ];

  return (
    <div style={{ paddingBottom: '60px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
        <div>
          <h1 style={{ fontSize: '32px', fontWeight: 950, letterSpacing: '-1.5px', marginBottom: '8px', color: 'var(--admin-text)' }}>Command <span style={{ color: '#7c3aed' }}>Center</span></h1>
          <p style={{ color: 'var(--admin-text-muted)', fontSize: '14px' }}>Real-time overview of SoftCodec operations and talent acquisition.</p>
        </div>
        <button
          onClick={fetchDashboardData}
          style={{ padding: '12px 24px', fontSize: '14px', background: 'var(--admin-surface)', border: '1px solid var(--admin-border)', borderRadius: '14px', color: 'var(--admin-text)', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 700, transition: 'all 0.3s' }}
        >
          <RefreshCw size={18} className={loading ? 'animate-spin' : ''} /> Refresh
        </button>
      </div>

      {/* Stats Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px', marginBottom: '48px' }}>
        {statCards.map((stat, i) => {
          const Icon = stat.icon;
          return (
            <Link key={i} href={stat.href} style={{ textDecoration: 'none' }}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                style={{
                  background: 'var(--admin-surface)',
                  border: '1px solid var(--admin-border)',
                  borderRadius: '28px',
                  padding: '28px',
                  position: 'relative',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.02)'
                }}
              >
                <div style={{ position: 'absolute', top: 0, right: 0, width: '120px', height: '120px', background: `radial-gradient(circle, ${stat.color}15 0%, transparent 70%)`, filter: 'blur(20px)' }} />

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '24px' }}>
                  <div style={{ width: '52px', height: '52px', borderRadius: '16px', background: `${stat.color}10`, color: stat.color, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Icon size={26} />
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: stat.color, fontSize: '10px', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '1px', background: `${stat.color}10`, padding: '6px 12px', borderRadius: '100px' }}>
                    {stat.trend}
                  </div>
                </div>

                <h3 style={{ fontSize: '38px', fontWeight: 950, marginBottom: '4px', color: 'var(--admin-text)', letterSpacing: '-1px' }}>
                  {loading ? '...' : stat.value}
                </h3>
                <p style={{ color: 'var(--admin-text-muted)', fontSize: '13px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px' }}>{stat.title}</p>
              </motion.div>
            </Link>
          );
        })}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '32px' }}>
        
        {/* Recent Lead Submissions */}
        <div style={{ background: 'var(--admin-surface)', border: '1px solid var(--admin-border)', borderRadius: '32px', padding: '32px', boxShadow: '0 10px 40px rgba(0,0,0,0.02)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '28px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
               <Activity size={20} color="#7c3aed" />
               <h3 style={{ fontSize: '20px', fontWeight: 900, color: 'var(--admin-text)' }}>Recent Leads</h3>
            </div>
            <Link href="/admin/contacts" style={{ fontSize: '13px', color: '#7c3aed', fontWeight: 800, textDecoration: 'none' }}>View All</Link>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {loading ? (
              <p style={{ color: 'var(--admin-text-muted)', textAlign: 'center', padding: '20px' }}>Syncing leads...</p>
            ) : recentLeads.length === 0 ? (
              <p style={{ color: 'var(--admin-text-muted)', textAlign: 'center', padding: '20px' }}>No recent inquiries.</p>
            ) : recentLeads.map((lead, i) => (
              <motion.div key={lead.id} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 }}
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px', background: 'var(--admin-input-bg)', border: '1px solid var(--admin-border)', borderRadius: '20px' }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div style={{ width: '42px', height: '42px', borderRadius: '12px', background: 'linear-gradient(135deg, #7c3aed, #4f46e5)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900, fontSize: '16px' }}>
                    {lead.name?.charAt(0) || '?'}
                  </div>
                  <div>
                    <h4 style={{ fontSize: '14px', fontWeight: 800, color: 'var(--admin-text)' }}>{lead.name}</h4>
                    <p style={{ color: 'var(--admin-text-muted)', fontSize: '12px' }}>{lead.service || 'Inquiry'}</p>
                  </div>
                </div>
                <div style={{ textAlign: 'right' }}>
                   <div style={{ fontSize: '11px', fontWeight: 800, color: lead.status === 'new' ? '#7c3aed' : '#10b981', textTransform: 'uppercase' }}>{lead.status}</div>
                   <div style={{ fontSize: '10px', color: 'var(--admin-text-muted)' }}>{new Date(lead.created_at).toLocaleDateString()}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Recent Job Applications (New Section) */}
        <div style={{ background: 'var(--admin-surface)', border: '1px solid var(--admin-border)', borderRadius: '32px', padding: '32px', boxShadow: '0 10px 40px rgba(0,0,0,0.02)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '28px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
               <GraduationCap size={20} color="#06b6d4" />
               <h3 style={{ fontSize: '20px', fontWeight: 900, color: 'var(--admin-text)' }}>New Candidates</h3>
            </div>
            <Link href="/admin/careers" style={{ fontSize: '13px', color: '#06b6d4', fontWeight: 800, textDecoration: 'none' }}>View Talent →</Link>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {loading ? (
              <p style={{ color: 'var(--admin-text-muted)', textAlign: 'center', padding: '20px' }}>Scanning talent pool...</p>
            ) : recentApps.length === 0 ? (
              <p style={{ color: 'var(--admin-text-muted)', textAlign: 'center', padding: '20px' }}>No applications yet.</p>
            ) : recentApps.map((app, i) => (
              <motion.div key={app.id} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 }}
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px', background: 'var(--admin-input-bg)', border: '1px solid var(--admin-border)', borderRadius: '20px' }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div style={{ width: '42px', height: '42px', borderRadius: '12px', background: 'linear-gradient(135deg, #06b6d4, #0891b2)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900, fontSize: '16px' }}>
                    {app.full_name?.charAt(0) || '?'}
                  </div>
                  <div>
                    <h4 style={{ fontSize: '14px', fontWeight: 800, color: 'var(--admin-text)' }}>{app.full_name}</h4>
                    <p style={{ color: 'var(--admin-text-muted)', fontSize: '12px' }}>{app.position}</p>
                  </div>
                </div>
                <div style={{ textAlign: 'right' }}>
                   <div style={{ fontSize: '11px', fontWeight: 800, color: app.status === 'shortlisted' ? '#10b981' : '#7c3aed', textTransform: 'uppercase' }}>{app.status}</div>
                   <div style={{ fontSize: '10px', color: 'var(--admin-text-muted)' }}>{new Date(app.created_at).toLocaleDateString()}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>

      <style jsx>{`
        .animate-spin { animation: spin 2s linear infinite; }
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
      `}</style>
    </div>
  );
}
