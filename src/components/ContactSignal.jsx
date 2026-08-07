import React, { useState } from 'react';
import { Send, Mail, Phone, MapPin, Github, Linkedin, CheckCircle, ShieldAlert } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function ContactSignal({ isSpiderSense, playWebSound }) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (playWebSound) playWebSound();
    
    // Confetti web burst
    const confetti = (await import('canvas-confetti')).default;
    confetti({
      particleCount: 100,
      spread: 90,
      origin: { y: 0.7 },
      colors: isSpiderSense ? ['#FF1E27', '#FFBD00', '#FFFFFF'] : ['#00F0FF', '#FF1E27', '#FFFFFF']
    });

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 6000);
  };

  return (
    <section id="contact" style={{ padding: '6rem 0', position: 'relative' }}>
      <div className="hud-container">
        
        {/* Section Header */}
        <div style={{ marginBottom: '3rem' }}>
          <div className="section-badge font-hud">
            <ShieldAlert size={14} />
            <span>LAUNCH SIGNAL // CONTACT TERMINAL</span>
          </div>
          <h2 className="section-title">
            SEND A <span className={isSpiderSense ? "text-spider-red" : "text-spider-blue"}>SPIDER-SIGNAL</span>
          </h2>
          <p style={{ color: 'var(--spider-text-muted)', maxWidth: '650px' }}>
            Have a mission, project inquiry, or internship opportunity? Transmit your signal directly.
          </p>
        </div>

        <div className="grid-2">
          
          {/* Direct Communication Channels */}
          <div className="hud-card" style={{ padding: '2.2rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div className="hud-corner hud-corner-tl"></div>
            <div className="hud-corner hud-corner-tr"></div>
            <div className="hud-corner hud-corner-bl"></div>
            <div className="hud-corner hud-corner-br"></div>

            <div>
              <h3 className="font-hud" style={{ fontSize: '1.2rem', color: '#FFFFFF', marginBottom: '1.5rem' }}>
                DIRECT TRANSMISSION CHANNELS
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '2.5rem' }}>
                
                <a 
                  href={`mailto:${personalInfo.email}`}
                  style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: '#FFFFFF', textDecoration: 'none' }}
                >
                  <div style={{ padding: '0.75rem', borderRadius: '12px', background: 'rgba(255, 30, 39, 0.15)', color: '#FF1E27' }}>
                    <Mail size={22} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--spider-text-muted)', fontFamily: 'Orbitron, monospace' }}>PRIMARY EMAIL</div>
                    <div style={{ fontSize: '1rem', fontWeight: 600 }}>{personalInfo.email}</div>
                  </div>
                </a>

                <a 
                  href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                  style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: '#FFFFFF', textDecoration: 'none' }}
                >
                  <div style={{ padding: '0.75rem', borderRadius: '12px', background: 'rgba(0, 240, 255, 0.15)', color: '#00F0FF' }}>
                    <Phone size={22} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--spider-text-muted)', fontFamily: 'Orbitron, monospace' }}>PHONE LINE</div>
                    <div style={{ fontSize: '1rem', fontWeight: 600 }}>{personalInfo.phone}</div>
                  </div>
                </a>

                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: '#FFFFFF' }}>
                  <div style={{ padding: '0.75rem', borderRadius: '12px', background: 'rgba(255, 189, 0, 0.15)', color: '#FFBD00' }}>
                    <MapPin size={22} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--spider-text-muted)', fontFamily: 'Orbitron, monospace' }}>BASE LOCATION</div>
                    <div style={{ fontSize: '1rem', fontWeight: 600 }}>{personalInfo.location}</div>
                  </div>
                </div>

              </div>
            </div>

            {/* Social Links Dock */}
            <div>
              <div className="font-hud" style={{ fontSize: '0.78rem', color: 'var(--spider-text-muted)', marginBottom: '1rem' }}>
                SOCIAL NETWORKS:
              </div>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="spider-btn"
                  style={{ padding: '0.6rem 1.2rem', background: 'rgba(255, 255, 255, 0.05)', color: '#FFFFFF' }}
                >
                  <Github size={18} />
                  <span>GitHub</span>
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="spider-btn"
                  style={{ padding: '0.6rem 1.2rem', background: 'rgba(0, 240, 255, 0.1)', color: '#00F0FF', border: '1px solid var(--spider-blue)' }}
                >
                  <Linkedin size={18} />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>

          </div>

          {/* Interactive Web Form */}
          <div className="hud-card" style={{ padding: '2.2rem' }}>
            <div className="hud-corner hud-corner-tl"></div>
            <div className="hud-corner hud-corner-tr"></div>
            <div className="hud-corner hud-corner-bl"></div>
            <div className="hud-corner hud-corner-br"></div>

            <h3 className="font-hud" style={{ fontSize: '1.2rem', color: '#FFFFFF', marginBottom: '1.5rem' }}>
              TRANSMIT SPIDER SIGNAL
            </h3>

            {submitted ? (
              <div style={{
                background: 'rgba(16, 185, 129, 0.15)',
                border: '1px solid #10B981',
                borderRadius: '12px',
                padding: '2rem',
                textAlign: 'center',
                color: '#10B981'
              }}>
                <CheckCircle size={48} style={{ margin: '0 auto 1rem' }} />
                <h4 className="font-hud" style={{ fontSize: '1.2rem', color: '#FFFFFF', marginBottom: '0.5rem' }}>
                  SIGNAL TRANSMITTED SUCCESSFULLY!
                </h4>
                <p style={{ fontSize: '0.9rem', color: '#D1D5DB' }}>
                  Thank you! Vinamra will receive your message and respond via web transmission shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                <div>
                  <label className="font-hud" style={{ display: 'block', fontSize: '0.78rem', color: 'var(--spider-text-muted)', marginBottom: '0.4rem' }}>
                    YOUR NAME / CODENAME
                  </label>
                  <input 
                    type="text"
                    required
                    placeholder="Peter Parker"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.85rem 1rem',
                      borderRadius: '10px',
                      background: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid rgba(255, 255, 255, 0.15)',
                      color: '#FFFFFF',
                      fontFamily: 'inherit',
                      fontSize: '0.95rem',
                      outline: 'none'
                    }}
                  />
                </div>

                <div>
                  <label className="font-hud" style={{ display: 'block', fontSize: '0.78rem', color: 'var(--spider-text-muted)', marginBottom: '0.4rem' }}>
                    TRANSMISSION EMAIL
                  </label>
                  <input 
                    type="email"
                    required
                    placeholder="peter@dailybugle.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.85rem 1rem',
                      borderRadius: '10px',
                      background: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid rgba(255, 255, 255, 0.15)',
                      color: '#FFFFFF',
                      fontFamily: 'inherit',
                      fontSize: '0.95rem',
                      outline: 'none'
                    }}
                  />
                </div>

                <div>
                  <label className="font-hud" style={{ display: 'block', fontSize: '0.78rem', color: 'var(--spider-text-muted)', marginBottom: '0.4rem' }}>
                    MISSION MESSAGE
                  </label>
                  <textarea 
                    rows={4}
                    required
                    placeholder="Describe your project, offer, or question..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.85rem 1rem',
                      borderRadius: '10px',
                      background: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid rgba(255, 255, 255, 0.15)',
                      color: '#FFFFFF',
                      fontFamily: 'inherit',
                      fontSize: '0.95rem',
                      outline: 'none',
                      resize: 'none'
                    }}
                  />
                </div>

                <button 
                  type="submit" 
                  className="spider-btn spider-btn-primary"
                  style={{ width: '100%', justifyContent: 'center', marginTop: '0.5rem' }}
                >
                  <Send size={18} />
                  <span>DISPATCH SIGNAL</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
