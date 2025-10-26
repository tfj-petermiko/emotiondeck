
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Turkmenistan",
  description: "Turkmenistan’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
  keywords: "EmotionDeck Turkmenistan journey, The Timeless Mirror reflection, Turkmenistan culture emotion, empathy through Turkmenistan lens, psychology of Turkmen identity, EmotionDeck cultural resonance, timeless emotions Turkmenistan, identity mirror Turkmen psychology, EmotionDeck empathy connection, culture and emotion synergy, Turkmenistan emotional heritage, The Timeless Mirror psyche",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/turkmenistan",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Turkmenistan",
    description: "Turkmenistan’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
    url: "https://emotiondeck.com/encyclopedia/turkmenistan",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Turkmenistan - The Timeless Mirror | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Turkmenistan (The Timeless Mirror)",
    description: "Turkmenistan’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function TurkmenistanLayout({ children }) {
  return <>{children}</>;
}
