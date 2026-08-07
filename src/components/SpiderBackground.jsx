import React, { useRef, useMemo, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, useAnimations, Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function SpiderGLTF({ isSpiderSense, isAssembled, assemblyProgress }) {
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
    if (!scene) return { normalizedScene: null, baseScale: 1 };
    const clone = scene.clone(true);
    const box = new THREE.Box3().setFromObject(clone);
    const center = box.getCenter(new THREE.Vector3());
    const size = box.getSize(new THREE.Vector3());
    clone.position.set(-center.x, -center.y, -center.z);
    const maxDim = Math.max(size.x, size.y, size.z);
    const calculatedScale = maxDim > 0 ? (3.2 / maxDim) : 1;
    return { normalizedScene: clone, baseScale: calculatedScale };
  }, [scene]);

  // Responsive scale based on aspect ratio
  const responsiveScale = useMemo(() => {
    let scaleMultiplier = 1;
    if (aspect < 0.75) scaleMultiplier = 0.7;
    else if (aspect < 1.2) scaleMultiplier = 0.85;

    const currentScale = baseScale * scaleMultiplier * (1 + (1 - assemblyProgress) * 0.5);
    return currentScale;
  }, [aspect, baseScale, assemblyProgress]);

  useEffect(() => {
    if (!normalizedScene) return;
    normalizedScene.traverse((child) => {
      if (child.isMesh && child.material) {
        child.material = child.material.clone();
        if (assemblyProgress < 0.9) {
          child.material.wireframe = true;
          child.material.emissive = new THREE.Color(isSpiderSense ? '#E11D48' : '#D2FF00');
          child.material.emissiveIntensity = 1.0;
        } else {
          child.material.wireframe = false;
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
      }
    });
  }, [normalizedScene, isSpiderSense, assemblyProgress]);

  useFrame((_, delta) => {
    if (groupRef.current) {
      const rotSpeed = assemblyProgress < 1 ? delta * 1.2 : delta * 0.25;
      groupRef.current.rotation.y += rotSpeed;
      
      const floatY = (1 - assemblyProgress) * Math.sin(Date.now() * 0.005) * 0.2;
      groupRef.current.position.set(0, floatY, 0);
    }
  });

  if (!normalizedScene) return null;

  return (
    <group ref={groupRef} position={[0, 0, 0]} scale={[responsiveScale, responsiveScale, responsiveScale]}>
      <primitive object={normalizedScene} />
    </group>
  );
}

// 3D Floating Polygon Fragments Cloud assembling into the spider
function PolygonAssemblyParticles({ isSpiderSense, assemblyProgress }) {
  const ref = useRef();
  const particleCount = 350;

  const { positions, origPositions } = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    const orig = new Float32Array(particleCount * 3);
    for(let i = 0; i < particleCount; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos((Math.random() * 2) - 1);
      const r = 1.5 + Math.random() * 4.0;
      
      orig[i*3] = r * Math.sin(phi) * Math.cos(theta);
      orig[i*3+1] = r * Math.sin(phi) * Math.sin(theta);
      orig[i*3+2] = r * Math.cos(phi);

      pos[i*3] = orig[i*3];
      pos[i*3+1] = orig[i*3+1];
      pos[i*3+2] = orig[i*3+2];
    }
    return { positions: pos, origPositions: orig };
  }, []);

  useFrame((_, delta) => {
    if (ref.current && ref.current.geometry) {
      const positionsArr = ref.current.geometry.attributes.position.array;
      const factor = 1 - assemblyProgress;
      
      for (let i = 0; i < particleCount; i++) {
        positionsArr[i*3] = origPositions[i*3] * factor;
        positionsArr[i*3+1] = origPositions[i*3+1] * factor;
        positionsArr[i*3+2] = origPositions[i*3+2] * factor;
      }
      ref.current.geometry.attributes.position.needsUpdate = true;
      ref.current.rotation.y += delta * 0.5;
    }
  });

  return (
    <group>
      <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial 
          transparent 
          color={isSpiderSense ? '#E11D48' : '#D2FF00'} 
          size={0.08} 
          sizeAttenuation={true} 
          depthWrite={false} 
          blending={THREE.AdditiveBlending} 
        />
      </Points>
    </group>
  );
}

export default function SpiderBackground({ isSpiderSense, isAssembled, assemblyProgress }) {
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
        
        <React.Suspense fallback={null}>
          <SpiderGLTF 
            isSpiderSense={isSpiderSense} 
            isAssembled={isAssembled} 
            assemblyProgress={assemblyProgress} 
          />
        </React.Suspense>
        
        <PolygonAssemblyParticles 
          isSpiderSense={isSpiderSense} 
          assemblyProgress={assemblyProgress} 
        />
      </Canvas>
    </div>
  );
}

useGLTF.preload('/models/spider.glb');
