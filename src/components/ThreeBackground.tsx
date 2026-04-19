import { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, PerspectiveCamera, ContactShadows, Float, useGLTF, Center } from '@react-three/drei';
import * as THREE from 'three';
import { useScroll, useSpring, useTransform } from 'motion/react';

function CustomPokeBall() {
  const groupRef = useRef<THREE.Group>(null);
  // Prepend / to ensure it pulls from public root
  const { scene } = useGLTF('/pokeball.glb');
  
  const { scrollYProgress } = useScroll();
  
  // High-performance springs for smooth tracking - slightly snappier for better response
  const springValue = useSpring(scrollYProgress, { 
    stiffness: 40, 
    damping: 20,
    mass: 1 
  });

  // Map scroll to professional movements - Constant pace rotation, starting with button facing user
  const rotationY = useTransform(springValue, [0, 1], [Math.PI * 1.5, Math.PI * 7.5]);
  
  const posX = useTransform(springValue, [0, 0.3, 0.7, 1], [0, 1.8, -1.8, 0]); 
  const posY = useTransform(springValue, [0, 0.5, 1], [0, -1, 0]);
  const scale = useTransform(springValue, [0, 0.5, 1], [0.8, 1.1, 0.9]); 

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (groupRef.current) {
      // Rotation uses the constant mapping
      groupRef.current.rotation.y = rotationY.get();
      
      groupRef.current.position.x = posX.get();
      groupRef.current.position.y = posY.get() + Math.sin(t * 0.3) * 0.08;
      groupRef.current.scale.setScalar(scale.get());
      
      groupRef.current.rotation.x = Math.sin(t * 0.2) * 0.05 + 0.12; 
      groupRef.current.rotation.z = Math.cos(t * 0.1) * 0.03;

      // Mouse tracking for subtle parallax
      const mouseX = (state.mouse.x * state.viewport.width) / 15;
      const mouseY = (state.mouse.y * state.viewport.height) / 15;
      groupRef.current.position.x += mouseX * 0.02;
      groupRef.current.position.y += mouseY * 0.02;
    }
  });

  return (
    <Float speed={1.2} rotationIntensity={0.3} floatIntensity={0.5}>
      <group ref={groupRef}>
        <Center>
          <primitive object={scene} />
        </Center>
      </group>
    </Float>
  );
}

// Preload the model to prevent popping
useGLTF.preload('/pokeball.glb');

export default function ThreeBackground() {
  return (
    <div className="fixed inset-0 -z-10 bg-[#040406]">
      <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 7], fov: 35 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.6} />
          
          {/* Main Key Lights */}
          <spotLight 
            position={[15, 20, 15]} 
            angle={0.2} 
            penumbra={1} 
            intensity={1500} 
            color="#FFFFFF"
            castShadow 
          />
          <spotLight 
            position={[-15, 10, 10]} 
            angle={0.25} 
            penumbra={1} 
            intensity={800} 
            color="#D4AF37" 
          />
          
          {/* Rim / Accent Lights */}
          <pointLight position={[-10, 0, -5]} intensity={600} color="#9B1B1B" />
          <pointLight position={[10, -5, 5]} intensity={400} color="#FFFFFF" />
          <pointLight position={[0, -10, 5]} intensity={300} color="#D4AF37" />
          
          <CustomPokeBall />
          
          <ContactShadows 
            position={[0, -2.5, 0]} 
            opacity={0.6} 
            scale={20} 
            blur={2.5} 
            far={10} 
          />
          <Environment preset="city" /> {/* City provides better metallic reflections */}
        </Suspense>
      </Canvas>
      {/* Cinematic Overlays */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-[#040406]/20 to-[#040406]" />
      <div className="absolute inset-0 pointer-events-none backdrop-blur-[0.8px]" />
    </div>
  );
}
