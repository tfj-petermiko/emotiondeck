
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Egypt",
  description:
    "Explore Egypt’s emotional archetype - The Ancestral Flame. Discover its cultural essence and psychological meaning in the global emotional landscape.",
  keywords:
    "EmotionDeck Egypt, Egypt archetype, The Ancestral Flame, Jungian archetypes, emotional culture, psychology, empathy, cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/egypt",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Egypt",
    description:
      "Journey through Egypt’s emotional identity — The Ancestral Flame, symbolising the nation’s inner psyche and emotional history.",
    url: "https://emotiondeck.com/encyclopedia/egypt",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Egypt - The Ancestral Flame | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Egypt (The Ancestral Flame)",
    description:
      "Discover Egypt’s emotional essence through the archetype The Ancestral Flame.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function EgyptLayout({ children }) {
  return <>{children}</>;
}
