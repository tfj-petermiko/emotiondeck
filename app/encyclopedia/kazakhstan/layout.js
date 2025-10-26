
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Kazakhstan",
  description:
    "Explore Kazakhstan’s emotional archetype - The Healer of Silence. Discover its cultural essence and psychological meaning in the global emotional landscape.",
  keywords:
    "EmotionDeck Kazakhstan, Kazakhstan archetype, The Healer of Silence, Jungian archetypes, emotional culture, psychology, empathy, cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/kazakhstan",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Kazakhstan",
    description:
      "Journey through Kazakhstan’s emotional identity — The Healer of Silence, symbolising the nation’s inner psyche and emotional history.",
    url: "https://emotiondeck.com/encyclopedia/kazakhstan",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Kazakhstan - The Healer of Silence | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Kazakhstan (The Healer of Silence)",
    description:
      "Discover Kazakhstan’s emotional essence through the archetype The Healer of Silence.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function KazakhstanLayout({ children }) {
  return <>{children}</>;
}
