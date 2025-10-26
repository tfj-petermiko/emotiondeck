
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Melilla",
  description: "Melilla’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
  keywords: "EmotionDeck Melilla, The Eternal Watcher, Melilla symbolism, emotional culture Melilla, Jungian archetypes Melilla, Melilla empathy, sentinel archetype, crossroads of continents, Melilla national identity, poetic symbolism, emotional psychology Melilla, cultural crossroads emotion, Melilla heritage feeling, archetypal emotions, Mediterranean sentinel, Melilla emotional landscape, symbolic guardianship",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/melilla",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Melilla",
    description: "Melilla’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
    url: "https://emotiondeck.com/encyclopedia/melilla",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Melilla - The Eternal Watcher | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Melilla (The Eternal Watcher)",
    description: "Melilla’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function MelillaLayout({ children }) {
  return <>{children}</>;
}
