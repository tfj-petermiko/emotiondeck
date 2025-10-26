
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Spain",
  description: "Spain's emotional archetype - The Unknown Soul. It embodies profound introspection and rich mystery, revealing depths of passion, longing, and shared humanity.",
  keywords: "EmotionDeck Spain emotions, The Passionate Pilgrim journeys, Spanish culture and empathy, identity through emotion Spain, psychology of Spanish passion, EmotionDeck cultural identity, empathy and emotion Spain, passionate pilgrim psychology, Spanish emotional landscape, culture and psychology Spain, EmotionDeck empathy exploration, identity and emotion Spain",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/spain",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Spain",
    description: "Spain's emotional archetype - The Unknown Soul. It embodies profound introspection and rich mystery, revealing depths of passion, longing, and shared humanity.",
    url: "https://emotiondeck.com/encyclopedia/spain",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Spain - The Passionate Pilgrim | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Spain (The Passionate Pilgrim)",
    description: "Spain's emotional archetype - The Unknown Soul. It embodies profound introspection and rich mystery, revealing depths of passion, longing, and shared humanity.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function SpainLayout({ children }) {
  return <>{children}</>;
}
