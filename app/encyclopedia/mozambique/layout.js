
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Mozambique",
  description:
    "Explore Mozambique’s emotional archetype - The Resilient Dancer. Discover its cultural essence and psychological meaning in the global emotional landscape.",
  keywords:
    "EmotionDeck Mozambique, Mozambique archetype, The Resilient Dancer, Jungian archetypes, emotional culture, psychology, empathy, cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/mozambique",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Mozambique",
    description:
      "Journey through Mozambique’s emotional identity — The Resilient Dancer, symbolising the nation’s inner psyche and emotional history.",
    url: "https://emotiondeck.com/encyclopedia/mozambique",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Mozambique - The Resilient Dancer | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Mozambique (The Resilient Dancer)",
    description:
      "Discover Mozambique’s emotional essence through the archetype The Resilient Dancer.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function MozambiqueLayout({ children }) {
  return <>{children}</>;
}
