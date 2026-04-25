'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Search, Star, Edit2, Trash2, CheckCircle, XCircle, X, Save } from 'lucide-react';
import { supabase } from '../../../lib/supabase';

const emptyForm = { name: '', role: '', company: '', rating: 5, content: '', status: 'Published' };

export default function AdminTestimonials() {
  const [searchQuery, setSearchQuery] = useState('');
  const [testimonials, setTestimonials] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editingItem, setEditingItem] = useState<any>(null);
  const [form, setForm] = useState<any>(emptyForm);
  const [saving, setSaving] = useState(false);

  useEffect(() => { fetchTestimonials(); }, []);

  const fetchTestimonials = async () => {
    setLoading(true);
    const { data, error } = await supabase.from('testimonials').select('*').order('created_at', { ascending: false });
    if (!error) setTestimonials(data || []);
    setLoading(false);
  };

  const openAdd = () => { setForm(emptyForm); setEditingItem(null); setShowModal(true); };
  const openEdit = (t: any) => { setForm({ ...t }); setEditingItem(t); setShowModal(true); };

  const handleSave = async () => {
    if (!form.name || !form.content) return;
    setSaving(true);
    let error;
    if (editingItem) {
      ({ error } = await supabase.from('testimonials').update(form).eq('id', editingItem.id));
    } else {
      ({ error } = await supabase.from('testimonials').insert(form));
    }
    if (!error) { setShowModal(false); fetchTestimonials(); }
    else console.error(error);
    setSaving(false);
  };

  const deleteTestimonial = async (id: string) => {
    if (!window.confirm('Delete this testimonial?')) return;
    const { error } = await supabase.from('testimonials').delete().eq('id', id);
    if (!error) setTestimonials(testimonials.filter(t => t.id !== id));
  };

  const toggleStatus = async (t: any) => {
    const newStatus = t.status === 'Published' ? 'Pending Review' : 'Published';
    const { error } = await supabase.from('testimonials').update({ status: newStatus }).eq('id', t.id);
    if (!error) setTestimonials(testimonials.map(item => item.id === t.id ? { ...item, status: newStatus } : item));
  };

  const filteredReviews = testimonials.filter(r =>
    r.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    r.company?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px', flexWrap: 'wrap', gap: '16px' }}>
        <div>
          <h1 style={{ fontSize: '32px', fontWeight: 900, letterSpacing: '-1px', marginBottom: '8px' }}>Manage Testimonials</h1>
          <p style={{ color: 'var(--admin-text-muted)' }}>{testimonials.length} total reviews · {testimonials.filter(t => t.status === 'Published').length} published</p>
        </div>
        <button onClick={openAdd} style={{ padding: '12px 24px', fontSize: '14px', background: 'linear-gradient(135deg, #f59e0b, #ef4444)', border: 'none', borderRadius: '12px', color: '#fff', fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Plus size={18} /> Add Testimonial
        </button>
      </div>

      {/* Search */}
      <div style={{ position: 'relative', marginBottom: '24px' }}>
        <Search size={18} color="rgba(255,255,255,0.4)" style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)' }} />
        <input type="text" placeholder="Search by client name or company..." value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{ width: '100%', padding: '14px 16px 14px 48px', background: 'var(--admin-input-bg)', border: '1px solid var(--admin-border)', borderRadius: '12px', color: 'var(--admin-text)', fontSize: '14px', outline: 'none' }}
        />
      </div>

      {/* Grid */}
      {loading ? (
        <div style={{ padding: '40px', textAlign: 'center', color: 'var(--admin-text-muted)' }}>Loading testimonials...</div>
      ) : filteredReviews.length === 0 ? (
        <div style={{ padding: '40px', textAlign: 'center', color: 'var(--admin-text-muted)' }}>No testimonials found.</div>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '24px' }}>
          {filteredReviews.map((review, i) => (
            <motion.div key={review.id} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.1 }}
              style={{ background: 'var(--admin-surface)', border: '1px solid var(--admin-border)', borderRadius: '24px', padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>

              {/* Header */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(245,158,11,0.1)', color: '#f59e0b', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '18px', flexShrink: 0 }}>
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <h3 style={{ fontSize: '16px', fontWeight: 800, color: 'var(--admin-text)' }}>{review.name}</h3>
                    <p style={{ color: 'var(--admin-text-muted)', fontSize: '13px' }}>{review.role} {review.company ? `@ ${review.company}` : ''}</p>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '2px', color: '#f59e0b', flexShrink: 0 }}>
                  {[...Array(5)].map((_, idx) => (
                    <Star key={idx} size={14} fill={idx < review.rating ? 'currentColor' : 'transparent'} color={idx < review.rating ? 'currentColor' : 'var(--admin-border)'} />
                  ))}
                </div>
              </div>

              {/* Content */}
              <div style={{ padding: '16px', background: 'var(--admin-bg)', borderRadius: '12px', fontSize: '14px', color: 'var(--admin-text-dark)', fontStyle: 'italic', lineHeight: 1.6, flex: 1 }}>
                &quot;{review.content}&quot;
              </div>

              {/* Footer */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--admin-border)', paddingTop: '16px' }}>
                <button onClick={() => toggleStatus(review)} style={{
                  fontSize: '12px', fontWeight: 700, padding: '6px 14px', borderRadius: '100px', border: 'none', cursor: 'pointer',
                  background: review.status === 'Published' ? 'rgba(16,185,129,0.1)' : 'rgba(245,158,11,0.1)',
                  color: review.status === 'Published' ? '#10b981' : '#f59e0b',
                  display: 'flex', alignItems: 'center', gap: '6px'
                }}>
                  {review.status === 'Published' ? <CheckCircle size={13} /> : <XCircle size={13} />}
                  {review.status}
                </button>

                <div style={{ display: 'flex', gap: '8px' }}>
                  <button onClick={() => openEdit(review)} style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'var(--admin-hover)', border: 'none', color: 'var(--admin-text)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                    <Edit2 size={14} />
                  </button>
                  <button onClick={() => deleteTestimonial(review.id)} style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'rgba(239,68,68,0.1)', border: 'none', color: '#ef4444', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                    <Trash2 size={14} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {/* Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.7)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px', backdropFilter: 'blur(8px)' }}
            onClick={(e) => e.target === e.currentTarget && setShowModal(false)}
          >
            <motion.div initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 20 }}
              style={{ background: 'var(--admin-surface)', border: '1px solid var(--admin-border)', borderRadius: '28px', padding: '40px', width: '100%', maxWidth: '560px', maxHeight: '90vh', overflowY: 'auto' }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
                <h2 style={{ fontSize: '24px', fontWeight: 800, color: 'var(--admin-text)' }}>{editingItem ? 'Edit Testimonial' : 'Add Testimonial'}</h2>
                <button onClick={() => setShowModal(false)} style={{ background: 'var(--admin-hover)', border: 'none', borderRadius: '8px', width: '36px', height: '36px', color: 'var(--admin-text)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><X size={18} /></button>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  {[{ label: 'Client Name *', key: 'name', placeholder: 'Ahmed Raza' }, { label: 'Role', key: 'role', placeholder: 'CEO' }, { label: 'Company', key: 'company', placeholder: 'TechVentures' }].map(({ label, key, placeholder }) => (
                    <div key={key} style={{ gridColumn: key === 'name' ? '1 / -1' : undefined }}>
                      <label style={{ display: 'block', fontSize: '12px', fontWeight: 800, color: 'var(--admin-text-muted)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px' }}>{label}</label>
                      <input type="text" value={form[key]} placeholder={placeholder} onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                        style={{ width: '100%', padding: '14px 16px', background: 'var(--admin-input-bg)', border: '1px solid var(--admin-border)', borderRadius: '12px', color: 'var(--admin-text)', fontSize: '14px', outline: 'none' }}
                      />
                    </div>
                  ))}
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: 800, color: 'var(--admin-text-muted)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px' }}>Review *</label>
                  <textarea value={form.content} rows={4} placeholder="Client's feedback..." onChange={(e) => setForm({ ...form, content: e.target.value })}
                    style={{ width: '100%', padding: '14px 16px', background: 'var(--admin-input-bg)', border: '1px solid var(--admin-border)', borderRadius: '12px', color: 'var(--admin-text)', fontSize: '14px', outline: 'none', resize: 'vertical' }}
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '12px', fontWeight: 800, color: 'var(--admin-text-muted)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px' }}>Rating</label>
                    <select value={form.rating} onChange={(e) => setForm({ ...form, rating: Number(e.target.value) })}
                      style={{ width: '100%', padding: '14px 16px', background: 'var(--admin-input-bg)', border: '1px solid var(--admin-border)', borderRadius: '12px', color: 'var(--admin-text)', fontSize: '14px', outline: 'none' }}>
                      {[5, 4, 3, 2, 1].map(n => <option key={n} value={n}>{n} Stars</option>)}
                    </select>
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '12px', fontWeight: 800, color: 'var(--admin-text-muted)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px' }}>Status</label>
                    <select value={form.status} onChange={(e) => setForm({ ...form, status: e.target.value })}
                      style={{ width: '100%', padding: '14px 16px', background: 'var(--admin-input-bg)', border: '1px solid var(--admin-border)', borderRadius: '12px', color: 'var(--admin-text)', fontSize: '14px', outline: 'none' }}>
                      <option value="Published">Published</option>
                      <option value="Pending Review">Pending Review</option>
                    </select>
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '12px', marginTop: '32px' }}>
                <button onClick={() => setShowModal(false)} style={{ flex: 1, padding: '14px', background: 'var(--admin-hover)', border: '1px solid var(--admin-border)', borderRadius: '12px', color: 'var(--admin-text)', fontWeight: 700, cursor: 'pointer', fontSize: '14px' }}>Cancel</button>
                <button onClick={handleSave} disabled={saving} style={{ flex: 2, padding: '14px', background: 'linear-gradient(135deg, #f59e0b, #ef4444)', border: 'none', borderRadius: '12px', color: '#fff', fontWeight: 800, cursor: saving ? 'not-allowed' : 'pointer', fontSize: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', opacity: saving ? 0.7 : 1 }}>
                  <Save size={16} /> {saving ? 'Saving...' : editingItem ? 'Save Changes' : 'Add Review'}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
