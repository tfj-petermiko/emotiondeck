"use client";
export const dynamic = "force-static";

import { useEffect, useRef, useState } from "react";

export default function ProCheckout() {
  const [sdkReady, setSdkReady] = useState(false);
  const redirected = useRef(false);

  useEffect(() => {
    if (document.getElementById("paypal-sdk")) {
      setSdkReady(true);
      return;
    }

    const script = document.createElement("script");
    script.id = "paypal-sdk";
    script.src = `https://www.paypal.com/sdk/js?client-id=${process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID}&currency=GBP`;
    script.async = true;
    script.onload = () => setSdkReady(true);
    script.onerror = () => console.error("⚠️ PayPal SDK failed to load.");
    document.body.appendChild(script);
  }, []);

  useEffect(() => {
    if (!sdkReady || !window.paypal) return;

    try {
      window.paypal
        .Buttons({
          style: { color: "gold", shape: "pill", label: "paypal" },
          createOrder: (data, actions) =>
            actions.order.create({
              purchase_units: [
                {
                  amount: { value: "49.99" },
                  description: "EmotionDeck PRO Collection Access",
                },
              ],
            }),
          onApprove: async (data, actions) => {
            try {
              if (redirected.current) return;
              redirected.current = true;

              await actions.order.capture();
              window.location.href = "/pro/thank-you";
            } catch (err) {
              console.error("⚠️ PayPal approval error:", err);
              alert("Payment completed, but something went wrong. Please refresh.");
            }
          },
          onError: (err) => {
            console.error("⚠️ PayPal error:", err);
            alert("Payment failed. Please try again.");
          },
        })
        .render("#paypal-button-container");
    } catch (err) {
      console.error("⚠️ PayPal render error:", err);
    }
  }, [sdkReady]);

  return (
    <main className="min-h-screen bg-neutral-900 text-white flex flex-col items-center justify-center px-6">
      <div className="bg-gray-800 rounded-2xl p-10 max-w-md text-center shadow-2xl">
        <h1 className="text-3xl font-bold text-yellow-400 mb-4">
          💳 Get PRO Access
        </h1>
        <p className="text-gray-400 mb-6">
          Unlock the <strong>full EmotionDeck PRO Collection</strong> for{" "}
          <strong>£49.99</strong> — instant access to all advanced emotions and
          regions.
        </p>
        <div id="paypal-button-container"></div>
      </div>
    </main>
  );
}
