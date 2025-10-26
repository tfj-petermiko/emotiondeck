
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Martinique",
  description:
    "Explore Martinique’s emotional archetype - The Song of Wind. Discover its cultural essence and psychological meaning in the global emotional landscape.",
  keywords:
    "EmotionDeck Martinique, Martinique archetype, The Song of Wind, Jungian archetypes, emotional culture, psychology, empathy, cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/martinique",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Martinique",
    description:
      "Journey through Martinique’s emotional identity — The Song of Wind, symbolising the nation’s inner psyche and emotional history.",
    url: "https://emotiondeck.com/encyclopedia/martinique",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Martinique - The Song of Wind | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Martinique (The Song of Wind)",
    description:
      "Discover Martinique’s emotional essence through the archetype The Song of Wind.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function MartiniqueLayout({ children }) {
  return <>{children}</>;
}
