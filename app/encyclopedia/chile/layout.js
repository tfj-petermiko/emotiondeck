
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Chile",
  description: "Chile's emotional archetype - The Unknown Soul. It embodies hidden depths and mystique, revealing a landscape of uncharted feelings, longing, and profound connection.",
  keywords: "EmotionDeck Chile, Fire of Dawn, Chilean spirit, emotional renewal, awakening light, cultural psyche, national identity, poetic symbolism, Jungian archetypes, emotional culture, Chilean empathy, symbolic essence, fierce awakening, Latin American emotion, cultural symbolism, psychological renewal, Chilean archetype, emotional resilience",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/chile",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Chile",
    description: "Chile's emotional archetype - The Unknown Soul. It embodies hidden depths and mystique, revealing a landscape of uncharted feelings, longing, and profound connection.",
    url: "https://emotiondeck.com/encyclopedia/chile",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Chile - The Fire of Dawn | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Chile (The Fire of Dawn)",
    description: "Chile's emotional archetype - The Unknown Soul. It embodies hidden depths and mystique, revealing a landscape of uncharted feelings, longing, and profound connection.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function ChileLayout({ children }) {
  return <>{children}</>;
}
