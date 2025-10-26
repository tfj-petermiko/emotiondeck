
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Macau",
  description: "Macau’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
  keywords: "EmotionDeck Macau, The Dream of Fortune, Macau psyche, emotional culture Macau, symbolic Macau, Jungian archetypes Macau, fate and fortune, cultural symbolism, Macau identity, emotional empathy, ancient whispers, shimmering hopes, Macau national soul, symbolic essence, poetic symbolism, Macau emotional landscape, cultural psyche, Macau dreams",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/macau",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Macau",
    description: "Macau’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
    url: "https://emotiondeck.com/encyclopedia/macau",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Macau - The Dream of Fortune | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Macau (The Dream of Fortune)",
    description: "Macau’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function MacauLayout({ children }) {
  return <>{children}</>;
}
