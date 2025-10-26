
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Congo",
  description: "Congo's emotional archetype - The Unknown Soul. It weaves together mystery and depth, reflecting humanity's quest for connection amidst the shadows of existence.",
  keywords: "EmotionDeck Congo, The Eternal Drum, Congolese spirit, emotional resilience, cultural symbolism, Jungian archetypes, African identity, poetic emotion, national psyche, rhythmic heritage, collective empathy, soul of Congo, symbolic rhythms, emotional culture, psychological depth, cultural empathy, ancestral spirit, timeless resilience",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/congo",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Congo",
    description: "Congo's emotional archetype - The Unknown Soul. It weaves together mystery and depth, reflecting humanity's quest for connection amidst the shadows of existence.",
    url: "https://emotiondeck.com/encyclopedia/congo",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Congo - The Eternal Drum | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Congo (The Eternal Drum)",
    description: "Congo's emotional archetype - The Unknown Soul. It weaves together mystery and depth, reflecting humanity's quest for connection amidst the shadows of existence.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function CongoLayout({ children }) {
  return <>{children}</>;
}
