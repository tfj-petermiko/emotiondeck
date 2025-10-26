
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Mayotte",
  description: "Mayotte's emotional archetype - The Unknown Soul. It embodies uncharted depths and hidden wonders, reflecting a journey of introspection, mystery, and profound connection.",
  keywords: "Mayotte emotion, Coral Whisper, emotional resilience, turquoise waves symbolism, cultural empathy Mayotte, Jungian archetypes, silent depth emotion, Mayotte national identity, poetic symbolism, emotional culture island, Mayotte psychology, symbolic identity, gentle murmur, cultural depth, island resilience, emotional symbolism, Mayotte soul, empathic connection",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/mayotte",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Mayotte",
    description: "Mayotte's emotional archetype - The Unknown Soul. It embodies uncharted depths and hidden wonders, reflecting a journey of introspection, mystery, and profound connection.",
    url: "https://emotiondeck.com/encyclopedia/mayotte",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Mayotte - The Coral Whisper | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Mayotte (The Coral Whisper)",
    description: "Mayotte's emotional archetype - The Unknown Soul. It embodies uncharted depths and hidden wonders, reflecting a journey of introspection, mystery, and profound connection.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function MayotteLayout({ children }) {
  return <>{children}</>;
}
