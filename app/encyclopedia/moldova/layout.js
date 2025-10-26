
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Moldova",
  description: "Moldova's emotional archetype - The Unknown Soul. It captures the essence of hidden depths, unvoiced dreams, and a profound quest for identity and belonging.",
  keywords: "EmotionDeck Moldova, The Humble Healer, Moldovan soul, emotional resilience, cultural empathy, Jungian archetypes, symbolic tenderness, national healing, quiet strength, unseen scars, poetic symbolism, emotional culture, Moldovan identity, psychological depth, tender grace, cultural psychology, symbolic archetypes",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/moldova",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Moldova",
    description: "Moldova's emotional archetype - The Unknown Soul. It captures the essence of hidden depths, unvoiced dreams, and a profound quest for identity and belonging.",
    url: "https://emotiondeck.com/encyclopedia/moldova",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Moldova - The Humble Healer | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Moldova (The Humble Healer)",
    description: "Moldova's emotional archetype - The Unknown Soul. It captures the essence of hidden depths, unvoiced dreams, and a profound quest for identity and belonging.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function MoldovaLayout({ children }) {
  return <>{children}</>;
}
