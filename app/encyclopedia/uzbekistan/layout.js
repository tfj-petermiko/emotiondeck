
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Uzbekistan",
  description: "Uzbekistan’s emotional archetype - The Unknown Soul. It embodies profound mystery and hidden depths, unveiling a journey of introspection, connection, and quiet wonder.",
  keywords: "EmotionDeck Uzbekistan, Guardian of Dust emotions, Uzbek culture empathy, psychology of identity Uzbekistan, EmotionDeck cultural emotions, Guardian of Dust psychology, empathy through Uzbek culture, emotion and identity in Uzbekistan, EmotionDeck emotional heritage, Guardian of Dust cultural identity, Uzbek emotion and empathy, psychology of emotions in Uzbekistan",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/uzbekistan",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Uzbekistan",
    description: "Uzbekistan’s emotional archetype - The Unknown Soul. It embodies profound mystery and hidden depths, unveiling a journey of introspection, connection, and quiet wonder.",
    url: "https://emotiondeck.com/encyclopedia/uzbekistan",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Uzbekistan - The Guardian of Dust | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Uzbekistan (The Guardian of Dust)",
    description: "Uzbekistan’s emotional archetype - The Unknown Soul. It embodies profound mystery and hidden depths, unveiling a journey of introspection, connection, and quiet wonder.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function UzbekistanLayout({ children }) {
  return <>{children}</>;
}
