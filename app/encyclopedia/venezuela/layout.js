
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Venezuela",
  description: "Venezuela's emotional archetype - The Unknown Soul. It whispers of hidden depths, uncharted dreams, and the profound beauty of unrecognised longing.",
  keywords: "EmotionDeck Venezuela emotion, The Healer of Sun empathy, Venezuelan culture psychology, identity and emotion Venezuela, EmotionDeck healing power, The Healer of Sun spirit, Venezuelan emotional identity, culture and empathy psychology, EmotionDeck emotional wisdom, The Healer of Sun insight, Venezuela emotional journey, psychology of Venezuelan identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/venezuela",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Venezuela",
    description: "Venezuela's emotional archetype - The Unknown Soul. It whispers of hidden depths, uncharted dreams, and the profound beauty of unrecognised longing.",
    url: "https://emotiondeck.com/encyclopedia/venezuela",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Venezuela - The Healer of Sun | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Venezuela (The Healer of Sun)",
    description: "Venezuela's emotional archetype - The Unknown Soul. It whispers of hidden depths, uncharted dreams, and the profound beauty of unrecognised longing.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function VenezuelaLayout({ children }) {
  return <>{children}</>;
}
