"use client";

import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useMemo,
  useSyncExternalStore,
} from "react";

const CART_STORAGE_KEY = "brandx_customer_cart";

const CartContext = createContext(null);

const emptyCart = [];
let cachedCartRaw = null;
let cachedCartParsed = emptyCart;

function getCartSnapshot() {
  if (typeof window === "undefined") return emptyCart;
  try {
    const raw = localStorage.getItem(CART_STORAGE_KEY);
    if (raw === cachedCartRaw) return cachedCartParsed;
    cachedCartRaw = raw;

    if (!raw) {
      cachedCartParsed = emptyCart;
      return cachedCartParsed;
    }

    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) {
      cachedCartParsed = emptyCart;
      return cachedCartParsed;
    }

    cachedCartParsed = parsed;
    return cachedCartParsed;
  } catch {
    return emptyCart;
  }
}

const emptySubscribe = () => () => {};

function subscribeCart(callback) {
  if (typeof window === "undefined") return () => {};
  window.addEventListener("storage", callback);
  window.addEventListener("brandx_cart_change", callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener("brandx_cart_change", callback);
  };
}

export function CartProvider({ children }) {
  const isHydrated = useSyncExternalStore(emptySubscribe, () => true, () => false);
  const cartItems = useSyncExternalStore(subscribeCart, getCartSnapshot, () => emptyCart);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Persist updated items to localStorage and notify subscribers
  const persistCart = useCallback((newItems) => {
    if (typeof window === "undefined") return;
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(newItems));
      window.dispatchEvent(new Event("brandx_cart_change"));
    } catch (err) {
      console.warn("Failed to persist cart items:", err);
    }
  }, []);

  const cartCount = useMemo(() => {
    return cartItems.reduce((acc, item) => acc + (item.quantity || 1), 0);
  }, [cartItems]);

  const subtotal = useMemo(() => {
    return cartItems.reduce((acc, item) => {
      const price = item.price?.amount || 0;
      return acc + price * (item.quantity || 1);
    }, 0);
  }, [cartItems]);

  const addToCart = useCallback(
    (product, selectedSize = null, selectedColor = null, quantity = 1) => {
      if (!product) return false;

      const sizeKey = selectedSize || "Default";
      const itemKey = `${product.id || product.handle}_${sizeKey}`;

      const existingIndex = cartItems.findIndex(
        (item) => (item.id || item.handle) === (product.id || product.handle) && item.size === sizeKey
      );

      let next;
      if (existingIndex > -1) {
        next = cartItems.map((item, idx) => {
          if (idx === existingIndex) {
            return {
              ...item,
              quantity: item.quantity + (quantity || 1),
            };
          }
          return item;
        });
      } else {
        const newItem = {
          key: itemKey,
          id: product.id || product.handle,
          handle: product.handle,
          title: product.title || product.name,
          category: product.category,
          price: product.price || { amount: 0, currencyCode: "INR" },
          compareAtPrice: product.compareAtPrice || null,
          featuredImage: product.featuredImage || product.images?.[0] || null,
          size: sizeKey,
          color: selectedColor || product.colors?.[0]?.name || null,
          quantity: quantity || 1,
          addedAt: new Date().toISOString(),
        };
        next = [newItem, ...cartItems];
      }

      persistCart(next);
      return true;
    },
    [cartItems, persistCart]
  );

  const updateQuantity = useCallback(
    (itemKey, delta) => {
      const next = cartItems
        .map((item) => {
          const key = item.key || `${item.id}_${item.size}`;
          if (key === itemKey) {
            const nextQty = item.quantity + delta;
            return nextQty > 0 ? { ...item, quantity: nextQty } : null;
          }
          return item;
        })
        .filter(Boolean);

      persistCart(next);
    },
    [cartItems, persistCart]
  );

  const removeFromCart = useCallback(
    (itemKey) => {
      const next = cartItems.filter((item) => {
        const key = item.key || `${item.id}_${item.size}`;
        return key !== itemKey;
      });
      persistCart(next);
    },
    [cartItems, persistCart]
  );

  const clearCart = useCallback(() => {
    persistCart([]);
  }, [persistCart]);

  const openCart = useCallback(() => setIsDrawerOpen(true), []);
  const closeCart = useCallback(() => setIsDrawerOpen(false), []);
  const toggleCart = useCallback(() => setIsDrawerOpen((prev) => !prev), []);

  const value = useMemo(
    () => ({
      cartItems,
      cartCount,
      subtotal,
      isHydrated,
      isDrawerOpen,
      addToCart,
      updateQuantity,
      removeFromCart,
      clearCart,
      openCart,
      closeCart,
      toggleCart,
    }),
    [
      cartItems,
      cartCount,
      subtotal,
      isHydrated,
      isDrawerOpen,
      addToCart,
      updateQuantity,
      removeFromCart,
      clearCart,
      openCart,
      closeCart,
      toggleCart,
    ]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
