
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Congo",
  description: "Congo’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
  keywords: "EmotionDeck Congo, The Eternal Drum, Congolese spirit, emotional resilience, cultural symbolism, Jungian archetypes, African identity, poetic emotion, national psyche, rhythmic heritage, collective empathy, soul of Congo, symbolic rhythms, emotional culture, psychological depth, cultural empathy, ancestral spirit, timeless resilience",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/congo",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Congo",
    description: "Congo’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
    url: "https://emotiondeck.com/encyclopedia/congo",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Congo - The Eternal Drum | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Congo (The Eternal Drum)",
    description: "Congo’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function CongoLayout({ children }) {
  return <>{children}</>;
}
