
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Ecuador",
  description: "Ecuador's emotional archetype - The Unknown Soul. It embodies deep introspection and hidden depths, revealing a journey of discovery, mystery, and profound connection.",
  keywords: "EmotionDeck Ecuador, Child of Rainforest, untamed growth, ancient leaves, emotional culture, Ecuadorian psyche, Jungian archetypes, symbolic identity, empathy in Ecuador, cultural symbolism, rainforest emotions, national soul Ecuador, poetic symbolism, emotional resilience, Ecuadorian archetype, indigenous symbolism, natural mysticism, Ecuador emotional depth",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/ecuador",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Ecuador",
    description: "Ecuador's emotional archetype - The Unknown Soul. It embodies deep introspection and hidden depths, revealing a journey of discovery, mystery, and profound connection.",
    url: "https://emotiondeck.com/encyclopedia/ecuador",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Ecuador - The Child of Rainforest | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Ecuador (The Child of Rainforest)",
    description: "Ecuador's emotional archetype - The Unknown Soul. It embodies deep introspection and hidden depths, revealing a journey of discovery, mystery, and profound connection.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function EcuadorLayout({ children }) {
  return <>{children}</>;
}
