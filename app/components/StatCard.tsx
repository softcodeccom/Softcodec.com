'use client';

import { useState, useEffect, useRef } from 'react';
import * as LucideIcons from 'lucide-react';

interface StatCardProps {
  number: number;
  label: string;
  suffix?: string;
  icon: string;
  delay?: number;
  color?: string;
  glow?: string;
}

export default function StatCard({ 
  number, 
  label, 
  suffix = "+", 
  icon, 
  delay = 0,
  color = "#8b5cf6",
  glow = "rgba(139, 92, 246, 0.3)"
}: StatCardProps) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const IconComponent = (LucideIcons as any)[icon];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const start = 0;
    const end = number;
    const duration = 2500; // Smoother 2.5s duration
    let startTime: number | null = null;

    const easeOutExpo = (t: number) => t === 1 ? 1 : 1 - Math.pow(2, -10 * t);

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      const easedProgress = easeOutExpo(progress);
      setCount(Math.floor(easedProgress * (end - start) + start));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    const timeout = setTimeout(() => {
      requestAnimationFrame(animate);
    }, delay);

    return () => clearTimeout(timeout);
  }, [isVisible, number, delay]);

  return (
    <div 
      ref={cardRef}
      className={`stat-card reveal ${isVisible ? 'visible' : ''}`}
      style={{ 
        '--accent-light': color,
        '--accent-glow': glow,
      } as any}
    >
      <div className="stat-card-glow" />
      
      <div className="stat-card-icon" style={{ 
        color: color, 
        borderColor: `${color}40`,
        background: `${color}10`
      }}>
        {IconComponent && <IconComponent size={28} strokeWidth={1.5} />}
      </div>
      
      <div style={{ position: 'relative', zIndex: 2 }}>
        <div className="stat-card-number" style={{ color: '#ffffff' }}>
          {count}
          <span style={{ color: color, fontSize: '0.6em', marginLeft: '2px', fontWeight: 600 }}>{suffix}</span>
        </div>
        <div className="stat-card-label">
          {label}
        </div>
      </div>

      {/* Subtle bottom indicator */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        width: '40px',
        height: '3px',
        background: color,
        borderRadius: '10px 10px 0 0',
        opacity: 0.3,
        transition: 'all 0.4s ease'
      }} />
    </div>
  );
}
