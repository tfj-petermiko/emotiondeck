
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Ecuador",
  description:
    "Explore Ecuador’s emotional archetype - The Child of Rainforest. Discover its cultural essence and psychological meaning in the global emotional landscape.",
  keywords:
    "EmotionDeck Ecuador, Ecuador archetype, The Child of Rainforest, Jungian archetypes, emotional culture, psychology, empathy, cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/ecuador",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Ecuador",
    description:
      "Journey through Ecuador’s emotional identity — The Child of Rainforest, symbolising the nation’s inner psyche and emotional history.",
    url: "https://emotiondeck.com/encyclopedia/ecuador",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Ecuador - The Child of Rainforest | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Ecuador (The Child of Rainforest)",
    description:
      "Discover Ecuador’s emotional essence through the archetype The Child of Rainforest.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function EcuadorLayout({ children }) {
  return <>{children}</>;
}
