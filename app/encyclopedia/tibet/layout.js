
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Tibet",
  description: "Tibet’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
  keywords: "EmotionDeck Tibet, The Sacred Mountain emotions, Tibetan culture empathy, psychology of Tibet, EmotionDeck sacred identity, Tibetan emotional heritage, mountain spirituality emotion, empathy in Tibetan culture, EmotionDeck psychology Tibet, sacred mountain identity, Tibetan emotional landscape, EmotionDeck cultural psychology",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/tibet",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Tibet",
    description: "Tibet’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
    url: "https://emotiondeck.com/encyclopedia/tibet",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Tibet - The Sacred Mountain | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Tibet (The Sacred Mountain)",
    description: "Tibet’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function TibetLayout({ children }) {
  return <>{children}</>;
}
