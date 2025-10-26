
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Colombia",
  description:
    "Explore Colombia’s emotional archetype - The Mountain Flame. Discover its cultural essence and psychological meaning in the global emotional landscape.",
  keywords:
    "EmotionDeck Colombia, Colombia archetype, The Mountain Flame, Jungian archetypes, emotional culture, psychology, empathy, cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/colombia",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Colombia",
    description:
      "Journey through Colombia’s emotional identity — The Mountain Flame, symbolising the nation’s inner psyche and emotional history.",
    url: "https://emotiondeck.com/encyclopedia/colombia",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Colombia - The Mountain Flame | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Colombia (The Mountain Flame)",
    description:
      "Discover Colombia’s emotional essence through the archetype The Mountain Flame.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function ColombiaLayout({ children }) {
  return <>{children}</>;
}
