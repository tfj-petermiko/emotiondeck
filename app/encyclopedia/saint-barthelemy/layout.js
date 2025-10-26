
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Saint Barthelemy",
  description:
    "Explore Saint Barthelemy’s emotional archetype - The Whisper of Palm. Discover its cultural essence and psychological meaning in the global emotional landscape.",
  keywords:
    "EmotionDeck Saint Barthelemy, Saint Barthelemy archetype, The Whisper of Palm, Jungian archetypes, emotional culture, psychology, empathy, cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/saint-barthelemy",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Saint Barthelemy",
    description:
      "Journey through Saint Barthelemy’s emotional identity — The Whisper of Palm, symbolising the nation’s inner psyche and emotional history.",
    url: "https://emotiondeck.com/encyclopedia/saint-barthelemy",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Saint Barthelemy - The Whisper of Palm | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Saint Barthelemy (The Whisper of Palm)",
    description:
      "Discover Saint Barthelemy’s emotional essence through the archetype The Whisper of Palm.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function SaintBarthelemyLayout({ children }) {
  return <>{children}</>;
}
