"use client";

import { useSyncExternalStore } from "react";
import { createPortal } from "react-dom";

const emptySubscribe = () => () => {};

/**
 * Universal SSR-safe React Portal component.
 * Renders children directly into document.body as a top-level application overlay.
 */
export function Portal({ children }) {
  const isMounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  if (!isMounted || typeof document === "undefined" || !document.body) {
    return null;
  }

  return createPortal(children, document.body);
}
