
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Micronesia",
  description: "Micronesia’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
  keywords: "EmotionDeck Micronesia, The Voice of Light, Micronesian soul, emotional culture, gentle clarity, soulful resonance, Jungian archetypes, symbolic identity, cultural empathy, national psyche, island emotional depth, Pacific symbolism, archetypal illumination, emotional symbolism, Micronesian psychology, poetic empathy, cultural depths",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/micronesia",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Micronesia",
    description: "Micronesia’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
    url: "https://emotiondeck.com/encyclopedia/micronesia",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Micronesia - The Voice of Light | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Micronesia (The Voice of Light)",
    description: "Micronesia’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function MicronesiaLayout({ children }) {
  return <>{children}</>;
}
