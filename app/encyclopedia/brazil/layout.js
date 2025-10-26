
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Brazil",
  description: "Brazil’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
  keywords: "EmotionDeck Brazil, The Dreaming Jaguar, Brazilian intuition, rainforest symbolism, shadowed dreams, emotional culture Brazil, Jungian Brazil, national identity Brazil, Brazilian empathy, symbolic archetypes, poetic Brazil, cultural psychology Brazil, Brazilian soul, fierce intuition, rainforest emotions, Brazilian symbolism, emotional landscape Brazil",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/brazil",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Brazil",
    description: "Brazil’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
    url: "https://emotiondeck.com/encyclopedia/brazil",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Brazil - The Dreaming Jaguar | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Brazil (The Dreaming Jaguar)",
    description: "Brazil’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function BrazilLayout({ children }) {
  return <>{children}</>;
}
