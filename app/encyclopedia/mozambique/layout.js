
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Mozambique",
  description: "Mozambique's emotional archetype - The Unknown Soul. It embodies profound mystery and uncharted depths, revealing a journey of resilience, hope, and transformative connection.",
  keywords: "EmotionDeck Mozambique, The Resilient Dancer, Mozambican spirit, cultural resilience, emotional rhythm, national identity, symbolic grace, empathy in Mozambique, Jungian archetypes, emotional culture, Mozambican psychology, dance and emotion, cultural symbolism, inner strength, facing adversity, collective resilience, poetic identity, emotional heritage",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/mozambique",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Mozambique",
    description: "Mozambique's emotional archetype - The Unknown Soul. It embodies profound mystery and uncharted depths, revealing a journey of resilience, hope, and transformative connection.",
    url: "https://emotiondeck.com/encyclopedia/mozambique",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Mozambique - The Resilient Dancer | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Mozambique (The Resilient Dancer)",
    description: "Mozambique's emotional archetype - The Unknown Soul. It embodies profound mystery and uncharted depths, revealing a journey of resilience, hope, and transformative connection.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function MozambiqueLayout({ children }) {
  return <>{children}</>;
}
