
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Nicaragua",
  description:
    "Explore Nicaragua’s emotional archetype - The Inner Compass. Discover its cultural essence and psychological meaning in the global emotional landscape.",
  keywords:
    "EmotionDeck Nicaragua, Nicaragua archetype, The Inner Compass, Jungian archetypes, emotional culture, psychology, empathy, cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/nicaragua",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Nicaragua",
    description:
      "Journey through Nicaragua’s emotional identity — The Inner Compass, symbolising the nation’s inner psyche and emotional history.",
    url: "https://emotiondeck.com/encyclopedia/nicaragua",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Nicaragua - The Inner Compass | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Nicaragua (The Inner Compass)",
    description:
      "Discover Nicaragua’s emotional essence through the archetype The Inner Compass.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function NicaraguaLayout({ children }) {
  return <>{children}</>;
}
