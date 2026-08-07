import React from 'react';
import { Link } from 'react-router-dom';
import confetti from 'canvas-confetti';
import { ArrowUpRight, Zap, Target, Activity } from 'lucide-react';

export default function HomePage({ isSpiderSense, playWebSound }) {
  const accentColor = isSpiderSense ? 'var(--spider-red)' : 'var(--ln-neon)';

  const handleLaunch = () => {
    playWebSound();
    confetti({
      particleCount: 140,
      spread: 90,
      origin: { y: 0.6 },
      colors: isSpiderSense ? ['#E11D48', '#000'] : ['#D2FF00', '#FFFFFF', '#08090C']
    });
  };

  return (
    <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
      
      {/* High-Impact Hero Card */}
      <div className="ln-card" style={{ minHeight: '65vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        
        <div className="ln-number">01</div>

        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1.5rem' }}>
            <span className="sticker-tag">ON TRACK // 2026 EDITION</span>
            <span className="font-hud" style={{ fontSize: '0.75rem', color: accentColor }}>FULL-STACK & AI ARCHITECT</span>
          </div>

          <h1 className="font-hud" style={{ 
            fontSize: 'clamp(2.8rem, 7vw, 5.5rem)', 
            fontWeight: '900', 
            lineHeight: '0.95', 
            letterSpacing: '-2px',
            textTransform: 'uppercase',
            color: '#FFF',
            marginBottom: '1.5rem'
          }}>
            VINAMRA <br/>
            <span style={{ color: accentColor }}>KUMAR MISHRA</span>
          </h1>

          <p style={{ fontSize: '1.25rem', color: '#D1D5DB', maxWidth: '700px', lineHeight: '1.6', marginBottom: '2.5rem', fontWeight: '400' }}>
            Engineering ultra-fast web applications, autonomous AI agent systems, and computer vision pipelines with Formula 1 speed and spider precision.
          </p>

          <div style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap' }}>
            <Link to="/projects" className="ln-btn" onClick={handleLaunch}>
              <span>EXPLORE MISSIONS</span> <ArrowUpRight size={20} />
            </Link>
            
            <Link to="/contact" className="ln-btn ln-btn-secondary" onClick={playWebSound}>
              <span>LAUNCH SIGNAL</span> <Zap size={18} />
            </Link>
          </div>
        </div>

        {/* Quick Highlights Row */}
        <div style={{ display: 'flex', gap: '3rem', flexWrap: 'wrap', borderTop: '1px solid var(--ln-border)', paddingTop: '1.5rem', marginTop: '2rem' }}>
          <div>
            <div className="font-hud" style={{ fontSize: '0.7rem', color: '#9CA3AF' }}>LATENCY REDUCTION</div>
            <div className="font-hud" style={{ fontSize: '1.8rem', fontWeight: '900', color: accentColor }}>45% DROP</div>
          </div>
          <div>
            <div className="font-hud" style={{ fontSize: '0.7rem', color: '#9CA3AF' }}>MODEL ACCURACY</div>
            <div className="font-hud" style={{ fontSize: '1.8rem', fontWeight: '900', color: accentColor }}>99.2%</div>
          </div>
          <div>
            <div className="font-hud" style={{ fontSize: '0.7rem', color: '#9CA3AF' }}>TELEMETRY TRACKED</div>
            <div className="font-hud" style={{ fontSize: '1.8rem', fontWeight: '900', color: accentColor }}>500+ / SEC</div>
          </div>
        </div>

      </div>

      {/* Modular Section 02: ON TRACK VS OFF TRACK Split */}
      <div className="ln-grid-2">
        
        {/* ON TRACK (Engineering) */}
        <div className="ln-card">
          <div className="ln-number">02</div>
          <div className="sticker-tag" style={{ background: accentColor, color: '#08090C', marginBottom: '1.25rem' }}>ON TRACK // PERFORMANCE</div>
          <h3 className="font-hud" style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#FFF' }}>AI & SYSTEM ARCHITECTURE</h3>
          <p style={{ color: '#9CA3AF', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
            Building production-ready Agentic workflows, PyTorch deep learning models, high-concurrency Node/Python backend servers, and dynamic 3D React web apps.
          </p>
          <Link to="/skills" className="ln-btn ln-btn-secondary" style={{ fontSize: '0.75rem', padding: '0.6rem 1.2rem' }}>
            <span>VIEW TECH ARSENAL</span>
          </Link>
        </div>

        {/* OFF TRACK (Origin) */}
        <div className="ln-card">
          <div className="ln-number">03</div>
          <div className="sticker-tag" style={{ background: '#FFF', color: '#08090C', marginBottom: '1.25rem' }}>OFF TRACK // ORIGIN</div>
          <h3 className="font-hud" style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#FFF' }}>VELLORE INST OF TECH</h3>
          <p style={{ color: '#9CA3AF', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
            Pursuing Computer Science & Engineering (2021-Present, 8.44 CGPA). Certified by AWS, Oracle, and NPTEL in Cloud and System Design.
          </p>
          <Link to="/about" className="ln-btn ln-btn-secondary" style={{ fontSize: '0.75rem', padding: '0.6rem 1.2rem' }}>
            <span>READ SPECIFICATIONS</span>
          </Link>
        </div>

      </div>

    </div>
  );
}
