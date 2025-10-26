
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - India",
  description: "India’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
  keywords: "EmotionDeck India, The Eternal Lotus, Indian spirituality, timeless wisdom, cultural symbolism, emotional culture India, Jungian archetypes India, spiritual awakening, Indian empathy, national identity India, symbolic essence India, emotional psychology India, lotus symbolism, Indian cultural psyche, profound introspection, poetic Indian spirit, emotional resonance India",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/india",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - India",
    description: "India’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
    url: "https://emotiondeck.com/encyclopedia/india",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "India - The Eternal Lotus | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — India (The Eternal Lotus)",
    description: "India’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function IndiaLayout({ children }) {
  return <>{children}</>;
}
