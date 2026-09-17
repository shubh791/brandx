"use client";

import React, { createContext, useContext, useState, useEffect, useCallback, useMemo } from "react";
import { useAuth } from "@/context/AuthContext";
import { SPOTLIGHT_PRODUCTS } from "@/data/spotlight-products";

// Product registry for quick hydration fallback
const PRODUCT_REGISTRY = new Map(
  SPOTLIGHT_PRODUCTS.map((p) => [p.handle || p.id, p])
);

const WishlistContext = createContext(null);

export function WishlistProvider({ children }) {
  const { user, isAuthenticated, isHydrated: isAuthHydrated, openAuthModal } = useAuth();
  const [items, setItems] = useState([]);
  const [isHydrated, setIsHydrated] = useState(false);

  // Storage key is scoped to the authenticated customer
  const userStorageKey = user?.id || user?.mobile ? `brandx_user_wishlist_${user.id || user.mobile}` : null;

  // Load wishlist items for the authenticated user
  useEffect(() => {
    if (!isAuthHydrated) return;

    if (isAuthenticated && userStorageKey) {
      try {
        const stored = localStorage.getItem(userStorageKey);
        if (stored) {
          const parsed = JSON.parse(stored);
          if (Array.isArray(parsed)) {
            const normalized = parsed.map((item) => {
              if (typeof item === "string") {
                return (
                  PRODUCT_REGISTRY.get(item) || {
                    id: item,
                    handle: item,
                    title: item.replace(/-/g, " "),
                    price: { amount: 0, currencyCode: "INR" },
                  }
                );
              }
              return item;
            });
            setItems(normalized);
          }
        } else {
          setItems([]);
        }
      } catch (err) {
        console.warn("Failed to load user wishlist from localStorage:", err);
      }
    } else {
      // Logged out: strictly empty wishlist, no guest storage
      setItems([]);
    }
    setIsHydrated(true);
  }, [isAuthenticated, userStorageKey, isAuthHydrated]);

  // Persist items for the authenticated user
  const persistUserItems = useCallback(
    (newItems) => {
      if (!userStorageKey) return;
      try {
        localStorage.setItem(userStorageKey, JSON.stringify(newItems));
      } catch (err) {
        console.warn("Failed to save user wishlist to localStorage:", err);
      }
    },
    [userStorageKey]
  );

  // Check if a product is wishlisted
  const isWishlisted = useCallback(
    (handleOrId) => {
      if (!isAuthenticated || !handleOrId) return false;
      return items.some(
        (item) => item.handle === handleOrId || item.id === handleOrId
      );
    },
    [isAuthenticated, items]
  );

  // Add product to wishlist (only for authenticated user)
  const addToWishlist = useCallback(
    (product) => {
      if (!product) return;
      const targetKey = typeof product === "string" ? product : product.handle || product.id;
      if (!targetKey) return;

      if (!isAuthenticated) {
        // Intercept: prompt login, remember intended product
        openAuthModal({
          message: "Login to save your favourites",
          pendingAction: { type: "wishlist", product },
        });
        return;
      }

      setItems((prev) => {
        if (prev.some((item) => (item.handle || item.id) === targetKey)) {
          return prev;
        }

        let productData;
        if (typeof product === "string") {
          const registered = PRODUCT_REGISTRY.get(product);
          productData = registered || {
            id: product,
            handle: product,
            title: product.replace(/-/g, " "),
            price: { amount: 0, currencyCode: "INR" },
          };
        } else {
          productData = {
            id: product.id || targetKey,
            handle: product.handle || targetKey,
            title: product.title || "BrandX Item",
            featuredImage: product.featuredImage || null,
            price: product.price || { amount: 0, currencyCode: "INR" },
            compareAtPrice: product.compareAtPrice || null,
            badge: product.badge || null,
            vendor: product.vendor || "BrandX",
            category: product.category || "Fashion",
          };
        }

        const next = [productData, ...prev];
        persistUserItems(next);
        return next;
      });
    },
    [isAuthenticated, openAuthModal, persistUserItems]
  );

  // Remove product from wishlist
  const removeFromWishlist = useCallback(
    (handleOrId) => {
      if (!handleOrId || !isAuthenticated) return;
      setItems((prev) => {
        const next = prev.filter(
          (item) => item.handle !== handleOrId && item.id !== handleOrId
        );
        persistUserItems(next);
        return next;
      });
    },
    [isAuthenticated, persistUserItems]
  );

  // Toggle wishlist state
  const toggleWishlist = useCallback(
    (product) => {
      if (!product) return;
      const targetKey = typeof product === "string" ? product : product.handle || product.id;

      if (!isAuthenticated) {
        // Intercept: show login modal, remember intended product
        openAuthModal({
          message: "Login to save your favourites",
          pendingAction: { type: "wishlist", product },
        });
        return;
      }

      if (isWishlisted(targetKey)) {
        removeFromWishlist(targetKey);
      } else {
        addToWishlist(product);
      }
    },
    [isAuthenticated, isWishlisted, removeFromWishlist, addToWishlist, openAuthModal]
  );

  // Clear all wishlist items for current user
  const clearWishlist = useCallback(() => {
    if (!isAuthenticated) return;
    setItems([]);
    persistUserItems([]);
  }, [isAuthenticated, persistUserItems]);

  // Check for pending wishlist action upon authentication
  useEffect(() => {
    if (isAuthenticated && userStorageKey) {
      try {
        const storedPending = sessionStorage.getItem("brandx_pending_action");
        if (storedPending) {
          const parsed = JSON.parse(storedPending);
          if (parsed && parsed.type === "wishlist" && parsed.product) {
            sessionStorage.removeItem("brandx_pending_action");
            addToWishlist(parsed.product);
          }
        }
      } catch (err) {
        console.warn("Failed to complete pending wishlist action:", err);
      }
    }
  }, [isAuthenticated, userStorageKey, addToWishlist]);

  const value = useMemo(
    () => ({
      wishlistItems: items,
      wishlistCount: items.length,
      isHydrated: isHydrated && isAuthHydrated,
      isWishlisted,
      addToWishlist,
      removeFromWishlist,
      toggleWishlist,
      clearWishlist,
    }),
    [
      items,
      isHydrated,
      isAuthHydrated,
      isWishlisted,
      addToWishlist,
      removeFromWishlist,
      toggleWishlist,
      clearWishlist,
    ]
  );

  return (
    <WishlistContext.Provider value={value}>
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error("useWishlist must be used within a WishlistProvider");
  }
  return context;
}
