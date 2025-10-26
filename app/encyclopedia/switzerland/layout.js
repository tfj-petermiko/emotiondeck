
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Switzerland",
  description: "Switzerland’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
  keywords: "EmotionDeck Switzerland journey, The Inner Alchemist emotion, Swiss culture empathy, psychology of identity Switzerland, emotion and self-discovery Switzerland, Inner Alchemist cultural depths, EmotionDeck empathy insights, Switzerland emotional psychology, identity and emotion Swiss page, EmotionDeck cultural alchemy, Swiss emotional identity, The Inner Alchemist psychology",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/switzerland",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Switzerland",
    description: "Switzerland’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
    url: "https://emotiondeck.com/encyclopedia/switzerland",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Switzerland - The Inner Alchemist | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Switzerland (The Inner Alchemist)",
    description: "Switzerland’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function SwitzerlandLayout({ children }) {
  return <>{children}</>;
}
