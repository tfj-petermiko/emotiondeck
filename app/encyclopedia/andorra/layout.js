
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Andorra",
  description: "Andorra's emotional archetype - The Unknown Soul. It captures the essence of hidden depths and uncharted feelings, inviting reflection on our shared humanity.",
  keywords: "EmotionDeck Andorra, The Mountain Guardian, Andorran soul, alpine symbolism, national identity, emotional culture, Jungian archetypes, cultural empathy, steadfast sentinel, mountain psychology, symbolic solitude, Andorran psyche, emotional resilience, alpine spirit, veiled secrets, poetic symbolism, psychological landscape",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/andorra",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Andorra",
    description: "Andorra's emotional archetype - The Unknown Soul. It captures the essence of hidden depths and uncharted feelings, inviting reflection on our shared humanity.",
    url: "https://emotiondeck.com/encyclopedia/andorra",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Andorra - The Mountain Guardian | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Andorra (The Mountain Guardian)",
    description: "Andorra's emotional archetype - The Unknown Soul. It captures the essence of hidden depths and uncharted feelings, inviting reflection on our shared humanity.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function AndorraLayout({ children }) {
  return <>{children}</>;
}
