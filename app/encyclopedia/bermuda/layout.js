
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Bermuda",
  description: "Bermuda's emotional archetype - The Unknown Soul. It embodies enigmatic depths and uncharted feelings, inviting introspection, mystery, and the beauty of discovery.",
  keywords: "EmotionDeck Bermuda, The Coral Guardian, Bermuda resilience, turquoise whispers, emotional culture Bermuda, Jungian archetypes Bermuda, symbolic sentinel, Bermuda empathy, national identity Bermuda, poetic symbolism, Bermuda psychology, cultural symbolism, emotional symbolism, British English archetypes, Bermuda soul, silent sentinel, resilience archetype, cultural empathy Bermuda",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/bermuda",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Bermuda",
    description: "Bermuda's emotional archetype - The Unknown Soul. It embodies enigmatic depths and uncharted feelings, inviting introspection, mystery, and the beauty of discovery.",
    url: "https://emotiondeck.com/encyclopedia/bermuda",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Bermuda - The Coral Guardian | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Bermuda (The Coral Guardian)",
    description: "Bermuda's emotional archetype - The Unknown Soul. It embodies enigmatic depths and uncharted feelings, inviting introspection, mystery, and the beauty of discovery.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function BermudaLayout({ children }) {
  return <>{children}</>;
}
