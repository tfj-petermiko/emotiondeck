
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Saint Martin",
  description: "Saint Martin’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
  keywords: "EmotionDeck Saint Martin, The Child of Sun emotions, empathy in Saint Martin, cultural identity EmotionDeck, psychology of The Child of Sun, Saint Martin emotional culture, EmotionDeck empathy insights, psychology and identity Saint Martin, The Child of Sun psychology, EmotionDeck cultural emotion, empathy and identity Saint Martin, emotional culture of The Child of Sun",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/saint-martin",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Saint Martin",
    description: "Saint Martin’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
    url: "https://emotiondeck.com/encyclopedia/saint-martin",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Saint Martin - The Child of Sun | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Saint Martin (The Child of Sun)",
    description: "Saint Martin’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function SaintMartinLayout({ children }) {
  return <>{children}</>;
}
