
import React, { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, MeshDistortMaterial, Sphere } from "@react-three/drei";
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-fashion-black to-fashion-darkGray">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              ABOUT <span className="text-fashion-gold">HIGH EGO</span>
            </h2>
            <div className="w-20 h-1 bg-fashion-gold mb-6"></div>
            <p className="text-fashion-lightGray mb-6">
              Founded in 2023, High Ego Vision is more than just a clothing brand; it's a statement of style, confidence, and ambition. Our designs blend contemporary aesthetics with timeless elegance to create pieces that stand out from the crowd.
            </p>
            <p className="text-fashion-lightGray mb-6">
              Every High Ego garment is created with meticulous attention to detail, using premium materials sourced from around the world. We believe that fashion should not only look good but also feel good and last.
            </p>
            <div className="mt-8">
              <Button className="bg-fashion-gold hover:bg-fashion-gold/80 text-fashion-black font-medium">
                OUR STORY
              </Button>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 h-[400px] perspective">
            <Canvas>
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} />
              <Sphere args={[1, 64, 64]}>
                <MeshDistortMaterial 
                  color="#CABA7F" 
                  attach="material" 
                  distort={0.4} 
                  speed={1.5} 
                  roughness={0.2}
                  metalness={0.8}
                />
              </Sphere>
              <Environment preset="city" />
            </Canvas>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
