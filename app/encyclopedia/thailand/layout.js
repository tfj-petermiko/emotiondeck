
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Thailand",
  description: "Thailand's emotional archetype - The Unknown Soul. It embodies hidden depths and whispered mysteries, inviting reflection on life's unseen journeys and profound connections.",
  keywords: "EmotionDeck Thailand emotions, The Golden Sage wisdom, Thai culture empathy, Emotional psychology Thailand, Identity through emotion, EmotionDeck cultural insight, The Golden Sage identity, Empathy in Thai tradition, Psychology of Thai emotion, EmotionDeck cultural psychology, The Golden Sage emotional wisdom, Thailand emotional identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/thailand",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Thailand",
    description: "Thailand's emotional archetype - The Unknown Soul. It embodies hidden depths and whispered mysteries, inviting reflection on life's unseen journeys and profound connections.",
    url: "https://emotiondeck.com/encyclopedia/thailand",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Thailand - The Golden Sage | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Thailand (The Golden Sage)",
    description: "Thailand's emotional archetype - The Unknown Soul. It embodies hidden depths and whispered mysteries, inviting reflection on life's unseen journeys and profound connections.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function ThailandLayout({ children }) {
  return <>{children}</>;
}
