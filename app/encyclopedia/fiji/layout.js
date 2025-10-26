
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Fiji",
  description:
    "Explore Fiji’s emotional archetype - The Island Guardian. Discover its cultural essence and psychological meaning in the global emotional landscape.",
  keywords:
    "EmotionDeck Fiji, Fiji archetype, The Island Guardian, Jungian archetypes, emotional culture, psychology, empathy, cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/fiji",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Fiji",
    description:
      "Journey through Fiji’s emotional identity — The Island Guardian, symbolising the nation’s inner psyche and emotional history.",
    url: "https://emotiondeck.com/encyclopedia/fiji",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Fiji - The Island Guardian | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Fiji (The Island Guardian)",
    description:
      "Discover Fiji’s emotional essence through the archetype The Island Guardian.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function FijiLayout({ children }) {
  return <>{children}</>;
}
