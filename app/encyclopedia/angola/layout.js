
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Angola",
  description: "Angola's emotional archetype - The Unknown Soul. It embodies profound mystery and untold stories, revealing a tapestry of hidden emotions and quiet strength.",
  keywords: "EmotionDeck Angola, The Whispering Flame, Angolan resilience, emotional renewal, cultural empathy, Jungian symbols, national identity, symbolic ember, African psyche, poetic symbolism, emotional landscape, collective healing, Angolan spirit, psychological depth, symbolic culture, empathetic connection, cultural archetypes",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/angola",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Angola",
    description: "Angola's emotional archetype - The Unknown Soul. It embodies profound mystery and untold stories, revealing a tapestry of hidden emotions and quiet strength.",
    url: "https://emotiondeck.com/encyclopedia/angola",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Angola - The Whispering Flame | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Angola (The Whispering Flame)",
    description: "Angola's emotional archetype - The Unknown Soul. It embodies profound mystery and untold stories, revealing a tapestry of hidden emotions and quiet strength.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function AngolaLayout({ children }) {
  return <>{children}</>;
}
