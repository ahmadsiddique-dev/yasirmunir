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

      gsap.fromTo(
        ".intro-content p",
        { opacity: 0, y: 15 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: "power2.out",
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
              if (chars.length > 0) {
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
            }

            if (heading && isB) {
              const chars = heading.querySelectorAll(".split-char");
              if (chars.length > 0) {
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
            }

            const paragraphs = content.querySelectorAll("p");
            if (paragraphs.length) {
              gsap.fromTo(
                paragraphs,
                { opacity: 0, y: 15 },
                {
                  opacity: 1,
                  y: 0,
                  duration: 0.6,
                  stagger: 0.15,
                  ease: "power2.out",
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
            if (chars.length > 0) {
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
          }

          if (heading && isB) {
            const chars = heading.querySelectorAll(".split-char");
            if (chars.length > 0) {
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
          }

          const paragraphs = slide.querySelectorAll("p");
          if (paragraphs.length) {
            gsap.fromTo(
              paragraphs,
              { opacity: 0, y: 15 },
              {
                opacity: 1,
                y: 0,
                duration: 0.6,
                stagger: 0.15,
                ease: "power2.out",
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

      gsap.fromTo(
        ".consultation-content p",
        { opacity: 0, y: 15 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: consultationRef.current,
            start: "top 70%",
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
    <div ref={containerRef} className="w-full bg-background text-foreground overflow-x-hidden">
      <div
        ref={heroRef}
        className="relative w-full h-[65vh] md:h-screen overflow-hidden bg-background"
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
            backgroundColor="#090D16"
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
          <div className="absolute inset-0 bg-linear-to-t from-background via-background/30 to-transparent pointer-events-none z-10" />
        </div>
        <div
          ref={heroTextRef}
          className="absolute inset-0 flex flex-col justify-end p-6 md:p-16 pb-16 md:pb-24 pointer-events-none z-20 select-none"
        >
          <div className="max-w-4xl relative z-20">
            <span className="text-primary text-xs md:text-sm font-semibold tracking-[0.2em] uppercase block mb-3 md:mb-4">
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
        className="bg-card/50 py-20 md:py-32 px-6 md:px-16 lg:px-24"
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
            <div className="intro-content">
              <span className="text-primary text-xs md:text-sm font-semibold tracking-[0.15em] uppercase block mb-3">
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
              <div className="space-y-4">
                <p className="text-[17px] text-zinc-300 leading-[1.47] tracking-[-0.374px]">
                  He is <span className="text-primary font-semibold">Yasir Munir</span>, a results-driven <span className="text-primary font-semibold">Digital Marketer</span> who believes that real marketing is about solving core business problems, not just running generic ads.
                </p>
                <p className="text-[17px] text-zinc-300 leading-[1.47] tracking-[-0.374px]">
                  His journey started at the <span className="text-[#2997ff] font-medium">age of 16</span>, sparked by a curiosity about how businesses grow online. While continuing his studies, he invested countless hours testing strategies and mastering the digital space through hands-on work.
                </p>
                <p className="text-[17px] text-zinc-300 leading-[1.47] tracking-[-0.374px]">
                  Today, with years of continuous learning, his focus remains simple: helping businesses <span className="text-primary font-semibold">generate high-quality leads</span>, enhance their online authority, and achieve <span className="text-primary font-semibold">measurable revenue growth</span>.
                </p>
              </div>
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
        className="w-full md:h-screen md:overflow-hidden relative bg-background"
      >
        <div
          ref={horizontalSlidesRef}
          className="flex flex-col md:flex-row md:flex-nowrap w-full md:w-[200vw] h-full"
        >
          <div className="horizontal-slide slide-a w-full md:w-screen md:h-full md:shrink-0 flex items-center py-20 md:py-32 px-6 md:px-16 lg:px-24 bg-background">
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
                <span className="text-primary text-xs md:text-sm font-semibold tracking-[0.15em] uppercase block mb-3">
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
                <div className="space-y-4">
                  <p className="text-[17px] text-zinc-300 leading-[1.47] tracking-[-0.374px]">
                    Every business faces unique challenges, and there is no one-size-fits-all formula. With <span className="text-[#2997ff] font-medium">5+ years of experience</span>, Yasir has worked with <span className="text-[#2997ff] font-medium">120+ clients</span> across <span className="text-[#2997ff] font-medium">26+ industries</span>, mastering diverse business models and consumer behaviors.
                  </p>
                  <p className="text-[17px] text-zinc-300 leading-[1.47] tracking-[-0.374px]">
                    Instead of applying generic templates, he dives deep to identify your business's core bottleneck before crafting a custom roadmap. Whether the goal is <span className="text-primary font-semibold">scaling sales</span>, <span className="text-primary font-semibold">generating premium leads</span>, or <span className="text-primary font-semibold">strengthening brand authority</span>, every decision is backed by real-world testing—not guesswork.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="horizontal-slide slide-b w-full md:w-screen md:h-full md:shrink-0 flex items-center py-20 md:py-32 px-6 md:px-16 lg:px-24 bg-card/50">
            <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
              <div className="slide-content">
                <span className="text-primary text-xs md:text-sm font-semibold tracking-[0.15em] uppercase block mb-3">
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
                <div className="space-y-4">
                  <p className="text-[17px] text-zinc-300 leading-[1.47] tracking-[-0.374px]">
                    Results speak louder than promises. While you can browse some of his campaigns in the portfolio, you will notice that not every project is publicly shown. Yasir holds <span className="text-[#2997ff] font-medium">client privacy and confidentiality</span> in the highest regard.
                  </p>
                  <p className="text-[17px] text-zinc-300 leading-[1.47] tracking-[-0.374px]">
                    Because many campaigns handle sensitive revenue and business data, the public portfolio is a curated glimpse designed to show the <span className="text-primary font-semibold">caliber of his work</span> while fully protecting client trust.
                  </p>
                </div>
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
        className="bg-background py-20 md:py-32 px-6 md:px-16 lg:px-24"
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
              <span className="text-primary text-xs md:text-sm font-semibold tracking-[0.15em] uppercase block mb-3">
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
              <div className="space-y-4 mb-8">
                <p className="text-[17px] text-zinc-300 leading-[1.47] tracking-[-0.374px]">
                  To help business owners make informed choices, Yasir offers <span className="text-[#2997ff] font-medium">five free 30-minute consultation sessions</span> each month. Once these slots are filled, sessions transition to paid for the remainder of the month.
                </p>
                <p className="text-[17px] text-zinc-300 leading-[1.47] tracking-[-0.374px]">
                  To secure your slot, fill out the contact form early in the month and specify <span className="text-primary font-semibold">'Free Consultation'</span>. Briefly describing your business and current hurdles allows him to prepare actionable insights specifically tailored for your session.
                </p>
              </div>
              <div>
                <a
                  href="/#contact"
                  className="consultation-btn inline-block bg-primary hover:bg-primary/90 text-primary-foreground text-[17px] px-8 py-3.5 rounded-full transition-all duration-200 active:scale-95 shadow-lg shadow-primary/20 hover:shadow-primary/45"
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
