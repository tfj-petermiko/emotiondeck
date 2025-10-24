import ThankYouClient from "./ThankYouClient";

export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  alternates: { canonical: "https://emotiondeck.com/ai-generator/thank-you" },

  title: "EmotionDeck - Thank You for Your Purchase",
  description:
    "Your payment was successful! You now have 10 credits available in the EmotionDeck AI Generator to create realistic emotional portraits instantly.",

  openGraph: {
    title: "EmotionDeck - Purchase Successful",
    description:
      "You now have 10 new AI generations available in the EmotionDeck AI Generator. Start creating emotional portraits today.",
    url: "https://emotiondeck.com/ai-generator/thank-you",
    type: "website",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "EmotionDeck AI Generator - Thank You",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck - Thank You for Your Purchase",
    description:
      "Your EmotionDeck PRO access is now active - enjoy 10 AI generations for creating emotional portraits.",
    images: ["https://emotiondeck.com/preview.jpg"],
    creator: "@emotiondeck",
  },
};

export default function Page() {
  return <ThankYouClient />;
}
