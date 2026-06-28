"use client";

import React from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { PixelatedCanvas } from "@/components/ui/pixelated-canvas";
import SplitText from "@/components/SplitText";

gsap.registerPlugin(ScrollTrigger);

export default function AboutPage() {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const heroRef = React.useRef<HTMLDivElement>(null);
  const heroCanvasWrapperRef = React.useRef<HTMLDivElement>(null);
  const heroTextRef = React.useRef<HTMLDivElement>(null);
  const introRef = React.useRef<HTMLDivElement>(null);
  const horizontalRef = React.useRef<HTMLDivElement>(null);
  const horizontalSlidesRef = React.useRef<HTMLDivElement>(null);
  const consultationRef = React.useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      gsap
        .timeline({
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "+=100%",
            scrub: true,
            pin: true,
            anticipatePin: 1,
          },
        })
        .to(
          heroCanvasWrapperRef.current,
          { scale: 0.85, ease: "power1.inOut" },
          0,
        )
        .to(
          heroTextRef.current,
          { opacity: 0, y: -50, ease: "power1.inOut" },
          0,
        );

      gsap.fromTo(
        ".intro-image",
        { scale: 0.8, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: introRef.current,
            start: "top 75%",
          },
        },
      );

      mm.add("(min-width: 768px)", () => {
        const slides = gsap.utils.toArray(".horizontal-slide") as HTMLElement[];
        const amountToScroll = (100 * (slides.length - 1)) / slides.length;

        const horizontalTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: horizontalRef.current,
            pin: true,
            scrub: 1,
            start: "top top",
            end: () => `+=${horizontalSlidesRef.current?.offsetWidth || 1000}`,
          },
        });

        horizontalTimeline.to(horizontalSlidesRef.current, {
          xPercent: -amountToScroll,
          ease: "none",
        });

        slides.forEach((slide) => {
          const img = slide.querySelector(".slide-image");
          const content = slide.querySelector(".slide-content");

          if (img) {
            gsap.fromTo(
              img,
              { scale: 0.85 },
              {
                scale: 1.05,
                ease: "none",
                scrollTrigger: {
                  trigger: slide,
                  containerAnimation: horizontalTimeline,
                  start: "left right",
                  end: "right left",
                  scrub: true,
                },
              },
            );
          }

          if (content) {
            const heading = content.querySelector("h2");
            const paragraph = content.querySelector("p");
            const link = content.querySelector("a");
            const isA = slide.classList.contains("slide-a");
            const isB = slide.classList.contains("slide-b");

            if (heading && isA) {
              const chars = heading.querySelectorAll(".split-char");
              gsap.fromTo(
                chars,
                { opacity: 0, y: 50, rotate: -10, scale: 0.8 },
                {
                  opacity: 1,
                  y: 0,
                  rotate: 0,
                  scale: 1,
                  ease: "back.out(2)",
                  stagger: 0.03,
                  scrollTrigger: {
                    trigger: slide,
                    containerAnimation: horizontalTimeline,
                    start: "left 70%",
                    once: true,
                  },
                },
              );
            }

            if (heading && isB) {
              const chars = heading.querySelectorAll(".split-char");
              gsap.fromTo(
                chars,
                { opacity: 0, filter: "blur(12px)", scale: 0.9, y: 20 },
                {
                  opacity: 1,
                  filter: "blur(0px)",
                  scale: 1,
                  y: 0,
                  ease: "power2.out",
                  stagger: 0.025,
                  scrollTrigger: {
                    trigger: slide,
                    containerAnimation: horizontalTimeline,
                    start: "left 70%",
                    once: true,
                  },
                },
              );
            }

            if (paragraph) {
              const words = paragraph.querySelectorAll(".split-word");
              gsap.fromTo(
                words,
                { opacity: 0, y: 5 },
                {
                  opacity: 1,
                  y: 0,
                  ease: "power1.out",
                  stagger: 0.015,
                  scrollTrigger: {
                    trigger: slide,
                    containerAnimation: horizontalTimeline,
                    start: "left 65%",
                    once: true,
                  },
                },
              );
            }

            if (link) {
              gsap.fromTo(
                link,
                { x: 60, opacity: 0 },
                {
                  x: 0,
                  opacity: 1,
                  ease: "power2.out",
                  scrollTrigger: {
                    trigger: slide,
                    containerAnimation: horizontalTimeline,
                    start: "left 70%",
                    end: "left center",
                    scrub: true,
                  },
                },
              );
            }
          }
        });
      });

      mm.add("(max-width: 767px)", () => {
        const slides = gsap.utils.toArray(".horizontal-slide") as HTMLElement[];
        slides.forEach((slide) => {
          const img = slide.querySelector(".slide-image");
          const heading = slide.querySelector("h2");
          const paragraph = slide.querySelector("p");
          const link = slide.querySelector("a");
          const isA = slide.classList.contains("slide-a");
          const isB = slide.classList.contains("slide-b");

          if (img) {
            gsap.fromTo(
              img,
              { scale: 0.9, opacity: 0 },
              {
                scale: 1,
                opacity: 1,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                  trigger: slide,
                  start: "top 80%",
                },
              },
            );
          }

          if (heading && isA) {
            const chars = heading.querySelectorAll(".split-char");
            gsap.fromTo(
              chars,
              { opacity: 0, y: 50, rotate: -10, scale: 0.8 },
              {
                opacity: 1,
                y: 0,
                rotate: 0,
                scale: 1,
                ease: "back.out(2)",
                stagger: 0.02,
                scrollTrigger: {
                  trigger: slide,
                  start: "top 80%",
                  once: true,
                },
              },
            );
          }

          if (heading && isB) {
            const chars = heading.querySelectorAll(".split-char");
            gsap.fromTo(
              chars,
              { opacity: 0, filter: "blur(12px)", scale: 0.9, y: 20 },
              {
                opacity: 1,
                filter: "blur(0px)",
                scale: 1,
                y: 0,
                ease: "power2.out",
                stagger: 0.015,
                scrollTrigger: {
                  trigger: slide,
                  start: "top 80%",
                  once: true,
                },
              },
            );
          }

          if (paragraph) {
            const words = paragraph.querySelectorAll(".split-word");
            gsap.fromTo(
              words,
              { opacity: 0, y: 5 },
              {
                opacity: 1,
                y: 0,
                ease: "power1.out",
                stagger: 0.01,
                scrollTrigger: {
                  trigger: slide,
                  start: "top 75%",
                  once: true,
                },
              },
            );
          }

          if (link) {
            gsap.fromTo(
              link,
              { y: 20, opacity: 0 },
              {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                  trigger: slide,
                  start: "top 80%",
                },
              },
            );
          }
        });
      });

      gsap.fromTo(
        ".consultation-image",
        { scale: 0.85, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: consultationRef.current,
            start: "top 65%",
          },
        },
      );

      gsap.fromTo(
        ".consultation-btn",
        { scale: 0.9, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.6,
          ease: "back.out(1.5)",
          scrollTrigger: {
            trigger: consultationRef.current,
            start: "top 65%",
          },
        },
      );

      return () => {
        mm.revert();
      };
    },
    { scope: containerRef },
  );

  return (
    <div ref={containerRef} className="w-full bg-[#000000] text-white overflow-x-hidden">
      <div
        ref={heroRef}
        className="relative w-full h-[65vh] md:h-screen overflow-hidden bg-[#000000]"
      >
        <div ref={heroCanvasWrapperRef} className="w-full h-full relative">
          <PixelatedCanvas
            src="/about.webp"
            responsive
            width={800}
            height={400}
            cellSize={4}
            dotScale={0.9}
            shape="square"
            backgroundColor="#000000"
            dropoutStrength={0.1}
            interactive
            distortionStrength={0.1}
            distortionRadius={200}
            distortionMode="repel"
            followSpeed={0.2}
            jitterStrength={4}
            jitterSpeed={1}
            sampleAverage
            className="w-full h-full"
          />
          <div className="absolute inset-0 bg-linear-to-t from-[#000000] via-[#000000]/30 to-transparent pointer-events-none z-10" />
        </div>
        <div
          ref={heroTextRef}
          className="absolute inset-0 flex flex-col justify-end p-6 md:p-16 pb-16 md:pb-24 pointer-events-none z-20 select-none"
        >
          <div className="max-w-4xl relative z-20">
            <span className="text-[#2997ff] text-xs md:text-sm font-semibold tracking-[0.2em] uppercase block mb-3 md:mb-4">
              Digital Architect
            </span>
            <SplitText
              text="WHO IS YASIR MUNIR?"
              className="text-white text-4xl md:text-7xl font-semibold tracking-tight leading-[1.07] mb-4 md:mb-6 uppercase"
              tag="h1"
              textAlign="left"
              splitType="chars"
              duration={1.2}
              delay={35}
              ease="power2.out"
              from={{ opacity: 0, filter: "blur(15px)", scale: 0.85 }}
              to={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
            />
            <SplitText
              text="Real marketing is about solving business problems, not just running ads. Discover the mind behind the campaigns."
              className="text-zinc-300 text-lg md:text-2xl font-light leading-relaxed max-w-2xl"
              tag="p"
              textAlign="left"
              splitType="words"
              duration={0.4}
              delay={25}
              ease="power1.out"
              from={{ opacity: 0, y: 8 }}
              to={{ opacity: 1, y: 0 }}
            />
          </div>
        </div>
      </div>

      <section
        ref={introRef}
        className="bg-[#1d1d1f] py-20 md:py-32 px-6 md:px-16 lg:px-24"
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
            <div className="intro-content">
              <span className="text-[#2997ff] text-xs md:text-sm font-semibold tracking-[0.15em] uppercase block mb-3">
                The Journey
              </span>
              <SplitText
                text="Who Is Yasir Munir?"
                className="text-white text-3xl md:text-5xl font-semibold tracking-tight mb-6 leading-tight"
                tag="h2"
                textAlign="left"
                splitType="chars"
                duration={0.8}
                delay={30}
                ease="back.out(2)"
                from={{ opacity: 0, y: 50, rotate: -10, scale: 0.8 }}
                to={{ opacity: 1, y: 0, rotate: 0, scale: 1 }}
              />
              <SplitText
                text="I'm Yasir Munir, a Digital Marketer who believes that real marketing is about solving business problems, not just running ads. My journey started at the age of 16, when I became curious about how businesses grow online. While continuing my studies, I spent countless hours learning digital marketing, testing different strategies, and improving my skills through practical work. What started as curiosity slowly turned into a profession that I genuinely enjoy. Today, after years of continuous learning and hands-on experience, my focus is simple: helping businesses generate better leads, improve their online presence, and achieve measurable growth through the right marketing strategies."
                className="text-[17px] text-zinc-300 leading-[1.47] tracking-[-0.374px]"
                tag="p"
                textAlign="left"
                splitType="words"
                duration={0.3}
                delay={15}
                ease="power1.out"
                from={{ opacity: 0, y: 5 }}
                to={{ opacity: 1, y: 0 }}
              />
            </div>
            <div className="intro-image">
              <div className="relative overflow-hidden rounded-2xl border border-white/5 shadow-[0_5px_30px_rgba(0,0,0,0.22)]">
                <Image
                  src="/about-curiosity.png"
                  alt="Curiosity and Digital Growth"
                  width={500}
                  height={500}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div
        ref={horizontalRef}
        className="w-full md:h-screen md:overflow-hidden relative bg-black"
      >
        <div
          ref={horizontalSlidesRef}
          className="flex flex-col md:flex-row md:flex-nowrap w-full md:w-[200vw] h-full"
        >
          <div className="horizontal-slide slide-a w-full md:w-screen md:h-full md:shrink-0 flex items-center py-20 md:py-32 px-6 md:px-16 lg:px-24 bg-[#0a0a0c]">
            <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
              <div className="order-2 md:order-1">
                <div className="relative overflow-hidden rounded-2xl border border-white/5 shadow-[0_5px_30px_rgba(0,0,0,0.22)]">
                  <Image
                    src="/about-strategy.png"
                    alt="Data Strategy"
                    width={500}
                    height={500}
                    className="slide-image w-full h-auto object-cover"
                  />
                </div>
              </div>
              <div className="slide-content order-1 md:order-2">
                <span className="text-[#2997ff] text-xs md:text-sm font-semibold tracking-[0.15em] uppercase block mb-3">
                  The Methodology
                </span>
                <SplitText
                  text="How Yasir Will Solve Your Problem?"
                  className="text-white text-3xl md:text-5xl font-semibold tracking-tight mb-6 leading-tight"
                  tag="h2"
                  textAlign="left"
                  splitType="chars"
                  scrollTrigger={null}
                />
                <SplitText
                  text="Every business has different challenges, and there is no one-size-fits-all marketing strategy. With 5+ years of practical experience, I have worked with 120+ clients across 26+ different industries, which has given me the ability to understand different business models and customer behaviors. Instead of applying generic solutions, I first understand your business, identify the real problem, and then build a strategy based on your goals. Whether your objective is generating leads, increasing sales, or building a stronger brand, every decision is backed by practical experience and real-world testing—not guesswork."
                  className="text-[17px] text-zinc-300 leading-[1.47] tracking-[-0.374px]"
                  tag="p"
                  textAlign="left"
                  splitType="words"
                  scrollTrigger={null}
                />
              </div>
            </div>
          </div>

          <div className="horizontal-slide slide-b w-full md:w-screen md:h-full md:shrink-0 flex items-center py-20 md:py-32 px-6 md:px-16 lg:px-24 bg-[#1d1d1f]">
            <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
              <div className="slide-content">
                <span className="text-[#2997ff] text-xs md:text-sm font-semibold tracking-[0.15em] uppercase block mb-3">
                  The Evidence
                </span>
                <SplitText
                  text="Wondering About Yasir's Portfolio?"
                  className="text-white text-3xl md:text-5xl font-semibold tracking-tight mb-6 leading-tight"
                  tag="h2"
                  textAlign="left"
                  splitType="chars"
                  scrollTrigger={null}
                />
                <SplitText
                  text="Results speak louder than promises. In the Portfolio section of this website, you'll find screenshots of some of the campaigns and projects I've worked on over the years. However, you may notice that not every campaign is publicly displayed. That's because I highly respect my clients' privacy and confidentiality. Many projects involve sensitive business data that cannot be shared publicly. The portfolio you see is only a small glimpse of my work, carefully selected to demonstrate the quality of my experience while protecting the trust my clients have placed in me."
                  className="text-[17px] text-zinc-300 leading-[1.47] tracking-[-0.374px]"
                  tag="p"
                  textAlign="left"
                  splitType="words"
                  scrollTrigger={null}
                />
              </div>
              <div>
                <div className="relative overflow-hidden rounded-2xl border border-white/5 shadow-[0_5px_30px_rgba(0,0,0,0.22)]">
                  <Image
                    src="/about-trust.png"
                    alt="Client Privacy and Trust"
                    width={500}
                    height={500}
                    className="slide-image w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section
        ref={consultationRef}
        className="bg-[#0a0a0c] py-20 md:py-32 px-6 md:px-16 lg:px-24"
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
            <div className="consultation-image order-2 md:order-1">
              <div className="relative overflow-hidden rounded-2xl border border-white/5 shadow-[0_5px_30px_rgba(0,0,0,0.22)]">
                <Image
                  src="/about-consultation.png"
                  alt="Free Consultation"
                  width={500}
                  height={500}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            <div className="consultation-content order-1 md:order-2">
              <span className="text-[#2997ff] text-xs md:text-sm font-semibold tracking-[0.15em] uppercase block mb-3">
                The Opportunity
              </span>
              <SplitText
                text="How Can You Get a Free 30-Minute Consultation?"
                className="text-white text-3xl md:text-5xl font-semibold tracking-tight mb-6 leading-tight"
                tag="h2"
                textAlign="left"
                splitType="chars"
                duration={1}
                delay={25}
                ease="power2.out"
                from={{ opacity: 0, filter: "blur(12px)", scale: 0.9, y: 20 }}
                to={{ opacity: 1, filter: "blur(0px)", scale: 1, y: 0 }}
              />
              <SplitText
                text="To help business owners make informed marketing decisions, I offer five free 30-minute consultation sessions every month. Once those five slots are filled, consultations become paid for the rest of the month. If you'd like to secure a free session, simply fill out the contact form at the beginning of the month and mention 'Free Consultation' in your message. It will also help if you briefly describe your business, your current marketing situation, and the challenges you're facing. This allows me to understand your business before our meeting and provide more practical, actionable advice during the consultation."
                className="text-[17px] text-zinc-300 leading-[1.47] tracking-[-0.374px] mb-8"
                tag="p"
                textAlign="left"
                splitType="words"
                duration={0.3}
                delay={15}
                ease="power1.out"
                from={{ opacity: 0, y: 5 }}
                to={{ opacity: 1, y: 0 }}
              />
              <div>
                <a
                  href="/#contact"
                  className="consultation-btn inline-block bg-[#0066cc] hover:bg-[#0071e3] text-white text-[17px] px-8 py-3.5 rounded-full transition-all duration-200 active:scale-95"
                >
                  Book Your Free Session
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
