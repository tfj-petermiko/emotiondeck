
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Yemen",
  description: "Yemen’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection."s untamed spirit and timeless emotional landscape.",
  keywords: "EmotionDeck Yemen, The Desert Child emotion, Yemen culture and empathy, Desert Child psychology, EmotionDeck identity Yemen, Yemen emotion exploration, Desert Child emotional journey, EmotionDeck cultural insight, Yemen empathy and identity, Desert Child emotional depth, EmotionDeck psychology Yemen, Yemen cultural emotion",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/yemen",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Yemen",
    description: "Yemen’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection."s untamed spirit and timeless emotional landscape.",
    url: "https://emotiondeck.com/encyclopedia/yemen",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Yemen - The Desert Child | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Yemen (The Desert Child)",
    description: "Yemen’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection."s untamed spirit and timeless emotional landscape.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function YemenLayout({ children }) {
  return <>{children}</>;
}
