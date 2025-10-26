
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Gabon",
  description: "Gabon’s emotional archetype - The Unknown Soul. It embodies hidden depths and uncharted feelings, weaving a tapestry of mystery, introspection, and profound connection.",
  keywords: "EmotionDeck Gabon, The Hidden River, Gabonese soul, silent current, forest symbolism, emotional culture Gabon, Jungian archetypes Gabon, Gabon empathy, national identity Gabon, symbolic essence Gabon, cultural psyche Gabon, emotional symbolism, African archetypes, psychological landscape Gabon, Gabonese emotions, symbolic storytelling, nature and emotion, hidden depths Gabon",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/gabon",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Gabon",
    description: "Gabon’s emotional archetype - The Unknown Soul. It embodies hidden depths and uncharted feelings, weaving a tapestry of mystery, introspection, and profound connection.",
    url: "https://emotiondeck.com/encyclopedia/gabon",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Gabon - The Hidden River | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Gabon (The Hidden River)",
    description: "Gabon’s emotional archetype - The Unknown Soul. It embodies hidden depths and uncharted feelings, weaving a tapestry of mystery, introspection, and profound connection.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function GabonLayout({ children }) {
  return <>{children}</>;
}
