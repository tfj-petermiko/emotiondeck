
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Italy",
  description: "Italy's emotional archetype - The Unknown Soul. It embodies hidden depths and rich complexity, revealing a tapestry of passion, mystery, and profound connection.",
  keywords: "EmotionDeck Italy, The Lover of Life, Italian passion, timeless yearning, sunlit vineyards, ancient streets, emotional culture, cultural empathy, Jungian archetypes, symbolic identity, national psyche, Italian soul, poetic symbolism, emotional heritage, Mediterranean longing, romantic symbolism, cultural psychology, Italian archetypes",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/italy",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Italy",
    description: "Italy's emotional archetype - The Unknown Soul. It embodies hidden depths and rich complexity, revealing a tapestry of passion, mystery, and profound connection.",
    url: "https://emotiondeck.com/encyclopedia/italy",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Italy - The Lover of Life | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Italy (The Lover of Life)",
    description: "Italy's emotional archetype - The Unknown Soul. It embodies hidden depths and rich complexity, revealing a tapestry of passion, mystery, and profound connection.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function ItalyLayout({ children }) {
  return <>{children}</>;
}
