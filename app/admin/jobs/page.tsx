'use client';

import { useState, useEffect } from 'react';
import { 
  Plus, Search, Edit2, Trash2, X, Check, 
  Briefcase, DollarSign, Layers, MapPin, 
  ListChecks, Type, RotateCcw, Save, Sparkles, Target,
  Loader2
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const CATEGORIES = ['Engineering', 'Design', 'Management', 'Marketing', 'Support', 'Game'];
const TYPES = ['Full-time', 'Part-time', 'Contract', 'Internship'];

export default function AdminJobsPage() {
  const [jobs, setJobs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingJob, setEditingJob] = useState<any>(null);
  const [formData, setFormData] = useState({
    title: '',
    category: 'Engineering',
    type: 'Full-time',
    experience: '',
    salary: '',
    description: '',
    requirements: '',
    icon_name: 'Code2',
    is_active: true
  });

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/admin/jobs');
      const data = await res.json();
      setJobs(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error('Fetch error:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleOpenModal = (job: any = null) => {
    if (job) {
      setEditingJob(job);
      setFormData({
        ...job,
        requirements: job.requirements?.join('\n') || ''
      });
    } else {
      setEditingJob(null);
      setFormData({
        title: '',
        category: 'Engineering',
        type: 'Full-time',
        experience: '',
        salary: '',
        description: '',
        requirements: '',
        icon_name: 'Code2',
        is_active: true
      });
    }
    setIsModalOpen(true);
  };

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const payload = {
      ...formData,
      requirements: formData.requirements.split('\n').filter(r => r.trim() !== '')
    };

    try {
      const res = await fetch('/api/admin/jobs', {
        method: editingJob ? 'PUT' : 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(editingJob ? { ...payload, id: editingJob.id } : payload)
      });

      if (res.ok) {
        setIsModalOpen(false);
        fetchJobs();
      } else {
        const errorData = await res.json();
        console.error('API Error:', errorData);
        alert(`Error saving job: ${errorData.error || 'Unknown error'}`);
      }
    } catch (err: any) {
      console.error('Save error:', err);
      alert(`Request failed: ${err.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this job mission?')) return;
    try {
      const res = await fetch(`/api/admin/jobs?id=${id}`, { method: 'DELETE' });
      if (res.ok) fetchJobs();
    } catch (err) {
      console.error('Delete error:', err);
    }
  };

  const filteredJobs = jobs.filter(j => 
    j.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    j.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ padding: '40px', maxWidth: '1200px', margin: '0 auto' }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px', flexWrap: 'wrap', gap: '20px' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
             <Target size={20} color="#7c3aed" />
             <span style={{ fontSize: '12px', fontWeight: 900, color: '#7c3aed', letterSpacing: '2px', textTransform: 'uppercase' }}>Recruitment Hub</span>
          </div>
          <h1 style={{ fontSize: '36px', fontWeight: 950, letterSpacing: '-1.5px', color: 'var(--admin-text)' }}>Job <span style={{ color: '#7c3aed' }}>Arsenal</span></h1>
          <p style={{ color: 'var(--admin-text-muted)', fontSize: '14px', marginTop: '4px' }}>Deploy and manage open missions for the SoftCodec elite pool.</p>
        </div>
        
        <div style={{ display: 'flex', gap: '12px' }}>
           <button 
             onClick={fetchJobs}
             style={btnIconStyle}
           >
             <RotateCcw size={20} className={loading ? 'animate-spin' : ''} />
           </button>
           <button 
             onClick={() => handleOpenModal()}
             style={{ ...btnPrimaryStyle, background: 'linear-gradient(135deg, #7c3aed, #06b6d4)' }}
           >
             <Plus size={20} /> Deploy Mission
           </button>
        </div>
      </div>

      {/* Search Bar */}
      <div style={{ position: 'relative', marginBottom: '40px' }}>
        <Search style={{ position: 'absolute', left: '20px', top: '50%', transform: 'translateY(-50%)', color: 'var(--admin-text-muted)' }} size={20} />
        <input 
          type="text"
          placeholder="Search missions by title, category, or stack..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={inputSearchStyle}
        />
      </div>

      {/* Jobs Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '24px' }}>
        <AnimatePresence>
          {loading ? (
            [1,2,3].map(n => <div key={n} style={skeletonStyle} />)
          ) : filteredJobs.length > 0 ? (
            filteredJobs.map(job => (
              <motion.div 
                layout
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                style={jobCardStyle}
              >
                {!job.is_active && (
                  <div style={inactiveBadgeStyle}>Mission Paused</div>
                )}
                
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '24px' }}>
                  <div style={iconBoxStyle}>
                    <Briefcase size={22} color="#7c3aed" />
                  </div>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <button onClick={() => handleOpenModal(job)} style={actionBtnStyle}><Edit2 size={16} /></button>
                    <button onClick={() => handleDelete(job.id)} style={{ ...actionBtnStyle, color: '#ef4444' }}><Trash2 size={16} /></button>
                  </div>
                </div>

                <h3 style={{ fontSize: '20px', fontWeight: 900, marginBottom: '8px', color: 'var(--admin-text)' }}>{job.title}</h3>
                <p style={{ fontSize: '13px', color: 'var(--admin-text-muted)', lineHeight: 1.5, marginBottom: '20px', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                  {job.description}
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '24px' }}>
                  <span style={tagStyle}>{job.category}</span>
                  <span style={{ ...tagStyle, background: 'var(--admin-surface)' }}>{job.type}</span>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '20px', borderTop: '1px solid var(--admin-border)' }}>
                  <div style={{ fontSize: '14px', fontWeight: 800, color: 'var(--admin-text)' }}>{job.salary || 'Competitive'}</div>
                  <div style={{ fontSize: '12px', color: 'var(--admin-text-muted)', fontWeight: 600 }}>{job.experience}</div>
                </div>
              </motion.div>
            ))
          ) : (
            <div style={{ gridColumn: '1/-1', textAlign: 'center', padding: '100px 0', color: 'var(--admin-text-muted)' }}>
               <Sparkles size={48} style={{ margin: '0 auto 20px', opacity: 0.2 }} />
               <p>No active missions found. Deploy your first role!</p>
            </div>
          )}
        </AnimatePresence>
      </div>

      {/* Modal Overlay */}
      <AnimatePresence>
        {isModalOpen && (
          <div style={modalOverlayStyle}>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              style={modalContentStyle}
            >
              <div style={modalHeaderStyle}>
                <h2 style={{ fontSize: '24px', fontWeight: 950 }}>{editingJob ? 'Modify Mission' : 'Deploy New Mission'}</h2>
                <button onClick={() => setIsModalOpen(false)} style={closeBtnStyle}><X size={24} /></button>
              </div>
              
              <form onSubmit={handleSubmit} style={modalFormStyle}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '24px' }}>
                  <div style={{ gridColumn: '1/-1' }}>
                    <label style={labelStyle}>Job Title *</label>
                    <input 
                      required
                      value={formData.title}
                      onChange={e => setFormData({...formData, title: e.target.value})}
                      style={modalInputStyle}
                      placeholder="e.g. Senior Next.js Developer"
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>Category</label>
                    <select 
                      value={formData.category}
                      onChange={e => setFormData({...formData, category: e.target.value})}
                      style={modalInputStyle}
                    >
                      {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
                    </select>
                  </div>
                  <div>
                    <label style={labelStyle}>Type</label>
                    <select 
                      value={formData.type}
                      onChange={e => setFormData({...formData, type: e.target.value})}
                      style={modalInputStyle}
                    >
                      {TYPES.map(t => <option key={t} value={t}>{t}</option>)}
                    </select>
                  </div>
                  <div>
                    <label style={labelStyle}>Experience Level</label>
                    <input 
                      value={formData.experience}
                      onChange={e => setFormData({...formData, experience: e.target.value})}
                      style={modalInputStyle}
                      placeholder="e.g. 2+ Years"
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>Salary Package</label>
                    <input 
                      value={formData.salary}
                      onChange={e => setFormData({...formData, salary: e.target.value})}
                      style={modalInputStyle}
                      placeholder="e.g. 150k - 200k"
                    />
                  </div>
                </div>

                <div style={{ marginBottom: '24px' }}>
                  <label style={labelStyle}>Description Brief</label>
                  <textarea 
                    rows={3}
                    value={formData.description}
                    onChange={e => setFormData({...formData, description: e.target.value})}
                    style={{ ...modalInputStyle, borderRadius: '20px', resize: 'none' }}
                    placeholder="Provide a high-level overview of the role..."
                  />
                </div>

                <div style={{ marginBottom: '24px' }}>
                  <label style={labelStyle}>Arsenal Requirements (One per line)</label>
                  <textarea 
                    rows={4}
                    value={formData.requirements}
                    onChange={e => setFormData({...formData, requirements: e.target.value})}
                    style={{ ...modalInputStyle, borderRadius: '20px', resize: 'none' }}
                    placeholder="Next.js Proficiency&#10;TypeScript Mastery&#10;AI Integration Skills"
                  />
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '32px' }}>
                  <input 
                    type="checkbox"
                    id="is_active"
                    checked={formData.is_active}
                    onChange={e => setFormData({...formData, is_active: e.target.checked})}
                    style={{ width: '20px', height: '20px', cursor: 'pointer' }}
                  />
                  <label htmlFor="is_active" style={{ fontSize: '14px', fontWeight: 700, color: 'var(--admin-text-muted)', cursor: 'pointer' }}>Mission is Active and Live on Careers Portal</label>
                </div>

                <button 
                  type="submit"
                  disabled={isSubmitting}
                  style={{ ...btnPrimaryStyle, width: '100%', padding: '18px', background: 'var(--admin-text)', color: 'var(--admin-bg)', opacity: isSubmitting ? 0.7 : 1, cursor: isSubmitting ? 'not-allowed' : 'pointer' }}
                >
                  {isSubmitting ? <Loader2 size={20} className="animate-spin" /> : <Save size={20} />}
                  {editingJob 
                    ? (isSubmitting ? 'Saving Modifications...' : 'Save Modifications') 
                    : (isSubmitting ? 'Initializing Mission...' : 'Initialize Mission')}
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── STYLES ───

const btnPrimaryStyle = {
  display: 'flex', alignItems: 'center', gap: '10px',
  padding: '12px 24px', borderRadius: '16px',
  border: 'none', color: '#fff', fontSize: '14px', fontWeight: 800,
  cursor: 'pointer', transition: 'all 0.3s', boxShadow: '0 10px 20px rgba(124,58,237,0.2)'
};

const btnIconStyle = {
  padding: '12px', borderRadius: '16px',
  background: 'var(--admin-surface)', border: '1px solid var(--admin-border)',
  color: 'var(--admin-text)', cursor: 'pointer', transition: 'all 0.3s'
};

const inputSearchStyle = {
  width: '100%', padding: '18px 24px 18px 56px',
  background: 'var(--admin-surface)', border: '1px solid var(--admin-border)',
  borderRadius: '24px', color: 'var(--admin-text)', outline: 'none',
  fontSize: '15px', transition: 'all 0.3s'
};

const jobCardStyle = {
  background: 'var(--admin-surface)', border: '1px solid var(--admin-border)',
  padding: '32px', borderRadius: '32px', position: 'relative' as const,
  transition: 'all 0.3s ease'
};

const iconBoxStyle = {
  width: '48px', height: '48px', borderRadius: '14px',
  background: 'rgba(124, 58, 237, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center'
};

const actionBtnStyle = {
  padding: '8px', background: 'transparent', border: 'none',
  color: 'var(--admin-text-muted)', cursor: 'pointer', transition: 'all 0.2s'
};

const tagStyle = {
  padding: '6px 12px', borderRadius: '8px', background: 'rgba(124, 58, 237, 0.1)',
  color: '#7c3aed', fontSize: '10px', fontWeight: 800, textTransform: 'uppercase' as const, letterSpacing: '1px'
};

const inactiveBadgeStyle = {
  position: 'absolute' as const, top: '16px', right: '16px',
  background: 'rgba(239, 68, 68, 0.1)', color: '#ef4444',
  padding: '4px 12px', borderRadius: '100px', fontSize: '10px', fontWeight: 900, textTransform: 'uppercase' as const
};

const modalOverlayStyle = {
  position: 'fixed' as const, inset: 0, zIndex: 100,
  background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(10px)',
  display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px'
};

const modalContentStyle = {
  background: 'var(--admin-bg)', border: '1px solid var(--admin-border)',
  width: '100%', maxWidth: '700px', borderRadius: '40px', overflow: 'hidden'
};

const modalHeaderStyle = {
  padding: '32px 40px', borderBottom: '1px solid var(--admin-border)',
  display: 'flex', justifyContent: 'space-between', alignItems: 'center'
};

const closeBtnStyle = {
  background: 'transparent', border: 'none', color: 'var(--admin-text)', cursor: 'pointer'
};

const modalFormStyle = {
  padding: '40px', maxHeight: '75vh', overflowY: 'auto' as const
};

const modalInputStyle = {
  width: '100%', padding: '16px 20px', borderRadius: '16px',
  background: 'var(--admin-surface)', border: '1px solid var(--admin-border)',
  color: 'var(--admin-text)', outline: 'none', fontSize: '14px'
};

const labelStyle = {
  display: 'block', fontSize: '11px', fontWeight: 800, color: 'var(--admin-text-muted)',
  textTransform: 'uppercase' as const, letterSpacing: '1.5px', marginBottom: '10px'
};

const skeletonStyle = {
  height: '280px', borderRadius: '32px', background: 'var(--admin-surface)', opacity: 0.5
};
