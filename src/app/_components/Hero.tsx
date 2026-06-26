"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

import TextPressure from "@/components/TextPressure";
import { RadialIntro } from "@/components/animate-ui/components/community/radial-intro";

const ITEMS = [
  { id: 1, name: "Framer University", src: "./technos/logo1.png" },
  { id: 2, name: "arhamkhnz", src: "./technos/logo2.png" },
  { id: 3, name: "Skyleen", src: "./technos/logo3.png" },
  { id: 4, name: "Shadcn", src: "./technos/logo4.png" },
  { id: 5, name: "Adam Wathan", src: "./technos/logo5.png" },
  { id: 6, name: "Guillermo Rauch", src: "./technos/logo6.png" },
  { id: 7, name: "Jhey", src: "./technos/logo7.png" },
  { id: 8, name: "David Haz", src: "./technos/logo8.png" },
  { id: 9, name: "Matt Perry", src: "./technos/logo9.png" },
];

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const titleWrapperRef = useRef<HTMLDivElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        glowRef.current,
        { opacity: 0, scale: 0.5 },
        { opacity: 0.25, scale: 1, duration: 2, ease: "power3.out" },
      );

      gsap.fromTo(
        imageRef.current,
        { opacity: 0, x: -100 },
        { opacity: 1, x: 0, duration: 1.5, delay: 0.2, ease: "power3.out" },
      );

      gsap.fromTo(
        titleWrapperRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.2, delay: 0.4, ease: "power3.out" },
      );

      gsap.fromTo(
        descRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1.2, delay: 0.6, ease: "power3.out" },
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative mask-b-from-70% w-full min-h-screen bg-background overflow-hidden flex flex-col justify-between"
    >


      <div
        ref={glowRef}
        className="absolute left-1/2 -translate-x-1/2 md:left-[15%] md:translate-x-0 bottom-[10%] h-[300px] w-[300px] md:h-[500px] md:w-[500px] rounded-full blur-[120px] opacity-0 pointer-events-none"
        style={{
          background: "radial-gradient(circle, #FF6BF5 0%, #FFBE0B 100%)",
          zIndex: 2,
          transform: "translate3d(0,0,0)",
        }}
      />

      <div className="relative w-full flex-1 grid grid-cols-1 md:grid-cols-2 grid-rows-[auto_auto_auto] md:grid-rows-[auto_1fr] gap-x-6 md:gap-x-0 gap-y-4 md:gap-y-0 px-6 md:pl-0 md:pr-[8%] pt-22 md:pt-0 pb-8 md:pb-0 z-10 items-center md:items-end">
        <div
          ref={imageRef}
          className="relative pointer-events-none w-[80vw] max-w-[400px] md:w-[45vw] md:max-w-[650px] flex items-end justify-center md:justify-start col-start-1 row-start-2 md:row-start-1 md:row-span-2 md:col-start-1 justify-self-center md:justify-self-start opacity-0"
          style={{ zIndex: 10, transform: "translate3d(0,0,0)" }}
        >
          <Image
            src="/image.png"
            alt="Yasir Munir"
            width={650}
            height={800}
            priority
            className="w-full h-auto object-contain mb-8.5"
            style={{
              filter: "drop-shadow(0 20px 50px rgba(0, 0, 0, 0.7)) contrast(1.04) saturate(1.1)",
              WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 75%, rgba(0,0,0,0) 100%)",
              maskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 75%, rgba(0,0,0,0) 100%)",
            }}
          />
        </div>

        <div
          className="relative w-full flex flex-col items-center justify-center md:items-end md:justify-end pb-8 md:pb-24 col-start-1 row-start-1 md:row-start-1 md:col-start-2"
          style={{ zIndex: 10, transform: "translate3d(0,0,0)" }}
        >
          <div
            ref={titleWrapperRef}
            className="w-full max-w-[700px] h-[120px] md:mt-32 md:h-[220px] flex justify-center opacity-0"
          >
            <TextPressure
              text="Yasir Munir"
              textColor="var(--foreground)"
              minFontSize={48}
            />
          </div>
          <div className="md:mr-37">
            <RadialIntro orbitItems={ITEMS} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
