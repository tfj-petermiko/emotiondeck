
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Malawi",
  description: "Malawi's emotional archetype - The Unknown Soul. It embodies deep introspection and hidden depths, inviting connection, mystery, and shared humanity within.",
  keywords: "EmotionDeck Malawi, The Healer of Winds, Malawian empathy, emotional culture Malawi, Jungian archetypes Malawi, symbolic identity Malawi, Malawi emotional psyche, gentle mender symbolism, unseen tempests metaphor, quiet stirrings emotion, Malawian healing archetype, cultural symbolism Malawi, African emotional identity, poetic emotion Malawi, national psyche Malawi, empathetic symbolism, Malawian psychology, wind healer archetype",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/malawi",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Malawi",
    description: "Malawi's emotional archetype - The Unknown Soul. It embodies deep introspection and hidden depths, inviting connection, mystery, and shared humanity within.",
    url: "https://emotiondeck.com/encyclopedia/malawi",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Malawi - The Healer of Winds | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Malawi (The Healer of Winds)",
    description: "Malawi's emotional archetype - The Unknown Soul. It embodies deep introspection and hidden depths, inviting connection, mystery, and shared humanity within.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function MalawiLayout({ children }) {
  return <>{children}</>;
}
