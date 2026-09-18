"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDownIcon } from "@/components/common/Icons";
import { cn } from "@/lib/utils";

export function ProductDetailsAccordion({ product }) {
  const [openTab, setOpenTab] = useState("details");

  if (!product) return null;

  const toggleTab = (tabId) => {
    setOpenTab((prev) => (prev === tabId ? null : tabId));
  };

  const sections = [
    {
      id: "details",
      title: "Product Details & Highlights",
      content: (
        <div className="space-y-2.5 text-xs sm:text-sm text-[#444444]">
          <p className="leading-relaxed">{product.description}</p>
          {product.details && product.details.length > 0 && (
            <ul className="list-disc pl-4 space-y-1.5 mt-2">
              {product.details.map((detail, idx) => (
                <li key={idx}>{detail}</li>
              ))}
            </ul>
          )}
        </div>
      ),
    },
    {
      id: "specs",
      title: "Material & Fit Specifications",
      content: (
        <div className="space-y-2 text-xs sm:text-sm text-[#444444]">
          {product.material && (
            <div className="flex items-start justify-between gap-2 pb-1.5 border-b border-[#f0eee9]">
              <span className="text-[#777777]">Fabric / Material:</span>
              <span className="font-medium text-[#111111] text-right">{product.material}</span>
            </div>
          )}
          {product.fit && (
            <div className="flex items-start justify-between gap-2 pb-1.5 border-b border-[#f0eee9]">
              <span className="text-[#777777]">Fit Silhouette:</span>
              <span className="font-medium text-[#111111] text-right">{product.fit}</span>
            </div>
          )}
          <div className="flex items-start justify-between gap-2 pt-0.5">
            <span className="text-[#777777]">Brand / Vendor:</span>
            <span className="font-medium text-[#111111]">{product.vendor || "BrandX"}</span>
          </div>
        </div>
      ),
    },
    {
      id: "care",
      title: "Wash & Care Instructions",
      content: (
        <div className="text-xs sm:text-sm text-[#444444]">
          {product.care && product.care.length > 0 ? (
            <ul className="list-disc pl-4 space-y-1.5">
              {product.care.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          ) : (
            <p>Gentle wash with like colors. Follow standard garment care practices.</p>
          )}
        </div>
      ),
    },
    {
      id: "shipping-returns",
      title: "Shipping & 7-Day Easy Returns",
      content: (
        <div className="space-y-2.5 text-xs sm:text-sm text-[#444444] leading-relaxed">
          <p>
            • <strong>Dispatch:</strong> Packed and shipped within 1–2 business days.
          </p>
          <p>
            • <strong>Delivery:</strong> Delivered in 3–7 business days across serviceable pin codes in India.
          </p>
          <p>
            • <strong>Returns & Exchange:</strong> Enjoy 7-day hassle-free returns and size exchanges from delivery date.
          </p>
          <div className="pt-2 flex items-center gap-4 text-xs">
            <Link href="/shipping" className="font-semibold text-[#111111] underline underline-offset-4 hover:text-[#e11d48]">
              Shipping Policy
            </Link>
            <Link href="/returns" className="font-semibold text-[#111111] underline underline-offset-4 hover:text-[#e11d48]">
              Returns Policy
            </Link>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full divide-y divide-[#eae8e3] border-t border-b border-[#eae8e3] mt-6">
      {sections.map((section) => {
        const isOpen = openTab === section.id;
        return (
          <div key={section.id} className="py-3">
            <button
              type="button"
              onClick={() => toggleTab(section.id)}
              className="w-full flex items-center justify-between text-left text-xs sm:text-[13px] font-bold uppercase tracking-wider text-[#111111] py-1 transition-colors cursor-pointer"
              aria-expanded={isOpen}
            >
              <span>{section.title}</span>
              <ChevronDownIcon
                className={cn(
                  "w-4 h-4 text-[#777777] transition-transform duration-200",
                  isOpen && "rotate-180 text-black"
                )}
              />
            </button>
            {isOpen && <div className="mt-3 pb-2">{section.content}</div>}
          </div>
        );
      })}
    </div>
  );
}
