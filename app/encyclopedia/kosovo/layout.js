
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Kosovo",
  description: "Kosovo's emotional archetype - The Unknown Soul. It embodies profound mystery and uncharted depths, revealing a tapestry of resilience, longing, and unspoken truths.",
  keywords: "EmotionDeck Kosovo, The Resilient Frontier, Kosovo spirit, cultural resilience, emotional landscape, national identity, symbolic scars, fractured earth, hope and strength, Jungian archetypes, Balkan psyche, empathy in Kosovo, emotional culture, symbolic nationalism, psychological resilience, Kosovo symbolism, collective healing, poetic identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/kosovo",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Kosovo",
    description: "Kosovo's emotional archetype - The Unknown Soul. It embodies profound mystery and uncharted depths, revealing a tapestry of resilience, longing, and unspoken truths.",
    url: "https://emotiondeck.com/encyclopedia/kosovo",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Kosovo - The Resilient Frontier | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Kosovo (The Resilient Frontier)",
    description: "Kosovo's emotional archetype - The Unknown Soul. It embodies profound mystery and uncharted depths, revealing a tapestry of resilience, longing, and unspoken truths.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function KosovoLayout({ children }) {
  return <>{children}</>;
}
