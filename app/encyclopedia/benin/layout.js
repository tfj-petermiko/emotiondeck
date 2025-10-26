
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Benin",
  description: "Benin's emotional archetype - The Unknown Soul. It embodies profound mystery and silent yearning, unveiling depths of vulnerability, connection, and uncharted existence.",
  keywords: "EmotionDeck Benin, Spirit of Rhythm, ancestral drums, vibrant traditions, emotional culture, cultural rhythm, Jungian archetypes, empathy, symbolic identity, national psyche, African symbolism, emotional resilience, rhythm and dance, cultural empathy, Benin heritage, psychological symbolism, embodied emotion, rhythmic pulse",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/benin",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Benin",
    description: "Benin's emotional archetype - The Unknown Soul. It embodies profound mystery and silent yearning, unveiling depths of vulnerability, connection, and uncharted existence.",
    url: "https://emotiondeck.com/encyclopedia/benin",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Benin - The Spirit of Rhythm | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Benin (The Spirit of Rhythm)",
    description: "Benin's emotional archetype - The Unknown Soul. It embodies profound mystery and silent yearning, unveiling depths of vulnerability, connection, and uncharted existence.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function BeninLayout({ children }) {
  return <>{children}</>;
}
