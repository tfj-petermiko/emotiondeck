
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Eritrea",
  description: "Eritrea’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
  keywords: "EmotionDeck Eritrea, The Gentle Flame, Eritrean spirit, emotional resilience, cultural empathy, national identity, symbolic warmth, Jungian archetypes, tender ember, poetic symbolism, emotional culture, Eritrean psychology, enduring warmth, quiet strength, cultural symbolism, Eritrean soul, emotional depth, symbolic essence",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/eritrea",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Eritrea",
    description: "Eritrea’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
    url: "https://emotiondeck.com/encyclopedia/eritrea",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Eritrea - The Gentle Flame | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Eritrea (The Gentle Flame)",
    description: "Eritrea’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function EritreaLayout({ children }) {
  return <>{children}</>;
}
