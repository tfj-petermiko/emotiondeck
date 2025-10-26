
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Eswatini",
  description: "Eswatini’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection."s spirit through strength, vulnerability, and enduring cultural soul.",
  keywords: "Eswatini emotion, Mountain of Hearts, emotional resilience, Swazi empathy, cultural symbolism, national identity Eswatini, Jungian archetypes, symbolic compassion, emotional culture, silent fortress, Swazi psychology, heartfelt resilience, archetypal symbolism, Eswatini compassion, emotional fortitude, cultural empathy, psychological identity, Swazi emotional depth",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/eswatini",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Eswatini",
    description: "Eswatini’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection."s spirit through strength, vulnerability, and enduring cultural soul.",
    url: "https://emotiondeck.com/encyclopedia/eswatini",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Eswatini - The Mountain of Hearts | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Eswatini (The Mountain of Hearts)",
    description: "Eswatini’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection."s spirit through strength, vulnerability, and enduring cultural soul.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function EswatiniLayout({ children }) {
  return <>{children}</>;
}
