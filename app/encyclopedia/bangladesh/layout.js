
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Bangladesh",
  description: "Bangladesh's emotional archetype - The Unknown Soul. It mirrors hidden depths and silent yearnings, inviting reflection on identity, connection, and the human spirit.",
  keywords: "EmotionDeck Bangladesh, The River Philosopher, Bengali soul, emotional culture, cultural resilience, flowing symbolism, Jungian archetypes, national identity, empathy and emotion, psychological depth, poetic symbolism, quiet resilience, river metaphor, Bangladeshi psyche, emotional symbolism, cultural psyche, symbolic identity, emotional flow",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/bangladesh",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Bangladesh",
    description: "Bangladesh's emotional archetype - The Unknown Soul. It mirrors hidden depths and silent yearnings, inviting reflection on identity, connection, and the human spirit.",
    url: "https://emotiondeck.com/encyclopedia/bangladesh",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Bangladesh - The River Philosopher | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Bangladesh (The River Philosopher)",
    description: "Bangladesh's emotional archetype - The Unknown Soul. It mirrors hidden depths and silent yearnings, inviting reflection on identity, connection, and the human spirit.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function BangladeshLayout({ children }) {
  return <>{children}</>;
}
