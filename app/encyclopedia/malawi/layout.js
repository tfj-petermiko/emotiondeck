
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Malawi",
  description:
    "Explore Malawi’s emotional archetype - The Healer of Winds. Discover its cultural essence and psychological meaning in the global emotional landscape.",
  keywords:
    "EmotionDeck Malawi, Malawi archetype, The Healer of Winds, Jungian archetypes, emotional culture, psychology, empathy, cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/malawi",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Malawi",
    description:
      "Journey through Malawi’s emotional identity — The Healer of Winds, symbolising the nation’s inner psyche and emotional history.",
    url: "https://emotiondeck.com/encyclopedia/malawi",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Malawi - The Healer of Winds | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Malawi (The Healer of Winds)",
    description:
      "Discover Malawi’s emotional essence through the archetype The Healer of Winds.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function MalawiLayout({ children }) {
  return <>{children}</>;
}
