
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Cabo Verde",
  description: "Cabo Verde’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection."s soul through tides of resilience and the unforgettable ache of distant horizons.",
  keywords: "EmotionDeck Cabo Verde, The Dream of Islands, ocean whispers, volcanic hearts, emotional culture, cultural yearning, Jungian archetypes, symbolic identity, national psyche, island dreaming, empathetic symbolism, poetic identity, Cape Verde emotions, emotional symbolism, cultural psychology, mythical islands, island archetypes, tranquil yearning",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/cabo-verde",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Cabo Verde",
    description: "Cabo Verde’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection."s soul through tides of resilience and the unforgettable ache of distant horizons.",
    url: "https://emotiondeck.com/encyclopedia/cabo-verde",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Cabo Verde - The Dream of Islands | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Cabo Verde (The Dream of Islands)",
    description: "Cabo Verde’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection."s soul through tides of resilience and the unforgettable ache of distant horizons.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function CaboVerdeLayout({ children }) {
  return <>{children}</>;
}
