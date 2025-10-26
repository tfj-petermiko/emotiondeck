
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Democratic Republic of the Congo",
  description: "The Democratic Republic of the Congo's emotional archetype - The Unknown Soul. It embodies profound mystery and untamed spirit, revealing depths of resilience and hidden strength.",
  keywords: "EmotionDeck Congo, The Forest Guardian, Congolese resilience, silent sentinel, ancient whispers, emotional culture Congo, Jungian archetypes Congo, national identity Congo, Congolese symbolism, empathy Congo, psychological roots Congo, cultural emotions Congo, African emotional psyche, symbolic guardianship, Congo heritage, poetic identity Congo, resilience archetype Congo",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/democratic-republic-of-the-congo",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Democratic Republic of the Congo",
    description: "The Democratic Republic of the Congo's emotional archetype - The Unknown Soul. It embodies profound mystery and untamed spirit, revealing depths of resilience and hidden strength.",
    url: "https://emotiondeck.com/encyclopedia/democratic-republic-of-the-congo",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Democratic Republic of the Congo - The Forest Guardian | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Democratic Republic of the Congo (The Forest Guardian)",
    description: "The Democratic Republic of the Congo's emotional archetype - The Unknown Soul. It embodies profound mystery and untamed spirit, revealing depths of resilience and hidden strength.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function DemocraticRepublicoftheCongoLayout({ children }) {
  return <>{children}</>;
}
