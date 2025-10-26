
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Bangladesh",
  description:
    "Explore Bangladesh’s emotional archetype - The River Philosopher. Discover its cultural essence and psychological meaning in the global emotional landscape.",
  keywords:
    "EmotionDeck Bangladesh, Bangladesh archetype, The River Philosopher, Jungian archetypes, emotional culture, psychology, empathy, cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/bangladesh",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Bangladesh",
    description:
      "Journey through Bangladesh’s emotional identity — The River Philosopher, symbolising the nation’s inner psyche and emotional history.",
    url: "https://emotiondeck.com/encyclopedia/bangladesh",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Bangladesh - The River Philosopher | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Bangladesh (The River Philosopher)",
    description:
      "Discover Bangladesh’s emotional essence through the archetype The River Philosopher.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function BangladeshLayout({ children }) {
  return <>{children}</>;
}
