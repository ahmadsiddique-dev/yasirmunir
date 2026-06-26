"use client";

import * as React from "react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  y?: number | string;
  x?: number | string;
  scale?: number;
  opacity?: number;
  duration?: number;
  stagger?: number;
  scrub?: boolean | number;
  start?: string;
  end?: string;
  ease?: string;
  childSelector?: string;
}

export function ScrollReveal({
  children,
  className,
  y = 50,
  x = 0,
  scale = 0.9,
  opacity = 0,
  duration = 1,
  stagger = 0.15,
  scrub = 1,
  start = "top 85%",
  end = "top 50%",
  ease = "power2.out",
  childSelector,
}: ScrollRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const container = containerRef.current;
    if (!container) return;

    const ctx = gsap.context(() => {
      const targets = childSelector
        ? Array.from(container.querySelectorAll(childSelector))
        : [container];

      if (targets.length === 0) return;

      gsap.fromTo(
        targets,
        {
          y,
          x,
          scale,
          opacity,
        },
        {
          y: 0,
          x: 0,
          scale: 1,
          opacity: 1,
          duration,
          stagger: childSelector ? stagger : undefined,
          ease,
          scrollTrigger: {
            trigger: container,
            start,
            end,
            scrub,
          },
        }
      );
    }, container);

    return () => ctx.revert();
  }, [y, x, scale, opacity, duration, stagger, scrub, start, end, ease, childSelector]);

  return (
    <div ref={containerRef} className={cn("will-change-transform", className)}>
      {children}
    </div>
  );
}
