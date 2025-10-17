"use client";

import { Suspense, useEffect, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";

function CheckoutContent() {
  const searchParams = useSearchParams();
  const phase = searchParams.get("phase") || "3";
  const [sdkReady, setSdkReady] = useState(false);
  const [error, setError] = useState("");
  const redirected = useRef(false);

  // =============================
  // 💠 PHASE DATA CONFIGURATION
  // =============================
  const phaseData = {
    2: {
      title: "Phase 2 — Advanced Emotional Expressions",
      price: "0.01",
      description:
        "EmotionDeck Phase 2 (Advanced Emotional Expressions) — 30-day online access for £49.99. Dive into a deeper exploration of subtle and complex human emotions through 288 portraits featuring nuanced micro-expressions, diverse regions, and balanced gender representation.",
      accessToken: "emotiondeck_phase2_access",
    },
    3: {
      title: "Phase 3 — Young Adults Collection",
      price: "0.01",
      description:
        "EmotionDeck Phase 3 (Young Adults Collection) — 30-day online access for £49.99. Explore emotional expression and identity formation in early adulthood.",
      accessToken: "emotiondeck_phase3_access",
    },
    4: {
      title: "Phase 4 — Children Collection",
      price: "0.01",
      description:
        "EmotionDeck Phase 4 (Children Collection) — 30-day online access for £49.99. Observe emotional awareness and natural expressiveness in childhood.",
      accessToken: "emotiondeck_phase4_access",
    },
    5: {
      title: "Phase 5 — Seniors Collection",
      price: "0.01",
      description:
        "EmotionDeck Phase 5 (Seniors Collection) — 30-day online access for £49.99. Discover the emotional wisdom, empathy, and resilience of later life.",
      accessToken: "emotiondeck_phase5_access",
    },
  };

  const selected = phaseData[phase] || phaseData[3];

  // =============================
  // 💳 LOAD PAYPAL SDK DYNAMICALLY
  // =============================
  useEffect(() => {
    if (typeof window === "undefined") return; // SSR safety guard

    const existingScript = document.querySelector(
      'script[src*="paypal.com/sdk/js"]'
    );
    if (existingScript) {
      setSdkReady(true);
      return;
    }

    const clientId = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID;
    if (!clientId) {
      console.error("❌ PayPal Client ID missing in environment.");
      setError("⚠️ PayPal Client ID missing — please contact support.");
      return;
    }

    const script = document.createElement("script");
    script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}&currency=GBP`;
    script.async = true;
    script.onload = () => {
      console.log("✅ PayPal SDK loaded successfully");
      setSdkReady(true);
    };
    script.onerror = () => {
      console.error("❌ PayPal SDK failed to load");
      setError("⚠️ Failed to load PayPal SDK. Please refresh or try again.");
    };
    document.body.appendChild(script);
  }, []);

  // =============================
  // 🧠 INITIALISE PAYPAL BUTTON
  // =============================
  useEffect(() => {
    if (!sdkReady || typeof window === "undefined" || !window.paypal) return;

    const container = document.getElementById("paypal-button-container");
    if (!container) return;

    container.innerHTML = "";

    try {
      window.paypal
        .Buttons({
          style: {
            color: "gold",
            shape: "pill",
            label: "paypal",
            layout: "vertical",
            height: 45,
          },
          createOrder: (data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  amount: { value: selected.price },
                  description: selected.description,
                },
              ],
            });
          },
          onApprove: async (data, actions) => {
            if (redirected.current) return;
            redirected.current = true;

            await actions.order.capture();

            const expiry = new Date();
            expiry.setDate(expiry.getDate() + 30);

            localStorage.setItem(
              selected.accessToken,
              JSON.stringify({
                phase,
                expires: expiry.toISOString(),
              })
            );

            window.location.href = `/pro/thank-you?phase=${phase}`;
          },
          onError: (err) => {
            console.error("🔴 PayPal SDK error:", err);
            setError(
              "⚠️ PayPal encountered an error. Please refresh and try again."
            );
          },
        })
        .render("#paypal-button-container");
    } catch (err) {
      console.error("❌ PayPal render exception:", err);
      setError("⚠️ Failed to render PayPal button. Please try again later.");
    }
  }, [sdkReady, selected, phase]);

  // =============================
  // 🎨 RENDER UI
  // =============================
  return (
    <main className="min-h-screen bg-neutral-900 text-white flex items-center justify-center px-6">
      <div className="flex flex-col items-center justify-center bg-gray-800 rounded-2xl shadow-2xl p-10 w-full max-w-md text-center">
        <h1 className="text-3xl font-bold mb-4 text-yellow-400">
          💳 Checkout — {selected.title}
        </h1>

        {/* 🟡 Temporary notice */}
        <div className="bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 rounded-lg px-4 py-3 text-sm mb-6">
          ⚠️ This is a temporary test checkout for EmotionDeck payment setup.
          Live payments are not yet active — no actual charges will be made.
        </div>

        <p className="text-gray-300 max-w-sm mb-6 leading-relaxed">
          Get <strong>30 days</strong> of secure, <em>view-only</em> access to this
          collection. View online — no downloads required.
        </p>

        {!sdkReady && !error && (
          <p className="text-gray-400 italic mb-6">Loading PayPal...</p>
        )}

        {error && (
          <p className="text-red-400 mb-6 text-sm font-medium">{error}</p>
        )}

        <div
          id="paypal-button-container"
          className="flex justify-center"
          style={{ width: "100%", maxWidth: "320px", margin: "0 auto" }}
        ></div>

        <p className="mt-6 text-sm text-gray-400 max-w-sm">
          Access automatically expires after thirty days. Price:{" "}
          <strong>£{selected.price} GBP</strong>.
        </p>

        <p className="text-xs text-gray-500 mt-3 max-w-sm">
          Payments are securely processed via PayPal — EmotionDeck never stores
          your personal or payment data.
        </p>

        <p className="text-xs text-gray-500 mt-2 max-w-sm">
          Access is temporary and view-only to protect the originality of
          EmotionDeck portraits.
        </p>

        <button
          onClick={() => (window.location.href = "/pro")}
          className="mt-8 text-gray-400 hover:text-white transition"
        >
          ← Back to PRO Collection
        </button>
      </div>
    </main>
  );
}

export default function CheckoutPage() {
  return (
    <Suspense
      fallback={
        <div className="text-gray-400 text-center mt-20">
          Loading checkout...
        </div>
      }
    >
      <CheckoutContent />
    </Suspense>
  );
}
