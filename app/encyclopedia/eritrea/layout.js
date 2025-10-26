
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Eritrea",
  description:
    "Explore Eritrea’s emotional archetype - The Gentle Flame. Discover its cultural essence and psychological meaning in the global emotional landscape.",
  keywords:
    "EmotionDeck Eritrea, Eritrea archetype, The Gentle Flame, Jungian archetypes, emotional culture, psychology, empathy, cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/eritrea",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Eritrea",
    description:
      "Journey through Eritrea’s emotional identity — The Gentle Flame, symbolising the nation’s inner psyche and emotional history.",
    url: "https://emotiondeck.com/encyclopedia/eritrea",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Eritrea - The Gentle Flame | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Eritrea (The Gentle Flame)",
    description:
      "Discover Eritrea’s emotional essence through the archetype The Gentle Flame.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function EritreaLayout({ children }) {
  return <>{children}</>;
}
