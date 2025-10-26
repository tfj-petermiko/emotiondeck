
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Afghanistan",
  description: "Afghanistan’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
  keywords: "EmotionDeck Afghanistan, The Eternal Compass, Afghan soul, cultural resilience, emotional identity, Jungian archetypes, national psyche, symbolic guidance, ancient echoes, resilient horizons, Afghan empathy, emotional culture, symbolic heritage, psychological depth, cultural symbolism, national spirit, poetic symbolism, emotional archetypes",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/afghanistan",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Afghanistan",
    description: "Afghanistan’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
    url: "https://emotiondeck.com/encyclopedia/afghanistan",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Afghanistan - The Eternal Compass | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Afghanistan (The Eternal Compass)",
    description: "Afghanistan’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function AfghanistanLayout({ children }) {
  return <>{children}</>;
}
