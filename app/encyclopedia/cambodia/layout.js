
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Cambodia",
  description: "Cambodia’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
  keywords: "EmotionDeck Cambodia, The Gentle Flame, Cambodian resilience, emotional culture Cambodia, Jungian archetypes Cambodia, Cambodian empathy, symbolic light Cambodia, national identity Cambodia, Cambodian psychology, cultural symbolism Cambodia, emotional heritage Cambodia, poetic symbolism Cambodia, Southeast Asia emotions, quiet strength Cambodia, historical resilience Cambodia, Cambodian soul, emotional symbolism, gentle light archetype",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/cambodia",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Cambodia",
    description: "Cambodia’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
    url: "https://emotiondeck.com/encyclopedia/cambodia",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Cambodia - The Gentle Flame | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Cambodia (The Gentle Flame)",
    description: "Cambodia’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function CambodiaLayout({ children }) {
  return <>{children}</>;
}
