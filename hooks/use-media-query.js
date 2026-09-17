"use client";

import { useEffect, useState } from "react";

/**
 * Custom hook to evaluate CSS media queries.
 * @param {string} query - Media query string (e.g. '(min-width: 768px)')
 * @returns {boolean} - Matches state
 */
export function useMediaQuery(query) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const media = window.matchMedia(query);
    setMatches(media.matches);

    const listener = (event) => setMatches(event.matches);
    media.addEventListener("change", listener);

    return () => media.removeEventListener("change", listener);
  }, [query]);

  return matches;
}

/**
 * Helper hook for mobile detection (< 768px).
 */
export function useIsMobile() {
  return useMediaQuery("(max-width: 767px)");
}

/**
 * Helper hook for tablet detection (768px - 1023px).
 */
export function useIsTablet() {
  return useMediaQuery("(min-width: 768px) and (max-width: 1023px)");
}

/**
 * Helper hook for desktop detection (>= 1024px).
 */
export function useIsDesktop() {
  return useMediaQuery("(min-width: 1024px)");
}
