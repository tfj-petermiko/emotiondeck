
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Jamaica",
  description:
    "Explore Jamaica’s emotional archetype - The Voice of Waves. Discover its cultural essence and psychological meaning in the global emotional landscape.",
  keywords:
    "EmotionDeck Jamaica, Jamaica archetype, The Voice of Waves, Jungian archetypes, emotional culture, psychology, empathy, cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/jamaica",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Jamaica",
    description:
      "Journey through Jamaica’s emotional identity — The Voice of Waves, symbolising the nation’s inner psyche and emotional history.",
    url: "https://emotiondeck.com/encyclopedia/jamaica",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Jamaica - The Voice of Waves | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Jamaica (The Voice of Waves)",
    description:
      "Discover Jamaica’s emotional essence through the archetype The Voice of Waves.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function JamaicaLayout({ children }) {
  return <>{children}</>;
}
