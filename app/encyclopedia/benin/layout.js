
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Benin",
  description: "Benin’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection."s soul into a tapestry of enduring cultural harmony.",
  keywords: "EmotionDeck Benin, Spirit of Rhythm, ancestral drums, vibrant traditions, emotional culture, cultural rhythm, Jungian archetypes, empathy, symbolic identity, national psyche, African symbolism, emotional resilience, rhythm and dance, cultural empathy, Benin heritage, psychological symbolism, embodied emotion, rhythmic pulse",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/benin",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Benin",
    description: "Benin’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection."s soul into a tapestry of enduring cultural harmony.",
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
    description: "Benin’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection."s soul into a tapestry of enduring cultural harmony.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function BeninLayout({ children }) {
  return <>{children}</>;
}
