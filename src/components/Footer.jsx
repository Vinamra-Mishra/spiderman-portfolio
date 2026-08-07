import React from 'react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={{
      borderTop: '1px solid rgba(255,255,255,0.05)',
      padding: '2rem 0',
      marginTop: '4rem',
      background: 'transparent'
    }}>
      <div className="hud-container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '1rem'
      }}>
        
        <div className="font-hud" style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
          © {new Date().getFullYear()} VINAMRA KUMAR MISHRA
        </div>
        
        <div style={{ 
          fontSize: '0.8rem', 
          color: 'var(--text-primary)',
          letterSpacing: '1px',
          opacity: 0.8
        }}>
          "Built with Great Power & Great Responsibility"
        </div>
        
        <button 
          onClick={scrollToTop}
          className="font-hud spider-btn spider-btn-secondary"
          style={{ padding: '0.4rem 0.8rem', fontSize: '0.7rem' }}
        >
          BACK TO TOP ⇡
        </button>
        
      </div>
    </footer>
  );
}
