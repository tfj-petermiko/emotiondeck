
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Mayotte",
  description:
    "Explore Mayotte’s emotional archetype - The Coral Whisper. Discover its cultural essence and psychological meaning in the global emotional landscape.",
  keywords:
    "EmotionDeck Mayotte, Mayotte archetype, The Coral Whisper, Jungian archetypes, emotional culture, psychology, empathy, cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/mayotte",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Mayotte",
    description:
      "Journey through Mayotte’s emotional identity — The Coral Whisper, symbolising the nation’s inner psyche and emotional history.",
    url: "https://emotiondeck.com/encyclopedia/mayotte",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Mayotte - The Coral Whisper | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Mayotte (The Coral Whisper)",
    description:
      "Discover Mayotte’s emotional essence through the archetype The Coral Whisper.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function MayotteLayout({ children }) {
  return <>{children}</>;
}
