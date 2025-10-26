
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Venezuela",
  description:
    "Explore Venezuela’s emotional archetype - The Healer of Sun. Discover its cultural essence and psychological meaning in the global emotional landscape.",
  keywords:
    "EmotionDeck Venezuela, Venezuela archetype, The Healer of Sun, Jungian archetypes, emotional culture, psychology, empathy, cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/venezuela",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Venezuela",
    description:
      "Journey through Venezuela’s emotional identity — The Healer of Sun, symbolising the nation’s inner psyche and emotional history.",
    url: "https://emotiondeck.com/encyclopedia/venezuela",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Venezuela - The Healer of Sun | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Venezuela (The Healer of Sun)",
    description:
      "Discover Venezuela’s emotional essence through the archetype The Healer of Sun.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function VenezuelaLayout({ children }) {
  return <>{children}</>;
}
