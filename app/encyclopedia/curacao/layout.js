
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Curacao",
  description:
    "Explore Curacao’s emotional archetype - The Golden Wave. Discover its cultural essence and psychological meaning in the global emotional landscape.",
  keywords:
    "EmotionDeck Curacao, Curacao archetype, The Golden Wave, Jungian archetypes, emotional culture, psychology, empathy, cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/curacao",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Curacao",
    description:
      "Journey through Curacao’s emotional identity — The Golden Wave, symbolising the nation’s inner psyche and emotional history.",
    url: "https://emotiondeck.com/encyclopedia/curacao",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Curacao - The Golden Wave | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Curacao (The Golden Wave)",
    description:
      "Discover Curacao’s emotional essence through the archetype The Golden Wave.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function CuracaoLayout({ children }) {
  return <>{children}</>;
}
