"use client";

import { useState, useEffect } from "react";
import { CardStack, CardStackItem } from "@/components/ruixen/card-stack";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const items: CardStackItem[] = [
  {
    id: 1,
    title: "Luxury Performance",
    description: "Experience the thrill of precision engineering",
    imageSrc: "/images/card-01.png",
    href: "#",
  },
  {
    id: 2,
    title: "Elegant Design",
    description: "Where beauty meets functionality",
    imageSrc: "/images/card-02.png",
    href: "#",
  },
  {
    id: 3,
    title: "Power & Speed",
    description: "Unleash the true potential of the road",
    imageSrc: "/images/card-03.png",
    href: "#",
  },
  {
    id: 4,
    title: "Power & Speed",
    description: "Unleash the true potential of the road",
    imageSrc: "/images/card-04.png",
    href: "#",
  },
  {
    id: 5,
    title: "Power & Speed",
    description: "Unleash the true potential of the road",
    imageSrc: "/images/card-05.png",
    href: "#",
  },
];

export default function Carousel() {
  const [dimensions, setDimensions] = useState({ width: 520, height: 320 });

  useEffect(() => {
    const updateDimensions = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth < 640) {
        setDimensions({ width: screenWidth - 32, height: 400 });
      } else if (screenWidth < 1024) {
        setDimensions({ width: 420, height: 360 });
      } else {
        setDimensions({ width: 520, height: 320 });
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  return (
    <div className="min-h-[80vh] mask-b-from-70% w-full bg-background my-18 md:my-38 text-foreground p-4 md:p-8 flex items-center justify-center overflow-hidden">
      <ScrollReveal className="w-full flex items-center justify-center" scale={0.8} y={100}>
        <CardStack
          items={items}
          cardWidth={dimensions.width}
          cardHeight={dimensions.height}
          initialIndex={0}
          autoAdvance
          intervalMs={3000}
          pauseOnHover
        />
      </ScrollReveal>
    </div>
  );
}
