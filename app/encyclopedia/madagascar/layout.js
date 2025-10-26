
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Madagascar",
  description:
    "Explore Madagascar’s emotional archetype - The Island of Rain. Discover its cultural essence and psychological meaning in the global emotional landscape.",
  keywords:
    "EmotionDeck Madagascar, Madagascar archetype, The Island of Rain, Jungian archetypes, emotional culture, psychology, empathy, cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/madagascar",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Madagascar",
    description:
      "Journey through Madagascar’s emotional identity — The Island of Rain, symbolising the nation’s inner psyche and emotional history.",
    url: "https://emotiondeck.com/encyclopedia/madagascar",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Madagascar - The Island of Rain | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Madagascar (The Island of Rain)",
    description:
      "Discover Madagascar’s emotional essence through the archetype The Island of Rain.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function MadagascarLayout({ children }) {
  return <>{children}</>;
}
