"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

/**
 * Universal SSR-safe React Portal component.
 * Renders children directly into document.body as a top-level application overlay.
 */
export function Portal({ children }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || typeof document === "undefined" || !document.body) {
    return null;
  }

  return createPortal(children, document.body);
}
