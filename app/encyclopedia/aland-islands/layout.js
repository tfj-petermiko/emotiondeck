
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Aland Islands",
  description:
    "Explore Aland Islands’s emotional archetype - The Silent Sailor. Discover its cultural essence and psychological meaning in the global emotional landscape.",
  keywords:
    "EmotionDeck Aland Islands, Aland Islands archetype, The Silent Sailor, Jungian archetypes, emotional culture, psychology, empathy, cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/aland-islands",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Aland Islands",
    description:
      "Journey through Aland Islands’s emotional identity — The Silent Sailor, symbolising the nation’s inner psyche and emotional history.",
    url: "https://emotiondeck.com/encyclopedia/aland-islands",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Aland Islands - The Silent Sailor | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Aland Islands (The Silent Sailor)",
    description:
      "Discover Aland Islands’s emotional essence through the archetype The Silent Sailor.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function AlandIslandsLayout({ children }) {
  return <>{children}</>;
}
