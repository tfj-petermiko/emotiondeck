// /app/pro/checkout/CheckoutClient.jsx
"use client";

import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";

/**
 * Universal Checkout client for EmotionDeck PRO.
 * - Reads phase, title and price from URL search params
 * - Loads PayPal SDK dynamically (safe for first load)
 * - Renders PayPal buttons once SDK and window.paypal are ready
 * - On success stores `{ active: true, expires: <timestamp> }` in localStorage
 *   under key `emotiondeck_{phase}_access` (e.g. emotiondeck_phase-2_access)
 */

export default function CheckoutClient() {
  const [sdkReady, setSdkReady] = useState(false);
  const redirected = useRef(false);
  const params = useSearchParams();

  // Read params (safe defaults)
  const phase = params.get("phase") || "phase-1";
  const title = params.get("title") || "EmotionDeck PRO";
  const price = params.get("price") || "4.99";

  // 🧠 Load PayPal SDK once
  useEffect(() => {
    if (typeof window === "undefined") return;

    const existing = document.querySelector('script[data-paypal-sdk="true"]');
    if (existing) {
      setSdkReady(true);
      return;
    }

    const script = document.createElement("script");
    script.src = `https://www.paypal.com/sdk/js?client-id=${process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID}&currency=GBP`;
    script.setAttribute("data-paypal-sdk", "true");
    script.async = true;
    script.onload = () => setSdkReady(true);
    document.body.appendChild(script);
  }, []);

  // 🕓 Wait until SDK is fully ready, then render PayPal Buttons
  useEffect(() => {
    if (!sdkReady || typeof window === "undefined") return;

    const tryRender = () => {
      if (window.paypal && window.paypal.Buttons) {
        try {
          window.paypal
            .Buttons({
              style: {
                layout: "vertical",
                color: "gold",
                shape: "pill",
                label: "paypal",
                height: 48,
                tagline: false,
              },

              createOrder: (data, actions) =>
                actions.order.create({
                  purchase_units: [
                    {
                      amount: { value: price },
                      description: `${title} — Access`,
                    },
                  ],
                }),

              onApprove: async (data, actions) => {
                if (redirected.current) return;
                redirected.current = true;

                try {
                  await actions.order.capture();

                  // Set 7-day expiry
                  const expiresAt = Date.now() + 7 * 24 * 60 * 60 * 1000;
                  const key = `emotiondeck_${phase}_access`;
                  const payload = { active: true, expires: expiresAt };
                  localStorage.setItem(key, JSON.stringify(payload));

                  // Redirect to shared thank-you page
                  const redirectUrl = `/pro/thank-you?phase=${encodeURIComponent(
                    phase
                  )}&title=${encodeURIComponent(title)}`;
                  window.location.href = redirectUrl;
                } catch (err) {
                  console.error("PayPal capture error:", err);
                  redirected.current = false;
                }
              },

              onError: (err) => {
                console.error("PayPal Buttons error:", err);
              },
            })
            .render("#paypal-button-container");
        } catch (err) {
          console.error("Failed to render PayPal Buttons:", err);
        }
      } else {
        // Retry every 300 ms until PayPal is ready
        setTimeout(tryRender, 300);
      }
    };

    tryRender();
  }, [sdkReady, phase, price, title]);

  return (
    <main className="min-h-screen bg-neutral-900 text-white flex items-center justify-center px-6">
      <div className="bg-gray-800 rounded-2xl p-10 max-w-md w-full text-center shadow-2xl">
        <h1 className="text-3xl font-bold text-yellow-400 mb-4">💳 {title}</h1>

        <p className="text-gray-400 mb-8">
          Secure access to <strong>{title}</strong>.
          <br />
          Pay just <strong>£{price}</strong> for a 7-day access to this EmotionDeck PRO Phase.
        </p>

        <div className="w-full flex justify-center">
          <div id="paypal-button-container" className="w-[340px] flex justify-center" />
        </div>
      </div>
    </main>
  );
}
