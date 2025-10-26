
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Poland",
  description:
    "Explore Poland’s emotional archetype - The Wounded Healer. Discover its cultural essence and psychological meaning in the global emotional landscape.",
  keywords:
    "EmotionDeck Poland, Poland archetype, The Wounded Healer, Jungian archetypes, emotional culture, psychology, empathy, cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/poland",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Poland",
    description:
      "Journey through Poland’s emotional identity — The Wounded Healer, symbolising the nation’s inner psyche and emotional history.",
    url: "https://emotiondeck.com/encyclopedia/poland",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Poland - The Wounded Healer | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Poland (The Wounded Healer)",
    description:
      "Discover Poland’s emotional essence through the archetype The Wounded Healer.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function PolandLayout({ children }) {
  return <>{children}</>;
}
