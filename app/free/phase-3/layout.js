export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck — Phase 3: Young Adults | Advanced Emotion Perception Study",
  description:
    "Explore EmotionDeck Phase 3: Young Adults — 96 ultra-realistic black and white portraits capturing authentic emotional expressions of people in their early twenties. Designed for advanced study, education, and emotional perception research.",
  openGraph: {
    title: "EmotionDeck — Phase 3: Young Adults",
    description:
      "Discover 96 detailed portraits of young adults expressing nuanced human emotions. EmotionDeck Phase 3 expands emotional perception research with realistic imagery for education and professional use.",
    url: "https://emotiondeck.com/free/phase-3",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck — Phase 3: Young Adults",
    description:
      "Explore the next step in emotional perception — EmotionDeck Phase 3: Young Adults. 96 high-resolution portraits capturing authentic human emotions for research and education.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function Phase3Layout({ children }) {
  return <>{children}</>;
}
