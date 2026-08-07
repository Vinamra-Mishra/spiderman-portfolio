import React, { useState, useCallback } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink, useLocation } from 'react-router-dom';
import SpiderBackground from './components/SpiderBackground';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import SkillsPage from './pages/SkillsPage';
import ProjectsPage from './pages/ProjectsPage';
import TimelinePage from './pages/TimelinePage';
import ContactPage from './pages/ContactPage';
import { Volume2, VolumeX } from 'lucide-react';
import './styles/index.css';

function Navbar({ isSpiderSense, toggleSpiderSense, soundEnabled, setSoundEnabled, playWebSound }) {
  const location = useLocation();

  const links = [
    { path: '/', label: 'OVERVIEW' },
    { path: '/about', label: 'ORIGIN & SPECS' },
    { path: '/skills', label: 'ARSENAL' },
    { path: '/projects', label: 'MISSIONS' },
    { path: '/timeline', label: 'TRAJECTORY' },
    { path: '/contact', label: 'CONTACT' },
  ];

  return (
    <>
      <nav className="app-navbar">
        <NavLink to="/" className="app-logo-mark" onClick={playWebSound}>
          <div className="app-badge">VKM</div>
          <div className="font-hud" style={{ fontSize: '1.1rem', fontWeight: '900', color: '#FFF', letterSpacing: '2px' }}>
            VINAMRA
          </div>
        </NavLink>

        <div className="app-nav-links">
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={playWebSound}
              className={`app-nav-link ${location.pathname === link.path ? 'active' : ''}`}
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <button
            onClick={() => { playWebSound(); toggleSpiderSense(); }}
            style={{
              background: isSpiderSense ? 'var(--spider-red)' : 'var(--neon-yellow)',
              color: isSpiderSense ? '#FFF' : '#08090C',
              fontFamily: 'var(--font-hud)',
              fontWeight: '900',
              fontSize: '0.75rem',
              padding: '0.4rem 0.8rem',
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
            {soundEnabled ? <Volume2 size={22} /> : <VolumeX size={22} />}
          </button>
        </div>
      </nav>

      {/* Marquee Ticker */}
      <div className="marquee-container">
        <div className="marquee-content">
          VINAMRA KUMAR MISHRA // FULL-STACK & AI SYSTEMS ENGINEER // BRAND NEW DAY PROTOCOL // ON TRACK FOR GREATNESS // SPIDER-MAN 3D EXPERIENCE // &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          VINAMRA KUMAR MISHRA // FULL-STACK & AI SYSTEMS ENGINEER // BRAND NEW DAY PROTOCOL // ON TRACK FOR GREATNESS // SPIDER-MAN 3D EXPERIENCE //
        </div>
      </div>
    </>
  );
}

export default function App() {
  const [isSpiderSense, setIsSpiderSense] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);

  const playWebSound = useCallback(() => {
    if (!soundEnabled) return;
    try {
      const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(1000, audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(200, audioCtx.currentTime + 0.1);
      gain.gain.setValueAtTime(0.4, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.1);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.1);
    } catch(e) {}
  }, [soundEnabled]);

  const toggleSpiderSense = () => {
    setIsSpiderSense(!isSpiderSense);
  };

  return (
    <Router>
      <div className="app-wrapper">
        <SpiderBackground isSpiderSense={isSpiderSense} />

        <Navbar 
          isSpiderSense={isSpiderSense} 
          toggleSpiderSense={toggleSpiderSense}
          soundEnabled={soundEnabled}
          setSoundEnabled={setSoundEnabled}
          playWebSound={playWebSound}
        />

        <main className="app-viewport">
          <Routes>
            <Route path="/" element={<HomePage isSpiderSense={isSpiderSense} playWebSound={playWebSound} />} />
            <Route path="/about" element={<AboutPage isSpiderSense={isSpiderSense} />} />
            <Route path="/skills" element={<SkillsPage isSpiderSense={isSpiderSense} />} />
            <Route path="/projects" element={<ProjectsPage isSpiderSense={isSpiderSense} playWebSound={playWebSound} />} />
            <Route path="/timeline" element={<TimelinePage isSpiderSense={isSpiderSense} />} />
            <Route path="/contact" element={<ContactPage isSpiderSense={isSpiderSense} />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
