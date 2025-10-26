
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Kyrgyzstan",
  description: "Kyrgyzstan’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
  keywords: "EmotionDeck Kyrgyzstan, Keeper of Snow, Kyrgyz soul, emotional resilience, silent guardian, purity symbolism, national identity Kyrgyzstan, cultural empathy, Jungian archetypes, emotional culture, symbolic imagery, timeless resilience, Kyrgyz psychology, snow symbolism, empathy in culture, poetic symbolism, Central Asian emotions",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/kyrgyzstan",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Kyrgyzstan",
    description: "Kyrgyzstan’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
    url: "https://emotiondeck.com/encyclopedia/kyrgyzstan",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Kyrgyzstan - The Keeper of Snow | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Kyrgyzstan (The Keeper of Snow)",
    description: "Kyrgyzstan’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function KyrgyzstanLayout({ children }) {
  return <>{children}</>;
}
