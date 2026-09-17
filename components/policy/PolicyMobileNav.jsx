"use client";

import { ChevronDownIcon } from "@/components/common/Icons";
import { cn } from "@/lib/utils";

export function PolicyMobileNav({
  sections = [],
  activeSection = "",
  onSelectSection,
  className = "",
}) {
  if (!sections || sections.length === 0) return null;

  const handleChange = (e) => {
    const targetId = e.target.value;
    if (!targetId) return;
    onSelectSection?.(targetId);
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className={cn("block lg:hidden w-full mb-6 select-none", className)}>
      <label
        htmlFor="policy-section-select"
        className="block text-xs font-bold uppercase tracking-[0.16em] text-[#777777] mb-2"
      >
        Jump to section
      </label>

      <div className="relative">
        <select
          id="policy-section-select"
          value={activeSection}
          onChange={handleChange}
          className="w-full h-11 pl-3.5 pr-10 bg-white border border-[#d8d6cf] rounded-[3px] text-sm font-medium text-[#111111] appearance-none focus:outline-none focus:border-[#111111] focus:ring-1 focus:ring-black transition-colors cursor-pointer"
        >
          <option value="" disabled>
            Select a policy section...
          </option>
          {sections.map((section, idx) => (
            <option key={section.id} value={section.id}>
              {String(idx + 1).padStart(2, "0")}. {section.title}
            </option>
          ))}
        </select>

        <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-[#666666]">
          <ChevronDownIcon className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
}
