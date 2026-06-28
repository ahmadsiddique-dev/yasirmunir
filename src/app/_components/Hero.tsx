"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import TextPressure from "@/components/TextPressure";
import { RadialIntro } from "@/components/animate-ui/components/community/radial-intro";

const ITEMS = [
  { id: 1, name: "facebook", src: "./technos/logo1.webp" },
  { id: 2, name: "instagram", src: "./technos/logo2.webp" },
  { id: 3, name: "X", src: "./technos/logo3.webp" },
  { id: 4, name: "whatsapp", src: "./technos/logo4.webp" },
  { id: 5, name: "telegram", src: "./technos/logo5.webp" },
  { id: 6, name: "skype", src: "./technos/logo6.webp" },
  { id: 7, name: "tiktok", src: "./technos/logo7.webp" },
  { id: 8, name: "youtube", src: "./technos/logo8.webp" },
  { id: 9, name: "Others", src: "./technos/logo9.webp" },
];

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const titleWrapperRef = useRef<HTMLDivElement>(null);
  const descRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
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
    },
    { scope: containerRef },
  );

  return (
    <div
      ref={containerRef}
      className="relative mask-b-from-70% w-full min-h-screen bg-background overflow-hidden flex flex-col justify-between"
    >


      <div
        ref={glowRef}
        className="absolute left-1/2 -translate-x-1/2 md:left-[15%] md:translate-x-0 bottom-[10%] h-[300px] w-[300px] md:h-[500px] md:w-[500px] rounded-full blur-[120px] opacity-0 pointer-events-none"
        style={{
          background: "radial-gradient(circle, var(--primary) 0%, transparent 70%)",
          zIndex: 2,
          transform: "translate3d(0,0,0)",
        }}
      />

      <div className="relative w-full flex-1 grid grid-cols-1 md:grid-cols-2 grid-rows-[auto_auto_auto] md:grid-rows-[auto_1fr] gap-x-6 md:gap-x-0 gap-y-4 md:gap-y-0 px-6 md:pl-0 md:pr-[8%] pt-22 md:pt-0 pb-8 md:pb-0 z-10 items-center md:items-end">

        {/* Title — mobile row 1, desktop top-right */}
        <div
          className="relative w-full flex flex-col items-center md:items-end col-start-1 row-start-1 md:row-start-1 md:col-start-2"
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
        </div>

        {/* Image — mobile row 2, desktop left spanning both rows */}
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
              WebkitMaskImage: "linear-gradient(to bottom, black 65%, transparent 100%), linear-gradient(to right, transparent, black 18%, black 82%, transparent)",
              maskImage: "linear-gradient(to bottom, black 65%, transparent 100%), linear-gradient(to right, transparent, black 18%, black 82%, transparent)",
              WebkitMaskComposite: "destination-in",
              maskComposite: "intersect",
            }}
          />
        </div>

        {/* Icons — mobile row 3, desktop bottom-right */}
        <div
          ref={descRef}
          className="relative flex justify-center md:justify-end md:items-end pb-8 md:pb-24 col-start-1 row-start-3 md:row-start-2 md:col-start-2"
          style={{ zIndex: 10, transform: "translate3d(0,0,0)" }}
        >
          <div className="md:mr-37">
            <RadialIntro orbitItems={ITEMS} />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Hero;
