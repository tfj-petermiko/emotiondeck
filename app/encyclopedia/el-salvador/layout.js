export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - El Salvador",
  description: "El Salvador's emotional archetype - The Unknown Soul. It embodies mystery and introspection, revealing depths of uncharted longing and the beauty of silent resilience.",
  keywords: "EmotionDeck El Salvador, The Redeemed Flame, Salvadoran resilience, emotional culture, national identity, Jungian symbolism, cultural empathy, poetic symbolism, Salvadoran psychology, emotional healing, symbolic flame, shadow to light, El Salvador soul, collective psyche, cultural archetypes, empathic culture, psychological resilience, national symbolism",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/el-salvador",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - El Salvador",
    description: "El Salvador's emotional archetype - The Unknown Soul. It embodies mystery and introspection, revealing depths of uncharted longing and the beauty of silent resilience.",
    url: "https://emotiondeck.com/encyclopedia/el-salvador",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "El Salvador - The Redeemed Flame | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — El Salvador (The Redeemed Flame)",
    description: "El Salvador's emotional archetype - The Unknown Soul. It embodies mystery and introspection, revealing depths of uncharted longing and the beauty of silent resilience.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function ElSalvadorLayout({ children }) {
  return <>{children}</>;
}
