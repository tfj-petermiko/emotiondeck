
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Wales",
  description:
    "Explore Wales’s emotional archetype - The Voice of Song. Discover its cultural essence and psychological meaning in the global emotional landscape.",
  keywords:
    "EmotionDeck Wales, Wales archetype, The Voice of Song, Jungian archetypes, emotional culture, psychology, empathy, cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/wales",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Wales",
    description:
      "Journey through Wales’s emotional identity — The Voice of Song, symbolising the nation’s inner psyche and emotional history.",
    url: "https://emotiondeck.com/encyclopedia/wales",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Wales - The Voice of Song | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Wales (The Voice of Song)",
    description:
      "Discover Wales’s emotional essence through the archetype The Voice of Song.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function WalesLayout({ children }) {
  return <>{children}</>;
}
