export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Quiz 1 — Recognise the Emotion (Phase 1)",
  description:
    "Test your ability to recognise human emotions through AI-generated portraits from the EmotionDeck Free Basic Collection. Each round presents real emotional expressions from diverse cultures — see how accurately you can identify them.",
  openGraph: {
    title: "EmotionDeck Quiz 1 — Recognise the Emotion",
    description:
      "Identify emotions in AI-generated portraits and test your emotional insight with the first EmotionDeck Quiz. Challenge your ability to read emotions across cultures.",
    url: "https://emotiondeck.com/learn/quizzes/quiz-1",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Quiz 1 — Recognise the Emotion",
    description:
      "Discover how well you can recognise emotions in AI-generated portraits. Try the first EmotionDeck Quiz and explore human emotion through visual intelligence.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function Quiz1Layout({ children }) {
  return <>{children}</>;
}
