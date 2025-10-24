export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Learn & Grow — FACS Emotion Analyzer",
  description:
    "Explore the Facial Action Coding System (FACS) with EmotionDeck. Learn how facial muscles express emotions in real time and understand the science behind every smile, frown, and microexpression.",
  openGraph: {
    title: "EmotionDeck Learn & Grow — FACS Emotion Analyzer",
    description:
      "Discover the science of human emotion through FACS — analyse real-time facial expressions and learn how emotions shape the human face.",
    url: "https://emotiondeck.com/learn/facs",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Learn & Grow — FACS Emotion Analyzer",
    description:
      "Learn how facial muscles express emotions using the Facial Action Coding System — only on EmotionDeck Learn & Grow.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function LearnFacsLayout({ children }) {
  return <>{children}</>;
}
