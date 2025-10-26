
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Gabon",
  description:
    "Explore Gabon’s emotional archetype - The Hidden River. Discover its cultural essence and psychological meaning in the global emotional landscape.",
  keywords:
    "EmotionDeck Gabon, Gabon archetype, The Hidden River, Jungian archetypes, emotional culture, psychology, empathy, cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/gabon",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Gabon",
    description:
      "Journey through Gabon’s emotional identity — The Hidden River, symbolising the nation’s inner psyche and emotional history.",
    url: "https://emotiondeck.com/encyclopedia/gabon",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Gabon - The Hidden River | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Gabon (The Hidden River)",
    description:
      "Discover Gabon’s emotional essence through the archetype The Hidden River.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function GabonLayout({ children }) {
  return <>{children}</>;
}
