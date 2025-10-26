
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Luxembourg",
  description:
    "Explore Luxembourg’s emotional archetype - The Quiet Steward. Discover its cultural essence and psychological meaning in the global emotional landscape.",
  keywords:
    "EmotionDeck Luxembourg, Luxembourg archetype, The Quiet Steward, Jungian archetypes, emotional culture, psychology, empathy, cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/luxembourg",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Luxembourg",
    description:
      "Journey through Luxembourg’s emotional identity — The Quiet Steward, symbolising the nation’s inner psyche and emotional history.",
    url: "https://emotiondeck.com/encyclopedia/luxembourg",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Luxembourg - The Quiet Steward | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Luxembourg (The Quiet Steward)",
    description:
      "Discover Luxembourg’s emotional essence through the archetype The Quiet Steward.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function LuxembourgLayout({ children }) {
  return <>{children}</>;
}
