
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Fiji",
  description: "Fiji's emotional archetype - The Unknown Soul. It evokes profound mystery and hidden depths, reflecting a serene connection to nature and the spirit within.",
  keywords: "EmotionDeck Fiji, The Island Guardian, Fijian spirit, ocean whispers, ancestral echoes, emotional culture, psychological symbolism, national identity, cultural empathy, Jungian archetypes, island resilience, symbolic essence, Pacific heritage, emotional landscape, spiritual sentinels, cultural psychology, oceanic symbolism",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/fiji",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Fiji",
    description: "Fiji's emotional archetype - The Unknown Soul. It evokes profound mystery and hidden depths, reflecting a serene connection to nature and the spirit within.",
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
    description: "Fiji's emotional archetype - The Unknown Soul. It evokes profound mystery and hidden depths, reflecting a serene connection to nature and the spirit within.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function FijiLayout({ children }) {
  return <>{children}</>;
}
