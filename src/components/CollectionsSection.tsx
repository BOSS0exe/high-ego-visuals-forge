
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Collection {
  id: number;
  name: string;
  description: string;
  image: string;
}

const collections: Collection[] = [
  {
    id: 1,
    name: "SUMMER 2025",
    description: "Lightweight fabrics with bold designs",
    image: "/placeholder.svg",
  },
  {
    id: 2,
    name: "URBAN LUXE",
    description: "Street style meets high fashion",
    image: "/placeholder.svg",
  },
  {
    id: 3,
    name: "ESSENTIALS",
    description: "Timeless pieces for every wardrobe",
    image: "/placeholder.svg",
  },
];

const CollectionsSection = () => {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section id="collections" className="py-24 bg-fashion-black">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">OUR <span className="text-fashion-gold">COLLECTIONS</span></h2>
          <div className="w-20 h-1 bg-fashion-gold mb-6"></div>
          <p className="text-fashion-lightGray text-center max-w-3xl">
            Discover our exclusive collections, designed with precision and crafted with premium materials.
          </p>
        </div>

        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 perspective">
          {collections.map((collection, index) => (
            <Card 
              key={collection.id}
              className={`bg-transparent border border-fashion-darkGray rounded-md overflow-hidden preserve-3d transition-transform duration-500 ${
                hoverIndex === index ? 'hover-rotate' : ''
              }`}
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(null)}
            >
              <div className="h-64 relative overflow-hidden">
                <div className="absolute inset-0 bg-fashion-gold/20"></div>
                <img
                  src={collection.image}
                  alt={collection.name}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-fashion-gold">{collection.name}</h3>
                <p className="text-fashion-lightGray mb-4">{collection.description}</p>
                <Button variant="outline" className="border-fashion-gold text-fashion-gold hover:bg-fashion-gold/10 mt-2">
                  View Collection
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollectionsSection;
