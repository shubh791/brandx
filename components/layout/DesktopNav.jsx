"use client";

import { useState } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ChevronDownIcon, ChevronRightIcon } from "@/components/common/Icons";
import { NAVIGATION_CATEGORIES } from "@/data/navigation";
import { cn } from "@/lib/utils";

export function DesktopNav() {
  const [activeDropdown, setActiveDropdown] = useState(null);

  return (
    <nav
      className="hidden lg:block w-full border-b border-[#e5e5e5] bg-white select-none relative z-30"
      aria-label="Category navigation"
    >
      <Container size="full">
        <ul className="flex items-center justify-center gap-7 xl:gap-9 py-0">
          {NAVIGATION_CATEGORIES.map((category) => {
            const hasChildren = category.children && category.children.length > 0;
            const isOpen = activeDropdown === category.id;

            return (
              <li
                key={category.id}
                className="relative group"
                onMouseEnter={() => hasChildren && setActiveDropdown(category.id)}
                onMouseLeave={() => hasChildren && setActiveDropdown(null)}
              >
                {hasChildren ? (
                  <div className="relative">
                    <Link
                      href={category.href}
                      className={cn(
                        "inline-flex items-center gap-1.5 py-3 text-[13.5px] font-medium text-[#222222] hover:text-[#000000] transition-colors",
                        isOpen && "text-[#000000]"
                      )}
                      aria-expanded={isOpen}
                      aria-haspopup="true"
                    >
                      <span>{category.name}</span>
                      <ChevronDownIcon
                        className={cn(
                          "h-3.5 w-3.5 text-[#888888] transition-transform duration-200",
                          isOpen && "rotate-180 text-[#000000]"
                        )}
                      />
                    </Link>

                    {/* Dropdown Menu */}
                    {isOpen && (
                      <div className="absolute top-full left-0 min-w-[210px] pt-1 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                        <div className="rounded-[4px] border border-[#e5e5e5] bg-white py-1.5 shadow-lg shadow-black/5 ring-1 ring-black/5">
                          {category.children.map((subItem) => (
                            <Link
                              key={subItem.id}
                              href={subItem.href}
                              onClick={() => setActiveDropdown(null)}
                              className="group/item flex items-center justify-between px-4 py-2 text-[13px] font-normal text-[#333333] hover:bg-[#f5f5f5] hover:text-[#000000] transition-colors"
                            >
                              <span>{subItem.name}</span>
                              <ChevronRightIcon className="h-3.5 w-3.5 text-[#aaaaaa] group-hover/item:text-[#111111] transition-colors" />
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={category.href}
                    className="inline-flex items-center py-3 text-[13.5px] font-medium text-[#222222] hover:text-[#000000] transition-colors"
                  >
                    {category.name}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </Container>
    </nav>
  );
}
