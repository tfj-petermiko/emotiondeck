export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck — Phase 1: Free Basic Collection | Foundational Emotional Expressions",
  description:
    "Explore EmotionDeck Phase 1: Free Basic Collection — 144 authentic black-and-white portraits capturing the foundational spectrum of human emotion. Designed to help you learn to recognise, interpret, and understand core emotions through mindful observation and visual learning.",
  openGraph: {
    title: "EmotionDeck — Phase 1: Free Basic Collection",
    description:
      "Discover 144 foundational emotional expressions across diverse faces and cultures. EmotionDeck Phase 1 introduces the essential emotions that define the human experience.",
    url: "https://emotiondeck.com/free/phase-1",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck — Phase 1: Free Basic Collection",
    description:
      "Learn to recognise and interpret 144 foundational emotional expressions with EmotionDeck Phase 1 — the Free Basic Collection for personal learning, research, and education.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function Phase1Layout({ children }) {
  return <>{children}</>;
}
