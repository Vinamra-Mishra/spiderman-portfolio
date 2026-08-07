import React, { useRef, useMemo, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, useAnimations, Html, Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function SpiderGLTF({ isSpiderSense }) {
  const groupRef = useRef();
  const { scene, animations } = useGLTF('/models/spider.glb');
  const { actions, names } = useAnimations(animations, groupRef);

  const [aspect, setAspect] = useState(() => window.innerWidth / window.innerHeight);

  useEffect(() => {
    const handleResize = () => setAspect(window.innerWidth / window.innerHeight);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (names && names.length > 0) {
      names.forEach((name) => {
        const action = actions[name];
        if (action) action.reset().fadeIn(0.5).play();
      });
    }
  }, [actions, names]);

  const { normalizedScene, baseScale } = useMemo(() => {
    const clone = scene.clone(true);
    const box = new THREE.Box3().setFromObject(clone);
    const center = box.getCenter(new THREE.Vector3());
    const size = box.getSize(new THREE.Vector3());
    clone.position.set(-center.x, -center.y, -center.z);
    const maxDim = Math.max(size.x, size.y, size.z);
    const calculatedScale = maxDim > 0 ? (3.2 / maxDim) : 1;
    return { normalizedScene: clone, baseScale: calculatedScale };
  }, [scene]);

  // Dynamic Responsive Scale based on screen aspect ratio
  const responsiveScale = useMemo(() => {
    if (aspect < 0.75) return baseScale * 0.7; // Mobile vertical screen scale down
    if (aspect < 1.2) return baseScale * 0.85; // Tablet / Square screen
    return baseScale;                          // Desktop widescreen
  }, [aspect, baseScale]);

  useEffect(() => {
    if (!normalizedScene) return;
    normalizedScene.traverse((child) => {
      if (child.isMesh && child.material) {
        child.material = child.material.clone();
        child.material.metalness = 0.95;
        child.material.roughness = 0.1;
        if (isSpiderSense) {
          child.material.emissive = new THREE.Color('#E11D48');
          child.material.emissiveIntensity = 0.9;
        } else {
          child.material.emissive = new THREE.Color('#D2FF00');
          child.material.emissiveIntensity = 0.5;
        }
      }
    });
  }, [normalizedScene, isSpiderSense]);

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.25;
      groupRef.current.position.set(0, 0, 0);
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]} scale={[responsiveScale, responsiveScale, responsiveScale]}>
      <primitive object={normalizedScene} />
    </group>
  );
}

function WebParticles({ isSpiderSense }) {
  const ref = useRef();
  const sphere = useMemo(() => {
    const positions = new Float32Array(250 * 3);
    for(let i=0; i<250; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos((Math.random() * 2) - 1);
      const r = 2.5 + Math.random() * 5.0;
      positions[i*3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i*3+1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i*3+2] = r * Math.cos(phi);
    }
    return positions;
  }, []);

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial 
          transparent 
          color={isSpiderSense ? '#E11D48' : '#D2FF00'} 
          size={0.06} 
          sizeAttenuation={true} 
          depthWrite={false} 
          blending={THREE.AdditiveBlending} 
        />
      </Points>
    </group>
  );
}

function Loader() {
  return (
    <Html center>
      <div className="font-hud" style={{ color: 'var(--ln-neon)', background: '#08090C', padding: '0.8rem 1.5rem', border: '2px solid var(--ln-neon)', fontSize: '0.8rem' }}>
        LOADING CANVAS...
      </div>
    </Html>
  );
}

export default function SpiderBackground({ isSpiderSense }) {
  return (
    <div className="spider-bg-canvas">
      <Canvas
        camera={{ position: [0, 0, 5.2], fov: 45 }}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      >
        <fog attach="fog" args={['#08090C', 3, 14]} />
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 8, 5]} intensity={2.0} color={isSpiderSense ? "#E11D48" : "#D2FF00"} />
        <directionalLight position={[-5, -5, -5]} intensity={0.8} color="#E11D48" />
        
        <React.Suspense fallback={<Loader />}>
          <SpiderGLTF isSpiderSense={isSpiderSense} />
          <WebParticles isSpiderSense={isSpiderSense} />
        </React.Suspense>
      </Canvas>
    </div>
  );
}

useGLTF.preload('/models/spider.glb');
