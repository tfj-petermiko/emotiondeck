
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Cocos Islands",
  description:
    "Explore Cocos Islands’s emotional archetype - The Whisper of Wind. Discover its cultural essence and psychological meaning in the global emotional landscape.",
  keywords:
    "EmotionDeck Cocos Islands, Cocos Islands archetype, The Whisper of Wind, Jungian archetypes, emotional culture, psychology, empathy, cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/cocos-islands",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Cocos Islands",
    description:
      "Journey through Cocos Islands’s emotional identity — The Whisper of Wind, symbolising the nation’s inner psyche and emotional history.",
    url: "https://emotiondeck.com/encyclopedia/cocos-islands",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Cocos Islands - The Whisper of Wind | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Cocos Islands (The Whisper of Wind)",
    description:
      "Discover Cocos Islands’s emotional essence through the archetype The Whisper of Wind.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function CocosIslandsLayout({ children }) {
  return <>{children}</>;
}
