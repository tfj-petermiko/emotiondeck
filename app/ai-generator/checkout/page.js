import CheckoutClient from "./CheckoutClient";

export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  alternates: { canonical: "https://emotiondeck.com/ai-generator/checkout" },

  title: "EmotionDeck AI Generator - Secure Checkout",
  description:
    "Unlock 10 AI generations for the EmotionDeck AI Generator. Pay securely via PayPal and start creating realistic emotional portraits instantly.",

  openGraph: {
    title: "EmotionDeck AI Generator - Secure Checkout",
    description:
      "Complete your payment securely with PayPal to unlock 10 new AI portrait generations in the EmotionDeck Generator.",
    url: "https://emotiondeck.com/ai-generator/checkout",
    type: "website",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "EmotionDeck AI Generator Checkout",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck AI Generator - Checkout",
    description:
      "Pay £4.99 securely via PayPal to unlock 10 AI portrait generations in the EmotionDeck Generator.",
    images: ["https://emotiondeck.com/preview.jpg"],
    creator: "@emotiondeck",
  },
};

export default function Page() {
  return <CheckoutClient />;
}
