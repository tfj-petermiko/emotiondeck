
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Sweden",
  description: "Sweden's emotional archetype - The Unknown Soul. It whispers of hidden depths and uncharted feelings, inviting reflection on our shared human experience and mystery.",
  keywords: "EmotionDeck Sweden harmony, The Harmoniser emotion guide, Swedish culture empathy, EmotionDeck psychology insights, Sweden emotional identity, The Harmoniser cultural empathy, EmotionDeck emotional balance, Sweden identity and emotion, empathetic psychology Sweden, The Harmoniser emotional culture, Sweden emotion storytelling, EmotionDeck cultural harmony",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/sweden",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Sweden",
    description: "Sweden's emotional archetype - The Unknown Soul. It whispers of hidden depths and uncharted feelings, inviting reflection on our shared human experience and mystery.",
    url: "https://emotiondeck.com/encyclopedia/sweden",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Sweden - The Harmoniser | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Sweden (The Harmoniser)",
    description: "Sweden's emotional archetype - The Unknown Soul. It whispers of hidden depths and uncharted feelings, inviting reflection on our shared human experience and mystery.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function SwedenLayout({ children }) {
  return <>{children}</>;
}
