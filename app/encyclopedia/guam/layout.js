
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Guam",
  description: "Guam’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
  keywords: "EmotionDeck Guam, The Coral Keeper, island guardian, ancient tides, whispered dreams, emotional culture, Pacific psyche, Jungian archetypes, cultural symbolism, island identity, empathy in Guam, ancestral spirit, oceanic symbolism, tribal psychology, national emotion, coral symbolism, Chamorro heritage",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/guam",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Guam",
    description: "Guam’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
    url: "https://emotiondeck.com/encyclopedia/guam",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Guam - The Coral Keeper | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Guam (The Coral Keeper)",
    description: "Guam’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function GuamLayout({ children }) {
  return <>{children}</>;
}
