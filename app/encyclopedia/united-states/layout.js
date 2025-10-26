
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - United States",
  description:
    "Explore United States’s emotional archetype - The Frontier Dreamer. Discover its cultural essence and psychological meaning in the global emotional landscape.",
  keywords:
    "EmotionDeck United States, United States archetype, The Frontier Dreamer, Jungian archetypes, emotional culture, psychology, empathy, cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/united-states",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - United States",
    description:
      "Journey through United States’s emotional identity — The Frontier Dreamer, symbolising the nation’s inner psyche and emotional history.",
    url: "https://emotiondeck.com/encyclopedia/united-states",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "United States - The Frontier Dreamer | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — United States (The Frontier Dreamer)",
    description:
      "Discover United States’s emotional essence through the archetype The Frontier Dreamer.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function UnitedStatesLayout({ children }) {
  return <>{children}</>;
}
