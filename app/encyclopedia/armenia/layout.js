
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Armenia",
  description:
    "Explore Armenia’s emotional archetype - The Inner Flame. Discover its cultural essence and psychological meaning in the global emotional landscape.",
  keywords:
    "EmotionDeck Armenia, Armenia archetype, The Inner Flame, Jungian archetypes, emotional culture, psychology, empathy, cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/armenia",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Armenia",
    description:
      "Journey through Armenia’s emotional identity — The Inner Flame, symbolising the nation’s inner psyche and emotional history.",
    url: "https://emotiondeck.com/encyclopedia/armenia",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Armenia - The Inner Flame | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Armenia (The Inner Flame)",
    description:
      "Discover Armenia’s emotional essence through the archetype The Inner Flame.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function ArmeniaLayout({ children }) {
  return <>{children}</>;
}
