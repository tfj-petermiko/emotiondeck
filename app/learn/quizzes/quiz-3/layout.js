export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Quiz 3 — Recognise the Emotion (Young Adults - Phase 3)",
  description:
    "Test your ability to recognise emotions through realistic black and white portraits of young adults from different regions. Identify core emotions like Joy, Anger, Fear, and Curiosity. Continue your journey in emotional intelligence with EmotionDeck Learn.",
  openGraph: {
    title: "EmotionDeck Quiz 3 — Recognise the Emotion (Young Adults - Phase 3)",
    description:
      "Explore how well you can identify emotions across diverse faces of young adults. Try the next challenge in the EmotionDeck Learn series.",
    url: "https://emotiondeck.com/learn/quizzes/quiz-3",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Quiz 3 — Recognise the Emotion (Young Adults - Phase 3)",
    description:
      "Continue your emotional recognition journey with black and white portraits of young adults. Identify core emotions with EmotionDeck Learn.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function Quiz3Layout({ children }) {
  return <>{children}</>;
}
