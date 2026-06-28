"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { CardStack, CardStackItem } from "@/components/ruixen/card-stack";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const items: CardStackItem[] = [
  {
    id: 1,
    title: "Luxury Performance",
    description: "Experience the thrill of precision engineering",
    imageSrc: "/cert/card-01.webp",
    href: "#",
  },
  {
    id: 2,
    title: "Elegant Design",
    description: "Where beauty meets functionality",
    imageSrc: "/cert/card-02.webp",
    href: "#",
  },
  {
    id: 3,
    title: "Power & Speed",
    description: "Unleash the true potential of the road",
    imageSrc: "/cert/card-03.webp",
    href: "#",
  },
  {
    id: 4,
    title: "Power & Speed",
    description: "Unleash the true potential of the road",
    imageSrc: "/cert/card-04.webp",
    href: "#",
  },
  {
    id: 5,
    title: "Power & Speed",
    description: "Unleash the true potential of the road",
    imageSrc: "/cert/card-05.webp",
    href: "#",
  },
];

export default function Carousel() {
  const [dimensions, setDimensions] = useState({ width: 520, height: 320 });

  useEffect(() => {
    const updateDimensions = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth < 640) {
        setDimensions({ width: screenWidth - 32, height: Math.round((screenWidth - 32) * 0.62) });
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
    <div id="work" className="min-h-[80vh] mask-b-from-70% w-full bg-background md:my-38 text-foreground p-4 md:p-8 flex items-center justify-center overflow-hidden">
      <ScrollReveal className="w-full flex items-center justify-center" scale={0.8} y={100}>
        <CardStack
          items={items}
          cardWidth={dimensions.width}
          cardHeight={dimensions.height}
          initialIndex={0}
          autoAdvance
          intervalMs={3000}
          pauseOnHover
          renderCard={(item) => (
            <div className="relative h-full w-full">
              {item.imageSrc && (
                <Image
                  src={item.imageSrc}
                  alt={item.title}
                  fill
                  className="object-cover"
                  draggable={false}
                  loading="lazy"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 420px, 520px"
                />
              )}
            </div>
          )}
        />
      </ScrollReveal>
    </div>
  );
}
