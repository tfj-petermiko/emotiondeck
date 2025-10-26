
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Bulgaria",
  description:
    "Explore Bulgaria’s emotional archetype - The Earth Mother. Discover its cultural essence and psychological meaning in the global emotional landscape.",
  keywords:
    "EmotionDeck Bulgaria, Bulgaria archetype, The Earth Mother, Jungian archetypes, emotional culture, psychology, empathy, cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/bulgaria",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Bulgaria",
    description:
      "Journey through Bulgaria’s emotional identity — The Earth Mother, symbolising the nation’s inner psyche and emotional history.",
    url: "https://emotiondeck.com/encyclopedia/bulgaria",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Bulgaria - The Earth Mother | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Bulgaria (The Earth Mother)",
    description:
      "Discover Bulgaria’s emotional essence through the archetype The Earth Mother.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function BulgariaLayout({ children }) {
  return <>{children}</>;
}
