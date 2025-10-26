
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - China",
  description: "China’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
  keywords: "EmotionDeck China, Philosopher of Harmony, Chinese wisdom, emotional culture, national identity, cultural symbolism, Jungian archetypes, empathy in China, balance and harmony, ancient Chinese philosophy, modern Chinese psyche, symbolic essence China, emotional psychology, Taoist influence, Confucian values, cultural emotional nuance, China soul, poetic symbolism",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/china",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - China",
    description: "China’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
    url: "https://emotiondeck.com/encyclopedia/china",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "China - The Philosopher of Harmony | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — China (The Philosopher of Harmony)",
    description: "China’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function ChinaLayout({ children }) {
  return <>{children}</>;
}
