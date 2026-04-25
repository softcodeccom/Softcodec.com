'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Search, Edit2, Trash2, X, Save, ExternalLink } from 'lucide-react';
import { supabase } from '../../../lib/supabase';

const CATEGORIES = ['Web Development', 'Mobile Apps', 'AI & Automation', 'E-Commerce', 'Cloud & DevOps', 'UI/UX Design', 'SaaS'];
const STATUSES = ['Published', 'Draft'];

const emptyForm = { title: '', category: 'Web Development', status: 'Published', description: '', image_url: '', live_url: '', github_url: '', tech_stack: '' };

export default function AdminProjects() {
  const [searchQuery, setSearchQuery] = useState('');
  const [projects, setProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editingProject, setEditingProject] = useState<any>(null);
  const [form, setForm] = useState(emptyForm);
  const [saving, setSaving] = useState(false);

  useEffect(() => { fetchProjects(); }, []);

  const fetchProjects = async () => {
    setLoading(true);
    const { data, error } = await supabase.from('projects').select('*').order('created_at', { ascending: false });
    if (!error) setProjects(data || []);
    setLoading(false);
  };

  const openAdd = () => { setForm(emptyForm); setEditingProject(null); setShowModal(true); };
  const openEdit = (p: any) => {
    setForm({ ...p, tech_stack: Array.isArray(p.tech_stack) ? p.tech_stack.join(', ') : p.tech_stack || '' });
    setEditingProject(p);
    setShowModal(true);
  };

  const handleSave = async () => {
    if (!form.title || !form.category) return;
    setSaving(true);
    const payload = {
      ...form,
      tech_stack: form.tech_stack ? form.tech_stack.split(',').map((t: string) => t.trim()).filter(Boolean) : [],
    };
    let error;
    if (editingProject) {
      ({ error } = await supabase.from('projects').update(payload).eq('id', editingProject.id));
    } else {
      ({ error } = await supabase.from('projects').insert(payload));
    }
    if (!error) { setShowModal(false); fetchProjects(); }
    else console.error(error);
    setSaving(false);
  };

  const deleteProject = async (id: string) => {
    if (!window.confirm('Delete this project?')) return;
    const { error } = await supabase.from('projects').delete().eq('id', id);
    if (!error) setProjects(projects.filter(p => p.id !== id));
  };

  const toggleStatus = async (p: any) => {
    const newStatus = p.status === 'Published' ? 'Draft' : 'Published';
    const { error } = await supabase.from('projects').update({ status: newStatus }).eq('id', p.id);
    if (!error) setProjects(projects.map(proj => proj.id === p.id ? { ...proj, status: newStatus } : proj));
  };

  const filtered = projects.filter(p =>
    p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px', flexWrap: 'wrap', gap: '16px' }}>
        <div>
          <h1 style={{ fontSize: '32px', fontWeight: 900, letterSpacing: '-1px', marginBottom: '8px' }}>Manage Projects</h1>
          <p style={{ color: 'var(--admin-text-muted)' }}>{projects.length} projects in portfolio</p>
        </div>
        <button onClick={openAdd} className="btn-primary" style={{ padding: '12px 24px', fontSize: '14px', background: 'linear-gradient(135deg, #7c3aed, #06b6d4)', display: 'flex', alignItems: 'center', gap: '8px', border: 'none', borderRadius: '12px', color: '#fff', fontWeight: 700, cursor: 'pointer' }}>
          <Plus size={18} /> Add New Project
        </button>
      </div>

      {/* Search */}
      <div style={{ position: 'relative', marginBottom: '24px' }}>
        <Search size={18} color="rgba(255,255,255,0.4)" style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)' }} />
        <input
          type="text" placeholder="Search projects..." value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{ width: '100%', padding: '14px 16px 14px 48px', background: 'var(--admin-input-bg)', border: '1px solid var(--admin-border)', borderRadius: '12px', color: 'var(--admin-text)', fontSize: '14px', outline: 'none' }}
        />
      </div>

      {/* Table */}
      <div style={{ background: 'var(--admin-surface)', border: '1px solid var(--admin-border)', borderRadius: '24px', overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '600px' }}>
          <thead>
            <tr style={{ background: 'var(--admin-hover)', borderBottom: '1px solid var(--admin-border)' }}>
              {['Project Name', 'Category', 'Status', 'Date Added', 'Actions'].map((h, i) => (
                <th key={i} style={{ padding: '20px 24px', color: 'var(--admin-text-muted)', fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', textAlign: i === 4 ? 'right' : 'left' }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr><td colSpan={5} style={{ padding: '40px', textAlign: 'center', color: 'var(--admin-text-muted)' }}>Loading...</td></tr>
            ) : filtered.length === 0 ? (
              <tr><td colSpan={5} style={{ padding: '40px', textAlign: 'center', color: 'var(--admin-text-muted)' }}>No projects found.</td></tr>
            ) : filtered.map((project, i) => (
              <motion.tr key={project.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }} style={{ borderBottom: '1px solid var(--admin-border)' }}>
                <td style={{ padding: '20px 24px' }}>
                  <div style={{ fontWeight: 700, fontSize: '15px', color: 'var(--admin-text)', marginBottom: '4px' }}>{project.title}</div>
                  {project.live_url && (
                    <a href={project.live_url} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--admin-text-muted)', fontSize: '12px', display: 'flex', alignItems: 'center', gap: '4px', textDecoration: 'none' }}>
                      <ExternalLink size={11} /> {project.live_url}
                    </a>
                  )}
                </td>
                <td style={{ padding: '20px 24px' }}>
                  <span style={{ background: 'var(--admin-hover)', padding: '6px 12px', borderRadius: '100px', fontSize: '12px', fontWeight: 600 }}>{project.category}</span>
                </td>
                <td style={{ padding: '20px 24px' }}>
                  <button onClick={() => toggleStatus(project)} style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: project.status === 'Published' ? '#10b981' : '#f59e0b', background: project.status === 'Published' ? 'rgba(16,185,129,0.1)' : 'rgba(245,158,11,0.1)', border: 'none', padding: '6px 12px', borderRadius: '100px', fontSize: '12px', fontWeight: 700, cursor: 'pointer' }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'currentColor', display: 'inline-block' }} />
                    {project.status}
                  </button>
                </td>
                <td style={{ padding: '20px 24px', color: 'var(--admin-text-muted)', fontSize: '13px' }}>
                  {new Date(project.created_at).toLocaleDateString()}
                </td>
                <td style={{ padding: '20px 24px', textAlign: 'right' }}>
                  <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end' }}>
                    <button onClick={() => openEdit(project)} style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'var(--admin-hover)', border: 'none', color: 'var(--admin-text)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}><Edit2 size={14} /></button>
                    <button onClick={() => deleteProject(project.id)} style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'rgba(239,68,68,0.1)', border: 'none', color: '#ef4444', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}><Trash2 size={14} /></button>
                  </div>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add/Edit Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.7)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px', backdropFilter: 'blur(8px)' }}
            onClick={(e) => e.target === e.currentTarget && setShowModal(false)}
          >
            <motion.div initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 20 }}
              style={{ background: 'var(--admin-surface)', border: '1px solid var(--admin-border)', borderRadius: '28px', padding: '40px', width: '100%', maxWidth: '600px', maxHeight: '90vh', overflowY: 'auto' }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
                <h2 style={{ fontSize: '24px', fontWeight: 800, color: 'var(--admin-text)' }}>{editingProject ? 'Edit Project' : 'Add New Project'}</h2>
                <button onClick={() => setShowModal(false)} style={{ background: 'var(--admin-hover)', border: 'none', borderRadius: '8px', width: '36px', height: '36px', color: 'var(--admin-text)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><X size={18} /></button>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {[
                  { label: 'Project Title *', key: 'title', type: 'text', placeholder: 'e.g. NexTrade AI Platform' },
                  { label: 'Image URL', key: 'image_url', type: 'text', placeholder: '/my-image.png or https://...' },
                  { label: 'Live URL', key: 'live_url', type: 'text', placeholder: 'https://example.com' },
                  { label: 'GitHub URL', key: 'github_url', type: 'text', placeholder: 'https://github.com/...' },
                  { label: 'Tech Stack (comma separated)', key: 'tech_stack', type: 'text', placeholder: 'React, Node.js, MongoDB' },
                ].map(({ label, key, type, placeholder }) => (
                  <div key={key}>
                    <label style={{ display: 'block', fontSize: '12px', fontWeight: 800, color: 'var(--admin-text-muted)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px' }}>{label}</label>
                    <input type={type} value={form[key as keyof typeof form]} placeholder={placeholder}
                      onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                      style={{ width: '100%', padding: '14px 16px', background: 'var(--admin-input-bg)', border: '1px solid var(--admin-border)', borderRadius: '12px', color: 'var(--admin-text)', fontSize: '14px', outline: 'none' }}
                    />
                  </div>
                ))}

                <div>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: 800, color: 'var(--admin-text-muted)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px' }}>Description *</label>
                  <textarea value={form.description} rows={3} placeholder="Brief project description..."
                    onChange={(e) => setForm({ ...form, description: e.target.value })}
                    style={{ width: '100%', padding: '14px 16px', background: 'var(--admin-input-bg)', border: '1px solid var(--admin-border)', borderRadius: '12px', color: 'var(--admin-text)', fontSize: '14px', outline: 'none', resize: 'vertical' }}
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '12px', fontWeight: 800, color: 'var(--admin-text-muted)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px' }}>Category</label>
                    <select value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })}
                      style={{ width: '100%', padding: '14px 16px', background: 'var(--admin-input-bg)', border: '1px solid var(--admin-border)', borderRadius: '12px', color: 'var(--admin-text)', fontSize: '14px', outline: 'none' }}>
                      {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
                    </select>
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '12px', fontWeight: 800, color: 'var(--admin-text-muted)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px' }}>Status</label>
                    <select value={form.status} onChange={(e) => setForm({ ...form, status: e.target.value })}
                      style={{ width: '100%', padding: '14px 16px', background: 'var(--admin-input-bg)', border: '1px solid var(--admin-border)', borderRadius: '12px', color: 'var(--admin-text)', fontSize: '14px', outline: 'none' }}>
                      {STATUSES.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '12px', marginTop: '32px' }}>
                <button onClick={() => setShowModal(false)} style={{ flex: 1, padding: '14px', background: 'var(--admin-hover)', border: '1px solid var(--admin-border)', borderRadius: '12px', color: 'var(--admin-text)', fontWeight: 700, cursor: 'pointer', fontSize: '14px' }}>
                  Cancel
                </button>
                <button onClick={handleSave} disabled={saving} style={{ flex: 2, padding: '14px', background: 'linear-gradient(135deg, #7c3aed, #06b6d4)', border: 'none', borderRadius: '12px', color: '#fff', fontWeight: 800, cursor: saving ? 'not-allowed' : 'pointer', fontSize: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', opacity: saving ? 0.7 : 1 }}>
                  <Save size={16} /> {saving ? 'Saving...' : editingProject ? 'Save Changes' : 'Add Project'}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
