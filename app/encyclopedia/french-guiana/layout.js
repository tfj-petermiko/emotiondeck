
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - French Guiana",
  description:
    "Explore French Guiana’s emotional archetype - The Mirror of Rain. Discover its cultural essence and psychological meaning in the global emotional landscape.",
  keywords:
    "EmotionDeck French Guiana, French Guiana archetype, The Mirror of Rain, Jungian archetypes, emotional culture, psychology, empathy, cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/french-guiana",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - French Guiana",
    description:
      "Journey through French Guiana’s emotional identity — The Mirror of Rain, symbolising the nation’s inner psyche and emotional history.",
    url: "https://emotiondeck.com/encyclopedia/french-guiana",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "French Guiana - The Mirror of Rain | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — French Guiana (The Mirror of Rain)",
    description:
      "Discover French Guiana’s emotional essence through the archetype The Mirror of Rain.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function FrenchGuianaLayout({ children }) {
  return <>{children}</>;
}
