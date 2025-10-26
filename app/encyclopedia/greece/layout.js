
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Greece",
  description:
    "Explore Greece’s emotional archetype - The Philosopher of Passion. Discover its cultural essence and psychological meaning in the global emotional landscape.",
  keywords:
    "EmotionDeck Greece, Greece archetype, The Philosopher of Passion, Jungian archetypes, emotional culture, psychology, empathy, cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/greece",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Greece",
    description:
      "Journey through Greece’s emotional identity — The Philosopher of Passion, symbolising the nation’s inner psyche and emotional history.",
    url: "https://emotiondeck.com/encyclopedia/greece",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Greece - The Philosopher of Passion | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Greece (The Philosopher of Passion)",
    description:
      "Discover Greece’s emotional essence through the archetype The Philosopher of Passion.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function GreeceLayout({ children }) {
  return <>{children}</>;
}
