
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Gambia",
  description:
    "Explore Gambia’s emotional archetype - The River of Faith. Discover its cultural essence and psychological meaning in the global emotional landscape.",
  keywords:
    "EmotionDeck Gambia, Gambia archetype, The River of Faith, Jungian archetypes, emotional culture, psychology, empathy, cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/gambia",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Gambia",
    description:
      "Journey through Gambia’s emotional identity — The River of Faith, symbolising the nation’s inner psyche and emotional history.",
    url: "https://emotiondeck.com/encyclopedia/gambia",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Gambia - The River of Faith | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Gambia (The River of Faith)",
    description:
      "Discover Gambia’s emotional essence through the archetype The River of Faith.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function GambiaLayout({ children }) {
  return <>{children}</>;
}
