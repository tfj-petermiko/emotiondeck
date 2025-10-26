
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Slovakia",
  description: "Slovakia’s emotional archetype - The Unknown Soul. It embodies deep introspection and hidden depths, revealing a poignant journey through mystery and profound connection.",
  keywords: "EmotionDeck Slovakia emotion, The Loyal Heart psychology, Slovakia culture empathy, EmotionDeck identity Slovakia, Loyal Heart emotion guide, Slovakia empathy and identity, EmotionDeck emotional psychology, The Loyal Heart cultural identity, Slovakia emotional heritage, EmotionDeck empathy psychology, Loyal Heart emotion exploration, Slovakia emotion and culture",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/slovakia",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Slovakia",
    description: "Slovakia’s emotional archetype - The Unknown Soul. It embodies deep introspection and hidden depths, revealing a poignant journey through mystery and profound connection.",
    url: "https://emotiondeck.com/encyclopedia/slovakia",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Slovakia - The Loyal Heart | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Slovakia (The Loyal Heart)",
    description: "Slovakia’s emotional archetype - The Unknown Soul. It embodies deep introspection and hidden depths, revealing a poignant journey through mystery and profound connection.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function SlovakiaLayout({ children }) {
  return <>{children}</>;
}
