export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck — Phase 2: Advanced Emotional Expressions | Complex Human Emotion Study",
  description:
    "Explore EmotionDeck Phase 2: Advanced Emotional Expressions — a deeper visual journey into complex emotions such as Anxiety, Nostalgia, Confidence, and Tranquillity. Perfect for advanced learning, psychology education, and emotional intelligence research.",
  openGraph: {
    title: "EmotionDeck — Phase 2: Advanced Emotional Expressions",
    description:
      "Discover subtle emotional nuances across cultures, ages, and genders. EmotionDeck Phase 2 expands the human emotional spectrum with realism and depth.",
    url: "https://emotiondeck.com/free/phase-2",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck — Phase 2: Advanced Emotional Expressions",
    description:
      "Study complex emotional states and their visual cues in EmotionDeck Phase 2 — a professional-grade collection for educators, researchers, and advanced learners.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function Phase2Layout({ children }) {
  return <>{children}</>;
}
