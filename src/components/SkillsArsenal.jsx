import React, { useState } from 'react';
import { Bot, Code, Server, Cpu, CheckCircle } from 'lucide-react';
import { skillsCategory } from '../data/portfolioData';

export default function SkillsArsenal({ isSpiderSense }) {
  const [activeCategory, setActiveCategory] = useState(0);

  const icons = [<Bot size={20} />, <Code size={20} />, <Server size={20} />, <Cpu size={20} />];

  return (
    <section id="skills" style={{ padding: '6rem 0', background: 'rgba(15, 19, 31, 0.4)', position: 'relative' }}>
      <div className="hud-container">
        
        {/* Section Header */}
        <div style={{ marginBottom: '3rem' }}>
          <div className="section-badge font-hud">
            <Cpu size={14} />
            <span>TECH ARSENAL // WEB-SHOOTERS & EQUIPMENT</span>
          </div>
          <h2 className="section-title">
            COMBAT <span className={isSpiderSense ? "text-spider-red" : "text-spider-blue"}>ABILITIES</span> & TECH STACK
          </h2>
          <p style={{ color: 'var(--spider-text-muted)', maxWidth: '650px' }}>
            Battle-tested engineering skills across full-stack web dev, knowledge graph AI agents, and embedded hardware.
          </p>
        </div>

        {/* Category Tabs */}
        <div style={{ 
          display: 'flex', 
          gap: '1rem', 
          flexWrap: 'wrap', 
          marginBottom: '2.5rem' 
        }}>
          {skillsCategory.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setActiveCategory(idx)}
              className="font-hud"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.6rem',
                padding: '0.8rem 1.4rem',
                borderRadius: '12px',
                background: activeCategory === idx 
                  ? (isSpiderSense ? 'rgba(255, 30, 39, 0.2)' : 'rgba(0, 240, 255, 0.15)')
                  : 'rgba(255, 255, 255, 0.04)',
                border: `1px solid ${activeCategory === idx 
                  ? (isSpiderSense ? '#FF1E27' : '#00F0FF') 
                  : 'rgba(255, 255, 255, 0.1)'}`,
                color: activeCategory === idx 
                  ? (isSpiderSense ? '#FF1E27' : '#00F0FF') 
                  : 'var(--spider-text-muted)',
                cursor: 'pointer',
                fontSize: '0.85rem',
                fontWeight: 700,
                transition: 'all 0.3s ease',
                boxShadow: activeCategory === idx 
                  ? (isSpiderSense ? '0 0 16px rgba(255, 30, 39, 0.4)' : '0 0 16px rgba(0, 240, 255, 0.3)') 
                  : 'none'
              }}
            >
              {icons[idx]}
              <span>{cat.category}</span>
            </button>
          ))}
        </div>

        {/* Active Skills Grid */}
        <div className="grid-3">
          {skillsCategory[activeCategory].skills.map((skill, idx) => (
            <div 
              key={idx} 
              className="hud-card" 
              style={{ padding: '1.6rem', position: 'relative' }}
            >
              <div className="hud-corner hud-corner-tl"></div>
              <div className="hud-corner hud-corner-tr"></div>
              <div className="hud-corner hud-corner-bl"></div>
              <div className="hud-corner hud-corner-br"></div>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.8rem' }}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#FFFFFF' }}>
                  {skill.name}
                </h3>
                <span className="font-hud" style={{ 
                  fontSize: '0.72rem', 
                  padding: '0.25rem 0.6rem', 
                  borderRadius: '12px', 
                  background: isSpiderSense ? 'rgba(255, 30, 39, 0.15)' : 'rgba(0, 240, 255, 0.1)',
                  color: isSpiderSense ? '#FF1E27' : '#00F0FF',
                  border: `1px solid ${isSpiderSense ? 'rgba(255, 30, 39, 0.4)' : 'rgba(0, 240, 255, 0.3)'}`
                }}>
                  {skill.level}
                </span>
              </div>

              <p style={{ fontSize: '0.88rem', color: 'var(--spider-text-muted)', lineHeight: 1.5 }}>
                {skill.desc}
              </p>

              <div style={{ marginTop: '1.2rem', display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.75rem', color: '#10B981' }}>
                <CheckCircle size={14} />
                <span>Production Verified</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
