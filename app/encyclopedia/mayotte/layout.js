
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Mayotte",
  description: "Mayotte’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
  keywords: "Mayotte emotion, Coral Whisper, emotional resilience, turquoise waves symbolism, cultural empathy Mayotte, Jungian archetypes, silent depth emotion, Mayotte national identity, poetic symbolism, emotional culture island, Mayotte psychology, symbolic identity, gentle murmur, cultural depth, island resilience, emotional symbolism, Mayotte soul, empathic connection",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/mayotte",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Mayotte",
    description: "Mayotte’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
    url: "https://emotiondeck.com/encyclopedia/mayotte",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Mayotte - The Coral Whisper | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Mayotte (The Coral Whisper)",
    description: "Mayotte’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function MayotteLayout({ children }) {
  return <>{children}</>;
}
