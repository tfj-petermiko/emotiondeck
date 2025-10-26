
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Ascension Island",
  description: "Ascension Island's emotional archetype - The Unknown Soul. It embodies mystery and deep introspection, unveiling a journey of self-discovery and profound connection.",
  keywords: "Ascension Island, The Lost Horizon, timeless realm, solitude symbolism, uncharted skies, emotional culture, Jungian archetypes, empathetic identity, mystical isolation, poetic symbolism, British Isles emotion, national psyche, island solitude, psychological landscape, cultural symbolism, symbolic nature, emotional archetype, mystery and solitude",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/ascension-island",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Ascension Island",
    description: "Ascension Island's emotional archetype - The Unknown Soul. It embodies mystery and deep introspection, unveiling a journey of self-discovery and profound connection.",
    url: "https://emotiondeck.com/encyclopedia/ascension-island",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Ascension Island - The Lost Horizon | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Ascension Island (The Lost Horizon)",
    description: "Ascension Island's emotional archetype - The Unknown Soul. It embodies mystery and deep introspection, unveiling a journey of self-discovery and profound connection.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function AscensionIslandLayout({ children }) {
  return <>{children}</>;
}
