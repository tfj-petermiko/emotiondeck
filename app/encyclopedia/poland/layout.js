
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Poland",
  description: "Poland's emotional archetype - The Unknown Soul. It embodies hidden depths and haunting beauty, revealing a tapestry of heart, mystery, and profound connection.",
  keywords: "EmotionDeck Poland emotion poetry, The Wounded Healer empathy, Polish cultural identity, EmotionDeck psychology insights, emotion and healing Poland, The Wounded Healer archetype, empathy in Polish culture, psychological emotions Poland, EmotionDeck cultural emotion, The Wounded Healer psychology, Polish identity and empathy, EmotionDeck emotional journey",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/poland",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Poland",
    description: "Poland's emotional archetype - The Unknown Soul. It embodies hidden depths and haunting beauty, revealing a tapestry of heart, mystery, and profound connection.",
    url: "https://emotiondeck.com/encyclopedia/poland",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Poland - The Wounded Healer | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Poland (The Wounded Healer)",
    description: "Poland's emotional archetype - The Unknown Soul. It embodies hidden depths and haunting beauty, revealing a tapestry of heart, mystery, and profound connection.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function PolandLayout({ children }) {
  return <>{children}</>;
}
