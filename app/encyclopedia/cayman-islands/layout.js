
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Cayman Islands",
  description:
    "Explore Cayman Islands’s emotional archetype - The Silent Coral. Discover its cultural essence and psychological meaning in the global emotional landscape.",
  keywords:
    "EmotionDeck Cayman Islands, Cayman Islands archetype, The Silent Coral, Jungian archetypes, emotional culture, psychology, empathy, cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/cayman-islands",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Cayman Islands",
    description:
      "Journey through Cayman Islands’s emotional identity — The Silent Coral, symbolising the nation’s inner psyche and emotional history.",
    url: "https://emotiondeck.com/encyclopedia/cayman-islands",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Cayman Islands - The Silent Coral | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Cayman Islands (The Silent Coral)",
    description:
      "Discover Cayman Islands’s emotional essence through the archetype The Silent Coral.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function CaymanIslandsLayout({ children }) {
  return <>{children}</>;
}
