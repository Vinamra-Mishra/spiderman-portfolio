import React from 'react';
import { Award, GraduationCap, Cpu, ShieldCheck, Terminal, CheckCircle2 } from 'lucide-react';
import { personalInfo, statsHUD, certifications } from '../data/portfolioData';

export default function About({ isSpiderSense }) {
  return (
    <section id="about" style={{ padding: '6rem 0', position: 'relative' }}>
      <div className="hud-container">
        
        {/* Section Header */}
        <div style={{ textTransform: 'uppercase', marginBottom: '3rem' }}>
          <div className="section-badge font-hud">
            <Cpu size={14} />
            <span>PETER PARKER'S LAB // ORIGIN & CREDENTIALS</span>
          </div>
          <h2 className="section-title">
            SUIT <span className={isSpiderSense ? "text-spider-red" : "text-spider-blue"}>SPECIFICATIONS</span> & METRICS
          </h2>
          <p style={{ color: 'var(--spider-text-muted)', maxWidth: '650px' }}>
            System diagnostics and official credentials certified by Oracle, IBM, and The Hashgraph Association.
          </p>
        </div>

        {/* Top Grid: Stats HUD + Education Card */}
        <div className="grid-2" style={{ marginBottom: '3rem' }}>
          
          {/* Stats & Diagnostic Meters */}
          <div className="hud-card" style={{ padding: '2rem' }}>
            <div className="hud-corner hud-corner-tl"></div>
            <div className="hud-corner hud-corner-tr"></div>
            <div className="hud-corner hud-corner-bl"></div>
            <div className="hud-corner hud-corner-br"></div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
              <h3 className="font-hud" style={{ fontSize: '1.1rem', color: '#FFFFFF', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <Terminal size={18} className="text-spider-blue" />
                <span>REAL-TIME SUIT DIAGNOSTICS</span>
              </h3>
              <span className="font-hud" style={{ fontSize: '0.75rem', color: isSpiderSense ? '#FF1E27' : '#00F0FF' }}>
                STATUS: OPTIMAL
              </span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.4rem' }}>
              {statsHUD.map((stat, idx) => (
                <div key={idx}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem', fontSize: '0.88rem' }}>
                    <span style={{ fontWeight: 600, color: '#E5E7EB' }}>{stat.label}</span>
                    <span className="font-hud text-spider-blue" style={{ fontSize: '0.8rem' }}>{stat.code} [{stat.value}%]</span>
                  </div>
                  <div style={{ height: '8px', background: 'rgba(255, 255, 255, 0.08)', borderRadius: '4px', overflow: 'hidden' }}>
                    <div style={{
                      height: '100%',
                      width: `${stat.value}%`,
                      background: isSpiderSense 
                        ? 'linear-gradient(90deg, #FF1E27, #FFBD00)'
                        : 'linear-gradient(90deg, #00F0FF, #005B94)',
                      borderRadius: '4px',
                      boxShadow: isSpiderSense ? '0 0 10px rgba(255, 30, 39, 0.6)' : '0 0 10px rgba(0, 240, 255, 0.5)',
                      transition: 'width 1s ease-in-out'
                    }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Bio Summary Card */}
          <div className="hud-card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div className="hud-corner hud-corner-tl"></div>
            <div className="hud-corner hud-corner-tr"></div>
            <div className="hud-corner hud-corner-bl"></div>
            <div className="hud-corner hud-corner-br"></div>

            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.2rem' }}>
                <div style={{ padding: '0.6rem', borderRadius: '12px', background: 'rgba(0, 240, 255, 0.1)', color: '#00F0FF' }}>
                  <GraduationCap size={24} />
                </div>
                <div>
                  <h3 className="font-hud" style={{ fontSize: '1.2rem', color: '#FFFFFF' }}>ACADEMIC HEADQUARTERS</h3>
                  <div style={{ fontSize: '0.82rem', color: 'var(--spider-text-muted)' }}>{personalInfo.university}</div>
                </div>
              </div>

              <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '1.2rem', borderRadius: '12px', border: '1px solid rgba(255, 255, 255, 0.08)', marginBottom: '1.5rem' }}>
                <div style={{ fontSize: '1rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '0.3rem' }}>
                  {personalInfo.degree}
                </div>
                <div style={{ fontSize: '0.85rem', color: 'var(--spider-text-muted)', marginBottom: '0.8rem' }}>
                  Timeline: {personalInfo.gradYear} | Location: {personalInfo.location}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span className="section-badge font-hud" style={{ margin: 0, padding: '0.2rem 0.6rem', fontSize: '0.7rem' }}>
                    CGPA: {personalInfo.cgpa}
                  </span>
                  <span style={{ fontSize: '0.75rem', color: '#10B981', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                    <CheckCircle2 size={13} /> Active CS Scholar
                  </span>
                </div>
              </div>

              <p style={{ fontSize: '0.92rem', color: 'var(--spider-text-muted)', lineHeight: 1.6 }}>
                Focused on high-concurrency systems, autonomous AI agents, and production-ready RAG architectures with zero latency compromises.
              </p>
            </div>

            <div style={{ paddingTop: '1.2rem', borderTop: '1px solid rgba(255, 255, 255, 0.08)', display: 'flex', gap: '1rem' }}>
              <div style={{ fontSize: '0.8rem', color: 'var(--spider-text-muted)' }}>
                <strong>Key Coursework:</strong> DSA, OOP, Operating Systems, DBMS, Networks, Web Engineering, AI & Agentic Systems.
              </div>
            </div>
          </div>

        </div>

        {/* Certifications Showcase */}
        <div>
          <h3 className="font-hud" style={{ fontSize: '1.2rem', color: '#FFFFFF', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <Award size={20} className="text-spider-yellow" />
            <span>OFFICIAL LICENSES & CERTIFICATIONS</span>
          </h3>

          <div className="grid-3">
            {certifications.map((cert, idx) => (
              <div key={idx} className="hud-card" style={{ padding: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <div style={{
                    padding: '0.6rem',
                    borderRadius: '12px',
                    background: `${cert.color}15`,
                    border: `1px solid ${cert.color}40`,
                    color: cert.color
                  }}>
                    <ShieldCheck size={24} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '0.98rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '0.2rem' }}>
                      {cert.title}
                    </h4>
                    <div style={{ fontSize: '0.8rem', color: cert.color, fontWeight: 600, marginBottom: '0.4rem' }}>
                      {cert.issuer} ({cert.date})
                    </div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--spider-text-muted)', fontFamily: 'Orbitron, monospace' }}>
                      ID: {cert.id}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
