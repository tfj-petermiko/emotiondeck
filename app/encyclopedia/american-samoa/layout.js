
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - American Samoa",
  description: "American Samoa’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
  keywords: "EmotionDeck American Samoa, The Timeless Wave, ancestral memory, cultural tides, emotional culture, empathy, Jungian archetypes, symbolic identity, national psyche, Polynesian heritage, emotional symbolism, collective memory, cultural continuity, psychic currents, oceanic symbolism, indigenous psychology, emotional resilience, ancestral connection",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/american-samoa",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - American Samoa",
    description: "American Samoa’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
    url: "https://emotiondeck.com/encyclopedia/american-samoa",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "American Samoa - The Timeless Wave | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — American Samoa (The Timeless Wave)",
    description: "American Samoa’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function AmericanSamoaLayout({ children }) {
  return <>{children}</>;
}
