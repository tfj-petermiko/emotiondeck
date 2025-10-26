
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Madagascar",
  description: "Madagascar’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
  keywords: "EmotionDeck Madagascar, Island of Rain, emotional culture, soul’s wilderness, Jungian archetypes, symbolic rain, empathy essence, national identity, ancient soul, emotional wilderness, cultural symbolism, sky tears, psychological depth, Malagasy spirit, poetic symbolism, emotional landscape, cultural psyche, mythic emotion",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/madagascar",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Madagascar",
    description: "Madagascar’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
    url: "https://emotiondeck.com/encyclopedia/madagascar",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Madagascar - The Island of Rain | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Madagascar (The Island of Rain)",
    description: "Madagascar’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function MadagascarLayout({ children }) {
  return <>{children}</>;
}
