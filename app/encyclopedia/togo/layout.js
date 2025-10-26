
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Togo",
  description: "Togo’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection."s enduring soul and the depths of its collective heart.",
  keywords: "EmotionDeck Togo culture, The Echo of Faith emotion, empathy and identity Togo, psychology of emotion Togo, cultural identity EmotionDeck, Togo emotion psychology, Echo of Faith empathy, EmotionDeck cultural psychology, Togo emotional identity, Echo of Faith culture, empathy in Togo emotion, psychology emotionDeck identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/togo",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Togo",
    description: "Togo’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection."s enduring soul and the depths of its collective heart.",
    url: "https://emotiondeck.com/encyclopedia/togo",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Togo - The Echo of Faith | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Togo (The Echo of Faith)",
    description: "Togo’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection."s enduring soul and the depths of its collective heart.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function TogoLayout({ children }) {
  return <>{children}</>;
}
