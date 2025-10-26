
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Ukraine",
  description: "Ukraine's emotional archetype - The Unknown Soul. It embodies a profound depth, weaving stories of resilience, mystery, and the enduring search for identity.",
  keywords: "EmotionDeck Ukraine, The Phoenix of Memory, Ukraine emotion culture, empathy and identity Ukraine, EmotionDeck psychology Ukraine, cultural emotion Ukraine, Ukrainian identity emotion, psychology of memory Ukraine, EmotionDeck empathy Ukraine, Ukrainian cultural psychology, Phoenix of Memory identity, EmotionDeck emotion Ukraine",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/ukraine",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Ukraine",
    description: "Ukraine's emotional archetype - The Unknown Soul. It embodies a profound depth, weaving stories of resilience, mystery, and the enduring search for identity.",
    url: "https://emotiondeck.com/encyclopedia/ukraine",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Ukraine - The Phoenix of Memory | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Ukraine (The Phoenix of Memory)",
    description: "Ukraine's emotional archetype - The Unknown Soul. It embodies a profound depth, weaving stories of resilience, mystery, and the enduring search for identity.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function UkraineLayout({ children }) {
  return <>{children}</>;
}
