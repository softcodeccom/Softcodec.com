'use client';

import { useState, useEffect } from 'react';
import { 
  Users, Mail, Phone, Briefcase, Calendar, 
  ExternalLink, Download, CheckCircle, Clock, 
  Search, Filter, GraduationCap, ChevronRight,
  User, Layers, Trash2, RotateCcw, Target, X, Sparkles,
  Inbox, ListChecks, Video, Link as LinkIcon
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const CATEGORIES = ['All', 'Engineering', 'Design', 'Management', 'Marketing', 'Support'];

export default function AdminCareersPage() {
  const [applications, setApplications] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('All');
  const [pipelineTab, setPipelineTab] = useState('Inbox'); // Inbox vs Shortlisted
  const [selectedApp, setSelectedApp] = useState<any | null>(null);
  const [scheduling, setScheduling] = useState(false);

  useEffect(() => {
    fetchApplications();
  }, []);

  const fetchApplications = async () => {
    setLoading(true);
    try {
      const res = await fetch(`/api/admin/applications?t=${Date.now()}`);
      const data = await res.json();
      const processedData = (Array.isArray(data) ? data : []).map(app => ({
        ...app,
        category: app.category || 'Engineering'
      }));
      setApplications(processedData);
    } catch (err) {
      console.error('Fetch error:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleStatusChange = async (id: string, newStatus: string) => {
    try {
      await fetch('/api/admin/applications', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, status: newStatus })
      });
      fetchApplications();
      if (selectedApp?.id === id) {
        setSelectedApp({ ...selectedApp, status: newStatus });
      }
    } catch (err) {
      console.error('Status update error:', err);
    }
  };

  const handleScheduleMeeting = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const meeting_at = formData.get('meeting_at');
    const meeting_link = formData.get('meeting_link');

    try {
      const res = await fetch('/api/admin/applications/schedule', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: selectedApp.id, meeting_at, meeting_link })
      });
      if (res.ok) {
        setScheduling(false);
        fetchApplications();
        alert('Meeting Scheduled Successfully!');
      }
    } catch (err) {
      console.error('Scheduling error:', err);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to permanently delete this application? This action cannot be undone.')) return;
    try {
      const res = await fetch(`/api/admin/applications?id=${id}`, { method: 'DELETE' });
      if (res.ok) {
        setSelectedApp(null);
        fetchApplications();
      }
    } catch (err) {
      console.error('Delete error:', err);
    }
  };

  const filteredApps = applications.filter(app => {
    const matchesSearch = 
      app.full_name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      app.position?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      app.email?.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = activeTab === 'All' || app.category === activeTab;
    
    // Pipeline Filtering
    const matchesPipeline = pipelineTab === 'Shortlisted' 
      ? app.status === 'shortlisted'
      : app.status !== 'shortlisted';
    
    return matchesSearch && matchesCategory && matchesPipeline;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'shortlisted': return '#10b981';
      case 'rejected': return '#ef4444';
      default: return '#7c3aed';
    }
  };

  return (
    <div style={{ padding: 'clamp(20px, 5vw, 40px)', maxWidth: '1600px', margin: '0 auto' }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px', flexWrap: 'wrap', gap: '20px' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
             <div style={{ padding: '6px', background: 'rgba(124, 58, 237, 0.1)', borderRadius: '8px' }}>
                <GraduationCap size={18} color="#7c3aed" />
             </div>
             <span style={{ fontSize: '12px', fontWeight: 900, color: '#7c3aed', letterSpacing: '2px', textTransform: 'uppercase' }}>Talent Pipeline</span>
          </div>
          <h1 style={{ fontSize: 'clamp(28px, 5vw, 40px)', fontWeight: 950, letterSpacing: '-1.5px', color: 'var(--admin-text)' }}>
             {pipelineTab} <span style={{ color: '#7c3aed' }}>Candidates</span>
          </h1>
        </div>
        
        <div style={{ display: 'flex', gap: '12px' }}>
           <button onClick={() => setPipelineTab('Inbox')} style={{ ...pipelineToggleStyle, background: pipelineTab === 'Inbox' ? '#7c3aed' : 'var(--admin-surface)', color: pipelineTab === 'Inbox' ? '#fff' : 'var(--admin-text)' }}>
              <Inbox size={18} /> Inbox
           </button>
           <button onClick={() => setPipelineTab('Shortlisted')} style={{ ...pipelineToggleStyle, background: pipelineTab === 'Shortlisted' ? '#10b981' : 'var(--admin-surface)', color: pipelineTab === 'Shortlisted' ? '#fff' : 'var(--admin-text)' }}>
              <ListChecks size={18} /> Shortlisted
           </button>
           <button onClick={fetchApplications} style={btnRefreshStyle}>
             <RotateCcw size={20} className={loading ? 'animate-spin' : ''} />
           </button>
        </div>
      </div>

      {/* Tabs & Search */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginBottom: '40px' }}>
        <div style={{ display: 'flex', gap: '10px', overflowX: 'auto', paddingBottom: '12px', scrollbarWidth: 'none' }}>
           {CATEGORIES.map(cat => {
             const count = cat === 'All' 
               ? applications.filter(a => pipelineTab === 'Shortlisted' ? a.status === 'shortlisted' : a.status !== 'shortlisted').length
               : applications.filter(a => a.category === cat && (pipelineTab === 'Shortlisted' ? a.status === 'shortlisted' : a.status !== 'shortlisted')).length;
             return (
               <button
                 key={cat}
                 onClick={() => setActiveTab(cat)}
                 style={{
                   ...tabStyle,
                   background: activeTab === cat ? '#7c3aed' : 'var(--admin-surface)',
                   color: activeTab === cat ? '#fff' : 'var(--admin-text-muted)',
                   boxShadow: activeTab === cat ? '0 8px 15px rgba(124, 58, 237, 0.25)' : 'none'
                 }}
               >
                 {cat} <span style={{ opacity: 0.6, fontSize: '11px', marginLeft: '6px', fontWeight: 900 }}>{count}</span>
               </button>
             );
           })}
        </div>

        <div style={{ position: 'relative' }}>
          <Search style={{ position: 'absolute', left: '20px', top: '50%', transform: 'translateY(-50%)', color: 'var(--admin-text-muted)' }} size={20} />
          <input 
            type="text"
            placeholder="Search candidates by name, email, or mission..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={inputSearchStyle}
          />
        </div>
      </div>

      {/* Responsive Layout */}
      <div className="admin-responsive-grid">
        {/* Table View */}
        <div style={{ flex: 1, minWidth: '0' }}>
          <div style={tableCardStyle}>
            {loading ? (
              <div style={{ padding: '100px 0', textAlign: 'center', color: 'var(--admin-text-muted)' }}>
                 <p style={{ fontWeight: 700, letterSpacing: '1px' }}>SYNCING TALENT DATA...</p>
              </div>
            ) : filteredApps.length > 0 ? (
              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '800px' }}>
                  <thead>
                    <tr style={{ textAlign: 'left', borderBottom: '1px solid var(--admin-border)' }}>
                      <th style={thStyle}>Candidate</th>
                      <th style={thStyle}>Applied For</th>
                      <th style={thStyle}>Experience</th>
                      {pipelineTab === 'Shortlisted' && <th style={thStyle}>Meeting</th>}
                      <th style={thStyle}>Status</th>
                      <th style={{ ...thStyle, textAlign: 'right' }}>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredApps.map((app) => (
                      <tr 
                        key={app.id} 
                        onClick={() => setSelectedApp(app)}
                        style={{ 
                          ...trStyle, 
                          background: selectedApp?.id === app.id ? 'rgba(124, 58, 237, 0.05)' : 'transparent',
                          borderLeft: selectedApp?.id === app.id ? `4px solid ${pipelineTab === 'Shortlisted' ? '#10b981' : '#7c3aed'}` : '4px solid transparent'
                        }}
                      >
                        <td style={tdStyle}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                             <div style={{ ...avatarStyle, background: pipelineTab === 'Shortlisted' ? 'linear-gradient(135deg, #10b981, #06b6d4)' : 'linear-gradient(135deg, #7c3aed, #06b6d4)' }}>{app.full_name[0]}</div>
                             <div>
                                <div style={{ fontWeight: 900, fontSize: '14px', color: 'var(--admin-text)' }}>{app.full_name}</div>
                                <div style={{ fontSize: '12px', color: 'var(--admin-text-muted)' }}>{app.email}</div>
                             </div>
                          </div>
                        </td>
                        <td style={tdStyle}>
                           <div style={{ fontWeight: 800, fontSize: '13px', color: 'var(--admin-text)' }}>{app.position}</div>
                           <div style={{ fontSize: '10px', textTransform: 'uppercase', color: '#7c3aed', fontWeight: 900, marginTop: '2px', letterSpacing: '0.5px' }}>{app.category}</div>
                        </td>
                        <td style={tdStyle}>
                          <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--admin-text)' }}>{app.experience}</div>
                        </td>
                        {pipelineTab === 'Shortlisted' && (
                          <td style={tdStyle}>
                             {app.meeting_at ? (
                               <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#10b981', fontWeight: 700, fontSize: '12px' }}>
                                  <Video size={14} /> {new Date(app.meeting_at).toLocaleDateString()}
                               </div>
                             ) : (
                               <span style={{ fontSize: '11px', color: 'var(--admin-text-muted)' }}>Not Scheduled</span>
                             )}
                          </td>
                        )}
                        <td style={tdStyle}>
                          <span style={{ 
                            padding: '6px 12px', borderRadius: '8px', fontSize: '10px', 
                            fontWeight: 900, textTransform: 'uppercase', letterSpacing: '1px',
                            background: `${getStatusColor(app.status)}15`, color: getStatusColor(app.status) 
                          }}>
                            {app.status}
                          </span>
                        </td>
                        <td style={{ ...tdStyle, textAlign: 'right' }}>
                           <button style={actionBtnSmallStyle} onClick={(e) => { e.stopPropagation(); window.open(app.resume_url, '_blank'); }}>
                             <Download size={16} />
                           </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div style={{ padding: '100px 0', textAlign: 'center', color: 'var(--admin-text-muted)' }}>
                 <Users size={48} style={{ opacity: 0.1, margin: '0 auto 20px' }} />
                 <p style={{ fontWeight: 800 }}>No candidates in this pipeline.</p>
              </div>
            )}
          </div>
        </div>

        {/* Detailed Dossier */}
        <AnimatePresence>
          {selectedApp && (
            <motion.div 
              initial={{ opacity: 0, x: 20, width: 0 }}
              animate={{ opacity: 1, x: 0, width: 'auto' }}
              exit={{ opacity: 0, x: 20, width: 0 }}
              className="admin-detail-panel"
            >
              <div style={detailContainerStyle}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
                   <h2 style={{ fontSize: '20px', fontWeight: 950 }}>Candidate <span style={{ color: '#7c3aed' }}>Dossier</span></h2>
                   <div style={{ display: 'flex', gap: '8px' }}>
                      <button onClick={() => handleDelete(selectedApp.id)} style={{ ...closeBtnStyle, color: '#ef4444', background: '#ef444410' }} title="Delete Application"><Trash2 size={18} /></button>
                      <button onClick={() => setSelectedApp(null)} style={closeBtnStyle}><X size={20} /></button>
                   </div>
                </div>

                <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                   <div style={{ ...largeAvatarStyle, background: selectedApp.status === 'shortlisted' ? 'linear-gradient(135deg, #10b981, #06b6d4)' : 'linear-gradient(135deg, #7c3aed, #06b6d4)' }}>
                      {selectedApp.full_name[0]}
                   </div>
                   <h3 style={{ fontSize: '24px', fontWeight: 950, marginBottom: '4px', color: 'var(--admin-text)' }}>{selectedApp.full_name}</h3>
                   <div style={{ display: 'inline-block', padding: '6px 16px', background: 'rgba(124, 58, 237, 0.1)', borderRadius: '100px', color: '#7c3aed', fontWeight: 900, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                      {selectedApp.position}
                   </div>
                </div>

                {/* Meeting Info if Shortlisted */}
                {selectedApp.status === 'shortlisted' && (
                  <div style={{ marginBottom: '32px', padding: '24px', background: 'rgba(16, 185, 129, 0.05)', borderRadius: '24px', border: '1px dashed #10b98150' }}>
                     <h4 style={{ fontSize: '12px', fontWeight: 900, color: '#10b981', textTransform: 'uppercase', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <Video size={16} /> Interview Schedule
                     </h4>
                     {selectedApp.meeting_at ? (
                        <div>
                           <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                              <Calendar size={16} color="#64748b" />
                              <span style={{ fontSize: '14px', fontWeight: 700 }}>{new Date(selectedApp.meeting_at).toLocaleString()}</span>
                           </div>
                           <a href={selectedApp.meeting_link} target="_blank" style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#7c3aed', fontSize: '14px', fontWeight: 800, textDecoration: 'none' }}>
                              <LinkIcon size={16} /> Join Meeting Room
                           </a>
                           <button onClick={() => setScheduling(true)} style={{ marginTop: '16px', background: 'none', border: 'none', color: '#64748b', fontSize: '12px', fontWeight: 700, cursor: 'pointer', textDecoration: 'underline' }}>Reschedule Meeting</button>
                        </div>
                     ) : (
                        <button onClick={() => setScheduling(true)} style={{ width: '100%', padding: '14px', borderRadius: '14px', background: '#10b981', color: '#fff', border: 'none', fontWeight: 900, fontSize: '13px', cursor: 'pointer' }}>
                           Schedule Interview
                        </button>
                     )}
                  </div>
                )}

                {/* Info Grid */}
                <div style={infoGridStyle}>
                   <div style={infoBoxStyle}>
                      <label style={miniLabelStyle}>Contact Email</label>
                      <div style={miniValueStyle}>{selectedApp.email}</div>
                   </div>
                   <div style={infoBoxStyle}>
                      <label style={miniLabelStyle}>Experience</label>
                      <div style={miniValueStyle}>{selectedApp.experience}</div>
                   </div>
                </div>

                <div style={{ marginBottom: '32px' }}>
                   <label style={miniLabelStyle}>Candidate Message</label>
                   <div style={messageBoxStyle}>
                      {selectedApp.message || 'No additional message provided.'}
                   </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '32px' }}>
                   <button 
                     onClick={() => handleStatusChange(selectedApp.id, 'shortlisted')}
                     style={{ ...btnStatusStyle, background: '#10b98115', color: '#10b981', borderColor: '#10b98130' }}
                   >
                     <CheckCircle size={18} /> Shortlist
                   </button>
                   <button 
                     onClick={() => handleStatusChange(selectedApp.id, 'rejected')}
                     style={{ ...btnStatusStyle, background: '#ef444415', color: '#ef4444', borderColor: '#ef444430' }}
                   >
                     <X size={18} /> Reject
                   </button>
                </div>

                <a href={selectedApp.resume_url} target="_blank" style={btnCVStyle}>
                  <Download size={20} /> Download CV / Resume
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Scheduling Modal */}
      <AnimatePresence>
        {scheduling && (
          <div style={modalOverlayStyle}>
             <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} style={modalContentStyle}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
                   <h2 style={{ fontSize: '24px', fontWeight: 950 }}>Schedule <span style={{ color: '#10b981' }}>Interview</span></h2>
                   <button onClick={() => setScheduling(false)} style={closeBtnStyle}><X size={20} /></button>
                </div>
                <form onSubmit={handleScheduleMeeting} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                   <div>
                      <label style={miniLabelStyle}>Meeting Date & Time</label>
                      <input name="meeting_at" type="datetime-local" defaultValue={selectedApp.meeting_at ? new Date(selectedApp.meeting_at).toISOString().slice(0, 16) : ''} required style={modalInputStyle} />
                   </div>
                   <div>
                      <label style={miniLabelStyle}>Meeting Link (Optional)</label>
                      <input name="meeting_link" type="url" defaultValue={selectedApp.meeting_link || ''} placeholder="https://meet.google.com/xxx-xxxx-xxx" style={modalInputStyle} />
                   </div>
                   <button type="submit" style={{ ...btnCVStyle, background: '#10b981', marginTop: '12px' }}>Save Schedule & Notify Applicant</button>
                </form>
             </motion.div>
          </div>
        )}
      </AnimatePresence>

      <style jsx>{`
        .admin-responsive-grid { display: flex; flex-direction: column; gap: 30px; }
        @media (min-width: 1200px) { .admin-responsive-grid { flex-direction: row; } }
        .admin-detail-panel { width: 100%; }
        @media (min-width: 1200px) { .admin-detail-panel { width: 450px; } }
        .animate-spin { animation: spin 2s linear infinite; }
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
      `}</style>
    </div>
  );
}

// ─── STYLES ───

const pipelineToggleStyle = {
  display: 'flex', alignItems: 'center', gap: '8px', padding: '12px 24px',
  borderRadius: '16px', border: '1px solid var(--admin-border)',
  fontSize: '14px', fontWeight: 800, cursor: 'pointer', transition: 'all 0.3s'
};

const btnRefreshStyle = {
  padding: '12px', borderRadius: '14px',
  background: 'var(--admin-surface)', border: '1px solid var(--admin-border)',
  color: 'var(--admin-text)', cursor: 'pointer', transition: 'all 0.3s'
};

const tabStyle = {
  padding: '12px 24px', borderRadius: '16px',
  fontSize: '13px', fontWeight: 900, cursor: 'pointer',
  transition: 'all 0.3s', whiteSpace: 'nowrap' as const,
  border: '1px solid var(--admin-border)', letterSpacing: '0.5px'
};

const inputSearchStyle = {
  width: '100%', padding: '20px 24px 20px 60px',
  background: 'var(--admin-surface)', border: '1px solid var(--admin-border)',
  borderRadius: '24px', color: 'var(--admin-text)', outline: 'none',
  fontSize: '15px'
};

const tableCardStyle = {
  background: 'var(--admin-surface)', border: '1px solid var(--admin-border)',
  borderRadius: '32px', overflow: 'hidden'
};

const thStyle = {
  padding: '24px', fontSize: '10px', fontWeight: 950,
  textTransform: 'uppercase' as const, color: 'var(--admin-text-muted)',
  letterSpacing: '2px', borderBottom: '1px solid var(--admin-border)'
};

const tdStyle = {
  padding: '20px 24px', verticalAlign: 'middle', borderBottom: '1px solid var(--admin-border)'
};

const trStyle = { cursor: 'pointer', transition: 'all 0.2s ease' };

const avatarStyle = {
  width: '44px', height: '44px', borderRadius: '14px',
  display: 'flex', alignItems: 'center', justifyContent: 'center',
  color: '#fff', fontSize: '18px', fontWeight: 950
};

const actionBtnSmallStyle = {
  padding: '10px', borderRadius: '12px', background: 'var(--admin-bg)',
  border: '1px solid var(--admin-border)', color: 'var(--admin-text)',
  cursor: 'pointer', transition: 'all 0.2s'
};

const detailContainerStyle = {
  background: 'var(--admin-surface)', border: '1px solid var(--admin-border)',
  borderRadius: '40px', padding: '40px', position: 'sticky' as const, top: '40px',
  boxShadow: '0 30px 60px rgba(0,0,0,0.1)'
};

const largeAvatarStyle = {
  width: '100px', height: '100px', borderRadius: '35px',
  margin: '0 auto 20px', display: 'flex', alignItems: 'center', justifyContent: 'center',
  fontSize: '40px', fontWeight: 950, color: '#fff'
};

const infoGridStyle = { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '32px' };
const infoBoxStyle = { padding: '18px', background: 'rgba(255,255,255,0.02)', borderRadius: '20px', border: '1px solid var(--admin-border)' };
const miniLabelStyle = { display: 'block', fontSize: '9px', fontWeight: 950, textTransform: 'uppercase' as const, color: 'var(--admin-text-muted)', letterSpacing: '2px', marginBottom: '6px' };
const miniValueStyle = { fontSize: '14px', fontWeight: 800, color: 'var(--admin-text)', overflow: 'hidden', textOverflow: 'ellipsis' };
const messageBoxStyle = { background: 'var(--admin-bg)', padding: '24px', borderRadius: '24px', lineHeight: 1.6, fontSize: '14px', color: 'var(--admin-text)', border: '1px solid var(--admin-border)' };
const btnStatusStyle = { display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', padding: '16px', borderRadius: '18px', border: '1px solid', fontSize: '13px', fontWeight: 900, cursor: 'pointer', transition: 'all 0.2s' };
const btnCVStyle = { display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', width: '100%', padding: '20px', borderRadius: '20px', background: 'var(--admin-text)', color: 'var(--admin-bg)', fontSize: '15px', fontWeight: 950, textDecoration: 'none', transition: 'all 0.3s' };
const closeBtnStyle = { background: 'rgba(255,255,255,0.05)', border: 'none', color: 'var(--admin-text)', width: '36px', height: '36px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' };

const modalOverlayStyle = { position: 'fixed' as const, inset: 0, background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(10px)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000, padding: '20px' };
const modalContentStyle = { background: 'var(--admin-surface)', border: '1px solid var(--admin-border)', borderRadius: '40px', padding: '40px', width: '100%', maxWidth: '500px' };
const modalInputStyle = { width: '100%', padding: '18px 24px', borderRadius: '16px', border: '1px solid var(--admin-border)', background: 'var(--admin-bg)', color: 'var(--admin-text)', fontSize: '15px', outline: 'none' };
