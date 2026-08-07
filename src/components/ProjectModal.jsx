import React from 'react';
import { X, ExternalLink, Github, CheckCircle2, ShieldCheck } from 'lucide-react';

export default function ProjectModal({ project, onClose, isSpiderSense }) {
  if (!project) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 200,
      background: 'rgba(7, 9, 14, 0.85)',
      backdropFilter: 'blur(16px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1.5rem'
    }}>
      <div 
        className="hud-card"
        style={{
          maxWidth: '750px',
          width: '100%',
          maxHeight: '90vh',
          overflowY: 'auto',
          padding: '2rem',
          position: 'relative',
          border: `1px solid ${isSpiderSense ? '#FF1E27' : '#00F0FF'}`
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1.2rem',
            right: '1.2rem',
            background: 'rgba(255, 255, 255, 0.08)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            borderRadius: '50%',
            width: '36px',
            height: '36px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#FFFFFF',
            cursor: 'pointer',
            zIndex: 10
          }}
        >
          <X size={18} />
        </button>

        {/* Modal Content */}
        <div className="section-badge font-hud" style={{ marginBottom: '0.8rem' }}>
          <span>{project.badge} // {project.category}</span>
        </div>

        <h2 style={{ fontSize: '2rem', fontWeight: 900, color: '#FFFFFF', marginBottom: '0.4rem' }}>
          {project.title}
        </h2>
        
        <p style={{ fontSize: '1.05rem', color: isSpiderSense ? '#FF1E27' : '#00F0FF', fontWeight: 600, marginBottom: '1.5rem' }}>
          {project.subtitle}
        </p>

        {/* Banner Image */}
        <div style={{
          width: '100%',
          height: '240px',
          borderRadius: '12px',
          overflow: 'hidden',
          marginBottom: '1.5rem',
          position: 'relative',
          border: '1px solid rgba(255, 255, 255, 0.1)'
        }}>
          <img 
            src={project.image} 
            alt={project.title}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>

        {/* Tech Stack Tags */}
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
          {project.tags.map((tag, idx) => (
            <span 
              key={idx}
              className="font-hud"
              style={{
                padding: '0.3rem 0.75rem',
                borderRadius: '8px',
                background: 'rgba(255, 255, 255, 0.06)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                fontSize: '0.75rem',
                color: '#E5E7EB'
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Mission Highlights */}
        <div style={{ marginBottom: '2rem' }}>
          <h3 className="font-hud" style={{ fontSize: '1.05rem', color: '#FFFFFF', marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <ShieldCheck size={18} className="text-spider-yellow" />
            <span>MISSION DEBRIEF & HIGHLIGHTS</span>
          </h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {project.highlights.map((highlight, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.92rem', color: 'var(--spider-text-muted)', lineHeight: 1.6 }}>
                <CheckCircle2 size={16} className={isSpiderSense ? "text-spider-red" : "text-spider-blue"} style={{ marginTop: '3px', flexShrink: 0 }} />
                <span>{highlight}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Links */}
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="spider-btn spider-btn-primary"
          >
            <Github size={18} />
            <span>VIEW CODE REPOSITORY</span>
          </a>

          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="spider-btn spider-btn-secondary"
          >
            <ExternalLink size={18} />
            <span>LIVE DEMO / REPO</span>
          </a>
        </div>

      </div>
    </div>
  );
}
