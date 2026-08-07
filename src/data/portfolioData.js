export const personalInfo = {
  name: "Vinamra Kumar Mishra",
  alias: "Spider-Dev / Brand New Day",
  tagline: "Your Friendly Neighborhood Full-Stack & AI Systems Engineer",
  location: "Amaravati, India",
  university: "VIT-AP University",
  degree: "B.Tech in Computer Science & Engineering",
  gradYear: "2024 - 2028 (Class of 2028)",
  cgpa: "7.48 / 10.0",
  email: "vkmukm2005@gmail.com",
  phone: "+91 79996 87040",
  github: "https://github.com/Vinamra-Mishra",
  linkedin: "https://www.linkedin.com/in/vinamra-mishra/",
  status: "ACTIVE ON DUTY // OPEN FOR INTERNSHIPS",
  bio: "Highly motivated Computer Science undergraduate at VIT-AP University. Certified in Oracle Agentic AI, IBM Agentic AI, and Hedera Hashgraph (HCF). Developer of high-performance GraphRAG engines, autonomous 4WD Raspberry Pi robotics, and glassmorphism financial dashboards with a proven record of 45% render latency reduction and 99.2% system accuracy."
};

export const certifications = [
  {
    title: "Oracle Agentic AI Certified Foundations Associate",
    issuer: "Oracle",
    date: "Aug 2026",
    id: "103502786AAI26OFA",
    icon: "ShieldCheck",
    color: "#F80000"
  },
  {
    title: "Make Agentic AI Work for You",
    issuer: "IBM",
    date: "Jun 2026",
    id: "Credly Certified",
    icon: "Cpu",
    color: "#054ADA"
  },
  {
    title: "Hedera Certified Foundation (HCF)",
    issuer: "The Hashgraph Association",
    date: "May 2026",
    id: "f609af48-b787-41a3-8d48-6583fe09dd96",
    icon: "Layers",
    color: "#00F0FF"
  },
  {
    title: "DevQuest 2.0: Frontend, DSA & AI",
    issuer: "Unstop",
    date: "Jul 2026",
    id: "a4980048-678a-4265-aa6d-ba4d80975a4a",
    icon: "Award",
    color: "#FFBD00"
  },
  {
    title: "Green Skills & Applied AI for Climate Action",
    issuer: "1M1B (1 Million for 1 Billion)",
    date: "Jul 2026",
    id: "1M1B Certified",
    icon: "Zap",
    color: "#10B981"
  }
];

export const statsHUD = [
  { label: "AI & GraphRAG Mastery", value: 95, icon: "Brain", code: "LANGGRAPH_NEO4J" },
  { label: "Web-Slinging Agility (React/Vite)", value: 92, icon: "Zap", code: "LATENCY_-45%" },
  { label: "System & Backend Precision", value: 90, icon: "Terminal", code: "FASTAPI_NODE" },
  { label: "Hardware & Robotics Accuracy", value: 99, icon: "Bot", code: "ACCURACY_99.2%" }
];

export const skillsCategory = [
  {
    category: "AI & Agentic Arsenal",
    icon: "Bot",
    skills: [
      { name: "LangGraph", level: "Advanced", desc: "Multi-agent graph workflows" },
      { name: "Neo4j Knowledge Graphs", level: "Expert", desc: "Structured graph databases & Cypher" },
      { name: "Qdrant Vector DB", level: "Advanced", desc: "High-density semantic search" },
      { name: "Agentic AI Architectures", level: "Certified", desc: "Oracle & IBM Certified" },
      { name: "OpenCV & Vision", level: "Advanced", desc: "30 FPS real-time expression rendering" },
      { name: "Sensor Fusion & Voice", level: "Intermediate", desc: "Sub-100ms voice processing" }
    ]
  },
  {
    category: "Web-Shooters (Frontend)",
    icon: "Code",
    skills: [
      { name: "React 18 & Next.js", level: "Expert", desc: "SSR, CSR & Component Architecture" },
      { name: "TypeScript & ES6+", level: "Advanced", desc: "Strict typing & async patterns" },
      { name: "Three.js & Canvas 3D", level: "Advanced", desc: "WebGL Web-Slinging graphics" },
      { name: "Vite & Performance", level: "Expert", desc: "45% render latency reduction" },
      { name: "Glassmorphism & CSS3", level: "Expert", desc: "Marvel Tech HUD design tokens" },
      { name: "Chart.js & Lucide", level: "Advanced", desc: "Real-time analytics UI" }
    ]
  },
  {
    category: "Server Core (Backend & Blockchain)",
    icon: "Server",
    skills: [
      { name: "Python", level: "Expert", desc: "FastAPI, AI pipelines & scripting" },
      { name: "FastAPI", level: "Expert", desc: "SSE streaming & async RAG endpoints" },
      { name: "Node.js & Express", level: "Advanced", desc: "REST APIs & Middleware" },
      { name: "Hedera Hashgraph", level: "Certified", desc: "HCF Certified Decentralized Ledger" },
      { name: "Git & GitHub CI/CD", level: "Advanced", desc: "Version control & workflows" }
    ]
  },
  {
    category: "Gadgets & Hardware",
    icon: "Cpu",
    skills: [
      { name: "Raspberry Pi 4", level: "Advanced", desc: "Embedded Linux & Bot Control" },
      { name: "GPIO Architecture", level: "Advanced", desc: "Hardware pinout & motor drivers" },
      { name: "Motor Control & PWM", level: "Advanced", desc: "4WD obstacle avoidance" },
      { name: "Fluent UI Expression", level: "Advanced", desc: "Dynamic bot facial rendering" }
    ]
  }
];

export const projects = [
  {
    id: "graphrag-agent",
    title: "GraphRAG Agent",
    subtitle: "Hybrid Knowledge Graph & Vector RAG Backend",
    category: "AI & Agentic",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
    tags: ["FastAPI", "LangGraph", "Neo4j", "Qdrant", "Next.js", "SSE Streaming"],
    github: "https://github.com/Vinamra-Mishra/GraphRAG-Agent",
    demo: "https://github.com/Vinamra-Mishra/GraphRAG-Agent",
    featured: true,
    badge: "MISSION #01",
    highlights: [
      "Architected a complete hybrid RAG system pairing Neo4j Knowledge Graphs with Qdrant Vector search.",
      "Implemented dynamic query planning & Server-Sent Events (SSE) streaming with FastAPI.",
      "Built background PDF ingestion pipeline with Next.js reasoning UI for step-by-step agent transparency."
    ]
  },
  {
    id: "finova",
    title: "Finova",
    subtitle: "Personal Finance Dashboard & Multi-Currency Tracker",
    category: "Web Applications",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    tags: ["React 18", "Vite", "Chart.js", "Glassmorphism", "CSS3"],
    github: "https://github.com/Vinamra-Mishra/Finova",
    demo: "https://github.com/Vinamra-Mishra/Finova",
    featured: true,
    badge: "MISSION #02",
    highlights: [
      "Designed a sleek glassmorphism finance dashboard with 3 live currency converters (USD, EUR, INR).",
      "Processed 500+ financial metrics in real-time with custom analytics visualizers.",
      "Achieved 45% reduction in UI render latency through optimized Vite asset bundling & React state."
    ]
  },
  {
    id: "ai-robot",
    title: "AI-Robot",
    subtitle: "Autonomous 4WD Raspberry Pi Mobile Bot",
    category: "Robotics & Hardware",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80",
    tags: ["Python", "OpenCV", "Raspberry Pi 4", "GPIO", "Voice AI"],
    github: "https://github.com/Vinamra-Mishra",
    demo: "https://github.com/Vinamra-Mishra",
    featured: true,
    badge: "MISSION #03",
    highlights: [
      "Constructed a 4WD mobile robot powered by Raspberry Pi 4 & custom GPIO pin architecture.",
      "Engineered 30 FPS real-time facial expression rendering on LCD display based on sensor state.",
      "Achieved sub-100ms voice processing speed and 99.2% obstacle detection accuracy using OpenCV vision."
    ]
  },
  {
    id: "campus-connect",
    title: "Campus-Connect",
    subtitle: "Academic Collaboration & Project Hub",
    category: "Web Applications",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
    tags: ["TypeScript", "Node.js", "Express", "REST API", "React"],
    github: "https://github.com/Vinamra-Mishra",
    demo: "https://github.com/Vinamra-Mishra",
    featured: false,
    badge: "MISSION #04",
    highlights: [
      "Built a full-stack academic platform for university students to share and collaborate on tech projects.",
      "Designed RESTful endpoints using Node.js & Express, seamlessly handling 200+ active project listings.",
      "Integrated secure authentication, user profiles, and tag-based project search."
    ]
  }
];

export const timelineEvents = [
  {
    year: "2026 (Present)",
    title: "Oracle & IBM Agentic AI Certifications",
    organization: "Oracle / IBM / Hashgraph Association",
    type: "Certification",
    desc: "Earned Oracle Agentic AI Certified Foundations Associate, IBM Agentic AI Credly Certification, and Hedera Certified Foundation (HCF) credentials."
  },
  {
    year: "2024 - Present",
    title: "Software Engineering & AI Developer",
    organization: "VIT-AP University / Independent Labs",
    type: "Projects",
    desc: "Architected GraphRAG Agent (Neo4j + Qdrant), Finova Finance Dashboard (45% latency drop), and Autonomous 4WD Raspberry Pi AI Bot."
  },
  {
    year: "2024 - 2028",
    title: "B.Tech in Computer Science & Engineering",
    organization: "VIT-AP University, Andhra Pradesh",
    type: "Education",
    desc: "Pursuing CS degree with 7.48 CGPA. Core focus on Data Structures & Algorithms, OS, DBMS, Web Engineering, AI & Agentic Systems."
  }
];
