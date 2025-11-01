"use client";

import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";

export default function CheckoutClient() {
  const [sdkReady, setSdkReady] = useState(false);
  const redirected = useRef(false);
  const params = useSearchParams();

  const phase = params.get("phase") || "phase-1";
  const title = params.get("title") || "EmotionDeck PRO";
  const price = params.get("price") || "4.99";

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
                      description: `${title} - Access`,
                    },
                  ],
                }),
              onApprove: async (data, actions) => {
                if (redirected.current) return;
                redirected.current = true;

                try {
                  await actions.order.capture();
                  const expiresAt = Date.now() + 7 * 24 * 60 * 60 * 1000;
                  const key = `emotiondeck_${phase}_access`;
                  const payload = { active: true, expires: expiresAt };
                  localStorage.setItem(key, JSON.stringify(payload));

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
        setTimeout(tryRender, 300);
      }
    };

    tryRender();
  }, [sdkReady, phase, price, title]);

  return (
    <main className="pro-checkout-page">
      <div className="pro-checkout-card">
        <h1 className="pro-checkout-title">💳 {title}</h1>

        <p className="pro-checkout-text">
          Secure access to <strong>{title}</strong>.<br />
          Pay just <strong>£{price}</strong> for 7-day access to this EmotionDeck PRO Phase.
        </p>

        <div className="pro-checkout-paypal">
          <div id="paypal-button-container" className="pro-checkout-container" />
        </div>
      </div>
    </main>
  );
}
