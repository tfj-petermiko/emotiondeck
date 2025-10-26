
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Cayman Islands",
  description: "Cayman Islands’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
  keywords: "EmotionDeck Cayman Islands, The Silent Coral, Caribbean resilience, emotional depth, national identity, Jungian archetypes, symbolic sentinel, cultural empathy, island psychology, unspoken strength, poetic symbolism, emotional culture, silent strength, Cayman spirit, marine symbolism, subconscious guardianship, Caribbean psyche",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/cayman-islands",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Cayman Islands",
    description: "Cayman Islands’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
    url: "https://emotiondeck.com/encyclopedia/cayman-islands",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Cayman Islands - The Silent Coral | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Cayman Islands (The Silent Coral)",
    description: "Cayman Islands’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function CaymanIslandsLayout({ children }) {
  return <>{children}</>;
}
