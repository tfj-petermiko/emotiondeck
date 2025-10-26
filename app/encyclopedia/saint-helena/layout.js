
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Saint Helena",
  description:
    "Explore Saint Helena’s emotional archetype - The Island of Light. Discover its cultural essence and psychological meaning in the global emotional landscape.",
  keywords:
    "EmotionDeck Saint Helena, Saint Helena archetype, The Island of Light, Jungian archetypes, emotional culture, psychology, empathy, cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/saint-helena",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Saint Helena",
    description:
      "Journey through Saint Helena’s emotional identity — The Island of Light, symbolising the nation’s inner psyche and emotional history.",
    url: "https://emotiondeck.com/encyclopedia/saint-helena",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Saint Helena - The Island of Light | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Saint Helena (The Island of Light)",
    description:
      "Discover Saint Helena’s emotional essence through the archetype The Island of Light.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function SaintHelenaLayout({ children }) {
  return <>{children}</>;
}
