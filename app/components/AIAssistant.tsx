'use client';

import { useState, useRef, useEffect } from 'react';
import { Send, X, Bot, User, Sparkles, MessageSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Greetings. I am the SoftCodec autonomous assistant. How can I facilitate your digital transformation today?' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input }),
      });
      const data = await res.json();
      setMessages(prev => [...prev, { role: 'assistant', content: data.response }]);
    } catch (err) {
      setMessages(prev => [...prev, { role: 'assistant', content: "Apologies, I am experiencing a temporary connection lag. Please try again or contact our support." }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <motion.div 
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="ai-assistant-bubble"
        onClick={() => setIsOpen(!isOpen)}
        style={{
          position: 'fixed',
          bottom: '30px',
          right: '30px',
          width: '60px',
          height: '60px',
          background: 'linear-gradient(135deg, #7c3aed, #06b6d4)',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          zIndex: 9999,
          boxShadow: '0 10px 30px rgba(124, 58, 237, 0.4)',
          border: '2px solid rgba(255, 255, 255, 0.2)'
        }}
      >
        {isOpen ? <X color="#fff" size={24} /> : <MessageSquare color="#fff" size={24} />}
        <div style={{ position: 'absolute', top: -2, right: -2, width: '12px', height: '12px', background: '#10b981', borderRadius: '50%', border: '2px solid #000' }}></div>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            style={{
              position: 'fixed',
              bottom: '100px',
              right: '30px',
              width: '380px',
              height: '550px',
              maxWidth: 'calc(100vw - 60px)',
              background: 'rgba(3, 3, 10, 0.98)',
              backdropFilter: 'blur(30px)',
              border: '1px solid rgba(124, 58, 237, 0.3)',
              borderRadius: '28px',
              zIndex: 9999,
              display: 'flex',
              flexDirection: 'column',
              boxShadow: '0 25px 80px rgba(0, 0, 0, 0.6)',
              overflow: 'hidden'
            }}
          >
            {/* Header */}
            <div style={{ padding: '24px', borderBottom: '1px solid rgba(255,255,255,0.08)', background: 'linear-gradient(to right, rgba(124, 58, 237, 0.1), transparent)' }}>
               <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ width: '40px', height: '40px', background: 'linear-gradient(135deg, #7c3aed, #06b6d4)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                     <Bot color="#fff" size={20} />
                  </div>
                  <div>
                     <h4 style={{ color: '#fff', fontSize: '15px', fontWeight: 800, margin: 0, fontFamily: 'Orbitron', letterSpacing: '1px' }}>SOFTCODEC AI</h4>
                     <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <div style={{ width: '6px', height: '6px', background: '#10b981', borderRadius: '50%' }}></div>
                        <span style={{ fontSize: '11px', color: '#10b981', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px' }}>Online & Intelligent</span>
                     </div>
                  </div>
               </div>
            </div>

            {/* Messages */}
            <div style={{ flex: 1, overflowY: 'auto', padding: '24px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
               {messages.map((msg, i) => (
                 <motion.div 
                   key={i} 
                   initial={{ opacity: 0, x: msg.role === 'user' ? 20 : -20 }}
                   animate={{ opacity: 1, x: 0 }}
                   style={{ 
                     alignSelf: msg.role === 'user' ? 'flex-end' : 'flex-start',
                     maxWidth: '85%'
                   }}
                 >
                   <div style={{ 
                     padding: '14px 18px',
                     borderRadius: msg.role === 'user' ? '20px 20px 4px 20px' : '20px 20px 20px 4px',
                     background: msg.role === 'user' ? '#7c3aed' : 'rgba(255,255,255,0.05)',
                     color: '#fff',
                     fontSize: '14px',
                     lineHeight: 1.6,
                     border: msg.role === 'user' ? 'none' : '1px solid rgba(255,255,255,0.1)',
                     boxShadow: msg.role === 'user' ? '0 10px 20px rgba(124, 58, 237, 0.2)' : 'none'
                   }}>
                     {msg.content}
                   </div>
                   <div style={{ fontSize: '10px', color: 'rgba(255,255,255,0.3)', marginTop: '6px', textAlign: msg.role === 'user' ? 'right' : 'left', fontWeight: 700, textTransform: 'uppercase' }}>
                      {msg.role === 'assistant' ? 'AI Agent' : 'You'}
                   </div>
                 </motion.div>
               ))}
               {loading && (
                 <div style={{ alignSelf: 'flex-start', padding: '12px 18px', background: 'rgba(255,255,255,0.05)', borderRadius: '15px', color: 'rgba(255,255,255,0.5)', fontSize: '12px' }}>
                    Agent is processing...
                 </div>
               )}
               <div ref={chatEndRef} />
            </div>

            {/* Input */}
            <div style={{ padding: '20px', borderTop: '1px solid rgba(255,255,255,0.08)', background: 'rgba(0,0,0,0.2)' }}>
               <div style={{ position: 'relative', display: 'flex', gap: '10px' }}>
                  <input 
                    type="text" 
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                    placeholder="Ask about SoftCodec, CEO, or Team..."
                    style={{
                      flex: 1,
                      padding: '16px 20px',
                      background: 'rgba(255,255,255,0.03)',
                      border: '1px solid rgba(124, 58, 237, 0.2)',
                      borderRadius: '16px',
                      color: '#fff',
                      fontSize: '14px',
                      outline: 'none',
                      transition: 'all 0.3s'
                    }}
                  />
                  <button 
                    onClick={handleSend}
                    style={{
                      width: '50px',
                      height: '50px',
                      background: 'var(--accent-purple)',
                      borderRadius: '14px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      border: 'none',
                      transition: 'all 0.3s'
                    }}
                  >
                    <Send size={20} color="#fff" />
                  </button>
               </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
