"use client";

import React, {
  createContext,
  useContext,
  useCallback,
  useMemo,
  useSyncExternalStore,
} from "react";
import { useAuth } from "@/context/AuthContext";
import { SPOTLIGHT_PRODUCTS } from "@/data/spotlight-products";

// Product registry for quick hydration fallback
const PRODUCT_REGISTRY = new Map(
  SPOTLIGHT_PRODUCTS.map((p) => [p.handle || p.id, p])
);

const WishlistContext = createContext(null);

const emptyArray = [];
let cachedWishlistKey = null;
let cachedWishlistRaw = null;
let cachedWishlistParsed = emptyArray;

function getWishlistSnapshot(userStorageKey) {
  if (typeof window === "undefined" || !userStorageKey) return emptyArray;
  try {
    const raw = localStorage.getItem(userStorageKey);
    if (userStorageKey === cachedWishlistKey && raw === cachedWishlistRaw) {
      return cachedWishlistParsed;
    }
    cachedWishlistKey = userStorageKey;
    cachedWishlistRaw = raw;

    if (!raw) {
      cachedWishlistParsed = emptyArray;
      return cachedWishlistParsed;
    }

    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) {
      cachedWishlistParsed = emptyArray;
      return cachedWishlistParsed;
    }

    cachedWishlistParsed = parsed.map((item) => {
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

    return cachedWishlistParsed;
  } catch {
    return emptyArray;
  }
}

const emptySubscribe = () => () => {};

function subscribeWishlist(callback) {
  if (typeof window === "undefined") return () => {};
  window.addEventListener("storage", callback);
  window.addEventListener("brandx_wishlist_change", callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener("brandx_wishlist_change", callback);
  };
}

export function WishlistProvider({ children }) {
  const { user, isAuthenticated, isHydrated: isAuthHydrated, openAuthModal } = useAuth();
  const isHydrated = useSyncExternalStore(emptySubscribe, () => true, () => false);

  const userStorageKey =
    isAuthenticated && (user?.id || user?.mobile)
      ? `brandx_user_wishlist_${user.id || user.mobile}`
      : null;

  const getSnapshot = useCallback(() => {
    return getWishlistSnapshot(userStorageKey);
  }, [userStorageKey]);

  const getServerSnapshot = useCallback(() => emptyArray, []);

  const items = useSyncExternalStore(subscribeWishlist, getSnapshot, getServerSnapshot);

  // Persist items for the authenticated user
  const persistUserItems = useCallback(
    (newItems) => {
      if (!userStorageKey) return;
      try {
        localStorage.setItem(userStorageKey, JSON.stringify(newItems));
        window.dispatchEvent(new Event("brandx_wishlist_change"));
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

      if (items.some((item) => (item.handle || item.id) === targetKey)) {
        return;
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

      const next = [productData, ...items];
      persistUserItems(next);
    },
    [isAuthenticated, items, openAuthModal, persistUserItems]
  );

  // Remove product from wishlist
  const removeFromWishlist = useCallback(
    (handleOrId) => {
      if (!handleOrId || !isAuthenticated) return;
      const next = items.filter(
        (item) => item.handle !== handleOrId && item.id !== handleOrId
      );
      persistUserItems(next);
    },
    [isAuthenticated, items, persistUserItems]
  );

  // Toggle wishlist state
  const toggleWishlist = useCallback(
    (product) => {
      if (!product) return;
      const targetKey = typeof product === "string" ? product : product.handle || product.id;

      if (!isAuthenticated) {
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
    persistUserItems([]);
  }, [isAuthenticated, persistUserItems]);

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
