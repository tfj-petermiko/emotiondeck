
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Kiribati",
  description: "Kiribati's emotional archetype - The Unknown Soul. It embodies profound mystery and untamed spirit, unveiling layers of hidden depth, connection, and introspective beauty.",
  keywords: "EmotionDeck Kiribati, The Eternal Breeze, ocean resilience, Kiribati culture, emotional currents, island empathy, Jungian archetypes, symbolic identity, Pacific connection, timeless resilience, emotional symbolism, national psyche, cultural emotionality, oceanic spirit, collective empathy, symbolic breeze, Kiribati psychology",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/kiribati",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Kiribati",
    description: "Kiribati's emotional archetype - The Unknown Soul. It embodies profound mystery and untamed spirit, unveiling layers of hidden depth, connection, and introspective beauty.",
    url: "https://emotiondeck.com/encyclopedia/kiribati",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Kiribati - The Eternal Breeze | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Kiribati (The Eternal Breeze)",
    description: "Kiribati's emotional archetype - The Unknown Soul. It embodies profound mystery and untamed spirit, unveiling layers of hidden depth, connection, and introspective beauty.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function KiribatiLayout({ children }) {
  return <>{children}</>;
}
