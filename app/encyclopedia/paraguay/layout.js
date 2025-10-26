
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Paraguay",
  description:
    "Explore Paraguay’s emotional archetype - The River Philosopher. Discover its cultural essence and psychological meaning in the global emotional landscape.",
  keywords:
    "EmotionDeck Paraguay, Paraguay archetype, The River Philosopher, Jungian archetypes, emotional culture, psychology, empathy, cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/paraguay",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Paraguay",
    description:
      "Journey through Paraguay’s emotional identity — The River Philosopher, symbolising the nation’s inner psyche and emotional history.",
    url: "https://emotiondeck.com/encyclopedia/paraguay",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Paraguay - The River Philosopher | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Paraguay (The River Philosopher)",
    description:
      "Discover Paraguay’s emotional essence through the archetype The River Philosopher.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function ParaguayLayout({ children }) {
  return <>{children}</>;
}
