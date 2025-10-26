
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Botswana",
  description: "Botswana's emotional archetype - The Unknown Soul. It embodies profound mystery and uncharted depths, inviting reflection on identity, connection, and the essence of being.",
  keywords: "EmotionDeck Botswana, The Golden Healer, Botswana emotion, emotional culture, savannah symbolism, empathetic healing, Jungian archetypes, national identity, poetic psychology, cultural empathy, symbolic strength, Botswana psyche, emotional resilience, sunlit savannahs, healing archetype, African emotional culture, quiet strength",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/botswana",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Botswana",
    description: "Botswana's emotional archetype - The Unknown Soul. It embodies profound mystery and uncharted depths, inviting reflection on identity, connection, and the essence of being.",
    url: "https://emotiondeck.com/encyclopedia/botswana",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Botswana - The Golden Healer | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Botswana (The Golden Healer)",
    description: "Botswana's emotional archetype - The Unknown Soul. It embodies profound mystery and uncharted depths, inviting reflection on identity, connection, and the essence of being.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function BotswanaLayout({ children }) {
  return <>{children}</>;
}
