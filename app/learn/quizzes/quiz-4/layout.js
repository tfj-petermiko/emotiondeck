export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Quiz 4 — Global Emotional Spectrum (120 Emotions, 10 Categories)",
  description:
    "Discover the full range of human emotion through 120 black and white portraits across 10 global categories. Train your emotional intelligence with realistic faces representing diverse ages, genders, and cultures. Explore the emotional spectrum of humanity with EmotionDeck Learn.",
  openGraph: {
    title: "EmotionDeck Quiz 4 — Global Emotional Spectrum (120 Emotions, 10 Categories)",
    description:
      "Experience 120 emotions across 10 categories in the most comprehensive EmotionDeck quiz yet. Recognise emotions from realistic portraits of people from all around the world.",
    url: "https://emotiondeck.com/learn/quizzes/quiz-4",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Quiz 4 — Global Emotional Spectrum (120 Emotions, 10 Categories)",
    description:
      "Recognise 120 emotions across 10 global categories. The ultimate EmotionDeck training experience for emotional perception and cultural awareness.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function Quiz4Layout({ children }) {
  return <>{children}</>;
}
