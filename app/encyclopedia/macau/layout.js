
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Macau",
  description: "Macau's emotional archetype - The Unknown Soul. It embodies hidden depths and uncharted paths, revealing layers of mystery, longing, and introspective beauty.",
  keywords: "EmotionDeck Macau, The Dream of Fortune, Macau psyche, emotional culture Macau, symbolic Macau, Jungian archetypes Macau, fate and fortune, cultural symbolism, Macau identity, emotional empathy, ancient whispers, shimmering hopes, Macau national soul, symbolic essence, poetic symbolism, Macau emotional landscape, cultural psyche, Macau dreams",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/macau",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Macau",
    description: "Macau's emotional archetype - The Unknown Soul. It embodies hidden depths and uncharted paths, revealing layers of mystery, longing, and introspective beauty.",
    url: "https://emotiondeck.com/encyclopedia/macau",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Macau - The Dream of Fortune | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Macau (The Dream of Fortune)",
    description: "Macau's emotional archetype - The Unknown Soul. It embodies hidden depths and uncharted paths, revealing layers of mystery, longing, and introspective beauty.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function MacauLayout({ children }) {
  return <>{children}</>;
}
