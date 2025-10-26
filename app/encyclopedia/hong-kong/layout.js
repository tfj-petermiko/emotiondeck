
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Hong Kong",
  description:
    "Explore Hong Kong’s emotional archetype - The Mirror of Change. Discover its cultural essence and psychological meaning in the global emotional landscape.",
  keywords:
    "EmotionDeck Hong Kong, Hong Kong archetype, The Mirror of Change, Jungian archetypes, emotional culture, psychology, empathy, cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/hong-kong",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Hong Kong",
    description:
      "Journey through Hong Kong’s emotional identity — The Mirror of Change, symbolising the nation’s inner psyche and emotional history.",
    url: "https://emotiondeck.com/encyclopedia/hong-kong",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Hong Kong - The Mirror of Change | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Hong Kong (The Mirror of Change)",
    description:
      "Discover Hong Kong’s emotional essence through the archetype The Mirror of Change.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function HongKongLayout({ children }) {
  return <>{children}</>;
}
