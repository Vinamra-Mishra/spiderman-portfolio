import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Volume2, VolumeX, Eye } from 'lucide-react';

export default function Navbar({ isSpiderSense, toggleSpiderSense, soundEnabled, setSoundEnabled, playWebSound }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: 'HOME' },
    { path: '/about', label: 'ABOUT' },
    { path: '/skills', label: 'SKILLS' },
    { path: '/projects', label: 'PROJECTS' },
    { path: '/timeline', label: 'TIMELINE' },
    { path: '/contact', label: 'CONTACT' },
  ];

  const handleNavClick = () => {
    playWebSound();
    setMobileMenuOpen(false);
  };

  return (
    <nav 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: 'all 0.3s ease',
        background: scrolled ? 'var(--panel-bg)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--panel-border)' : '1px solid transparent',
        padding: '1rem 2rem'
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '1200px', margin: '0 auto' }}>
        
        {/* Logo */}
        <NavLink to="/" onClick={handleNavClick} style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span style={{ fontSize: '1.5rem' }}>🕷️</span>
          <span className="font-hud" style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'var(--text-primary)', letterSpacing: '2px' }}>
            VINAMRA
          </span>
        </NavLink>

        {/* Desktop Nav */}
        <div style={{ display: 'none', alignItems: 'center', gap: '2rem' }} className="desktop-nav">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={handleNavClick}
              className="font-hud"
              style={({ isActive }) => ({
                textDecoration: 'none',
                fontSize: '0.85rem',
                color: isActive ? (isSpiderSense ? 'var(--spider-red)' : 'var(--spider-cyan)') : 'var(--text-primary)',
                borderBottom: isActive ? `2px solid ${isSpiderSense ? 'var(--spider-red)' : 'var(--spider-cyan)'}` : '2px solid transparent',
                paddingBottom: '4px',
                transition: 'all 0.2s ease'
              })}
            >
              {link.label}
            </NavLink>
          ))}

          {/* Controls */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginLeft: '1rem', paddingLeft: '1rem', borderLeft: '1px solid rgba(255,255,255,0.2)' }}>
            <button 
              onClick={() => { playWebSound(); toggleSpiderSense(); }}
              style={{
                background: isSpiderSense ? 'rgba(225, 29, 72, 0.2)' : 'transparent',
                border: `1px solid ${isSpiderSense ? 'var(--spider-red)' : 'rgba(255,255,255,0.3)'}`,
                color: isSpiderSense ? 'var(--spider-red)' : 'var(--text-primary)',
                padding: '4px 12px',
                borderRadius: '12px',
                fontSize: '0.7rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                transition: 'all 0.3s ease',
                fontFamily: 'var(--font-hud)'
              }}
            >
              <Eye size={12} /> {isSpiderSense ? 'SENSE: ON' : 'SENSE: OFF'}
            </button>
            <button
              onClick={() => { setSoundEnabled(!soundEnabled); playWebSound(); }}
              style={{ background: 'transparent', border: 'none', color: soundEnabled ? 'var(--spider-cyan)' : 'var(--text-muted)', cursor: 'pointer', display: 'flex' }}
            >
              {soundEnabled ? <Volume2 size={18} /> : <VolumeX size={18} />}
            </button>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="mobile-toggle"
          style={{ display: 'flex', background: 'transparent', border: 'none', color: 'var(--text-primary)', cursor: 'pointer' }}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div style={{
          position: 'absolute', top: '100%', left: 0, right: 0,
          background: 'var(--panel-bg)', backdropFilter: 'blur(20px)',
          borderBottom: '1px solid var(--panel-border)',
          padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem',
          borderTop: '1px solid rgba(255,255,255,0.05)'
        }}>
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={handleNavClick}
              className="font-hud"
              style={({ isActive }) => ({
                textDecoration: 'none', fontSize: '1.2rem',
                color: isActive ? (isSpiderSense ? 'var(--spider-red)' : 'var(--spider-cyan)') : 'var(--text-primary)',
              })}
            >
              {link.label}
            </NavLink>
          ))}
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
            <button onClick={() => { playWebSound(); toggleSpiderSense(); }} style={{ background: 'transparent', border: `1px solid ${isSpiderSense ? 'var(--spider-red)' : 'var(--spider-cyan)'}`, color: isSpiderSense ? 'var(--spider-red)' : 'var(--spider-cyan)', padding: '0.5rem 1rem', borderRadius: '4px', fontFamily: 'var(--font-hud)' }}>
              {isSpiderSense ? 'DISABLE SENSE' : 'ENABLE SENSE'}
            </button>
          </div>
        </div>
      )}

      {/* Inline styles for media query equivalent */}
      <style>{`
        @media (min-width: 768px) {
          .desktop-nav { display: flex !important; }
          .mobile-toggle { display: none !important; }
        }
      `}</style>
    </nav>
  );
}
