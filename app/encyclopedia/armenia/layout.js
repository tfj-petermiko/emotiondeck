
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Armenia",
  description: "Armenia's emotional archetype - The Unknown Soul. It embodies hidden depths and unspoken truths, reflecting a journey through shadows, longing, and profound mystery.",
  keywords: "EmotionDeck Armenia, The Inner Flame, Armenian resilience, ancient heartbeats, emotional culture, Jungian archetypes, national identity, Armenian symbolism, poetic symbolism, cultural empathy, emotional psychology, Armenian soul, symbolic essence, quiet blaze, Armenian spirit, ancestral strength, emotional heritage, symbolic resilience",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/armenia",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Armenia",
    description: "Armenia's emotional archetype - The Unknown Soul. It embodies hidden depths and unspoken truths, reflecting a journey through shadows, longing, and profound mystery.",
    url: "https://emotiondeck.com/encyclopedia/armenia",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Armenia - The Inner Flame | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Armenia (The Inner Flame)",
    description: "Armenia's emotional archetype - The Unknown Soul. It embodies hidden depths and unspoken truths, reflecting a journey through shadows, longing, and profound mystery.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function ArmeniaLayout({ children }) {
  return <>{children}</>;
}
