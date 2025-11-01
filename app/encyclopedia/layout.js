export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck - The First Global Emotion Encyclopedia 🌍",
  description:
    "Discover the EmotionDeck Global Emotion Encyclopedia – explore the emotional archetypes, cultural identities, and shared humanity that connect our world.",
  keywords:
    "EmotionDeck Encyclopedia, global emotion map, cultural emotions, human empathy, emotional archetypes, world psychology, emotion research, global atlas, emotion and culture, emotional diversity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia",
  },
  openGraph: {
    title: "EmotionDeck - The First Global Emotion Encyclopedia 🌍",
    description:
      "Explore the world's emotional landscape through archetypes and cultural identity. EmotionDeck presents the First Global Emotion Encyclopedia.",
    url: "https://emotiondeck.com/encyclopedia",
    siteName: "EmotionDeck",
    type: "website",
    locale: "en_GB",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "EmotionDeck - The First Global Emotion Encyclopedia Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck - The First Global Emotion Encyclopedia 🌍",
    description:
      "Discover the emotional essence of nations – explore archetypes and cultural identity in the EmotionDeck Global Encyclopedia.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function EncyclopediaLayout({ children }) {
  return <>{children}</>;
}
