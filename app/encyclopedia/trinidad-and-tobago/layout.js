
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Trinidad and Tobago",
  description:
    "Explore Trinidad and Tobago’s emotional archetype - The Golden Rhythm. Discover its cultural essence and psychological meaning in the global emotional landscape.",
  keywords:
    "EmotionDeck Trinidad and Tobago, Trinidad and Tobago archetype, The Golden Rhythm, Jungian archetypes, emotional culture, psychology, empathy, cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/trinidad-and-tobago",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Trinidad and Tobago",
    description:
      "Journey through Trinidad and Tobago’s emotional identity — The Golden Rhythm, symbolising the nation’s inner psyche and emotional history.",
    url: "https://emotiondeck.com/encyclopedia/trinidad-and-tobago",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Trinidad and Tobago - The Golden Rhythm | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Trinidad and Tobago (The Golden Rhythm)",
    description:
      "Discover Trinidad and Tobago’s emotional essence through the archetype The Golden Rhythm.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function TrinidadandTobagoLayout({ children }) {
  return <>{children}</>;
}
