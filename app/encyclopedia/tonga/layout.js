
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Tonga",
  description: "Tonga's emotional archetype - The Unknown Soul. It embodies deep introspection and hidden strength, unveiling a journey of self-discovery and profound connection.",
  keywords: "EmotionDeck Tonga poetry, The Song of the Sea emotion, Tonga culture empathy, EmotionDeck psychology identity, sea song emotions Tonga, emotional identity Tonga, cultural empathy EmotionDeck, Tonga poetic psychology, The Song of the Sea culture, EmotionDeck emotional voyage, psychology of Tonga emotion, empathy in Tonga identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/tonga",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Tonga",
    description: "Tonga's emotional archetype - The Unknown Soul. It embodies deep introspection and hidden strength, unveiling a journey of self-discovery and profound connection.",
    url: "https://emotiondeck.com/encyclopedia/tonga",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Tonga - The Song of the Sea | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Tonga (The Song of the Sea)",
    description: "Tonga's emotional archetype - The Unknown Soul. It embodies deep introspection and hidden strength, unveiling a journey of self-discovery and profound connection.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function TongaLayout({ children }) {
  return <>{children}</>;
}
