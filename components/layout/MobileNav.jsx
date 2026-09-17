"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Logo } from "@/components/common/Logo";
import {
  XIcon,
  ChevronDownIcon,
  HelpCircleIcon,
  TruckIcon,
} from "@/components/common/Icons";
import { useAuth } from "@/context/AuthContext";
import { NAVIGATION_CATEGORIES, ANNOUNCEMENT_TEXT } from "@/data/navigation";
import { cn } from "@/lib/utils";

export function MobileNav({ isOpen, onClose }) {
  const [expandedCategories, setExpandedCategories] = useState({});
  const { isAuthenticated, openAuthModal } = useAuth();

  // Body scroll lock & Escape key listener
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  const toggleCategory = (id) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleLinkClick = () => {
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 transition-opacity duration-300"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Slide-in Drawer */}
      <div
        className="fixed inset-y-0 left-0 flex w-full max-w-xs flex-col bg-white shadow-2xl border-r border-[#e5e5e5] animate-in slide-in-from-left duration-300 ease-out"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation menu"
      >
        {/* Drawer Header */}
        <div className="flex h-16 items-center justify-between border-b border-[#e5e5e5] px-5">
          <Logo size="sm" onClick={handleLinkClick} />
          <button
            type="button"
            onClick={onClose}
            className="flex h-10 w-10 items-center justify-center rounded-full text-[#444444] hover:bg-[#f5f5f5] hover:text-[#000000] transition-colors cursor-pointer"
            aria-label="Close menu"
          >
            <XIcon className="h-5 w-5" />
          </button>
        </div>

        {/* Categories List */}
        <div className="flex-1 overflow-y-auto px-4 py-4">
          <div className="mb-2 px-2 text-[11px] font-bold uppercase tracking-widest text-[#888888]">
            Categories
          </div>
          <nav className="space-y-1" aria-label="Mobile categories">
            {NAVIGATION_CATEGORIES.map((category) => {
              const hasChildren =
                category.children && category.children.length > 0;
              const isExpanded = !!expandedCategories[category.id];

              if (!hasChildren) {
                return (
                  <Link
                    key={category.id}
                    href={category.href}
                    onClick={handleLinkClick}
                    className="flex min-h-[44px] items-center rounded-md px-3 py-2 text-[14px] font-medium text-[#222222] hover:bg-[#f5f5f5] hover:text-[#000000] transition-colors"
                  >
                    {category.name}
                  </Link>
                );
              }

              return (
                <div key={category.id} className="rounded-md">
                  <div className="flex min-h-[44px] items-center justify-between rounded-md px-3 py-2 text-[14px] font-medium text-[#222222] hover:bg-[#f5f5f5] transition-colors">
                    <Link
                      href={category.href}
                      onClick={handleLinkClick}
                      className="flex-1 text-left hover:text-[#000000]"
                    >
                      {category.name}
                    </Link>
                    <button
                      type="button"
                      onClick={() => toggleCategory(category.id)}
                      className="flex h-8 w-8 items-center justify-center text-[#888888] hover:text-[#000000] cursor-pointer"
                      aria-expanded={isExpanded}
                      aria-label={`Toggle ${category.name} subcategories`}
                    >
                      <ChevronDownIcon
                        className={cn(
                          "h-4 w-4 transition-transform duration-200",
                          isExpanded && "rotate-180 text-[#000000]"
                        )}
                      />
                    </button>
                  </div>

                  {/* Accordion Subcategories */}
                  {isExpanded && (
                    <div className="ml-4 mt-1 space-y-1 border-l border-[#e5e5e5] pl-3">
                      {category.children.map((subItem) => (
                        <Link
                          key={subItem.id}
                          href={subItem.href}
                          onClick={handleLinkClick}
                          className="flex min-h-[38px] items-center rounded-md px-3 py-1.5 text-[13px] font-normal text-[#555555] hover:bg-[#f5f5f5] hover:text-[#000000] transition-colors"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>
        </div>

        {/* Drawer Bottom Utility Links */}
        <div className="border-t border-[#e5e5e5] p-4 bg-[#fafafa]">
          <div className="space-y-1">
            <Link
              href="/contact"
              onClick={handleLinkClick}
              className="flex min-h-[40px] items-center gap-3 rounded-md px-3 py-2 text-[13px] font-normal text-[#333333] hover:bg-[#f0f0f0] hover:text-[#000000] transition-colors"
            >
              <HelpCircleIcon className="h-4 w-4 text-[#777777]" />
              <span>Help & Support</span>
            </Link>
            <Link
              href={
                isAuthenticated
                  ? "/track-order"
                  : "/account/login?redirect=/track-order"
              }
              onClick={(e) => {
                handleLinkClick();
                if (!isAuthenticated) {
                  openAuthModal({
                    message: "Login to track your order",
                    redirectUrl: "/track-order",
                  });
                }
              }}
              className="flex min-h-[40px] items-center gap-3 rounded-md px-3 py-2 text-[13px] font-normal text-[#333333] hover:bg-[#f0f0f0] hover:text-[#000000] transition-colors"
            >
              <TruckIcon className="h-4 w-4 text-[#777777]" />
              <span>Track Your Order</span>
            </Link>
          </div>

          <div className="mt-4 pt-3 border-t border-[#e5e5e5] text-[11px] text-[#888888] text-center">
            {ANNOUNCEMENT_TEXT.mobile}
          </div>
        </div>
      </div>
    </div>
  );
}
