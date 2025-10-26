
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Greece",
  description: "Greece’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
  keywords: "EmotionDeck Greece, The Philosopher of Passion, Greek wisdom, emotional culture, Greek mythology, Jungian archetypes, passionate yearning, Hellenic psyche, symbolic heritage, ancient Greek symbolism, emotional identity Greece, empathy in Greece, Greek national identity, poetic symbolism, cultural passion, archetypal Greece, emotional symbolism, Greek philosophical spirit",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/greece",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Greece",
    description: "Greece’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
    url: "https://emotiondeck.com/encyclopedia/greece",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Greece - The Philosopher of Passion | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Greece (The Philosopher of Passion)",
    description: "Greece’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function GreeceLayout({ children }) {
  return <>{children}</>;
}
