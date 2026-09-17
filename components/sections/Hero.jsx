"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@/components/common/Icons";
import { cn } from "@/lib/utils";

const HERO_SLIDES = [
  {
    id: "slide-01",
    eyebrow: "BRANDX EDIT",
    headline: "Everyday, upgraded.",
    supporting: "Modern staples made for everyday rotation.",
    cta: {
      label: "Shop now",
      href: "/collections",
    },
    images: {
      desktop: "/images/home/hero/slide-01/brandx-everyday-desktop.webp",
      mobile: "/images/home/hero/slide-01/brandx-everyday-mobile.webp",
      alt: "BrandX modern everyday streetwear collection",
    },
    desktopObjectPosition: "object-[center_6%]",
  },
  {
    id: "slide-02",
    eyebrow: "THE ESSENTIALS",
    headline: "Made to go anywhere.",
    supporting: "Clean fits. Easy layers. Better everyday dressing.",
    cta: {
      label: "Shop now",
      href: "/collections",
    },
    images: {
      desktop: "/images/home/hero/slide-02/brandx-essentials-desktop.webp",
      mobile: "/images/home/hero/slide-02/brandx-essentials-mobile.webp",
      alt: "BrandX elevated smart casual essentials collection",
    },
    desktopObjectPosition: "object-[center_6%]",
  },
  {
    id: "slide-03",
    eyebrow: "WEEKEND EDIT",
    headline: "Off-duty, done right.",
    supporting: "Relaxed pieces built for wherever the day goes.",
    cta: {
      label: "Shop now",
      href: "/collections",
    },
    images: {
      desktop: "/images/home/hero/slide-03/brandx-weekend-desktop.webp",
      mobile: "/images/home/hero/slide-03/brandx-weekend-mobile.webp",
      alt: "BrandX relaxed weekend off-duty casuals edit",
    },
    desktopObjectPosition: "object-[center_8%]",
  },
];

const AUTOPLAY_INTERVAL = 4800;

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const totalSlides = HERO_SLIDES.length;

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // 4.8-Second Autoplay with pause on hover
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      nextSlide();
    }, AUTOPLAY_INTERVAL);

    return () => clearInterval(timer);
  }, [isPaused, nextSlide, currentSlide]);

  // Touch swipe support for mobile
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    const swipeThreshold = 45;

    if (Math.abs(diff) > swipeThreshold) {
      if (diff > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
  };

  return (
    <section
      className="w-full bg-white pt-2 sm:pt-3 pb-2 sm:pb-3 select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label="Featured Campaigns Carousel"
    >
      <Container size="full">
        <div
          className="relative w-full h-[400px] sm:h-[420px] md:h-[430px] lg:h-[450px] overflow-hidden rounded-[2px] bg-[#f5f5f5]"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Slides Container */}
          {HERO_SLIDES.map((slide, index) => {
            const isActive = index === currentSlide;

            return (
              <div
                key={slide.id}
                className={cn(
                  "absolute inset-0 transition-opacity duration-700 ease-in-out",
                  isActive
                    ? "opacity-100 z-10 pointer-events-auto"
                    : "opacity-0 z-0 pointer-events-none"
                )}
                aria-hidden={!isActive}
              >
                {/* Desktop Hero Image */}
                <Image
                  src={slide.images.desktop}
                  alt={slide.images.alt}
                  fill
                  priority={index === 0}
                  sizes="(min-width: 1024px) 1400px, 100vw"
                  className={cn(
                    "hidden md:block object-cover",
                    slide.desktopObjectPosition || "object-center"
                  )}
                />

                {/* Mobile Hero Image */}
                <Image
                  src={slide.images.mobile}
                  alt={slide.images.alt}
                  fill
                  priority={index === 0}
                  sizes="(max-width: 768px) 100vw, 768px"
                  className="block md:hidden object-cover object-top"
                />

                {/* Mobile Legibility Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-white/95 via-white/40 to-transparent md:hidden pointer-events-none" />

                {/* Subtle Desktop Scrim for Text Legibility */}
                <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-white/70 via-white/20 to-transparent pointer-events-none max-w-xl" />

                {/* Content Overlay */}
                <div className="relative z-10 flex h-full flex-col justify-end md:justify-center px-6 py-8 sm:p-10 md:px-12 lg:px-14 max-w-[440px]">
                  {/* Editorial Eyebrow */}
                  <span className="text-[11px] sm:text-[11.5px] font-semibold uppercase tracking-[0.18em] text-[#444444] mb-1.5 sm:mb-2">
                    {slide.eyebrow}
                  </span>

                  {/* Main Headline */}
                  <h1 className="text-[30px] sm:text-[36px] md:text-[40px] lg:text-[44px] font-semibold tracking-tight text-[#111111] leading-[1.12] mb-1.5 sm:mb-2 text-balance">
                    {slide.headline}
                  </h1>

                  {/* Supporting Line */}
                  <p className="text-[13px] sm:text-[14px] text-[#4a4a4a] font-normal leading-relaxed mb-4 sm:mb-5 max-w-[340px] sm:max-w-[380px]">
                    {slide.supporting}
                  </p>

                  {/* CTA Button */}
                  <div>
                    <Link
                      href={slide.cta.href}
                      className="group inline-flex items-center gap-1.5 rounded-[2px] bg-white px-5 py-2.5 text-[13px] font-semibold tracking-tight text-[#111111] shadow-xs border border-[#e5e5e5] hover:bg-[#fafafa] hover:border-[#111111] active:bg-[#f0f0f0] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#111111] cursor-pointer select-none"
                    >
                      <span>{slide.cta.label}</span>
                      <ChevronRightIcon className="h-3.5 w-3.5 text-[#555555] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-[#111111]" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}

          {/* Desktop Bottom-Right Controls: [ < ]  01 / 03  [ > ] */}
          <div className="hidden md:flex absolute bottom-5 right-6 z-20 items-center gap-2 select-none">
            <button
              type="button"
              onClick={prevSlide}
              className="flex h-8 w-8 items-center justify-center rounded-full bg-white/95 hover:bg-white text-[#111111] border border-black/10 shadow-xs transition-transform active:scale-95 cursor-pointer"
              aria-label="Previous banner"
            >
              <ChevronLeftIcon className="h-3.5 w-3.5" />
            </button>

            <span className="text-[12px] font-medium font-mono text-[#333333] px-1 select-none">
              0{currentSlide + 1} / 0{totalSlides}
            </span>

            <button
              type="button"
              onClick={nextSlide}
              className="flex h-8 w-8 items-center justify-center rounded-full bg-white/95 hover:bg-white text-[#111111] border border-black/10 shadow-xs transition-transform active:scale-95 cursor-pointer"
              aria-label="Next banner"
            >
              <ChevronRightIcon className="h-3.5 w-3.5" />
            </button>
          </div>

          {/* Slide Indicator Dashes (Bottom Center) */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5 select-none">
            {HERO_SLIDES.map((slide, index) => {
              const isActive = index === currentSlide;
              return (
                <button
                  key={slide.id}
                  type="button"
                  onClick={() => goToSlide(index)}
                  className={cn(
                    "h-[2.5px] rounded-full transition-all duration-300 cursor-pointer",
                    isActive
                      ? "w-7 bg-[#111111]/90"
                      : "w-3 bg-zinc-300/80 hover:bg-zinc-400"
                  )}
                  aria-label={`Go to slide ${index + 1}`}
                  aria-current={isActive ? "true" : "false"}
                />
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
