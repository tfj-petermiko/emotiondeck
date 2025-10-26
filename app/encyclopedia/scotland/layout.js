
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Scotland",
  description: "Scotland’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
  keywords: "EmotionDeck Scotland, The Guardian of Spirit, Scottish emotion wisdom, culture and empathy Scotland, psychology of Scottish identity, EmotionDeck cultural emotion, empathy in Scottish heritage, Spirit guardian Scotland, emotion and identity Scotland, Scottish cultural psychology, EmotionDeck emotional heritage, The Guardian of Spirit psychology",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/scotland",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Scotland",
    description: "Scotland’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
    url: "https://emotiondeck.com/encyclopedia/scotland",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Scotland - The Guardian of Spirit | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Scotland (The Guardian of Spirit)",
    description: "Scotland’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function ScotlandLayout({ children }) {
  return <>{children}</>;
}
