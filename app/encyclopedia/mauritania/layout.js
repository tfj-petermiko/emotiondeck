
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Mauritania",
  description: "Mauritania's emotional archetype - The Unknown Soul. It captures the essence of mystery and depth, unveiling layers of unspoken truths and hidden connections.",
  keywords: "EmotionDeck Mauritania, The Desert Compass, Mauritanian soul, desert symbolism, emotional culture Mauritania, Jungian archetypes, empathy in Mauritania, national identity, cultural psychology, timeless wisdom, solitude and emotion, Saharan symbolism, psychological landscapes, emotional navigation, Mauritanian heritage, symbolic archetypes, emotional resilience, cultural empathy",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/mauritania",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Mauritania",
    description: "Mauritania's emotional archetype - The Unknown Soul. It captures the essence of mystery and depth, unveiling layers of unspoken truths and hidden connections.",
    url: "https://emotiondeck.com/encyclopedia/mauritania",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Mauritania - The Desert Compass | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Mauritania (The Desert Compass)",
    description: "Mauritania's emotional archetype - The Unknown Soul. It captures the essence of mystery and depth, unveiling layers of unspoken truths and hidden connections.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function MauritaniaLayout({ children }) {
  return <>{children}</>;
}
