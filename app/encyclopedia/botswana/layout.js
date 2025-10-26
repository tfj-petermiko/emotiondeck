
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Botswana",
  description:
    "Explore Botswana’s emotional archetype - The Golden Healer. Discover its cultural essence and psychological meaning in the global emotional landscape.",
  keywords:
    "EmotionDeck Botswana, Botswana archetype, The Golden Healer, Jungian archetypes, emotional culture, psychology, empathy, cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/botswana",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Botswana",
    description:
      "Journey through Botswana’s emotional identity — The Golden Healer, symbolising the nation’s inner psyche and emotional history.",
    url: "https://emotiondeck.com/encyclopedia/botswana",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Botswana - The Golden Healer | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Botswana (The Golden Healer)",
    description:
      "Discover Botswana’s emotional essence through the archetype The Golden Healer.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function BotswanaLayout({ children }) {
  return <>{children}</>;
}
