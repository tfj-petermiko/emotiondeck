
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Indonesia",
  description: "Indonesia's emotional archetype - The Unknown Soul. It embodies profound mystery and uncharted depths, reflecting the beauty of hidden emotions and untold stories.",
  keywords: "EmotionDeck Indonesia, The Celestial Weaver, Indonesian mysticism, archipelagic dreams, ancient tides, emotional culture, national identity, Jungian archetypes, symbolism Indonesia, Indonesian empathy, cultural symbolism, tribal emotion, spiritual psychology, mythic narratives, Southeast Asian psyche, emotional heritage, collective unconscious, Indonesian soul",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/indonesia",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Indonesia",
    description: "Indonesia's emotional archetype - The Unknown Soul. It embodies profound mystery and uncharted depths, reflecting the beauty of hidden emotions and untold stories.",
    url: "https://emotiondeck.com/encyclopedia/indonesia",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Indonesia - The Celestial Weaver | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Indonesia (The Celestial Weaver)",
    description: "Indonesia's emotional archetype - The Unknown Soul. It embodies profound mystery and uncharted depths, reflecting the beauty of hidden emotions and untold stories.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function IndonesiaLayout({ children }) {
  return <>{children}</>;
}
