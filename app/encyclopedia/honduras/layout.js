
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Honduras",
  description: "Honduras's emotional archetype - The Unknown Soul. It embodies deep introspection and hidden depths, revealing a journey through uncharted feelings and untold stories.",
  keywords: "EmotionDeck Honduras, The Dream Walker, Honduran spirit, emotional culture, national identity, Jungian archetypes, symbolic essence, silent wanderer, shadows and light, timeless hope, cultural empathy, psychological symbols, Honduran psyche, poetic symbolism, emotional landscape, Central American emotion, cultural introspection",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/honduras",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Honduras",
    description: "Honduras's emotional archetype - The Unknown Soul. It embodies deep introspection and hidden depths, revealing a journey through uncharted feelings and untold stories.",
    url: "https://emotiondeck.com/encyclopedia/honduras",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Honduras - The Dream Walker | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Honduras (The Dream Walker)",
    description: "Honduras's emotional archetype - The Unknown Soul. It embodies deep introspection and hidden depths, revealing a journey through uncharted feelings and untold stories.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function HondurasLayout({ children }) {
  return <>{children}</>;
}
