
import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Environment, ContactShadows } from "@react-three/drei";
import * as THREE from "three";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

// We'll create a placeholder 3D model as we don't have an actual clothing model
function TShirtModel(props: any) {
  const ref = useRef<THREE.Mesh>(null!);
  
  // Simple rotation animation
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.3) * 0.2;
    }
  });

  return (
    <mesh ref={ref} {...props} castShadow receiveShadow>
      <boxGeometry args={[1, 1.5, 0.2]} />
      <meshStandardMaterial attach="material" color="#CABA7F" metalness={0.4} roughness={0.2} />
    </mesh>
  );
}

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full bg-fashion-black overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Canvas shadows camera={{ position: [0, 0, 5], fov: 45 }}>
          <ambientLight intensity={0.5} />
          <directionalLight
            position={[10, 10, 10]}
            intensity={1.5}
            castShadow
            shadow-mapSize={1024}
          />
          <pointLight position={[-10, 0, -10]} intensity={0.5} />
          <TShirtModel position={[0, 0, 0]} />
          <ContactShadows 
            position={[0, -1.5, 0]} 
            opacity={0.4} 
            scale={5} 
            blur={2.5} 
            far={4} 
          />
          <Environment preset="city" />
          <OrbitControls 
            enableZoom={false} 
            enablePan={false}
            minPolarAngle={Math.PI / 2.5}
            maxPolarAngle={Math.PI / 2}
          />
        </Canvas>
      </div>
      
      <div className="relative z-10 h-full flex flex-col justify-end items-center text-center pb-16 px-4">
        <div className="hero-gradient absolute inset-0" />
        <div className="relative z-20">
          <h1 className="font-montserrat font-bold text-5xl md:text-7xl mb-2">
            HIGH <span className="text-fashion-gold">EGO</span> VISION
          </h1>
          <p className="text-fashion-lightGray text-lg md:text-xl max-w-2xl mx-auto mt-4 mb-8">
            Elevate your style with our exclusive collection of premium apparel
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-fashion-gold hover:bg-fashion-gold/80 text-fashion-black font-medium">
              SHOP NOW
            </Button>
            <Button variant="outline" className="border-fashion-gold text-fashion-gold hover:bg-fashion-gold/10">
              EXPLORE COLLECTION
            </Button>
          </div>
        </div>
        <a
          href="#collections"
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center mt-16 animate-bounce"
        >
          <span className="text-fashion-lightGray text-sm mb-2">Scroll</span>
          <ArrowDown className="h-6 w-6 text-fashion-gold" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
