
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Italy",
  description:
    "Explore Italy’s emotional archetype - The Lover of Life. Discover its cultural essence and psychological meaning in the global emotional landscape.",
  keywords:
    "EmotionDeck Italy, Italy archetype, The Lover of Life, Jungian archetypes, emotional culture, psychology, empathy, cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/italy",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Italy",
    description:
      "Journey through Italy’s emotional identity — The Lover of Life, symbolising the nation’s inner psyche and emotional history.",
    url: "https://emotiondeck.com/encyclopedia/italy",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Italy - The Lover of Life | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Italy (The Lover of Life)",
    description:
      "Discover Italy’s emotional essence through the archetype The Lover of Life.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function ItalyLayout({ children }) {
  return <>{children}</>;
}
