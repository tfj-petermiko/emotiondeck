export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  alternates: {
    canonical: "https://emotiondeck.com/pro/phase-5",
  },
  title:
    "EmotionDeck PRO — Phase 5: Seniors Collection | Wisdom, Emotion, and the Human Experience",
  description:
    "Explore EmotionDeck PRO Phase 5: Seniors Collection — 300 ultra-realistic black-and-white portraits capturing the emotional richness and wisdom of older adults. A professional visual dataset designed for emotional research, empathy training, and cross-generational understanding.",
  keywords:
    "EmotionDeck, Seniors Collection, senior emotions, ageing and emotion, emotional intelligence, psychology of ageing, empathy study, black-and-white portraits, visual dataset, human emotion, psychological research, emotional awareness, art and psychology, emotion recognition, generational empathy, emotional expression in ageing",
  openGraph: {
    title: "EmotionDeck PRO — Phase 5: Seniors Collection",
    description:
      "Discover 300 detailed black-and-white portraits of seniors expressing 50 core emotions. EmotionDeck PRO Phase 5 explores emotional resilience, reflection, and wisdom through authentic human expression.",
    url: "https://emotiondeck.com/pro/phase-5",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview-phase5.jpg",
        width: 1200,
        height: 630,
        alt: "EmotionDeck PRO Phase 5 Seniors Collection preview",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck PRO — Phase 5: Seniors Collection",
    description:
      "EmotionDeck PRO Phase 5 presents 300 portraits of seniors expressing wisdom, calmness, and emotional depth — expanding emotional research and empathy through visual psychology.",
    images: ["https://emotiondeck.com/preview-phase5.jpg"],
  },
};

export default function Phase5Layout({ children }) {
  return (
    <div className="relative z-0 overflow-visible min-h-screen bg-neutral-900 text-white font-sans">
      {children}
    </div>
  );
}
