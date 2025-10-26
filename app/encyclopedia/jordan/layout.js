
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Jordan",
  description: "Jordan's emotional archetype - The Unknown Soul. It embodies profound mystery and quiet strength, unveiling depths of human spirit, introspection, and untold stories.",
  keywords: "EmotionDeck Jordan, The Bridge of Light, emotional culture Jordan, Jordanian identity, Jungian archetypes, symbolic passage, hope and shadows, empathy in Jordan, cultural symbolism, emotional psychology, luminous connection, Jordan national psyche, archetypal symbolism, poetic emotion, Middle Eastern identity, emotional resilience, symbolic hope, Jordanian emotional landscape",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/jordan",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Jordan",
    description: "Jordan's emotional archetype - The Unknown Soul. It embodies profound mystery and quiet strength, unveiling depths of human spirit, introspection, and untold stories.",
    url: "https://emotiondeck.com/encyclopedia/jordan",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Jordan - The Bridge of Light | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Jordan (The Bridge of Light)",
    description: "Jordan's emotional archetype - The Unknown Soul. It embodies profound mystery and quiet strength, unveiling depths of human spirit, introspection, and untold stories.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function JordanLayout({ children }) {
  return <>{children}</>;
}
