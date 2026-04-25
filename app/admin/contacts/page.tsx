'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, CheckCircle2, Clock, Trash2, Reply } from 'lucide-react';
import { supabase } from '../../../lib/supabase';

export default function AdminContacts() {
  const [leads, setLeads] = useState<any[]>([]);
  const [selectedLead, setSelectedLead] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchLeads();
  }, []);

  const fetchLeads = async () => {
    try {
      const { data, error } = await supabase
        .from('leads')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      
      setLeads(data || []);
      if (data && data.length > 0 && !selectedLead) {
        setSelectedLead(data[0].id);
      }
    } catch (error) {
      console.error('Error fetching leads:', error);
    } finally {
      setLoading(false);
    }
  };

  const deleteLead = async (id: string) => {
    try {
      const { error } = await supabase.from('leads').delete().eq('id', id);
      if (error) throw error;
      const newLeads = leads.filter(l => l.id !== id);
      setLeads(newLeads);
      if (selectedLead === id) {
        setSelectedLead(newLeads.length > 0 ? newLeads[0].id : null);
      }
    } catch (error) {
      console.error('Error deleting lead:', error);
    }
  };

  const updateStatus = async (id: string, status: string) => {
    const { error } = await supabase.from('leads').update({ status }).eq('id', id);
    if (!error) setLeads(leads.map(l => l.id === id ? { ...l, status } : l));
  };

  const activeLeadData = leads.find(l => l.id === selectedLead);

  return (
    <div style={{ height: 'calc(100vh - 96px)', display: 'flex', flexDirection: 'column' }}>
      <div style={{ marginBottom: '24px' }}>
        <h1 style={{ fontSize: '32px', fontWeight: 900, letterSpacing: '-1px', marginBottom: '8px' }}>Lead Inbox</h1>
        <p style={{ color: 'var(--admin-text-muted)' }}>Manage and respond to client inquiries from the Contact page.</p>
      </div>

      <div className="admin-split-pane">
        {/* Inbox List */}
        <div className="admin-list-pane">
          <div style={{ padding: '20px', borderBottom: '1px solid var(--admin-border)' }}>
            <h3 style={{ fontSize: '16px', fontWeight: 800, color: 'var(--admin-text)' }}>Recent Messages</h3>
          </div>
          <div style={{ flex: 1, overflowY: 'auto' }}>
            {loading ? (
              <div style={{ padding: '20px', color: 'var(--admin-text-muted)', textAlign: 'center' }}>Loading leads...</div>
            ) : leads.length === 0 ? (
              <div style={{ padding: '20px', color: 'var(--admin-text-muted)', textAlign: 'center' }}>No leads found.</div>
            ) : leads.map((lead) => (
              <div 
                key={lead.id}
                onClick={() => setSelectedLead(lead.id)}
                style={{ 
                  padding: '20px', 
                  borderBottom: '1px solid var(--admin-border)', 
                  cursor: 'pointer',
                  background: selectedLead === lead.id ? 'var(--admin-active)' : 'transparent',
                  borderLeft: selectedLead === lead.id ? '3px solid #7c3aed' : '3px solid transparent',
                  transition: 'all 0.2s'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <span style={{ fontWeight: 800, color: selectedLead === lead.id ? 'var(--admin-text)' : 'var(--admin-text-dark)' }}>{lead.name}</span>
                  <span style={{ fontSize: '12px', color: 'var(--admin-text-muted)' }}>
                    {new Date(lead.created_at).toLocaleDateString()}
                  </span>
                </div>
                <div style={{ fontSize: '13px', color: '#06b6d4', fontWeight: 600, marginBottom: '8px' }}>{lead.service}</div>
                <p style={{ fontSize: '13px', color: 'var(--admin-text-muted)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                  {lead.message}
                </p>
                {lead.status === 'new' && (
                  <div style={{ display: 'inline-block', marginTop: '12px', background: 'rgba(124, 58, 237, 0.2)', color: '#a78bfa', fontSize: '10px', fontWeight: 800, padding: '4px 8px', borderRadius: '4px', textTransform: 'uppercase' }}>
                    New Lead
                  </div>
                )}
                {lead.status === 'read' && (
                  <div style={{ display: 'inline-block', marginTop: '12px', background: 'rgba(16,185,129,0.1)', color: '#10b981', fontSize: '10px', fontWeight: 800, padding: '4px 8px', borderRadius: '4px', textTransform: 'uppercase' }}>
                    Read
                  </div>
                )}
                {lead.status === 'responded' && (
                  <div style={{ display: 'inline-block', marginTop: '12px', background: 'rgba(6,182,212,0.1)', color: '#06b6d4', fontSize: '10px', fontWeight: 800, padding: '4px 8px', borderRadius: '4px', textTransform: 'uppercase' }}>
                    Responded
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Message Viewer */}
        <div className="admin-viewer-pane">
          {activeLeadData ? (
            <motion.div 
              key={activeLeadData.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              style={{ display: 'flex', flexDirection: 'column', height: '100%' }}
            >
              {/* Viewer Header */}
              <div style={{ padding: '32px', borderBottom: '1px solid var(--admin-border)', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div>
                  <h2 style={{ fontSize: '24px', fontWeight: 900, marginBottom: '8px', color: 'var(--admin-text)' }}>{activeLeadData.name}</h2>
                  <div style={{ display: 'flex', gap: '16px', color: 'var(--admin-text-muted)', fontSize: '14px' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><Mail size={14} /> {activeLeadData.email}</span>
                    <span>•</span>
                    <span>{activeLeadData.company}</span>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  <button onClick={() => updateStatus(activeLeadData.id, 'read')} style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '10px 14px', borderRadius: '8px', background: activeLeadData.status === 'read' ? 'rgba(16,185,129,0.2)' : 'var(--admin-hover)', border: 'none', color: activeLeadData.status === 'read' ? '#10b981' : 'var(--admin-text)', cursor: 'pointer', fontSize: '13px', fontWeight: 600 }}>
                    <CheckCircle2 size={15} /> Mark Read
                  </button>
                  <button onClick={() => updateStatus(activeLeadData.id, 'responded')} style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '10px 14px', borderRadius: '8px', background: activeLeadData.status === 'responded' ? 'rgba(6,182,212,0.2)' : 'var(--admin-hover)', border: 'none', color: activeLeadData.status === 'responded' ? '#06b6d4' : 'var(--admin-text)', cursor: 'pointer', fontSize: '13px', fontWeight: 600 }}>
                    <Clock size={15} /> Responded
                  </button>
                  <a href={`mailto:${activeLeadData.email}`} style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 14px', borderRadius: '8px', background: 'rgba(124,58,237,0.15)', border: 'none', color: '#a78bfa', cursor: 'pointer', fontSize: '13px', fontWeight: 600 }}>
                    <Reply size={15} /> Reply via Email
                  </a>
                  <button onClick={() => deleteLead(activeLeadData.id)} style={{ width: '40px', height: '40px', borderRadius: '8px', background: 'rgba(239, 68, 68, 0.1)', border: 'none', color: '#ef4444', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>

              {/* Viewer Body */}
              <div style={{ padding: '24px', flex: 1, overflowY: 'auto' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '24px', marginBottom: '40px', padding: '24px', background: 'var(--admin-bg)', borderRadius: '16px', border: '1px solid var(--admin-border)' }}>
                  <div>
                    <span style={{ display: 'block', fontSize: '11px', textTransform: 'uppercase', color: 'var(--admin-text-muted)', letterSpacing: '1px', marginBottom: '8px' }}>Requested Service</span>
                    <span style={{ fontSize: '16px', fontWeight: 700, color: '#06b6d4' }}>{activeLeadData.service}</span>
                  </div>
                  <div>
                    <span style={{ display: 'block', fontSize: '11px', textTransform: 'uppercase', color: 'var(--admin-text-muted)', letterSpacing: '1px', marginBottom: '8px' }}>Estimated Budget</span>
                    <span style={{ fontSize: '16px', fontWeight: 700, color: '#10b981' }}>{activeLeadData.budget || 'Not specified'}</span>
                  </div>
                </div>

                <div>
                  <span style={{ display: 'block', fontSize: '11px', textTransform: 'uppercase', color: 'var(--admin-text-muted)', letterSpacing: '1px', marginBottom: '16px' }}>Message Details</span>
                  <p style={{ fontSize: '16px', lineHeight: 1.8, color: 'var(--admin-text)', whiteSpace: 'pre-wrap' }}>
                    {activeLeadData.message}
                  </p>
                </div>
              </div>
            </motion.div>
          ) : (
            <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--admin-text-dark)' }}>
              Select a lead to view details
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
