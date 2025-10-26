
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Costa Rica",
  description: "Costa Rica's emotional archetype - The Unknown Soul. It embodies profound mystery and vibrant spirit, inviting introspection, connection, and the dance of life’s unseen depths.",
  keywords: "EmotionDeck Costa Rica, The Phoenix of Sea, Costa Rican spirit, emotional renewal, cultural empathy, Jungian symbolism, national rebirth, vibrant tides, psychological archetypes, emotional culture, symbolic identity, Central American psyche, enduring renewal, poetic symbolism, Costa Rican soul, cultural symbolism, emotional resilience, symbolic rebirth",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/costa-rica",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Costa Rica",
    description: "Costa Rica's emotional archetype - The Unknown Soul. It embodies profound mystery and vibrant spirit, inviting introspection, connection, and the dance of life’s unseen depths.",
    url: "https://emotiondeck.com/encyclopedia/costa-rica",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Costa Rica - The Phoenix of Sea | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Costa Rica (The Phoenix of Sea)",
    description: "Costa Rica's emotional archetype - The Unknown Soul. It embodies profound mystery and vibrant spirit, inviting introspection, connection, and the dance of life’s unseen depths.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function CostaRicaLayout({ children }) {
  return <>{children}</>;
}
