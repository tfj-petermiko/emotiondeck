
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Chad",
  description: "Chad’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
  keywords: "EmotionDeck Chad, The Mirror of Earth, raw strength, quiet resilience, vast skies, emotional culture Chad, psychological symbolism, Jungian archetypes Chad, empathy in Chad, Chadian identity, cultural symbolism Chad, emotional landscape Chad, national psyche Chad, African emotional resilience, symbolic essence Chad, poetic emotion Chad, British English symbolism",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/chad",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Chad",
    description: "Chad’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
    url: "https://emotiondeck.com/encyclopedia/chad",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Chad - The Mirror of Earth | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Chad (The Mirror of Earth)",
    description: "Chad’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function ChadLayout({ children }) {
  return <>{children}</>;
}
