"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeftIcon, ChevronRightIcon } from "@/components/common/Icons";
import { cn } from "@/lib/utils";

export function ProductGallery({ images = [], title = "Product", badge = null }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const displayImages = images.length > 0 ? images : [{ url: "/images/products/relaxed-fit-denim/primary.webp", altText: title }];
  const currentImage = displayImages[activeIndex] || displayImages[0];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? displayImages.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === displayImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="flex flex-col w-full">
      {/* 1. Main Display Image Container (4:5 Aspect Ratio) */}
      <div className="relative w-full aspect-[4/5] bg-[#f8f8f8] rounded-[2px] overflow-hidden border border-[#eae8e3]">
        {/* Badge */}
        {badge && (
          <span
            className={cn(
              "absolute top-3 left-3 z-10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded-[2px] shadow-xs",
              badge === "SALE"
                ? "bg-[#e11d48] text-white"
                : badge === "NEW"
                ? "bg-[#111111] text-white"
                : "bg-zinc-800 text-white"
            )}
          >
            {badge}
          </span>
        )}

        {/* Current Image */}
        {currentImage?.url && (
          <Image
            src={currentImage.url}
            alt={currentImage.altText || title}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover transition-all duration-300"
          />
        )}

        {/* Carousel Arrows (Visible when > 1 image) */}
        {displayImages.length > 1 && (
          <>
            <button
              type="button"
              onClick={handlePrev}
              className="absolute left-2 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-white/85 text-black shadow-md hover:bg-white active:scale-95 transition-all cursor-pointer z-10"
              aria-label="Previous image"
            >
              <ChevronLeftIcon className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-white/85 text-black shadow-md hover:bg-white active:scale-95 transition-all cursor-pointer z-10"
              aria-label="Next image"
            >
              <ChevronRightIcon className="h-5 w-5" />
            </button>
          </>
        )}

        {/* Mobile Dot Indicators */}
        {displayImages.length > 1 && (
          <div className="sm:hidden absolute bottom-3 inset-x-0 flex items-center justify-center gap-1.5 z-10">
            {displayImages.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveIndex(idx)}
                className={cn(
                  "h-1.5 rounded-full transition-all cursor-pointer",
                  idx === activeIndex
                    ? "w-5 bg-[#111111]"
                    : "w-1.5 bg-black/30 hover:bg-black/50"
                )}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* 2. Desktop Thumbnail Strip (When > 1 image) */}
      {displayImages.length > 1 && (
        <div className="hidden sm:flex items-center gap-3 mt-3 overflow-x-auto no-scrollbar pb-1">
          {displayImages.map((img, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setActiveIndex(idx)}
              className={cn(
                "relative aspect-[4/5] w-20 flex-shrink-0 bg-[#f8f8f8] rounded-[2px] overflow-hidden border-2 transition-all cursor-pointer",
                idx === activeIndex
                  ? "border-[#111111] shadow-xs opacity-100"
                  : "border-transparent opacity-60 hover:opacity-100"
              )}
              aria-label={`Select product image ${idx + 1}`}
            >
              <Image
                src={img.url}
                alt={img.altText || `${title} thumbnail ${idx + 1}`}
                fill
                sizes="80px"
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
