export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Quiz 2 — Recognise the Emotion (Phase 2)",
  description:
    "Test your emotional intuition with EmotionDeck Quiz 2. Identify advanced emotions such as Anxiety, Nostalgia, Confidence, and Tranquillity across different ages and cultures. Explore subtle human expressions from the EmotionDeck Phase 2 — Advanced Emotional Expressions Collection.",
  openGraph: {
    title: "EmotionDeck Quiz 2 — Recognise the Emotion (Phase 2)",
    description:
      "Challenge your perception with the EmotionDeck Phase 2 Quiz. Recognise complex emotions across cultures and refine your emotional awareness.",
    url: "https://emotiondeck.com/learn/quizzes/quiz-2",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Quiz 2 — Recognise the Emotion (Phase 2)",
    description:
      "Explore subtle emotional expressions in the EmotionDeck Phase 2 Quiz. Identify advanced emotions like Nostalgia, Confidence, and Tranquillity.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function Quiz2Layout({ children }) {
  return <>{children}</>;
}
