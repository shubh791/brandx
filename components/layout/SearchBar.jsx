"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { SearchIcon, XIcon } from "@/components/common/Icons";
import { cn } from "@/lib/utils";

export function SearchBar({
  placeholder = "What are you looking for?",
  className = "",
  variant = "desktop", // "desktop" | "mobile"
  onSearchSubmit,
}) {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault();
    const trimmed = query.trim();
    if (!trimmed) return;

    if (onSearchSubmit) {
      onSearchSubmit(trimmed);
    }

    router.push(`/search?q=${encodeURIComponent(trimmed)}`);
  };

  const handleClear = () => {
    setQuery("");
  };

  if (variant === "mobile") {
    return (
      <form
        onSubmit={handleSearch}
        role="search"
        aria-label="Site search"
        className={cn("w-full", className)}
      >
        <div className="relative flex w-full h-[46px] items-center bg-white border border-[#d8d8d8] rounded-[5px] focus-within:border-[#111111] transition-colors">
          <label htmlFor="mobile-search-input" className="sr-only">
            Search products
          </label>
          
          {/* Integrated Left Search Icon */}
          <div className="pointer-events-none absolute left-3.5 flex items-center justify-center text-[#737373]">
            <SearchIcon className="w-4 h-4" />
          </div>

          {/* Clean Input Field */}
          <input
            id="mobile-search-input"
            type="text"
            inputMode="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={placeholder}
            className="w-full h-full bg-transparent pl-10 pr-9 py-0 text-[15px] text-[#111111] placeholder:text-[#888888] focus:outline-none border-0 ring-0 outline-none"
            autoComplete="off"
            autoCorrect="off"
            spellCheck="false"
          />

          {/* Seamless Clear Button (Inside input, no border or box) */}
          {query && (
            <button
              type="button"
              onClick={handleClear}
              aria-label="Clear search query"
              className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center justify-center w-6 h-6 text-[#888888] hover:text-[#111111] bg-transparent border-0 p-0 focus:outline-none cursor-pointer transition-colors"
            >
              <XIcon className="w-4 h-4" />
            </button>
          )}
        </div>
      </form>
    );
  }

  return (
    <form
      onSubmit={handleSearch}
      role="search"
      aria-label="Site search"
      className={cn("w-full max-w-xl", className)}
    >
      <div className="flex w-full h-[44px] items-stretch bg-white border border-[#d8d8d8] rounded-[5px] overflow-hidden focus-within:border-[#111111] transition-colors">
        <label htmlFor="desktop-search-input" className="sr-only">
          Search products
        </label>
        
        {/* Unified Input Container */}
        <div className="relative flex-1 flex items-center h-full">
          {/* Integrated Search Icon Inside Input */}
          <div className="pointer-events-none absolute left-3.5 flex items-center justify-center text-[#737373]">
            <SearchIcon className="w-4 h-4" />
          </div>

          {/* Unified Text Input */}
          <input
            id="desktop-search-input"
            type="text"
            inputMode="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={placeholder}
            className="w-full h-full bg-transparent pl-10 pr-9 py-0 text-[14px] text-[#111111] placeholder:text-[#888888] focus:outline-none border-0 ring-0 outline-none"
            autoComplete="off"
            autoCorrect="off"
            spellCheck="false"
          />

          {/* Seamless Clear Button Inside Input (No divider, no border, no background box) */}
          {query && (
            <button
              type="button"
              onClick={handleClear}
              aria-label="Clear search input"
              className="absolute right-2.5 top-1/2 -translate-y-1/2 flex items-center justify-center w-5 h-5 text-[#888888] hover:text-[#111111] bg-transparent border-0 p-0 focus:outline-none cursor-pointer transition-colors"
            >
              <XIcon className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Flush Search Action Button */}
        <button
          type="submit"
          className="h-full bg-[#111111] hover:bg-[#262626] active:bg-[#000000] px-5 sm:px-6 text-[13px] font-medium tracking-wide text-white transition-colors cursor-pointer select-none shrink-0 flex items-center justify-center border-0 outline-none"
        >
          Search
        </button>
      </div>
    </form>
  );
}
