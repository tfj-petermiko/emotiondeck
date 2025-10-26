
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Thailand",
  description:
    "Explore Thailand’s emotional archetype - The Golden Sage. Discover its cultural essence and psychological meaning in the global emotional landscape.",
  keywords:
    "EmotionDeck Thailand, Thailand archetype, The Golden Sage, Jungian archetypes, emotional culture, psychology, empathy, cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/thailand",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Thailand",
    description:
      "Journey through Thailand’s emotional identity — The Golden Sage, symbolising the nation’s inner psyche and emotional history.",
    url: "https://emotiondeck.com/encyclopedia/thailand",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Thailand - The Golden Sage | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Thailand (The Golden Sage)",
    description:
      "Discover Thailand’s emotional essence through the archetype The Golden Sage.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function ThailandLayout({ children }) {
  return <>{children}</>;
}
