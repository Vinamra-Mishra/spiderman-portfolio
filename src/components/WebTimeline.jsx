import React from 'react';
import { GitCommit, Briefcase, GraduationCap, Award } from 'lucide-react';
import { timelineEvents } from '../data/portfolioData';

export default function WebTimeline({ isSpiderSense }) {
  return (
    <section id="timeline" style={{ padding: '6rem 0', background: 'rgba(15, 19, 31, 0.4)', position: 'relative' }}>
      <div className="hud-container">
        
        {/* Section Header */}
        <div style={{ marginBottom: '3rem' }}>
          <div className="section-badge font-hud">
            <GitCommit size={14} />
            <span>WEB TRAJECTORY // CHRONICLES</span>
          </div>
          <h2 className="section-title">
            CAREER <span className={isSpiderSense ? "text-spider-red" : "text-spider-blue"}>TIMELINE</span> & WEB NODES
          </h2>
          <p style={{ color: 'var(--spider-text-muted)', maxWidth: '650px' }}>
            Historical milestones across university studies at VIT-AP, certification milestones, and production software builds.
          </p>
        </div>

        {/* Vertical Web Timeline */}
        <div style={{ position: 'relative', maxWidth: '850px', margin: '0 auto' }}>
          
          {/* Vertical Connecting Web Line */}
          <div style={{
            position: 'absolute',
            left: '24px',
            top: 0,
            bottom: 0,
            width: '2px',
            background: isSpiderSense
              ? 'linear-gradient(180deg, #FF1E27, rgba(255, 30, 39, 0.2))'
              : 'linear-gradient(180deg, #00F0FF, rgba(0, 240, 255, 0.2))',
            boxShadow: isSpiderSense ? '0 0 10px rgba(255, 30, 39, 0.6)' : '0 0 10px rgba(0, 240, 255, 0.5)'
          }} />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            {timelineEvents.map((event, idx) => {
              const IconComponent = event.type === 'Certification' ? Award : (event.type === 'Education' ? GraduationCap : Briefcase);

              return (
                <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '2rem', position: 'relative' }}>
                  
                  {/* Glowing Node Marker */}
                  <div style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '50%',
                    background: isSpiderSense ? '#FF1E27' : '#00F0FF',
                    color: '#07090E',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    zIndex: 2,
                    boxShadow: isSpiderSense ? '0 0 20px rgba(255, 30, 39, 0.8)' : '0 0 20px rgba(0, 240, 255, 0.7)'
                  }}>
                    <IconComponent size={22} />
                  </div>

                  {/* Event Card */}
                  <div className="hud-card" style={{ padding: '1.6rem', flexGrow: 1 }}>
                    <div className="hud-corner hud-corner-tl"></div>
                    <div className="hud-corner hud-corner-tr"></div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.4rem' }}>
                      <span className="font-hud" style={{ fontSize: '0.82rem', color: isSpiderSense ? '#FF1E27' : '#00F0FF', fontWeight: 700 }}>
                        {event.year}
                      </span>
                      <span style={{ fontSize: '0.75rem', padding: '0.2rem 0.6rem', borderRadius: '10px', background: 'rgba(255, 255, 255, 0.06)', color: 'var(--spider-text-muted)' }}>
                        {event.type}
                      </span>
                    </div>

                    <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '0.2rem' }}>
                      {event.title}
                    </h3>

                    <div style={{ fontSize: '0.88rem', color: 'var(--spider-text-muted)', fontWeight: 600, marginBottom: '0.8rem' }}>
                      {event.organization}
                    </div>

                    <p style={{ fontSize: '0.9rem', color: '#D1D5DB', lineHeight: 1.6 }}>
                      {event.desc}
                    </p>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
