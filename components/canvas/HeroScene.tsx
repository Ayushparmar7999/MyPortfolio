"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { useRef, useMemo } from "react";
import * as THREE from "three";

function AntigravityParticles({ count = 1800 }) {
  const pointsRef = useRef<THREE.Points>(null);

  const [positions, velocities, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const vel = new Float32Array(count);
    const cols = new Float32Array(count * 3);

    const colorsPalette = [
      new THREE.Color("#7C3AED"), // Violet
      new THREE.Color("#3B82F6"), // Blue
      new THREE.Color("#06B6D4"), // Cyan
    ];

    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 16;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 12;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 8;

      vel[i] = 0.008 + Math.random() * 0.018;

      const color =
        colorsPalette[Math.floor(Math.random() * colorsPalette.length)];
      cols[i * 3] = color.r;
      cols[i * 3 + 1] = color.g;
      cols[i * 3 + 2] = color.b;
    }

    return [pos, vel, cols];
  }, [count]);

  useFrame((state) => {
    if (!pointsRef.current) return;
    const geometry = pointsRef.current.geometry;
    const posAttribute = geometry.attributes.position;
    const array = posAttribute.array as Float32Array;

    const { x: mouseX, y: mouseY } = state.pointer;

    for (let i = 0; i < count; i++) {
      // Antigravity rise
      array[i * 3 + 1] += velocities[i];

      // Natural floating drift
      const time = state.clock.getElapsedTime();
      array[i * 3] += Math.sin(time * 0.4 + i) * 0.002;

      // Reset to bottom
      if (array[i * 3 + 1] > 6) {
        array[i * 3 + 1] = -6;
        array[i * 3] = (Math.random() - 0.5) * 16;
      }

      // Mouse repulsion
      const pX = array[i * 3];
      const pY = array[i * 3 + 1];
      const dx = pX - mouseX * 8;
      const dy = pY - mouseY * 6;
      const distance = Math.hypot(dx, dy);

      if (distance < 2.5) {
        const force = (2.5 - distance) * 0.035;
        const angle = Math.atan2(dy, dx);
        array[i * 3] += Math.cos(angle) * force;
        array[i * 3 + 1] += Math.sin(angle) * force;
      }
    }

    posAttribute.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.06}
        vertexColors
        transparent
        opacity={0.65}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

export default function HeroScene() {
  return (
    <div className="absolute inset-0 z-0 h-full w-full opacity-55">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1.2} />
        <directionalLight
          position={[-10, -10, -5]}
          color="#7C3AED"
          intensity={1.5}
        />

        <AntigravityParticles />

        <Environment preset="city" />
      </Canvas>
    </div>
  );
}
