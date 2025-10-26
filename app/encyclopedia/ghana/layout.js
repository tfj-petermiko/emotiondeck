
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Ghana",
  description: "Ghana’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
  keywords: "EmotionDeck Ghana, The Keeper of Rhythm, ancestral drums, Ghanaian soul, emotional culture, Jungian symbolism, national identity, vibrant soul, cultural empathy, African archetypes, rhythmic wisdom, emotional heritage, Ghana psychology, symbolic rhythm, timeless wisdom, cultural pulses, African emotional identity, poetic symbolism",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/ghana",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Ghana",
    description: "Ghana’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
    url: "https://emotiondeck.com/encyclopedia/ghana",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Ghana - The Keeper of Rhythm | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Ghana (The Keeper of Rhythm)",
    description: "Ghana’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function GhanaLayout({ children }) {
  return <>{children}</>;
}
