import React, { useState } from 'react';
import { Shield, ExternalLink, Github, Eye, Sparkles } from 'lucide-react';
import { projects } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

export default function ProjectsVault({ isSpiderSense, playWebSound }) {
  const [filter, setFilter] = useState('ALL');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ['ALL', 'AI & Agentic', 'Web Applications', 'Robotics & Hardware'];

  const filteredProjects = filter === 'ALL' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" style={{ padding: '6rem 0', position: 'relative' }}>
      <div className="hud-container">
        
        {/* Section Header */}
        <div style={{ marginBottom: '3rem' }}>
          <div className="section-badge font-hud">
            <Shield size={14} />
            <span>DAILY BUGLE ARCHIVES // COMPLETED MISSIONS</span>
          </div>
          <h2 className="section-title">
            PROJECT <span className={isSpiderSense ? "text-spider-red" : "text-spider-blue"}>VAULT</span> & MISSIONS
          </h2>
          <p style={{ color: 'var(--spider-text-muted)', maxWidth: '650px' }}>
            Featured production projects built with React 18, FastAPI, LangGraph Knowledge Graphs, and Raspberry Pi 4 robotics.
          </p>
        </div>

        {/* Filters */}
        <div style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                if (playWebSound) playWebSound();
                setFilter(cat);
              }}
              className="font-hud"
              style={{
                padding: '0.6rem 1.2rem',
                borderRadius: '20px',
                background: filter === cat 
                  ? (isSpiderSense ? '#FF1E27' : '#00F0FF') 
                  : 'rgba(255, 255, 255, 0.05)',
                color: filter === cat ? '#07090E' : 'var(--spider-text-muted)',
                border: `1px solid ${filter === cat 
                  ? (isSpiderSense ? '#FF1E27' : '#00F0FF') 
                  : 'rgba(255, 255, 255, 0.12)'}`,
                cursor: 'pointer',
                fontSize: '0.8rem',
                fontWeight: 800,
                transition: 'all 0.25s ease'
              }}
            >
              {cat.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid-2">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className="hud-card"
              style={{ padding: '0', display: 'flex', flexDirection: 'column', height: '100%' }}
            >
              <div className="hud-corner hud-corner-tl"></div>
              <div className="hud-corner hud-corner-tr"></div>
              <div className="hud-corner hud-corner-bl"></div>
              <div className="hud-corner hud-corner-br"></div>

              {/* Image Preview Container */}
              <div style={{
                position: 'relative',
                height: '220px',
                overflow: 'hidden'
              }}>
                <img 
                  src={project.image} 
                  alt={project.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease'
                  }}
                />
                
                {/* Overlay Badge */}
                <div style={{
                  position: 'absolute',
                  top: '1rem',
                  left: '1rem',
                  background: 'rgba(7, 9, 14, 0.85)',
                  backdropFilter: 'blur(8px)',
                  padding: '0.3rem 0.8rem',
                  borderRadius: '12px',
                  border: `1px solid ${isSpiderSense ? '#FF1E27' : '#00F0FF'}`,
                  color: isSpiderSense ? '#FF1E27' : '#00F0FF',
                  fontFamily: 'Orbitron, monospace',
                  fontSize: '0.72rem',
                  fontWeight: 700
                }}>
                  {project.badge}
                </div>
              </div>

              {/* Card Body */}
              <div style={{ padding: '1.8rem', display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'space-between' }}>
                <div>
                  <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '0.3rem' }}>
                    {project.title}
                  </h3>
                  <p style={{ fontSize: '0.88rem', color: isSpiderSense ? '#FF1E27' : '#00F0FF', fontWeight: 600, marginBottom: '0.8rem' }}>
                    {project.subtitle}
                  </p>
                  <p style={{ fontSize: '0.9rem', color: 'var(--spider-text-muted)', lineHeight: 1.5, marginBottom: '1.2rem' }}>
                    {project.highlights[0]}
                  </p>

                  {/* Tags */}
                  <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
                    {project.tags.slice(0, 4).map((tag, idx) => (
                      <span 
                        key={idx}
                        style={{
                          fontSize: '0.72rem',
                          fontFamily: 'Orbitron, monospace',
                          padding: '0.2rem 0.55rem',
                          borderRadius: '6px',
                          background: 'rgba(255, 255, 255, 0.05)',
                          color: '#E5E7EB',
                          border: '1px solid rgba(255, 255, 255, 0.1)'
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '1rem', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
                  <button
                    onClick={() => {
                      if (playWebSound) playWebSound();
                      setSelectedProject(project);
                    }}
                    className="spider-btn spider-btn-secondary"
                    style={{ padding: '0.5rem 1rem', fontSize: '0.78rem' }}
                  >
                    <Eye size={14} />
                    <span>DEBRIEF & SPECS</span>
                  </button>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: '#FFFFFF', display: 'flex', alignItems: 'center', gap: '0.4rem', textDecoration: 'none', fontSize: '0.82rem' }}
                  >
                    <Github size={16} />
                    <span>REPO</span>
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Modal Popup */}
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
          isSpiderSense={isSpiderSense} 
        />

      </div>
    </section>
  );
}
