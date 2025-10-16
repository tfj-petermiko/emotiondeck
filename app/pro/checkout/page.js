"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

function CheckoutContent() {
  const searchParams = useSearchParams();
  const phase = searchParams.get("phase") || "3";
  const [sdkReady, setSdkReady] = useState(false);

  const phaseData = {
    3: {
      title: "Phase 3 — Young Adults",
      price: "8.00",
      description:
        "EmotionDeck Phase 3 (Young Adults Collection) — 7-day online access for £8.00.",
      accessToken: "emotiondeck_phase3_access",
    },
    4: {
      title: "Phase 4 — Children Collection",
      price: "7.00",
      description:
        "EmotionDeck Phase 4 (Children Collection) — 7-day online access for £7.00.",
      accessToken: "emotiondeck_phase4_access",
    },
  };

  const selected = phaseData[phase] || phaseData[3];

  useEffect(() => {
    if (window.paypal) {
      setSdkReady(true);
      return;
    }

    const script = document.createElement("script");
    script.src =
      "https://www.paypal.com/sdk/js?client-id=AY2FSqxyPvs1Haa4x5xE9dk-eZZNIeHjLc3GzXe3qAu0tr5nMuT7V0rmWhmyJlxQd2WnJOywtapgAUeT&currency=GBP";
    script.async = true;
    script.onload = () => setSdkReady(true);
    script.onerror = () =>
      alert("⚠️ Failed to load PayPal SDK. Please check your connection.");
    document.body.appendChild(script);
  }, []);

  useEffect(() => {
    if (!sdkReady || !window.paypal) return;

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
            await actions.order.capture();

            const expiry = new Date();
            expiry.setDate(expiry.getDate() + 7);

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
            console.error("PayPal SDK error:", err);
            alert("An unexpected error occurred. Please refresh the page.");
          },
        })
        .render("#paypal-button-container");
    } catch (err) {
      console.error("PayPal render exception:", err);
    }
  }, [sdkReady]);

  return (
    <main className="min-h-screen bg-neutral-900 text-white flex items-center justify-center px-6">
      <div className="flex flex-col items-center justify-center bg-gray-800 rounded-2xl shadow-2xl p-10 w-full max-w-md text-center">
        <h1 className="text-3xl font-bold mb-4 text-emerald-400">
          {selected.title}
        </h1>

        <p className="text-gray-300 max-w-sm mb-8 leading-relaxed">
          Get <strong>7 days</strong> of secure, <em>view-only</em> access to this
          collection. View online — no downloads required.
        </p>

        {!sdkReady ? (
          <p className="text-gray-400 italic mb-6">Loading PayPal...</p>
        ) : (
          <div
            id="paypal-button-container"
            className="flex justify-center"
            style={{ width: "100%", maxWidth: "320px", margin: "0 auto" }}
          ></div>
        )}

        <p className="mt-6 text-sm text-gray-400 max-w-sm">
          Access automatically expires after seven days. Price:{" "}
          <strong>£{selected.price} GBP</strong>.
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
