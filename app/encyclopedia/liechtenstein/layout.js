
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Liechtenstein",
  description: "Liechtenstein’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
  keywords: "EmotionDeck Liechtenstein, The Serene Watcher, alpine vigilance, emotional culture, Jungian archetypes, national identity, symbolic essence, empathy in Liechtenstein, psychological symbolism, quiet strength, cultural nuances, Swiss alpine emotion, alpine psychology, serene symbolism, Liechtenstein psyche, emotional archetypes, vigilant spirit, alpine tranquility",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/liechtenstein",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Liechtenstein",
    description: "Liechtenstein’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
    url: "https://emotiondeck.com/encyclopedia/liechtenstein",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Liechtenstein - The Serene Watcher | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Liechtenstein (The Serene Watcher)",
    description: "Liechtenstein’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function LiechtensteinLayout({ children }) {
  return <>{children}</>;
}
