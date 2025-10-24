export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Learn & Grow — Discover the Science of Emotion",
  description:
    "Explore the Learn & Grow section of EmotionDeck — where psychology meets AI. Take emotion recognition quizzes, analyse facial expressions with FACS, and reflect with the Live Emotion Mirror to deepen your emotional understanding.",
  openGraph: {
    title: "EmotionDeck Learn & Grow — Discover the Science of Emotion",
    description:
      "Enhance your emotional intelligence with EmotionDeck’s Learn & Grow modules — quizzes, FACS analyser, and AI-powered Emotion Mirror.",
    url: "https://emotiondeck.com/learn",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Learn & Grow — Discover the Science of Emotion",
    description:
      "Learn to recognise and understand emotions through quizzes, FACS analysis, and the Emotion Mirror — only on EmotionDeck.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function LearnLayout({ children }) {
  return <>{children}</>;
}
