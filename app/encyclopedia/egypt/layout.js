
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Egypt",
  description: "Egypt's emotional archetype - The Unknown Soul. It embodies mystique and introspection, revealing the depths of our fears, dreams, and uncharted desires.",
  keywords: "EmotionDeck Egypt, The Ancestral Flame, timeless sands, eternal memories, Egyptian soul, emotional culture, Jungian archetypes, symbolic essence, national identity, cultural symbolism, psychological heritage, empathy in Egypt, ancestral memory, collective unconscious, mythic Egypt, emotional symbolism, cultural psyche, ancient emotion",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/egypt",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Egypt",
    description: "Egypt's emotional archetype - The Unknown Soul. It embodies mystique and introspection, revealing the depths of our fears, dreams, and uncharted desires.",
    url: "https://emotiondeck.com/encyclopedia/egypt",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Egypt - The Ancestral Flame | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Egypt (The Ancestral Flame)",
    description: "Egypt's emotional archetype - The Unknown Soul. It embodies mystique and introspection, revealing the depths of our fears, dreams, and uncharted desires.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function EgyptLayout({ children }) {
  return <>{children}</>;
}
