"use client";

import { useState, useEffect } from "react";

/**
 * Tracks vertical scroll direction ('up' or 'down') and top boundary.
 * Useful for smart sticky navigation bars.
 */
export function useScrollDirection({ threshold = 10 } = {}) {
  const [scrollDirection, setScrollDirection] = useState("up");
  const [isAtTop, setIsAtTop] = useState(true);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let previousScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      setIsAtTop(currentScrollY <= threshold);

      if (Math.abs(currentScrollY - previousScrollY) < threshold) {
        return;
      }

      setScrollDirection(currentScrollY > previousScrollY ? "down" : "up");
      previousScrollY = currentScrollY > 0 ? currentScrollY : 0;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return { scrollDirection, isAtTop, scrollY };
}
