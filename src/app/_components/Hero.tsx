"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Lightfall from "@/components/Lightfall";
import GlassNavbar from "@/components/aicanvas/glass-navbar";
import TextPressure from "@/components/TextPressure";
import { RadialIntro } from '@/components/animate-ui/components/community/radial-intro';

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const titleWrapperRef = useRef<HTMLDivElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(glowRef.current, {
        opacity: 0,
        scale: 0.5,
      }, {
        opacity: 0.25,
        scale: 1,
        duration: 2,
        ease: "power3.out",
      });

      gsap.fromTo(imageRef.current, {
        opacity: 0,
        x: -100,
      }, {
        opacity: 1,
        x: 0,
        duration: 1.5,
        delay: 0.2,
        ease: "power3.out",
      });

      gsap.fromTo(titleWrapperRef.current, {
        opacity: 0,
        y: 50,
      }, {
        opacity: 1,
        y: 0,
        duration: 1.2,
        delay: 0.4,
        ease: "power3.out",
      });

      gsap.fromTo(descRef.current, {
        opacity: 0,
        y: 30,
      }, {
        opacity: 1,
        y: 0,
        duration: 1.2,
        delay: 0.6,
        ease: "power3.out",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  
const ITEMS = [
  {
    id: 1,
    name: 'Framer University',
    src: 'https://pbs.twimg.com/profile_images/1602734731728142336/9Bppcs67_400x400.jpg',
  },
  {
    id: 2,
    name: 'arhamkhnz',
    src: 'https://pbs.twimg.com/profile_images/1897311929028255744/otxpL-ke_400x400.jpg',
  },
  {
    id: 3,
    name: 'Skyleen',
    src: 'https://pbs.twimg.com/profile_images/1948770261848756224/oPwqXMD6_400x400.jpg',
  },
  {
    id: 4,
    name: 'Shadcn',
    src: 'https://pbs.twimg.com/profile_images/1593304942210478080/TUYae5z7_400x400.jpg',
  },
  {
    id: 5,
    name: 'Adam Wathan',
    src: 'https://pbs.twimg.com/profile_images/1677042510839857154/Kq4tpySA_400x400.jpg',
  },
  {
    id: 6,
    name: 'Guillermo Rauch',
    src: 'https://pbs.twimg.com/profile_images/1783856060249595904/8TfcCN0r_400x400.jpg',
  },
  {
    id: 7,
    name: 'Jhey',
    src: 'https://pbs.twimg.com/profile_images/1534700564810018816/anAuSfkp_400x400.jpg',
  },
  {
    id: 8,
    name: 'David Haz',
    src: 'https://pbs.twimg.com/profile_images/1927474594102784000/Al0g-I6o_400x400.jpg',
  },
  {
    id: 9,
    name: 'Matt Perry',
    src: 'https://pbs.twimg.com/profile_images/1690345911149375488/wfD0Ai9j_400x400.jpg',
  },
];

  return (
    <div ref={containerRef} className="relative mask-b-from-70% w-full min-h-screen bg-[#1A1A19] overflow-hidden flex flex-col justify-between">
      <div className="absolute inset-0" style={{ zIndex: 1, transform: "translate3d(0,0,0)" }} >
        <Lightfall
          colors={["#A6C8FF", "#5227FF", "#FF9FFC"]}
          backgroundColor="#1A1A19"
          speed={0.5}
          streakCount={2}
          streakWidth={1}
          streakLength={1}
          glow={1}
          density={0.6}
          twinkle={1}
          zoom={3}
          backgroundGlow={0.5}
          opacity={1}
          mouseInteraction
          mouseStrength={0.5}
          mouseRadius={1}
          className=""
        />
      </div>

      <div 
        ref={glowRef}
        className="absolute left-1/2 -translate-x-1/2 md:left-[15%] md:translate-x-0 bottom-[10%] h-[300px] w-[300px] md:h-[500px] md:w-[500px] rounded-full blur-[120px] opacity-0 pointer-events-none"
        style={{
          background: "radial-gradient(circle, #FF6BF5 0%, #FFBE0B 100%)",
          zIndex: 2,
          transform: "translate3d(0,0,0)"
        }}
      />

      <div className="relative w-full flex-1 grid grid-cols-1 md:grid-cols-2 grid-rows-[auto_auto_auto] md:grid-rows-[auto_1fr] gap-x-6 md:gap-x-0 gap-y-4 md:gap-y-0 px-6 md:pl-0 md:pr-[8%] pt-22 md:pt-0 pb-8 md:pb-0 z-10 items-center md:items-end">
        <div
          ref={imageRef}
          className="relative pointer-events-none w-[80vw] max-w-[400px] md:w-[45vw] md:max-w-[650px] flex items-end justify-center md:justify-start col-start-1 row-start-2 md:row-start-1 md:row-span-2 md:col-start-1 justify-self-center md:justify-self-start opacity-0"
          style={{
            zIndex: 10,
            transform: "translate3d(0,0,0)"
          }}
        >
          <img
            src="/image.png"
            alt="Yasir Munir"
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
          style={{
            zIndex: 10,
            transform: "translate3d(0,0,0)"
          }}
        >
          <div ref={titleWrapperRef} className="w-full max-w-[700px] h-[120px] md:mt-32 md:h-[220px] flex justify-center opacity-0">
            <TextPressure
              text="Yasir Munir"
              textColor="#FFFFFF"
              minFontSize={48}
            />
          </div>
          <div className="md:mr-37">
            <RadialIntro orbitItems={ITEMS} />
          </div>
        </div>
      </div>

      <GlassNavbar />
    </div>
  );
};

export default Hero;
