
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Tajikistan",
  description:
    "Explore Tajikistan’s emotional archetype - The Ancient Whisper. Discover its cultural essence and psychological meaning in the global emotional landscape.",
  keywords:
    "EmotionDeck Tajikistan, Tajikistan archetype, The Ancient Whisper, Jungian archetypes, emotional culture, psychology, empathy, cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/tajikistan",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Tajikistan",
    description:
      "Journey through Tajikistan’s emotional identity — The Ancient Whisper, symbolising the nation’s inner psyche and emotional history.",
    url: "https://emotiondeck.com/encyclopedia/tajikistan",
    siteName: "EmotionDeck",
    images: [
      {
        url: "/private_images/encyclopedia/countries/tajikistan_preview.webp",
        width: 1200,
        height: 630,
        alt: "Tajikistan - The Ancient Whisper | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Tajikistan (The Ancient Whisper)",
    description:
      "Discover Tajikistan’s emotional essence through the archetype The Ancient Whisper.",
    images: ["/private_images/encyclopedia/countries/tajikistan_preview.webp"],
  },
};

export default function TajikistanLayout({ children }) {
  return <>{children}</>;
}
