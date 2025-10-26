
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Isle of Man",
  description: "Isle of Man's emotional archetype - The Unknown Soul. It embodies profound mystery and hidden depths, revealing a journey of self-discovery and quiet introspection.",
  keywords: "EmotionDeck Isle of Man, Keeper of Tides, ancient rhythms, sea and soul, Manx identity, emotional culture, Jungian archetypes, symbolism, British Isles emotion, cultural empathy, island psyche, poetic symbolism, emotional resonance, national mystique, Manx folklore, soul connection, tide symbolism, collective unconscious",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/isle-of-man",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Isle of Man",
    description: "Isle of Man's emotional archetype - The Unknown Soul. It embodies profound mystery and hidden depths, revealing a journey of self-discovery and quiet introspection.",
    url: "https://emotiondeck.com/encyclopedia/isle-of-man",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Isle of Man - The Keeper of Tides | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Isle of Man (The Keeper of Tides)",
    description: "Isle of Man's emotional archetype - The Unknown Soul. It embodies profound mystery and hidden depths, revealing a journey of self-discovery and quiet introspection.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function IsleofManLayout({ children }) {
  return <>{children}</>;
}
