
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Turkey",
  description: "Turkey's emotional archetype - The Unknown Soul. It captures the essence of mystery and depth, awakening a journey through hidden desires, whispers of history, and poignant reflections.",
  keywords: "EmotionDeck Turkey culture, The Bridge of Empires emotion, Turkish cultural empathy, emotion psychology Turkey, Identity and emotion in Turkey, EmotionDeck empathy bridge, Turkish cultural identity, psychology of empathy Turkey, The Bridge of Empires identity, EmotionDeck cultural psychology, Turkey emotion connection, empathy and identity Turkey",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/turkey",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Turkey",
    description: "Turkey's emotional archetype - The Unknown Soul. It captures the essence of mystery and depth, awakening a journey through hidden desires, whispers of history, and poignant reflections.",
    url: "https://emotiondeck.com/encyclopedia/turkey",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Turkey - The Bridge of Empires | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Turkey (The Bridge of Empires)",
    description: "Turkey's emotional archetype - The Unknown Soul. It captures the essence of mystery and depth, awakening a journey through hidden desires, whispers of history, and poignant reflections.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function TurkeyLayout({ children }) {
  return <>{children}</>;
}
