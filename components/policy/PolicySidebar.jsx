"use client";

import { cn } from "@/lib/utils";

export function PolicySidebar({
  sections = [],
  activeSection = "",
  onSelectSection,
  className = "",
}) {
  if (!sections || sections.length === 0) return null;

  return (
    <aside
      aria-label="Table of Contents"
      className={cn("w-full select-none", className)}
    >
      <div className="bg-white border border-[#eae8e3] rounded-[4px] p-4 xl:p-4.5 shadow-xs">
        <h3 className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#888888] mb-2.5 pb-2 border-b border-[#f0eee9]">
          On This Page
        </h3>

        <nav className="flex flex-col space-y-0.5">
          {sections.map((section, idx) => {
            const isActive = activeSection === section.id;

            return (
              <a
                key={section.id}
                href={`#${section.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  onSelectSection?.(section.id);
                  const el = document.getElementById(section.id);
                  if (el) {
                    el.scrollIntoView({ behavior: "smooth", block: "start" });
                  }
                }}
                className={cn(
                  "group flex items-start gap-2 py-1.5 px-2.5 rounded-[3px] text-[13.5px] xl:text-[14px] leading-snug transition-all text-left",
                  isActive
                    ? "bg-[#111111] text-white font-semibold shadow-xs"
                    : "text-[#555555] hover:text-[#111111] hover:bg-[#f7f6f4]"
                )}
              >
                <span
                  className={cn(
                    "text-[11px] font-mono mt-0.5 shrink-0 transition-colors",
                    isActive
                      ? "text-rose-400 font-bold"
                      : "text-[#999999] group-hover:text-[#666666]"
                  )}
                >
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <span className="flex-1">{section.title}</span>
              </a>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}
