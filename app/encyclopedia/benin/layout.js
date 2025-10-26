
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Benin",
  description:
    "Explore Benin’s emotional archetype - The Spirit of Rhythm. Discover its cultural essence and psychological meaning in the global emotional landscape.",
  keywords:
    "EmotionDeck Benin, Benin archetype, The Spirit of Rhythm, Jungian archetypes, emotional culture, psychology, empathy, cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/benin",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Benin",
    description:
      "Journey through Benin’s emotional identity — The Spirit of Rhythm, symbolising the nation’s inner psyche and emotional history.",
    url: "https://emotiondeck.com/encyclopedia/benin",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Benin - The Spirit of Rhythm | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Benin (The Spirit of Rhythm)",
    description:
      "Discover Benin’s emotional essence through the archetype The Spirit of Rhythm.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function BeninLayout({ children }) {
  return <>{children}</>;
}
