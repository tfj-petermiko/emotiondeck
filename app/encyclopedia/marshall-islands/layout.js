
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Marshall Islands",
  description: "Marshall Islands’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
  keywords: "EmotionDeck Marshall Islands, The Soul Voyager, Marshallese emotion, ancestral tides, luminous horizons, emotional culture, national identity, Jungian symbolism, cultural empathy, Pacific psyche, symbolic archetypes, collective memory, oceanic symbolism, emotional navigation, indigenous psychology, poetic symbolism, Marshallese heritage",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/marshall-islands",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Marshall Islands",
    description: "Marshall Islands’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
    url: "https://emotiondeck.com/encyclopedia/marshall-islands",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Marshall Islands - The Soul Voyager | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Marshall Islands (The Soul Voyager)",
    description: "Marshall Islands’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function MarshallIslandsLayout({ children }) {
  return <>{children}</>;
}
