import React, { useState, useEffect, useCallback } from 'react';
import SpiderBackground from './components/SpiderBackground';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import SkillsPage from './pages/SkillsPage';
import ProjectsPage from './pages/ProjectsPage';
import TimelinePage from './pages/TimelinePage';
import ContactPage from './pages/ContactPage';
import { Volume2, VolumeX, RefreshCw } from 'lucide-react';
import './styles/index.css';

function Navbar({ activeSection, isSpiderSense, toggleSpiderSense, soundEnabled, setSoundEnabled, playWebSound, triggerReassemble }) {
  const links = [
    { id: 'hero', label: 'OVERVIEW' },
    { id: 'about', label: 'ORIGIN & SPECS' },
    { id: 'skills', label: 'ARSENAL' },
    { id: 'projects', label: 'MISSIONS' },
    { id: 'timeline', label: 'TRAJECTORY' },
    { id: 'contact', label: 'CONTACT' },
  ];

  const scrollToSection = (id) => {
    playWebSound();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav className="app-navbar">
        <div className="app-logo-mark" onClick={() => scrollToSection('hero')}>
          <div className="app-badge">VKM</div>
          <div className="font-hud" style={{ fontSize: '1.1rem', fontWeight: '900', color: '#FFF', letterSpacing: '2px' }}>
            VINAMRA
          </div>
        </div>

        <div className="app-nav-links">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={`app-nav-link ${activeSection === link.id ? 'active' : ''}`}
            >
              {link.label}
            </button>
          ))}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          {/* Re-Assemble Polygon Trigger */}
          <button
            onClick={() => { playWebSound(); triggerReassemble(); }}
            className="font-hud"
            style={{
              background: 'transparent',
              color: 'var(--neon-yellow)',
              border: '1px solid var(--neon-yellow)',
              fontSize: '0.7rem',
              fontWeight: 'bold',
              padding: '0.35rem 0.7rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.3rem',
              transform: 'skewX(-6deg)'
            }}
            title="Re-assemble 3D Spider and UI Polygons"
          >
            <RefreshCw size={12} /> RE-ASSEMBLE
          </button>

          <button
            onClick={() => { playWebSound(); toggleSpiderSense(); }}
            style={{
              background: isSpiderSense ? 'var(--spider-red)' : 'var(--neon-yellow)',
              color: isSpiderSense ? '#FFF' : '#08090C',
              fontFamily: 'var(--font-hud)',
              fontWeight: '900',
              fontSize: '0.7rem',
              padding: '0.4rem 0.7rem',
              border: 'none',
              cursor: 'pointer',
              transform: 'skewX(-6deg)'
            }}
          >
            {isSpiderSense ? 'SENSE: ALERT' : 'SPIDER-SENSE'}
          </button>

          <button
            onClick={() => { setSoundEnabled(!soundEnabled); playWebSound(); }}
            style={{ background: 'transparent', border: 'none', color: soundEnabled ? 'var(--neon-yellow)' : '#6B7280', cursor: 'pointer' }}
          >
            {soundEnabled ? <Volume2 size={20} /> : <VolumeX size={20} />}
          </button>
        </div>
      </nav>

      {/* Marquee Ticker */}
      <div className="marquee-container">
        <div className="marquee-content">
          VINAMRA KUMAR MISHRA // FULL-STACK & AI SYSTEMS ENGINEER // BRAND NEW DAY PROTOCOL // 3D POLYGON MATERIALIZATION ACTIVE // ON TRACK FOR GREATNESS // &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          VINAMRA KUMAR MISHRA // FULL-STACK & AI SYSTEMS ENGINEER // BRAND NEW DAY PROTOCOL // 3D POLYGON MATERIALIZATION ACTIVE // ON TRACK FOR GREATNESS //
        </div>
      </div>
    </>
  );
}

export default function App() {
  const [isSpiderSense, setIsSpiderSense] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [activeSection, setActiveSection] = useState('hero');

  // Polygon assembly state starts at 0 for the intro loading sequence
  const [assemblyProgress, setAssemblyProgress] = useState(0); 
  const [isAssembled, setIsAssembled] = useState(false);
  const [reassembleKey, setReassembleKey] = useState(0);

  // Sound Synthesizer
  const playWebSound = useCallback(() => {
    if (!soundEnabled) return;
    try {
      const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(1200, audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(150, audioCtx.currentTime + 0.15);
      gain.gain.setValueAtTime(0.4, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.15);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.15);
    } catch(e) {}
  }, [soundEnabled]);

  // Trigger Assembly Animation on Mount and Reassemble
  useEffect(() => {
    setAssemblyProgress(0);
    setIsAssembled(false);
    
    let startTime = performance.now();
    const duration = 2200; // 2.2 second 3D spider materialization

    const updateAssembly = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      setAssemblyProgress(progress);

      if (progress < 1) {
        requestAnimationFrame(updateAssembly);
      } else {
        setIsAssembled(true);
        playWebSound();
      }
    };

    const animId = requestAnimationFrame(updateAssembly);
    return () => cancelAnimationFrame(animId);
  }, [reassembleKey, playWebSound]);

  // Section Observer for Active Navigation
  useEffect(() => {
    const sectionIds = ['hero', 'about', 'skills', 'projects', 'timeline', 'contact'];
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i]);
        if (section && section.offsetTop <= scrollPos) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const triggerReassemble = () => {
    setReassembleKey(prev => prev + 1);
  };

  const toggleSpiderSense = () => {
    setIsSpiderSense(!isSpiderSense);
  };

  return (
    <div className="app-wrapper">
      {/* Fixed 3D Background Canvas */}
      <SpiderBackground 
        isSpiderSense={isSpiderSense} 
        isAssembled={isAssembled} 
        assemblyProgress={assemblyProgress}
      />

      {/* Fixed Navbar & Marquee */}
      <Navbar 
        activeSection={activeSection}
        isSpiderSense={isSpiderSense} 
        toggleSpiderSense={toggleSpiderSense}
        soundEnabled={soundEnabled}
        setSoundEnabled={setSoundEnabled}
        playWebSound={playWebSound}
        triggerReassemble={triggerReassemble}
      />

      {/* Single Page Vertical Viewport - UI hidden until spider assembled */}
      <main className="single-page-content">
        
        <section id="hero" className={!isAssembled ? 'ui-hidden' : 'polygon-forming'}>
          <HomePage isSpiderSense={isSpiderSense} playWebSound={playWebSound} />
        </section>

        <section id="about" className={!isAssembled ? 'ui-hidden' : 'polygon-forming'}>
          <AboutPage isSpiderSense={isSpiderSense} />
        </section>

        <section id="skills" className={!isAssembled ? 'ui-hidden' : 'polygon-forming'}>
          <SkillsPage isSpiderSense={isSpiderSense} />
        </section>

        <section id="projects" className={!isAssembled ? 'ui-hidden' : 'polygon-forming'}>
          <ProjectsPage isSpiderSense={isSpiderSense} playWebSound={playWebSound} />
        </section>

        <section id="timeline" className={!isAssembled ? 'ui-hidden' : 'polygon-forming'}>
          <TimelinePage isSpiderSense={isSpiderSense} />
        </section>

        <section id="contact" className={!isAssembled ? 'ui-hidden' : 'polygon-forming'}>
          <ContactPage isSpiderSense={isSpiderSense} />
        </section>

      </main>
    </div>
  );
}
