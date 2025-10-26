
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Lithuania",
  description: "Lithuania's emotional archetype - The Unknown Soul. It embodies haunting mystery and deep introspection, unveiling a landscape of uncharted emotions and hidden depths.",
  keywords: "EmotionDeck Lithuania, The Memory Keeper, Lithuanian soul, ancestral whispers, emotional culture, cultural resilience, national identity, Jungian archetypes, symbolic tapestry, empathetic spirit, Baltic heritage, emotional symbolism, psychological depth, resilient spirit, cultural memory, collective psyche, poetic identity, symbolic essence",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/lithuania",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Lithuania",
    description: "Lithuania's emotional archetype - The Unknown Soul. It embodies haunting mystery and deep introspection, unveiling a landscape of uncharted emotions and hidden depths.",
    url: "https://emotiondeck.com/encyclopedia/lithuania",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Lithuania - The Memory Keeper | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Lithuania (The Memory Keeper)",
    description: "Lithuania's emotional archetype - The Unknown Soul. It embodies haunting mystery and deep introspection, unveiling a landscape of uncharted emotions and hidden depths.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function LithuaniaLayout({ children }) {
  return <>{children}</>;
}
