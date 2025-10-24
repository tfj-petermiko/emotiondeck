import GlobalMapClient from "./GlobalMapClient";

export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  alternates: { canonical: "https://emotiondeck.com/globalmap" },

  title: "EmotionDeck Global Map - One Emotion, Many Faces",
  description:
    "Explore the EmotionDeck Global Map - an interactive world of human emotions across cultures, regions, ages, and genders. Discover how emotion unites us worldwide.",

  keywords: [
    "EmotionDeck Global Map",
    "interactive emotion map",
    "world emotions",
    "cross-cultural psychology",
    "emotional diversity",
    "human expression map",
    "global emotion dataset",
    "empathy and emotion",
    "facial expression cultures",
    "emotion perception research",
  ],

  openGraph: {
    title: "EmotionDeck Global Map - One Emotion, Many Faces",
    description:
      "Discover how emotions connect humanity through the interactive EmotionDeck Global Map. Explore cultures, expressions, and global emotional diversity.",
    url: "https://emotiondeck.com/globalmap",
    type: "website",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "EmotionDeck Global Map - One Emotion, Many Faces",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Global Map - Explore Global Emotions",
    description:
      "Explore how emotions differ and connect across cultures with the interactive EmotionDeck Global Map.",
    images: ["https://emotiondeck.com/preview.jpg"],
    creator: "@emotiondeck",
  },
};

export default function Page() {
  return <GlobalMapClient />;
}
