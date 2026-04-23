'use client';

import React from 'react';
import { MousePointer2, ClipboardList, Calendar, Rocket } from 'lucide-react';

const steps = [
  {
    num: '1',
    title: 'Choose A Service',
    desc: 'Select the primary technologies and scope tailored to your business vision.',
    icon: <MousePointer2 size={32} color="#7c3aed" />,
    color: '#7c3aed',
  },
  {
    num: '2',
    title: 'Define Requirements',
    desc: 'Collaborative deep-dive sessions to architect your technical specifications.',
    icon: <ClipboardList size={32} color="#06b6d4" />,
    color: '#06b6d4',
  },
  {
    num: '3',
    title: 'Request A Meeting',
    desc: 'Direct consultation with our lead strategists to finalize implementation.',
    icon: <Calendar size={32} color="#ec4899" />,
    color: '#ec4899',
  },
  {
    num: '4',
    title: 'Final Solution',
    desc: 'Production-ready delivery with full optimization and scale readiness.',
    icon: <Rocket size={32} color="#10b981" />,
    color: '#10b981',
  },
];

export default function WorkProcess() {
  return (
    <section className="section" id="work-process" style={{ paddingBottom: '200px' }}>
      <div className="container">
        <div className="flex-center reveal-up" style={{ marginBottom: '100px', textAlign: 'center' }}>
          <span className="system-status" style={{ marginBottom: '16px' }}>
            <div className="system-dot" />
            HOW IT WORKS
          </span>
          <h2 className="section-heading">Standard Work <span className="gradient-text">Process</span></h2>
          <p className="section-subtext" style={{ margin: '0 auto' }}>
            Our streamlined methodology ensures maximum transparency and technical excellence from initial concept to global deployment.
          </p>
        </div>

        <div className="zigzag-process-container">
          {/* Zigzag SVG line */}
          <svg className="zigzag-svg-line" width="100%" height="200" viewBox="0 0 1000 200" preserveAspectRatio="none">
            <path 
              className="zigzag-path" 
              d="M 125 70 L 375 170 L 625 70 L 875 170" 
              stroke="rgba(0,0,0,0.1)"
            />
          </svg>

          {steps.map((step, i) => (
            <div key={i} className="zigzag-step reveal-up" style={{ transitionDelay: `${i * 0.15}s` }}>
              <div className="zigzag-circle-wrapper">
                <div className="zigzag-number">{step.num}</div>
                <div className="zigzag-circle">
                   {step.icon}
                </div>
              </div>
              <div style={{ maxWidth: '200px' }}>
                <h3 style={{ fontSize: '18px', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '12px' }}>{step.title}</h3>
                <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{step.desc} </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
