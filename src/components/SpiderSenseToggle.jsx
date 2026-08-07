import React from 'react';
import { Zap, ShieldAlert } from 'lucide-react';

export default function SpiderSenseToggle({ isSpiderSense, toggleSpiderSense }) {
  return (
    <button
      onClick={toggleSpiderSense}
      title={isSpiderSense ? "Deactivate Spider-Sense" : "Activate Spider-Sense Alert Mode"}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.5rem',
        padding: '0.4rem 0.9rem',
        borderRadius: '20px',
        border: `1px solid ${isSpiderSense ? '#FF1E27' : '#00F0FF'}`,
        background: isSpiderSense ? 'rgba(255, 30, 39, 0.25)' : 'rgba(0, 240, 255, 0.1)',
        color: isSpiderSense ? '#FF1E27' : '#00F0FF',
        cursor: 'pointer',
        fontFamily: 'Orbitron, monospace',
        fontSize: '0.75rem',
        fontWeight: 'bold',
        transition: 'all 0.3s ease',
        boxShadow: isSpiderSense ? '0 0 16px rgba(255, 30, 39, 0.6)' : '0 0 10px rgba(0, 240, 255, 0.2)'
      }}
    >
      {isSpiderSense ? (
        <>
          <ShieldAlert size={14} className="animate-pulse" />
          <span>SPIDER-SENSE: ACTIVE</span>
        </>
      ) : (
        <>
          <Zap size={14} />
          <span>SPIDER-SENSE</span>
        </>
      )}
    </button>
  );
}
