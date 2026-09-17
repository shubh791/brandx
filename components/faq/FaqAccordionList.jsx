"use client";

import { useState } from "react";
import Link from "next/link";
import { FAQ_CATEGORIES } from "@/data/faq";
import { ArrowRightIcon } from "@/components/common/Icons";
import { cn } from "@/lib/utils";

export function FaqAccordionList({
  items = [],
  activeCategory = "all",
  onSelectCategory,
  searchQuery = "",
  className = "",
}) {
  const [openId, setOpenId] = useState(items[0]?.id || null);

  const toggleItem = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  const isSearching = searchQuery.trim().length > 0;

  return (
    <div className={cn("grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start", className)}>
      
      {/* ========================================================= */}
      {/* LEFT COLUMN: Sticky Category Sidebar (Desktop Only)       */}
      {/* Calculated sticky top: 160px header + 24px clearance = 184px */}
      {/* ========================================================= */}
      <aside className="hidden lg:block lg:col-span-3 sticky top-[184px] self-start select-none">
        <h3 className="text-xs uppercase font-bold tracking-widest text-[#777777] mb-3.5">
          Help Topics
        </h3>
        <nav aria-label="FAQ Topics Navigation" className="flex flex-col gap-1">
          {FAQ_CATEGORIES.map((cat) => {
            const isSelected = activeCategory === cat.id && !isSearching;

            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => {
                  onSelectCategory(cat.id);
                }}
                className={cn(
                  "w-full text-left px-3.5 py-2.5 text-[14.5px] font-medium rounded-[2px] transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-black",
                  isSelected
                    ? "bg-[#111111] text-white font-semibold"
                    : "text-[#444444] hover:bg-[#f4f3ef] hover:text-[#111111]"
                )}
              >
                {cat.label}
              </button>
            );
          })}
        </nav>

        {/* Quick Contact Box in Sidebar */}
        <div className="mt-8 p-5 bg-[#f8f7f5] rounded-[2px] border border-[#eceae5]">
          <h4 className="text-sm font-bold text-[#111111]">Still have questions?</h4>
          <p className="mt-1.5 text-[13.5px] text-[#555555] leading-relaxed">
            Our customer support team is available to assist you.
          </p>
          <Link
            href="/contact"
            className="mt-3.5 inline-flex items-center gap-1.5 text-xs sm:text-[13px] font-semibold text-[#111111] hover:text-[#e11d48] transition-colors"
          >
            <span>Contact Support</span>
            <ArrowRightIcon className="w-3.5 h-3.5" />
          </Link>
        </div>
      </aside>

      {/* ========================================================= */}
      {/* RIGHT COLUMN: FAQ Questions & Accordions                  */}
      {/* ========================================================= */}
      <div className="lg:col-span-9">
        
        {/* Search Status Header if searching */}
        {isSearching && (
          <div className="mb-5 pb-3 border-b border-[#eceae5] flex items-center justify-between text-sm text-[#666666]">
            <span>
              Found {items.length} {items.length === 1 ? "result" : "results"} for &ldquo;
              <strong className="text-[#111111] font-semibold">{searchQuery}</strong>&rdquo;
            </span>
          </div>
        )}

        {/* Empty State when no results */}
        {items.length === 0 ? (
          <div className="py-12 sm:py-16 text-center flex flex-col items-center justify-center bg-[#faf9f7] rounded-[2px] border border-[#eceae5] p-6 sm:p-8">
            <h3 className="text-lg sm:text-xl font-bold text-[#111111]">
              No answers found
            </h3>
            <p className="mt-2 text-sm text-[#555555] max-w-md">
              We couldn&apos;t find any questions matching your search. Try another search keyword or reach out directly.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <Link
                href="/contact"
                className="px-5 py-2.5 bg-[#111111] text-white text-xs sm:text-[13px] font-semibold rounded-[2px] hover:bg-black transition-colors"
              >
                Contact Us →
              </Link>
            </div>
          </div>
        ) : (
          /* Accordion List */
          <div className="flex flex-col divide-y divide-[#e8e6e1] border-y border-[#e8e6e1]">
            {items.map((item) => {
              const isOpen = openId === item.id;

              return (
                <div key={item.id} className="py-4.5 sm:py-5 transition-colors">
                  {/* Category Eyebrow (when viewing All or Searching) */}
                  {(activeCategory === "all" || isSearching) && (
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#888888] mb-1.5 block">
                      {item.categoryLabel}
                    </span>
                  )}

                  {/* Question Button with generous spacing & 40px touch target */}
                  <button
                    type="button"
                    onClick={() => toggleItem(item.id)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center justify-between gap-4 sm:gap-6 text-left group focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-black cursor-pointer py-1"
                  >
                    <span className="text-[15px] sm:text-[16.5px] md:text-[17px] font-semibold text-[#111111] group-hover:text-black transition-colors pr-2">
                      {item.question}
                    </span>

                    {/* Toggle Plus/Minus Sign with min 40px touch target */}
                    <span
                      className={cn(
                        "w-9 h-9 sm:w-10 sm:h-10 min-w-[36px] sm:min-w-[40px] flex-shrink-0 flex items-center justify-center rounded-full text-lg sm:text-xl font-medium transition-transform duration-200",
                        isOpen
                          ? "bg-[#111111] text-white rotate-45"
                          : "text-[#666666] bg-[#f4f3ef] group-hover:bg-[#111111] group-hover:text-white"
                      )}
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </button>

                  {/* Answer Content */}
                  {isOpen && (
                    <div className="mt-3 pr-6 sm:pr-12 text-sm sm:text-[15px] md:text-base text-[#444444] leading-[1.65] animate-in fade-in-50 duration-200">
                      <p>{item.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

      </div>

    </div>
  );
}
