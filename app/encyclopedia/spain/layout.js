
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Spain",
  description:
    "Explore Spain’s emotional archetype - The Passionate Pilgrim. Discover its cultural essence and psychological meaning in the global emotional landscape.",
  keywords:
    "EmotionDeck Spain, Spain archetype, The Passionate Pilgrim, Jungian archetypes, emotional culture, psychology, empathy, cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/spain",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Spain",
    description:
      "Journey through Spain’s emotional identity — The Passionate Pilgrim, symbolising the nation’s inner psyche and emotional history.",
    url: "https://emotiondeck.com/encyclopedia/spain",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Spain - The Passionate Pilgrim | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Spain (The Passionate Pilgrim)",
    description:
      "Discover Spain’s emotional essence through the archetype The Passionate Pilgrim.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function SpainLayout({ children }) {
  return <>{children}</>;
}
