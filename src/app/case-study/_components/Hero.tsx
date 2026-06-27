"use client";

import Hyperspeed from '@/components/Hyperspeed';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();
    
    if (textRef.current) {
      tl.fromTo(
        textRef.current.children,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.15, ease: 'power3.out' }
      );
    }
  }, []);

  return (
    <div ref={containerRef} className="relative mask-b-from-80% w-full min-h-[90vh] overflow-hidden bg-background flex flex-col items-center justify-center pt-32 pb-24 perspective-distant">
      <div className="absolute inset-0 z-0 mask-b-from-80%">
        <Hyperspeed
          effectOptions={{
            distortion: 'turbulentDistortion',
            length: 400,
            roadWidth: 10,
            islandWidth: 2,
            lanesPerRoad: 3,
            fov: 90,
            fovSpeedUp: 150,
            speedUp: 2,
            carLightsFade: 0.4,
            totalSideLightSticks: 20,
            lightPairsPerRoadWay: 40,
            shoulderLinesWidthPercentage: 0.05,
            brokenLinesWidthPercentage: 0.1,
            brokenLinesLengthPercentage: 0.5,
            lightStickWidth: [0.12, 0.5],
            lightStickHeight: [1.3, 1.7],
            movingAwaySpeed: [60, 80],
            movingCloserSpeed: [-120, -160],
            carLightsLength: [12, 80],
            carLightsRadius: [0.05, 0.14],
            carWidthPercentage: [0.3, 0.5],
            carShiftX: [-0.8, 0.8],
            carFloorSeparation: [0, 5],
            colors: {
              roadColor: 0x080808,
              islandColor: 0x0a0a0a,
              background: 0x000000,
              shoulderLines: 0x131318,
              brokenLines: 0x131318,
              leftCars: [0xd856bf, 0x6750a2, 0xc247ac],
              rightCars: [0x03b3c3, 0x0e5ea5, 0x324555],
              sticks: 0x03b3c3,
            }
          }}
        />
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-linear-to-t from-background to-transparent z-10 pointer-events-none" />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 md:px-12 w-full max-w-4xl mx-auto">
        <div ref={textRef} className="space-y-6 flex flex-col items-center text-center">
          <div className="inline-block px-5 py-1.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-white/90 text-sm font-semibold tracking-widest uppercase shadow-lg">
            Yasir Munir
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-[6rem] font-extrabold tracking-tighter text-transparent bg-clip-text bg-linear-to-b from-white to-white/50 font-montserrat pb-2 leading-tight">
            Portfolio
          </h1>
          <p className="text-xl md:text-2xl text-neutral-300 font-inter font-light max-w-xl leading-relaxed">
            Certified Digital Marketer specializing in Meta Ads, TikTok Ads, LinkedIn Optimization, and Google Business Profile.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;