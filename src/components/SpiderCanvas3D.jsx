import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

// 3D Animated Metallic Spider Emblem
function SpiderEmblem3D({ isSpiderSense }) {
  const meshRef = useRef();
  const ringRef = useRef();

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.4;
      meshRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.8) * 0.15;
    }
    if (ringRef.current) {
      ringRef.current.rotation.z -= delta * 0.6;
      ringRef.current.rotation.y += delta * 0.2;
    }
  });

  const emblemColor = isSpiderSense ? '#FF1E27' : '#00F0FF';
  const glowColor = isSpiderSense ? '#8B0000' : '#005B94';

  return (
    <Float speed={2.5} rotationIntensity={0.5} floatIntensity={0.8}>
      <group position={[0, 0, 0]}>
        {/* Outer Tech HUD Ring */}
        <mesh ref={ringRef} scale={2.2}>
          <torusGeometry args={[1, 0.02, 16, 100]} />
          <meshStandardMaterial 
            color={emblemColor} 
            emissive={emblemColor} 
            emissiveIntensity={1.5}
            wireframe
          />
        </mesh>

        {/* Central Spider Body Geometry */}
        <mesh ref={meshRef} scale={1.2}>
          <octahedronGeometry args={[1, 2]} />
          <meshStandardMaterial 
            color={emblemColor}
            roughness={0.15}
            metalness={0.9}
            emissive={glowColor}
            emissiveIntensity={0.8}
          />
        </mesh>

        {/* 8 Geometric Spider Legs */}
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => {
          const rad = (angle * Math.PI) / 180;
          return (
            <group key={i} rotation={[0, 0, rad]}>
              <mesh position={[1.4, 0, 0]} rotation={[0, 0, i % 2 === 0 ? 0.3 : -0.3]}>
                <boxGeometry args={[0.9, 0.06, 0.06]} />
                <meshStandardMaterial 
                  color={emblemColor} 
                  emissive={emblemColor}
                  emissiveIntensity={1}
                />
              </mesh>
            </group>
          );
        })}
      </group>
    </Float>
  );
}

// 3D Interactive Web Particle Network
function WebParticleNetwork({ isSpiderSense, count = 120 }) {
  const pointsRef = useRef();

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);

    const primaryColor = new THREE.Color(isSpiderSense ? '#FF1E27' : '#00F0FF');
    const secondaryColor = new THREE.Color(isSpiderSense ? '#FFBD00' : '#005B94');

    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 16;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 12;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10;

      const mixed = primaryColor.clone().lerp(secondaryColor, Math.random());
      col[i * 3] = mixed.r;
      col[i * 3 + 1] = mixed.g;
      col[i * 3 + 2] = mixed.b;
    }
    return [pos, col];
  }, [count, isSpiderSense]);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;
      pointsRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.03) * 0.05;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={count}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.12}
        vertexColors
        transparent
        opacity={0.85}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

export default function SpiderCanvas3D({ isSpiderSense }) {
  return (
    <div style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, pointerEvents: 'none' }}>
      <Canvas
        camera={{ position: [0, 0, 6], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.6} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color={isSpiderSense ? "#FF1E27" : "#00F0FF"} />
        <pointLight position={[-10, -10, -10]} intensity={0.8} color="#FFBD00" />
        
        <SpiderEmblem3D isSpiderSense={isSpiderSense} />
        <WebParticleNetwork isSpiderSense={isSpiderSense} />
      </Canvas>
    </div>
  );
}
