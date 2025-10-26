
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Malta",
  description:
    "Explore Malta’s emotional archetype - The Solar Keeper. Discover its cultural essence and psychological meaning in the global emotional landscape.",
  keywords:
    "EmotionDeck Malta, Malta archetype, The Solar Keeper, Jungian archetypes, emotional culture, psychology, empathy, cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/malta",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Malta",
    description:
      "Journey through Malta’s emotional identity — The Solar Keeper, symbolising the nation’s inner psyche and emotional history.",
    url: "https://emotiondeck.com/encyclopedia/malta",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Malta - The Solar Keeper | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Malta (The Solar Keeper)",
    description:
      "Discover Malta’s emotional essence through the archetype The Solar Keeper.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function MaltaLayout({ children }) {
  return <>{children}</>;
}
