import React, { useState } from 'react';
import { skillsCategory } from '../data/portfolioData';
import { CheckCircle2 } from 'lucide-react';

export default function SkillsPage({ isSpiderSense }) {
  const [activeCategory, setActiveCategory] = useState(0);
  const accentColor = isSpiderSense ? 'var(--spider-red)' : 'var(--neon-yellow)';

  return (
    <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      
      <div className="spider-card">
        <div className="card-number">02</div>
        <div className="sticker-tag" style={{ marginBottom: '1rem' }}>TECH ARSENAL // COMBAT ABILITIES</div>
        <h1 className="font-hud" style={{ fontSize: '2.5rem', fontWeight: '900', color: '#FFF' }}>
          EQUIPMENT <span style={{ color: accentColor }}>& ABILITIES MATRIX</span>
        </h1>
      </div>

      {/* Tabs */}
      <div style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap' }}>
        {skillsCategory.map((cat, idx) => (
          <button
            key={idx}
            onClick={() => setActiveCategory(idx)}
            className="font-hud"
            style={{
              padding: '0.6rem 1.25rem',
              fontSize: '0.85rem',
              fontWeight: 'bold',
              background: activeCategory === idx ? accentColor : 'rgba(14, 17, 23, 0.9)',
              color: activeCategory === idx ? '#08090C' : '#9CA3AF',
              border: `1px solid ${activeCategory === idx ? accentColor : 'var(--card-border)'}`,
              cursor: 'pointer',
              transform: 'skewX(-6deg)'
            }}
          >
            {cat.title}
          </button>
        ))}
      </div>

      {/* Cards */}
      <div className="spider-grid-3">
        {skillsCategory[activeCategory].skills.map((skill, idx) => (
          <div key={idx} className="spider-card" style={{ padding: '1.75rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
              <h3 className="font-hud" style={{ fontSize: '1.15rem', color: '#FFF' }}>{skill.name}</h3>
              <span className="font-hud" style={{ background: accentColor, color: '#08090C', fontSize: '0.65rem', padding: '0.2rem 0.5rem', fontWeight: '900' }}>
                {skill.level}
              </span>
            </div>

            <p style={{ fontSize: '0.9rem', color: '#9CA3AF', lineHeight: '1.5', marginBottom: '1.25rem' }}>
              {skill.description}
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.75rem', color: '#6B7280', borderTop: '1px solid var(--card-border)', paddingTop: '0.75rem' }}>
              <CheckCircle2 size={14} color={accentColor} /> PRODUCTION VERIFIED
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
