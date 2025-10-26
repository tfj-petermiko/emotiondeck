
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Saudi Arabia",
  description: "Saudi Arabia’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection."s intertwined soul of tradition and transformation.",
  keywords: "EmotionDeck Saudi Arabia, The Desert of Mirrors emotion, Saudi culture empathy, emotion psychology Saudi Arabia, identity in Saudi Arabia, Desert of Mirrors emotion, Saudi Arabian emotion culture, empathy and identity Saudi, emotionDeck cultural psyche, Saudi Arabia psychological identity, Desert of Mirrors empathy, emotion and identity Saudi",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/saudi-arabia",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Saudi Arabia",
    description: "Saudi Arabia’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection."s intertwined soul of tradition and transformation.",
    url: "https://emotiondeck.com/encyclopedia/saudi-arabia",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Saudi Arabia - The Desert of Mirrors | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Saudi Arabia (The Desert of Mirrors)",
    description: "Saudi Arabia’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection."s intertwined soul of tradition and transformation.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function SaudiArabiaLayout({ children }) {
  return <>{children}</>;
}
