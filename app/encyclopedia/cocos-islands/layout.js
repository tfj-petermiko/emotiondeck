
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Cocos Islands",
  description: "Cocos Islands' emotional archetype - The Unknown Soul. It whispers of hidden depths, evoking reflection, mystery, and the uncharted realms of human connection.",
  keywords: "Cocos Islands emotion, Whisper of Wind archetype, ocean heart symbolism, emotional culture Cocos, Jungian archetypes, empathy in islands, symbolic breeze meaning, cultural identity ocean, subtle emotional nuances, poetic island psyche, national identity Cocos, heart ocean connection, island emotional symbolism, cultural empathy waves, archetypal wind whispers, psychological island essence, symbolic nature emotions",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/cocos-islands",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Cocos Islands",
    description: "Cocos Islands' emotional archetype - The Unknown Soul. It whispers of hidden depths, evoking reflection, mystery, and the uncharted realms of human connection.",
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
    description: "Cocos Islands' emotional archetype - The Unknown Soul. It whispers of hidden depths, evoking reflection, mystery, and the uncharted realms of human connection.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function CocosIslandsLayout({ children }) {
  return <>{children}</>;
}
