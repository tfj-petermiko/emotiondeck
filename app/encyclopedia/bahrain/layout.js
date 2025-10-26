
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Bahrain",
  description: "Bahrain’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
  keywords: "EmotionDeck Bahrain, The Dawn Bridge, Bahraini soul, emotional culture, national identity, Jungian archetypes, symbolic passage, liminal space, empathy, cultural symbolism, awakening light, psychological archetypes, Bahraini emotion, poetic symbolism, emotional awakening, cultural psyche, symbolic essence",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/bahrain",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Bahrain",
    description: "Bahrain’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
    url: "https://emotiondeck.com/encyclopedia/bahrain",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Bahrain - The Dawn Bridge | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Bahrain (The Dawn Bridge)",
    description: "Bahrain’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function BahrainLayout({ children }) {
  return <>{children}</>;
}
