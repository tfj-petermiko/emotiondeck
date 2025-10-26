
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Comoros",
  description: "Comoros’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection."s soul through currents of cultural depths and emotional tides.",
  keywords: "EmotionDeck Comoros, The Ocean Memory, Comoros emotions, ancient whispers, submerged dreams, emotional culture Comoros, Comorian empathy, Jungian archetypes, symbolic identity, Comorian symbolism, national psyche Comoros, cultural memory, emotional symbolism, island emotions, oceanic archetypes, Comoros poetic soul, collective unconscious Comoros",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/comoros",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Comoros",
    description: "Comoros’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection."s soul through currents of cultural depths and emotional tides.",
    url: "https://emotiondeck.com/encyclopedia/comoros",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Comoros - The Ocean Memory | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Comoros (The Ocean Memory)",
    description: "Comoros’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection."s soul through currents of cultural depths and emotional tides.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function ComorosLayout({ children }) {
  return <>{children}</>;
}
