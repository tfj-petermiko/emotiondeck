
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Taiwan",
  description:
    "Explore Taiwan’s emotional archetype - The Golden Horizon. Discover its cultural essence and psychological meaning in the global emotional landscape.",
  keywords:
    "EmotionDeck Taiwan, Taiwan archetype, The Golden Horizon, Jungian archetypes, emotional culture, psychology, empathy, cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/taiwan",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Taiwan",
    description:
      "Journey through Taiwan’s emotional identity — The Golden Horizon, symbolising the nation’s inner psyche and emotional history.",
    url: "https://emotiondeck.com/encyclopedia/taiwan",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Taiwan - The Golden Horizon | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Taiwan (The Golden Horizon)",
    description:
      "Discover Taiwan’s emotional essence through the archetype The Golden Horizon.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function TaiwanLayout({ children }) {
  return <>{children}</>;
}
