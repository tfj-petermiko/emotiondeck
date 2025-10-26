
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Curacao",
  description: "Curacao's emotional archetype - The Unknown Soul. It embodies mystery and depth, inviting introspection and connection in a vibrant tapestry of uncharted emotions.",
  keywords: "EmotionDeck Curacao, The Golden Wave, Caribbean resilience, radiant renewal, emotional culture, Jungian symbolism, national identity, Curacao psyche, cultural empathy, symbolic emotion, timeless resilience, emotional symbolism, island identity, poetic archetypes, Caribbean symbolism, empathetic culture, emotional renewal",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/curacao",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Curacao",
    description: "Curacao's emotional archetype - The Unknown Soul. It embodies mystery and depth, inviting introspection and connection in a vibrant tapestry of uncharted emotions.",
    url: "https://emotiondeck.com/encyclopedia/curacao",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Curacao - The Golden Wave | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Curacao (The Golden Wave)",
    description: "Curacao's emotional archetype - The Unknown Soul. It embodies mystery and depth, inviting introspection and connection in a vibrant tapestry of uncharted emotions.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function CuracaoLayout({ children }) {
  return <>{children}</>;
}
