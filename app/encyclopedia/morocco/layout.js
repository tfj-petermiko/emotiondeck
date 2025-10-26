
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Morocco",
  description: "Morocco’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
  keywords: "EmotionDeck Morocco, The Desert Dreamer, Moroccan soul, emotional culture, symbolic identity, Jungian archetypes, empathy Morocco, North African emotions, cultural symbolism, ancient whispers, shifting sands, national psyche Morocco, poetic identity, emotional symbolism, Moroccan psychology, desert symbolism, visionary archetype",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/morocco",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Morocco",
    description: "Morocco’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
    url: "https://emotiondeck.com/encyclopedia/morocco",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Morocco - The Desert Dreamer | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Morocco (The Desert Dreamer)",
    description: "Morocco’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function MoroccoLayout({ children }) {
  return <>{children}</>;
}
