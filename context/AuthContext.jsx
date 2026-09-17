"use client";

import React, { createContext, useContext, useState, useEffect, useCallback, useMemo } from "react";

const AUTH_STORAGE_KEY = "brandx_customer_auth";
const PENDING_ACTION_KEY = "brandx_pending_action";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isHydrated, setIsHydrated] = useState(false);
  const [isAccountOpen, setIsAccountOpen] = useState(false);
  const [authModal, setAuthModal] = useState({
    isOpen: false,
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
          setAuthModal((prev) => ({
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
    setAuthModal((prev) => ({ ...prev, isOpen: false }));
    setIsAccountOpen(true);
  }, []);

  const closeAccount = useCallback(() => {
    setIsAccountOpen(false);
  }, []);

  const openAuthModal = useCallback(({ message, redirectUrl, pendingAction }) => {
    if (pendingAction) {
      try {
        sessionStorage.setItem(PENDING_ACTION_KEY, JSON.stringify(pendingAction));
      } catch (err) {
        console.warn("Failed to persist pending action:", err);
      }
    }
    // Automatically close account sheet when opening login modal
    setIsAccountOpen(false);
    setAuthModal({
      isOpen: true,
      message: message || "Sign in to view your orders and account details.",
      redirectUrl: redirectUrl || null,
      pendingAction: pendingAction || null,
    });
  }, []);

  const closeAuthModal = useCallback(() => {
    setAuthModal((prev) => ({
      ...prev,
      isOpen: false,
    }));
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
      const pending = authModal.pendingAction;
      sessionStorage.removeItem(PENDING_ACTION_KEY);

      // Close modal
      setAuthModal({
        isOpen: false,
        message: "",
        redirectUrl: null,
        pendingAction: null,
      });

      return { customer: customerData, pendingAction: pending };
    },
    [authModal.pendingAction]
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

  const value = useMemo(
    () => ({
      isAuthenticated: !!user,
      user,
      isHydrated,
      isAccountOpen,
      setIsAccountOpen,
      openAccount,
      closeAccount,
      authModal,
      openAuthModal,
      closeAuthModal,
      login,
      logout,
      requireAuth,
    }),
    [
      user,
      isHydrated,
      isAccountOpen,
      openAccount,
      closeAccount,
      authModal,
      openAuthModal,
      closeAuthModal,
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
