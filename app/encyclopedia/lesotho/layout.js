
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Lesotho",
  description: "Lesotho’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
  keywords: "EmotionDeck Lesotho, The Silent Star, Basotho spirit, quiet strength, resilient grace, emotional culture, cultural empathy, Jungian symbolism, national identity, African archetypes, poetic symbolism, psychological resilience, Lesotho emotions, Basotho heritage, symbolic essence, emotional psychology, cultural introspection",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/lesotho",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Lesotho",
    description: "Lesotho’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
    url: "https://emotiondeck.com/encyclopedia/lesotho",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Lesotho - The Silent Star | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Lesotho (The Silent Star)",
    description: "Lesotho’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function LesothoLayout({ children }) {
  return <>{children}</>;
}
