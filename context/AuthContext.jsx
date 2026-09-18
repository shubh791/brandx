"use client";

import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useMemo,
  useSyncExternalStore,
} from "react";

const AUTH_STORAGE_KEY = "brandx_customer_auth";
const PENDING_ACTION_KEY = "brandx_pending_action";

const AuthContext = createContext(null);

let cachedUserRaw = null;
let cachedUserParsed = null;

function getUserSnapshot() {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(AUTH_STORAGE_KEY);
    if (raw === cachedUserRaw) return cachedUserParsed;
    cachedUserRaw = raw;
    if (raw) {
      const parsed = JSON.parse(raw);
      cachedUserParsed = parsed && parsed.mobile ? parsed : null;
    } else {
      cachedUserParsed = null;
    }
    return cachedUserParsed;
  } catch {
    return null;
  }
}

function getServerUserSnapshot() {
  return null;
}

function subscribeAuth(callback) {
  if (typeof window === "undefined") return () => {};
  window.addEventListener("storage", callback);
  window.addEventListener("brandx_auth_change", callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener("brandx_auth_change", callback);
  };
}

const emptySubscribe = () => () => {};

export function AuthProvider({ children }) {
  const user = useSyncExternalStore(subscribeAuth, getUserSnapshot, getServerUserSnapshot);
  const isHydrated = useSyncExternalStore(emptySubscribe, () => true, () => false);

  const [activeOverlay, setActiveOverlay] = useState(null); // null | "account" | "login"
  const [authDetails, setAuthDetails] = useState({
    message: "",
    redirectUrl: null,
    pendingAction: null,
  });

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
        window.dispatchEvent(new Event("brandx_auth_change"));
      } catch (err) {
        console.warn("Failed to persist customer auth:", err);
      }

      let pending = authDetails.pendingAction;
      try {
        const stored = sessionStorage.getItem(PENDING_ACTION_KEY);
        if (stored) {
          pending = JSON.parse(stored);
          sessionStorage.removeItem(PENDING_ACTION_KEY);
        }
      } catch {
        // ignore
      }

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
      window.dispatchEvent(new Event("brandx_auth_change"));
    } catch (err) {
      console.warn("Failed to clear auth session:", err);
    }
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
