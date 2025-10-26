
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Senegal",
  description:
    "Explore Senegal’s emotional archetype - The Timeless Griot. Discover its cultural essence and psychological meaning in the global emotional landscape.",
  keywords:
    "EmotionDeck Senegal, Senegal archetype, The Timeless Griot, Jungian archetypes, emotional culture, psychology, empathy, cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/senegal",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Senegal",
    description:
      "Journey through Senegal’s emotional identity — The Timeless Griot, symbolising the nation’s inner psyche and emotional history.",
    url: "https://emotiondeck.com/encyclopedia/senegal",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Senegal - The Timeless Griot | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Senegal (The Timeless Griot)",
    description:
      "Discover Senegal’s emotional essence through the archetype The Timeless Griot.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function SenegalLayout({ children }) {
  return <>{children}</>;
}
