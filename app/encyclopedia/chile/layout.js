
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Chile",
  description:
    "Explore Chile’s emotional archetype - The Fire of Dawn. Discover its cultural essence and psychological meaning in the global emotional landscape.",
  keywords:
    "EmotionDeck Chile, Chile archetype, The Fire of Dawn, Jungian archetypes, emotional culture, psychology, empathy, cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/chile",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Chile",
    description:
      "Journey through Chile’s emotional identity — The Fire of Dawn, symbolising the nation’s inner psyche and emotional history.",
    url: "https://emotiondeck.com/encyclopedia/chile",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Chile - The Fire of Dawn | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Chile (The Fire of Dawn)",
    description:
      "Discover Chile’s emotional essence through the archetype The Fire of Dawn.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function ChileLayout({ children }) {
  return <>{children}</>;
}
