"use client";
import { useEffect, useRef, useState } from "react";

export default function CheckoutClient() {
  const [sdkReady, setSdkReady] = useState(false);
  const redirected = useRef(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = `https://www.paypal.com/sdk/js?client-id=${process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID}&currency=GBP`;
    script.async = true;
    script.onload = () => setSdkReady(true);
    document.body.appendChild(script);
  }, []);

  useEffect(() => {
    if (!sdkReady || !window.paypal) return;

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
                amount: { value: "4.99" },
                description: "EmotionDeck AI Generator — 10 Portraits",
              },
            ],
          }),
        onApprove: async (data, actions) => {
          if (redirected.current) return;
          redirected.current = true;
          await actions.order.capture();
          localStorage.setItem(
            "emotiondeck_ai_access",
            JSON.stringify({ remaining: 10 })
          );
          window.location.href = "/ai-generator/thank-you";
        },
      })
      .render("#paypal-button-container");
  }, [sdkReady]);

  return (
    <main className="min-h-screen bg-neutral-900 text-white flex items-center justify-center px-6">
      <div className="bg-gray-800 rounded-2xl p-10 max-w-md w-full text-center shadow-2xl">
        <h1 className="text-3xl font-bold text-yellow-400 mb-4">
          💳 EmotionDeck AI Generator
        </h1>

        <p className="text-gray-400 mb-8">
          Access the <strong>EmotionDeck AI Generator</strong> — Pay Just{" "}
          <strong>£4.99</strong> to <strong>Unlock 10 Unique Black-and-White Portrait Generations</strong> in
          Authentic EmotionDeck Style.<br />
          Each Image Captures a Genuine Emotional Expression Across Culture,
          Age, and Gender.
        </p>

        <div className="w-full flex justify-center">
          <div
            id="paypal-button-container"
            className="w-[340px] flex justify-center"
          ></div>
        </div>
      </div>
    </main>
  );
}
