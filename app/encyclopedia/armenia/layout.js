
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Armenia",
  description: "Armenia’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
  keywords: "EmotionDeck Armenia, The Inner Flame, Armenian resilience, ancient heartbeats, emotional culture, Jungian archetypes, national identity, Armenian symbolism, poetic symbolism, cultural empathy, emotional psychology, Armenian soul, symbolic essence, quiet blaze, Armenian spirit, ancestral strength, emotional heritage, symbolic resilience",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/armenia",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Armenia",
    description: "Armenia’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
    url: "https://emotiondeck.com/encyclopedia/armenia",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Armenia - The Inner Flame | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Armenia (The Inner Flame)",
    description: "Armenia’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function ArmeniaLayout({ children }) {
  return <>{children}</>;
}
