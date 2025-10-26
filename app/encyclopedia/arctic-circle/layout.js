
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Arctic Circle",
  description: "Arctic Circle’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
  keywords: "Arctic Circle, Eternal Mirror, emotional culture, Jungian archetypes, symbolic nature, identity reflection, national identity, silent depths, empathy, cultural symbolism, psychological depth, emotional identity, nature and self, poetic symbolism, British English style, emotional psyche, cultural empathy, symbolic archetype",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/arctic-circle",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Arctic Circle",
    description: "Arctic Circle’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
    url: "https://emotiondeck.com/encyclopedia/arctic-circle",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Arctic Circle - The Eternal Mirror | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Arctic Circle (The Eternal Mirror)",
    description: "Arctic Circle’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function ArcticCircleLayout({ children }) {
  return <>{children}</>;
}
