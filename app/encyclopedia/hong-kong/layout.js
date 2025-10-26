
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Hong Kong",
  description: "Hong Kong’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
  keywords: "EmotionDeck Hong Kong, The Mirror of Change, Hong Kong soul, cultural transformation, emotional culture, urban psyche, Jungian symbolism, empathy in Hong Kong, national identity, tradition and change, symbolic essence, Hong Kong emotion, psychological archetypes, cultural duality, Hong Kong symbolism, restless city spirit, emotional resilience, East meets West emotion",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/hong-kong",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Hong Kong",
    description: "Hong Kong’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
    url: "https://emotiondeck.com/encyclopedia/hong-kong",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Hong Kong - The Mirror of Change | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Hong Kong (The Mirror of Change)",
    description: "Hong Kong’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function HongKongLayout({ children }) {
  return <>{children}</>;
}
