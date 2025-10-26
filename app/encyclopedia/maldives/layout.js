
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Maldives",
  description: "Maldives' emotional archetype - The Unknown Soul. It embodies mystery and serenity, revealing layers of hidden depths, tranquil beauty, and profound connection.",
  keywords: "EmotionDeck Maldives, Island of Serenity, tranquil waters, emotional culture, balance and peace, soul symbolism, Jungian archetypes, empathy, national identity, poetic symbolism, serene landscapes, cultural psyche, emotional harmony, symbolic essence, psychological reflection, tropical calm, inner stillness",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/maldives",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Maldives",
    description: "Maldives' emotional archetype - The Unknown Soul. It embodies mystery and serenity, revealing layers of hidden depths, tranquil beauty, and profound connection.",
    url: "https://emotiondeck.com/encyclopedia/maldives",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Maldives - The Island of Serenity | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Maldives (The Island of Serenity)",
    description: "Maldives' emotional archetype - The Unknown Soul. It embodies mystery and serenity, revealing layers of hidden depths, tranquil beauty, and profound connection.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function MaldivesLayout({ children }) {
  return <>{children}</>;
}
