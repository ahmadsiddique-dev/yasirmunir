"use client";

import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

interface HeroProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  title: React.ReactNode;
  subtitle: React.ReactNode;
  images: { src: string; alt: string; }[];
  tags?: string[];
  links?: { label: string; href: string }[];
  appStoreLink?: string;
  googlePlayLink?: string;
}

export const HeroSection = React.forwardRef<HTMLDivElement, HeroProps>(
  ({ title, subtitle, images, tags, links, appStoreLink, googlePlayLink, className, ...props }, ref) => {
    const [currentIndex, setCurrentIndex] = React.useState(Math.floor(images.length / 2));
    const containerRef = React.useRef<HTMLDivElement>(null);
    const textRef = React.useRef<HTMLDivElement>(null);
    const carouselRef = React.useRef<HTMLDivElement>(null);

    const handleNext = React.useCallback(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, [images.length]);

    const handlePrev = () => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };
    
    React.useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        if (textRef.current && containerRef.current) {
            gsap.fromTo(
                textRef.current.children,
                { y: 50, opacity: 0 },
                { 
                    y: 0, 
                    opacity: 1, 
                    duration: 1, 
                    stagger: 0.15, 
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: 'top 80%',
                    }
                }
            );
        }
        
        const timer = setInterval(() => {
            handleNext();
        }, 4000);
        return () => clearInterval(timer);
    }, [handleNext]);

    return (
      <div
        ref={ref}
        className={cn(
          'relative w-full min-h-screen flex items-center justify-center overflow-x-hidden bg-background text-foreground p-8 md:p-16 lg:p-24',
          className
        )}
        {...props}
      >
        <div ref={containerRef} className="z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 w-full max-w-7xl items-center mx-auto">
          {/* Text Content (Left) */}
          <div ref={textRef} className="flex flex-col items-start text-left space-y-8">
            {tags && tags.length > 0 && (
              <div className="flex flex-wrap gap-3">
                {tags.map((tag, i) => (
                  <span key={i} className="px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-foreground/5 text-foreground/70 rounded-full border border-foreground/10">
                    {tag}
                  </span>
                ))}
              </div>
            )}
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-balance leading-tight" style={{ fontFamily: 'system-ui, -apple-system, sans-serif', letterSpacing: '-0.02em' }}>
              {title}
            </h1>
            
            <div className="text-muted-foreground md:text-lg leading-relaxed text-balance">
              {subtitle}
            </div>

            {links && links.length > 0 && (
              <div className="flex flex-wrap gap-6 pt-4">
                {links.map((link, i) => (
                  <a key={i} href={link.href} className="text-primary font-medium text-[17px] hover:underline hover:opacity-80 transition-opacity flex items-center gap-1">
                    {link.label}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Carousel (Right) */}
          <div ref={carouselRef} className="relative w-full h-[350px] md:h-[450px] flex items-center justify-center">
            <div className="relative w-full h-full flex items-center justify-center [perspective:1000px]">
              {images.map((image, index) => {
                const offset = index - currentIndex;
                const total = images.length;
                let pos = (offset + total) % total;
                if (pos > Math.floor(total / 2)) {
                  pos = pos - total;
                }

                const isCenter = pos === 0;
                const isAdjacent = Math.abs(pos) === 1;

                return (
                  <div
                    key={index}
                    className={cn(
                      'absolute w-64 h-40 md:w-[450px] md:h-[280px] lg:w-[500px] lg:h-[310px] transition-all duration-700 ease-out',
                      'flex items-center justify-center'
                    )}
                    style={{
                      transform: `
                        translateX(${(pos) * 35}%) 
                        scale(${isCenter ? 1 : isAdjacent ? 0.85 : 0.7})
                        rotateY(${(pos) * -8}deg)
                      `,
                      zIndex: isCenter ? 10 : isAdjacent ? 5 : 1,
                      opacity: isCenter ? 1 : isAdjacent ? 0.4 : 0,
                      filter: isCenter ? 'blur(0px)' : 'blur(4px)',
                      visibility: Math.abs(pos) > 1 ? 'hidden' : 'visible',
                      boxShadow: isCenter ? '0 30px 60px -12px rgba(0,0,0,0.25)' : 'none',
                    }}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover rounded-[18px] border border-foreground/10"
                    />
                  </div>
                );
              })}
            </div>
            
            <Button
              variant="outline"
              size="icon"
              className="absolute left-0 sm:-left-4 top-1/2 -translate-y-1/2 rounded-full h-10 w-10 z-20 bg-background/50 backdrop-blur-md border-foreground/10 text-foreground hover:bg-background/80"
              onClick={handlePrev}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="absolute right-0 sm:-right-4 top-1/2 -translate-y-1/2 rounded-full h-10 w-10 z-20 bg-background/50 backdrop-blur-md border-foreground/10 text-foreground hover:bg-background/80"
              onClick={handleNext}
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    );
  }
);

HeroSection.displayName = 'HeroSection';
