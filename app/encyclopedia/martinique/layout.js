
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Martinique",
  description: "Martinique's emotional archetype - The Unknown Soul. It embodies deep introspection and vibrant mystery, revealing layers of identity, connection, and uncharted emotions.",
  keywords: "EmotionDeck Martinique, The Song of Wind, restless spirit, vibrant transformation, emotional culture, cultural empathy, Jungian symbolism, Caribbean identity, poetic symbolism, national psyche, emotional resilience, cultural folklore, symbolic transformation, Martinique heritage, emotional archetypes, spirit of Martinique, empathetic culture, cultural psychology",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/martinique",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Martinique",
    description: "Martinique's emotional archetype - The Unknown Soul. It embodies deep introspection and vibrant mystery, revealing layers of identity, connection, and uncharted emotions.",
    url: "https://emotiondeck.com/encyclopedia/martinique",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Martinique - The Song of Wind | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Martinique (The Song of Wind)",
    description: "Martinique's emotional archetype - The Unknown Soul. It embodies deep introspection and vibrant mystery, revealing layers of identity, connection, and uncharted emotions.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function MartiniqueLayout({ children }) {
  return <>{children}</>;
}
