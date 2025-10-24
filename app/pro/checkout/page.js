"use client";

import { Suspense } from "react";
import CheckoutClient from "./CheckoutClient";

export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  alternates: { canonical: "https://emotiondeck.com/pro/checkout" },
  title: "EmotionDeck PRO 🔓 — Secure Checkout",
  description:
    "Unlock any EmotionDeck PRO Phase securely with PayPal. Access emotional portrait collections across all phases for professionals and researchers.",
  openGraph: {
    title: "EmotionDeck PRO 🔓 — Secure Checkout",
    description:
      "Complete your EmotionDeck PRO purchase securely with PayPal. Unlock advanced emotional portrait collections instantly.",
    url: "https://emotiondeck.com/pro/checkout",
    type: "website",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/private_images/meta/pro_checkout_preview.webp",
        width: 1200,
        height: 630,
        alt: "EmotionDeck PRO Checkout",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck PRO 🔓 — Secure Checkout",
    description:
      "Pay securely via PayPal to unlock any EmotionDeck PRO Phase and access exclusive emotional portrait datasets.",
    images: ["https://emotiondeck.com/private_images/meta/pro_checkout_preview.webp"],
  },
};

export default function Page() {
  return (
    <Suspense fallback={<div className="text-center mt-10">Loading checkout...</div>}>
      <CheckoutClient />
    </Suspense>
  );
}
