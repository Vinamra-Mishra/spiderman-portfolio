import React, { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Send } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ContactPage({ isSpiderSense }) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const accentColor = isSpiderSense ? 'var(--spider-red)' : 'var(--neon-yellow)';

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({ particleCount: 150, spread: 80, origin: { y: 0.6 }, colors: isSpiderSense ? ['#E11D48', '#000'] : ['#D2FF00', '#ffffff'] });
    setTimeout(() => { setSubmitted(false); setFormData({ name: '', email: '', message: '' }); }, 3000);
  };

  return (
    <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      
      <div className="spider-card">
        <div className="card-number">05</div>
        <div className="sticker-tag" style={{ marginBottom: '1rem' }}>LAUNCH SIGNAL // CONTACT TERMINAL</div>
        <h1 className="font-hud" style={{ fontSize: '2.5rem', fontWeight: '900', color: '#FFF' }}>
          SEND A <span style={{ color: accentColor }}>SPIDER-SIGNAL</span>
        </h1>
      </div>

      <div className="spider-grid-2">
        {/* Info */}
        <div className="spider-card">
          <h3 className="font-hud" style={{ fontSize: '1.3rem', color: '#FFF', marginBottom: '2rem' }}>DIRECT FREQUENCIES</h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '2.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ background: accentColor, color: '#08090C', padding: '0.8rem' }}><Mail size={20} /></div>
              <div>
                <div style={{ fontSize: '0.75rem', color: '#9CA3AF' }}>SECURE EMAIL</div>
                <div style={{ fontSize: '1rem', color: '#FFF', fontWeight: '600' }}>vinamrakumarmishra@gmail.com</div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ background: accentColor, color: '#08090C', padding: '0.8rem' }}><Phone size={20} /></div>
              <div>
                <div style={{ fontSize: '0.75rem', color: '#9CA3AF' }}>DIRECT PHONE</div>
                <div style={{ fontSize: '1rem', color: '#FFF', fontWeight: '600' }}>+91-8810696954</div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ background: accentColor, color: '#08090C', padding: '0.8rem' }}><MapPin size={20} /></div>
              <div>
                <div style={{ fontSize: '0.75rem', color: '#9CA3AF' }}>LOCATION</div>
                <div style={{ fontSize: '1rem', color: '#FFF', fontWeight: '600' }}>Greater Noida, UP, India</div>
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '1rem' }}>
            <a href="https://github.com/Vinamra-Mishra" target="_blank" rel="noreferrer" className="spider-btn spider-btn-secondary" style={{ flex: 1, padding: '0.6rem', fontSize: '0.75rem' }}>
              <Github size={16} /> <span>GITHUB</span>
            </a>
            <a href="https://linkedin.com/in/vinamramishra" target="_blank" rel="noreferrer" className="spider-btn spider-btn-secondary" style={{ flex: 1, padding: '0.6rem', fontSize: '0.75rem' }}>
              <Linkedin size={16} /> <span>LINKEDIN</span>
            </a>
          </div>
        </div>

        {/* Form */}
        <div className="spider-card">
          <h3 className="font-hud" style={{ fontSize: '1.3rem', color: '#FFF', marginBottom: '2rem' }}>TRANSMIT SIGNAL</h3>

          {submitted ? (
            <div style={{ height: '260px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: accentColor }}>
              <Send size={48} style={{ marginBottom: '1rem' }} />
              <div className="font-hud" style={{ fontSize: '1.2rem' }}>SIGNAL TRANSMITTED SUCCESSFULLY</div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
              <div>
                <label className="font-hud" style={{ fontSize: '0.75rem', color: '#9CA3AF', display: 'block', marginBottom: '0.4rem' }}>IDENTITY (NAME)</label>
                <input 
                  type="text" 
                  required 
                  value={formData.name} 
                  onChange={e => setFormData({...formData, name: e.target.value})}
                  style={{ width: '100%', padding: '0.8rem', background: 'rgba(0,0,0,0.6)', border: '1px solid var(--card-border)', color: '#FFF', outline: 'none' }}
                />
              </div>

              <div>
                <label className="font-hud" style={{ fontSize: '0.75rem', color: '#9CA3AF', display: 'block', marginBottom: '0.4rem' }}>EMAIL ADDRESS</label>
                <input 
                  type="email" 
                  required 
                  value={formData.email} 
                  onChange={e => setFormData({...formData, email: e.target.value})}
                  style={{ width: '100%', padding: '0.8rem', background: 'rgba(0,0,0,0.6)', border: '1px solid var(--card-border)', color: '#FFF', outline: 'none' }}
                />
              </div>

              <div>
                <label className="font-hud" style={{ fontSize: '0.75rem', color: '#9CA3AF', display: 'block', marginBottom: '0.4rem' }}>MESSAGE</label>
                <textarea 
                  rows="4" 
                  required 
                  value={formData.message} 
                  onChange={e => setFormData({...formData, message: e.target.value})}
                  style={{ width: '100%', padding: '0.8rem', background: 'rgba(0,0,0,0.6)', border: '1px solid var(--card-border)', color: '#FFF', outline: 'none', resize: 'none' }}
                />
              </div>

              <button type="submit" className="spider-btn" style={{ width: '100%', marginTop: '0.5rem', justifyContent: 'center' }}>
                <span>TRANSMIT SIGNAL</span> <Send size={16} />
              </button>
            </form>
          )}
        </div>
      </div>

    </div>
  );
}
