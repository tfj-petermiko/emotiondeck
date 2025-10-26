
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Saudi Arabia",
  description:
    "Explore Saudi Arabia’s emotional archetype - The Desert of Mirrors. Discover its cultural essence and psychological meaning in the global emotional landscape.",
  keywords:
    "EmotionDeck Saudi Arabia, Saudi Arabia archetype, The Desert of Mirrors, Jungian archetypes, emotional culture, psychology, empathy, cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/saudi-arabia",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Saudi Arabia",
    description:
      "Journey through Saudi Arabia’s emotional identity — The Desert of Mirrors, symbolising the nation’s inner psyche and emotional history.",
    url: "https://emotiondeck.com/encyclopedia/saudi-arabia",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Saudi Arabia - The Desert of Mirrors | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Saudi Arabia (The Desert of Mirrors)",
    description:
      "Discover Saudi Arabia’s emotional essence through the archetype The Desert of Mirrors.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function SaudiArabiaLayout({ children }) {
  return <>{children}</>;
}
