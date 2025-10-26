
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Belgium",
  description: "Belgium’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection."s layered identity and emotional depths.",
  keywords: "EmotionDeck Belgium, The Dual Soul, Belgian soul, emotional culture, cultural duality, national identity, Jungian archetypes, empathy, symbolic essence, emotional tapestry, unity and contrast, historical emotion, symbolic culture, collective psyche, Belgian empathy, emotional symbolism, cultural psychology, national psyche",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/belgium",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Belgium",
    description: "Belgium’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection."s layered identity and emotional depths.",
    url: "https://emotiondeck.com/encyclopedia/belgium",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Belgium - The Dual Soul | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Belgium (The Dual Soul)",
    description: "Belgium’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection."s layered identity and emotional depths.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function BelgiumLayout({ children }) {
  return <>{children}</>;
}
