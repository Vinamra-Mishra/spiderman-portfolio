import React from 'react';
import { certifications, statsHUD } from '../data/portfolioData';
import { Award, BookOpen, Cpu } from 'lucide-react';

export default function AboutPage({ isSpiderSense }) {
  const accentColor = isSpiderSense ? 'var(--spider-red)' : 'var(--neon-yellow)';

  return (
    <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      
      {/* Header Banner */}
      <div className="spider-card">
        <div className="card-number">01</div>
        <div className="sticker-tag" style={{ marginBottom: '1rem' }}>PETER PARKER LAB // ORIGIN & SPECS</div>
        <h1 className="font-hud" style={{ fontSize: '2.5rem', fontWeight: '900', color: '#FFF' }}>
          SUIT SPECIFICATIONS <span style={{ color: accentColor }}>& METRICS</span>
        </h1>
      </div>

      <div className="spider-grid-2">
        {/* System Capacity */}
        <div className="spider-card">
          <h3 className="font-hud" style={{ fontSize: '1.2rem', color: accentColor, marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Cpu size={20} /> TELEMETRY DIAGNOSTICS
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {statsHUD.map((stat, idx) => (
              <div key={idx}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem', fontSize: '0.85rem' }}>
                  <span className="font-hud" style={{ color: '#D1D5DB' }}>{stat.label}</span>
                  <span className="font-hud" style={{ color: accentColor, fontWeight: 'bold' }}>{stat.value}%</span>
                </div>
                <div style={{ height: '6px', background: 'rgba(255,255,255,0.1)', overflow: 'hidden' }}>
                  <div style={{ height: '100%', width: `${stat.value}%`, background: accentColor }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Academic Origin */}
        <div className="spider-card">
          <h3 className="font-hud" style={{ fontSize: '1.2rem', color: accentColor, marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <BookOpen size={20} /> ACADEMIC BASE
          </h3>
          <h4 className="font-hud" style={{ fontSize: '1.3rem', color: '#FFF', marginBottom: '0.3rem' }}>Vellore Institute of Technology, AP</h4>
          <div style={{ color: accentColor, fontWeight: 'bold', fontSize: '0.95rem', marginBottom: '0.4rem' }}>B.Tech in Computer Science</div>
          <div style={{ color: '#9CA3AF', fontSize: '0.85rem', marginBottom: '1.25rem' }}>Sept 2021 - Present | CGPA: 8.44</div>
          <p style={{ color: '#D1D5DB', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
            Specializing in core computer science, distributed algorithms, data structures, and computer vision systems.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {['Algorithms', 'Data Structures', 'Operating Systems', 'DBMS', 'Networks'].map(c => (
              <span key={c} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid var(--card-border)', padding: '0.2rem 0.6rem', fontSize: '0.75rem', color: '#FFF' }}>
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Certifications Grid */}
      <div className="spider-card">
        <h3 className="font-hud" style={{ fontSize: '1.3rem', color: '#FFF', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Award size={22} color={accentColor} /> VERIFIED CERTIFICATIONS & CLEARANCES
        </h3>
        <div className="spider-grid-2">
          {certifications.map((cert, idx) => (
            <div key={idx} style={{ background: 'rgba(0,0,0,0.5)', padding: '1.25rem', border: '1px solid var(--card-border)', display: 'flex', gap: '1rem' }}>
              <div style={{ background: accentColor, color: '#08090C', padding: '0.8rem', height: 'fit-content' }}>
                <cert.icon size={22} />
              </div>
              <div>
                <div className="font-hud" style={{ fontSize: '1rem', color: '#FFF', fontWeight: 'bold' }}>{cert.title}</div>
                <div style={{ fontSize: '0.8rem', color: accentColor, marginBottom: '0.4rem' }}>{cert.issuer}</div>
                <div style={{ fontSize: '0.75rem', color: '#6B7280' }}>Date: {cert.date} | Credential ID: {cert.credentialId}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
