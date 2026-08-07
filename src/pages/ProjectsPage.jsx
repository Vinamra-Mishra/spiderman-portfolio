import React, { useState } from 'react';
import { projects } from '../data/portfolioData';
import { Github, ExternalLink, Activity, ArrowUpRight } from 'lucide-react';
import ProjectModal from '../components/ProjectModal';

export default function ProjectsPage({ isSpiderSense, playWebSound }) {
  const [filter, setFilter] = useState('ALL');
  const [selectedProject, setSelectedProject] = useState(null);
  const accentColor = isSpiderSense ? 'var(--spider-red)' : 'var(--ln-neon)';

  const categories = ['ALL', 'AI & Agentic', 'Web Applications', 'Robotics & Hardware'];
  const filteredProjects = filter === 'ALL' ? projects : projects.filter(p => p.category === filter);

  return (
    <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      
      <div className="ln-card">
        <div className="ln-number">03</div>
        <div className="sticker-tag" style={{ marginBottom: '1rem' }}>DAILY BUGLE // MISSION LOGS</div>
        <h1 className="font-hud" style={{ fontSize: '2.5rem', fontWeight: '900', color: '#FFF' }}>
          PROJECT VAULT <span style={{ color: accentColor }}>& MISSIONS</span>
        </h1>
      </div>

      {/* Filter */}
      <div style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap' }}>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className="font-hud"
            style={{
              padding: '0.5rem 1rem',
              fontSize: '0.75rem',
              fontWeight: 'bold',
              background: filter === cat ? accentColor : 'rgba(14, 17, 23, 0.9)',
              color: filter === cat ? '#08090C' : '#9CA3AF',
              border: `1px solid ${filter === cat ? accentColor : 'var(--ln-border)'}`,
              cursor: 'pointer',
              transform: 'skewX(-6deg)'
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="ln-grid-2">
        {filteredProjects.map((project, idx) => (
          <div key={idx} className="ln-card" style={{ padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
            
            <div style={{ height: '220px', width: '100%', position: 'relative', overflow: 'hidden', borderBottom: '1px solid var(--ln-border)' }}>
              <img src={project.image} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div style={{ position: 'absolute', top: '1rem', right: '1rem' }}>
                <span className="sticker-tag" style={{ background: accentColor, color: '#08090C' }}>
                  {project.category}
                </span>
              </div>
            </div>

            <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
              <h3 className="font-hud" style={{ fontSize: '1.4rem', color: '#FFF', marginBottom: '0.2rem' }}>{project.title}</h3>
              <div style={{ fontSize: '0.85rem', color: accentColor, fontWeight: 'bold', marginBottom: '1rem' }}>{project.subtitle}</div>

              <p style={{ fontSize: '0.95rem', color: '#D1D5DB', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                {project.highlights[0]}
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '2rem' }}>
                {project.technologies.map(t => (
                  <span key={t} style={{ fontSize: '0.75rem', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--ln-border)', padding: '0.2rem 0.5rem', color: '#9CA3AF' }}>
                    {t}
                  </span>
                ))}
              </div>

              <div style={{ display: 'flex', gap: '1rem', marginTop: 'auto' }}>
                <button
                  onClick={() => { playWebSound(); setSelectedProject(project); }}
                  className="ln-btn"
                  style={{ flex: 1, padding: '0.6rem 1rem', fontSize: '0.75rem' }}
                >
                  <span>DEBRIEF LOG</span> <ArrowUpRight size={16} />
                </button>

                {project.links.github && (
                  <a href={project.links.github} target="_blank" rel="noreferrer" className="ln-btn ln-btn-secondary" style={{ padding: '0.6rem' }}>
                    <Github size={18} />
                  </a>
                )}
                {project.links.live && (
                  <a href={project.links.live} target="_blank" rel="noreferrer" className="ln-btn ln-btn-secondary" style={{ padding: '0.6rem' }}>
                    <ExternalLink size={18} />
                  </a>
                )}
              </div>
            </div>

          </div>
        ))}
      </div>

      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
          isSpiderSense={isSpiderSense}
        />
      )}

    </div>
  );
}
