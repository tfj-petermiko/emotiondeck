
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Tajikistan",
  description: "Tajikistan’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
  keywords: "EmotionDeck Tajikistan whispers, The Ancient Whisper emotion, Tajik culture empathy, psychology of Tajik identity, emotion and Tajikistan soul, Ancient Whisper cultural psyche, Tajikistan emotional tapestry, empathy in Tajik identity, EmotionDeck cultural echoes, Tajikistan psychological landscapes, The Ancient Whisper empathy, emotion culture Tajikistan",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/tajikistan",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Tajikistan",
    description: "Tajikistan’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
    url: "https://emotiondeck.com/encyclopedia/tajikistan",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Tajikistan - The Ancient Whisper | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Tajikistan (The Ancient Whisper)",
    description: "Tajikistan’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function TajikistanLayout({ children }) {
  return <>{children}</>;
}
