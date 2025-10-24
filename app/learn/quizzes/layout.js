export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Learn & Grow — Emotion Recognition Quizzes",
  description:
    "Test your emotional intelligence with EmotionDeck’s interactive quizzes. Identify emotions from AI-generated portraits and explore how expressions differ across cultures in the Free Basic Collection.",
  openGraph: {
    title: "EmotionDeck Learn & Grow — Emotion Recognition Quizzes",
    description:
      "Sharpen your emotional perception with EmotionDeck quizzes. Recognise emotions in portraits and discover how feelings connect across humanity.",
    url: "https://emotiondeck.com/learn/quizzes",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Learn & Grow — Emotion Recognition Quizzes",
    description:
      "Challenge yourself with EmotionDeck’s emotion recognition quizzes. Test your ability to read emotions through AI-generated portraits.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function LearnQuizzesLayout({ children }) {
  return <>{children}</>;
}
