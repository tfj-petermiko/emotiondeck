
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Montenegro",
  description: "Montenegro’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
  keywords: "EmotionDeck Montenegro, The Silent Warrior, Montenegrin resilience, emotional culture Montenegro, Jungian archetypes, national psyche Montenegro, symbolic essence Montenegro, Balkan emotional identity, rugged peaks symbolism, restless seas metaphor, quiet strength, cultural empathy Montenegro, Montenegrin symbolism, psychological resilience, poetic emotional expression, silent strength Montenegro, Montenegrin archetype, emotional landscape",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/montenegro",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Montenegro",
    description: "Montenegro’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
    url: "https://emotiondeck.com/encyclopedia/montenegro",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Montenegro - The Silent Warrior | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Montenegro (The Silent Warrior)",
    description: "Montenegro’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function MontenegroLayout({ children }) {
  return <>{children}</>;
}
