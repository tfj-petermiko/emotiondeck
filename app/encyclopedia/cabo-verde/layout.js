
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Cabo Verde",
  description:
    "Explore Cabo Verde’s emotional archetype - The Dream of Islands. Discover its cultural essence and psychological meaning in the global emotional landscape.",
  keywords:
    "EmotionDeck Cabo Verde, Cabo Verde archetype, The Dream of Islands, Jungian archetypes, emotional culture, psychology, empathy, cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/cabo-verde",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Cabo Verde",
    description:
      "Journey through Cabo Verde’s emotional identity — The Dream of Islands, symbolising the nation’s inner psyche and emotional history.",
    url: "https://emotiondeck.com/encyclopedia/cabo-verde",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Cabo Verde - The Dream of Islands | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Cabo Verde (The Dream of Islands)",
    description:
      "Discover Cabo Verde’s emotional essence through the archetype The Dream of Islands.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function CaboVerdeLayout({ children }) {
  return <>{children}</>;
}
