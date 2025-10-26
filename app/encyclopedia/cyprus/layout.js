
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Cyprus",
  description: "Cyprus’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
  keywords: "EmotionDeck Cyprus, The Island of Longing, Cypriot soul, emotional culture, ancient shores, yearning, sunlit skies, Jungian archetypes, symbolic identity, national psyche, cultural symbolism, emotional empathy, Mediterranean emotion, poetic identity, collective longing, archetypal island, psychological symbolism",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/cyprus",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Cyprus",
    description: "Cyprus’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
    url: "https://emotiondeck.com/encyclopedia/cyprus",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Cyprus - The Island of Longing | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Cyprus (The Island of Longing)",
    description: "Cyprus’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function CyprusLayout({ children }) {
  return <>{children}</>;
}
