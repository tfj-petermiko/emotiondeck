
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Nicaragua",
  description: "Nicaragua's emotional archetype - The Unknown Soul. It embodies mystery and depth, revealing layers of unspoken dreams, hidden truths, and profound connections.",
  keywords: "EmotionDeck Nicaragua emotions, The Inner Compass psychology, Nicaraguan cultural empathy, emotion and identity Nicaragua, EmotionDeck emotional journey, The Inner Compass self-discovery, cultural psychology Nicaragua, empathy in Nicaraguan identity, EmotionDeck emotional wisdom, The Inner Compass emotional culture, Nicaraguan inner compass emotions, psychology of Nicaraguan identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/nicaragua",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Nicaragua",
    description: "Nicaragua's emotional archetype - The Unknown Soul. It embodies mystery and depth, revealing layers of unspoken dreams, hidden truths, and profound connections.",
    url: "https://emotiondeck.com/encyclopedia/nicaragua",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Nicaragua - The Inner Compass | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Nicaragua (The Inner Compass)",
    description: "Nicaragua's emotional archetype - The Unknown Soul. It embodies mystery and depth, revealing layers of unspoken dreams, hidden truths, and profound connections.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function NicaraguaLayout({ children }) {
  return <>{children}</>;
}
