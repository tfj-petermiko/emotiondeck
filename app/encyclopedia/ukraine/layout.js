
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Ukraine",
  description:
    "Explore Ukraine’s emotional archetype - The Phoenix of Memory. Discover its cultural essence and psychological meaning in the global emotional landscape.",
  keywords:
    "EmotionDeck Ukraine, Ukraine archetype, The Phoenix of Memory, Jungian archetypes, emotional culture, psychology, empathy, cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/ukraine",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Ukraine",
    description:
      "Journey through Ukraine’s emotional identity — The Phoenix of Memory, symbolising the nation’s inner psyche and emotional history.",
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
    description:
      "Discover Ukraine’s emotional essence through the archetype The Phoenix of Memory.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function UkraineLayout({ children }) {
  return <>{children}</>;
}
