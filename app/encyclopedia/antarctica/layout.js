
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Antarctica",
  description: "Antarctica’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
  keywords: "EmotionDeck Antarctica, Keeper of Ice, silent endurance, frostbound mystery, emotional culture, psychological symbolism, Jungian archetypes, empathy, national identity, cold resilience, frozen psyche, symbolic solitude, emotional isolation, Arctic symbolism, enduring spirit, poetic symbolism, cultural frost, icy heart",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/antarctica",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Antarctica",
    description: "Antarctica’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
    url: "https://emotiondeck.com/encyclopedia/antarctica",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Antarctica - The Keeper of Ice | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Antarctica (The Keeper of Ice)",
    description: "Antarctica’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function AntarcticaLayout({ children }) {
  return <>{children}</>;
}
