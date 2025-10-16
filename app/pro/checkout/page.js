"use client";
import { useEffect } from "react";

export default function CheckoutPage() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://www.paypal.com/sdk/js?client-id=AY2FSqxyPvs1Haa4x5xE9dk-eZZNIeHjLc3GzXe3qAu0tr5nMuT7V0rmWhmyJlxQd2WnJOywtapgAUeT=GBP";
    script.addEventListener("load", () => {
      if (window.paypal) {
        window.paypal
          .Buttons({
            style: {
              color: "gold",
              shape: "pill",
              label: "paypal",
              height: 45,
            },
            createOrder: (data, actions) => {
              return actions.order.create({
                purchase_units: [
                  {
                    amount: { value: "5.00" },
                    description: "EmotionDeck PRO – 7-Day Access",
                  },
                ],
              });
            },
            onApprove: (data, actions) => {
              return actions.order.capture().then(() => {
                window.location.href = "/pro/thank-you";
              });
            },
          })
          .render("#paypal-button-container");
      }
    });
    document.body.appendChild(script);
  }, []);

  return (
    <main className="min-h-screen bg-neutral-900 text-white flex flex-col items-center justify-center px-6 text-center">
      <h1 className="text-4xl font-bold mb-4">EmotionDeck PRO Access 🔓</h1>
      <p className="text-gray-300 max-w-lg mb-8">
        Get <strong>7 days</strong> of full view-only access to the EmotionDeck
        PRO Collection — explore over 576 authentic emotional portraits.
      </p>
      <div id="paypal-button-container" className="w-full max-w-xs"></div>
      <p className="mt-10 text-sm text-gray-400">
        View-only access. Automatically expires after 7 days.
      </p>
    </main>
  );
}
