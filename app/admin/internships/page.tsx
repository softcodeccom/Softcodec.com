'use client';

import { useState, useEffect } from 'react';
import { 
  Award, Search, RotateCcw, Calendar, CheckCircle2, 
  Clock, Download, Upload, Play, X, User, Mail, 
  Phone, Briefcase, Sparkles, FileText, CheckCircle, 
  ChevronRight, AlertCircle, PlusCircle, ExternalLink, Trash2
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const PREDEFINED_FIELDS = [
  'UI/UX Design',
  'MERN Stack Development',
  'Mobile App Development',
  'Python & AI Development',
  'Frontend Web Development',
  'Backend API Development',
  'Graphic & Motion Design',
  'DevOps & Cloud Engineering'
];

export default function AdminInternshipsPage() {
  const [internships, setInternships] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('All'); // All | Pending | Active | Completed
  const [selectedIntern, setSelectedIntern] = useState<any | null>(null);

  // Modals
  const [startModal, setStartModal] = useState(false);
  const [certModal, setCertModal] = useState(false);

  // Start Modal State
  const [selectedField, setSelectedField] = useState(PREDEFINED_FIELDS[0]);
  const [customField, setCustomField] = useState('');
  const [startDate, setStartDate] = useState(new Date().toISOString().slice(0, 10));
  
  // Calculate 2 months from today
  const defaultEndDate = new Date();
  defaultEndDate.setDate(defaultEndDate.getDate() + 60);
  const [endDate, setEndDate] = useState(defaultEndDate.toISOString().slice(0, 10));

  // Certificate Modal State
  const [certFile, setCertFile] = useState<File | null>(null);
  const [uploadingCert, setUploadingCert] = useState(false);
  const [submittingStart, setSubmittingStart] = useState(false);

  useEffect(() => {
    fetchInternships();
  }, []);

  const fetchInternships = async () => {
    setLoading(true);
    try {
      const res = await fetch(`/api/admin/internships?t=${Date.now()}`);
      const data = await res.json();
      setInternships(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error('Fetch error:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleStartInternship = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedIntern) return;
    setSubmittingStart(true);

    const finalField = selectedField === 'Custom' ? customField : selectedField;

    try {
      const res = await fetch('/api/admin/internships', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          id: selectedIntern.id,
          action: 'start',
          field: finalField,
          start_date: startDate,
          end_date: endDate
        })
      });

      if (res.ok) {
        alert(`Internship Started for ${selectedIntern.full_name}! Confirmation email automatically sent.`);
        setStartModal(false);
        fetchInternships();
        setSelectedIntern(null);
      } else {
        const err = await res.json();
        alert(`Error: ${err.error || 'Failed to start internship'}`);
      }
    } catch (err: any) {
      console.error('Start error:', err);
      alert('Error starting internship: ' + err.message);
    } finally {
      setSubmittingStart(false);
    }
  };

  const handleUploadCertificate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedIntern || !certFile) {
      alert('Please select a certificate file');
      return;
    }

    setUploadingCert(true);
    try {
      const formData = new FormData();
      formData.append('id', selectedIntern.id);
      formData.append('certificate', certFile);

      const res = await fetch('/api/admin/internships/upload-certificate', {
        method: 'POST',
        body: formData
      });

      const data = await res.json();
      if (res.ok) {
        alert(`Certificate successfully uploaded and email sent to ${selectedIntern.full_name}!`);
        setCertModal(false);
        setCertFile(null);
        fetchInternships();
        setSelectedIntern(data.applicant);
      } else {
        alert(`Upload error: ${data.error}`);
      }
    } catch (err: any) {
      console.error('Cert upload error:', err);
      alert('Upload failed: ' + err.message);
    } finally {
      setUploadingCert(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this record?')) return;
    try {
      const res = await fetch(`/api/admin/internships?id=${id}`, { method: 'DELETE' });
      if (res.ok) {
        setSelectedIntern(null);
        fetchInternships();
      }
    } catch (err) {
      console.error('Delete error:', err);
    }
  };

  const filteredInterns = internships.filter(item => {
    const matchesSearch = 
      item.full_name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.field?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.position?.toLowerCase().includes(searchTerm.toLowerCase());

    if (activeTab === 'Pending') return matchesSearch && (item.status === 'pending' || item.status === 'new' || !item.status);
    if (activeTab === 'Active') return matchesSearch && item.status === 'active';
    if (activeTab === 'Completed') return matchesSearch && item.status === 'completed';

    return matchesSearch;
  });

  const getDaysRemaining = (endStr: string) => {
    if (!endStr) return { days: 0, percent: 0 };
    const end = new Date(endStr).getTime();
    const now = new Date().getTime();
    const diff = end - now;
    const days = Math.ceil(diff / (1000 * 3600 * 24));
    
    // 60 days total
    const elapsed = 60 - days;
    const percent = Math.min(100, Math.max(0, Math.round((elapsed / 60) * 100)));
    return { days: Math.max(0, days), percent };
  };

  return (
    <div style={{ padding: 'clamp(20px, 5vw, 40px)', maxWidth: '1600px', margin: '0 auto' }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px', flexWrap: 'wrap', gap: '20px' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
            <div style={{ padding: '6px', background: 'rgba(124, 58, 237, 0.1)', borderRadius: '8px' }}>
              <Award size={18} color="#7c3aed" />
            </div>
            <span style={{ fontSize: '12px', fontWeight: 900, color: '#7c3aed', letterSpacing: '2px', textTransform: 'uppercase' }}>SoftCodec Internship Portal</span>
          </div>
          <h1 style={{ fontSize: 'clamp(28px, 5vw, 40px)', fontWeight: 950, letterSpacing: '-1.5px', color: 'var(--admin-text)' }}>
            Internship <span style={{ color: '#7c3aed' }}>Management</span>
          </h1>
        </div>

        <div style={{ display: 'flex', gap: '12px' }}>
          <button onClick={fetchInternships} style={btnRefreshStyle}>
            <RotateCcw size={20} className={loading ? 'animate-spin' : ''} />
          </button>
        </div>
      </div>

      {/* Navigation Tabs & Search */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginBottom: '40px' }}>
        <div style={{ display: 'flex', gap: '10px', overflowX: 'auto', paddingBottom: '12px', scrollbarWidth: 'none' }}>
          {[
            { id: 'All', label: 'All Candidates', count: internships.length },
            { id: 'Pending', label: 'Pending Approvals', count: internships.filter(i => i.status === 'pending' || i.status === 'new' || !i.status).length },
            { id: 'Active', label: 'Active Interns (2-Month)', count: internships.filter(i => i.status === 'active').length },
            { id: 'Completed', label: 'Completed & Certified', count: internships.filter(i => i.status === 'completed').length },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                ...tabStyle,
                background: activeTab === tab.id ? '#7c3aed' : 'var(--admin-surface)',
                color: activeTab === tab.id ? '#fff' : 'var(--admin-text-muted)',
                boxShadow: activeTab === tab.id ? '0 8px 15px rgba(124, 58, 237, 0.25)' : 'none'
              }}
            >
              {tab.label} <span style={{ opacity: 0.7, fontSize: '11px', marginLeft: '6px', fontWeight: 900 }}>{tab.count}</span>
            </button>
          ))}
        </div>

        <div style={{ position: 'relative' }}>
          <Search style={{ position: 'absolute', left: '20px', top: '50%', transform: 'translateY(-50%)', color: 'var(--admin-text-muted)' }} size={20} />
          <input 
            type="text"
            placeholder="Search interns by name, email, or field (e.g. UI/UX, MERN)..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={inputSearchStyle}
          />
        </div>
      </div>

      {/* Main Table + Dossier Responsive Grid */}
      <div className="admin-responsive-grid">
        {/* Table View */}
        <div style={{ flex: 1, minWidth: '0' }}>
          <div style={tableCardStyle}>
            {loading ? (
              <div style={{ padding: '100px 0', textAlign: 'center', color: 'var(--admin-text-muted)' }}>
                <p style={{ fontWeight: 700, letterSpacing: '1px' }}>LOADING INTERNSHIP DATA...</p>
              </div>
            ) : filteredInterns.length > 0 ? (
              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '850px' }}>
                  <thead>
                    <tr style={{ textAlign: 'left', borderBottom: '1px solid var(--admin-border)' }}>
                      <th style={thStyle}>Candidate</th>
                      <th style={thStyle}>Selected Field</th>
                      <th style={thStyle}>Timeline</th>
                      <th style={thStyle}>Status</th>
                      <th style={{ ...thStyle, textAlign: 'right' }}>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredInterns.map((intern) => {
                      const { days, percent } = getDaysRemaining(intern.end_date);
                      return (
                        <tr 
                          key={intern.id} 
                          onClick={() => setSelectedIntern(intern)}
                          style={{ 
                            ...trStyle, 
                            background: selectedIntern?.id === intern.id ? 'rgba(124, 58, 237, 0.05)' : 'transparent',
                            borderLeft: selectedIntern?.id === intern.id ? '4px solid #7c3aed' : '4px solid transparent'
                          }}
                        >
                          <td style={tdStyle}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                              <div style={{ ...avatarStyle, background: intern.status === 'active' ? 'linear-gradient(135deg, #06b6d4, #7c3aed)' : intern.status === 'completed' ? 'linear-gradient(135deg, #10b981, #06b6d4)' : 'linear-gradient(135deg, #7c3aed, #4f46e5)' }}>
                                {intern.full_name ? intern.full_name[0] : 'I'}
                              </div>
                              <div>
                                <div style={{ fontWeight: 900, fontSize: '14px', color: 'var(--admin-text)' }}>{intern.full_name}</div>
                                <div style={{ fontSize: '12px', color: 'var(--admin-text-muted)' }}>{intern.email}</div>
                              </div>
                            </div>
                          </td>
                          <td style={tdStyle}>
                            <div style={{ fontWeight: 800, fontSize: '13px', color: '#7c3aed' }}>
                              {intern.field || intern.position || 'Software Engineering'}
                            </div>
                          </td>
                          <td style={tdStyle}>
                            {intern.status === 'active' ? (
                              <div style={{ width: '140px' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', fontWeight: 800, color: 'var(--admin-text)', marginBottom: '4px' }}>
                                  <span>{percent}% Completed</span>
                                  <span>{days} days left</span>
                                </div>
                                <div style={{ width: '100%', height: '6px', background: 'rgba(255,255,255,0.1)', borderRadius: '100px', overflow: 'hidden' }}>
                                  <div style={{ width: `${percent}%`, height: '100%', background: 'linear-gradient(90deg, #06b6d4, #10b981)' }} />
                                </div>
                              </div>
                            ) : intern.status === 'completed' ? (
                              <div style={{ fontSize: '12px', color: '#10b981', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '6px' }}>
                                <CheckCircle2 size={14} /> 2 Months Done
                              </div>
                            ) : (
                              <span style={{ fontSize: '11px', color: 'var(--admin-text-muted)' }}>Not Started</span>
                            )}
                          </td>
                          <td style={tdStyle}>
                            <span style={{ 
                              padding: '6px 12px', borderRadius: '8px', fontSize: '10px', 
                              fontWeight: 900, textTransform: 'uppercase', letterSpacing: '1px',
                              background: intern.status === 'active' ? 'rgba(6, 182, 212, 0.15)' : intern.status === 'completed' ? 'rgba(16, 185, 129, 0.15)' : 'rgba(124, 58, 237, 0.15)',
                              color: intern.status === 'active' ? '#06b6d4' : intern.status === 'completed' ? '#10b981' : '#a78bfa'
                            }}>
                              {intern.status === 'active' ? 'Active (In Progress)' : intern.status === 'completed' ? 'Completed' : 'Pending Review'}
                            </span>
                          </td>
                          <td style={{ ...tdStyle, textAlign: 'right' }}>
                            {intern.status === 'completed' && intern.certificate_url ? (
                              <a href={`${intern.certificate_url}${intern.certificate_url.includes('?') ? '&' : '?'}download=${encodeURIComponent(intern.full_name + '_Certificate')}`} target="_blank" download onClick={(e) => e.stopPropagation()} style={{ ...actionBtnSmallStyle, color: '#10b981', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                                <Download size={14} /> Cert
                              </a>
                            ) : (
                              <button style={actionBtnSmallStyle} onClick={(e) => { e.stopPropagation(); setSelectedIntern(intern); }}>
                                <ChevronRight size={16} />
                              </button>
                            )}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            ) : (
              <div style={{ padding: '100px 0', textAlign: 'center', color: 'var(--admin-text-muted)' }}>
                <Award size={48} style={{ opacity: 0.1, margin: '0 auto 20px' }} />
                <p style={{ fontWeight: 800 }}>No candidates found in this view.</p>
              </div>
            )}
          </div>
        </div>

        {/* Selected Intern Dossier Side Panel */}
        <AnimatePresence>
          {selectedIntern && (
            <motion.div 
              initial={{ opacity: 0, x: 20, width: 0 }}
              animate={{ opacity: 1, x: 0, width: 'auto' }}
              exit={{ opacity: 0, x: 20, width: 0 }}
              className="admin-detail-panel"
            >
              <div style={detailContainerStyle}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
                  <h2 style={{ fontSize: '20px', fontWeight: 950 }}>Intern <span style={{ color: '#7c3aed' }}>Dossier</span></h2>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <button onClick={() => handleDelete(selectedIntern.id)} style={{ ...closeBtnStyle, color: '#ef4444', background: '#ef444410' }} title="Delete Record"><Trash2 size={18} /></button>
                    <button onClick={() => setSelectedIntern(null)} style={closeBtnStyle}><X size={20} /></button>
                  </div>
                </div>

                <div style={{ textAlign: 'center', marginBottom: '32px' }}>
                  <div style={{ ...largeAvatarStyle, background: selectedIntern.status === 'completed' ? 'linear-gradient(135deg, #10b981, #06b6d4)' : 'linear-gradient(135deg, #7c3aed, #06b6d4)' }}>
                    {selectedIntern.full_name ? selectedIntern.full_name[0] : 'I'}
                  </div>
                  <h3 style={{ fontSize: '22px', fontWeight: 950, marginBottom: '4px', color: 'var(--admin-text)' }}>{selectedIntern.full_name}</h3>
                  <div style={{ display: 'inline-block', padding: '6px 16px', background: 'rgba(124, 58, 237, 0.1)', borderRadius: '100px', color: '#7c3aed', fontWeight: 900, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                    {selectedIntern.field || selectedIntern.position || 'Internship Candidate'}
                  </div>
                </div>

                {/* Primary Action Buttons */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '32px' }}>
                  {selectedIntern.status !== 'active' && selectedIntern.status !== 'completed' && (
                    <button 
                      onClick={() => setStartModal(true)} 
                      style={{ ...btnPrimaryStyle, background: 'linear-gradient(135deg, #7c3aed, #06b6d4)' }}
                    >
                      <Play size={18} /> Select Field & Start Internship
                    </button>
                  )}

                  {selectedIntern.status === 'active' && (
                    <div style={{ padding: '16px', background: 'rgba(6, 182, 212, 0.08)', borderRadius: '16px', border: '1px solid rgba(6, 182, 212, 0.2)', marginBottom: '8px' }}>
                      <p style={{ fontSize: '12px', fontWeight: 800, color: '#06b6d4', textTransform: 'uppercase', marginBottom: '6px' }}>🚀 Internship In Progress</p>
                      <p style={{ fontSize: '13px', color: 'var(--admin-text)', marginBottom: '8px' }}>Field: <strong>{selectedIntern.field}</strong></p>
                      <p style={{ fontSize: '12px', color: 'var(--admin-text-muted)' }}>Start Date: {new Date(selectedIntern.start_date).toLocaleDateString()}</p>
                      <p style={{ fontSize: '12px', color: 'var(--admin-text-muted)' }}>Expected End Date: {new Date(selectedIntern.end_date).toLocaleDateString()}</p>
                    </div>
                  )}

                  {(selectedIntern.status === 'active' || selectedIntern.status === 'completed') && (
                    <button 
                      onClick={() => setCertModal(true)} 
                      style={{ ...btnPrimaryStyle, background: 'linear-gradient(135deg, #10b981, #059669)' }}
                    >
                      <Upload size={18} /> Upload Completion Certificate
                    </button>
                  )}

                  {selectedIntern.certificate_url && (
                    <a 
                      href={`${selectedIntern.certificate_url}${selectedIntern.certificate_url.includes('?') ? '&' : '?'}download=${encodeURIComponent(selectedIntern.full_name + '_Certificate')}`} 
                      target="_blank" 
                      download 
                      style={{ ...btnPrimaryStyle, background: 'var(--admin-surface)', color: '#10b981', border: '1px solid #10b981', textDecoration: 'none' }}
                    >
                      <Download size={18} /> Download Issued Certificate
                    </a>
                  )}
                </div>

                {/* Candidate Information */}
                <div style={infoGridStyle}>
                  <div style={infoBoxStyle}>
                    <label style={miniLabelStyle}>Contact Email</label>
                    <div style={miniValueStyle}>{selectedIntern.email}</div>
                  </div>
                  <div style={infoBoxStyle}>
                    <label style={miniLabelStyle}>Phone</label>
                    <div style={miniValueStyle}>{selectedIntern.phone || 'N/A'}</div>
                  </div>
                </div>

                {selectedIntern.resume_url && (
                  <a href={selectedIntern.resume_url} target="_blank" style={btnCVStyle}>
                    <Download size={18} /> View / Download Candidate CV
                  </a>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* START INTERNSHIP MODAL */}
      <AnimatePresence>
        {startModal && selectedIntern && (
          <div style={modalOverlayStyle}>
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} style={modalContentStyle}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                <h2 style={{ fontSize: '22px', fontWeight: 950 }}>Start <span style={{ color: '#7c3aed' }}>Internship</span></h2>
                <button onClick={() => setStartModal(false)} style={closeBtnStyle}><X size={20} /></button>
              </div>

              <p style={{ color: 'var(--admin-text-muted)', fontSize: '14px', marginBottom: '24px' }}>
                Select the field of internship for <strong>{selectedIntern.full_name}</strong>. Starting the internship will automatically send a <strong>Welcome & Internship Started Email</strong>.
              </p>

              <form onSubmit={handleStartInternship} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div>
                  <label style={miniLabelStyle}>Select Internship Field *</label>
                  <select 
                    value={selectedField} 
                    onChange={(e) => setSelectedField(e.target.value)} 
                    style={modalInputStyle}
                  >
                    {PREDEFINED_FIELDS.map(f => (
                      <option key={f} value={f}>{f}</option>
                    ))}
                    <option value="Custom">+ Custom Field...</option>
                  </select>
                </div>

                {selectedField === 'Custom' && (
                  <div>
                    <label style={miniLabelStyle}>Custom Field Name *</label>
                    <input 
                      type="text" 
                      placeholder="e.g. Flutter Mobile Engineer" 
                      value={customField} 
                      onChange={(e) => setCustomField(e.target.value)} 
                      required 
                      style={modalInputStyle} 
                    />
                  </div>
                )}

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                  <div>
                    <label style={miniLabelStyle}>Start Date</label>
                    <input 
                      type="date" 
                      value={startDate} 
                      onChange={(e) => {
                        setStartDate(e.target.value);
                        const newEnd = new Date(e.target.value);
                        newEnd.setDate(newEnd.getDate() + 60);
                        setEndDate(newEnd.toISOString().slice(0, 10));
                      }} 
                      required 
                      style={modalInputStyle} 
                    />
                  </div>
                  <div>
                    <label style={miniLabelStyle}>Completion Date (2 Months)</label>
                    <input 
                      type="date" 
                      value={endDate} 
                      onChange={(e) => setEndDate(e.target.value)} 
                      required 
                      style={modalInputStyle} 
                    />
                  </div>
                </div>

                <div style={{ background: 'rgba(124, 58, 237, 0.08)', padding: '16px', borderRadius: '16px', fontSize: '12px', color: '#7c3aed', fontWeight: 700 }}>
                  ✉️ An automatic email will be sent to <strong>{selectedIntern.email}</strong> announcing their internship kickoff!
                </div>

                <button 
                  type="submit" 
                  disabled={submittingStart} 
                  style={{ ...btnPrimaryStyle, background: 'linear-gradient(135deg, #7c3aed, #06b6d4)', width: '100%', padding: '18px' }}
                >
                  {submittingStart ? 'Starting Internship...' : 'Approve & Send Start Email 🚀'}
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* UPLOAD CERTIFICATE MODAL */}
      <AnimatePresence>
        {certModal && selectedIntern && (
          <div style={modalOverlayStyle}>
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} style={modalContentStyle}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                <h2 style={{ fontSize: '22px', fontWeight: 950 }}>Upload <span style={{ color: '#10b981' }}>Certificate</span></h2>
                <button onClick={() => setCertModal(false)} style={closeBtnStyle}><X size={20} /></button>
              </div>

              <p style={{ color: 'var(--admin-text-muted)', fontSize: '14px', marginBottom: '24px' }}>
                Upload official completion certificate for <strong>{selectedIntern.full_name}</strong> ({selectedIntern.field || 'Software Engineer'}). Candidate will receive an email with their personalized download link.
              </p>

              <form onSubmit={handleUploadCertificate} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ border: '2px dashed var(--admin-border)', borderRadius: '24px', padding: '36px 20px', textAlign: 'center', position: 'relative', background: 'var(--admin-bg)' }}>
                  <input 
                    type="file" 
                    accept=".pdf,.png,.jpg,.jpeg" 
                    required 
                    onChange={(e) => setCertFile(e.target.files?.[0] || null)} 
                    style={{ position: 'absolute', inset: 0, opacity: 0, cursor: 'pointer' }} 
                  />
                  <Upload size={36} color="#10b981" style={{ marginBottom: '12px' }} />
                  <p style={{ fontSize: '14px', fontWeight: 700, color: 'var(--admin-text)' }}>
                    {certFile ? certFile.name : 'Click or Drag Certificate File (PDF/Image)'}
                  </p>
                  <span style={{ fontSize: '11px', color: 'var(--admin-text-muted)' }}>Max file size: 10MB</span>
                </div>

                <div style={{ background: 'rgba(16, 185, 129, 0.08)', padding: '16px', borderRadius: '16px', fontSize: '12px', color: '#10b981', fontWeight: 700 }}>
                  ✉️ Candidate email greeting will address: <strong>Dear {selectedIntern.full_name}</strong> with clickable download link.
                </div>

                <button 
                  type="submit" 
                  disabled={uploadingCert} 
                  style={{ ...btnPrimaryStyle, background: 'linear-gradient(135deg, #10b981, #059669)', width: '100%', padding: '18px' }}
                >
                  {uploadingCert ? 'Uploading & Sending Email...' : 'Upload & Send Certificate Email 📜'}
                </button>
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
  padding: '10px 14px', borderRadius: '12px', background: 'var(--admin-bg)',
  border: '1px solid var(--admin-border)', color: 'var(--admin-text)',
  cursor: 'pointer', transition: 'all 0.2s', fontSize: '12px', fontWeight: 700
};

const detailContainerStyle = {
  background: 'var(--admin-surface)', border: '1px solid var(--admin-border)',
  borderRadius: '40px', padding: '36px', position: 'sticky' as const, top: '40px',
  boxShadow: '0 30px 60px rgba(0,0,0,0.1)'
};

const largeAvatarStyle = {
  width: '90px', height: '90px', borderRadius: '30px',
  margin: '0 auto 16px', display: 'flex', alignItems: 'center', justifyContent: 'center',
  fontSize: '36px', fontWeight: 950, color: '#fff'
};

const infoGridStyle = { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '24px' };
const infoBoxStyle = { padding: '16px', background: 'rgba(255,255,255,0.02)', borderRadius: '16px', border: '1px solid var(--admin-border)' };
const miniLabelStyle = { display: 'block', fontSize: '9px', fontWeight: 950, textTransform: 'uppercase' as const, color: 'var(--admin-text-muted)', letterSpacing: '1.5px', marginBottom: '6px' };
const miniValueStyle = { fontSize: '13px', fontWeight: 800, color: 'var(--admin-text)', overflow: 'hidden', textOverflow: 'ellipsis' };
const btnPrimaryStyle = { display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', width: '100%', padding: '16px', borderRadius: '18px', border: 'none', color: '#fff', fontSize: '14px', fontWeight: 900, cursor: 'pointer', transition: 'all 0.3s' };
const btnCVStyle = { display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', width: '100%', padding: '16px', borderRadius: '18px', background: 'var(--admin-bg)', color: 'var(--admin-text)', fontSize: '13px', fontWeight: 800, textDecoration: 'none', border: '1px solid var(--admin-border)', transition: 'all 0.3s' };
const closeBtnStyle = { background: 'rgba(255,255,255,0.05)', border: 'none', color: 'var(--admin-text)', width: '36px', height: '36px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' };

const modalOverlayStyle = { position: 'fixed' as const, inset: 0, background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(10px)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000, padding: '20px' };
const modalContentStyle = { background: 'var(--admin-surface)', border: '1px solid var(--admin-border)', borderRadius: '36px', padding: '36px', width: '100%', maxWidth: '520px' };
const modalInputStyle = { width: '100%', padding: '16px 20px', borderRadius: '16px', border: '1px solid var(--admin-border)', background: 'var(--admin-bg)', color: 'var(--admin-text)', fontSize: '14px', outline: 'none' };
