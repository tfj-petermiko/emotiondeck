export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck — Phase 5: Seniors Collection | Wisdom, Emotion, and the Human Experience",
  description:
    "Explore EmotionDeck Phase 5: Seniors Collection — 300 ultra-realistic black-and-white portraits capturing the emotional richness and wisdom of older adults. A professional visual dataset designed for emotional research, empathy training, and cross-generational understanding.",
  openGraph: {
    title: "EmotionDeck — Phase 5: Seniors Collection",
    description:
      "Discover 300 detailed black-and-white portraits of seniors expressing 50 core emotions. EmotionDeck Phase 5 explores emotional resilience, reflection, and wisdom through authentic human expression.",
    url: "https://emotiondeck.com/free/phase-5",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck — Phase 5: Seniors Collection",
    description:
      "EmotionDeck Phase 5 presents 300 portraits of seniors expressing wisdom, calmness, and emotional depth — expanding emotional research and empathy through visual psychology.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function Phase5Layout({ children }) {
  return <>{children}</>;
}
