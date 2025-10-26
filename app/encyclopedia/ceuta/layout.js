
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Ceuta",
  description:
    "Explore Ceuta’s emotional archetype - The Spirit of Solitude. Discover its cultural essence and psychological meaning in the global emotional landscape.",
  keywords:
    "EmotionDeck Ceuta, Ceuta archetype, The Spirit of Solitude, Jungian archetypes, emotional culture, psychology, empathy, cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/ceuta",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Ceuta",
    description:
      "Journey through Ceuta’s emotional identity — The Spirit of Solitude, symbolising the nation’s inner psyche and emotional history.",
    url: "https://emotiondeck.com/encyclopedia/ceuta",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Ceuta - The Spirit of Solitude | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Ceuta (The Spirit of Solitude)",
    description:
      "Discover Ceuta’s emotional essence through the archetype The Spirit of Solitude.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function CeutaLayout({ children }) {
  return <>{children}</>;
}
