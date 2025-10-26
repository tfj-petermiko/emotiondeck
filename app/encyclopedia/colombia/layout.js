
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Colombia",
  description: "Colombia's emotional archetype - The Unknown Soul. It reflects deep introspection and hidden passions, revealing a tapestry of mystery, longing, and profound connection.",
  keywords: "EmotionDeck Colombia, The Mountain Flame, Colombian resilience, emotional culture, Jungian archetypes, national identity, cultural symbolism, empathy in Colombia, Colombian psyche, symbolic essence, mountain symbolism, vibrant heartbeats, emotional psychology, Colombian spirit, poetic identity, cultural empathy, emotional resilience, symbolic heritage",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/colombia",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Colombia",
    description: "Colombia's emotional archetype - The Unknown Soul. It reflects deep introspection and hidden passions, revealing a tapestry of mystery, longing, and profound connection.",
    url: "https://emotiondeck.com/encyclopedia/colombia",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Colombia - The Mountain Flame | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Colombia (The Mountain Flame)",
    description: "Colombia's emotional archetype - The Unknown Soul. It reflects deep introspection and hidden passions, revealing a tapestry of mystery, longing, and profound connection.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function ColombiaLayout({ children }) {
  return <>{children}</>;
}
