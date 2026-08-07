import React from 'react';
import { timelineEvents } from '../data/portfolioData';

export default function TimelinePage({ isSpiderSense }) {
  const accentColor = isSpiderSense ? 'var(--spider-red)' : 'var(--neon-yellow)';

  return (
    <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      
      <div className="spider-card">
        <div className="card-number">04</div>
        <div className="sticker-tag" style={{ marginBottom: '1rem' }}>WEB TRAJECTORY // CAREER CHRONICLES</div>
        <h1 className="font-hud" style={{ fontSize: '2.5rem', fontWeight: '900', color: '#FFF' }}>
          CAREER TIMELINE <span style={{ color: accentColor }}>& NODES</span>
        </h1>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        {timelineEvents.map((event, idx) => (
          <div key={idx} className="spider-card">
            <div className="card-number">0{idx + 1}</div>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1rem' }}>
              <div>
                <h3 className="font-hud" style={{ fontSize: '1.4rem', color: '#FFF', marginBottom: '0.2rem' }}>{event.title}</h3>
                <div style={{ fontSize: '1rem', color: accentColor, fontWeight: 'bold' }}>{event.organization}</div>
              </div>

              <div style={{ textAlign: 'right' }}>
                <span className="font-hud" style={{ fontSize: '0.85rem', color: '#9CA3AF' }}>{event.year}</span>
                <div>
                  <span className="sticker-tag" style={{ marginTop: '0.4rem', fontSize: '0.65rem' }}>
                    {event.type}
                  </span>
                </div>
              </div>
            </div>

            <p style={{ color: '#D1D5DB', fontSize: '0.95rem', lineHeight: '1.6' }}>
              {event.description}
            </p>
          </div>
        ))}
      </div>

    </div>
  );
}
