# 🕷️ Spider-Man: Brand New Day Portfolio (Lando Norris Edition)

An interactive, high-performance 3D portfolio combining a **Spider-Man Brand New Day theme** with the bold, high-speed editorial design aesthetic of **Lando Norris's official website (landonorris.com)**.

![React](https://img.shields.io/badge/React-18-blue?logo=react)
![Three.js](https://img.shields.io/badge/Three.js-WebGL-black?logo=three.js)
![Vite](https://img.shields.io/badge/Vite-5.4-purple?logo=vite)
![License](https://img.shields.io/badge/License-MIT-green)

---

## ✨ Features

- 🏎️ **Lando Norris High-Performance Editorial UI**:
  - Iconic **Neon Yellow (`#D2FF00`)** + **Jet Black (`#08090C`)** + **Spider Red (`#E11D48`)** color palette.
  - Infinite marquee ticker banner with smooth CSS animations.
  - Modular **"ON TRACK"** (Engineering & AI) vs **"OFF TRACK"** (Origin & Specs) layout structure.
  - Oversized display typography and sharp geometric grid cards.

- 🕷️ **Interactive 3D Spider Model Canvas**:
  - Embedded custom glTF 3D model (`spider.glb`) rendered via `@react-three/fiber` and `@react-three/drei`.
  - Dynamic aspect-ratio based scaling for mobile, tablet, and desktop viewports.
  - Metallic reflections, emissive neon highlights, and floating web particle cloud.

- 🚨 **Spider-Sense Alert Toggle**:
  - Interactive suit warning mode triggering bright red alert states (`#E11D48`) across the UI, 3D model, and background mesh.

- 🔊 **Web-Shooter Audio Synthesis**:
  - Real-time Web Audio API audio synthesis producing realistic web-shooter sound effects on user interaction.

- 📐 **Fluid Responsive Scaling**:
  - Built with CSS `clamp()` functions and responsive grid systems to ensure seamless scaling across mobile, laptop, and ultra-wide 4K monitors.

---

## 🛠️ Tech Stack

- **Framework**: [React 18](https://reactjs.org/) + [Vite](https://vitejs.dev/)
- **3D & WebGL**: [Three.js](https://threejs.org/) + [@react-three/fiber](https://docs.pmnd.rs/react-three-fiber) + [@react-three/drei](https://github.com/pmndrs/drei)
- **Routing**: [React Router v6](https://reactrouter.com/)
- **Icons & Effects**: [Lucide React](https://lucide.dev/) + [Canvas Confetti](https://github.com/catdad/canvas-confetti)
- **Typography**: Google Fonts (Anton, Orbitron, Bangers, Outfit, Syne)

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v16+ recommended)
- npm or yarn

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/vinamramishra/spiderman-portfolio.git
   cd spiderman-portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

---

## 📂 Project Structure

```
├── public/
│   └── models/
│       └── spider.glb          # 3D Spider Model Asset
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Top Navigation Bar & Marquee
│   │   ├── SpiderBackground.jsx # 3D Fixed WebGL Canvas
│   │   └── ProjectModal.jsx    # Mission Debrief Overlay
│   ├── pages/
│   │   ├── HomePage.jsx        # Hero Overview & ON/OFF Track Split
│   │   ├── AboutPage.jsx       # Academic Origin & Specifications
│   │   ├── SkillsPage.jsx      # Tech Arsenal Matrix
│   │   ├── ProjectsPage.jsx    # Mission Vault Archives
│   │   ├── TimelinePage.jsx    # Career Chronicles & Trajectory
│   │   └── ContactPage.jsx     # Spider-Signal Contact Terminal
│   ├── data/
│   │   └── portfolioData.js    # Centralized Portfolio Data
│   ├── styles/
│   │   └── index.css           # Lando Norris Editorial Design System
│   ├── App.jsx                 # App Shell & Router Settings
│   └── main.jsx                # Application Entry Point
├── README.md
└── vite.config.js
```

---

## 👤 Author

**Vinamra Kumar Mishra**  
- Email: vinamrakumarmishra@gmail.com
- GitHub: [@vinamramishra](https://github.com/vinamramishra)
- LinkedIn: [Vinamra Mishra](https://linkedin.com/in/vinamramishra)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
