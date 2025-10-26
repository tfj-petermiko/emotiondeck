
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Malta",
  description: "Malta's emotional archetype - The Unknown Soul. It embodies enigmatic depth and hidden beauty, revealing a journey of self-discovery and quiet introspection.",
  keywords: "EmotionDeck Malta, The Solar Keeper, Maltese heritage, luminous resilience, ancient skies, emotional culture, Jungian archetypes, symbolic identity, national psyche, Maltese empathy, cultural symbolism, emotional resilience, Mediterranean soul, guardian archetype, collective memory, poetic symbolism, psychological heritage",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/malta",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Malta",
    description: "Malta's emotional archetype - The Unknown Soul. It embodies enigmatic depth and hidden beauty, revealing a journey of self-discovery and quiet introspection.",
    url: "https://emotiondeck.com/encyclopedia/malta",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Malta - The Solar Keeper | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Malta (The Solar Keeper)",
    description: "Malta's emotional archetype - The Unknown Soul. It embodies enigmatic depth and hidden beauty, revealing a journey of self-discovery and quiet introspection.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function MaltaLayout({ children }) {
  return <>{children}</>;
}
