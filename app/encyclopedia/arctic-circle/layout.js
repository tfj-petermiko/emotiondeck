
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Arctic Circle",
  description:
    "Explore Arctic Circle’s emotional archetype - The Eternal Mirror. Discover its cultural essence and psychological meaning in the global emotional landscape.",
  keywords:
    "EmotionDeck Arctic Circle, Arctic Circle archetype, The Eternal Mirror, Jungian archetypes, emotional culture, psychology, empathy, cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/arctic-circle",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Arctic Circle",
    description:
      "Journey through Arctic Circle’s emotional identity — The Eternal Mirror, symbolising the nation’s inner psyche and emotional history.",
    url: "https://emotiondeck.com/encyclopedia/arctic-circle",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Arctic Circle - The Eternal Mirror | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Arctic Circle (The Eternal Mirror)",
    description:
      "Discover Arctic Circle’s emotional essence through the archetype The Eternal Mirror.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function ArcticCircleLayout({ children }) {
  return <>{children}</>;
}
