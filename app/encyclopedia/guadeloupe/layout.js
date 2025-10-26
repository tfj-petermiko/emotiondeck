
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Guadeloupe",
  description: "Guadeloupe's emotional archetype - The Unknown Soul. It embodies profound mystery and hidden depths, unveiling a journey of self-discovery and uncharted feelings.",
  keywords: "Guadeloupe emotion, Dream of Sea, Caribbean longing, emotional transformation, Jungian archetypes, sea symbolism, cultural empathy, national identity, poetic symbolism, emotional landscape, island psyche, symbolic horizons, Guadeloupe culture, collective unconscious, emotional heritage, symbolic archetypes, Caribbean psychology, identity and emotion",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/guadeloupe",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Guadeloupe",
    description: "Guadeloupe's emotional archetype - The Unknown Soul. It embodies profound mystery and hidden depths, unveiling a journey of self-discovery and uncharted feelings.",
    url: "https://emotiondeck.com/encyclopedia/guadeloupe",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Guadeloupe - The Dream of Sea | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Guadeloupe (The Dream of Sea)",
    description: "Guadeloupe's emotional archetype - The Unknown Soul. It embodies profound mystery and hidden depths, unveiling a journey of self-discovery and uncharted feelings.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function GuadeloupeLayout({ children }) {
  return <>{children}</>;
}
