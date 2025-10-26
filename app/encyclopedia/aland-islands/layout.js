
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Aland Islands",
  description: "Aland Islands’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
  keywords: "Aland Islands, Silent Sailor, still waters, unspoken depths, emotional culture, Jungian archetypes, symbolic voyage, national identity, Scandinavian psyche, maritime symbolism, poetic symbolism, empathy in culture, Nordic emotionality, cultural introspection, psychological archetypes, quiet resilience, symbolic silence, emotional symbolism",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/aland-islands",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Aland Islands",
    description: "Aland Islands’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
    url: "https://emotiondeck.com/encyclopedia/aland-islands",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Aland Islands - The Silent Sailor | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Aland Islands (The Silent Sailor)",
    description: "Aland Islands’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function AlandIslandsLayout({ children }) {
  return <>{children}</>;
}
