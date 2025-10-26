
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Trinidad and Tobago",
  description: "Trinidad and Tobago's emotional archetype - The Unknown Soul. It embodies deep introspection and hidden depths, revealing a journey of self-discovery and connection.",
  keywords: "EmotionDeck Trinidad and Tobago, The Golden Rhythm culture, emotion and identity, empathy in Trinidad, psychology of rhythm, Trinidad and Tobago emotion, cultural empathy EmotionDeck, psychology of identity, The Golden Rhythm emotion, emotion and culture Trinidad, Trinidad and Tobago empathy, EmotionDeck cultural psychology",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/trinidad-and-tobago",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Trinidad and Tobago",
    description: "Trinidad and Tobago's emotional archetype - The Unknown Soul. It embodies deep introspection and hidden depths, revealing a journey of self-discovery and connection.",
    url: "https://emotiondeck.com/encyclopedia/trinidad-and-tobago",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Trinidad and Tobago - The Golden Rhythm | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Trinidad and Tobago (The Golden Rhythm)",
    description: "Trinidad and Tobago's emotional archetype - The Unknown Soul. It embodies deep introspection and hidden depths, revealing a journey of self-discovery and connection.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function TrinidadandTobagoLayout({ children }) {
  return <>{children}</>;
}
