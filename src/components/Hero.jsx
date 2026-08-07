import React from 'react';
import { ShieldCheck, ArrowRight, Github, Linkedin, Mail, FileText, Zap, Award } from 'lucide-react';
import SpiderCanvas3D from './SpiderCanvas3D';
import { personalInfo, certifications } from '../data/portfolioData';

export default function Hero({ isSpiderSense, playWebSound }) {
  const triggerConfettiWeb = async () => {
    if (playWebSound) playWebSound();
    const confetti = (await import('canvas-confetti')).default;
    confetti({
      particleCount: 80,
      spread: 100,
      origin: { y: 0.6 },
      colors: isSpiderSense ? ['#FF1E27', '#FFBD00', '#FFFFFF'] : ['#00F0FF', '#FF1E27', '#FFFFFF']
    });
  };

  return (
    <section 
      id="hero" 
      style={{
        minHeight: '100vh',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '6rem',
        paddingBottom: '4rem',
        overflow: 'hidden'
      }}
    >
      {/* 3D Canvas Background */}
      <SpiderCanvas3D isSpiderSense={isSpiderSense} />

      <div className="hud-container" style={{ position: 'relative', zIndex: 10, width: '100%' }}>
        <div style={{ maxWidth: '820px' }}>
          
          {/* Status & Marvel Badge */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '1.2rem' }}>
            <div className="section-badge font-hud">
              <Zap size={14} className="text-spider-yellow animate-pulse" />
              <span>SPIDER-MAN: BRAND NEW DAY PROTOCOL</span>
            </div>
            
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              padding: '0.35rem 0.8rem',
              borderRadius: '20px',
              background: 'rgba(16, 185, 129, 0.12)',
              border: '1px solid rgba(16, 185, 129, 0.4)',
              color: '#10B981',
              fontSize: '0.72rem',
              fontFamily: 'Orbitron, monospace',
              fontWeight: 700
            }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10B981', display: 'inline-block' }}></span>
              {personalInfo.status}
            </div>
          </div>

          {/* Name & Title Header */}
          <h1 style={{ 
            fontSize: 'clamp(2.8rem, 6vw, 5rem)', 
            fontWeight: 900, 
            lineHeight: 1.05, 
            letterSpacing: '-1px',
            marginBottom: '1rem' 
          }}>
            HI, I'M <span className={isSpiderSense ? "text-spider-red glow-red" : "text-spider-blue glow-blue"}>
              {personalInfo.name.toUpperCase()}
            </span>
          </h1>

          <h2 className="font-hud" style={{ 
            fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)', 
            color: '#E5E7EB', 
            marginBottom: '1.5rem',
            fontWeight: 700 
          }}>
            {personalInfo.tagline}
          </h2>

          <p style={{ 
            fontSize: '1.1rem', 
            color: 'var(--spider-text-muted)', 
            marginBottom: '2rem',
            maxWidth: '700px',
            lineHeight: 1.7 
          }}>
            {personalInfo.bio}
          </p>

          {/* Verified Badges Bar */}
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '1rem', 
            flexWrap: 'wrap', 
            marginBottom: '2.5rem' 
          }}>
            {certifications.slice(0, 3).map((cert, idx) => (
              <div 
                key={idx}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.45rem 0.9rem',
                  borderRadius: '10px',
                  background: 'rgba(15, 19, 31, 0.8)',
                  border: `1px solid ${cert.color}40`,
                  fontSize: '0.78rem',
                  color: '#F3F4F6'
                }}
              >
                <ShieldCheck size={16} style={{ color: cert.color }} />
                <span><strong>{cert.issuer}</strong>: {cert.title.split(' ')[0]} {cert.title.split(' ')[1]}</span>
              </div>
            ))}
          </div>

          {/* Call-To-Action Buttons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
            <a 
              href="#projects" 
              onClick={triggerConfettiWeb}
              className="spider-btn spider-btn-primary"
            >
              <span>EXPLORE MISSIONS</span>
              <ArrowRight size={18} />
            </a>

            <a 
              href="#contact" 
              onClick={() => playWebSound && playWebSound()}
              className="spider-btn spider-btn-secondary"
            >
              <span>LAUNCH SPIDER-SIGNAL</span>
            </a>

            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="spider-btn"
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                color: '#FFFFFF'
              }}
            >
              <Github size={18} />
              <span>GITHUB</span>
            </a>
          </div>

          {/* Quick Social Dock */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', color: 'var(--spider-text-muted)', fontSize: '0.85rem' }}>
            <span className="font-hud" style={{ fontSize: '0.75rem', letterSpacing: '1px' }}>COMMUNICATION CHANNELS:</span>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <Linkedin size={16} className="text-spider-blue" />
              <span>LinkedIn</span>
            </a>
            <a href={`mailto:${personalInfo.email}`} style={{ color: 'inherit', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <Mail size={16} className="text-spider-red" />
              <span>Email</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
