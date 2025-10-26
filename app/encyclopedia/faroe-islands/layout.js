
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Faroe Islands",
  description: "Faroe Islands’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
  keywords: "Faroe Islands emotion, The Storm Whisperer, wild heart symbolism, Faroese psyche, emotional culture Faroe, Jungian archetypes Faroe, tempest and calm, empathy Faroe Islands, national identity Faroe, Faroese emotional resilience, symbolic essence Faroe, cultural psychology Faroe, emotional symbolism islands, Faroese soul, psychological archetypes, Faroe Islands mysticism, emotional heritage Faroe",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/faroe-islands",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Faroe Islands",
    description: "Faroe Islands’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
    url: "https://emotiondeck.com/encyclopedia/faroe-islands",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Faroe Islands - The Storm Whisperer | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Faroe Islands (The Storm Whisperer)",
    description: "Faroe Islands’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function FaroeIslandsLayout({ children }) {
  return <>{children}</>;
}
