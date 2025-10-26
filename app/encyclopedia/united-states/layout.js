
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - United States",
  description: "The Unknown Soul - a profound emotional archetype of the United States. It embodies the depths of mystery, longing, and the quest for identity in a vast, uncharted landscape.",
  keywords: "EmotionDeck United States emotion, The Frontier Dreamer psychology, United States culture empathy, EmotionDeck identity United States, The Frontier Dreamer emotion psychology, empathy culture United States, emotion identity Frontier Dreamer, United States emotional journey, Frontier Dreamer cultural empathy, EmotionDeck psychology identity, United States empathetic culture, emotion psychology Frontier Dreamer",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/united-states",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - United States",
    description: "The Unknown Soul - a profound emotional archetype of the United States. It embodies the depths of mystery, longing, and the quest for identity in a vast, uncharted landscape.",
    url: "https://emotiondeck.com/encyclopedia/united-states",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "United States - The Frontier Dreamer | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — United States (The Frontier Dreamer)",
    description: "The Unknown Soul - a profound emotional archetype of the United States. It embodies the depths of mystery, longing, and the quest for identity in a vast, uncharted landscape.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function UnitedStatesLayout({ children }) {
  return <>{children}</>;
}
