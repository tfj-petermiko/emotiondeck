
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Sao Tome and Principe",
  description: "Sao Tome and Principe's emotional archetype - The Unknown Soul. It embodies mystery and depth, reflecting a journey through uncharted feelings and hidden truths.",
  keywords: "EmotionDeck Sao Tome and Principe, The Twin Horizon emotion journey, culture and empathy Sao Tome, psychological identity twin islands, EmotionDeck cultural emotions, Sao Tome emotional landscapes, empathy and identity psychology, The Twin Horizon cultural psyche, EmotionDeck emotion and identity, Sao Tome and Principe empathy study, cultural psychology twin horizon, emotional identity EmotionDeck",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/sao-tome-and-principe",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Sao Tome and Principe",
    description: "Sao Tome and Principe's emotional archetype - The Unknown Soul. It embodies mystery and depth, reflecting a journey through uncharted feelings and hidden truths.",
    url: "https://emotiondeck.com/encyclopedia/sao-tome-and-principe",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Sao Tome and Principe - The Twin Horizon | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Sao Tome and Principe (The Twin Horizon)",
    description: "Sao Tome and Principe's emotional archetype - The Unknown Soul. It embodies mystery and depth, reflecting a journey through uncharted feelings and hidden truths.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function SaoTomeandPrincipeLayout({ children }) {
  return <>{children}</>;
}
