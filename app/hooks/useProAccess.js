// /app/hooks/useProAccess.js
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

/**
 * useProAccess hook (with 7-day access window)
 * 
 * @param {string} keyPhase - e.g. "phase-1"
 * @param {object} options  - { redirectToCheckout, title, price }
 * 
 * Returns:
 * {
 *   hasAccess: boolean,
 *   expiresAt: number | null,
 *   daysLeft: number | null,
 *   loading: boolean
 * }
 */

export default function useProAccess(keyPhase, options = {}) {
  const router = useRouter();
  const [state, setState] = useState({
    hasAccess: false,
    expiresAt: null,
    daysLeft: null,
    loading: true, // ✅ added
  });

  useEffect(() => {
    if (!keyPhase) {
      setState((s) => ({ ...s, loading: false }));
      return;
    }

    const key = `emotiondeck_${keyPhase}_access`;
    const raw = localStorage.getItem(key);

    // ⏳ simulate async load (prevent flashing)
    const timer = setTimeout(() => {
      if (!raw) {
        if (options.redirectToCheckout !== false) {
          const title = options.title || "";
          const price = options.price || "4.99";
          const qs = new URLSearchParams({ phase: keyPhase, title, price }).toString();
          router.push(`/pro/checkout?${qs}`);
        }
        setState({ hasAccess: false, expiresAt: null, daysLeft: null, loading: false });
        return;
      }

      try {
        const parsed = JSON.parse(raw);
        const { active, expires } = parsed || {};

        if (!active || !expires) {
          localStorage.removeItem(key);
          if (options.redirectToCheckout !== false) {
            const title = options.title || "";
            const price = options.price || "4.99";
            const qs = new URLSearchParams({ phase: keyPhase, title, price }).toString();
            router.push(`/pro/checkout?${qs}`);
          }
          setState({ hasAccess: false, expiresAt: null, daysLeft: null, loading: false });
          return;
        }

        const now = Date.now();
        if (now > expires) {
          localStorage.removeItem(key);
          if (options.redirectToCheckout !== false) {
            const title = options.title || "";
            const price = options.price || "4.99";
            const qs = new URLSearchParams({ phase: keyPhase, title, price }).toString();
            router.push(`/pro/checkout?${qs}`);
          }
          setState({ hasAccess: false, expiresAt: null, daysLeft: null, loading: false });
          return;
        }

        const msLeft = expires - now;
        const daysLeft = Math.ceil(msLeft / (1000 * 60 * 60 * 24));

        setState({ hasAccess: true, expiresAt: expires, daysLeft, loading: false });
      } catch (err) {
        console.error("useProAccess parse error:", err);
        localStorage.removeItem(key);
        if (options.redirectToCheckout !== false) {
          const title = options.title || "";
          const price = options.price || "4.99";
          const qs = new URLSearchParams({ phase: keyPhase, title, price }).toString();
          router.push(`/pro/checkout?${qs}`);
        }
        setState({ hasAccess: false, expiresAt: null, daysLeft: null, loading: false });
      }
    }, 200); // short delay for smoother UX

    return () => clearTimeout(timer);
  }, [keyPhase, options.title, options.price, options.redirectToCheckout, router]);

  return state;
}
