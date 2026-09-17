"use client";

import React, { createContext, useContext, useState, useEffect, useCallback, useMemo } from "react";

const AUTH_STORAGE_KEY = "brandx_customer_auth";
const PENDING_ACTION_KEY = "brandx_pending_action";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isHydrated, setIsHydrated] = useState(false);
  const [activeOverlay, setActiveOverlay] = useState(null); // null | "account" | "login"
  const [authDetails, setAuthDetails] = useState({
    message: "",
    redirectUrl: null,
    pendingAction: null,
  });

  // Hydrate auth session from localStorage on client mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(AUTH_STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (parsed && parsed.mobile) {
          setUser(parsed);
        }
      }

      // Check for pending action in session storage
      const storedPending = sessionStorage.getItem(PENDING_ACTION_KEY);
      if (storedPending) {
        const parsedPending = JSON.parse(storedPending);
        if (parsedPending) {
          setAuthDetails((prev) => ({
            ...prev,
            pendingAction: parsedPending,
          }));
        }
      }
    } catch (err) {
      console.warn("Failed to load customer auth session:", err);
    } finally {
      setIsHydrated(true);
    }
  }, []);

  // Multi-tab sync for auth state
  useEffect(() => {
    const handleStorageChange = (e) => {
      if (e.key === AUTH_STORAGE_KEY) {
        try {
          if (e.newValue) {
            const parsed = JSON.parse(e.newValue);
            setUser(parsed);
          } else {
            setUser(null);
          }
        } catch (err) {
          console.warn("Failed to sync storage change for auth:", err);
        }
      }
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const openAccount = useCallback(() => {
    setActiveOverlay("account");
  }, []);

  const closeAccount = useCallback(() => {
    setActiveOverlay((prev) => (prev === "account" ? null : prev));
  }, []);

  const setIsAccountOpen = useCallback((open) => {
    if (typeof open === "function") {
      setActiveOverlay((prev) => {
        const next = open(prev === "account");
        return next ? "account" : null;
      });
    } else {
      setActiveOverlay(open ? "account" : null);
    }
  }, []);

  const openAuthModal = useCallback(({ message, redirectUrl, pendingAction }) => {
    if (pendingAction) {
      try {
        sessionStorage.setItem(PENDING_ACTION_KEY, JSON.stringify(pendingAction));
      } catch (err) {
        console.warn("Failed to persist pending action:", err);
      }
    }

    setAuthDetails({
      message: message || "Sign in to view your orders and account details.",
      redirectUrl: redirectUrl || null,
      pendingAction: pendingAction || null,
    });
    // Atomically set active overlay to login (closes account sheet if open)
    setActiveOverlay("login");
  }, []);

  const closeAuthModal = useCallback(() => {
    setActiveOverlay((prev) => (prev === "login" ? null : prev));
  }, []);

  const closeAllOverlays = useCallback(() => {
    setActiveOverlay(null);
  }, []);

  const login = useCallback(
    (credentials) => {
      if (!credentials || !credentials.mobile) return null;
      const customerData = {
        id: credentials.id || `cust_${credentials.mobile}`,
        mobile: credentials.mobile,
        loggedInAt: new Date().toISOString(),
      };

      try {
        localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(customerData));
      } catch (err) {
        console.warn("Failed to persist customer auth:", err);
      }

      setUser(customerData);

      // Grab current pending action before clearing
      const pending = authDetails.pendingAction;
      sessionStorage.removeItem(PENDING_ACTION_KEY);

      // Close modal
      setActiveOverlay(null);
      setAuthDetails({
        message: "",
        redirectUrl: null,
        pendingAction: null,
      });

      return { customer: customerData, pendingAction: pending };
    },
    [authDetails.pendingAction]
  );

  const logout = useCallback(() => {
    try {
      localStorage.removeItem(AUTH_STORAGE_KEY);
      sessionStorage.removeItem(PENDING_ACTION_KEY);
    } catch (err) {
      console.warn("Failed to clear auth session:", err);
    }
    setUser(null);
  }, []);

  const requireAuth = useCallback(
    ({ message, redirectUrl, pendingAction, onAuthenticated }) => {
      if (user) {
        if (onAuthenticated) onAuthenticated(user);
        return true;
      }
      openAuthModal({ message, redirectUrl, pendingAction });
      return false;
    },
    [user, openAuthModal]
  );

  const authModal = useMemo(
    () => ({
      isOpen: activeOverlay === "login",
      message: authDetails.message,
      redirectUrl: authDetails.redirectUrl,
      pendingAction: authDetails.pendingAction,
    }),
    [activeOverlay, authDetails]
  );

  const isAccountOpen = activeOverlay === "account";

  const value = useMemo(
    () => ({
      isAuthenticated: !!user,
      user,
      isHydrated,
      activeOverlay,
      setActiveOverlay,
      isAccountOpen,
      setIsAccountOpen,
      openAccount,
      closeAccount,
      authModal,
      openAuthModal,
      closeAuthModal,
      closeAllOverlays,
      login,
      logout,
      requireAuth,
    }),
    [
      user,
      isHydrated,
      activeOverlay,
      isAccountOpen,
      setIsAccountOpen,
      openAccount,
      closeAccount,
      authModal,
      openAuthModal,
      closeAuthModal,
      closeAllOverlays,
      login,
      logout,
      requireAuth,
    ]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
